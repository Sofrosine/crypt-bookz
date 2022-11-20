import MarketItem from '@components/MarketItem';
import View from '@components/View';
import {storiesOf} from '@storybook/react-native';
import Color from '@styles/Color';
import React from 'react';
import {StyleSheet} from 'react-native';

const dummyMarketItem: SupportedCurrency = {
  color: '#F78B1A',
  currencyGroup: 'BTC',
  currencySymbol: 'BTC',
  decimal_point: 8,
  listingDate: '2020-03-11T15:13:52.000Z',
  logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
  name: 'Bitcoin',
  priceChange: {
    day: '-0.48',
    latestPrice: '260196644',
    month: '-12.42',
    pair: 'btc/idr',
    week: '0.62',
    year: '-69.59',
  },
  wallets: [
    {
      blockchain: 'Bitcoin',
      blockchainName: 'Bitcoin',
      currencyGroup: 'BTC',
      decimal_point: 8,
      explorer: 'https://explorer.bitcoin.com/btc/tx/',
      listingDate: '2020-09-15T09:43:42.000Z',
      logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg',
      tokenSymbol: 'BTC',
      tokenType: 'Bitcoin',
    },
  ],
};

storiesOf('MarketItem', module)
  .add('NORMAL', () => <MarketItem item={dummyMarketItem} />)
  .addDecorator(story => (
    <View style={styles.container} margin={20}>
      {story()}
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.GREY_2,
  },
});
