import {StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

interface Props extends TextProps {
  children: React.ReactNode;
}
const ExtraBoldText = ({children, style, ...props}: Props) => {
  const {colors} = useTheme();
  return (
    <Text style={[styles.defaultText, {color: colors.text}, style]} {...props}>
      {children}
    </Text>
  );
};

export default ExtraBoldText;

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 14,
  },
});
