import {ViewStyle} from 'react-native';

const itemsCenter: ViewStyle = {
  alignItems: 'center',
};

const rowItemsCenter: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
};

const rowItemsBetweenCenter: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const flex1: ViewStyle = {
  flex: 1,
};

const itemsEnd: ViewStyle = {
  alignItems: 'flex-end',
};

export default {
  itemsCenter,
  rowItemsCenter,
  flex1,
  rowItemsBetweenCenter,
  itemsEnd,
};
