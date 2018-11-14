import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import {createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import OtherScreen from "./screens/OtherScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import Proteins from "./screens/Proteins";
import Vegetables from "./screens/Vegetables";
import Condiments from "./screens/Condiments";
import {Constants} from 'expo';
// import MainScreen from "./screens/MainScreen.js";


class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createSwitchNavigator({ Login: LoginScreen, SignUp: SignUpScreen },{initialRouteName: 'Login',});
const FoodStack = createMaterialTopTabNavigator({Proteins: Proteins, Vegetables: Vegetables, Condiments: Condiments},
    {initialRouteName: 'Proteins',
        tabBarOptions: {
            style: {
                paddingTop: Constants.statusBarHeight,
                backgroundColor: 'red',
            },
            activeTintColor:'black',
            indicatorStyle:{
                backgroundColor:'black'
            }
        },
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
        Food: FoodStack,
    },
    {
        initialRouteName: 'Food',
    }
);
