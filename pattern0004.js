// JAVASCRIPT TEST 0004
// Goal: Print a 7x7 layered number pattern (4 on outside, 1 in center)

let n = 4;           // outermost number
let size = 2 * n - 1; // grid is 7x7

for (let i = 0; i < size; i++) {
        let row = "";

    for (let j = 0; j < size; j++) {
                // How far is this cell from each edge?
            let fromTop    = i;
                let fromBottom = size - 1 - i;
                let fromLeft   = j;
                let fromRight  = size - 1 - j;

            // Pick the smallest distance 
            let layer = Math.min(fromTop, fromBottom, fromLeft, fromRight);

            // Subtract layer from n to get the value
            row += (n - layer) + " ";
    }
        console.log(row.trim());
}
