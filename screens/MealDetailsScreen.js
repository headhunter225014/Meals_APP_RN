import {FlatList, View, Text, StyleSheet, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import mealItem from "../components/MealItem";
import {Image} from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Pressed!a");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton onPress={headerButtonPressHandler}
                                icon="star"
                                color='white'/>
                );
            }
        }, [navigation, headerButtonPressHandler]);
    });


    return (
        <ScrollView style={{marginBottom: 32}}>
            <Image style={styles.image}source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>This is Meal Details</Text>
            <MealDetails complexity={selectedMeal.complexity}
                         affordability={selectedMeal.affordability}
                         duration={selectedMeal.duration}
                         textStyle={styles.detailText}/>
            <View style={{alignItems: 'center'}}>
                <View style={{width: '80%'}}>
                    <Subtitle>Ingridients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                </View>
                <View style={{width: '80%'}}>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}></List>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '90%',
        margin: 15,
        height: 350,
        borderRadius: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },

});

export default MealDetailsScreen