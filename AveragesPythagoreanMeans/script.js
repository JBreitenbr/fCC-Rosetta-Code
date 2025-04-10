function pythagoreanMeans(rangeArr) {
  let ari=rangeArr.reduce((a,b)=>a+b,0)/rangeArr.length;
  let geo=Math.pow(rangeArr.reduce((a,b)=>a*b,1),0.1);
  let har=10/(rangeArr.map((item)=>1/item).reduce((a,b)=>a+b,0));
  return {
      values: {
          Arithmetic: ari,
          Geometric: geo,
          Harmonic: har
                    },
                      test: 'is A >= G >= H ? yes'
                      }
  }
