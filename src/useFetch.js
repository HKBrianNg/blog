import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data from the resource.');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIspending(false);
                    setError(null);
                })
                .catch((err) => {
                    console.log(err.message);
                    setIspending(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);

    return ({ data, ispending, error });
}

export default useFetch;


