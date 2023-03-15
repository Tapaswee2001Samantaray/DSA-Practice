/*
Print all prime number till n using sieve of eratosthenes algorithm.
*/

function sieveOfEratosthenes(n) {
    // Create a boolean array "prime[0..n]" and
	// initialize all entries it as true. A value in prime[i] 
    //will finally be false if i is Not a prime, else true.
    let prime = [];
    for (let i = 0; i < n; i++) {
        prime[i] = true;
    }

    for (let p = 2; p * p <= n; p++) {
        // If prime[p] is not changed, then it is a
		// prime
        if (prime[p] == true) {//true
            // Update all multiples of p
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    let primeNumbers = [];
    // Print all prime numbers
    for (let i = 2; i < prime.length; i++) {
        if (prime[i] == true) {
            primeNumbers.push(i);
        }
    }
    return "The prime numbers are:-" + primeNumbers.join(", ");
}

let a = sieveOfEratosthenes(13);
console.log(a);