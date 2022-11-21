import Text from '@components/Text';
import View from '@components/View';
import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import React from 'react';
import styles from './styles';

type Props = {
  priceChange?: Partial<PriceChange>;
  value: number;
};

const GainItem: React.FC<Props> = ({priceChange, value}) => {
  return (
    <View marginTop={4} style={Flex.rowItemsCenter}>
      {value === 0 || !priceChange ? (
        <View />
      ) : (
        <FontAwesomeIcon
          color={value < 0 ? Color.RED : Color.GREEN}
          size={20}
          icon={value < 0 ? faSortDown : faSortUp}
          style={value < 0 ? styles.sortIconBottom : styles.sortIconTop}
        />
      )}
      <Text
        family="Inter-Medium"
        color={
          value < 0
            ? Color.RED
            : value === 0 || !priceChange
            ? Color.GREY
            : Color.GREEN
        }>
        {value || 0}%
      </Text>
    </View>
  );
};

export default GainItem;
