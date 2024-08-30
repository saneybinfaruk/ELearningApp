import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SemiBoldText from './SemiBoldText';
import {Colors} from '../theme/MyColors';

interface Props {
  label: string;
  onPress: () => void;
  bgColor?: string;
}
const CButton = ({label, onPress, bgColor = Colors.accentColor}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <SemiBoldText style={[styles.label, {backgroundColor: bgColor}]}>
        {label}
      </SemiBoldText>
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  label: {
    paddingVertical: 8,
    borderWidth: 0.8,
    borderRadius: 6,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 17,
    textAlign: 'center',
    borderColor: Colors.primaryDarkColor,
  },
});
