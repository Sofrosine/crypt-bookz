import {ACTION_TYPES} from '@constants';

export const initialFilterState: {data: Partial<FilterType>} = {
  data: {},
};

export const filterReducer = (
  state: any,
  action: {data: FilterType; type: string},
) => {
  switch (action.type) {
    case ACTION_TYPES.RESET_FILTER:
      return {data: {}};
    case ACTION_TYPES.SET_FILTER:
      return {...state, data: action.data};
    default:
      return state;
  }
};
