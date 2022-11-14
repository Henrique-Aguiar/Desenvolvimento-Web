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
        <Button onButtonClick={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClick={() => actions.reset()}>reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set10</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>set100</Button>
        <Button disabled={state.loading} onButtonClick={() => actions.asyncIncrease()}>
          async increase
        </Button>
        <Button disabled={state.loading} onButtonClick={() => actions.asyncError()}>
          async error
        </Button>
      </div>
    </div>
  );
};
