import FilterItem from '@components/FilterItem';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {Store} from '@reducers';
import {initialFilterState} from '@reducers/filter-reducer';
import Color from '@styles/Color';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

const item = {icon: faStar, type: 'new', title: 'New'};
let reducerDummy = {
  filter: [{data: {sort: 'asc', name: 'new'}}, () => {}],
};

describe('Testing FilterItem', () => {
  test('should render component with asc sort and same filter name', () => {
    const {getByTestId} = render(
      <Store.Provider value={reducerDummy}>
        <FilterItem item={item} />
      </Store.Provider>,
    );

    const element = getByTestId(`filter-item-${item?.type}`);

    fireEvent.press(element);
    const parentStyle = element.props.style;
    const upElement = element.props.children[0][1].props.children[0].props;
    const downElement = element.props.children[0][1].props.children[1].props;

    expect(parentStyle?.backgroundColor).toEqual(Color.LIGHT_BLUE_04);
    expect(upElement?.color).toEqual(Color.BLACK);
    expect(downElement?.color).toEqual(Color.GREY_2);
  });

  test('should render component with desc sort and same filter name', () => {
    reducerDummy = {
      filter: [{data: {sort: 'desc', name: 'new'}}, () => {}],
    };
    const {getByTestId} = render(
      <Store.Provider value={reducerDummy}>
        <FilterItem item={item} />
      </Store.Provider>,
    );

    const element = getByTestId(`filter-item-${item?.type}`);

    fireEvent.press(element);

    expect(element).toBeTruthy();
  });

  test('should render component with desc sort and different filter name', () => {
    reducerDummy = {
      filter: [{data: {sort: 'desc', name: 'gain'}}, () => {}],
    };
    const {getByTestId} = render(
      <Store.Provider value={reducerDummy}>
        <FilterItem item={item} />
      </Store.Provider>,
    );

    const element = getByTestId(`filter-item-${item?.type}`);

    fireEvent.press(element);

    expect(element).toBeTruthy();
  });

  test('should render component with NO sort and have same filter name and item type', () => {
    reducerDummy = {
      filter: [{data: {name: 'new'}}, () => {}],
    };
    const {getByTestId} = render(
      <Store.Provider value={reducerDummy}>
        <FilterItem item={item} />
      </Store.Provider>,
    );

    const element = getByTestId(`filter-item-${item?.type}`);

    fireEvent.press(element);

    expect(element).toBeTruthy();
  });

  test('should render component with NO active filter', () => {
    reducerDummy = {
      filter: [{data: {}}, () => {}],
    };
    const {getByTestId} = render(
      <Store.Provider value={reducerDummy}>
        <FilterItem item={item} />
      </Store.Provider>,
    );

    const element = getByTestId(`filter-item-${item?.type}`);

    fireEvent.press(element);

    expect(element).toBeTruthy();
  });
});
