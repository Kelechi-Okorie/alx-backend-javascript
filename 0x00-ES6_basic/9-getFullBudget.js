import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: () => `$${fullBudget.income}`,
    getIncomeInEuros: () => `${fullBudget.income} euros`,
  };

  return fullBudget;
}
