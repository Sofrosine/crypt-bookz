import React from 'react';
import Flex from '@styles/Flex';
import Color from '@styles/Color';
import View from '@components/View';
import Text from '@components/Text';

const HomePage = () => {
  return (
    <View color={Color.WHITE} style={Flex.pagesCenter}>
      <Text family="Inter-Bold" size={32}>
        Coming Soon.
      </Text>
    </View>
  );
};

export default HomePage;
