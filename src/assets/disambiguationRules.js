/*
TODO:
Codes:
- fix 'eyi' issue
- identify Turkish, Arabic, or Persian

UI:
- highlight selected option
- add a menu for whether or not line numbers should be included
*/

/*
dropdownOrder:
-1 - not in the dropdown
0 - default
1 - combinations (other than tanwin and special cases)
2 - remaining single characters
3 - double characters, sheddah, and special combo options tied to one character
4 - special characters
5 - ?

needsDisambiguation:
true - dropdown present
false - no dropdown needed

comboCategory:
'tanwin'
'hamza'
'izafet'
'special'
'sun'
'double'
'sheddah'
'charCombo' - special combo option tied to one character
'sukun' - no vowel marking for consonants
null

charLanguage:
'arabic'
'persian'
'turkish'
null
*/

export const englishKeyboardDisambiguations = {
    ' ': [
        {
            turkishText: ' ',
            arabicText: ' ',
            code: 'sp',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'b': [
        {
            turkishText: 'b',
            arabicText: 'ب',
            code: 'b',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p', // at the end of the word, automatically p
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'bb',
            arabicText: 'ب',
            code: 'bb8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'bb', //remove?
            arabicText: 'بّ',
            code: 'bb',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'B': [
        {
            turkishText: 'B',
            arabicText: 'ب',
            code: 'B',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'c': [
        {
            turkishText: 'c',
            arabicText: 'ج',
            code: 'c',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'cc',
            arabicText: 'ج',
            code: 'cc8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç',
            arabicText: 'ج',
            code: 'cc10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'cc', //remove?
            arabicText: 'جّ',
            code: 'cc',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', //remove?
            arabicText: 'چّ',
            code: 'cc2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', //remove?
            arabicText: 'جّ',
            code: 'cc7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'C': [
        {
            turkishText: 'C',
            arabicText: 'ج',
            code: 'C',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'چ',
            code: 'C2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'd': [
        {
            turkishText: 'd',
            arabicText: 'د',
            code: 'd',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'د',
            code: 'dd8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', //remove?
            arabicText: 'دّ',
            code: 'dd',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', //remove?
            arabicText: 'ضّ',
            code: 'dd3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'D': [
        {
            turkishText: 'D',
            arabicText: 'د',
            code: 'D',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'f': [
        {
            turkishText: 'f',
            arabicText: 'ف',
            code: 'f',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ff', //remove?
            arabicText: 'فّ',
            code: 'ff',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'F': [
        {
            turkishText: 'F',
            arabicText: 'ف',
            code: 'F',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'g': [
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'g6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غ',
            code: 'gg9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', //remove?
            arabicText: 'كّ',
            code: 'gg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ġġ', //remove?
            arabicText: 'غّ',
            code: 'gg4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'G': [
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'G6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غ',
            code: 'G4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'h': [
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḥ',
            arabicText: 'ح',
            code: 'h3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḫʷ',
            arabicText: 'خو',
            code: 'hw',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'hh', //remove?
            arabicText: 'هّ',
            code: 'hh',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', //remove?
            arabicText: 'حّ',
            code: 'hh3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', //remove?
            arabicText: 'خّ',
            code: 'hh5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'H': [
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḥ',
            arabicText: 'ح',
            code: 'H3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'j': [
        {
            turkishText: 'j',
            arabicText: 'ژ',
            code: 'j',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'jj', //remove?
            arabicText: 'ژّ',
            code: 'jj',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'J': [
        {
            turkishText: 'J',
            arabicText: 'ژ',
            code: 'J',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'k': [
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'k',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'kk',
            arabicText: 'ك',
            code: 'kk4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'kk', //remove?
            arabicText: 'كّ',
            code: 'kk',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', //remove?
            arabicText: 'قّ',
            code: 'kk3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg', //remove?
            arabicText: 'كّ',
            code: 'kkg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'K': [
        {
            turkishText: 'K',
            arabicText: 'ك',
            code: 'K',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'l': [
        {
            turkishText: 'l',
            arabicText: 'ل',
            code: 'l',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'll', //remove?
            arabicText: 'لّ',
            code: 'll',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'L': [
        {
            turkishText: 'L',
            arabicText: 'ل',
            code: 'L',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'm': [
        {
            turkishText: 'm',
            arabicText: 'م',
            code: 'm',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'mm',
            arabicText: 'م',
            code: 'mm1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'mm', //remove?
            arabicText: 'مّ',
            code: 'mm',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'M': [
        {
            turkishText: 'M',
            arabicText: 'م',
            code: 'M',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ڭ',
            code: 'n3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'nn',
            arabicText: 'ن',
            code: 'nn1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'nn', //remove?
            arabicText: 'نّ',
            code: 'nn',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'N': [
        {
            turkishText: 'N',
            arabicText: 'ن',
            code: 'N',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ڭ',
            code: 'N3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'p': [
        {
            turkishText: 'p',
            arabicText: 'پ',
            code: 'p',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        }
    ],
    'P': [
        {
            turkishText: 'P',
            arabicText: 'پ',
            code: 'P',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        }
    ],
    'r': [
        {
            turkishText: 'r',
            arabicText: 'ر',
            code: 'r',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'rr', //remove?
            arabicText: 'رّ',
            code: 'rr',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'R': [
        {
            turkishText: 'R',
            arabicText: 'ر',
            code: 'R',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    's': [
        {
            turkishText: 's',
            arabicText: 'س',
            code: 's',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ss',
            arabicText: 'س',
            code: 'ss6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ',
            arabicText: 'ث',
            code: 'ss9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ss', //remove?
            arabicText: 'سّ',
            code: 'ss',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'şş', //remove?
            arabicText: 'شّ',
            code: 'ss2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', //remove?
            arabicText: 'صّ',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ', //remove?
            arabicText: 'ثّ',
            code: 'ss5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'S': [
        {
            turkishText: 'S',
            arabicText: 'س',
            code: 'S',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'S2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    't': [
        {
            turkishText: 't',
            arabicText: 'ت',
            code: 't',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'تّ',
            code: 'tt',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', //remove?
            arabicText: 'طّ',
            code: 'tt3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd', //remove?
            arabicText: 'طّ',
            code: 'tt6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'ةّ',
            code: 'tt7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'دّ',
            code: 'ttd13',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'T': [
        {
            turkishText: 'T',
            arabicText: 'ت',
            code: 'T',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'v': [
        {
            turkishText: 'v',
            arabicText: 'و',
            code: 'v',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'vv', //remove?
            arabicText: 'وّ',
            code: 'vv',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'V': [
        {
            turkishText: 'V', 
            arabicText: 'و',
            code: 'V',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'w': [
        {
            turkishText: '\u200b', 
            arabicText: 'َ',
            code: 'w0',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ِ',
            code: 'w1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ُ',
            code: 'w2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ٓ',
            code: 'w3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ٰ',
            code: 'w4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ّ',
            code: 'w5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ْ',
            code: 'w6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u203f',
            arabicText: ' ',
            code: 'w7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'یٍ',
            code: 'w8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'y',
            arabicText: 'ى' + 'ِ',
            code: 'y4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'y',
            arabicText: 'ي',
            code: 'y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'yy',
            arabicText: 'ي',
            code: 'yy1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'yy', //remove?
            arabicText: 'يّ',
            code: 'yy',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Y',
            arabicText: 'ى' + 'ِ',
            code: 'Y4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: 'ي',
            code: 'Y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'z': [
        {
            turkishText: 'z', 
            arabicText: 'ز',
            code: 'z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'żż',
            arabicText: 'ض',
            code: 'zz8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'zz', //remove?
            arabicText: 'زّ',
            code: 'zz',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', //remove?
            arabicText: 'ظّ',
            code: 'zz3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'żż', //remove?
            arabicText: 'ضّ',
            code: 'zz4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', //remove?
            arabicText: 'ذّ',
            code: 'zz5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Z': [
        {
            turkishText: 'Z',
            arabicText: 'ز',
            code: 'Z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'a': [
        {
            turkishText: 'a',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: '', // not represented in Turkish
            code: 'a15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā', 
            arabicText: 'ى', // alef maksura
            code: 'a14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'a',
            arabicText: 'أ' + 'َ',
            code: 'a17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'َ',
            code: 'a10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u200c' + 'ا',
            code: 'a3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā', 
            arabicText: 'و',
            code: 'a16',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'a-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ahamza3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    'A': [
        {
            turkishText: 'A',
            arabicText: '', // not represented in Arabic
            code: 'A11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ā',
            arabicText: 'ى', // alef maksura
            code: 'A14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'A',
            arabicText: 'أ' + 'َ',
            code: 'A17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u200c' + 'ا',
            code: 'A3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ā', 
            arabicText: 'و',
            code: 'A16',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'A-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ahamza3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // not represented in Arabic
            code: 'e11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', 
            arabicText: 'ي',
            code: 'e1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        /*{
            turkishText: 'e',
            arabicText: 'أ' + 'َ',
            code: 'e14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'َ', 
            code: 'e10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: '\u200c' + 'ا',
            code: 'e2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'E': [
        {
            turkishText: 'E',
            arabicText: '', // not represented in Arabic
            code: 'E11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', // ? No capital E with diacritic in chart
            arabicText: 'ي', 
            code: 'E1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'E',
            arabicText: 'أ' + 'َ',
            code: 'E14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'Eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: '\u200c' + 'ا',
            code: 'E2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'i': [
        {
            turkishText: 'i',
            arabicText: '', // not represented in Arabic
            code: 'i11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'i',
            arabicText: 'ا' + '\u06cc', //Farsi yeh
            code: 'i2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ī',
            arabicText: 'ي',
            code: 'i1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ا' + '\u06cc', //Farsi yeh
            code: 'i16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ئ',
            code: 'i29',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ا',
            code: 'i20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ه',
            code: 'i24',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ' + 'ِ',
            code: 'i26',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ',
            code: 'i4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'i28',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'persian' //izafet
        },
        {
            turkishText: 'i',
            arabicText: 'ي',
            code: 'i6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '', // not represented in Arabic
            code: 'i12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ا' + '\u06cc', //Farsi yeh
            code: 'i3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ا',
            code: 'i21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ه',
            code: 'i25',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ' + 'ِ',
            code: 'i27',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ',
            code: 'i5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ي',
            code: 'i7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u200c' + 'ا',
            code: 'i8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: '\u200c' + 'ا',
            code: 'i9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'I': [
        {
            turkishText: 'İ',
            arabicText: '', // not represented in Arabic
            code: 'I11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'İ',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ي',
            code: 'I1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ئ',
            code: 'I29',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ا',
            code: 'I20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ه',
            code: 'I24',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ' + 'ِ',
            code: 'I26',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ',
            code: 'I4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ي',
            code: 'I6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },        
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'I28',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'persian' //izafet
        },
        {
            turkishText: 'İ', 
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'I13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ا',
            code: 'I21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ه',
            code: 'I25',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ' + 'ِ',
            code: 'I27',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ',
            code: 'I5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I', 
            arabicText: 'ي',
            code: 'I7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I', 
            arabicText: 'ِ', // kasrah
            code: 'I0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u200c' + 'ا',
            code: 'I8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: '\u200c' + 'ا',
            code: 'I9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'o': [
        {
            turkishText: 'o',
            arabicText: '', // not represented in Arabic
            code: 'o10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: '', // not represented in Arabic
            code: 'o11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'O': [
        {
            turkishText: 'O',
            arabicText: '', // not represented in Arabic
            code: 'O10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: '', // not represented in Arabic
            code: 'O11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ō',
            arabicText: 'ﻮ',
            code: 'O1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'u': [
        {
            turkishText: 'u',
            arabicText: '', // not represented in Arabic
            code: 'u11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü', 
            arabicText: 'ُ', // ḍammah
            code: 'u0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'u', 
            arabicText: 'ُ', // ḍammah
            code: 'u10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ا',
            code: 'u5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        /*{
            turkishText: 'u',
            arabicText: 'أ' + 'ُ',
            code: 'u16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'ü',
            arabicText: 'أ' + 'ُ',
            code: 'u17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'u',
            arabicText: '\u200c' + 'ا',
            code: 'u2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ü',
            arabicText: '\u200c' + 'ا',
            code: 'u14',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'U': [
        {
            turkishText: 'U', 
            arabicText: '', // not represented in Arabic
            code: 'U11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: '', // not represented in Arabic
            code: 'U12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'U', 
            arabicText: 'ُ', // ḍammah
            code: 'U10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ا',
            code: 'U5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'U',
            arabicText: 'أ' + 'ُ',
            code: 'U16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'Ü',
            arabicText: 'أ' + 'ُ',
            code: 'U17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'U',
            arabicText: '\u200c' + 'ا',
            code: 'U2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ü',
            arabicText: '\u200c' + 'ا',
            code: 'U14',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    '\'': [
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ʿʿ',
            arabicText: 'عّ',
            code: '\'13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ء',
            code: '\'3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: '\'',
            arabicText: '\u0671' + '\u200c', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ˀ',
            arabicText: 'أ',
            code: 'ae\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ٸ',
            code: 'i\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ٶ',
            code: 'u\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀā',
            arabicText: 'آ',
            code: 'a\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ˀā',
            arabicText: 'ا',
            code: 'a\'12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'yi': [ // does this need a capital case?
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ',
            code: 'iHamza2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yı',
            arabicText: 'ۀ',
            code: 'iHamza3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'an': [
        {
            turkishText: 'an',
            arabicText: 'ً',
            code: 'e6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ًا',
            code: 'atanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: '',
            code: 'atanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ا',
            code: 'atanwin2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'en': [
        {
            turkishText: 'en',
            arabicText: 'ً',
            code: 'e7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ًا',
            code: 'etanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: '',
            code: 'etanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ا',
            code: 'etanwin2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'un': [
        {
            turkishText: 'un',
            arabicText: 'ٌ',
            code: 'e8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'un',
            arabicText: '',
            code: 'utanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'ün': [
        {
            turkishText: 'ün',
            arabicText: 'ٌ',
            code: 'uumlaute8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'ün',
            arabicText: '',
            code: 'uumlautetanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'in': [
        {
            turkishText: 'in',
            arabicText: 'ٍ',
            code: 'e9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'in',
            arabicText: '',
            code: 'itanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    'sh': [
        {
            turkishText: 'ş' + '\ufeff',
            arabicText: 'ش',
            code: 'sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Sh': [
        {
            turkishText: 'Ş' + '\ufeff',
            arabicText: 'ش',
            code: 'Sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'li\'l': [
        {
            turkishText: 'li\'l',
            arabicText: 'لال',
            code: 'li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'lil' + '\ufeff',
            arabicText: 'لل',
            code: 'lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'Li\'l': [ 
        {
            turkishText: 'Li\'l',
            arabicText: 'لال',
            code: 'Li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Lil' + '\ufeff',
            arabicText: 'لل',
            code: 'Lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    'aḍ-d': [
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    'ed-d': [
        {
            turkishText: 'ed-d',
            arabicText: 'الد',
            code: 'dSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    'eḍ-d': [
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    '\'d-d': [
        {
            turkishText: 'd-d',
            arabicText: 'لد',
            code: 'dSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ḍ-d': [
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿd-d': [
        {
            turkishText: 'd-d',
            arabicText: 'لد',
            code: 'dSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿḍ-d': [
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lid-d': [
        {
            turkishText: 'lid-d',
            arabicText: 'للد',
            code: 'dSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liḍ-ḍ',
            arabicText: 'للض',
            code: 'ddotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liḍ-d': [
        {
            turkishText: 'liḍ-ḍ',
            arabicText: 'للض',
            code: 'ddotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aḍ-d': [
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ed-d': [
        {
            turkishText: 'Ed-d',
            arabicText: 'الد',
            code: 'DSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eḍ-d': [
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lid-d': [
        {
            turkishText: 'Lid-d',
            arabicText: 'للد',
            code: 'DSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liḍ-ḍ',
            arabicText: 'للض',
            code: 'DdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liḍ-d': [
        {
            turkishText: 'Liḍ-ḍ',
            arabicText: 'للض',
            code: 'DdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'edh-dh': [
        {
            turkishText: 'edh-dh',
            arabicText: 'الذ',
            code: 'dhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'dh-dh': [
        {
            turkishText: 'dh-dh',
            arabicText: 'لذ',
            code: 'dhSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿdh-dh': [
        {
            turkishText: 'dh-dh',
            arabicText: 'لذ',
            code: 'dhSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lidh-dh': [
        {
            turkishText: 'lidh-dh',
            arabicText: 'للذ',
            code: 'dhSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Edh-dh': [
        {
            turkishText: 'Edh-dh',
            arabicText: 'الذ',
            code: 'DhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lidh-dh': [
        {
            turkishText: 'Lidh-dh',
            arabicText: 'للذ',
            code: 'DhSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'en-n': [
        {
            turkishText: 'en-n',
            arabicText: 'الن',
            code: 'nSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'n-n': [
        {
            turkishText: 'n-n',
            arabicText: 'لن',
            code: 'nSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿn-n': [
        {
            turkishText: 'n-n',
            arabicText: 'لن',
            code: 'nSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lin-n': [
        {
            turkishText: 'lin-n',
            arabicText: 'للن',
            code: 'nSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'En-n': [
        {
            turkishText: 'En-n',
            arabicText: 'الن',
            code: 'NSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lin-n': [
        {
            turkishText: 'Lin-n',
            arabicText: 'للن',
            code: 'NSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'er-r': [
        {
            turkishText: 'er-r',
            arabicText: 'الر',
            code: 'rSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'r-r': [
        {
            turkishText: 'r-r',
            arabicText: 'لر',
            code: 'rSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿr-r': [
        {
            turkishText: 'r-r',
            arabicText: 'لر',
            code: 'rSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lir-r': [
        {
            turkishText: 'lir-r',
            arabicText: 'للر',
            code: 'rSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Er-r': [
        {
            turkishText: 'Er-r',
            arabicText: 'الر',
            code: 'RSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lir-r': [
        {
            turkishText: 'Lir-r',
            arabicText: 'للر',
            code: 'RSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aṣ-s': [
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aŝ-s': [
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aş-s': [
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'es-s': [
        {
            turkishText: 'es-s',
            arabicText: 'الس',
            code: 'sSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eş-ş',
            arabicText: 'الش',
            code: 'scSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eṣ-s': [
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eŝ-s': [
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eş-s': [
        {
            turkishText: 'eş-ş',
            arabicText: 'الش',
            code: 'scSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'s-s': [
        {
            turkishText: 's-s',
            arabicText: 'لس',
            code: 'sSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ṣ-s': [
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ŝ-s': [
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ş-s': [
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿs-s': [
        {
            turkishText: 's-s',
            arabicText: 'لس',
            code: 'sSun19',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun20',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun21',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun22',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿṣ-s': [
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun23',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿŝ-s': [
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun24',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿş-s': [
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun25',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lis-s': [
        {
            turkishText: 'lis-s',
            arabicText: 'للس',
            code: 'sSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liṣ-ṣ',
            arabicText: 'للص',
            code: 'sdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liŝ-ŝ',
            arabicText: 'للث',
            code: 'shatSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liş-ş',
            arabicText: 'للش',
            code: 'scSun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liṣ-s': [
        {
            turkishText: 'liṣ-ṣ',
            arabicText: 'للص',
            code: 'sdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liŝ-s': [
        {
            turkishText: 'liŝ-ŝ',
            arabicText: 'للث',
            code: 'shatSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liş-s': [
        {
            turkishText: 'liş-ş',
            arabicText: 'للش',
            code: 'scSun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aṣ-s': [
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aŝ-s': [
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aş-s': [
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Es-s': [
        {
            turkishText: 'Es-s',
            arabicText: 'الس',
            code: 'SSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eş-ş',
            arabicText: 'الش',
            code: 'ScSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eṣ-s': [
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eŝ-s': [
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eş-s': [
        {
            turkishText: 'Eş-ş',
            arabicText: 'الش',
            code: 'ScSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lis-s': [
        {
            turkishText: 'Lis-s',
            arabicText: 'للس',
            code: 'SSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liṣ-ṣ',
            arabicText: 'للص',
            code: 'SdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liŝ-ŝ',
            arabicText: 'للث',
            code: 'ShatSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liş-ş',
            arabicText: 'للش',
            code: 'ScSun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liṣ-s': [
        {
            turkishText: 'Liṣ-ṣ',
            arabicText: 'للص',
            code: 'SdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liŝ-s': [
        {
            turkishText: 'Liŝ-ŝ',
            arabicText: 'للث',
            code: 'ShatSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liş-s': [
        {
            turkishText: 'Liş-ş',
            arabicText: 'للش',
            code: 'ScSun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'esh-sh': [
        {
            turkishText: 'esh-sh',
            arabicText: 'الش',
            code: 'shSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'sh-sh': [
        {
            turkishText: 'sh-sh',
            arabicText: 'لش',
            code: 'shSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿsh-sh': [
        {
            turkishText: 'sh-sh',
            arabicText: 'لش',
            code: 'shSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lish-sh': [
        {
            turkishText: 'lish-sh',
            arabicText: 'للش',
            code: 'shSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Esh-sh': [
        {
            turkishText: 'Esh-sh',
            arabicText: 'الش',
            code: 'ShSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lish-sh': [
        {
            turkishText: 'Lish-sh',
            arabicText: 'للش',
            code: 'ShSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aṭ-t': [
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'et-t': [
        {
            turkishText: 'et-t',
            arabicText: 'الت',
            code: 'tSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eṭ-t': [
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'t-t': [
        {
            turkishText: 't-t',
            arabicText: 'لت',
            code: 'tSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ṭ-t': [
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿt-t': [
        {
            turkishText: 't-t',
            arabicText: 'لت',
            code: 'tSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿṭ-t': [
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lit-t': [
        {
            turkishText: 'lit-t',
            arabicText: 'للت',
            code: 'tSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liṭ-ṭ',
            arabicText: 'للط',
            code: 'tdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liṭ-t': [
        {
            turkishText: 'liṭ-ṭ',
            arabicText: 'للط',
            code: 'tdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aṭ-t': [
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Et-t': [
        {
            turkishText: 'Et-t',
            arabicText: 'الت',
            code: 'TSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eṭ-t': [
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lit-t': [
        {
            turkishText: 'Lit-t',
            arabicText: 'للت',
            code: 'TSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liṭ-ṭ',
            arabicText: 'للط',
            code: 'TdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liṭ-t': [
        {
            turkishText: 'Liṭ-ṭ',
            arabicText: 'للط',
            code: 'TdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eth-th': [
        {
            turkishText: 'eth-th',
            arabicText: 'الث',
            code: 'thSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'th-th': [
        {
            turkishText: 'th-th',
            arabicText: 'لث',
            code: 'thSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿth-th': [
        {
            turkishText: 'th-th',
            arabicText: 'لث',
            code: 'thSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lith-th': [
        {
            turkishText: 'lith-th',
            arabicText: 'للث',
            code: 'thSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eth-th': [
        {
            turkishText: 'Eth-th',
            arabicText: 'الث',
            code: 'ThSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lith-th': [
        {
            turkishText: 'Lith-th',
            arabicText: 'للث',
            code: 'ThSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aẓ-z': [
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aẕ-z': [
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aż-z': [
        {
            turkishText: 'aż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ez-z': [
        {
            turkishText: 'ez-z',
            arabicText: 'الز',
            code: 'zSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eẓ-z': [
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eẕ-z': [
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eż-z': [
        {
            turkishText: 'eż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'z-z': [
        {
            turkishText: 'z-z',
            arabicText: 'لز',
            code: 'zSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ẓ-z': [
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ẕ-z': [
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ż-z': [
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿz-z': [
        {
            turkishText: 'z-z',
            arabicText: 'لز',
            code: 'zSun19',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun20',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun21',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun22',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿẓ-z': [
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun23',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿẕ-z': [
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun24',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿż-z': [
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun25',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liz-z': [
        {
            turkishText: 'liz-z',
            arabicText: 'للز',
            code: 'zSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liẓ-ẓ',
            arabicText: 'للظ',
            code: 'zdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liẕ-ẕ',
            arabicText: 'للذ',
            code: 'zlineSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liż-ż',
            arabicText: 'للض',
            code: 'zdot2Sun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liẓ-z': [
        {
            turkishText: 'liẓ-ẓ',
            arabicText: 'للظ',
            code: 'zdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liẕ-z': [
        {
            turkishText: 'liẕ-ẕ',
            arabicText: 'للذ',
            code: 'zlineSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liż-z': [
        {
            turkishText: 'liż-ż',
            arabicText: 'للض',
            code: 'zdot2Sun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aẓ-z': [
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aẕ-z': [
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aż-z': [
        {
            turkishText: 'Aż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ez-z': [
        {
            turkishText: 'Ez-z',
            arabicText: 'الز',
            code: 'ZSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eẓ-z': [
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eẕ-z': [
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eż-z': [
        {
            turkishText: 'Eż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liz-z': [
        {
            turkishText: 'Liz-z',
            arabicText: 'للز',
            code: 'ZSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liẓ-ẓ',
            arabicText: 'للظ',
            code: 'ZdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liẕ-ẕ',
            arabicText: 'للذ',
            code: 'ZlineSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liż-ż',
            arabicText: 'للض',
            code: 'Zdot2Sun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liẓ-z': [
        {
            turkishText: 'Liẓ-ẓ',
            arabicText: 'للظ',
            code: 'ZdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liẕ-z': [
        {
            turkishText: 'Liẕ-ẕ',
            arabicText: 'للذ',
            code: 'ZlineSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liż-z': [
        {
            turkishText: 'Liż-ż',
            arabicText: 'للض',
            code: 'Zdot2Sun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'llāh': [
        {
            turkishText: '\'llāh',
            arabicText: 'ﷲ',
            code: '\'llah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lillāh': [
        {
            turkishText: 'lillāh',
            arabicText: 'لله',
            code: 'lillah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'billāh': [
        {
            turkishText: 'billāh',
            arabicText: 'بالله‌',
            code: 'billah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'billah': [
        {
            turkishText: 'billah',
            arabicText: 'بالله‌',
            code: 'billah2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lile': [
        {
            turkishText: 'lile',
            arabicText: 'لـله',
            code: 'lile',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lıle': [
        {
            turkishText: 'lıle',
            arabicText: 'لـله',
            code: 'lile2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ]
}

export const turkishKeyboardDisambiguations = {
    ' ': [
        {
            turkishText: ' ',
            arabicText: ' ',
            code: 'sp',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'b': [
        {
            turkishText: 'b',
            arabicText: 'ب',
            code: 'b',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'bb', 
            arabicText: 'ب',
            code: 'bb8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'bb', //remove?
            arabicText: 'بّ',
            code: 'bb',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'B': [
        {
            turkishText: 'B',
            arabicText: 'ب',
            code: 'B',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'c': [
        {
            turkishText: 'c',
            arabicText: 'ج',
            code: 'c',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'cc', 
            arabicText: 'ج',
            code: 'cc1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'cc', //remove?
            arabicText: 'جّ',
            code: 'cc',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'C': [
        {
            turkishText: 'C', 
            arabicText: 'ج',
            code: 'C',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'ç': [
        {
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'ج',
            code: 'cc9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç', //remove?
            arabicText: 'چّ',
            code: 'cc2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', //remove?
            arabicText: 'جّ',
            code: 'cc7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Ç': [
        {
            turkishText: 'Ç',
            arabicText: 'چ',
            code: 'C2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'd': [
        {
            turkishText: 'd',
            arabicText: 'د',
            code: 'd',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'د',
            code: 'dd8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', //remove?
            arabicText: 'دّ',
            code: 'dd',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', //remove?
            arabicText: 'ضّ',
            code: 'dd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'D': [
        {
            turkishText: 'D',
            arabicText: 'د',
            code: 'D',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'f': [
        {
            turkishText: 'f',
            arabicText: 'ف',
            code: 'f',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ff', //remove?
            arabicText: 'فّ',
            code: 'ff',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'F': [
        {
            turkishText: 'F',
            arabicText: 'ف',
            code: 'F',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'g': [
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'g3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ġġ', 
            arabicText: 'غ',
            code: 'gg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', //remove?
            arabicText: 'كّ',
            code: 'gg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ġġ', //remove?
            arabicText: 'غّ',
            code: 'gg4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'G': [
        {
            turkishText: 'G', 
            arabicText: 'ك',
            code: 'G3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ġ', 
            arabicText: 'غ',
            code: 'G4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'ğ': [
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğğ',
            arabicText: 'ك',
            code: 'gg7',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ğğ', //remove?
            arabicText: 'كّ',
            code: 'gg6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Ğ': [
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'h': [
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḥ',
            arabicText: 'ح',
            code: 'h3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḫʷ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'hw',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', //remove?
            arabicText: 'حّ',
            code: 'hh3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'hh', //remove?
            arabicText: 'هّ',
            code: 'hh',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', //remove?
            arabicText: 'خّ',
            code: 'hh5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'H': [
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḥ', 
            arabicText: 'ح',
            code: 'H3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'j': [
        {
            turkishText: 'j',
            arabicText: 'ژ',
            code: 'j',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'jj', //remove?
            arabicText: 'ژّ',
            code: 'jj',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'J': [
        {
            turkishText: 'J',
            arabicText: 'ژ',
            code: 'J',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'k': [
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'k',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'kk', 
            arabicText: 'ك',
            code: 'kk4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'kk', //remove?
            arabicText: 'كّ',
            code: 'kk',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', //remove?
            arabicText: 'قّ',
            code: 'kk3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg', //remove?
            arabicText: 'كّ',
            code: 'kkg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'K': [
        {
            turkishText: 'K', 
            arabicText: 'ك',
            code: 'K',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'l': [
        {
            turkishText: 'l',
            arabicText: 'ل',
            code: 'l',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'll', //remove?
            arabicText: 'لّ',
            code: 'll',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'L': [
        {
            turkishText: 'L', 
            arabicText: 'ل',
            code: 'L',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'm': [
        {
            turkishText: 'm',
            arabicText: 'م',
            code: 'm',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'mm', 
            arabicText: 'م',
            code: 'mm1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'mm', //remove?
            arabicText: 'مّ',
            code: 'mm',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'M': [
        {
            turkishText: 'M',
            arabicText: 'م',
            code: 'M',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ڭ',
            code: 'n3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'nn', 
            arabicText: 'ن',
            code: 'nn1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'nn', //remove?
            arabicText: 'نّ',
            code: 'nn',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'N': [
        {
            turkishText: 'N', 
            arabicText: 'ن',
            code: 'N',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ڭ',
            code: 'N3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'p': [
        {
            turkishText: 'p', 
            arabicText: 'پ',
            code: 'p',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        }
    ],
    'P': [
        {
            turkishText: 'P',
            arabicText: 'پ',
            code: 'P',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'persian'
        }
    ],
    'r': [
        {
            turkishText: 'r', 
            arabicText: 'ر',
            code: 'r',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'rr', //remove?
            arabicText: 'رّ',
            code: 'rr',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'R': [
        {
            turkishText: 'R',
            arabicText: 'ر',
            code: 'R',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    's': [
        {
            turkishText: 's', 
            arabicText: 'س',
            code: 's',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ss', 
            arabicText: 'س',
            code: 'ss6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ', 
            arabicText: 'ث',
            code: 'ss8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ss', //remove?
            arabicText: 'سّ',
            code: 'ss',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', //remove?
            arabicText: 'صّ',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ', //remove?
            arabicText: 'ثّ',
            code: 'ss5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'S': [
        {
            turkishText: 'S', 
            arabicText: 'س',
            code: 'S',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        }
    ],
    'ş': [
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'şş', //remove?
            arabicText: 'شّ',
            code: 'ss2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Ş': [
        {
            turkishText: 'Ş', 
            arabicText: 'ش',
            code: 'S2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    't': [ 
        {
            turkishText: 't',
            arabicText: 'ت',
            code: 't',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'تّ',
            code: 'tt',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', //remove?
            arabicText: 'طّ',
            code: 'tt3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd', //remove?
            arabicText: 'طّ',
            code: 'tt6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'ةّ',
            code: 'tt7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', //remove?
            arabicText: 'دّ',
            code: 'ttd13',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'T': [
        {
            turkishText: 'T', 
            arabicText: 'ت',
            code: 'T',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'v': [
        {
            turkishText: 'v',
            arabicText: 'و',
            code: 'v',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'vv', //remove?
            arabicText: 'وّ',
            code: 'vv',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'V': [
        {
            turkishText: 'V', 
            arabicText: 'و',
            code: 'V',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'w': [
        {
            turkishText: '\u200b', 
            arabicText: 'َ',
            code: 'w0',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ِ',
            code: 'w1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ُ',
            code: 'w2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ٓ',
            code: 'w3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ٰ',
            code: 'w4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ّ',
            code: 'w5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'ْ',
            code: 'w6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u203f',
            arabicText: ' ',
            code: 'w7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: '\u200b',
            arabicText: 'یٍ',
            code: 'w8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'y',
            arabicText: 'ى' + 'ِ',
            code: 'y4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'y', 
            arabicText: 'ي',
            code: 'y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'yy', 
            arabicText: 'ي',
            code: 'yy1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'yy', //remove?
            arabicText: 'يّ',
            code: 'yy',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: 'ى' + 'ِ',
            code: 'Y4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Y', 
            arabicText: 'ي', 
            code: 'Y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'z': [
        {
            turkishText: 'z', 
            arabicText: 'ز',
            code: 'z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'żż', 
            arabicText: 'ض',
            code: 'zz8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'zz', //remove?
            arabicText: 'زّ',
            code: 'zz',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', //remove?
            arabicText: 'ظّ',
            code: 'zz3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'żż', //remove?
            arabicText: 'ضّ',
            code: 'zz4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', //remove?
            arabicText: 'ذّ',
            code: 'zz5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        }
    ],
    'Z': [
        {
            turkishText: 'Z',
            arabicText: 'ز',
            code: 'Z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'a': [
        {
            turkishText: 'a',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā',
            arabicText: 'ى', // alef maksura
            code: 'a14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā',
            arabicText: '', // not represented in Turkish
            code: 'a15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        /*{
            turkishText: 'a',
            arabicText: 'أ' + 'َ',
            code: 'a17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'َ',
            code: 'a10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u200c' + 'ا',
            code: 'a3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā', 
            arabicText: 'و',
            code: 'a16',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'a-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ahamza3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    'A': [
        {
            turkishText: 'A',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ى', // alef maksura
            code: 'A14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        /*{
            turkishText: 'A',
            arabicText: 'أ' + 'َ',
            code: 'A17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },*/
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u200c' + 'ا',
            code: 'A3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ā', 
            arabicText: 'و',
            code: 'A16',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'A-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'aHamza3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // not represented in Arabic
            code: 'e11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė',
            arabicText: 'ي',
            code: 'e1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'e',
            arabicText: 'أ' + 'َ',
            code: 'e14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'َ',
            code: 'e10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: '\u200c' + 'ا',
            code: 'e2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'E': [
        {
            turkishText: 'E',
            arabicText: '', // not represented in Arabic
            code: 'E11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', // ? No E with a diacritic
            arabicText: 'ي',
            code: 'E1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'E',
            arabicText: 'أ' + 'َ',
            code: 'E14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'Eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: '\u200c' + 'ا',
            code: 'E2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'i': [
        {
            turkishText: 'i', 
            arabicText: '', // not represented in Arabic
            code: 'i11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'i',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'i2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ī',
            arabicText: 'ي', 
            code: 'i1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'i16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ī',
            arabicText: 'ئ',
            code: 'i29',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ا',
            code: 'i20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ه',
            code: 'i24',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ' + 'ِ',
            code: 'i26',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ',
            code: 'i4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'i28',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'persian' //izafet
        },
        {
            turkishText: 'i',
            arabicText: 'ي',
            code: 'i6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u200c' + 'ا',
            code: 'i22',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'İ': [
        {
            turkishText: 'İ', // default
            arabicText: '', // not represented in Arabic
            code: 'I11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'İ',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ي', 
            code: 'I1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ئ',
            code: 'I29',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ا',
            code: 'I20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ه',
            code: 'I24',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ' + 'ِ',
            code: 'I26',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ',
            code: 'I4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ي',
            code: 'I6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'I28',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'persian'
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u200c' + 'ا',
            code: 'I22',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'ı': [
        {
            turkishText: 'ı', 
            arabicText: '', // not represented in Arabic
            code: 'i12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'i3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ا',
            code: 'i21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ه',
            code: 'i25',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ' + 'ِ',
            code: 'i27',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ',
            code: 'i5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ي',
            code: 'i7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u200c' + 'ا',
            code: 'i23',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'I': [
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ا' + '\u06cc', // Farsi yeh
            code: 'I3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ا',
            code: 'I21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ه',
            code: 'I25',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ' + 'ِ',
            code: 'I27',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ',
            code: 'I5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ي', 
            code: 'I7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ِ', // kasrah
            code: 'I0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '\u200c' + 'ا',
            code: 'i23',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'o': [
         {
            turkishText: 'o',
            arabicText: '', // not represented in Arabic
            code: 'o10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'O': [
         {
            turkishText: 'O', 
            arabicText: '', // not represented in Arabic
            code: 'O10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ō',
            arabicText: 'و',
            code: 'O1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'ö': [
        {
            turkishText: 'ö', 
            arabicText: '', // not represented in Arabic
            code: 'o11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Ö': [
        {
            turkishText: 'Ö', 
            arabicText: '', // not represented in Arabic
            code: 'O11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'u': [
        {
            turkishText: 'u', 
            arabicText: '', // not represented in Arabic
            code: 'u11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ُ', // ḍammah
            code: 'u10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        /*{
            turkishText: 'u',
            arabicText: 'أ' + 'ُ',
            code: 'u16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'u',
            arabicText: '\u200c' + 'ا',
            code: 'u14',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'U': [
        {
            turkishText: 'U', 
            arabicText: '', // not represented in Arabic
            code: 'U11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ُ', // ḍammah
            code: 'U10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'U',
            arabicText: 'أ' + 'ُ',
            code: 'U16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        /*{
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'U',
            arabicText: '\u200c' + 'ا',
            code: 'u14',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'ü': [
        {
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ُ', // ḍammah
            code: 'u0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ا',
            code: 'u5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'ü',
            arabicText: 'أ' + 'ُ',
            code: 'u17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'ü',
            arabicText: '\u200c' + 'ا',
            code: 'u15',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'Ü': [
        {
            turkishText: 'Ü', 
            arabicText: '', // not represented in Arabic
            code: 'U12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ا',
            code: 'U5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        /*{
            turkishText: 'Ü',
            arabicText: 'أ' + 'ُ',
            code: 'U17',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },*/
        {
            turkishText: 'Ü',
            arabicText: '\u200c' + 'ا',
            code: 'U15',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    '\'': [
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ʿʿ',
            arabicText: 'عّ',
            code: '\'13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ء',
            code: '\'3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: '\'',
            arabicText: '\u0671' + '\u200c', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ˀ',
            arabicText: 'أ',
            code: 'ae\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ٸ',
            code: 'i\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ٶ',
            code: 'u\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀā',
            arabicText: 'آ',
            code: 'a\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ˀā',
            arabicText: 'ا',
            code: 'a\'12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'yi': [
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ',
            code: 'iHamza2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'yı': [ 
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'yı',
            arabicText: 'ۀ',
            code: 'iHamza3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'an': [
        {
            turkishText: 'an',
            arabicText: 'ً',
            code: 'e6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ًا',
            code: 'atanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: '',
            code: 'atanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ا',
            code: 'atanwin2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'en': [
        {
            turkishText: 'en',
            arabicText: 'ً',
            code: 'e7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ًا',
            code: 'etanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: '',
            code: 'etanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ا',
            code: 'etanwin2',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'un': [
        {
            turkishText: 'un',
            arabicText: 'ٌ',
            code: 'e8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'un',
            arabicText: '',
            code: 'utanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'ün': [
        {
            turkishText: 'ün',
            arabicText: 'ٌ',
            code: 'uumlaute8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'ün',
            arabicText: '',
            code: 'uumlautetanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'in': [
        {
            turkishText: 'in',
            arabicText: 'ٍ',
            code: 'e9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'in',
            arabicText: '',
            code: 'itanwin1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    'li\'l': [
        {
            turkishText: 'li\'l',
            arabicText: 'لال',
            code: 'li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'lil' + '\ufeff',
            arabicText: 'لل',
            code: 'lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'Li\'l': [ 
        {
            turkishText: 'Li\'l' + '\ufeff',
            arabicText: 'لال',
            code: 'Li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Lil',
            arabicText: 'لل',
            code: 'Lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aḍ-d': [
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ed-d': [
        {
            turkishText: 'ed-d',
            arabicText: 'الد',
            code: 'dSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eḍ-d': [
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'d-d': [
        {
            turkishText: 'd-d',
            arabicText: 'لد',
            code: 'dSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ḍ-d': [
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿd-d': [
        {
            turkishText: 'd-d',
            arabicText: 'لد',
            code: 'dSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿḍ-d': [
        {
            turkishText: 'ḍ-ḍ',
            arabicText: 'لض',
            code: 'ddotSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lid-d': [
        {
            turkishText: 'lid-d',
            arabicText: 'للد',
            code: 'dSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liḍ-ḍ',
            arabicText: 'للض',
            code: 'ddotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liḍ-d': [
        {
            turkishText: 'liḍ-ḍ',
            arabicText: 'للض',
            code: 'ddotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aḍ-d': [
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ed-d': [
        {
            turkishText: 'Ed-d',
            arabicText: 'الد',
            code: 'DSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eḍ-d': [
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lid-d': [
        {
            turkishText: 'Lid-d',
            arabicText: 'للد',
            code: 'DSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liḍ-ḍ',
            arabicText: 'للض',
            code: 'DdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liḍ-d': [
        {
            turkishText: 'Liḍ-ḍ',
            arabicText: 'للض',
            code: 'DdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'edh-dh': [
        {
            turkishText: 'edh-dh',
            arabicText: 'الذ',
            code: 'dhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'dh-dh': [
        {
            turkishText: 'dh-dh',
            arabicText: 'لذ',
            code: 'dhSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿdh-dh': [
        {
            turkishText: 'dh-dh',
            arabicText: 'لذ',
            code: 'dhSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lidh-dh': [
        {
            turkishText: 'lidh-dh',
            arabicText: 'للذ',
            code: 'dhSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Edh-dh': [
        {
            turkishText: 'Edh-dh',
            arabicText: 'الذ',
            code: 'DhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lidh-dh': [
        {
            turkishText: 'Lidh-dh',
            arabicText: 'للذ',
            code: 'DhSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'en-n': [
        {
            turkishText: 'en-n',
            arabicText: 'الن',
            code: 'nSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'n-n': [
        {
            turkishText: 'n-n',
            arabicText: 'لن',
            code: 'nSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿn-n': [
        {
            turkishText: 'n-n',
            arabicText: 'لن',
            code: 'nSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lin-n': [
        {
            turkishText: 'lin-n',
            arabicText: 'للن',
            code: 'nSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'En-n': [
        {
            turkishText: 'En-n',
            arabicText: 'الن',
            code: 'NSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lin-n': [
        {
            turkishText: 'Lin-n',
            arabicText: 'للن',
            code: 'NSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'er-r': [
        {
            turkishText: 'er-r',
            arabicText: 'الر',
            code: 'rSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'r-r': [
        {
            turkishText: 'r-r',
            arabicText: 'لر',
            code: 'rSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿr-r': [
        {
            turkishText: 'r-r',
            arabicText: 'لر',
            code: 'rSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lir-r': [
        {
            turkishText: 'lir-r',
            arabicText: 'للر',
            code: 'rSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Er-r': [
        {
            turkishText: 'Er-r',
            arabicText: 'الر',
            code: 'RSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lir-r': [
        {
            turkishText: 'Lir-r',
            arabicText: 'للر',
            code: 'RSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aṣ-s': [
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aŝ-s': [
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'es-s': [
        {
            turkishText: 'es-s',
            arabicText: 'الس',
            code: 'sSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eṣ-s': [
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eŝ-s': [
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'s-s': [
        {
            turkishText: 's-s',
            arabicText: 'لس',
            code: 'sSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ṣ-s': [
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ŝ-s': [
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿs-s': [
        {
            turkishText: 's-s',
            arabicText: 'لس',
            code: 'sSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿṣ-s': [
        {
            turkishText: 'ṣ-ṣ',
            arabicText: 'لص',
            code: 'sdotSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿŝ-s': [
        {
            turkishText: 'ŝ-ŝ',
            arabicText: 'لث',
            code: 'shatSun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lis-s': [
        {
            turkishText: 'lis-s',
            arabicText: 'للس',
            code: 'sSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liṣ-ṣ',
            arabicText: 'للص',
            code: 'sdotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liŝ-ŝ',
            arabicText: 'للث',
            code: 'shatSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liṣ-s': [
        {
            turkishText: 'liṣ-ṣ',
            arabicText: 'للص',
            code: 'sdotSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liŝ-s': [
        {
            turkishText: 'liŝ-ŝ',
            arabicText: 'للث',
            code: 'shatSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aṣ-s': [
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aŝ-s': [
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Es-s': [
        {
            turkishText: 'Es-s',
            arabicText: 'الس',
            code: 'SSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eṣ-s': [
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eŝ-s': [
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lis-s': [
        {
            turkishText: 'Lis-s',
            arabicText: 'للس',
            code: 'SSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liṣ-ṣ',
            arabicText: 'للص',
            code: 'SdotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liŝ-ŝ',
            arabicText: 'للث',
            code: 'ShatSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liṣ-s': [
        {
            turkishText: 'Liṣ-ṣ',
            arabicText: 'للص',
            code: 'SdotSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liŝ-s': [
        {
            turkishText: 'Liŝ-ŝ',
            arabicText: 'للث',
            code: 'ShatSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aş-ş': [
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eş-ş': [
        {
            turkishText: 'eş-ş',
            arabicText: 'الش',
            code: 'scSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ş-ş': [
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿş-ş': [
        {
            turkishText: 'ş-ş',
            arabicText: 'لش',
            code: 'scSun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liş-ş': [
        {
            turkishText: 'liş-ş',
            arabicText: 'للش',
            code: 'scSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aş-ş': [
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eş-ş': [
        {
            turkishText: 'Eş-ş',
            arabicText: 'الش',
            code: 'ScSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liş-ş': [
        {
            turkishText: 'Liş-ş',
            arabicText: 'للش',
            code: 'ScSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'esh-sh': [
        {
            turkishText: 'esh-sh',
            arabicText: 'الش',
            code: 'shSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'sh-sh': [
        {
            turkishText: 'sh-sh',
            arabicText: 'لش',
            code: 'shSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿsh-sh': [
        {
            turkishText: 'sh-sh',
            arabicText: 'لش',
            code: 'shSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lish-sh': [
        {
            turkishText: 'lish-sh',
            arabicText: 'للش',
            code: 'shSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Esh-sh': [
        {
            turkishText: 'Esh-sh',
            arabicText: 'الش',
            code: 'ShSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lish-sh': [
        {
            turkishText: 'Lish-sh',
            arabicText: 'للش',
            code: 'ShSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aṭ-t': [
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'et-t': [
        {
            turkishText: 'et-t',
            arabicText: 'الت',
            code: 'tSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eṭ-t': [
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'t-t': [
        {
            turkishText: 't-t',
            arabicText: 'لت',
            code: 'tSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ṭ-t': [
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿt-t': [
        {
            turkishText: 't-t',
            arabicText: 'لت',
            code: 'tSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿṭ-t': [
        {
            turkishText: 'ṭ-ṭ',
            arabicText: 'لط',
            code: 'tdotSun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lit-t': [
        {
            turkishText: 'lit-t',
            arabicText: 'للت',
            code: 'tSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liṭ-ṭ',
            arabicText: 'للط',
            code: 'tdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liṭ-t': [
        {
            turkishText: 'liṭ-ṭ',
            arabicText: 'للط',
            code: 'tdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aṭ-t': [
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Et-t': [
        {
            turkishText: 'Et-t',
            arabicText: 'الت',
            code: 'TSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eṭ-t': [
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lit-t': [
        {
            turkishText: 'Lit-t',
            arabicText: 'للت',
            code: 'TSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liṭ-ṭ',
            arabicText: 'للط',
            code: 'TdotSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liṭ-t': [
        {
            turkishText: 'Liṭ-ṭ',
            arabicText: 'للط',
            code: 'TdotSun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eth-th': [
        {
            turkishText: 'eth-th',
            arabicText: 'الث',
            code: 'thSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'th-th': [
        {
            turkishText: 'th-th',
            arabicText: 'لث',
            code: 'thSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿth-th': [
        {
            turkishText: 'th-th',
            arabicText: 'لث',
            code: 'thSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'lith-th': [
        {
            turkishText: 'lith-th',
            arabicText: 'للث',
            code: 'thSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eth-th': [
        {
            turkishText: 'Eth-th',
            arabicText: 'الث',
            code: 'ThSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Lith-th': [
        {
            turkishText: 'Lith-th',
            arabicText: 'للث',
            code: 'ThSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aẓ-z': [
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aẕ-z': [
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aż-z': [
        {
            turkishText: 'aż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ez-z': [
        {
            turkishText: 'ez-z',
            arabicText: 'الز',
            code: 'zSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eẓ-z': [
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eẕ-z': [
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eż-z': [
        {
            turkishText: 'eż-ż',
            arabicText: 'الض',
            code: 'zdot2Sun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'z-z': [
        {
            turkishText: 'z-z',
            arabicText: 'لز',
            code: 'zSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ẓ-z': [
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun9',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ẕ-z': [
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun10',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ż-z': [
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun11',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿz-z': [
        {
            turkishText: 'z-z',
            arabicText: 'لز',
            code: 'zSun19',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun20',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun21',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun22',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿẓ-z': [
        {
            turkishText: 'ẓ-ẓ',
            arabicText: 'لظ',
            code: 'zdotSun23',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿẕ-z': [
        {
            turkishText: 'ẕ-ẕ',
            arabicText: 'لذ',
            code: 'zlineSun24',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ʿż-z': [
        {
            turkishText: 'ż-ż',
            arabicText: 'لض',
            code: 'zdot2Sun25',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liz-z': [
        {
            turkishText: 'liz-z',
            arabicText: 'للز',
            code: 'zSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liẓ-ẓ',
            arabicText: 'للظ',
            code: 'zdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liẕ-ẕ',
            arabicText: 'للذ',
            code: 'zlineSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'liż-ż',
            arabicText: 'للض',
            code: 'zdot2Sun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liẓ-z': [
        {
            turkishText: 'liẓ-ẓ',
            arabicText: 'للظ',
            code: 'zdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liẕ-z': [
        {
            turkishText: 'liẕ-ẕ',
            arabicText: 'للذ',
            code: 'zlineSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'liż-z': [
        {
            turkishText: 'liż-ż',
            arabicText: 'للض',
            code: 'zdot2Sun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aẓ-z': [
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aẕ-z': [
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aż-z': [
        {
            turkishText: 'Aż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun5',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ez-z': [
        {
            turkishText: 'Ez-z',
            arabicText: 'الز',
            code: 'ZSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eẓ-z': [
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun6',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eẕ-z': [
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun7',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eż-z': [
        {
            turkishText: 'Eż-ż',
            arabicText: 'الض',
            code: 'Zdot2Sun8',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liz-z': [
        {
            turkishText: 'Liz-z',
            arabicText: 'للز',
            code: 'ZSun12',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liẓ-ẓ',
            arabicText: 'للظ',
            code: 'ZdotSun13',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liẕ-ẕ',
            arabicText: 'للذ',
            code: 'ZlineSun14',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Liż-ż',
            arabicText: 'للض',
            code: 'Zdot2Sun15',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liẓ-z': [
        {
            turkishText: 'Liẓ-ẓ',
            arabicText: 'للظ',
            code: 'ZdotSun16',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liẕ-z': [
        {
            turkishText: 'Liẕ-ẕ',
            arabicText: 'للذ',
            code: 'ZlineSun17',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Liż-z': [
        {
            turkishText: 'Liż-ż',
            arabicText: 'للض',
            code: 'Zdot2Sun18',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'llāh': [
        {
            turkishText: '\'llāh',
            arabicText: 'ﷲ',
            code: '\'llah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah',
            dropdownOrder: 1,
            needsDisambiguation: true, 
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lillāh': [
        {
            turkishText: 'lillāh',
            arabicText: 'لله',
            code: 'lillah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'billāh': [
        {
            turkishText: 'billāh',
            arabicText: 'بالله‌',
            code: 'billah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'billah': [
        {
            turkishText: 'billah',
            arabicText: 'بالله‌',
            code: 'billah2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lile': [
        {
            turkishText: 'lile',
            arabicText: 'لـله',
            code: 'lile',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lıle': [
        {
            turkishText: 'lıle',
            arabicText: 'لـله',
            code: 'lile2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ]
}