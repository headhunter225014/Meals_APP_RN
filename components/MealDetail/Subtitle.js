import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#d0745c',
        fontWeight: 'bold',
        margin: 4,
        fontSize: 18,
        padding: 6,
        textAlign: "center"
    },
    subTitleContainer: {
        margin:4,
        padding: 6,
        borderBottomColor: '#d0745c',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
    }
});

export default Subtitle;