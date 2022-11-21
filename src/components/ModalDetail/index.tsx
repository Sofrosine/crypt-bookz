import React from 'react';
import {Modal, TouchableOpacity} from 'react-native';

import Text from '@components/Text';
import View from '@components/View';
import Color from '@styles/Color';
import Flex from '@styles/Flex';
import styles from './styles';
import PriceList from '@components/PriceList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {SvgUri} from 'react-native-svg';

type Props = {
  item: ModalDetailProps;
  onClose: () => void;
};

const ModalDetail: React.FC<Props> = ({
  item: {data, label, image},
  onClose,
}) => {
  return (
    <Modal
      onRequestClose={() => onClose && onClose()}
      visible={!!label}
      transparent
      animationType="fade">
      <View padding={20} style={Flex.pagesCenter} color={Color.BLACK_04}>
        <View style={styles.contentContainer} color={Color.WHITE} paddingY={24}>
          <View paddingX={16} style={Flex.rowItemsBetweenCenter}>
            <View style={Flex.rowItemsCenter}>
              {image && (
                <View marginRight={8}>
                  <SvgUri
                    uri={image?.uri || ''}
                    color={image?.color || Color.BLACK}
                    height="24"
                    width="24"
                  />
                </View>
              )}
              <Text family="Inter-Medium" style={styles.textCenter} size={16}>
                {label}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onClose && onClose();
              }}>
              <FontAwesomeIcon size={24} icon={faClose} />
            </TouchableOpacity>
          </View>
          <View marginTop={16}>
            <PriceList data={data} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetail;
