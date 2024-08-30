import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import book from '../../assets/photos/book.png';
import medal from '../../assets/photos/medal.png';
import clock from '../../assets/photos/clock.png';
import tag from '../../assets/photos/tag.png';
import IconWithLabel from './Details/IconWithLabel';

interface Props {
  lessons: string;
  courseDuration: string;
  discount: string;
}
const CourseInfo = ({courseDuration, discount}: Props) => {
  const datas = [
    {id: 1, label: '100+ Lessons', image: book},
    {id: 2, label: 'Certificate', image: medal},
    {id: 3, label: `${courseDuration}`, image: clock},
    {id: 4, label: `${discount} Off`, image: tag},
  ];
  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={datas}
        renderItem={({item, index}) => (
          <View style={[styles.gridItem, index % 2 === 0 && styles.rightGap]}>
            <IconWithLabel image={item.image} label={item.label} />
          </View>
        )}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Distribute space evenly between items
    paddingVertical: 10,
    backgroundColor: '#FBF5FB',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingRight: 30,
    paddingLeft: 25,
    marginVertical: 20,
  },
  gridItem: {
    flex: 1,
  },
  rightGap: {
    marginRight: 40,
  },
});
