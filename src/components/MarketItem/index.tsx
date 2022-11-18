import Text from '@components/Text';
import View from '@components/View';
import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import {currencyConverter} from '@utils';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import styles from './styles';

type Props = {
  item: SupportedCurrency;
};

const MarketItem: React.FC<Props> = ({item}) => {
  return (
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
        <View marginTop={4} style={Flex.rowItemsCenter}>
          {Number(item?.priceChange?.day) === 0 || !item?.priceChange ? (
            <View />
          ) : (
            <FontAwesomeIcon
              color={
                Number(item?.priceChange?.day) < 0 ? Color.RED : Color.GREEN
              }
              size={20}
              icon={Number(item?.priceChange?.day) < 0 ? faSortDown : faSortUp}
              style={
                Number(item?.priceChange?.day) < 0
                  ? styles.sortIconBottom
                  : styles.sortIconTop
              }
            />
          )}
          <Text
            family="Inter-Medium"
            color={
              Number(item?.priceChange?.day) < 0
                ? Color.RED
                : Number(item?.priceChange?.day) === 0 || !item?.priceChange
                ? Color.GREY
                : Color.GREEN
            }>
            {item?.priceChange?.day || 0}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MarketItem;
