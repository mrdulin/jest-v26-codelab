import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React, { useContext } from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { BottomBarContext, BottomBarProvider } from './BottomBarContext';

describe('BottomBarProvider', () => {
  test('should pass', async () => {
    const TestComp = () => {
      const bottomBarContext = useContext(BottomBarContext);
      const menuItems = [
        { name: 'a', route: '/a' },
        { name: 'b', route: '/b' },
      ];
      return (
        <>
          <ul>
            {menuItems.map((item) => (
              <li key={item.route} onClick={() => bottomBarContext.handleClickMenu(item)}>
                {item.name}
              </li>
            ))}
          </ul>
          <p>selected menu: {bottomBarContext.selectedMenu}</p>
          <Switch>
            {menuItems.map((item) => (
              <Route key={item.route} path={item.route} component={() => <div>{item.name} component</div>} />
            ))}
          </Switch>
        </>
      );
    };
    render(
      <MemoryRouter initialEntries={['/']}>
        <BottomBarProvider>
          <TestComp />
        </BottomBarProvider>
      </MemoryRouter>
    );
    const firstListItem = screen.getAllByRole('listitem')[0];
    fireEvent.click(firstListItem);
    expect(screen.getByText('selected menu: a')).toBeInTheDocument();
    expect(screen.getByText('a component')).toBeInTheDocument();
  });
});
