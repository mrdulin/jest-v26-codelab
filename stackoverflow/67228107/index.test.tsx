import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FormattedDate } from 'react-intl';
import { LocalizationWrapper } from '.';
import { Context } from './';

describe('67228107', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('date formatted with default locale', () => {
    let renderedContext;
    class TestComponent extends React.PureComponent {
      static contextType = Context;
      render() {
        renderedContext = this.context;
        return <FormattedDate value={new Date('2021-04-23')} />;
      }
    }
    act(() => {
      render(
        <LocalizationWrapper>
          <TestComponent />
        </LocalizationWrapper>,
        container
      );
    });

    expect(container.textContent).toBe('4/23/2021');
    act(() => {
      renderedContext.changeLocale('fr');
    });
    expect(renderedContext.locale).toBe('fr');
  });
});
