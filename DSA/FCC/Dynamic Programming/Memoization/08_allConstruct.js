// TODO: Task here is to find all the comibinations and construct a 2-D array in which each array contain the exact combination to make the given word. 

// We can use one word from wordBank multiple times.

// FIXME: Base conditions -
// For eg. allConstruct('hello', ['cat', 'dog', 'mouse']) -> []
// For eg. allConstruct('', ['cat', 'dog', 'mouse']) -> [[]]

function allConstruct(target, wordBank, diary = {}) {
    if(target in diary) return diary[target];
    if(target === '') return [[]];

    let result = [];

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let combinations = allConstruct(suffix, wordBank, diary);
            let targetWays = combinations.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    diary[target] = result
    return diary[target];
}


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'boar', 't']));
console.log(allConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'board', 't', 'd', 'boar']));

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee',
    'eeeeeeeee',
    'eeeeeeeeee',
]));

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'ef',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee',
    'eeeeeeeee',
    'eeeeeeeeee',
]));