import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let res;

test('Should return 0 if no epenses', () => {
  res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
  res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('Should correctly add up multiple expenses', () => {
  res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});