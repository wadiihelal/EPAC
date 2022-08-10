import React, { useState, useEffect } from "react";
import axios from "axios";
export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return { data, loading, error };
};
