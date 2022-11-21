import PriceList from '@components/PriceList';
import View from '@components/View';
import {storiesOf} from '@storybook/react-native';
import Color from '@styles/Color';
import React from 'react';
import {StyleSheet} from 'react-native';

storiesOf('PriceList', module)
  .add('NORMAL', () => (
    <PriceList
      data={[
        {label: '24 HOURS', value: 0.17},
        {label: '1 WEEK', value: 1.04},
        {label: '1 MONTH', value: 0.22},
        {label: '1 YEAR', value: 9.69},
      ]}
    />
  ))
  .addDecorator(story => (
    <View style={styles.container} margin={20}>
      {story()}
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.GREY_2,
  },
});
