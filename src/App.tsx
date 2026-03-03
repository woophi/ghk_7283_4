import { BottomSheet } from '@alfalab/core-components/bottom-sheet/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Status } from '@alfalab/core-components/status/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ChevronRightShiftRightMIcon } from '@alfalab/icons-glyph/ChevronRightShiftRightMIcon';
import { useEffect } from 'react';
import { LS, LSKeys } from './ls';
import { productsData } from './productsData';
import { appSt } from './style.css';

export const App = () => {
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
          window.location.replace('alfabank://open_new_product');
        }}
        contentClassName={appSt.btmContent}
        title="Накопления"
        hasCloser
        stickyHeader
        initialHeight="full"
      >
        <div className={appSt.container}>
          {productsData.map(product => (
            <PureCell
              onClick={() => {
                handleProductClick(product.link, product.title);
              }}
              key={product.title}
            >
              <PureCell.Content>
                <PureCell.Main>
                  <div className={appSt.row}>
                    <Typography.Text
                      view="primary-medium"
                      color="primary"
                      style={{ maxWidth: product.special ? '208px' : undefined }}
                    >
                      {product.title}
                    </Typography.Text>
                    {product.special && (
                      <Status size={24} uppercase={false} shape="rounded">
                        <strong>Новое</strong>
                      </Status>
                    )}
                  </div>
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
