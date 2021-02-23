import {useState} from 'react';

const useForm =( data = {} )=>{
    const [values,setValues] = useState(data);

    const reset=()=>{
        setValues(data);
    }

    const handleChange =({target})=>{
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values,handleChange,reset];
}

export default useForm;