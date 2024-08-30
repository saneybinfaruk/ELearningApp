import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicon from 'react-native-vector-icons/Octicons';
import {Colors} from '../theme/MyColors';
import {RootStackParamList} from '../types/interfaces';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

interface HeaderMenusProps {
  navigation?: NativeStackNavigationProp<
    RootStackParamList,
    'HomeScreen' | 'Settings'
  >;
}

const HeaderMenus = ({navigation}: HeaderMenusProps) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation?.navigate('Settings')}>
        <AntDesign name="setting" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation?.navigate('Notifications')}>
        <Octicon
          name="bell"
          size={20}
          style={[
            styles.icon,
            {paddingHorizontal: 6, backgroundColor: 'lightgray'},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMenus;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  icon: {
    backgroundColor: Colors.ExtraLightAccentColor,
    color: 'black',
    padding: 3,
    borderRadius: 10,
  },
});
