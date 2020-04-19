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
        setData(extractProv(res.dataa));
        setLoding(false);
      })
      .catch((error) => {
        // handle error
        setData(extractProv(temp_data));
        setLoding(false);
      });

    return () => {
      // cleanup
    };
  }, []);

  return { loading, data };
}
