import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegularText from './RegularText';
import {Colors} from '../theme/MyColors';

interface Props {
  label: string;
  onPress: ()=> void;
}
const GoogleLoginBtn = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <Image
        source={require('../../assets/photos/google_logo.png')}
        style={styles.icon}
      />
      <RegularText style={styles.label}>{label}</RegularText>
    </TouchableOpacity>
  );
};

export default GoogleLoginBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    borderWidth: 0.7,
    borderColor: Colors.primaryDarkColor,
  },
  label: {
    color: 'black',
    flex: 0.6,
  },
  icon: {
    width: 26,
    height: 25,
    objectFit: 'scale-down'
  },
});
