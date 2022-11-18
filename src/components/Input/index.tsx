import View from '@components/View';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import React, {ReactNode} from 'react';
import {TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  right?: ReactNode;
  onRightPress?: () => void;
};

const Input: React.FC<Props & TextInputProps> = ({
  right,
  onRightPress,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={Flex.rowItemsCenter} color={Color.WHITE}>
      <TextInput
        style={styles.container}
        placeholder={placeholder}
        placeholderTextColor={Color.BLACK}
        onChangeText={val => onChangeText && onChangeText(val)}
      />
      {right && (
        <View marginLeft={8}>
          <TouchableOpacity
            onPress={() => {
              onRightPress && onRightPress();
            }}>
            {right}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Input;
