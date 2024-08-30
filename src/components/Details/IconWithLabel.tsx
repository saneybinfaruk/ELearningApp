import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MediumText from '../MediumText';

interface Props {
  image: any;
  label: string;
}
const IconWithLabel = ({image, label}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} />
      <MediumText style={styles.label}>{label}</MediumText>
    </View>
  );
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  icon: {},

  label: {
    color: 'black',
    fontSize: 11,
  },
});
