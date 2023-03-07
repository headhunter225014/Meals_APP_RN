import {FlatList, View, Text} from "react-native";

function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId;
    return (
        <View>
            <Text>This is Meal Details ({mealId}) </Text>
        </View>
    );
}

export default MealDetailsScreen