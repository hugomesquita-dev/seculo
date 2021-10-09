import * as type from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../config/api';

const studentRequestSuccess = (payload) => {
  return {
    type: type.STUDENT_LOGIN_SUCCESS,
    payload,
  };
};

const studentRequestFailure = (payload) => {
  return {
    type: type.STUDENT_LOGIN_FAILURE,
  };
};

const selectStudentSuccess = (payload) => {
  return {
    type: type.STUDENT_SELECT_SUCCESS,
    payload,
  };
};

export const getStudents = () => {
  return async function (dispatch) {
    const user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));

    api
      .post('/alunos/lstAlunos/', {
        p_cd_usuario: user.USU_LOGIN,
      })
      .then(async (res) => {
        dispatch(studentRequestSuccess(res.data));

        await AsyncStorage.setItem(
          '@seculo/student',
          JSON.stringify(res.data[0]),
        );

        dispatch(selectStudentSuccess(res.data[0]));
      })
      .catch((err) => {});
  };
};

export const getSelectedStudent = () => {
  return async function (dispatch) {
    const student = JSON.parse(await AsyncStorage.getItem('@seculo/student'));

    dispatch(selectStudentSuccess(student));
  };
};

export const selectStudent = (student) => {
  return async function (dispatch) {
    await AsyncStorage.setItem('@seculo/student', JSON.stringify(student));

    dispatch(selectStudentSuccess(student));
  };
};
