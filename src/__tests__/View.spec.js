import React from 'react';
import {render} from '@testing-library/react-native';

import Color from '@styles/Color';
import View from '@components/View';

describe('Testing View', () => {
  test('has background color', () => {
    const bgColor = Color.BLACK;
    const {getByTestId} = render(<View testID="view" color={bgColor} />);

    const element = getByTestId('view');

    expect(element.props.style[0].backgroundColor).toEqual(bgColor);
  });

  test('has margin', () => {
    const sizeMargin = 12;
    const {getByTestId} = render(<View testID="view" margin={sizeMargin} />);

    const element = getByTestId('view');

    expect(element.props.style[0].margin).toEqual(sizeMargin);
  });

  test('has marginTop', () => {
    const sizeMarginTop = 20;
    const {getByTestId} = render(
      <View testID="view" marginTop={sizeMarginTop} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].marginTop).toEqual(sizeMarginTop);
  });

  test('has marginBottom', () => {
    const sizeMarginBottom = 20;
    const {getByTestId} = render(
      <View testID="view" marginBottom={sizeMarginBottom} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].marginBottom).toEqual(sizeMarginBottom);
  });

  test('has marginLeft', () => {
    const sizeMarginLeft = 20;
    const {getByTestId} = render(
      <View testID="view" marginLeft={sizeMarginLeft} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].marginLeft).toEqual(sizeMarginLeft);
  });

  test('has marginRight', () => {
    const sizeMarginRight = 20;
    const {getByTestId} = render(
      <View testID="view" marginRight={sizeMarginRight} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].marginRight).toEqual(sizeMarginRight);
  });

  test('has marginY', () => {
    const sizeMarginY = 20;
    const {getByTestId} = render(<View testID="view" marginY={sizeMarginY} />);

    const element = getByTestId('view');

    expect(element.props.style[0].marginVertical).toEqual(sizeMarginY);
  });

  test('has marginX', () => {
    const sizeMarginX = 20;
    const {getByTestId} = render(<View testID="view" marginX={sizeMarginX} />);

    const element = getByTestId('view');

    expect(element.props.style[0].marginHorizontal).toEqual(sizeMarginX);
  });

  test('has padding', () => {
    const sizePadding = 20;
    const {getByTestId} = render(<View testID="view" padding={sizePadding} />);

    const element = getByTestId('view');

    expect(element.props.style[0].padding).toEqual(sizePadding);
  });

  test('has paddingTop', () => {
    const sizePaddingTop = 20;
    const {getByTestId} = render(
      <View testID="view" paddingTop={sizePaddingTop} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingTop).toEqual(sizePaddingTop);
  });

  test('has paddingBottom', () => {
    const sizePaddingBottom = 20;
    const {getByTestId} = render(
      <View testID="view" paddingBottom={sizePaddingBottom} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingBottom).toEqual(sizePaddingBottom);
  });

  test('has paddingLeft', () => {
    const sizePaddingLeft = 20;
    const {getByTestId} = render(
      <View testID="view" paddingLeft={sizePaddingLeft} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingLeft).toEqual(sizePaddingLeft);
  });

  test('has paddingRight', () => {
    const sizePaddingRight = 20;
    const {getByTestId} = render(
      <View testID="view" paddingRight={sizePaddingRight} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingRight).toEqual(sizePaddingRight);
  });

  test('has paddingY', () => {
    const sizePaddingY = 20;
    const {getByTestId} = render(
      <View testID="view" paddingY={sizePaddingY} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingVertical).toEqual(sizePaddingY);
  });

  test('has paddingX', () => {
    const sizePaddingX = 20;
    const {getByTestId} = render(
      <View testID="view" paddingX={sizePaddingX} />,
    );

    const element = getByTestId('view');

    expect(element.props.style[0].paddingHorizontal).toEqual(sizePaddingX);
  });
});
