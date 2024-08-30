import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput as RNTextInput,
} from 'react-native';
import React, {useState} from 'react';
import HeadingWithDot from '../components/HeadingWithDot';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import CButton from '../components/CButton';
import {useDispatch} from 'react-redux';
import {zodResolver} from '@hookform/resolvers/zod';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  LoginFormField,
  loginSchema,
  ResetPasswordFormField,
  resetPasswordSchema,
} from '../schemas/schema';
import auth, {updatePassword} from '@react-native-firebase/auth';
import {setUser} from '../redux/AuthSlice';
import BoldText from '../components/BoldText';
import {Colors} from '../theme/MyColors';
import EmailAuthProvider from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/interfaces';
type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;
const ResetPassword = ({navigation}:Props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const {control, handleSubmit} = useForm<ResetPasswordFormField>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const updateUserPassword = async (newPassword: string) => {
    const user = auth().currentUser;
    await user?.updatePassword(newPassword);
    navigation.navigate('SignIn')
  };

  const onSubmit: SubmitHandler<ResetPasswordFormField> = async data => {
    console.log(data);
    
    if (data.newPassword !== data.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      auth()
        .signInWithEmailAndPassword(data.email, data.currentPassword)
        .then(() => {
          updateUserPassword(data.confirmPassword);
          setErrorMessage('');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-credential') {
            setErrorMessage('Invalid Email or Password!');
          }
        });
    } catch (error: any) {
      if (error.status > 200) {
        setErrorMessage(error.data);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeadingWithDot
        label="Reset Password"
        slogan="Having trouble logging in? Reset your password now."
      />
      <View style={styles.inputContainer}>
        <TextInput<ResetPasswordFormField>
          label="Email Here"
          name="email"
          control={control}
          placeholderText="Contact@gmail.com"
        />
        <TextInput<ResetPasswordFormField>
          label="Current Password"
          name="currentPassword"
          control={control}
          placeholderText="************"
          secureTextEntry={true}
        />

        <TextInput<ResetPasswordFormField>
          label="New Password"
          name="newPassword"
          control={control}
          placeholderText="************"
          secureTextEntry={true}
        />

        <TextInput<ResetPasswordFormField>
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          placeholderText="************"
          secureTextEntry={true}
        />
      </View>
      {errorMessage && (
        <BoldText style={styles.errorMessage}>{errorMessage}</BoldText>
      )}

      <CButton label="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
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
    marginBottom: 30,
  },
  errorMessage: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 20,
  },

  textInput: {
    borderWidth: 0.5,
    borderColor: Colors.primaryDarkColor,
    paddingTop: 12,
    paddingLeft: 8,
  },
});
