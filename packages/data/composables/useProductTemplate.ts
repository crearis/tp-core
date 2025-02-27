/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AttributeValue, Category, Product, ProductTemplateListResponse, QueryProductsArgs } from '../graphql';
import { QueryName } from '../server/queries';
import { uniqBy } from 'lodash-es';

export const useProductTemplate = (categoryId: string) => {

  const loading = ref(false);
  const totalItems = ref(0);
  const productTemplateList = useState<[]>(`products-category${categoryId}`, () => ([]));
  const attributes = useState<AttributeValue[]>(`attributes${categoryId}`, () => ([]));
  const categories = useState<Category[]>(`categories-from-product-${categoryId}`, () => ([]));

  const loadProductTemplateList = async (params: QueryProductsArgs) => {
    loading.value = true;
    try {
      const {data} = await useAsyncData(`product-template-list-${categoryId}`, async () => {
        const { data } = await useSdk().odoo.query<QueryProductsArgs, ProductTemplateListResponse>({queryName: QueryName.GetProductTemplateList }, params);
        return data.value;
      });

      if (data?.value?.products) {
        productTemplateList.value = data.value?.products?.products || [];
        attributes.value = data.value.products?.attributeValues || [];
        totalItems.value = data.value?.products?.totalCount || 0;
        categories.value = uniqBy(data.value.products?.products?.map(product => product?.categories || []).flat(), 'id');
      }
    } finally {
      loading.value = false;
    }
  };

  const organizedAttributes = computed(() => {
    if (!productTemplateList.value) return [];

    const data: any = [];

    attributes.value?.forEach((item: any) => {
      const current = data.find(
        (itemData: { attributeName: any }) =>
          itemData.attributeName === item.attribute?.name
      );

      if (!current) {
        data.push({
          id: String(item.attribute.id),
          label: item.attribute?.name,
          attributeName: item.attribute?.name,
          type: item.displayType,
          count: 0,
          options: [],
        });
      }

      data
        .find(
          (itemData: { attributeName: any }) =>
            itemData.attributeName === item.attribute?.name
        )
        .options.push({
          id: String(item.search),
          value: item.id,
          label: item.name,
          metadata: item.search,
          htmlColor: item.htmlColor,
        });
    });

    return data;
  });

  return {
    loading,
    loadProductTemplateList,
    productTemplateList,
    organizedAttributes,
    totalItems,
    categories
  };
};
