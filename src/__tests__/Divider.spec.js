import React from 'react';
import {render} from '@testing-library/react-native';
import Divider from '@components/Divider';

describe('Test Divider', () => {
  test('should render component', () => {
    const {getByTestId} = render(<Divider />);

    const element = getByTestId('divider');

    expect(element).toBeTruthy();
  });
});
