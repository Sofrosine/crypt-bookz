import Divider from '@components/Divider';
import MarketItem from '@components/MarketItem';
import React from 'react';
import {FlatList} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import styles from './styles';

type Props = {
  data: SupportedCurrency[];
  loading: boolean;
};

const MarketList: React.FC<Props> = ({data, loading}) => {
  return (
    <FlatList
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
      initialNumToRender={10}
    />
  );
};

export default MarketList;
