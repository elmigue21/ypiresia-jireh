'use client'
import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
  isOpen: boolean;
  toggleNavbar: () => void;
  navbarHeight : number;
}

// Properly named context
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Properly named provider
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarHeight = 80;
  const toggleNavbar = () => {
    console.log('PRESSED')
    setIsOpen((prev) => !prev); // toggle logic
  };

  return (
    <NavbarContext.Provider value={{ isOpen,navbarHeight, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Properly named hook
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
