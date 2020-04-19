import { useEffect, useState } from 'react';
import axios from 'axios';

import temp_data from '../data/cumulative';
import { pluginService } from 'chart.js';
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
      })
      .catch((error) => {
        // handle error
        setData(temp_data);
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
  const Totals = {};
  let arryProv = [];

  data.map((eachData, index) => {
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

    if (data.length - 1 === index) {
      Totals.EC = eachData.provinces.eastern_cape;
      arryProv.push(parseInt(Totals.EC));

      Totals.FS = eachData.provinces.free_state;
      arryProv.push(parseInt(Totals.FS));

      Totals.GP = eachData.provinces.gauteng;
      arryProv.push(parseInt(Totals.GP));

      Totals.KZN = eachData.provinces.kwazulu_natal;
      arryProv.push(parseInt(Totals.KZN));

      Totals.LP = eachData.provinces.limpopo;
      arryProv.push(parseInt(Totals.LP));

      Totals.NC = eachData.provinces.northern_cape;
      arryProv.push(parseInt(Totals.LP));

      Totals.NW = eachData.provinces.north_west;
      arryProv.push(parseInt(Totals.NW));

      Totals.MP = eachData.provinces.mpumlanga;
      arryProv.push(parseInt(Totals.MP));

      Totals.WC = eachData.provinces.western_cape;
      arryProv.push(parseInt(Totals.WC));

      Totals.UNKN = eachData.provinces.unknown;
      arryProv.push(parseInt(Totals.UNKN));

      console.log(eachData);
    }
  });

  return { arryProv, Totals, UNKN, MP, WC, NW, NC, KZN, LP, GP, FS };
}
