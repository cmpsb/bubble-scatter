const scatter = require('./sort.js');

test('works on empty lists', () => {
  const res = scatter([]);
  expect(res).toEqual([]);
});

test('works on lists with 1 element', () => {
  const res = scatter([0]);
  expect(res).toEqual([0]);
});

test('works on lists with 2 equal elements', () => {
  const res = scatter(["frank", "frank"]);
  expect(res).toEqual(["frank", "frank"]);
});

test('works on lists with 2 different elements', () => {
  const res = scatter(["frank", "guilder"]);
  expect(res).toEqual(["frank", "guilder"]);
});

test('works on lists with type aaa', () => {
  const res = scatter(["frank", "frank", "frank"]);
  expect(res).toEqual(["frank", "frank", "frank"]);
});

test('works on lists with type aab', () => {
  const res = scatter(["frank", "frank", "guilder"]);
  expect(res).toEqual(["frank", "guilder", "frank"]);
});

test('works on lists with type baa', () => {
  const res = scatter(["frank", "guilder", "guilder"]);
  expect(res).toEqual(["frank", "guilder", "guilder"]);
});

test('works on lists with type aba', () => {
  const res = scatter(["frank", "guilder", "frank"]);
  expect(res).toEqual(["frank", "guilder", "frank"]);
});

test('works on long lists', () => {
  const res = scatter([0, 1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]);
  expect(res).toEqual([0, 1, 2, 3, 4, 3, 5, 3, 6, 3, 7, 8]);
});

test('works on long lists with too many repetitions', () => {
  const res = scatter([1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  console.log([1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
