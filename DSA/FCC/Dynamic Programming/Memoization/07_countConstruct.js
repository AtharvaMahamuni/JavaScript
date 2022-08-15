// TODO: This countConstruct problem is the extension of the previous canConstruct problem, here we are counting the number of possible combinations to comeup with the target string.

function countConstruct(target, wordBank, diary = {}) {
    if(target in diary) return diary[target];
    if(target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            let numWays = countConstruct(suffix, wordBank, diary);
           totalCount += numWays;
        } 
    }

    diary[target] = totalCount;
    return diary[target];
}


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'boar', 't']));
console.log(countConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'board', 't', 'd', 'boar']));

console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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

console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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