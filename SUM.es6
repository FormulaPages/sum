
import flatten from 'formula-flatten';

export default function SUM() {
    var numbers = flatten(arguments);
    return result.reduce(numbers, (a, b) => a + b);
}
