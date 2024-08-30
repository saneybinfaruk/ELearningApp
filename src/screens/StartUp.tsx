import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/MyColors';
import RegularText from '../components/RegularText';
import ExtraBoldText from '../components/ExtraBoldText';
import BoldText from '../components/BoldText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';

type Props = NativeStackScreenProps<RootStackParamList, 'StartUp'>;

const StartUp = ({navigation}: Props) => {
  const handleNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/photos/startup.png')} />
      <ExtraBoldText style={styles.headingText}>
        Join E <Text style={{color: Colors.primaryDarkColor}}>Learner</Text> To
        KickStart Your Journey
      </ExtraBoldText>
      <RegularText style={styles.subHeadingText}>
        Elevate your skills, grow your knowledge, and achieve your goals with
        us.
      </RegularText>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => handleNavigation('SignIn')}>
          <RegularText style={styles.btn}>SIGN IN</RegularText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('SignUp')}>
          <RegularText style={styles.btn}>SIGN UP</RegularText>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=> handleNavigation('MainTabs')}>
        <BoldText style={styles.continueText}>Continue as Guest</BoldText>
      </TouchableOpacity>
    </View>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 35,
  },

  headingText: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    paddingHorizontal: 5,
  },
  subHeadingText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 25,
    fontFamily: 'Inter-Light'
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 25,
  },

  btn: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderColor: Colors.primaryDarkColor,
    borderWidth: 1,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    fontSize: 24
  },

  continueText: {
    fontSize: 17,
    color: Colors.primaryDarkColor,
  },
});
