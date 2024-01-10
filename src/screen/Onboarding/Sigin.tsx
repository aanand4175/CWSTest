import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {colors, screensName, vh, vw} from '../../constants';
import CustomInputBox from '../../components/CustomInputBox';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {saveLoginUser} from '../../features/Auth/authSlice';
import {NavigationType} from '../../components/Header';
import Router from '../../navigator/routes';
interface Props {
  navigation: NavigationType;
}
const errorInitialData = {
  username: '',
  password: '',
};
const Sigin = (props: Props) => {
  const {navigation} = props;
  const input1_ref = React.useRef();
  const input2_ref = React.useRef();

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = React.useState(errorInitialData);
  const {userData} = useAppSelector(state => state.Auth);

  const isValidate = () => {
    try {
      const accountInfoSchema = Yup.object().shape({
        password: Yup.string().nullable().required('Password cannot be empty'),
        username: Yup.string().nullable().required('Username cannot be empty'),
      });

      accountInfoSchema.validateSync({
        password: password,
        username: username,
      });
      return true;
    } catch (err: any) {
      setError({
        ...error,
        [err.path]: err.message,
      });
      return false;
    }
  };
  const saveUserData = () => {
    const params = {
      username: username,
      password: password,
    };
    const userExits = userData.some(
      (user: any) => user.name === username || user.password === password,
    );
    if (userExits) {
      Router.resetNew(navigation, 'BottomTab');
      dispatch(saveLoginUser(params));
    } else {
      Alert.alert('User not found,Please register yourself');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Sign In</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: vh(40)}}>
        <CustomInputBox
          title={'User Name'}
          placeholder={'Enter Username'}
          ref={input1_ref}
          value={username}
          onChangeText={(val: string) => {
            setUsername(val);
            setError({...error, username: ''});
          }}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            input2_ref.current.focus();
          }}
          errorMessage={error.username}
          returnKeyType={'next'}
          isMandatory
        />

        <CustomInputBox
          title={'Password'}
          placeholder={'Enter Password'}
          ref={input2_ref}
          value={password}
          onChangeText={(val: string) => {
            setPassword(val);
            setError({...error, password: ''});
          }}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={error.password}
          isMandatory
        />
      </ScrollView>
      <CustomButton
        buttonText="Submit"
        handleAction={() => {
          if (isValidate()) {
            saveUserData();
          }
        }}
        contentContainerStyle={{marginBottom: vw(20)}}
        isDefaultRImg={false}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screensName.Registration);
        }}>
        <Text style={styles.loginText}>Registration</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Sigin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headingText: {
    fontFamily: '900',
    fontSize: vw(16),
    color: colors.black,
    textAlign: 'center',
    marginTop: vh(30),
  },
  loginText: {
    fontFamily: '900',
    fontSize: vw(16),
    color: colors.black,
    textAlign: 'center',
    marginBottom: vh(30),
  },
});
