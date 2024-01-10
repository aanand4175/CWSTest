import {StyleSheet} from 'react-native';
import {colors, vh, vw} from '../../constants';

export default StyleSheet.create({
  container: {
    width: vw(332),
    height: vh(45),
    borderWidth: vw(1),
    backgroundColor: colors.white,
    borderRadius: vw(10),
    borderColor: colors.borderColor,
    alignSelf: 'center',
    marginTop: vh(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(13),
  },
  textInputLabel: {
    width: vw(332),
    color: colors.lightGrey,
    fontSize: vw(14),
    alignSelf: 'center',
  },
  textInputContainer: {},
  passwordIconContainer: {
    height: vw(20),
    width: vw(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: vw(13),
    color: colors.lightGrey,
    maxWidth: vw(280),
  },
  errorStyle: {
    borderColor: colors.red,
    color: colors.red,
  },
  errorWithOutStyle: {
    borderColor: colors.black,
    color: colors.black,
  },
  errorText: {
    marginVertical: vh(6),
    fontSize: 14,
    color: colors.red,
    textAlign: 'left',
  },
  mandatoryStar: {color: colors.lightGrey, fontSize: vw(14)},
});
