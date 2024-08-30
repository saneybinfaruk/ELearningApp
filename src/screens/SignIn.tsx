import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import CButton from '../components/CButton';
import {Colors} from '../theme/MyColors';
import HeadingWithDot from '../components/HeadingWithDot';
import SocialLogin from '../components/SocialLogin';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const SignIn = ({navigation}: Props) => {
  const handleNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeadingWithDot
        label="Sign In"
        slogan="Access your account to explore exclusive content and features."
      />

      <View style={styles.inputContainer}>
        <TextInput label="Email Here" placeholderText="Contact@gmail.com" />
        <TextInput
          label="Password"
          placeholderText="************"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => handleNavigation('ResetPassword')}>
        <RegularText style={styles.forgotPasswordText}>
          Forget Password?
        </RegularText>
      </TouchableOpacity>

      <CButton
        bgColor={Colors.accentColor}
        label="Sign In"
        onPress={() => {}}
      />

      <SocialLogin
        socialLoginLabel="Or Sign In With"
        fbLoginLabel="Sign In With Facebook"
        fbLoginPress={() => {}}
        googleLoginLabel="Sign In With Google"
        googleLoginPress={() => {}}
        accountSuggestionLabel="Don't Have An Account? "
        accountBtnLabel="Sign Up Here"
        accountBtnPress={() => handleNavigation('SignUp')}
      />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
    height: '100%',
  },
  subHeading: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    fontFamily: 'PlusJakartaSans-Light',
  },
  inputContainer: {
    gap: 20,
  },
  forgotPasswordText: {
    color: 'gray',
    paddingVertical: 3,
    alignSelf: 'flex-end',
    fontSize: 14,
    marginBottom: 30,
  },
});
