/* Josephus problem
Josephus problem is a math puzzle with a grim description:  n
  prisoners are standing on a circle, sequentially numbered from  0
  to  n−1
 .

An executioner walks along the circle, starting from prisoner  0
 , removing every  k
 -th prisoner and killing him.

As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.

For example, if there are  n=5
  prisoners and  k=2
 , the order the prisoners are killed in (let's call it the "killing sequence") will be 1, 3, 0, and 4, and the survivor will be #2.

Given any  n,k>0
 , find out which prisoner will be the final survivor.

In one such incident, there were 41 prisoners and every 3rd prisoner was being killed ( k=3
 ).

Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.

Which number was he?

Write a function that takes the initial number of prisoners and k as parameters and returns the number of the prisoner that survives. */

function josephus(init, kill) {
  if(init==1){
    return 0;
  } else {
    return (josephus(init-1,kill)+kill)%init;
  }
}
