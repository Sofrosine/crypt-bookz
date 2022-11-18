import View from '@components/View';
import {ViewProps} from '@components/View/types';
import React from 'react';
import styles from './styles';

const Divider: React.FC<
  Pick<
    ViewProps,
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginY'
    | 'marginX'
  >
> = ({marginTop, marginBottom, marginLeft, marginRight, marginX, marginY}) => {
  return (
    <View
      style={styles.divider}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginX={marginX}
      marginY={marginY}
    />
  );
};

export default Divider;
