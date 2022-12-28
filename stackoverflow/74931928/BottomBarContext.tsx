import React from 'react';
import {
  useCallback,
  useEffect,
  useState,
  createContext,
  ReactNode,
  FC
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { pushBackRoute } from '../libs/helpers/backRouteHelper';

export interface BottomBarProviderProps {
  children: ReactNode;
}

export interface IBottomBarProvider {
  selectedMenu: string;
  handleClickMenu: (item: { name: string; route: string }) => void;
}

export const defaultValueBottomBarContext = {
  selectedMenu: '',
  handleClickMenu: () => { }
};

export const BottomBarContext = createContext<IBottomBarProvider>(
  defaultValueBottomBarContext
);

export const BottomBarProvider: FC<BottomBarProviderProps> = ({
  children,
  ...props
}) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('Belanja');

  const handleClickMenu = useCallback(
    (item) => {
      setSelectedMenu(item.name);
      // pushBackRoute(location.pathname);
      history.push(item.route);
    },
    [selectedMenu, location?.pathname]
  );

  useEffect(() => {
    if (location.pathname === '/marketplace/history') {
      setSelectedMenu('Riwayat');
    }
  }, [location.pathname]);

  const value: IBottomBarProvider = {
    selectedMenu,
    handleClickMenu
  };

  return (
    <BottomBarContext.Provider value={value} {...props} data-testid="bottom-bar-context">
      {children}
    </BottomBarContext.Provider>
  );
};