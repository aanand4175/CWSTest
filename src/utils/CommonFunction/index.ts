import {Platform} from 'react-native';
export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

type ellipsizeMode = 'head' | 'middle' | 'tail' | 'clip';
export const nFixedLines = (
  numberOfLines: number = 1,
  ellipsizeMode: ellipsizeMode = 'tail',
) => ({
  numberOfLines,
  ellipsizeMode,
});

export function isNullUndefined(item: any, check: boolean = false) {
  try {
    let x =
      item === null ||
      item === undefined ||
      item === 'undef' ||
      item === 'undefined' ||
      item === 'null' ||
      item === '' ||
      Object.keys(item).length === 0;
    if (check) {
    }
    return x;
  } catch (err) {
    return true;
  }
}
export const getDynamicColor = () => {
  const COLORS = ['#FFD7ED', '#CEE7FF', '#D8FFEB', '#F6F1C0', '#F3C294'];
  var len = COLORS.length;
  var randomNum = Math.floor(Math.random() * len);
  var color = COLORS[randomNum];
  COLORS.splice(randomNum, 1);
  return color;
};

export const removeEmojis = (str: string) => {
  const regex =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  return str.replace(regex, '');
};
export const normalizeSpaces = (value: string) => {
  return value.replace('  ', ' ');
};
export const normalizeFirstSpace = (value: string) => {
  return value.replace(/^\s+/g, '');
};
export const removeAlphabet = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};
export const normalizeNumber = (value: string) => {
  return value.replace(/\D/g, '');
};
export const delay = (interval = 250) =>
  new Promise(resolve => setTimeout(resolve, interval));

export const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
export const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/g;
export const mobileRegex = /^[6-9]{1}[0-9]{9}$/;
export const countryCodeRegex = /^[1-9]{1,2}$/;
