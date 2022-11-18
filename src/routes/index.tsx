import Header from '@components/Header';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faChartSimple,
  faHome,
  faNoteSticky,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AccountPage from '@pages/AccountPage';
import DiscoverPage from '@pages/DiscoverPage';
import HomePage from '@pages/HomePage';
import MarketPage from '@pages/MarketPage';
import SplashPage from '@pages/SplashPage';
import WalletPage from '@pages/WalletPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Color from '@styles/Color';
import {getSize} from '@utils';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
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
          } else if (route.name === 'Discover') {
            iconName = faNoteSticky;
          } else if (route.name === 'Wallet') {
            iconName = faWallet;
          } else if (route.name === 'Account') {
            iconName = faUser;
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
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
          header: ({}) => <Header title="Home" />,
        }}
        component={HomePage}
      />
      <Tab.Screen
        name="Discover"
        options={{
          tabBarLabel: 'Discover',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
          header: ({}) => <Header title="Discover" />,
        }}
        component={DiscoverPage}
      />
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
        name="Wallet"
        options={{
          tabBarLabel: 'Wallet',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
          header: ({}) => <Header title="Wallet" />,
        }}
        component={WalletPage}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Color.BLACK,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Inter-Medium',
          },
          header: ({}) => <Header title="Account" />,
        }}
        component={AccountPage}
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
