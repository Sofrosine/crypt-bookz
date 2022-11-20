import Text from '@components/Text';
import View from '@components/View';
import {storiesOf} from '@storybook/react-native';
import Color from '@styles/Color';
import React from 'react';
import {StyleSheet} from 'react-native';

storiesOf('View', module)
  .add('NORMAL VIEW', () => <View color={Color.RED} style={styles.container} />)
  .add('VIEW WITH TEXT', () => (
    <View color={Color.GREEN} style={styles.container}>
      <Text>GREEN VIEW</Text>
    </View>
  ))
  .addDecorator(story => <View padding={20}>{story()}</View>);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
