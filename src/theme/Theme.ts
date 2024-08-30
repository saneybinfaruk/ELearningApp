import {DefaultTheme} from '@react-navigation/native';
import {Colors} from './MyColors';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: Colors.primaryColor,
    primaryDarkColor: '#1A5319',
    primaryAccentColor: '#1A5319',
    background: 'white',
    card: 'white',
    text: 'black',
    textLight: 'dimgray',
    border: 'lightgray',
    notification: '#9E08AB',
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: '#191A29',
    primaryDarkColor: '#11111B',
    primaryAccentColor: '#191A29',
    background: '#222432',
    card: '#2E2F45',
    text: 'white',
    textLight: 'whitesmoke',
    border: '#3e405e',
    notification: '#1A5319',
  },
};
