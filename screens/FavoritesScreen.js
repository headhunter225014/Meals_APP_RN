import {Text} from "react-native";
import Mealslist from "../components/mealsList/MealsList";
import MealsList from "../components/mealsList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {View, StyleSheet} from "react-native";
import {store} from "../store/redux/store";
import {useSelector} from "react-redux";

function FavoritesScreen() {

    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal =>
                favoriteMealsIds.includes(meal.id));

    if (favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals}/>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default FavoritesScreen;