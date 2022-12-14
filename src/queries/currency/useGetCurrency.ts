import {useQuery} from 'react-query';

import {API_URL} from '@constants';
import {get} from '@services';

export default function useGetCurrency() {
  return useQuery(
    ['supportedCurrencies'],
    async ({signal}) => {
      const response = await get(API_URL.SUPPORTED_CURRENCIES, {signal});

      return response?.payload || [];
    },
    {
      cacheTime: 0,
    },
  );
}
