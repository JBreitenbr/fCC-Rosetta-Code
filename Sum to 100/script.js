/* Sum to 100
Find solutions to the sum to one hundred puzzle.

Add (insert) the mathematical operators + or ─ (plus or minus) before any of the digits in the decimal numeric string 123456789 such that the resulting mathematical expression adds up to a particular sum (in this iconic case, 100).

Example:

123 + 4 - 5 + 67 - 89   =   100
Write a function that takes a number as parameter. The function should return an array containing all solutions for the given number. The solutions should be strings representing the expressions. 
For example: "1+23-456+78-9". Sort the array before returning it. */

function sumTo100(n) {
  let ops=["-","+",""];
  let ops2=["-",""];
  let c=[];
  for(let i1=0;i1<2;i1++){
    for(let i2=0;i2<3;i2++){
      for(let i3=0;i3<3;i3++){
        for(let i4=0;i4<3;i4++){
          for(let i5=0;i5<3;i5++){
            for(let i6=0;i6<3;i6++){
              for(let i7=0;i7<3;i7++){
                for(let i8=0;i8<3;i8++){
                  for(let i9=0;i9<3;i9++){
                      let ex=ops2[i1]+"1"+ops[i2]+"2"+ops[i3]+"3"+ops[i4]+"4"+ops[i5]+"5"+ops[i6]+"6"+ops[i7]+"7"+ops[i8]+"8"+ops[i9]+"9";
                         if(eval(ex)==n){ c.push(ex); }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
  return c;
}
