import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as type from './types';
import * as RootNavigation from '../../../RootNavigation';

import api from '../../config/api';

import {selectStudent} from '../students/actions';

const authStoreSuccess = (payload) => {
  return {
    type: type.AUTH_LOGIN_SUCCESS,
    payload,
  };
};

const studentsStoreSuccess = (payload) => {
  return {
    type: type.AUTH_SET_STUDENTS,
    payload,
  };
};

const studentStoreSuccess = (payload) => {
  return {
    type: type.AUTH_SET_STUDENT,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: type.AUTH_LOGIN_FAILURE,
    payload,
  };
};

export const verification = () => {
  return async function (dispatch) {
    const user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));
    const students = JSON.parse(await AsyncStorage.getItem('@seculo/students'));
    const student = JSON.parse(await AsyncStorage.getItem('@seculo/student'));

    if (user && student) {
      dispatch(authStoreSuccess(user));
      dispatch(studentsStoreSuccess(students));
      dispatch(studentStoreSuccess(student));

      RootNavigation.navigate('Dashboard');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'É necessário efetuar o login para acessar a aplicação.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );

      RootNavigation.navigate('Signin');
    }
  };
};

export const login = (params) => {
  return async function (dispatch) {
    api
      .post(
        '/auth/',
        {
          p_cd_usuario: params.user,
          p_usu_senha: params.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(async (res) => {

        user = res.data.user[0]
        await AsyncStorage.setItem(
          '@seculo/user',
          JSON.stringify(res.data.user[0]),
        );

        console.log("USUARIO: "+JSON.stringify(user))

        dispatch(authStoreSuccess(res.data.user[0]));

        if (res.data.students.length) {

          user.student = res.data.students[0]
          await AsyncStorage.setItem(
            '@seculo/user',
            JSON.stringify(user),
          );

          await AsyncStorage.setItem(
            '@seculo/students',
            JSON.stringify(res.data.students),
          );

          await AsyncStorage.setItem(
            '@seculo/student',
            JSON.stringify(res.data.students[0]),
          );

          dispatch(studentsStoreSuccess(res.data.students));
          dispatch(studentStoreSuccess(res.data.students[0]));
          dispatch(selectStudent(res.data.students[0]))
        } else {
          await AsyncStorage.setItem('@seculo/students', JSON.stringify([]));

          await AsyncStorage.setItem(
            '@seculo/student',
            JSON.stringify(res.data.user[0]),
          );

          dispatch(studentsStoreSuccess(res.data.user[0]));
          dispatch(studentStoreSuccess(res.data.user[0]));
        }

        RootNavigation.navigate('Dashboard');
      })
      .catch((err) => {
        alert(
          'Não foi possível efetuar o login, verifique o usuário e senha digitado.',
        );
      });
  };
};
