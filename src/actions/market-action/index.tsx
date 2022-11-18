import {ACTION_TYPES} from '@constants';

export const setMarketAction = (data: SupportedCurrency[]) => {
  return {
    type: ACTION_TYPES.SET_MARKET,
    data,
  };
};
