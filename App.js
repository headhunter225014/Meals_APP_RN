import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style='light'/>
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
                <Stack.Screen
                    name='MealsCategories'
                      component={CategoriesScreen}
                      options={{
                          title: 'All Categories',
                      }}/>
                <Stack.Screen
                    name='MealsOverview'
                    component={MealsOverviewScreen}
                />
                <Stack.Screen
                    name='MealDetails' component={MealDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
