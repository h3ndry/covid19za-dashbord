import { useEffect, useState } from 'react';
import axios from 'axios';
import extractProv from './extractProv';
import extractLatesProv from './extractLatesProv';

import temp_data from '../data/cumulative';

export default function useProveData() {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(true);
  const [latesProv, setLatesProv] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'
      )
      .then((res) => {
        // handle success
        setData(extractProv(res.data));
        setLatesProv(extractLatesProv(res.data));
        setLoding(false);
      })
      .catch((error) => {
        // handle error
        setData(extractProv(temp_data));
        setLatesProv(extractLatesProv(temp_data));
        setLoding(false);
      });

    return () => {
      // cleanup
    };
  }, []);

  return { loading, data, latesProv };
}
