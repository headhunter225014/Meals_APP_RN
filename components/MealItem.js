import {Text, View, Pressable, Image, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";
//a component for each single meal item that will be displayed
//in a MealsOverView screen in a flatlist
function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();



    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id
        });
    }

    return(
        <View style={styles.mealItem}>
            <Pressable style={({pressed}) =>
                (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration}
                             affordability={affordability}
                             complexity={complexity}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 15,
        backgroundColor: 'white',
        elavation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5
    }
})

export default MealItem;