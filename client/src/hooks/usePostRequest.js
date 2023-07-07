import { useState, useEffect } from 'react';

const usePostRequest = (url, data, token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const responseData = await response.json();
        setDataUrl(responseData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, data, token]);

  return { isLoading, error, dataUrl };
};

export default usePostRequest;
