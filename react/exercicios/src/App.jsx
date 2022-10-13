import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
        urlRef.current = url
        changed = true;
    }

    if (!isObjectEqual(options, optionsRef.current)) {
        optionsRef.current = options
        changed = true;
    }

    if (changed) {
        setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    console.log('EFFECT', new Date().toLocaleString());
    console.log(optionsRef.current.headers);

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };

    fetchData();
  }, [shouldLoad]);

  return [result, loading];
};

export const App = () => {
  const [PostId, setPostId] = useState('')   
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + PostId,
  {
    headers: {
        abc: '6',
    }
  }
);

  useEffect(() => {
    console.log('Id do post', PostId)
  }, [PostId])

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id)
  } 

  if (!loading && result) {
    return (
        <div>
            {result?.length > 0 ? (
                result.map((p) => (
                    <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
                        <p>{p.title}</p>
                    </div>
                ))
            ) : (
                <div onClick={() => handleClick('')}>
                    <p>{result.title}</p>
                </div>
            )}
        </div>
    )
  }

  return <h1>Oi</h1>;
};