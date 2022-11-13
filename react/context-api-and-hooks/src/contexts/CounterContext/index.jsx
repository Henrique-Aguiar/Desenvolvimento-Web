import P from 'prop-types';
import { useContext, useReducer, useRef } from 'react';
import { createContext } from 'react';
import { buildActions } from './build-actions';

const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState);
  const actions = useRef(buildActions(dispatch));
  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
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
