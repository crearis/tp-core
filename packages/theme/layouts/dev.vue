<template>
  <DevNavbar filled>
  </DevNavbar>
  <NarrowContainer v-if="breadcrumbs">
    <div class="p-4 md:px-0">
      <LazyUiBreadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
  </NarrowContainer>
  <main>
    <slot />
  </main>
  <NuxtLazyHydrate when-idle>
    <SfModal
      v-model="isSearchModalOpen"
      class="w-full h-full z-50"
      tag="section"
      role="dialog"
      aria-labelledby="search-modal-title"
    >
      <header class="mb-4">
        <SfButton square variant="tertiary" class="absolute right-4 top-2" @click="searchModalClose">
          <SfIconClose class="text-neutral-500" />
        </SfButton>
        <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
          {{ $t('search') }}
        </h3>
      </header>
      <UiSearch :close="searchModalClose" />
    </SfModal>
  </NuxtLazyHydrate>
</template>

<script setup lang="ts">
import {
  SfBadge,
  SfButton,
  SfIconExpandMore,
  SfIconShoppingCart,
  SfIconClose,
  SfIconSearch,
  SfIconPerson,
  SfDropdown,
  SfListItem,
  SfModal,
  useDisclosure,
} from '@crearis/vue';
import type { DefaultLayoutProps } from './types';

defineProps<DefaultLayoutProps>();

const { isOpen: isAccountDropdownOpen, toggle: accountDropdownToggle } = useDisclosure();
const { isOpen: isSearchModalOpen, open: searchModalOpen, close: searchModalClose } = useDisclosure();
const { fetchCart, data: cart } = useSfCart();
const { fetchCustomer, data: account } = useCustomer();

fetchCart();
fetchCustomer();
usePageTitle();

const cartLineItemsCount = computed(
  () => cart.value?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0,
);

const accountDropdown = [
  {
    label: 'account.heading',
    link: paths.account,
  },
  {
    label: 'account.ordersAndReturns.section.myOrders',
    link: paths.accountMyOrders,
  },
  {
    label: 'account.ordersAndReturns.section.returns',
    link: paths.accountReturns,
  },
  {
    label: 'account.logout',
    link: '/',
  },
];
const NuxtLink = resolveComponent('NuxtLink');
</script>
