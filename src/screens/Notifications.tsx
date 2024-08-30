import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import checkMark from '../../assets/photos/check_mark.png';
import page from '../../assets/photos/page.png';
import done from '../../assets/photos/done.png';
import {Colors} from '../theme/MyColors';
import BoldText from '../components/BoldText';
import RegularText from '../components/RegularText';
import useBottomBarVisibility from '../hook/useBottomBarVisibility';

const Notifications = () => {
  /**
   * Hide the bottom navigation bar after entering the component.
   *
   * This hook is used to manage the visibility of the bottom navigation bar.
   * It ensures that the bottom navigation bar is hidden when this component is mounted.
   */
  useBottomBarVisibility();
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={[1, 1, 1, 1, 1, 1]}
      renderItem={({item, index}) =>
        index > 3 ? (
          <ItemLayout
            placeHolderImage={checkMark}
            time="Just Now"
            title={'Transition Completed'}
          />
        ) : index % 3 === 0 ? (
          <ItemLayout
            placeHolderImage={page}
            time={`${index + 2}min age`}
            title={'Due Date Is Near'}
          />
        ) : (
          <ItemLayout
            placeHolderImage={done}
            time={`${index + 2}min age`}
            title={'Lesson Completed'}
          />
        )
      }
      ListFooterComponent={<View style={{height: 100}} />}
    />
  );
};

export default Notifications;

interface ItemProps {
  title: string;
  time: string;
  placeHolderImage: any;
}
const ItemLayout = ({time, title, placeHolderImage}: ItemProps) => {
  return (
    <View style={styles.itemLayoutContainer}>
      <View style={styles.contentContainer}>
        <Image source={placeHolderImage} style={styles.image} />
        <View style={styles.nameContainer}>
          <BoldText style={{fontSize: 16}}>{title}</BoldText>
          <RegularText
            style={{fontFamily: 'PlusJakartaSans-ExtraLight', fontSize: 10}}>
            lorem ipsum Dummy Text Here
          </RegularText>
        </View>
      </View>
      <RegularText style={styles.timeText}>{time}</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 13, marginTop: 30},
  itemLayoutContainer: {
    minHeight: 120,
    backgroundColor: Colors.lightBGColor,
    marginVertical: 8,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.8,
    gap: 10,
  },
  image: {objectFit: 'scale-down', marginLeft: 20},
  nameContainer: {
    flex: 1,
  },
  nameText: {fontSize: 16},
  authorNameText: {fontFamily: 'PlusJakartaSans-ExtraLight', fontSize: 10},
  timeText: {
    fontFamily: 'PlusJakartaSans-ExtraLight',
    fontSize: 10,
    flex: 0.2,
    marginLeft: 18,
  },
});
