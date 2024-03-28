'use client'
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

type SideBarContextType = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarContext = createContext<SideBarContextType>({
   isSideBarOpen: false,
   setIsSideBarOpen: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

function SideBarProvider({ children }: React.PropsWithChildren<{}>) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
}

export { SideBarContext, SideBarProvider };