//Print First N 10 Numbers Using Recursion

function rec(i,n){
    if(i>n) return;

    console.log(i);
    rec(i+1,n);
}

rec(0,9);