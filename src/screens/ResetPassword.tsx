import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingWithDot from '../components/HeadingWithDot';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import CButton from '../components/CButton';

const ResetPassword = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeadingWithDot
        label="Reset Password"
        slogan="Having trouble logging in? Reset your password now."
      />
      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          placeholderText="************"
          secureTextEntry={true}
        />
        <TextInput
          label="Confirm Password"
          placeholderText="************"
          secureTextEntry={true}
        />
      </View>

      <CButton label="Submit" onPress={() => {}} />
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: '30%',
    height: '100%',
  },
  subHeadingText: {
    textAlign: 'center',
    marginTop: 15,
    color: 'gray',
    paddingHorizontal: 15,
  },
  inputContainer: {
    gap: 25,
    marginTop: 35,
    marginBottom: 50,
  },
});
