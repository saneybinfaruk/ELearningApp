// import {
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import React from 'react';
// import Accordion from './Accordion';
// import {Lesson} from '../../types/interfaces';

// interface Props {
//   lessons: Lesson[];
// }
// const Lessons = ({lessons}: Props) => {
//   // return (
//   //   <View style={styles.container}>
//   //     {lessons.map((lesson, index) => (
//   //       <Accordion
//   //         key={lesson.question + index}
//   //         question={lesson.question}
//   //         answare={lesson.answer}
//   //       />
//   //     ))}
//   //   </View>
//   // );
//   return (
//     <FlatList
//       contentContainerStyle={styles.container}
//       data={lessons}
//       scrollEnabled={false}
//       renderItem={({item: lesson, index}) => (
//         <Accordion
//           key={lesson.question + index}
//           question={lesson.question}
//           answare={lesson.answer}
//         />
//       )}
//     />
//   );
// };

// export default Lessons;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 15,
//     marginTop: 25,
//   },
// });
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Review from './Review';
import {Lesson, Review as UsersReview} from '../../types/interfaces';
import Accordion from './Accordion';
import EmptySpace from '../EmptySpace';
interface Props {
  lessons: Lesson[];
}
const Lessons = ({lessons}: Props) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={lessons}
      scrollEnabled={false}
      renderItem={({item: lesson, index}) => (
        <Accordion
          key={lesson.question + index}
          question={lesson.question}
          answare={lesson.answer}
        />
      )}
      ListFooterComponent={<EmptySpace />}
    />
  );
};

export default Lessons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
});
