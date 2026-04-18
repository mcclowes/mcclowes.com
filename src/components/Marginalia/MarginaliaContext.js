import { createContext, useContext } from 'react';

export const MarginaliaContext = createContext(null);

export function useMarginalia() {
  return useContext(MarginaliaContext);
}
