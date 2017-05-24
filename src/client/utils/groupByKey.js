//given a disambiguationRules array, returns an object containing a key: array pair,
// where each key is a turkish letter and the array of objects
// contains the possible arabic disambiguations for that letter-key
export function groupByTurkishKey(arr) {
    const results = {};

    arr.forEach(function (element) {
        let k = element.turkishText;
        if (results[k]) {
            let existingArr = results[k];
            existingArr.push(element);
        } else {
            let newArr = [];
            newArr.push(element);
            results[k] = newArr;
        }
    }, this);

    return results;
}

export function convertKeyGroupToDisambiguationArray(obj, groupString) {
    const results = [];
    let code = 0;
    Object.keys(obj).forEach(function (key) {
        let option = {};
        option.turkishText = groupString ? gorupString : key;
        option.representedText = "...";
        option.code = code;
        option.secondDropdownOptions = obj[key];
        code++;
        results.push(option);
    });

    return results;
}

// function newGroupByKey(rulesArray) {

// }

// //options in the dropdown that have subOptionData will need to 
// function makeDropdownGroup(rulesArray, groupString) {
//     const result = {};
//     result.representedText = groupString;
//     result.subOptionData = rulesArray;
//     result.code = genCode();
//     return result;
// }