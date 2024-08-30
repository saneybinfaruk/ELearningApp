import {
  StyleSheet,
  Text,
  View,
  TextInput as ReactTextInput,
  InputModeOptions,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RegularText from './RegularText';
import {Colors} from '../theme/MyColors';
import {useTheme} from '@react-navigation/native';
import SemiBoldText from './SemiBoldText';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props<T extends FieldValues> extends TextInputProps {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholderText: string;
  inputMode?: InputModeOptions;
  secureTextEntry?: boolean;
}
const TextInput = <T extends FieldValues>({
  placeholderText,
  name,
  control,
  label,
  secureTextEntry = false,
  inputMode = 'text',
  ...textInputProps
}: Props<T>) => {
  const {colors} = useTheme();
  const [passwordVisible, setPasswordVisibility] = useState(secureTextEntry);
  return (
    <View style={styles.container}>
      <RegularText style={[styles.label, {color: colors.text}]}>
        {label}
      </RegularText>
      <Controller
        name={name}
        control={control}
        render={({field: {onBlur, onChange, value}, fieldState: {error}}) => (
          <>
            <View style={[styles.inputContainer, error && styles.errorInput]}>
              <ReactTextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry={passwordVisible}
                placeholderTextColor={Colors.lightText}
                placeholder={placeholderText}
                inputMode={inputMode}
                {...textInputProps}
              />

              {name === 'password' && (
                <TouchableOpacity
                  style={styles.eye}
                  onPress={() => setPasswordVisibility(prev => !prev)}>
                  <Ionicons
                    name="eye"
                    size={20}
                    color={passwordVisible ? 'gray' : Colors.primaryDarkColor}
                  />
                </TouchableOpacity>
              )}
            </View>
            {error && (
              <RegularText style={styles.errorText}>
                {error.message === 'Required'
                  ? `${label} is required!`
                  : error.message}
              </RegularText>
            )}
          </>
        )}
      />
    </View>
  );
};
/*<ReactTextInput
        placeholder={placeholderText}
        placeholderTextColor={'#8D8989'}
        style={styles.textInput}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
      /> */
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
    paddingTop: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingLeft: 8
  },
  eye: {
    backgroundColor: 'lightgray',
    display: 'flex',
    padding: 5,
    borderRadius: 50,
    marginRight: 5,
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: Colors.primaryDarkColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 13
  },
});
