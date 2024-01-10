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
import {emailRegex} from '../../utils/CommonFunction';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {saveCrediantial} from '../../features/Auth/authSlice';
import {NavigationType} from '../../components/Header';
interface Props {
  navigation: NavigationType;
}
const errorInitialData = {
  name: '',
  email: '',
  password: '',
};
const Registration = (props: Props) => {
  const {navigation} = props;
  const input1_ref = React.useRef();
  const input2_ref = React.useRef();
  const input3_ref = React.useRef();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = React.useState(errorInitialData);
  const {userData} = useAppSelector(state => state.Auth);
  console.log('user data', userData);
  const isValidate = () => {
    try {
      const accountInfoSchema = Yup.object().shape({
        password: Yup.string().nullable().required('Password cannot be empty'),
        email: Yup.string()
          .nullable()
          .required('Email ID cannot be empty')
          .matches(emailRegex, 'Enter Vaild Email Id'),
        name: Yup.string().nullable().required('Name cannot be empty'),
      });

      accountInfoSchema.validateSync({
        password: password,
        email: email,
        name: name,
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
      id: nanoid(),
      name: name,
      email: email,
      password: password,
    };
    const userExits = userData.some(
      (user: any) => user.email === email || user.name === name,
    );
    if (userExits) {
      Alert.alert('User already exits!');
    } else {
      dispatch(saveCrediantial(params));
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate(screensName.Sigin);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>User Registration</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: vh(40)}}>
        <CustomInputBox
          title={'Name'}
          placeholder={'Enter Name'}
          ref={input1_ref}
          value={name}
          onChangeText={(val: string) => {
            setName(val);
            setError({...error, name: ''});
          }}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            input2_ref.current.focus();
          }}
          errorMessage={error.name}
          returnKeyType={'next'}
          isMandatory
        />
        <CustomInputBox
          title={'Email'}
          placeholder={'Enter Email'}
          ref={input2_ref}
          value={email}
          onChangeText={(val: string) => {
            setEmail(val);
            setError({...error, email: ''});
          }}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            input3_ref.current.focus();
          }}
          errorMessage={error.email}
          isMandatory
        />
        <CustomInputBox
          title={'Password'}
          placeholder={'Enter Password'}
          ref={input3_ref}
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
          navigation.navigate(screensName.Sigin);
        }}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registration;

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
