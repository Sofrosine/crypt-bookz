import MarketList from '@components/MarketList';
import View from '@components/View';
import {storiesOf} from '@storybook/react-native';
import Color from '@styles/Color';
import React from 'react';
import {Alert, StyleSheet} from 'react-native';

const dummyMarketItem: SupportedCurrency[] = [
  {
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
  },
  {
    color: '#15A57C',
    currencyGroup: 'USDT',
    currencySymbol: 'USDT',
    decimal_point: 6,
    listingDate: '2020-03-11T16:09:42.000Z',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_USDT.svg',
    name: 'Tether',
    priceChange: {
      day: '-0.02',
      latestPrice: '15679',
      month: '0.80',
      pair: 'usdt/idr',
      week: '0.80',
      year: '9.61',
    },
  },
  {
    color: '#9011FE',
    currencyGroup: 'ETH',
    currencySymbol: 'ETH',
    decimal_point: 18,
    listingDate: '2020-03-11T15:31:48.000Z',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg',
    name: 'Ethereum',
    priceChange: {
      day: '-2.94',
      latestPrice: '18438483',
      month: '-7.75',
      pair: 'eth/idr',
      week: '-4.12',
      year: '-70.84',
    },
  },
];

storiesOf('MarketList', module)
  .add('NORMAL', () => (
    <MarketList
      loading={false}
      onRefresh={() => Alert.alert('Refreshed')}
      data={dummyMarketItem}
    />
  ))
  .addDecorator(story => (
    <View style={styles.container} margin={20}>
      {story()}
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.GREY_2,
    flex: 1,
  },
});
