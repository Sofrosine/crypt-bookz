import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRef<RootStackParamList>
> = React.createRef<NavigationContainerRef<RootStackParamList>>();
