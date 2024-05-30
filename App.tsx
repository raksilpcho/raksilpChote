
import React from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import { navigationRef, navigationStack } from './src/navigation/rootNavigation';

// MainScreen
import MainScreen from './src/screens/MainScreen';

// Authentication Screen
import SignIn from './src/screens/auth/SignIn'
import PasscodeScreen from './src/screens/auth/PasscodeScreen'
import OTPScreen from './src/screens/auth/OTPScreen';

// WithDraw Screen
import Main from './src/screens/withdraw/Main'
import WithDraw from './src/screens/withdraw/WithDraw'
import Setting from './src/screens/withdraw/Setting'






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const BottomStack = (param : any) => {
  const screen = param.route?.params?.screen ?? "Main"
  let keyOffset = -100
  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'null' : 'height'}
      behavior='height'
      style={{ flex: 1 }}
      keyboardVerticalOffset={keyOffset}
    >
      <Tab.Navigator
        initialRouteName={screen}
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 100 : "10%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red"
          }
        })}

      >
        <Tab.Screen
          name={'Main'}
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }} onPress={() => navigationStack('Main')}>
                <Text style={{ color: focused ? 'black' : '#C2C2C2', marginBottom: 5, lineHeight: 20, fontSize: 12, fontWeight: "400" }}>Main</Text>
              </TouchableOpacity>
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 16,
              display: 'none'
            },

            tabBarStyle: { display: 'flex' }
          }}
        />
        <Tab.Screen
          name={'WithDraw'}
          component={WithDraw}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => navigationStack('WithDraw')}>
                <Text style={{ color: focused ? 'black' : '#C2C2C2', marginBottom: 5, lineHeight: 20, fontSize: 12, fontWeight: "400" }}>WithDraw</Text>
              </TouchableOpacity>
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 16,
              display: 'none'
            },

            tabBarStyle: { display: 'flex' }
          }}
        />

        <Tab.Screen
          name={'Setting'}
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => navigationStack('Setting')}>
                <Text style={{ color: focused ? 'black' : '#C2C2C2', marginBottom: 5, lineHeight: 20, fontSize: 12, fontWeight: "400" }}>Setting</Text>
              </TouchableOpacity>
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 16,
              display: 'none'
            },

            tabBarStyle: { display: 'flex' }
          }}
        />

      </Tab.Navigator>

    </KeyboardAvoidingView>

  )
}

function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator initialRouteName="MainScreen"
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: false,
            cardOverlayEnabled: true,
          })}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="PasscodeScreen" component={PasscodeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="TabHome" component={BottomStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
