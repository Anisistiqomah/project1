import axios from '../../utils/axios';

export const getUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};
export const updatePasswod = (id, form) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch(`user/password/${id}`, form),
  };
};
