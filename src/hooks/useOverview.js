import { useState, useEffect } from 'react';
import deathData from '../data/deaths';

import axios from 'axios';

export default function useFetchData(temp_data) {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'
      )
      .then((res) => {
        // handle success
        // setData(extractProv(res.dataa));
        setLoding(false);
      })
      .catch((error) => {
        // handle error
        // setData(extractProv(temp_data));
        setLoding(false);
      });

    return () => {
      // cleanup
    };
  }, []);

  return { loading, data };
}
