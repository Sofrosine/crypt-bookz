import React, {ReactNode} from 'react';
import {
  Platform,
  StatusBar,
  StatusBarProps,
  TouchableOpacity,
} from 'react-native';

import Text from '@components/Text';
import View from '@components/View';
import {ViewProps} from '@components/View/types';

import {getSize} from '@utils';
import Flex from '@styles/Flex';
import styles from './styles';

type Props = {
  title: string;
  barColor?: string;
  backgroundColor?: string;
  rightOne?: ReactNode;
  rightTwo?: ReactNode;
  onPressRightOne?: () => void;
  onPressRightTwo?: () => void;
};

const Header: React.FC<
  Props & Pick<StatusBarProps, 'translucent'> & ViewProps
> = ({
  title,
  translucent,
  paddingTop,
  paddingBottom,
  rightOne,
  rightTwo,
  onPressRightOne,
  onPressRightTwo,
}) => {
  return (
    <View
      style={styles.container}
      paddingX={16}
      paddingTop={
        translucent || Platform.OS === 'ios'
          ? (StatusBar?.currentHeight || 24) + (paddingTop || getSize(16))
          : getSize(16)
      }
      paddingBottom={paddingBottom ?? getSize(16)}>
      <StatusBar translucent={translucent} />
      <Text size={20} family="Inter-Bold">
        {title}
      </Text>
      {rightOne || rightTwo ? (
        <View style={Flex.rowItemsCenter}>
          {
            <TouchableOpacity
              onPress={() => {
                onPressRightOne && onPressRightOne();
              }}>
              {rightOne}
            </TouchableOpacity>
          }
          {rightTwo && (
            <View marginLeft={rightOne ? 16 : 0}>
              <TouchableOpacity
                onPress={() => {
                  onPressRightTwo && onPressRightTwo();
                }}>
                {rightTwo}
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
