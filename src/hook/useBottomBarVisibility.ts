import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/MyColors';

/**
 * Hide the bottom navigation bar after entering the component.
 *
 * This hook is used to manage the visibility of the bottom navigation bar.
 * It ensures that the bottom navigation bar is hidden when this component is mounted.
 */

const useBottomBarVisibility = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: Colors.inboxSelectedColor,
          elevation: 0,
          borderWidth: 0,
          position: 'absolute',
          marginHorizontal: 15,
          marginBottom: 10,
          borderRadius: 10,
          borderColor: 'transparent',
          height: 35,
        },
      });
  }, [navigation, isFocused]);
};

export default useBottomBarVisibility;

const styles = StyleSheet.create({});
