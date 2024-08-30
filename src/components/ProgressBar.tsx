import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegularText from './RegularText';
import {Colors} from '../theme/MyColors';

interface Props {
  progress: number;
  height?: number;
}
const ProgressBar = ({progress, height = 16}: Props) => {
  return (
    <View style={styles.container}>
      <RegularText
        style={{
          fontFamily: 'PlusJakartaSans-Light',
          color: '#8D8989',
          alignSelf: 'flex-end',
          paddingRight: 5,
          marginBottom: 5,
          fontSize: 12,
          textTransform: 'uppercase',
        }}>
        {`${progress}% DONE`}
      </RegularText>
      <View style={[styles.progressBarBG, {height}]}>
        <View style={[styles.progressBar, {width: `${progress}%`}, {height}]} />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  progressBarBG: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  progressBar: {
    backgroundColor: Colors.primaryDarkColor,
    borderRadius: 50,
  },
});
