import {
  StyleSheet,
  Text,
  View,
  TextInput as ReactTextInput,
  InputModeOptions,
} from 'react-native';
import React from 'react';
import RegularText from './RegularText';
import {Colors} from '../theme/MyColors';
import {useTheme} from '@react-navigation/native';
import SemiBoldText from './SemiBoldText';

interface Props {
  label: string;
  placeholderText: string;
  inputMode?: InputModeOptions;
  secureTextEntry?: boolean;
}
const TextInput = ({
  label,
  placeholderText,
  inputMode = 'text',
  secureTextEntry = false,
}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <RegularText style={[styles.label, {color: colors.text}]}>
        {label}
      </RegularText>
      <ReactTextInput
        placeholder={placeholderText}
        placeholderTextColor={'#8D8989'}
        style={styles.textInput}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: Colors.primaryDarkColor,
    paddingHorizontal: 12
  },
});
