import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo que contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      return { ...state, title: 'mudou' };
    }
    case 'inverter': {
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, body, counter } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
    </div>
  );
}

export default App;
