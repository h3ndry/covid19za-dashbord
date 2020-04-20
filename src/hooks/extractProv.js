export default function EtractEachProv(array) {
  const provData = {
    dates: [],
    EC: [],
    FS: [],
    GP: [],
    KZN: [],
    LP: [],
    MP: [],
    NC: [],
    NW: [],
    WC: [],
    UNKN: [],
  };

  array.forEach((element, index) => {
    provData.dates.push(element.date);

    provData.EC.push(parseInt(element.provinces.eastern_cape));
    provData.FS.push(parseInt(element.provinces.free_state));
    provData.GP.push(parseInt(element.provinces.gauteng));
    provData.KZN.push(parseInt(element.provinces.kwazulu_natal));
    provData.LP.push(parseInt(element.provinces.limpopo));
    provData.MP.push(parseInt(element.provinces.mpumlanga));
    provData.NC.push(parseInt(element.provinces.northern_cape));
    provData.NW.push(parseInt(element.provinces.north_west));
    provData.WC.push(parseInt(element.provinces.western_cape));
    provData.UNKN.push(parseInt(element.provinces.unknown));
  });

  return provData;
}
