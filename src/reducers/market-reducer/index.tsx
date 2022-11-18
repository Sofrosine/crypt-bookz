import {ACTION_TYPES, DUMMY_MARKET_DATA} from '@constants';

export const initialMarketState: {data: SupportedCurrency[]} = {
  data: DUMMY_MARKET_DATA,
};

export const marketReducer = (
  state: any,
  action: {data: SupportedCurrency[]; type: string},
) => {
  switch (action.type) {
    case ACTION_TYPES.SET_MARKET:
      return {...state, data: action.data};
    default:
      return state;
  }
};
