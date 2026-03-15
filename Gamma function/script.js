/* Gamma function
Implement one algorithm (or more) to compute the Gamma function (in the real field only).

The Gamma function can be defined as:

Γ(x)=∫t^(x−1)e^(−t)dt (from 0 to ∞) */

// Source - https://stackoverflow.com/a/15454784
// Posted by apelsinapa
// Retrieved 2026-03-15, License - CC BY-SA 3.0

let g = 7;
let C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];

function gamma(z) {
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
  else {
    z -= 1;
    let x = C[0];
    for(let i = 1; i < g + 2; i++)
      x += C[i] / (z + i);
      let t = z + g + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
  }
}
                          
