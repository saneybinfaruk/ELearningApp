import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SocialLoginLabel from './SocialLoginLabel';
import FbLoginBtn from './FbLoginBtn';
import GoogleLoginBtn from './GoogleLoginBtn';
import AccountSuggestion from './AccountSuggestion';

interface Props {
  socialLoginLabel: string;
  fbLoginLabel: string;
  fbLoginPress: () => void;

  googleLoginLabel: string;
  googleLoginPress: () => void;

  accountSuggestionLabel: string;
  accountBtnLabel: string;
  accountBtnPress: () => void;
}
const SocialLogin = ({
  socialLoginLabel,
  fbLoginLabel,
  fbLoginPress,
  googleLoginLabel,
  googleLoginPress,
  accountSuggestionLabel,
  accountBtnLabel,
  accountBtnPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <SocialLoginLabel label={socialLoginLabel} />
      <FbLoginBtn label={fbLoginLabel} onPress={fbLoginPress} />
      <GoogleLoginBtn label={googleLoginLabel} onPress={googleLoginPress} />
      <AccountSuggestion
        label={accountSuggestionLabel}
        btnLabel={accountBtnLabel}
        onPress={accountBtnPress}
      />
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingVertical: 20,
  },
});
