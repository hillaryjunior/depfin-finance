

export const calculateLoanRepayment = (amount, rate, years) => {
  let repayment = (amount * (rate * 0.01)) / (years * 12);
  let monthlyRepayment = (amount / (years * 12) + repayment).toFixed(2);
  const totalRepayment = (monthlyRepayment * years * 12).toFixed(2);
  return totalRepayment;
};

export const calculateLoanRepaymentMonthly = (amount, rate, years) => {
  let repayment = (amount * (rate * 0.01)) / (years * 12);
  let monthlyRepayment = (amount / (years * 12) + repayment).toFixed(2);
  return monthlyRepayment;
};
