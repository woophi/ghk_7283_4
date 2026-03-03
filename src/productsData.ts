export type ProductItem = {
  title: string;
  subtitle: string;
  link: string;
  children?: ProductItem[];
};

export const productsData: ProductItem[] = [
  {
    title: 'Накопительный Альфа-Счёт',
    subtitle: 'До 13,5% годовых — выгодная ставка для ваших накоплений',
    link: 'alfabank://webFeature?type=recommendation&url=https%3A%2F%2Fweb.alfabank.ru%2Fsdui%2F%3Fendpoint%3Dv1%252Fdeposit-view%252Fshowcase%253Fproduct%253Daccount%26source=OPEN_NEW_PRODUCT%26screenName%3DShowcase',
  },
  {
    title: 'Альфа-Вклад',
    subtitle: 'До 15,11% годовых в рублях',
    link: 'alfabank://webFeature?type=recommendation&url=https%3A%2F%2Fweb.alfabank.ru%2Fopen-account%2Fopen-deposit?source=INVEST_WIDGET',
  },
  {
    title: 'Копилка для зарплаты',
    subtitle: 'Можно откладывать от 5% дохода',
    link: 'alfabank://webFeature?type=moneyBox&url=https://online.alfabank.ru/mobile-money-box/',
  },
  {
    title: 'Новые сбережения',
    subtitle: '3 новых продукта для накоплений',
    link: '',
    children: [
      {
        title: 'А-Счёт',
        subtitle: 'Простой способ накопить',
        link: 'alfabank://multistep-route?version=2&fromModule=FORM&alias=brokerage-account-open-alias&prefilledDataID=investbox',
      },
      {
        title: 'А-Вклад',
        subtitle: 'До 14,5% годовых с защитой капитала',
        link: 'alfabank://webFeature?type=recommendation&url=https%3A%2F%2Fweb.alfabank.ru%2Fsdui%2F%3Fendpoint%3Dv1%252Fdeposit-view%252Fshowcase%253Fproduct%253Ddeposit%26source=OPEN_NEW_PRODUCT%26screenName%3DShowcase',
      },
      {
        title: 'Программа долгосрочных сбережений',
        subtitle: 'Надёжный способ накопить с поддержкой государства',
        link: 'alfabank://sdui_screen?fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-long-term-savings-view/products/1001',
      },
    ],
  },

  {
    title: 'Мои цели',
    subtitle: 'Поставьте цель, а мы поможем накопить',
    link: 'alfabank:///goals',
  },
  {
    title: 'Золотая копилка',
    subtitle: 'Для покупки золота, серебра, платины и палладия',
    link: 'alfabank://webFeature?type=recommendation&url=https%3A%2F%2Fweb.alfabank.ru%2Fsdui%2F%3Fendpoint%3Dv1%2Fmetal-account%2Fmetals%2Fshowcase%3Fversion%3Doms-showcase-version-a',
  },
  {
    title: 'Инвесткопилка',
    subtitle: 'Деньги инвестируются сами',
    link: 'alfabank://multistep-route?version=2&fromModule=FORM&alias=brokerage-account-open-alias&prefilledDataID=investbox',
  },
  {
    title: 'Сейф',
    subtitle: 'Для хранения денег, документов, ценностей',
    link: 'alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=safebox-reservation&version=2&source=products',
  },
];
