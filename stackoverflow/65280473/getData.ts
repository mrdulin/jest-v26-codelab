import axios from 'axios';
import { environment } from './environment';
import { AppPersons } from './usersUtils';

const getData = (): Promise<AppPersons[]> => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  };
  return axios
    .get(`${environment.userServiceURL}/persons`, config)
    .then((response) => response.data._embedded.persons)
    .catch((err) => {
      console.log(err);
    });
};
export default getData;
