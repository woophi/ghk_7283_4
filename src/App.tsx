import { BottomSheet } from '@alfalab/core-components/bottom-sheet/cssm';
import { Collapse } from '@alfalab/core-components/collapse/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { StatusBadge } from '@alfalab/core-components/status-badge';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronRightShiftRightMIcon } from '@alfalab/icons-glyph/ChevronRightShiftRightMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { useEffect, useState } from 'react';
import { LS, LSKeys } from './ls';
import { productsData } from './productsData';
import { appSt } from './style.css';

export const App = () => {
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  const targetProduct = productsData.find(product => product.children)!;

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const handleProductClick = (link: string, title: string) => {
    window.gtag('event', '7283_click_product', { var: 'var4', product: title });
    window.location.replace(link);
  };

  return (
    <>
      <BottomSheet
        open={true}
        onClose={() => {
          window.gtag('event', '7283_exit_click', { var: 'var4' });
          window.location.replace('https://alfabank.ru/');
        }}
        contentClassName={appSt.btmContent}
        title="Накопления"
        hasCloser
        stickyHeader
        initialHeight="full"
      >
        <div className={appSt.container}>
          {productsData.slice(0, 3).map(product => (
            <PureCell
              onClick={() => {
                handleProductClick(product.link, product.title);
              }}
              key={product.title}
            >
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium" color="primary">
                    {product.title}
                  </Typography.Text>
                  <Typography.Text view="primary-small" color="secondary">
                    {product.subtitle}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Graphics verticalAlign="center">
                <ChevronRightShiftRightMIcon color="#B8B9C0" />
              </PureCell.Graphics>
            </PureCell>
          ))}
          <PureCell
            onClick={() => {
              setCollapsedItem(prev => {
                if (prev.includes(String(targetProduct.title))) {
                  return prev.filter(item => item !== String(targetProduct.title));
                } else {
                  return [...prev, String(targetProduct.title)];
                }
              });
            }}
          >
            <PureCell.Content>
              <PureCell.Main>
                <div className={appSt.row}>
                  <Typography.Text view="primary-medium" color="primary">
                    {targetProduct.title}
                  </Typography.Text>
                  <StatusBadge
                    view="negative-block"
                    size={24}
                    customIcons={{
                      'negative-block': {
                        '24': () => <>3</>,
                      },
                    }}
                  />
                </div>
                <Typography.Text view="primary-small" color="secondary">
                  {targetProduct.subtitle}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Graphics verticalAlign="center">
              {collapsedItems.includes(String(targetProduct.title)) ? (
                <ChevronUpMIcon color="#000000" />
              ) : (
                <ChevronDownMIcon color="#B8B9C0" />
              )}
            </PureCell.Graphics>
          </PureCell>
        </div>
        <Collapse expanded={collapsedItems.includes(String(targetProduct.title))}>
          <div className={appSt.container} style={{ padding: '1rem 40px', backgroundColor: '#F2F3F5' }}>
            {targetProduct.children?.map(answerPart => (
              <PureCell
                onClick={() => {
                  handleProductClick(answerPart.link, answerPart.title);
                }}
                key={answerPart.title}
              >
                <PureCell.Content>
                  <PureCell.Main>
                    <Typography.Text view="primary-medium" color="primary">
                      {answerPart.title}
                    </Typography.Text>
                    <Typography.Text view="primary-small" color="secondary">
                      {answerPart.subtitle}
                    </Typography.Text>
                  </PureCell.Main>
                </PureCell.Content>
                <PureCell.Graphics verticalAlign="center">
                  <ChevronRightShiftRightMIcon color="#B8B9C0" />
                </PureCell.Graphics>
              </PureCell>
            ))}
          </div>
        </Collapse>
        <div className={appSt.container}>
          {productsData.slice(4).map(product => (
            <PureCell
              onClick={() => {
                handleProductClick(product.link, product.title);
              }}
              key={product.title}
            >
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium" color="primary">
                    {product.title}
                  </Typography.Text>
                  <Typography.Text view="primary-small" color="secondary">
                    {product.subtitle}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Graphics verticalAlign="center">
                <ChevronRightShiftRightMIcon color="#B8B9C0" />
              </PureCell.Graphics>
            </PureCell>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};
