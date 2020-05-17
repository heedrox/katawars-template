const Katawarship = require('./katawarship');

it('this test should be deleted', () => {
  const result = new Katawarship({x: 100, y: 200});
  const v = result.move(2, 4);

  expect(v).toEqual(306);
});
