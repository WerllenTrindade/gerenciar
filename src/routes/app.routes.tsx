import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useTheme} from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons/';
const { Navigator, Screen} = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'

export function AppRouter(){
  const theme = useTheme();
  return(
    <Navigator screenOptions={{
      headerShown: false, // sem header
      tabBarActiveTintColor: theme.colors.secondary, //cor onde esta clicado
      tabBarInactiveTintColor: theme.colors.text, //cor onde não esta clica
      tabBarLabelPosition: 'beside-icon', //deixa o icone do lado
      tabBarStyle:{
        height: 88,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
      }
    }}>
      <Screen
      name="Listagem"
      component={Dashboard}
      options={{
        tabBarIcon: (({ size, color }) => 
        <MaterialIcons
        name="format-list-bulleted"
        size={size}
        color={color}
        />
        )
      }}
      />
      <Screen
      name="Cadastrar"
      component={Register}
      options={{
        tabBarIcon: (({ size, color }) => 
        <MaterialIcons
        name="attach-money"
        size={size}
        color={color}
        />
        )
      }}
      />
      <Screen
      name="Register"
      component={Register}
      options={{
        tabBarIcon: (({ size, color }) => 
        <MaterialIcons
        name="pie-chart"
        size={size}
        color={color}
        />
        )
      }}
      />
    </Navigator>
  )
}