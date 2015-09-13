
import flatten from 'formula-flatten';

export default function SUM() {
    var numbers = flatten(arguments);
    return numbers.reduce((a, b) => a + b);
}
