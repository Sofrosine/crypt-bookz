import Divider from '@components/Divider';
import PriceItem from '@components/PriceItem';
import View from '@components/View';
import React from 'react';
import {FlatList} from 'react-native';

type Props = {
  data: PriceItemProps[];
};

const PriceList: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({item}) => (
        <View paddingY={12} paddingX={16}>
          <PriceItem label={item?.label} value={item?.value} />
        </View>
      )}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default PriceList;
