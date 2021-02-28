import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Home from '../Screens/Home';
import Students from '../Screens/Students';



const Stack = createStackNavigator();


function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Students" component={Students} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;