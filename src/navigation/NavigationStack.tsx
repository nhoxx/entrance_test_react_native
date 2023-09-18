import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './NavigationService'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from './Routes'
import { SingUpScreen } from '../features/sign-up/SignUp'
import { CategoriesScreen } from '../features/categorites/Categories'
import ModalLoading from '../components/ModalLoading'

const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <>
        <StatusBar
          barStyle={'light-content'}
          translucent
        />
        <Stack.Navigator
          initialRouteName={Routes.SignUp}
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name={Routes.SignUp} component={SingUpScreen} />
          <Stack.Screen name={Routes.Categorires} component={CategoriesScreen} />
        </Stack.Navigator>
      </>
    </GestureHandlerRootView>
  )
}

export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
      <ModalLoading />
    </NavigationContainer>
  )
}
