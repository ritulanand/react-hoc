import withCounter from "./withCounter";


const HoverCounter = (props) => {
    const {count, incrementCount} = props;

    return(
        <div>
            <button onMouseOver={incrementCount} >Hover Me</button>
            <h2>Count is {count}</h2>
        </div>
    )
}

export default withCounter(HoverCounter, 5);