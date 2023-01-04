import signInScreen from "../screens/signIn";
import signUpScreen from "../screens/signUp";
import forgotPwdScreen from "../screens/forgotpwd";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { COLORS } from "../constants/theme";

const authStack = createStackNavigator({
    signin: {
        screen: signInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    signup: {
        screen: signUpScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    forgotpwd: {
        screen: forgotPwdScreen,
        navigationOptions: {
            headerTitle: null,
            headerBackTitle: 'back',
            headerBackTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.primary
            }
        }
    }
})

const router = createAppContainer(authStack);

export default router;