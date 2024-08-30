import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RegularText from '../RegularText';
import videoIconImage from '../../../assets/photos/video.png';
import pageImage from '../../../assets/photos/page.png';
import {Colors} from '../../theme/MyColors';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface Props {
  question: string;
  answare: string;
}
const Accordion = ({question, answare}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
        <View style={styles.headingContainer}>
          <RegularText style={styles.headingText}>{question}</RegularText>
          <EntypoIcon
            name={open ? 'chevron-up' : 'chevron-down'}
            size={25}
            color={'black'}
          />
        </View>
      </TouchableWithoutFeedback>

      {open && (
        <View style={styles.detailsContainer}>
          <RegularText>{answare}</RegularText>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  headingContainer: {
    backgroundColor: '#F6EAF7',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#F6EAF7',
    borderRadius: 8,
    marginVertical: 15,
  },
});
