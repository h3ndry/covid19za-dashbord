import { useEffect, useState } from 'react';
import axios from 'axios';
import extractProv from './extractProv';

import temp_data from '../data/cumulative';
import { pluginService } from 'chart.js';
export default function useDeathCases() {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'
      )
      .then((res) => {
        // handle success
        setData(extractProv(res.data));
      })
      .catch((error) => {
        // handle error
        setData(extractProv(temp_data));
      });

    return () => {
      // cleanup
    };
  }, []);

  console.log(data);

  return { loading, data };
}
