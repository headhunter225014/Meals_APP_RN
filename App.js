import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";
import {store} from './store/redux/store';
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <>
                <Drawer.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: '#1c0b07'
                        },
                        headerTintColor: 'white',
                        sceneContainerStyle: {
                            backgroundColor: '#3f2f25'
                        },
                        drawerContentStyle: {backgroundColor: '#351401'},
                        drawerInactiveTintColor: 'white',
                        drawerActiveTintColor: "#351401",
                        drawerActiveBackgroundColor: "#e4baa1"
                    }}>
                    <Drawer.Screen name="Categories"
                                   component={CategoriesScreen}
                                   options={{
                                       drawerIcon: ({color, size}) => (
                                           <Ionicons color={color}
                                                     size={size}
                                                     name="list"/>
                                       ),
                                   }}/>
                    <Drawer.Screen name="Favorites"
                                   component={FavoritesScreen}
                                   options={{
                                       drawerIcon: ({color, size}) => (
                                           <Ionicons color={color}
                                                     size={size}
                                                     name="star"/>
                                       ),
                                   }}/>
                </Drawer.Navigator>
        </>
    );
};


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
        {/*<FavoritesContextProvider>*/}
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories"
                                 screenOptions={{
                                     headerStyle: {
                                         backgroundColor: '#1c0b07'
                                     },
                                     headerTintColor: 'white',
                                     contentStyle: {
                                         backgroundColor: '#3f2f25'
                                     }
                                 }}>
                    <Stack.Screen name="Drawer"
                                  component={DrawerNavigator}
                                  options={{
                                      headerShown: false
                                  }}/>
                    <Stack.Screen
                        name='MealsOverview'
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name='MealDetails'
                        component={MealDetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
