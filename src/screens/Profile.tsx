import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import avater from '../../assets/photos/avater.png';
import React from 'react';
import {Colors} from '../theme/MyColors';
import Octicon from 'react-native-vector-icons/Octicons';
import SemiBoldText from '../components/SemiBoldText';
import RegularText from '../components/RegularText';
import SkillTag from '../components/SkillTag';
import HorizontalListWithBtn from '../components/HorizontalListWithBtn';
import {itCourses, myskills} from '../constants/datas';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';
import EnrolledCourses from '../components/EnrolledCourses';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};
const Profile = ({navigation}: Props) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const handleCardPress = (id: number) => {
    navigation.navigate('Details', {id: id});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={avater} style={styles.avatar} />

        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <View style={styles.iconContainer}>
              <Octicon name="pencil" size={17} color={'white'} />
            </View>
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <SemiBoldText style={styles.nameText}>
              {user ? user?.displayName : 'Name Here'}
            </SemiBoldText>
            <RegularText style={styles.occupationText}>Tag Line</RegularText>
          </View>

          <View style={styles.aboutMeContainer}>
            <SemiBoldText style={styles.aboutMeTitleText}>
              About Me
            </SemiBoldText>
            <RegularText style={styles.aboutMeText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui
              mi malesuada tortor,
            </RegularText>
          </View>

          <View>
            <SemiBoldText style={styles.mySkillTitle}>My Skills</SemiBoldText>
            <View style={styles.mySkills}>
              {myskills.map(skill => (
                <SkillTag
                  key={skill}
                  label={skill}
                  onPress={() => {}}
                  borderRadius={50}
                  fontSize={16}
                />
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.enrolledCourseList}>
        <EnrolledCourses
          label="Enrolled Coursed"
          onPress={() => {
            navigation.navigate('EnrolledCourses');
          }}
          itemPress={handleCardPress}
        />
      </View>

      <View style={{height: 60}} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  contentContainer: {},
  iconBtn: {
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  iconContainer: {
    backgroundColor: Colors.accentColor,
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    backgroundColor: Colors.lightBGColor,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 45,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    marginTop: 60,
  },
  avatar: {position: 'absolute', zIndex: 5, alignSelf: 'center'},
  nameContainer: {alignItems: 'center', gap: 5, marginTop: 10},
  nameText: {fontSize: 24},
  occupationText: {
    fontFamily: 'PlusJakartaSans-ExtraLight',
    fontSize: 10,
    color: Colors.lightText,
  },
  aboutMeContainer: {gap: 16, marginBottom: 15},
  aboutMeTitleText: {fontSize: 20},
  aboutMeText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.lightText,
  },
  mySkillTitle: {fontSize: 20},
  mySkills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: 10,
    marginVertical: 20,
  },
  enrolledCourseList: {
    marginVertical: 20,
  },
});
