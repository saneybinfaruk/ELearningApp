import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegularText from './RegularText';
import {Colors} from '../theme/MyColors';
import {useTheme} from '@react-navigation/native';
import SemiBoldText from './SemiBoldText';


const SocialLoginLabel = ({label}:{label:string}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <SemiBoldText style={[styles.label]}>{label}</SemiBoldText>
      <View style={styles.line} />
    </View>
  );
};

export default SocialLoginLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 10
  },
  label: {
    fontSize: 12,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    flex: 1,
  },
});
