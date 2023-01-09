import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center'
    },
    title: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: SIZES.h1
    },
    dataContainer: {
        marginTop: 50
    },
    textInput: {
        color: COLORS.black,
        fontSize: SIZES.h3,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 30
    },
    btnContainer: {
        marginTop: 50
    },
    button1: {
        backgroundColor: COLORS.primary,
        padding: 20,
        marginHorizontal: 100,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4
    },
    WriteTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default styles;