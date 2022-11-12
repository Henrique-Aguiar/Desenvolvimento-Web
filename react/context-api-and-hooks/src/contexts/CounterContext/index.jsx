import P from 'prop-types';
import { useContext, useState } from 'react';
import { createContext } from 'react';

const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(context);

  if (!context) {
    throw new Error('You have to use useContext inside <CounterContextProvider>');
  }

  return [...context];
};
