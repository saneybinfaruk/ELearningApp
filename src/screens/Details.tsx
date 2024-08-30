import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Overview from '../components/Details/Overview';
import Reviews from '../components/Details/Reviews';
import Lessons from '../components/Details/Lessons';
import MediumText from '../components/MediumText';
import CButton from '../components/CButton';
import {Colors} from '../theme/MyColors';
import useBottomBarVisibility from '../hook/useBottomBarVisibility';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Course, GetCourse, RootStackParamList} from '../types/interfaces';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_COURSE} from '../types/graphqlQueries';
import Loader from '../components/Loader';
import useFavorite from '../hook/useFavorite';
import placeholderImage from '../../assets/photos/details_placeholder.png';
import SkeletonDetails from '../components/Skeleton/SkeletonDetails';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const TopTab = createMaterialTopTabNavigator();

const Details = ({navigation, route}: Props) => {
  const id = route.params.id;

  const {data, loading} = useQuery<GetCourse>(GET_COURSE, {
    variables: {id: id},
  });

  /**
   * Hide the bottom navigation bar after entering the component.
   *
   * This hook is used to manage the visibility of the bottom navigation bar.
   * It ensures that the bottom navigation bar is hidden when this component is mounted.
   */
  useBottomBarVisibility();

  if (loading) return <SkeletonDetails />;

  return (
    <>
      <ScrollView style={styles.container}>
        <Header course={data?.course!} />

        <View>
          <TopTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
            <TopTab.Screen
              name="Overview"
              children={() => <Overview course={data?.course!} />}
            />
            <TopTab.Screen
              name="Lessons"
              children={() => <Lessons lessons={data?.course?.lessons!} />}
            />
            <TopTab.Screen
              name="Reviews"
              children={() => <Reviews reviews={data?.course?.reviews!} />}
            />
          </TopTab.Navigator>
        </View>
      </ScrollView>

      <View style={styles.enrollBtn}>
        <CButton
          label="get enroll"
          onPress={() => navigation.navigate('Enroll', {id})}
          bgColor={Colors.primaryColor}
        />
      </View>
    </>
  );
};
interface CustomTabBarProps extends MaterialTopTabBarProps {}

const CustomTabBar = ({state, descriptors, navigation}: CustomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={[
              styles.tab,
              {
                backgroundColor: isFocused ? '#BA68C8' : 'white',
              },
            ]}
            onPress={onPress}>
            <MediumText
              style={{
                fontFamily: 'PlusJakartaSans-Medium',
                color: isFocused ? 'white' : 'black',
              }}>
              {typeof label === 'string' ? label : 'Tab'}
            </MediumText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Header = ({course}: {course: Course}) => {
  const navigation = useNavigation();
  const {favorite, toggleFavorite} = useFavorite(course);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesignIcon name="arrowleft" size={28} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite}>
          <Ionicon
            name={favorite ? 'bookmark' : 'bookmark-outline'}
            size={30}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: course.imageUrl,
        }}
        defaultSource={placeholderImage}
        style={styles.headerImage}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    alignItems: 'center',
    margin: 0.2,
    overflow: 'hidden',
    position: 'relative',
  },
  headerContent: {
    position: 'absolute',
    top: 20,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 20,
    right: 20,
  },
  headerImage: {
    width: '100%',
    borderRadius: 10,
    height: 260,
    objectFit: 'cover',
  },
  tabBar: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    elevation: 0,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  tabBarIndicator: {
    backgroundColor: 'transparent', // Customize as needed
  },
  tabBarLabel: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enrollBtn: {
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
  },
});
