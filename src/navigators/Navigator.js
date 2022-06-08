import React, {useMemo, useState, useEffect} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ComicDetails from '../screens/comicDetails';
import DrawerStack from '../Stacks/DrawerStack';
import ReadingScreen from '../screens/ReadingScreen';
import {ThemeContext} from '../Context/ThemeContext';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigator = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const Theme = useTheme();

  // Getiing The Device's Color Scheme
  const phoneTheme = useColorScheme();

  // Function To set the App's Color Scheme Depending On Device's Color Scheme

  const setColorScheme = () => {
    phoneTheme === 'dark' ? setIsDarkTheme(true) : setIsDarkTheme(false);
  };

  // Using useEffect Hook

  useEffect(() => setColorScheme(), []); //Empty Dependency Array For Running it once so user Can change the Value using the Toggle Switch inside the App

  // Passing The Toggle Function

  const themeContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
    }),
    [],
  );

  // The Theme Color Rendering Logic

  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider value={themeContext}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              swipeEnabled: false,
              headerTitleAlign: 'center',
              headerTitle: 'Disaster Scans',
              headerStyle: {
                backgroundColor: '#F24C4C',
              },
              headerTintColor: '#fff',
              headerTitleAllowFontScaling: true,
              headerTitleStyle: {
                fontSize: 25,
                fontFamily: 'Pacifico-Regular',
              },
            }}>
            <Stack.Screen
              name="DrawerStack"
              component={DrawerStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="ComicDetails" component={ComicDetails} />
            <Stack.Screen name="ComicReadingScreen" component={ReadingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default Navigator;
