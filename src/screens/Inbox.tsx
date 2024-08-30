import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {lazy, useState} from 'react';
import checkMark from '../../assets/photos/avater.png';
import BoldText from '../components/BoldText';
import RegularText from '../components/RegularText';
import {Colors} from '../theme/MyColors';
import MediumText from '../components/MediumText';
import SemiBoldText from '../components/SemiBoldText';
import SearcInput from '../components/SearcInput';

const Inbox = () => {
  const [selectedMenu, setSelectedMenu] = useState('Chat');

  return (
    <FlatList
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <View>
          <SearcInput />

          <View style={styles.btnsContainer}>
            <MenuBtn
              label="Chat"
              selected={selectedMenu}
              setSelected={setSelectedMenu}
            />
            <MenuBtn
              label="Calls"
              setSelected={setSelectedMenu}
              selected={selectedMenu}
            />
          </View>
        </View>
      )}
      data={[1, 1, 1, 1, 1, 1]}
      renderItem={({item}) => <ItemLayout />}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: Colors.borderColor}} />
      )}
      ListFooterComponent={<View style={{height: 120}} />}
    />
  );
};

export default Inbox;

interface MenuBtnProps {
  label: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}
const MenuBtn = ({
  label,

  selected,
  setSelected,
}: MenuBtnProps) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => setSelected(label)}>
      <MediumText
        style={[
          styles.btnText,
          selected === label ? styles.selectedBtn : styles.notSelectedBtn,
        ]}>
        {label}
      </MediumText>
    </TouchableOpacity>
  );
};


const ItemLayout = ( ) => {
  return (
    <View style={styles.itemLayoutContainer}>
      <View style={styles.contentContainer}>
        <Image source={checkMark} style={styles.image} />

        <View style={styles.messageContainer}>
          <MediumText style={styles.messageTitleText}>Name Here</MediumText>
          <RegularText style={styles.messageText}>
            Hi,Good Evening dear.!
          </RegularText>
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.timeHeadingContainer}>
          <SemiBoldText style={styles.messageBadgeText}>05</SemiBoldText>
        </View>
        <MediumText style={styles.timeText}>15.48</MediumText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 13, marginTop: 5},
  itemLayoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  image: {objectFit: 'scale-down', marginLeft: 5, width: 48, height: 48},
  messageContainer: {flex: 1},
  messageTitleText: {fontSize: 20},
  messageText: {fontSize: 13},
  timeContainer: {
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  timeText: {
    fontSize: 10,
    color: 'black',
  },
  timeHeadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: Colors.primaryColor,
  },
  messageBadgeText: {fontSize: 10, color: 'white'},
  btnsContainer: {flexDirection: 'row', gap: 10, marginVertical: 25},
  btnContainer: {flex: 1},
  selectedBtn: {
    backgroundColor: Colors.inboxSelectedColor,
    color: 'white',
  },
  notSelectedBtn: {
    backgroundColor: Colors.lightBGColor,
    color: 'black',
  },
  btnText: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
