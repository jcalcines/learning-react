import React from "react";

function CounterExample() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick =  {() => setCount(count + 1)}>
                Plus
            </h1>
            <h1 onClick =  {() => setCount(count - 1)}>
                Minus
            </h1>

        </div>
    )
}

export default CounterExample;