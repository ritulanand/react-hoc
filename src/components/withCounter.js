import {useState} from "react";


const withCounter = (OldComponent, incrementBy = 1) => {
   return function EnhancementComponent(props){
    const [count, setCount] = useState(0);
    return (
        <OldComponent {...props} count={count} incrementCount={() => setCount(count + incrementBy)}  name="withCounter"/>
    )
   }
}

export default withCounter;