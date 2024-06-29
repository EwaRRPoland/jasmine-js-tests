const calculateRectangleArea = require('../src/calculate'); // Adjusted path

describe('calculateRectangleArea', () => {
  it('calculates the area of a rectangle with length 5 and width 4', () => {
    expect(calculateRectangleArea(5, 4)).toBe(20);
  });

  it('calculates the area of a rectangle with length 3 and width 7', () => {
    expect(calculateRectangleArea(3, 7)).toBe(21);
  });

  it('calculates the area of a rectangle with length 10 and width 10', () => {
    expect(calculateRectangleArea(10, 10)).toBe(100);
  });
});
