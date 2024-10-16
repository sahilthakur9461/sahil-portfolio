"use client"
import { createContext, useContext, useState, ReactNode} from "react";

interface LockContextType {
  isLocked: boolean;
  unlocking: boolean;
  toggleLock: () => void;
}

const LockContext = createContext<LockContextType | undefined>(undefined);

export const useLock = () => {
  const context = useContext(LockContext);
  if (!context) {
    throw new Error("useLock must be used within a LockProvider");
  }
  return context;
};

export const LockProvider = ({ children }: { children: ReactNode }) => {
  const [isLocked, setIsLocked] = useState(true);
  const [unlocking, setUnlocking] = useState(false);
  const toggleLock = () => {
    if (isLocked) {
      setUnlocking(true);
      setTimeout(() => {
        setIsLocked(false);
        setUnlocking(false);
      }, 600);
    } else {
      setIsLocked(true);
    }
  };
  return (
    <LockContext.Provider
      value={{ isLocked, unlocking, toggleLock }}
    >
      {children}
    </LockContext.Provider>
  );
};
