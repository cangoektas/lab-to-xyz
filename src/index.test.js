import labToXyz from ".";

test("defaults to [0, 0, 0]", () => {
  expect(labToXyz()).toEqual([0, 0, 0]);
});

test("computes the right XYZ colors", () => {
  expect(labToXyz([0, 0, 0])).toEqual([0, 0, 0]);
  expect(
    labToXyz([53.585013452169036, 0.003155620347972121, -0.006243566036245873])
  ).toEqual([20.51754053582613, 21.586050011389933, 23.507208462403632]);
  expect(labToXyz([100, 0.00526049995830391, -0.010408184525267927])).toEqual([
    95.05,
    100,
    108.89999999999996
  ]);
});
