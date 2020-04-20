import { useState } from 'react';
import deathData from '../data/deaths';

import axios from 'axios';

export default function useFetchData(temp_data) {
  const [data, setData] = useState(temp_data);

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

  const getLatestCase = (arry) => {
    let latest;
    arry.map((obj, i) => {
      if (i === arry.length - 1) {
        latest = obj;
      }
    });
    return latest;
  };

  //choose the longest to iterate with

  if (deathData.length > temp_data.length) {
    deathData.map((obj) => {});
  } else {
    temp_data.map((obj) => {});
  }

  const deadNum = deathData.length;
  console.log(deathData.length, temp_data.length);

  // //Return the last element on the array
  const getSecondlastCase = (arry) => {
    let latest;
    arry.map((obj, i) => {
      if (i === arry.length - 2) {
        latest = obj;
      }
    });
    return latest;
  };

  const latestCaseNum = getLatestCase(temp_data).total;
  const secLastCaseNum = getSecondlastCase(temp_data).total;

  function getPecent(a, b) {
    return (((a - b) / b) * 100).toFixed(2);
  }

  return { deadNum, data, latestCaseNum, secLastCaseNum, getPecent };
}
