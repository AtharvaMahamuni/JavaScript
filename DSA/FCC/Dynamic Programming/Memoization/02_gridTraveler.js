// TODO: The problem is to find the number of steps required to move from top left corner to bottom right corner when you can only move only in right or bottom to move in grid.

// FIXME: In normal condition
// eg. gridTraveler(2, 3) -> 3

// FIXME: Base condition
// eg. gridTraveler(1, 1) -> 1

// FIXME: Invalid grids or there is no grid
// eg. gridTraveler(0, 1) -> 0
// eg. gridTraveler(1, 0) -> 0
// eg. gridTraveler(8, 0) -> 0
// eg. gridTraveler(0, 0) -> 0

// FIXME: It looks like this on traversal
//                   (2, 3) => 3 ways to travel
//                   /                   \
//           (1, 3)(3)                   (2, 2)
//          /    \                      /      \
//     (0, 3)   (1, 2)(2)         (1, 2)       (2, 1)
//      0       /    \            /   \        /     \
//         (0, 2)  (1, 1)   (0, 2)  (1, 1)  (1, 1)   (2, 0)
//           0        1       0       1        1       0

function gridTraveler(row, col, diary = {}) {
    const key = row + ',' + col;
    if(key in diary)
        return diary[key];

    if(row === 1 && col === 1)
        return 1;
    if(row === 0 || col === 0)
        return 0;

    diary[key] = gridTraveler(row-1, col, diary) + gridTraveler(row, col-1, diary);
    return diary[key];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(4, 3));
console.log(gridTraveler(18, 18));
