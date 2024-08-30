import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BoldText from './BoldText';
import RegularText from './RegularText';
import ProgressBar from './ProgressBar';
import {Colors} from '../theme/MyColors';
import placeholder from '../../assets/photos/details_placeholder.png';

interface Props {
  onItemPress: () => void;
  courseName: string;
  instructorName: string;
  imageUrl: string;
}
const CourseLayout = ({
  courseName,
  instructorName,
  onItemPress,
  imageUrl,
}: Props) => {
  return (
    <Pressable style={styles.itemLayoutContainer} onPress={onItemPress}>
      <Image
        defaultSource={placeholder}
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
        borderRadius={5}
      />
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <BoldText style={styles.nameText} numberOfLines={2}>
            {courseName}
          </BoldText>
          <RegularText style={styles.authorNameText}>
            By {instructorName}
          </RegularText>
        </View>

        <ProgressBar progress={50} height={10} />
      </View>
    </Pressable>
  );
};

export default CourseLayout;

const styles = StyleSheet.create({
  itemLayoutContainer: {
    minHeight: 120,
    backgroundColor: Colors.lightBGColor,
    marginVertical: 8,
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
  },
  image: {flex: 0.35, height: '100%', objectFit: 'cover'},
  contentContainer: {
    flex: 0.65,
    justifyContent: 'space-between',
  },
  nameContainer: {gap: 3},
  nameText: {fontSize: 16},
  authorNameText: {fontFamily: 'PlusJakartaSans-ExtraLight', fontSize: 10},
});
