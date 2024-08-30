import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import RegularText from '../components/RegularText';
import HeadingWithDot from '../components/HeadingWithDot';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, User} from '../types/interfaces';
import TextInput from '../components/TextInput';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CButton from '../components/CButton';
import SocialLogin from '../components/SocialLogin';
import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginFormField, loginSchema} from '../schemas/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import auth from '@react-native-firebase/auth';
import BoldText from '../components/BoldText';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/AuthSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const SignIn = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const {control, handleSubmit} = useForm<LoginFormField>({
    resolver: zodResolver(loginSchema),
  });

  const onAuthStateChange = (user: any) => {
    if (user) {
      dispatch(
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        }),
      );
      navigation.navigate('MainTabs');
    }
  };

  const onSubmit: SubmitHandler<LoginFormField> = async data => {
    try {
      auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => setErrorMessage(''))
        .catch(error => {
          if (error.code === 'auth/invalid-credential') {
            setErrorMessage('Invalid Email or Password!');
          }
        });

      auth().onAuthStateChanged(onAuthStateChange);
    } catch (error: any) {
      if (error.status > 200) {
        setErrorMessage(error.data);
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleNavigation = (
    screenName: 'SignIn' | 'SignUp' | 'ResetPassword',
  ) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container}>
      <HeadingWithDot
        label="Sign In"
        slogan="Access your account to explore exclusive content and features."
      />

      <View style={styles.inputContainer}>
        <TextInput<LoginFormField>
          name="email"
          label="Email Here"
          control={control}
          placeholderText="Contact@gmail.com"
        />
        <TextInput<LoginFormField>
          label="Password"
          name="password"
          control={control}
          placeholderText="************"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => handleNavigation('ResetPassword')}>
        <RegularText style={styles.forgotPasswordText}>
          Forget Password?
        </RegularText>
      </TouchableOpacity>

      {errorMessage && (
        <BoldText style={styles.errorMessage}>{errorMessage}</BoldText>
      )}

      <CButton
        bgColor={Colors.accentColor}
        label="Sign In"
        onPress={handleSubmit(onSubmit)}
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
    flex: 1,
  },

  inputContainer: {
    gap: 6,
  },

  forgotPasswordText: {
    color: 'gray',
    paddingVertical: 3,
    alignSelf: 'flex-end',
    fontSize: 14,
    marginBottom: 30,
  },
  errorMessage: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 20,
  },
});
