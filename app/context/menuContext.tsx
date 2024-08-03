'use client';
import { useContext, useState, createContext } from 'react';
import { ReactNode } from 'react';

const menuContext = createContext<any>(null);

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
    console.log(openMenu);
  };
  return (
    <menuContext.Provider value={{ openMenu, handleOpenMenu }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuProvider;
export const useMenu = () => useContext(menuContext);
