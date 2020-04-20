import { useState, useEffect } from 'react';
import extractOverview from './extractOverview';
import temp_data from '../data/cumulative';

import axios from 'axios';

export default function useFetchData() {
  const [data, setData] = useState({});
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'
      )
      .then((res) => {
        // handle success
        setData(extractOverview(res.data));
        setLoding(false);
      })
      .catch((error) => {
        // handle error
        setData(extractOverview(temp_data));
        setLoding(false);
      });

    return () => {
      // cleanup
    };
  }, []);

  return { loading, data };
}
