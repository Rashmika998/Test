import React, { useState, useEffect } from 'react';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded successfully!');
    }, 2000);
  });
};
const DataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};


const Loading=()=>{
  return <h2>🌀 Loading...</h2>;
}
export {DataComponent,Loading};
