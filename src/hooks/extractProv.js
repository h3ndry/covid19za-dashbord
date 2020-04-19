export default function EtractEachProv(arry) {
  const provData = {
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

  arry.map((each) => {
    provData.EC.push(parseInt(each.provinces.eastern_cape));
    provData.FS.push(parseInt(each.provinces.free_state));
    provData.GP.push(parseInt(each.provinces.gauteng));
    provData.KZN.push(parseInt(each.provinces.kwazulu_natal));
    provData.LP.push(parseInt(each.provinces.limpopo));
    provData.MP.push(parseInt(each.provinces.mpumlanga));
    provData.MP.push(parseInt(each.provinces.mpumlanga));
    provData.NC.push(parseInt(each.provinces.northern_cape));
    provData.WC.push(parseInt(each.provinces.western_cape));
    provData.EC.push(parseInt(each.provinces.eastern_cape));
    provData.UNKN.push(parseInt(each.provinces.unknown));
  });

  return provData;
}
