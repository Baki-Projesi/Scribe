function orderRules(rulesArray, charactergroupings) {
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

    specials = convertKeyGroupToDisambiguationArray(groupByTurkishKey(specials, 'SPECIALS'));

    return resultArray.concat(defaultChar, combos, simpleChars, specials);
}

// const dropdownOptions = {
//     'defaultChar': [{ data: data }], //always spread
//     'combos': [{ data: data }, { data: data }], // always spread
//     'singleChars': [{ data: data }, { data: data }, { data: data }, { data: data }], //combine if >9 1st
//     'doubleChars': [{ data: data }, { data: data }], //combine if >9 2nd
//     'specials': [{ data: data }], //always combine
//     'numRules': 10
// }


function chooseDisambiguationOption(choiceIndex) {
    let i = 0;
    let keys = Object.keys(disambiguationOptions);
    for (let k = 0; k < keys.length; k++) {
        let key = keys[k]; //e.g. 'combos'
        let rulesArray = disambiguationOptions[key];
        rulesArray.forEach(function (rule) {
            if (i === choiceIndex) {
                return rule;
            }
            i++;
        });
    }
}

function combineExtraChars(singleChars, doubleChars) {
    let allChars = singleChars.concat(doubleChars);
    return convertKeyGroupToDisambiguationArray(groupByTurkishKey(allChars));
}

/*
Show the defult -order 0- on top always 
(single choice)

if there are 10+ rules, coalesce into groups

special characters should be moved into "Specials"
(always require double dropdown)

*/