import apiClient from '../apiClient';

const patientSets = async () => {
  return await apiClient().get(`patient_sets`);
};

export default { patientSets };
