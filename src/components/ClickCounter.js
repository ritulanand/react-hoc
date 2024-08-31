import withCounter from "./withCounter";
import withName from "./withName";

const ClickCounter = (props) => {
  const {count, incrementCount, name} = props;

    return(
        <div>
            <button onClick={incrementCount}>Click Me</button>
            <h2>Count is {count}</h2>
            <h2>Name is {name}</h2>
        </div>
    )
}

export default withName(withCounter(ClickCounter, 10));