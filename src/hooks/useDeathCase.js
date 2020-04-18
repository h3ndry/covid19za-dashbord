import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useDeathCases() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://covid-za-api.herokuapp.com/cases/deaths')
      .then((res) => {
        // handle success
        setData(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      });

    return () => {
      // cleanup
    };
  }, []);

  const deathTimeline = [{}];

  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (data[i].timestamp === data[j].timestamp) {
        const tempObje = {};
        tempObje.date = data[i].date;
        tempObje.accumulated = +2;
      }
    }
  }

  return { data };
}
