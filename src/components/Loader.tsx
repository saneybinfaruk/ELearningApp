import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/MyColors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.primaryDarkColor} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
