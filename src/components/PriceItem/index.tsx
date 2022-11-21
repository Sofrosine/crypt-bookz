import GainItem from '@components/GainItem';
import Text from '@components/Text';
import View from '@components/View';
import Flex from '@styles/Flex';
import React from 'react';

const PriceItem: React.FC<PriceItemProps> = ({value, label}) => {
  return (
    <View style={Flex.rowItemsBetweenCenter}>
      <View>
        <Text size={12} family="Inter-Medium">
          {label}
        </Text>
      </View>
      <GainItem value={value} priceChange={{}} />
    </View>
  );
};

export default PriceItem;
