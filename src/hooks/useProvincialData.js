import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useDeathCases() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative'
      )
      .then((res) => {
        // handle success
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    return () => {
      // cleanup
    };
  }, []);

  //Extract the data I need
  let dates = [];
  let EC = [];
  let FS = [];
  let GP = [];
  let KZN = [];
  let LP = [];
  let NC = [];
  let NW = [];
  let WC = [];
  let MP = [];
  let UNKN = [];

  data.map((eachData) => {
    let tempDate = eachData.date;
    let tempEC = eachData.provinces.eastern_cape;
    let tempFS = eachData.provinces.free_state;
    let tempGP = eachData.provinces.gauteng;
    let tempKZN = eachData.provinces.kwazulu_natal;
    let tempLP = eachData.provinces.limpopo;
    let tempNC = eachData.provinces.northern_cape;
    let tempNW = eachData.provinces.north_west;
    let tempWC = eachData.provinces.western_cape;
    let tempMP = eachData.provinces.mpumlanga;
    let tempUNKN = eachData.provinces.unknown;

    dates = [...dates, tempDate];
    EC = [...EC, tempEC];
    FS = [...FS, tempFS];
    GP = [...GP, tempGP];
    KZN = [...KZN, tempKZN];
    LP = [...LP, tempLP];
    NC = [...NC, tempNC];
    NW = [...NW, tempNW];
    WC = [...WC, tempWC];
    MP = [...MP, tempMP];
    UNKN = [...UNKN, tempUNKN];
  });

  return { dates, UNKN, MP, WC, NW, NC, KZN, LP, GP, FS };
}
