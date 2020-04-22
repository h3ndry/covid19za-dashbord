import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useDeathCases() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://covid-za-api.herokuapp.com/cases/deaths')
      .then((res) => {
        // handle success
        // setData(res.data);
        setData(res.data.length);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    return () => {
      // cleanup
    };
  }, []);

  return [data];
}
