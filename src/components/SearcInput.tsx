import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../theme/MyColors';

const SearcInput = () => {
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons
        name="manage-search"
        size={30}
        color={Colors.primaryDarkColor}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search Here"
        style={styles.searchInput}
        placeholderTextColor={'#8AB3B5'}
      />
    </View>
  );
};

export default SearcInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderColor: '#C6D0D7',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 8,
  },
  searchIcon: {
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 15,
    fontFamily: 'PlusJakartaSans-Light',
    fontSize: 15,
  },
});
