import {useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';

const useFetch =(url='')=>{

    const [state,setState] = useState({data:null,loading:true,error:false});

    const isMounted = useRef(true);

    useEffect(()=>{
        return ()=>{
            isMounted.current=false;
        }
    },[])

    useEffect(()=>{

        setState({data:null,loading:true,error:false});

        fetch(url).then(res => res.json())
        .then(data =>{
            if(isMounted.current){
                setState({
                    data:data,
                    loading:false,
                    error:false
                });
            }
        }).catch(()=>{
            setState({
                data:null,
                loading:false,
                error:'Surgio un error'
            });
        });
    },[url]);

    return state;

}

useFetch.protoType={
    url: PropTypes.string.isRequired
}

export default useFetch;