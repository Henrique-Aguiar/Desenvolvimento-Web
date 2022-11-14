import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { useCounterContext } from '../../contexts/CounterContext';

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);
  return (
    <div>
      <h1 onClick={() => actions.increase()}>{state.counter}</h1>
      <div>
        <Button onButtonClick={() => actions.increase()}>Increase</Button>
      </div>
    </div>
  );
};
