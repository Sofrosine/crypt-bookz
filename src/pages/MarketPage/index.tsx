import MarketList from '@components/MarketList';
import View from '@components/View';
import {DUMMY_MARKET_DATA} from '@constants';
import useGetCurrency from '@queries/currency/useGetCurrency';
import useGetPriceChange from '@queries/price/useGetPriceChange';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import React, {useEffect, useState} from 'react';

const MarketPage = () => {
  const [data, setData] = useState<SupportedCurrency[]>(DUMMY_MARKET_DATA);
  const [isLoading, setLoading] = useState(true);

  const {data: currencyData} = useGetCurrency();
  const {data: priceChangeData} = useGetPriceChange();

  useEffect(() => {
    if (currencyData?.length > 0 && priceChangeData?.length > 0) {
      filterCurrencyPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyData, priceChangeData]);

  const filterCurrencyPrice = () => {
    const arr = currencyData.map((val: any) => {
      return {
        ...val,
        priceChange: priceChangeData?.filter(
          (priceChangeVal: any) =>
            priceChangeVal?.pair?.split('/')[0] ===
            val?.currencyGroup?.toLowerCase(),
        )[0],
      };
    });
    setData(arr);
    setLoading(false);
  };

  return (
    <View style={Flex.flex1} color={Color.WHITE}>
      <MarketList data={data} loading={isLoading} />
    </View>
  );
};

export default MarketPage;
