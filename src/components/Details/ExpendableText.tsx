import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RegularText from '../RegularText';
import {Colors} from '../../theme/MyColors';

const ExpendableText = ({children}: {children: string}) => {
  const [expended, setExpended] = useState(false);
  const characterLimit = 220;

  if (!children) return null;

  if (children.length <= characterLimit) {
    return <RegularText>{children}</RegularText>;
  }

  const description = expended
    ? children + ' '
    : children.substring(0, characterLimit) + '...';

  return (
    <View>
      <RegularText style={styles.children}>
        {description}
        <RegularText
          onPress={() => setExpended(prev => !prev)}
          style={styles.readMoreText}>
          {expended ? 'Read Less' : 'Read More'}
        </RegularText>
      </RegularText>
    </View>
  );
};

export default ExpendableText;

const styles = StyleSheet.create({
  children: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-ExtraLight',
    color: Colors.lightText,
  },
  readMoreText: {
    fontSize: 12,
    color: 'blue',
    fontFamily: 'PlusJakartaSans-Regular',
  },
});
