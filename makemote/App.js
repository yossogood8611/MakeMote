import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "./src/Screens/HomeScreen";
import AddWorkScreen from "./src/Screens/AddWorkScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="AddWork"
                    component={AddWorkScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
