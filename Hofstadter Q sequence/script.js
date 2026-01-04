/* Hofstadter Q sequence
The Hofstadter Q sequence is defined as:

Q(1)=Q(2)=1,Q(n)=Q(n−Q(n−1))+Q(n−Q(n−2)),n>2.
 

It is defined like the Fibonacci sequence, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.

Implement the Hofstadter Q Sequence equation as a function. The function should accept number, n, and return an integer.*/

let Q=new Array(2500).fill(0);
Q[1]=1;Q[2]=1;
function hofstadterQ(n) {
    if (!n || n < 1)
        return "integer";
    else if (Q[n]) return Q[n];
    else return Q[n] = hofstadterQ(n-hofstadterQ(n-1)) + hofstadterQ(n-hofstadterQ(n-2));
}
