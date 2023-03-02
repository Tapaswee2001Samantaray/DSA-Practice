//Print First N 10 Numbers Using Recursion In reverse Order

function rec(i,n){
    if(i>n) return;
    
    let r=i+1;
    rec(r , n);
    console.log(i);
}

rec(0,9);