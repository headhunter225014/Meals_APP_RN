import {CATEGORIES} from "../data/dummy-data";
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {useNavigation} from "@react-navigation/native";

//screen that represents the meal categories
function CategoriesScreen({navigation}) {
    //navagitio hook that returns nav object, even if it's not set up as screen
    const navigationVar = useNavigation();

    //renders the list of items with meals name
    function renderCategoryItem(itemData)
    {
        //calls to navigate to main page
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile title={itemData.item.title}
                              color={itemData.item.color}
                              onPress={pressHandler}/>
        );
    }

    //rendering a scrollable list of items
    return (
        <FlatList data={CATEGORIES}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCategoryItem}
                  numColumns={2}
                    style={{flex: 1}}/>
    );
}

export default CategoriesScreen;