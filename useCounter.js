import {useState} from 'react';

const useCounter =(number=10)=>{
    const [count,setCount] = useState(number);

    const increment =()=>{
        setCount(count + 1);
    }

    const reset =()=>{
        setCount(count);
    }

    const decrement =()=>{
        setCount(count - 1);
    }

    return{
        count,
        increment,
        decrement,
        reset
    };
}

export default useCounter;