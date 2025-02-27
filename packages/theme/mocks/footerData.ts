import {
  SfIconCall,
  SfIconContactSupport,
  SfIconFacebook,
  SfIconHelp,
  SfIconInstagram,
  SfIconPinterest,
  SfIconTwitter,
  SfIconYoutube,
} from '@crearis/vue';

export const categories = [
  {
    key: 'howToOrder',
    subcategories: [
      {
        key: 'checkoutAndPayment',
        link: '/',
      },
      {
        key: 'workshopsDisposition',
        link: '/',
      },
      {
        key: 'projectSignup',
        link: '/',
      },
      {
        key: 'paymentMethods',
        link: '/',
      },
      {
        key: 'orderPickup',
        link: '/',
      },
      {
        key: 'purchaseStatus',
        link: '/',
      },
      {
        key: 'trackOrders',
        link: '/',
      },
      {
        key: 'returns',
        link: '/',
      },
    ],
  },
  {
    key: 'help',
    subcategories: [
      {
        key: 'helpCenter',
        link: '/',
      },
      {
        key: 'securityFraud',
        link: '/',
      },
      {
        key: 'feedback',
        link: '/',
      },
      {
        key: 'contact',
        link: '/',
      },
    ],
  },
  {
    key: 'services',
    subcategories: [
      {
        key: 'giftCards',
        link: '/',
      },
      {
        key: 'storeLocator',
        link: '/',
      },
      {
        key: 'clickCollect',
        link: '/',
      },
      {
        key: 'sameDayDelivery',
        link: '/',
      },
      {
        key: 'shippingDelivery',
        link: '/',
      },
      {
        key: 'couponsDiscounts',
        link: '/',
      },
      {
        key: 'newsletter',
        link: '/',
      },
    ],
  },
  {
    key: 'about',
    subcategories: [
      {
        key: 'aboutUs',
        link: '/',
      },
      {
        key: 'jobs',
        link: '/',
      },
      {
        key: 'pressCenter',
        link: '/',
      },
      {
        key: 'affiliateProgram',
        link: '/',
      },
      {
        key: 'suppliers',
        link: '/',
      },
    ],
  },
];
export const socialMedia = [
  {
    label: 'Facebook',
    link: '/',
    icon: SfIconFacebook,
  },
  {
    label: 'Twitter',
    link: '/',
    icon: SfIconTwitter,
  },
  {
    label: 'Instagram',
    link: '/',
    icon: SfIconInstagram,
  },
  {
    label: 'Pinterest',
    link: '/',
    icon: SfIconPinterest,
  },
  {
    label: 'Youtube',
    link: '/',
    icon: SfIconYoutube,
  },
];
export const contactOptions = [
  {
    key: 'helpCenter',
    link: '/admin',
    details: ['description'],
    icon: SfIconHelp,
  },
  {
    key: 'liveChat',
    link: '/',
    details: ['openingHours-1', 'openingHours-2'],
    icon: SfIconContactSupport,
  },
  {
    key: 'phone',
    link: '/',
    details: ['openingHours-1', 'openingHours-2'],
    icon: SfIconCall,
  },
];
export const bottomLinks = [
  {
    key: 'terms',
    link: '/',
  },
  {
    key: 'privacyPolicy',
    link: '/',
  },
];
export const companyName = `© ${new Date().getFullYear()} Theaterpedia e.V.`;
