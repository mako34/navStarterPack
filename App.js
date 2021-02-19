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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VerticalBarsScreen from "./Screens/VerticalBars";
import LineChartScreen from "./Screens/LineChart";
import HorizontalBarScreen from "./Screens/HorizontalBar";



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Charts Nano</Text>
      <Button
        title="Bar graphs blue"
        onPress={() => navigation.navigate('Month Bar Graph')}
      />

      <Button
        title="Single line chart Light"
        onPress={() => navigation.navigate('single.line.light')}
      />
      <Button
        title="Double line chart Light" 
        onPress={() => navigation.navigate('double.line.light')}
      />
       <Button
        title="Single line chart Dark"
        onPress={() => navigation.navigate('single.line.dark')}
      />

      <Button
        title="Horizontal line Dark"
        onPress={() => navigation.navigate('Horizontal Bar Dark')}
      />

      <Button
        title="Horizontal line Light"
        onPress={() => navigation.navigate('Horizontal Bar Light')}
      />

    </View>
  );
}

//que abstraccion tan gonorrea!
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Charts Nano" component={HomeScreen} />
        <Stack.Screen name="Month Bar Graph" component={VerticalBarsScreen} />
        <Stack.Screen name="single.line.light">
          {props => <LineChartScreen {...props} isDarkMode={false} isSingle={true}/>}
        </Stack.Screen>
        <Stack.Screen name="double.line.light">
          {props => <LineChartScreen {...props} isDarkMode={false} isSingle={false}/>}
        </Stack.Screen>
        <Stack.Screen name="single.line.dark">
          {props => <LineChartScreen {...props} isDarkMode={true} isSingle={true}/>}
        </Stack.Screen>
        <Stack.Screen name="Double line" component={LineChartScreen} />
        <Stack.Screen name="Horizontal Bar Dark">
          {props => <HorizontalBarScreen {...props} isDarkMode={true} />}
        </Stack.Screen>
        <Stack.Screen name="Horizontal Bar Light">
          {props => <HorizontalBarScreen {...props} isDarkMode={false} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
