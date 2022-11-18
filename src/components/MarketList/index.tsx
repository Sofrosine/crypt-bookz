import Divider from '@components/Divider';
import MarketItem from '@components/MarketItem';
import View from '@components/View';
import Flex from '@styles/Flex';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import styles from './styles';

type Props = {
  data: SupportedCurrency[];
  loading: boolean;
  onRefresh: (onSuccess: () => void) => void;
};

const MarketList: React.FC<Props> = ({data, loading, onRefresh}) => {
  const [isRefresh, setIsRefresh] = useState(false);
  return (
    <View style={Flex.flex1}>
      <FlatList
        refreshing={isRefresh}
        onRefresh={() => {
          setIsRefresh(true);
          onRefresh && onRefresh(() => setIsRefresh(false));
        }}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ContentLoader
            pRows={2}
            containerStyles={styles.loaderContainer}
            active
            loading={loading}>
            <MarketItem item={item} />
          </ContentLoader>
        )}
        ItemSeparatorComponent={() => <Divider />}
        initialNumToRender={5}
      />
    </View>
  );
};

export default MarketList;
