import {ACTION_TYPES} from '@constants';

export const resetFilterAction = () => {
  return {
    type: ACTION_TYPES.RESET_FILTER,
  };
};

export const setFilterAction = (data: FilterType) => {
  return {
    type: ACTION_TYPES.SET_FILTER,
    data,
  };
};
