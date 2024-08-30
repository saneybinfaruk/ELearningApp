import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RegularText from '../RegularText';
import {Colors} from '../../theme/MyColors';

interface Props {
  price: number;
  discount: string;
}
const PurchaseDetails = ({price, discount}: Props) => {
  const date = new Date();
  return (
    <>
      <View style={styles.container}>
        <RegularText style={styles.headingView}>Purchase Details</RegularText>

        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            <RegularText style={styles.headlineText}>Date:</RegularText>
            <RegularText style={styles.valueText}>{`${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`}</RegularText>
          </View>

          <View style={styles.itemContainer}>
            <RegularText style={styles.headlineText}>
              Price Of Course:
            </RegularText>
            <RegularText style={styles.valueText}>{price}$</RegularText>
          </View>
          <View style={styles.itemContainer}>
            <RegularText style={styles.headlineText}>Coupon:</RegularText>
            <RegularText style={styles.valueText}>
              Added {discount} Discount
            </RegularText>
          </View>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <RegularText style={styles.priceHeadingText}>Final Price:</RegularText>
        <RegularText style={styles.priceText}>{price}$</RegularText>
      </View>
    </>
  );
};

export default PurchaseDetails;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderColor: Colors.inActiveColor,
    borderWidth: 1,
    marginTop: 25,
  },
  headingView: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    top: -20,
    left: 35,
    backgroundColor: 'white',
    padding: 12,
    borderWidth: 0.2,
    borderColor: 'lightgray',
  },
  contentContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 3,
    paddingVertical: 30,
  },
  itemContainer: {flexDirection: 'row', gap: 5, alignItems: 'center'},
  headlineText: {fontSize: 12, color: 'black'},
  valueText: {fontSize: 15, color: 'black', fontWeight: 'bold'},

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-end',
    marginHorizontal: 5,
    marginTop: 20,
  },
  priceHeadingText: {fontSize: 12},
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primaryDarkColor,
  },
});
