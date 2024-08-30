import {StyleSheet, Text, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const EmptyPlaceholder = ({iconName}: {iconName: string}) => {
  return (
    <View style={styles.container}>
      <Ionicon name={iconName} size={45} color={'black'} />
      <Text style={styles.headingText}>Empty List</Text>
    </View>
  );
};

export default EmptyPlaceholder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  headingText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
});
