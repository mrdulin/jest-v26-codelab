import { useAppDispatch } from './store';
import { registrationFormSlice } from './registration';

export interface IgetFields {
  label: string;
  valueKey: string;
  setValue: any;
  disabled?: boolean;
}

export const useFields = (): (() => IgetFields[][]) => {
  const dispatch = useAppDispatch();

  const { setEmail } = registrationFormSlice.actions;

  const getFields = (): IgetFields[][] => {
    return [
      [
        {
          label: 'Email',
          valueKey: 'email',
          setValue: (value: string) => dispatch(setEmail({ value, error: false, text: '' })),
        },
      ],
    ];
  };
  return getFields;
};
