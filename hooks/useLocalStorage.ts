import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialState: T) {
    const [state, setState] = useState<T>(initialState);

    useEffect(()=> {
        localStorage.setItem(key,JSON.stringify(state));
    }, [state]);

    useEffect(()=>{
        const items = localStorage.getItem(key);
        if(items) setState(JSON.parse(items));
    },[]);

    return [state, setState] as const;   
}