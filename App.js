/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';

import {Button, View, Text, StatusBar} from 'react-native';
import {createStackNavigator, StackActions} from '@react-navigation/stack';

import {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const ScreenOne = ({navigation}) => {
  useEffect(() => {
    console.log('Screen 1 Mount: ');
    console.log(navigation.dangerouslyGetState());

    return () => {
      console.log('Screen 1 Unmount:');
      console.log(navigation.dangerouslyGetState());
    };
  });

  const type = useNavigationState((state) => state.type);
  console.log(type);

  return (
    <View>
      <Text> Screen One </Text>
      <Button title="Go to Two" onPress={() => navigation.navigate('Two')} />
      {type === 'stack' && (
        <Button
          title="Replace with Three"
          onPress={() => navigation.replace('Three')}
        />
      )}
    </View>
  );
};

const ScreenTwo = ({navigation}) => {
  useEffect(() => {
    console.log('Screen 2 Mount: ');
    console.log(navigation.dangerouslyGetState());

    return () => {
      console.log('Screen 2 Unmount:');
      console.log(navigation.dangerouslyGetState());
    };
  });

  return (
    <View>
      <Text> Screen Two </Text>
      <Button
        title="Go to Three"
        onPress={() => navigation.navigate('Three')}
      />
    </View>
  );
};

const ScreenThree = ({navigation}) => {
  useEffect(() => {
    console.log('Screen 3 Mount: ');
    console.log(navigation.dangerouslyGetState());

    return () => {
      console.log('Screen 3 Unmount:');
      console.log(navigation.dangerouslyGetState());
    };
  });
  return (
    <View>
      <Text> Screen Three </Text>
      <Button title="Go to One" onPress={() => navigation.navigate('One')} />
    </View>
  );
};

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="One" component={ScreenOne} />
      <Stack.Screen name="Two" component={ScreenTwo} />
      <Stack.Screen name="Three" component={ScreenThree} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="One" component={ScreenOne} />
      <Drawer.Screen name="Two" component={ScreenTwo} />
      <Drawer.Screen name="Three" component={ScreenThree} />
    </Drawer.Navigator>
  );
};

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="One" component={ScreenOne} />
      <Tab.Screen name="Two" component={ScreenTwo} />
      <Tab.Screen name="Three" component={ScreenThree} />
    </Tab.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <TabScreens />
      </NavigationContainer>
    </>
  );
};

export default App;
