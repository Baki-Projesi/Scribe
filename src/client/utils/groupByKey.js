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
        option.turkishText = groupString ? groupString : key;
        option.representedText = "...";
        option.code = code;
        option.secondDropdownOptions = obj[key];
        code++;
        results.push(option);
    });

    return results;
}

export function orderRules(rulesArray) {
    let resultArray = [];

    let defaultChar = [],
        combos = [],
        singleChars = [],
        doubleChars = [],
        specials = [],
        simpleChars = [];

    rulesArray.forEach(function (rule) {
        if (rule.dropdownOrder === 0) {
            defaultChar[0] = rule;
        }
        if (rule.dropdownOrder === 1) {
            combos.push(rule);
        }
        if (rule.dropdownOrder === 2) {
            singleChars.push(rule);
        }
        if (rule.dropdownOrder === 3) {
            doubleChars.push(rule);
        }
        if (rule.dropdownOrder === 4) {
            specials.push(rule);
        }

    }, this);

    if (rulesArray.length > 9) {
        let allChars = singleChars.concat(doubleChars);
        simpleChars = convertKeyGroupToDisambiguationArray(groupByTurkishKey(allChars));
    } else {
        simpleChars = singleChars.concat(doubleChars);
    }

    specials = convertKeyGroupToDisambiguationArray(groupByTurkishKey(specials), 'SPECIALS');

    return resultArray.concat(defaultChar, combos, simpleChars, specials);
}