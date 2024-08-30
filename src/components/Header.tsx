import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RegularText from './RegularText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicon from 'react-native-vector-icons/Octicons';
import {Colors} from '../theme/MyColors';
import backArrowIcon from '../../assets/photos/back_arrow.png';
import BoldText from './BoldText';
import HeaderMenus from './HeaderMenus';
import {useNavigation} from '@react-navigation/native';

interface Props {
  showMenu?: boolean;
  showBackBtn?: boolean;
  title: string;
}
const Header = ({showBackBtn = true, showMenu = false, title}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        {showBackBtn && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backArrowIcon} />
          </TouchableOpacity>
        )}
        <BoldText style={styles.settingText}>{title}</BoldText>
      </View>

      {showMenu && <HeaderMenus />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center', gap: 40},
  settingText: {fontSize: 24},
});
