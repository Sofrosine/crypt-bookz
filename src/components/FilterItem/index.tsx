import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {setFilterAction} from '@actions';
import Text from '@components/Text';
import View from '@components/View';
import {
  faChevronDown,
  faChevronUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Store} from '@reducers';
import Flex from '@styles/Flex';
import styles from './styles';
import Color from '@styles/Color';
import {resetFilterAction} from '@actions/filter-action';
import {layoutAnimation} from '@utils';

type Props = {
  item: {
    icon: IconDefinition;
    type: FilterName;
    title: string;
  };
  testID?: string;
};

const FilterItem: React.FC<Props> = ({item, testID}) => {
  const {filter} = useContext(Store);
  const [filterData, setFilterData] = filter;

  const handleFilter = () => {
    if (filterData?.data?.sort === 'asc') {
      setFilterData(resetFilterAction());
    } else {
      setFilterData(
        setFilterAction({
          name: item.type,
          sort: !filterData?.data?.sort
            ? 'desc'
            : filterData?.data?.sort === 'desc'
            ? 'asc'
            : null,
        }),
      );
    }
    layoutAnimation();
  };

  return (
    <TouchableOpacity
      testID={testID + `-${item?.type}`}
      accessibilityLabel={testID + `-${item?.type}`}
      onPress={handleFilter}
      style={[
        styles.container,
        {
          backgroundColor:
            filterData?.data?.sort && filterData?.data?.name === item?.type
              ? Color.LIGHT_BLUE_04
              : Color.WHITE,
          borderColor:
            filterData?.data?.sort && filterData?.data?.name === item?.type
              ? Color.LIGHT_BLUE_04
              : Color.GREY_2,
        },
      ]}>
      <View style={Flex.rowItemsCenter}>
        <FontAwesomeIcon size={14} icon={item?.icon} />
        <View marginRight={8} />
        <Text size={10} family="Inter-Medium">
          {item?.title}
        </Text>
      </View>
      <View marginLeft={8}>
        <FontAwesomeIcon
          style={styles.top1}
          color={
            filterData?.data?.name === item?.type
              ? filterData?.data?.sort === 'asc'
                ? Color.BLACK
                : !filterData?.data?.sort
                ? Color.BLACK
                : Color.GREY_2
              : Color.BLACK
          }
          size={10}
          icon={faChevronUp}
        />
        <FontAwesomeIcon
          style={styles.bottom1}
          size={10}
          icon={faChevronDown}
          color={
            filterData?.data?.name === item?.type
              ? filterData?.data?.sort === 'desc'
                ? Color.BLACK
                : !filterData?.data?.sort
                ? Color.BLACK
                : Color.GREY_2
              : Color.BLACK
          }
        />
      </View>
    </TouchableOpacity>
  );
};

FilterItem.defaultProps = {
  testID: 'filter-item',
};

export default FilterItem;
