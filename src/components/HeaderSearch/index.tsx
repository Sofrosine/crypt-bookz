import Header from '@components/Header';
import Input from '@components/Input';
import View from '@components/View';
import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faClose, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Color from '@styles/Color';
import {getSize, layoutAnimation} from '@utils';
import React, {useState} from 'react';
import {Platform, StatusBar} from 'react-native';

type Props = {
  onChangeText: (val: string) => void;
};

const HeaderSearch: React.FC<Props> = ({onChangeText}) => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <View
      color={Color.WHITE}
      paddingBottom={isSearch ? getSize(16) : 0}
      paddingTop={
        isSearch
          ? Platform.OS === 'ios'
            ? (StatusBar?.currentHeight || 24) + getSize(16)
            : getSize(16)
          : 0
      }>
      {isSearch ? (
        <View paddingX={16}>
          <Input
            placeholder="Search by name"
            right={
              <FontAwesomeIcon color={Color.GREY} icon={faClose} size={32} />
            }
            onRightPress={() => {
              setIsSearch(false);
              layoutAnimation();
            }}
            onChangeText={onChangeText}
          />
        </View>
      ) : (
        <Header
          title="Market"
          onPressRightTwo={() => {
            setIsSearch(true);
            layoutAnimation();
          }}
          rightOne={
            <FontAwesomeIcon icon={faStar} size={24} color={Color.BLACK} />
          }
          rightTwo={
            <FontAwesomeIcon icon={faSearch} size={20} color={Color.BLACK} />
          }
        />
      )}
    </View>
  );
};

export default HeaderSearch;
