/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  ImageSourcePropType,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Colors as MyColors} from './theme/MyColors';
import ResetPassword from './screens/ResetPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabParamList, RootStackParamList} from './types/interfaces';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import StartUp from './screens/StartUp';
import {
  NavigationContainer,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {DarkTheme, LightTheme} from './theme/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Home from './screens/Home';
import Details from './screens/Details';
import Enroll from './screens/Enroll';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Header from './components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicon from 'react-native-vector-icons/Octicons';
import MyCourses from './screens/MyCourses';
import backarrow from '../assets/photos/back_arrow.png';
import Notifications from './screens/Notifications';
import Inbox from './screens/Inbox';
import Courses from './screens/Courses';
import {ApolloProvider} from '@apollo/client';
import apolloClient from './services/apollo-client';
import {Provider, useSelector} from 'react-redux';
import {persistor, RootState, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const LoginStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="MainTabs" component={Tabs} />
    </Stack.Navigator>
  );

  const ProfileStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    );
  };

  const MyCoursesStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MyCourses"
          component={MyCourses}
          options={{
            header: () => <Header title="My Courses" showBackBtn={false} />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: ({options: {title}}) => <Header title={title!} />,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="Courses"
        component={Courses}
        options={{
          headerShown: true,
          title: 'Courses',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: true,
          title: 'Notifications',
        }}
      />

      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Enroll"
        component={Enroll}
        options={{headerShown: true, title: ''}}
      />
    </Stack.Navigator>
  );

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        })}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home-lightning-bolt-outline"
                color={
                  focused
                    ? MyColors.activeBottomIconColor
                    : MyColors.inActiveBottomIconColor
                }
                size={26}
              />
            ),
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            header: () => <Header title="Inbox" showBackBtn={false} />,
            headerShown: true,
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="message-processing-outline"
                color={
                  focused
                    ? MyColors.activeBottomIconColor
                    : MyColors.inActiveBottomIconColor
                }
                size={26}
              />
            ),
          }}
          name="Inbox"
          component={Inbox}
        />
        <Tab.Screen
          options={{
            header: () => <Header title="My Courses" showBackBtn={false} />,

            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="book"
                color={
                  focused
                    ? MyColors.activeBottomIconColor
                    : MyColors.inActiveBottomIconColor
                }
                size={26}
              />
            ),
          }}
          name="MyCoursesStack"
          component={MyCoursesStack}
        />
        <Tab.Screen
          options={{
            header: () => <Header title="Profile" showBackBtn={false} />,
            headerShown: true,
            tabBarIcon: ({focused}) => (
              <AntDesignIcon
                name="user"
                color={
                  focused
                    ? MyColors.activeBottomIconColor
                    : MyColors.inActiveBottomIconColor
                }
                size={26}
              />
            ),
          }}
          name="ProfileStack"
          component={ProfileStack}
        />
      </Tab.Navigator>
    );
  };

  const AppStack = () => {
    const {user} = useSelector((state: RootState) => state.auth);

    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="MainTabs" component={Tabs} />
        ) : (
          <Stack.Screen name="Login" component={LoginStack} />
        )}
      </Stack.Navigator>
    );
  };

  const scheme = useColorScheme();

  const backgroundStyle = {
    backgroundColor: scheme === 'dark' ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <SafeAreaView style={styles.container}>
            <NavigationContainer
              theme={scheme === 'dark' ? DarkTheme : LightTheme}>
              <AppStack />
            </NavigationContainer>
          </SafeAreaView>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  tabBarStyle: {
    backgroundColor: MyColors.inboxSelectedColor,
    elevation: 0,
    borderWidth: 0,
    position: 'absolute',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'transparent',
    height: 35,
  },
});
