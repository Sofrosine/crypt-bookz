import {useQuery} from 'react-query';

import API_URL from '@constants/API_URL';
import {get} from '@services';

export default function useGetPriceChange() {
  return useQuery(['priceChanges'], async ({signal}) => {
    const response = await get(API_URL.PRICE_CHANGES, {signal});

    return response?.payload || [];
  });
}
