import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faBookAtlas,
  faChartSimple,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MarketPage from '@pages/MarketPage';
import SplashPage from '@pages/SplashPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Color from '@styles/Color';
import {getSize} from '@utils';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Storybook from '../../storybook';
import {navigationRef} from './RootNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTabPage = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Market"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName: IconDefinition = faChartSimple;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Storybook') {
            iconName = faBookAtlas;
          }
          return (
            <FontAwesomeIcon
              icon={iconName}
              size={24}
              color={focused ? Color.BLACK : Color.GREY}
            />
          );
        },
        tabBarStyle: {
          height: insets.bottom + getSize(50),
          paddingTop: 10,
        },
        tabBarItemStyle: {
          marginBottom: getSize(8),
        },
      })}>
      <Tab.Screen
        name="Market"
        options={{
          tabBarLabel: 'Market',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
        }}
        component={MarketPage}
      />
      <Tab.Screen
        name="Storybook"
        options={{
          tabBarLabel: 'Storybook',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
          headerShown: false,
        }}
        component={Storybook}
      />
    </Tab.Navigator>
  );
};

const Main: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashPage"
          component={SplashPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomeTabPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
