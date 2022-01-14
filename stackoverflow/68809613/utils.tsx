import React from 'react';
import { queries, render as rtlRender, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RenderResult } from '@testing-library/react/types';

/* Type Definitions */
type Route = {
  state: Record<string, unknown>;
  title: string;
  location: string;
};

/* Helper Functions */
export function render(
  ui: React.ReactElement,
  options: { route: Route } & Omit<RenderOptions, 'queries'>
): RenderResult<typeof queries> {
  const { route, ...rest } = options;
  window.history.pushState(route?.state ?? null, route?.title ?? 'Root', route?.location ?? '/');

  const Wrapper: React.FC = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...rest });
}
