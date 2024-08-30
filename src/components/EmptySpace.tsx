import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptySpace = () => {
  return <View style={styles.container} />;
};

export default EmptySpace;

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
});
