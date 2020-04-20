export default function EtractEachProv(array) {
  const latesProv = [];

  array.forEach((element, index) => {
    if (array.length - 1 === index) {
      latesProv.push(parseInt(element.provinces.eastern_cape));
      latesProv.push(parseInt(element.provinces.free_state));
      latesProv.push(parseInt(element.provinces.gauteng));
      latesProv.push(parseInt(element.provinces.kwazulu_natal));
      latesProv.push(parseInt(element.provinces.limpopo));
      latesProv.push(parseInt(element.provinces.mpumlanga));
      latesProv.push(parseInt(element.provinces.northern_cape));
      latesProv.push(parseInt(element.provinces.north_west));
      latesProv.push(parseInt(element.provinces.western_cape));
      latesProv.push(parseInt(element.provinces.unknown));
    }
  });

  return latesProv;
}
