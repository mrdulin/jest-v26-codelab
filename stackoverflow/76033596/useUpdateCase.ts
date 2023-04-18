import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

type UpdateCaseRequest = any;
type CaseDto = any;

const api = {
  updateCase(id, payload) {
    return axios.put(`/api/case/${id}`, payload);
  },
};

export const useUpdateCase = (caseId: number) => {
  const queryClient = useQueryClient();
  const [error, setError] = useState<any>(undefined);

  const mutation = useMutation({
    mutationFn: (payload: UpdateCaseRequest): Promise<AxiosResponse<CaseDto> | undefined> =>
      api.updateCase(caseId, payload),
    onSuccess: (data) => {
      console.log('onSuccess');
      queryClient.setQueryData(['case', caseId], data);
      setError(undefined);
    },
    onError: (error) => {
      console.log('onError');
      setError(error);
    },
  });

  return { mutation, error };
};
