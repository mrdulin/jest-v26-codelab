import axios from 'axios';

export const MessagesActionTypes = {
  GET_MESSAGES_LIST: {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
  },
};
const config = {
  apiUrl: 'http://localhost:8080/v1/api',
  methods: {
    getMessagesList: '/messages',
  },
};
export const GetChatList = (userStatus) => {
  return (dispatch) => {
    dispatch({ type: MessagesActionTypes.GET_MESSAGES_LIST.REQUEST, payload: {} });
    return axios
      .get(config.apiUrl + config.methods.getMessagesList, { params: { accountType: userStatus } })
      .then((res) => dispatch({ type: MessagesActionTypes.GET_MESSAGES_LIST.SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: MessagesActionTypes.GET_MESSAGES_LIST.ERROR, payload: 'error text' }));
  };
};
