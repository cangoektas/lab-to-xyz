/**
 * Converts CIE L*a*b* colors to CIE 1931 XYZ.
 * The conversion formula comes from <http://www.easyrgb.com/en/math.php>.
 *
 * @param   {number[]} color The CIE L*a*b* color to convert.
 * @returns {number[]}       The color in the CIE 1931 XYZ color space referring
 *                           to the D65/2° standard illuminant.
 */
export default function labToXyz([l = 0, a = 0, b = 0] = []) {
  let y = (l + 16) / 116;
  let x = a / 500 + y;
  let z = y - b / 200;

  [x, y, z] = [x, y, z].map(v => {
    return v ** 3 > 0.008856 ? v ** 3 : (v - 16 / 116) / 7.787;
  });

  const D65 = [95.047, 100, 108.883];
  x = x * D65[0];
  y = y * D65[1];
  z = z * D65[2];

  return [x, y, z];
}
