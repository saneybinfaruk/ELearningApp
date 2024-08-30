import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RegularText from './RegularText';
import SemiBoldText from './SemiBoldText';
import MediumText from './MediumText';
import {Colors} from '../theme/MyColors';

interface Props {
  label: string;
  onPress: () => void;
  borderRadius?: number;
  fontSize?: number;
}
const SkillTag = ({label, onPress, borderRadius = 8, fontSize = 17}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MediumText style={[styles.label, {borderRadius, fontSize}]}>
        {label}
      </MediumText>
    </TouchableOpacity>
  );
};

export default SkillTag;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 18,
    paddingVertical: 3,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 17,
  },
});
