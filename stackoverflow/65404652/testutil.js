import { render } from '@testing-library/react';

const Providers = ({ children }) => {
  return children;
};
const customRender = (ui, options = {}) => {
  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
