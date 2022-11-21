import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {
  faChartBar,
  faPercentage,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons';

export const DUMMY_MARKET_DATA: SupportedCurrency[] = [
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
  {
    color: '',
    currencyGroup: '',
    currencySymbol: '',
    decimal_point: 0,
    listingDate: '',
    logo: '',
    name: '',
  },
];

export const FILTER_DATA: {
  icon: IconDefinition;
  type: FilterName;
  title: string;
}[] = [
  {icon: faStar, type: 'new', title: 'New'},
  {icon: faChartBar, type: 'name', title: 'Name'},
  {icon: faPercentage, type: 'gain', title: 'Gainers'},
  {icon: faSackDollar, type: 'price', title: 'Price'},
];

export const MODAL_DETAIL_DATA: {value: keyof PriceChange; label: string}[] = [
  {
    value: 'day',
    label: '24 HOURS',
  },
  {
    value: 'week',
    label: '1 WEEK',
  },
  {
    value: 'month',
    label: '1 MONTH',
  },
  {
    value: 'year',
    label: '1 YEAR',
  },
];

export {default as ACTION_TYPES} from './ACTION_TYPES';
export {default as API_URL} from './API_URL';
