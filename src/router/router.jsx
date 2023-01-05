import signInScreen from "../screens/signIn";
import signUpScreen from "../screens/signUp";
import forgotPwdScreen from "../screens/forgotpwd";
import homeScreen from "../screens/home";
import accountScreen from "../screens/account";
import historyScreen from "../screens/history";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { COLORS } from "../constants/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
});

const homeStack = createStackNavigator({
    home: {
        screen: homeScreen,
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: COLORS.primary
        },
        headerTitle: 'Dishes',
        headerTitleStyle: {
            color: COLORS.white,
            fontWeight: '800'
        }
    }
})

const bottomStack = createBottomTabNavigator({
    account: {
        screen: accountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({tintColor, focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    home: {
        screen: homeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    dish: {
        screen: historyScreen,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={tintColor} />
        }
    }
},{
    initialRouteName: 'home',
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        labelStyle: {
            fontWeight: 'bold'
        },
        tabStyle: {
            paddingTop: 5,
            height: 60,
        }
    }
})

const mainStack = createSwitchNavigator({
    auth: {
        screen: authStack,
        navigationOptions: {
            headerShow: false,
        }
    },
    main: {
        screen: bottomStack
    }
})

const router = createAppContainer(mainStack);

export default router;