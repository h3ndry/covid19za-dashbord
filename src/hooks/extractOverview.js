export default (array) => {
  const casesTL = {
    dates: [],
    cases: [],
    latesCases: [],
    secondLast: [],
  };

  array.forEach((element, index) => {
    casesTL.dates.push(element.date);
    casesTL.cases.push(element.total);

    if (array.length - 1 === index) {
      casesTL.latesCases.push(element.total);
    }

    if (array.length - 2 === index) {
      casesTL.secondLast.push(element.total);
    }
  });

  return casesTL;
};
