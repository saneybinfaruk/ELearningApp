import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import backArrowIcon from '../../assets/photos/back_arrow.png';
import avatar from '../../assets/photos/avater.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import RegularText from '../components/RegularText';
import {Colors} from '../theme/MyColors';
import MediumText from '../components/MediumText';
import useBottomBarVisibility from '../hook/useBottomBarVisibility';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/AuthSlice';

const Settings = () => {
  /**
   * Hide the bottom navigation bar after entering the component.
   *
   * This hook is used to manage the visibility of the bottom navigation bar.
   * It ensures that the bottom navigation bar is hidden when this component is mounted.
   */

  useBottomBarVisibility();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch(error => console.log(error));
  };
  return (
    <ScrollView>
      <View style={styles.settingContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.menuContainer}>
          <SettingMenu
            label="Edit Profile"
            icon={
              <AntDesign
                name="user"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={() => {}}
          />
          <SettingMenu
            label="Payment Option"
            icon={
              <Octicon
                name="credit-card"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={() => {}}
          />
          <SettingMenu
            label="My Certificate"
            icon={
              <MaterialCommunityIcons
                name="medal-outline"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={() => {}}
          />
          <SettingMenu
            label="Terms & Conditions"
            icon={
              <Ionicons
                name="newspaper-outline"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={() => {}}
          />
          <SettingMenu
            label="Help Center"
            icon={
              <Feather
                name="headphones"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={() => {}}
          />
          <SettingMenu
            label="Invite Friends"
            icon={
              <Feather
                name="navigation"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={()=>{}}
          />
          <SettingMenu
            label="Log Out"
            icon={
              <AntDesign
                name="logout"
                size={20}
                color={Colors.primaryDarkColor}
              />
            }
            onPress={handleSignOut}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

interface SettingMenuProps {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}
const SettingMenu = ({icon, label, onPress}: SettingMenuProps) => {
  return (
    <TouchableOpacity style={styles.settingMenuContainer} onPress={onPress}>
      <View style={styles.settingMenuLabelContainer}>
        {icon}
        <MediumText style={styles.settingMenuLabelText}>{label}</MediumText>
      </View>
      <View style={styles.settingMenuIconContainer}>
        <Octicon
          name="chevron-right"
          color={'gray'}
          size={20}
          style={{marginRight: 30}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  avatar: {position: 'absolute', top: -30},
  titleContainer: {flexDirection: 'row', alignItems: 'center', gap: 20},
  settingText: {fontWeight: 'bold', fontSize: 24},
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  settingContainer: {
    backgroundColor: Colors.lightBGColor,
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    borderRadius: 45,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    marginHorizontal: 6,
  },
  icon: {
    backgroundColor: Colors.ExtraLightAccentColor,
    color: 'black',
    padding: 3,
    borderRadius: 10,
  },
  settingMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  settingMenuLabelContainer: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingMenuLabelText: {fontSize: 16, color: '#4d4d4d'},
  settingMenuIconContainer: {alignSelf: 'flex-end'},
  menuContainer: {
    gap: 5,
    marginTop: 180,
    marginBottom: 100,
    justifyContent: 'center',
    width: '100%',
  },
});
