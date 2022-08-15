// TODO: The problem here is find that can we construct the targeted word from the word-bank.
// We can reuse the elements from word-bank as many times as we want.

// for eg., canConstruct('abcdef', [ab, abc, cd, def, abcd]) -> true
// abc + def

// FIXME: Base case
// for eg., canConstruct('', [abc, dg, sd, as]) -> true

const canConstruct = (target, wordBank, diary = {}) => {
    if (target in diary) return wordBank[diary];
    if(target === '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, diary )) {
                diary[target] = 'true'
                return true;
            }
        }
    }

    diary[target] = false;
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'boar', 't']));
console.log(canConstruct('skateboard', ['sk', 'ate', 'skate', 'teb', 'board', 't', 'd']));

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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

console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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