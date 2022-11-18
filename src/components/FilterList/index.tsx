import {ScrollView} from 'react-native';
import React from 'react';
import FilterItem from '@components/FilterItem';
import View from '@components/View';
import styles from './styles';
import {FILTER_DATA} from '@constants';

const FilterList = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.container}>
      {FILTER_DATA.map((val, i) => (
        <View key={i} marginRight={8}>
          <FilterItem item={val} />
        </View>
      ))}
    </ScrollView>
  );
};

export default FilterList;
