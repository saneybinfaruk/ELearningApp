import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingWithDot from '../components/HeadingWithDot';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import CButton from '../components/CButton';
import SocialLogin from '../components/SocialLogin';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const SignUp = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeadingWithDot
        label="Sign Up"
        slogan="Be part of our community—sign up today!"
      />

      <View style={styles.inputContainer}>
        <TextInput label="Full Name" placeholderText="Your Name Here" />
        <TextInput label="Email Here" placeholderText="Contact@gmail.com" />
        <TextInput label="Password" placeholderText="*************" />
        <TextInput label="Confirm Password" placeholderText="*************" />
      </View>

      <CButton label="Sign Up" onPress={() => {}} />

      <SocialLogin
        socialLoginLabel="Or Sign Up With"
        fbLoginLabel="Sign Up With Facebook"
        fbLoginPress={() => {}}
        googleLoginLabel="Sign Up With Google"
        googleLoginPress={() => {}}
        accountSuggestionLabel="Already Have An Account?"
        accountBtnLabel="Sign In Here"
        accountBtnPress={() => navigation.navigate('SignIn')}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    height: '100%',
  },
  subHeadingText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    gap: 6,
    marginBottom: 25,
  },
});
