import {CATEGORIES} from "../data/dummy-data";
import {Button, FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {useNavigation} from "@react-navigation/native";
import * as Notification from "expo-notifications";
import {useEffect} from "react";

//screen that represents the meal categories
Notification.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true
        }
    }
});

const allowsNotificationsAsync = async () => {
    const settings = await Notification.getPermissionsAsync();
    return (
        settings.granted ||
        settings.ios?.status === Notification.IosAuthorizationStatus.PROVISIONAL
    );
};

const requestPermissionsAsync = async () => {
    return await Notification.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    });
};

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

    useEffect(() => {
        const subscription = Notification.addNotificationReceivedListener(
            (notification) => {
                    console.log("Notification received");
                    console.log(notification)});


        const sub = Notification.addNotificationResponseReceivedListener(
            (response) => {
                console.log("Notification received");
                console.log(response)});

        return () => {
            subscription.remove();
            sub.remove();
        }

    }, []);
    const scheduleNotificationHandler = async () => {

        //// START: CALL FUNCTIONS HERE ////
        const hasPushNotificationPermissionGranted =
            await allowsNotificationsAsync();


        if (!hasPushNotificationPermissionGranted) {
            await requestPermissionsAsync();
        }
        //// END: CALL FUNCTIONS HERE ////

        Notification.scheduleNotificationAsync({
            content: {
                title: "My first local notification",
                body: "This is th body of the notification.",
                data: { userName: "Max" },
            },
            trigger: {
                seconds: 2,
            },
        });
    };


    //rendering a scrollable list of items
    return (
        <>
            <Button title='Schedule Notfication' onPress={scheduleNotificationHandler}/>
            <FlatList data={CATEGORIES}
                      keyExtractor={(item) => item.id}
                      renderItem={renderCategoryItem}
                      numColumns={2}
                      style={{flex: 1}}/>

        </>
    );
}

export default CategoriesScreen;