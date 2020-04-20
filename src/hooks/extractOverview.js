export default (array) => {
  const casesTL = {
    dates: [],
    cases: [],
  };

  array.forEach((element, index) => {
    casesTL.dates.push(element.date);
    casesTL.cases.push(element.total);

    if (array.length - 1 === index) {
      casesTL.latesCases = element.total;
    }

    if (array.length - 2 === index) {
      casesTL.secondLast = element.total;
    }
  });

  return casesTL;
};
