import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setTimeout(() => {
            fetch(url, { signal })
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIspending(false);
                        setError(err.message);
                    }
                });
        }, 1000);
        return () => controller.abort();
    }, []);

    return ({ data, ispending, error });
}

export default useFetch;


