import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {increment, decrement, reset, incrementByCount} from "../features/counter/counterSlice.jsx";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState();
    const [switchedAmount, setSwitchedAmount] = useState();
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        setSwitchedAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment(switchedAmount))}>
                    +{switchedAmount || 1}
                </button>
                <button onClick={() => dispatch(decrement(switchedAmount))}>
                    -{switchedAmount || 1}
                </button>
            </div>
            <br/>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => {
                    const value = e.target.value;
                    if (!isNaN(value)) {
                        setIncrementAmount(value);
                    }
                }}
            />
            <button onClick={() => dispatch(incrementByCount(addValue))}>Add Score</button>
            <br/>
            <input
                type="number"
                value={switchedAmount}
                placeholder="Switch Number of Amount"
                onChange={(e) => setSwitchedAmount(Number(e.target.value))}

            />
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={resetAll}>ResetAll</button>
            </div>
        </section>
    );
};

export default Counter;