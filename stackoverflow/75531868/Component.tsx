import { useStateValue } from './StateProvider';

export type IProps = {
  prop1: any;
  prop2: any;
  prop3: any;
};
export const Component = ({ prop1, prop2, prop3 }: IProps) => {
  const [{ initialState }] = useStateValue();
  console.log("🚀 ~ file: Component.tsx:10 ~ Component ~ initialState:", initialState)
  return null;
};
