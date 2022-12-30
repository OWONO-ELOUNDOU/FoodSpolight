import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h1
    },
    subtitle: {
        color: COLORS.white,
        fontSize: SIZES.h4,
        paddingTop: 3
    },
    dataContainer: {
        marginTop: 50
    },
    textInput: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15
    },
    btnContainer: {
        marginTop: 50
    },
    button1: {
        backgroundColor: COLORS.primary,
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4
    }
})

export default styles;