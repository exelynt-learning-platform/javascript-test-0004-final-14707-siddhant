// JAVASCRIPT TEST 0004
// Goal: Print a 7x7 layered number pattern (4 on outside, 1 in center)

let n = 4;            // outermost number
let size = 2 * n - 1; // grid is 7x7

for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {

        // How far is this cell from each edge?
        let fromTop    = i;
        let fromBottom = size - 1 - i;
        let fromLeft   = j;
        let fromRight  = size - 1 - j;

        // Pick the smallest distance → tells us which ring/layer we're in
        let layer = Math.min(fromTop, fromBottom, fromLeft, fromRight);

        // Ring 0 → print 4, Ring 1 → print 3, Ring 2 → print 2, Ring 3 → print 1
        row += (n - layer) + " ";
    }

    console.log(row.trim());
}
