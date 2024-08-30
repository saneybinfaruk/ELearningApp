import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegularText from './RegularText';

interface Props {
  label: string;
  onPress: () => void;
}
const FbLoginBtn = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Icon name="facebook" size={20} style={styles.icon} color={'#1877F2'} />
      <RegularText style={styles.label}>{label}</RegularText>
    </TouchableOpacity>
  );
};

export default FbLoginBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    padding: 8,
    gap: 10,
  },
  label: {
    color: 'white',
    flex: 0.6,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    alignSelf: 'flex-end'
  },
});
