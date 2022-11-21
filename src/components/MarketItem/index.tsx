import GainItem from '@components/GainItem';
import Text from '@components/Text';
import View from '@components/View';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import {currencyConverter} from '@utils';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';

type Props = {
  item: SupportedCurrency;
  onPress: () => void;
};

const MarketItem: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        onPress && onPress();
      }}>
      <View paddingY={12} style={Flex.rowItemsBetweenCenter} paddingX={16}>
        <View style={Flex.rowItemsCenter}>
          <SvgUri
            uri={item?.logo}
            color={item?.color || Color.BLACK}
            height="24"
            width="24"
          />
          <View marginLeft={12}>
            <Text size={14} family="Inter-Medium">
              {item?.name}
            </Text>
            <View marginBottom={4} />
            <Text color={Color.GREY}>{item?.currencyGroup}</Text>
          </View>
        </View>
        <View style={Flex.itemsEnd}>
          <Text size={14} family="Inter-Medium">
            {currencyConverter(item?.priceChange?.latestPrice || 0)}
          </Text>
          <GainItem
            value={Number(item?.priceChange?.day)}
            priceChange={item?.priceChange}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketItem;
