import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import BoldText from './BoldText';
import {Colors} from '../theme/MyColors';
import RegularText from './RegularText';

interface Props {
  label: string;
  slogan: string;
}
const HeadingWithDot = ({label, slogan}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <BoldText style={styles.headingText}>{label}</BoldText>
        <View style={styles.dot} />
      </View>

      <RegularText style={styles.subHeading}>{slogan}</RegularText>
    </View>
  );
};

export default HeadingWithDot;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 20,
  },
  headingText: {
    fontSize: 40,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primaryDarkColor,
    borderRadius: 50,
  },

  subHeading: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    fontFamily: 'PlusJakartaSans-Light',
  },
});
