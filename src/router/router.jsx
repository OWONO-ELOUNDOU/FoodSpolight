import signInScreen from "../screens/signIn";
import signUpScreen from "../screens/signUp";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const authStack = createStackNavigator({
    signin: {
        screen: signInScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    signup: {
        screen: signUpScreen
    }
})

const router = createAppContainer(authStack);

export default router;