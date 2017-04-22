//given a disambiguationRules array, returns an object containing a key: array pair,
// where each key is a turkish letter and the array of objects
// contains the possible arabic disambiguations for that letter-key
export default function groupByTurkishKey(arr) {
    const results = {};

    arr.forEach(function(element) {
        if (results['turkishText']) {
            let existingArr = results['turkishText'];
            existingArr.push(element);
        } else {
            let newArr = [];
            newArr.push(element);
            results['turkishText'] = newArr;
        }
    }, this);

    return results;
}