import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Home from '../Screens/Home';
import SignIn from '..//Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ItemPage from '../Screens/ItemPage';



const Stack = createStackNavigator();


function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn}
                    options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#1db5b5',
                        },
                    }} />
                <Stack.Screen name="itempage" component={ItemPage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;