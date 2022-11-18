import View from '@components/View';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import styles from './styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashPage'>;
};

const SplashPage: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomePage');
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View color={Color.WHITE} style={Flex.flex1}>
      <Image
        resizeMode="contain"
        source={require('@assets/images/C.png')}
        style={styles.full}
      />
    </View>
  );
};

export default SplashPage;
