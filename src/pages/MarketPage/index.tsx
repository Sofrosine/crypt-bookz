import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {setMarketAction} from '@actions';
import FilterList from '@components/FilterList';
import MarketList from '@components/MarketList';
import View from '@components/View';
import useGetCurrency from '@queries/currency/useGetCurrency';
import useGetPriceChange from '@queries/price/useGetPriceChange';
import {Store} from '@reducers';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import {resetFilterAction} from '@actions/filter-action';
import {DUMMY_MARKET_DATA} from '@constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HeaderSearch from '@components/HeaderSearch';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MarketPage'>;
};

const MarketPage: React.FC<Props> = ({navigation}) => {
  const {market, filter} = useContext(Store);
  const [marketData, setMarketData] = market;
  const [filterData, setFilterData] = filter;

  const {
    data: currencyData,
    isFetching: currencyFetching,
    refetch: refetchCurrency,
  } = useGetCurrency();
  const {
    data: priceChangeData,
    isFetching: priceChangeFetching,
    refetch: refetchPriceChange,
  } = useGetPriceChange();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSearch
          onChangeText={val => {
            combineCurrencyPrice(val);
            if (filterData?.data?.name) {
              setFilterData(resetFilterAction());
            }
          }}
        />
      ),
    });
  });

  useEffect(() => {
    if (currencyData?.length > 0 && priceChangeData?.length > 0) {
      combineCurrencyPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyData, priceChangeData]);

  useEffect(() => {
    if (currencyData?.length > 0 && priceChangeData?.length > 0) {
      handleFilterData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  const combineCurrencyPrice = (searchVal?: string) => {
    let arr = [];
    if (searchVal) {
      arr = currencyData
        ?.filter((val: SupportedCurrency) =>
          val?.name?.toLowerCase()?.includes(searchVal?.toLowerCase()),
        )
        .map((val: any) => {
          return {
            ...val,
            priceChange: priceChangeData?.filter(
              (priceChangeVal: any) =>
                priceChangeVal?.pair?.split('/')[0] ===
                val?.currencyGroup?.toLowerCase(),
            )[0],
          };
        });
    } else {
      arr = currencyData?.map((val: any) => {
        return {
          ...val,
          priceChange: priceChangeData?.filter(
            (priceChangeVal: any) =>
              priceChangeVal?.pair?.split('/')[0] ===
              val?.currencyGroup?.toLowerCase(),
          )[0],
        };
      });
    }

    setMarketData(setMarketAction(arr));
  };

  const handleFilterData = () => {
    if (filterData?.data?.name) {
      let arr = [...marketData?.data];
      if (filterData?.data?.name === 'new') {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          return (
            new Date(
              filterData?.data?.sort === 'desc'
                ? b?.listingDate
                : a?.listingDate,
            ).getTime() -
            new Date(
              filterData?.data?.sort === 'desc'
                ? a?.listingDate
                : b?.listingDate,
            ).getTime()
          );
        });
      } else if (filterData?.data?.name === 'name') {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === 'asc') {
            return a.name?.localeCompare(b.name);
          } else {
            return b.name?.localeCompare(a.name);
          }
        });
      } else if (filterData?.data?.name === 'gain') {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === 'asc') {
            return Number(a?.priceChange?.day) - Number(b?.priceChange?.day);
          } else {
            return Number(b?.priceChange?.day) - Number(a?.priceChange?.day);
          }
        });
      } else if (filterData?.data?.name === 'price') {
        arr.sort((a: SupportedCurrency, b: SupportedCurrency) => {
          if (filterData?.data?.sort === 'asc') {
            return (
              Number(a?.priceChange?.latestPrice) -
              Number(b?.priceChange?.latestPrice)
            );
          } else {
            return (
              Number(b?.priceChange?.latestPrice) -
              Number(a?.priceChange?.latestPrice)
            );
          }
        });
      }
      setMarketData(setMarketAction(arr));
    } else {
      combineCurrencyPrice();
    }
  };

  return (
    <View style={Flex.flex1} color={Color.WHITE}>
      <View style={Flex.rowItemsCenter}>
        <FilterList />
      </View>
      <MarketList
        data={marketData?.data}
        loading={currencyFetching || priceChangeFetching}
        onRefresh={async onSuccess => {
          setMarketData(setMarketAction(DUMMY_MARKET_DATA));
          await refetchPriceChange();
          await refetchCurrency();
          setFilterData(resetFilterAction());
          onSuccess();
        }}
      />
    </View>
  );
};

export default MarketPage;
