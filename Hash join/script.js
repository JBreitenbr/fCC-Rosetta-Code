/* Hash join

An inner join is an operation that combines two data tables into one table, based on matching column values. The simplest way of implementing this operation is the nested loop join algorithm, but a more scalable alternative is the hash join algorithm.

The "hash join" algorithm consists of two steps:

Hash phase: Create a multimap from one of the two tables, mapping from each join column value to all the rows that contain it.
The multimap must support hash-based lookup which scales better than a simple linear search, because that's the whole point of this algorithm.
Ideally we should create the multimap for the smaller table, thus minimizing its creation time and memory size.
Join phase: Scan the other table, and find matching rows by looking in the multimap created before.
In pseudo-code, the algorithm could be expressed as follows:

let A = the first input table (or ideally, the larger one)
let B = the second input table (or ideally, the smaller one)
let jA = the join column ID of table A
let jB = the join column ID of table B
let MB = a multimap for mapping from single values to multiple rows of table B (starts out empty)
let C = the output table (starts out empty)
for each row b in table B:
  place b in multimap MB under key b(jB)
for each row a in table A:
  for each row b in multimap MB under key a(jA):
    let c = the concatenation of row a and row b
    place row c in table C
Implement the "hash join" algorithm as a function and demonstrate that it passes the test-case listed below. The function should accept two arrays of objects and return an array of combined objects.

Input

A =	
Age	Name
27	Jonah
18	Alan
28	Glory
18	Popeye
28	Alan
B =	
Character	Nemesis
Jonah	Whales
Jonah	Spiders
Alan	Ghosts
Alan	Zombies
Glory	Buffy
jA =	Name (i.e. column 1)	jB =	Character (i.e. column 0)
Output

A_age	A_name	B_character	B_nemesis
27	  Jonah	    Jonah	      Whales
27	  Jonah	    Jonah	     Spiders
18	   Alan	     Alan	      Ghosts
18	   Alan	     Alan	      Zombies
28	   Glory	   Glory	     Buffy
28	   Alan	     Alan	      Ghosts
28	   Alan	     Alan	      Zombies
The order of the rows in the output table is not significant. */

function  dictConcat(dctA, dctB) {
    let rObj={};
    let k1=Array.from(Object.keys(dctA)).map((item)=>"A_"+item);
    for(let i=0;i<k1.length;i++){
        rObj[k1[i]]=dctA[k1[i].slice(2)];
    }
    let k2=Array.from(Object.keys(dctB)).map((item)=>"B_"+item);
    for(let j=0;j<k2.length;j++){
        rObj[k2[j]]=dctB[k2[j].slice(2)];
    }
    return rObj;
};

function hashJoin(hash1, hash2) {
let k1=Object.keys(hash1[0]);
let k2=Object.keys(hash2[0]);
let [jA,jB]=[k1[1],k2[0]];

let k=[]; 
let M={};
for(let j=0;j<hash2.length;j++){
   if(!k.includes(hash2[j][jB])) {k.push(hash2[j][jB]);
   M[hash2[j][jB]]=[];
}  }
 
for(let j=0;j<hash2.length;j++){
    for(let i=0;i<k.length;i++){
    if(k[i]==hash2[j][jB])
    M[hash2[j][jB]].push(hash2[j]);
    }
}  
let h=[];
for(let i=0;i<hash1.length;i++){
for(let j=0;j<k.length;j++){
  if(hash1[i][jA]==k[j]){
      h.push(hash1[i]);
  }
}}

let n=h.map((item)=>item[jA]);
let res=[];

for(let i=0;i<n.length;i++){
    for(let j=0;j<M[n[i]].length;j++){
        res.push(dictConcat(h[i],M[n[i]][j]));
    }
  }
  return res;
}
