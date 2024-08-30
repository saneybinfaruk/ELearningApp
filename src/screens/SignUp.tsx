import 'react-native-gesture-handler';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeadingWithDot from '../components/HeadingWithDot';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import CButton from '../components/CButton';
import SocialLogin from '../components/SocialLogin';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';
import {SubmitHandler, useForm} from 'react-hook-form';
import {RegisterFormField, registerSchema} from '../schemas/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import auth from '@react-native-firebase/auth';
import BoldText from '../components/BoldText';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/AuthSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const SignUp = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const {control, handleSubmit} = useForm<RegisterFormField>({
    resolver: zodResolver(registerSchema),
  });

  const onAuthStateChange = (user: any) => {
    if (user) {
      dispatch(setUser(user));
      navigation.navigate('MainTabs');
    }
  };

  const onSubmit: SubmitHandler<RegisterFormField> = async data => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      await userCredential.user.updateProfile({
        displayName: data.fullName,
      });

      auth().onAuthStateChanged(onAuthStateChange);
    } catch (error: any) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email already registered!');
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeadingWithDot
        label="Sign Up"
        slogan="Be part of our community—sign up today!"
      />

      <View style={styles.inputContainer}>
        <TextInput<RegisterFormField>
          label="Full Name"
          name="fullName"
          control={control}
          placeholderText="Your Name Here"
        />
        <TextInput<RegisterFormField>
          name="email"
          control={control}
          label="Email Here"
          placeholderText="Contact@gmail.com"
        />
        <TextInput<RegisterFormField>
          name="password"
          control={control}
          label="Password"
          secureTextEntry={true}
          placeholderText="*************"
        />
      </View>

      {errorMessage && (
        <BoldText style={styles.errorMessage}>{errorMessage}</BoldText>
      )}
      <CButton label="Sign Up" onPress={handleSubmit(onSubmit)} />

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
    flex: 1,
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
  errorMessage: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 20,
  },
});
