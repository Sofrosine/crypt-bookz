import React from 'react';
import {Text as TextNative, TextStyle} from 'react-native';
import Color from '@styles/Color';
import {getSize} from '@utils';
// styles
import styles from './styles';

const getFontFamily = (family?: FontFamily) => {
  switch (family) {
    case 'Inter-Bold':
      return styles.interBold;
    case 'Inter-SemiBold':
      return styles.interSemiBold;
    case 'Inter-Medium':
      return styles.interMedium;
    case 'Inter-Regular':
      return styles.interRegular;
    case 'Inter-Thin':
      return styles.interThin;
    case 'Inter-Light':
      return styles.interLight;

    default:
      return styles.interRegular;
  }
};

type TextDecorationProps =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

type TextProps = {
  testID?: string;
  children: any;
  style?: TextStyle;
  color?: string;
  family?: FontFamily;
  size?: number;
  decoration?: TextDecorationProps;
  numberOfLines?: number;
  lineHeight?: number;
};

type Props = TextNative['props'] & TextProps;

const Text: React.FC<Props> = props => {
  const {
    testID,
    children,
    style,
    color,
    family,
    size,
    decoration,
    numberOfLines,
    lineHeight,
    ...rest
  } = props;
  const font = getFontFamily(family);

  return (
    <TextNative
      testID={testID}
      accessibilityLabel={testID}
      numberOfLines={numberOfLines}
      {...rest}
      style={[
        font,
        {
          color,
          fontSize: size && getSize(size),
          textDecorationLine: decoration,
          lineHeight,
        },
        style,
      ]}>
      {children}
    </TextNative>
  );
};

Text.defaultProps = {
  family: 'Inter-Regular',
  color: Color.BLACK,
  children: '',
  size: 12,
  testID: 'text',
  decoration: 'none',
};

export default React.memo<Props>(Text);
