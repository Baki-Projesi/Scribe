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
            comboCategory: null
        }
    ],
    'b': [
        {
            turkishText: 'b',
            arabicText: 'ب',
            code: 'b',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'p', // at the end of the word, automatically p
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'bb',
            arabicText: 'بّ',
            code: 'bb',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'bb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'bb',
            arabicText: 'ب',
            code: 'bb8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'pp',
            arabicText: 'ب',
            code: 'bb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'B': [
        {
            turkishText: 'B',
            arabicText: 'ب',
            code: 'B',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'c': [
        {
            turkishText: 'c',
            arabicText: 'ج',
            code: 'c',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'cc', 
            arabicText: 'جّ',
            code: 'cc',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'çç', 
            arabicText: 'چّ',
            code: 'cc2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'çç', 
            arabicText: 'جّ',
            code: 'cc7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'cc',
            arabicText: 'ج',
            code: 'cc8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'çç',
            arabicText: 'ج',
            code: 'cc10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'C': [
        {
            turkishText: 'C',
            arabicText: 'ج',
            code: 'C',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'چ',
            code: 'C2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'd': [
        {
            turkishText: 'd',
            arabicText: 'د',
            code: 'd',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'dd',
            arabicText: 'دّ',
            code: 'dd',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ḍḍ',
            arabicText: 'ضّ',
            code: 'dd3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'tt',
            arabicText: 'دّ',
            code: 'dd7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'dd',
            arabicText: 'د',
            code: 'dd8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'dd10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'D': [
        {
            turkishText: 'D',
            arabicText: 'د',
            code: 'D',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'f': [
        {
            turkishText: 'f',
            arabicText: 'ف',
            code: 'f',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ff',
            arabicText: 'فّ',
            code: 'ff',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'F': [
        {
            turkishText: 'F',
            arabicText: 'ف',
            code: 'F',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'g': [
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'g6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'gg',
            arabicText: 'كّ',
            code: 'gg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غّ',
            code: 'gg4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غ',
            code: 'gg9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'G': [
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'G6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غ',
            code: 'G4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'h': [
        {
            turkishText: 'ḥ',
            arabicText: 'ح',
            code: 'h3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ḫʷ',
            arabicText: 'خو',
            code: 'hw',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo'
        },
        {
            turkishText: 'hh',
            arabicText: 'هّ',
            code: 'hh',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ḥḥ',
            arabicText: 'حّ',
            code: 'hh3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ẖẖ',
            arabicText: 'خّ',
            code: 'hh5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'H': [
        {
            turkishText: 'Ḥ',
            arabicText: 'ح',
            code: 'H3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo'
        }
    ],
    'j': [
        {
            turkishText: 'j',
            arabicText: 'ژ',
            code: 'j',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژّ',
            code: 'jj',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'J': [
        {
            turkishText: 'J',
            arabicText: 'ژ',
            code: 'J',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'k': [
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'k',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo'
        },
        {
            turkishText: 'kk',
            arabicText: 'كّ',
            code: 'kk',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ḳḳ',
            arabicText: 'قّ',
            code: 'kk3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'gg',
            arabicText: 'كّ',
            code: 'kkg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'kk',
            arabicText: 'ك',
            code: 'kk4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'K': [
        {
            turkishText: 'K',
            arabicText: 'ك',
            code: 'K',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo'
        }
    ],
    'l': [
        {
            turkishText: 'l',
            arabicText: 'ل',
            code: 'l',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'll',
            arabicText: 'لّ',
            code: 'll',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'L': [
        {
            turkishText: 'L',
            arabicText: 'ل',
            code: 'L',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'm': [
        {
            turkishText: 'm',
            arabicText: 'م',
            code: 'm',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'mm', 
            arabicText: 'مّ',
            code: 'mm',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'mm',
            arabicText: 'م',
            code: 'mm1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'M': [
        {
            turkishText: 'M',
            arabicText: 'م',
            code: 'M',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'nn', 
            arabicText: 'نّ',
            code: 'nn',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'nn',
            arabicText: 'ن',
            code: 'nn1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'N': [
        {
            turkishText: 'N',
            arabicText: 'ن',
            code: 'N',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'p': [
        {
            turkishText: 'p',
            arabicText: 'پ',
            code: 'p',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'pp',
            arabicText: 'پّ',
            code: 'pp',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'ppb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'pp', 
            arabicText: 'پ',
            code: 'pp8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'pp', 
            arabicText: 'ب',
            code: 'ppb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'P': [
        {
            turkishText: 'P',
            arabicText: 'پ',
            code: 'P',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'r': [
        {
            turkishText: 'r',
            arabicText: 'ر',
            code: 'r',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'rr',
            arabicText: 'رّ',
            code: 'rr',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'R': [
        {
            turkishText: 'R', // default
            arabicText: 'ر',
            code: 'R',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    's': [
        {
            turkishText: 's',
            arabicText: 'س',
            code: 's',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ss',
            arabicText: 'سّ',
            code: 'ss',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'şş',
            arabicText: 'شّ',
            code: 'ss2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ṣṣ',
            arabicText: 'صّ',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ŝŝ',
            arabicText: 'ثّ',
            code: 'ss5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ss',
            arabicText: 'س',
            code: 'ss6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ŝŝ',
            arabicText: 'ث',
            code: 'ss9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'S': [
        {
            turkishText: 'S',
            arabicText: 'س',
            code: 'S',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'S2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    't': [
        {
            turkishText: 't',
            arabicText: 'ت',
            code: 't',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'تّ',
            code: 'tt',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ṭṭ',
            arabicText: 'طّ',
            code: 'tt3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'dd',
            arabicText: 'طّ',
            code: 'tt6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'tt',
            arabicText: 'ةّ',
            code: 'tt7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'T': [
        {
            turkishText: 'T',
            arabicText: 'ت',
            code: 'T',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'v': [
        {
            turkishText: 'v',
            arabicText: 'و',
            code: 'v',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'vv',
            arabicText: 'وّ',
            code: 'vv',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'V': [
        {
            turkishText: 'V', 
            arabicText: 'و',
            code: 'V',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'y',
            arabicText: 'ي',
            code: 'y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'yy',
            arabicText: 'يّ',
            code: 'yy',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'yy',
            arabicText: 'ي',
            code: 'yy1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Y',
            arabicText: 'ي',
            code: 'Y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'z': [
        {
            turkishText: 'z', 
            arabicText: 'ز',
            code: 'z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'zz',
            arabicText: 'زّ',
            code: 'zz',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظّ',
            code: 'zz3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'żż', 
            arabicText: 'ضّ',
            code: 'zz4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذّ',
            code: 'zz5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah'
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'żż',
            arabicText: 'ض',
            code: 'zz8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double'
        }
    ],
    'Z': [
        {
            turkishText: 'Z',
            arabicText: 'ز',
            code: 'Z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'a': [
        {
            turkishText: 'a',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'a',
            arabicText: 'ى', // alef maksura
            code: 'a14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'a',
            arabicText: 'اء',
            code: 'ahamza3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'a', // special
            arabicText: 'َ',
            code: 'a10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'A': [
        {
            turkishText: 'A',
            arabicText: '', // not represented in Arabic
            code: 'A11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'A',
            arabicText: 'ى', // alef maksura
            code: 'A14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'A',
            arabicText: 'اء',
            code: 'Ahamza3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // not represented in Arabic
            code: 'e11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ė', 
            arabicText: 'ي',
            code: 'e1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        /*{
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },*/
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'e',
            arabicText: 'َ', 
            code: 'e10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'E': [
        {
            turkishText: 'E',
            arabicText: '', // not represented in Arabic
            code: 'E11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ė', // ? No capital E with diacritic in chart
            arabicText: 'ي', 
            code: 'E1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        /*{
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },*/
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'Yi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'i': [
        {
            turkishText: 'i',
            arabicText: '', // not represented in Arabic
            code: 'i11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'i',
            arabicText: 'ي',
            code: 'i6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'i',
            arabicText: 'اي',
            code: 'i2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ي',
            code: 'i1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'ī',
            arabicText: 'اي',
            code: 'i16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'i',
            arabicText: 'ﺍ',
            code: 'i4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'ı',
            arabicText: '', // not represented in Arabic
            code: 'i12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ı', // special
            arabicText: 'ي',
            code: 'i7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'ı',
            arabicText: 'اي',
            code: 'i3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ﺍ',
            code: 'i5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'I': [
        {
            turkishText: 'İ',
            arabicText: '', // not represented in Arabic
            code: 'I11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ي',
            code: 'I6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'İ',
            arabicText: 'اي',
            code: 'I2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ī', // special
            arabicText: 'ي',
            code: 'I1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'Ī',
            arabicText: 'اي',
            code: 'I16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ﺍ',
            code: 'I4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'Ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'İ', 
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'I', // special
            arabicText: 'ي',
            code: 'I7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'I',
            arabicText: 'اي',
            code: 'I3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'I13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'I',
            arabicText: 'ﺍ',
            code: 'I5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'I', 
            arabicText: 'ِ', // kasrah
            code: 'I0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        }
    ],
    'o': [
        {
            turkishText: 'o', // default
            arabicText: '', // not represented in Arabic
            code: 'o10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ö',
            arabicText: '', // not represented in Arabic
            code: 'o11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'O': [
        {
            turkishText: 'O', // default
            arabicText: '', // not represented in Arabic
            code: 'O10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ö',
            arabicText: '', // not represented in Arabic
            code: 'O11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ō',
            arabicText: 'ﻮ',
            code: 'O1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'u': [
        {
            turkishText: 'u',
            arabicText: '', // not represented in Arabic
            code: 'u11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü', 
            arabicText: 'ُ', // ḍammah
            code: 'u0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'u', 
            arabicText: 'ُ', // ḍammah
            code: 'u10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ﺍ',
            code: 'u5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        }
    ],
    'U': [
        {
            turkishText: 'U', 
            arabicText: '', // not represented in Arabic
            code: 'U11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: '', // not represented in Arabic
            code: 'U12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'U', 
            arabicText: 'ُ', // ḍammah
            code: 'U10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special'
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ﺍ',
            code: 'U5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        }
    ],
    '\'': [
        {
            turkishText: 'ʾ',
            arabicText: '',
            code: 'hamza',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ء',
            code: '\'3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'ʿ',
            arabicText: '\u0671', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null
        }
    ],
    'yi': [ // does this need a capital case?
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza'
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'an': [
        {
            turkishText: 'an',
            arabicText: 'ً',
            code: 'e6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        },
        {
            turkishText: 'an',
            arabicText: 'ًا',
            code: 'atanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        }
    ],
    'en': [
        {
            turkishText: 'en',
            arabicText: 'ً',
            code: 'e7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        },
        {
            turkishText: 'en',
            arabicText: 'ًا',
            code: 'etanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        }
    ],
    'un': [
        {
            turkishText: 'un',
            arabicText: 'ٌ',
            code: 'e8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        }
    ],
    'in': [
        {
            turkishText: 'in',
            arabicText: 'ٍ',
            code: 'e9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin'
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet'
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet'
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet'
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet'
        }
    ],
    'sh': [
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 'sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'Sh': [
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'Sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun'
        }
    ],
    'Allah': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    'lillah': [
        {
            turkishText: 'lillāh',
            arabicText: 'لله',
            code: 'lillah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null
        }
    ]

}

export const turkishKeyboardDisambiguations = {
    ' ': [
        {
            turkishText: ' ',
            arabicText: ' ',
            code: 'sp'
        }
    ],
    'b': [
        {
            turkishText: 'b', // default
            arabicText: 'ب',
            code: 'b'
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7'
        },
        {
            turkishText: 'bb', // sheddah
            arabicText: 'بّ',
            code: 'bb'
        },
        {
            turkishText: 'pp', // sheddah
            arabicText: 'بّ',
            code: 'bb7'
        },
        {
            turkishText: 'bb', 
            arabicText: 'ب',
            code: 'bb8'
        },
        {
            turkishText: 'pp',
            arabicText: 'ب',
            code: 'bb9'
        }
    ],
    'B': [
        {
            turkishText: 'B', // default
            arabicText: 'ب',
            code: 'B'
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7'
        }
    ],
    'c': [
        {
            turkishText: 'c', // default
            arabicText: 'ج',
            code: 'c'
        },
        {
            turkishText: 'cc', // sheddah
            arabicText: 'جّ',
            code: 'cc'
        },
        {
            turkishText: 'cc', 
            arabicText: 'ج',
            code: 'cc1'
        }
    ],
    'C': [
        {
            turkishText: 'C', // default
            arabicText: 'ج',
            code: 'C'
        }
    ],
    'ç': [
        {
            turkishText: 'ç', // default
            arabicText: 'چ',
            code: 'c2'
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7'
        },
        {
            turkishText: 'çç', // sheddah
            arabicText: 'چّ',
            code: 'cc2'
        },
        {
            turkishText: 'çç', // sheddah
            arabicText: 'جّ',
            code: 'cc7'
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc8'
        },
        {
            turkishText: 'çç', 
            arabicText: 'ج',
            code: 'cc9'
        }
    ],
    'Ç': [
        {
            turkishText: 'Ç', // default
            arabicText: 'چ',
            code: 'C2'
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7'
        }
    ],
    'd': [
        {
            turkishText: 'd', // default
            arabicText: 'د',
            code: 'd'
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3'
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7'
        },
        {
            turkishText: 'dd', // sheddah
            arabicText: 'دّ',
            code: 'dd'
        },
        {
            turkishText: 'ḍḍ', // sheddah
            arabicText: 'ضّ',
            code: 'dd3'
        },
        {
            turkishText: 'tt', // sheddah
            arabicText: 'دّ',
            code: 'dd7'
        },
        {
            turkishText: 'dd', 
            arabicText: 'د',
            code: 'dd8'
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9'
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'dd10'
        }
    ],
    'D': [
        {
            turkishText: 'D', // default
            arabicText: 'د',
            code: 'D'
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3'
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7'
        }
    ],
    'f': [
        {
            turkishText: 'f', // default
            arabicText: 'ف',
            code: 'f'
        },
        {
            turkishText: 'ff', // sheddah
            arabicText: 'فّ',
            code: 'ff'
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1'
        }
    ],
    'F': [
        {
            turkishText: 'F', // default
            arabicText: 'ف',
            code: 'F'
        }
    ],
    'g': [
        {
            turkishText: 'g', // default
            arabicText: 'ك',
            code: 'g6'
        },
        {
            turkishText: 'ġ', // default
            arabicText: 'غ',
            code: 'g4'
        },
        {
            turkishText: 'gg', // sheddah
            arabicText: 'كّ',
            code: 'gg'
        },
        {
            turkishText: 'ġġ', // sheddah
            arabicText: 'غّ',
            code: 'gg4'
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg5'
        },
        {
            turkishText: 'ġġ', 
            arabicText: 'غ',
            code: 'gg6'
        }
    ],
    'G': [
        {
            turkishText: 'G', // default
            arabicText: 'ك',
            code: 'G6'
        },
        {
            turkishText: 'Ġ', // default
            arabicText: 'غ',
            code: 'G4'
        }
    ],
    'ğ': [
        {
            turkishText: 'ğ', // default
            arabicText: 'ك',
            code: 'g6'
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5'
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7'
        },
        {
            turkishText: 'ğğ', // sheddah
            arabicText: 'كّ',
            code: 'gg6'
        },
        {
            turkishText: 'ğğ',
            arabicText: 'ك',
            code: 'gg7'
        }
    ],
    'Ğ': [
        {
            turkishText: 'Ğ', // default
            arabicText: 'ك',
            code: 'G6'
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5'
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7'
        }
    ],
    'h': [
        {
            turkishText: 'ḥ', // default
            arabicText: 'ح',
            code: 'h3'
        },
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h'
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5'
        },
        {
            turkishText: 'ḫʷ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'hw'
        },
        {
            turkishText: 'ḥḥ', // sheddah
            arabicText: 'حّ',
            code: 'hh3'
        },
        {
            turkishText: 'hh', // sheddah
            arabicText: 'هّ',
            code: 'hh'
        },
        {
            turkishText: 'ẖẖ', // sheddah
            arabicText: 'خّ',
            code: 'hh5'
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh6'
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh7'
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8'
        }

    ],
    'H': [
        {
            turkishText: 'Ḥ', // default
            arabicText: 'ح',
            code: 'H3'
        },
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H'
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5'
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW'
        }
    ],
    'j': [
        {
            turkishText: 'j', // default
            arabicText: 'ژ',
            code: 'j'
        },
        {
            turkishText: 'jj', // sheddah
            arabicText: 'ژّ',
            code: 'jj'
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1'
        }
    ],
    'J': [
        {
            turkishText: 'J', // default
            arabicText: 'ژ',
            code: 'J'
        }
    ],
    'k': [
        {
            turkishText: 'k', // default
            arabicText: 'ك',
            code: 'k'
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3'
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg'
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke'
        },
        {
            turkishText: 'kk', // sheddah
            arabicText: 'كّ',
            code: 'kk'
        },
        {
            turkishText: 'ḳḳ', // sheddah
            arabicText: 'قّ',
            code: 'kk3'
        },
        {
            turkishText: 'gg', // sheddah
            arabicText: 'كّ',
            code: 'kkg'
        },
        {
            turkishText: 'kk', 
            arabicText: 'ك',
            code: 'kk4'
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5'
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6'
        }
    ],
    'K': [
        {
            turkishText: 'K', // default
            arabicText: 'ك',
            code: 'K'
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3'
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG'
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke'
        }
    ],
    'l': [
        {
            turkishText: 'l', // default
            arabicText: 'ل',
            code: 'l'
        },
        {
            turkishText: 'll', // sheddah
            arabicText: 'لّ',
            code: 'll'
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1'
        }
    ],
    'L': [
        {
            turkishText: 'L', // default
            arabicText: 'ل',
            code: 'L'
        }
    ],
    'm': [
        {
            turkishText: 'm', // default
            arabicText: 'م',
            code: 'm'
        },
        {
            turkishText: 'mm', // sheddah
            arabicText: 'مّ',
            code: 'mm'
        },
        {
            turkishText: 'mm', 
            arabicText: 'م',
            code: 'mm1'
        }
    ],
    'M': [
        {
            turkishText: 'M', // default
            arabicText: 'م',
            code: 'M'
        }
    ],
    'n': [
        {
            turkishText: 'n', // default
            arabicText: 'ن',
            code: 'n'
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6'
        },
        {
            turkishText: 'nn', // sheddah
            arabicText: 'نّ',
            code: 'nn'
        },
        {
            turkishText: 'nn', 
            arabicText: 'ن',
            code: 'nn1'
        }
    ],
    'N': [
        {
            turkishText: 'N', // default
            arabicText: 'ن',
            code: 'N'
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6'
        }
    ],
    'p': [
        {
            turkishText: 'p', // default
            arabicText: 'پ',
            code: 'p'
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7'
        },
        {
            turkishText: 'pp', // sheddah
            arabicText: 'پّ',
            code: 'pp'
        },
        {
            turkishText: 'pp', // sheddah
            arabicText: 'بّ',
            code: 'ppb7'
        },
        {
            turkishText: 'pp', 
            arabicText: 'پ',
            code: 'pp8'
        },
        {
            turkishText: 'pp', 
            arabicText: 'ب',
            code: 'ppb9'
        }
    ],
    'P': [
        {
            turkishText: 'P', // default
            arabicText: 'پ',
            code: 'P'
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7'
        }
    ],
    'r': [
        {
            turkishText: 'r', // default
            arabicText: 'ر',
            code: 'r'
        },
        {
            turkishText: 'rr', // sheddah
            arabicText: 'رّ',
            code: 'rr'
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1'
        }
    ],
    'R': [
        {
            turkishText: 'R', // default
            arabicText: 'ر',
            code: 'R'
        }
    ],
    's': [
        {
            turkishText: 's', // default
            arabicText: 'س',
            code: 's'
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3'
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5'
        },
        {
            turkishText: 'ss', // sheddah
            arabicText: 'سّ',
            code: 'ss'
        },
        {
            turkishText: 'ṣṣ', // sheddah
            arabicText: 'صّ',
            code: 'ss3'
        },
        {
            turkishText: 'ŝŝ', // sheddah
            arabicText: 'ثّ',
            code: 'ss5'
        },
        {
            turkishText: 'ss', 
            arabicText: 'س',
            code: 'ss6'
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss7'
        },
        {
            turkishText: 'ŝŝ', 
            arabicText: 'ث',
            code: 'ss8'
        }
    ],
    'S': [
        {
            turkishText: 'S', // default
            arabicText: 'س',
            code: 'S'
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3'
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5'
        }
    ],
    'ş': [
        {
            turkishText: 'ş', // default
            arabicText: 'ش',
            code: 's2'
        },
        {
            turkishText: 'şş', // sheddah
            arabicText: 'شّ',
            code: 'ss2'
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss3'
        }
    ],
    'Ş': [
        {
            turkishText: 'Ş', // default
            arabicText: 'ش',
            code: 'S2'
        }
    ],
    't': [ // exceeds 9 options
        {
            turkishText: 't', // default
            arabicText: 'ت',
            code: 't'
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3'
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6'
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7'
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7'
        },
        {
            turkishText: 'tt', // sheddah
            arabicText: 'تّ',
            code: 'tt'
        },
        {
            turkishText: 'ṭṭ', // sheddah
            arabicText: 'طّ',
            code: 'tt3'
        },
        {
            turkishText: 'dd', // sheddah
            arabicText: 'طّ',
            code: 'tt6'
        },
        {
            turkishText: 'tt', // sheddah
            arabicText: 'ةّ',
            code: 'tt7'
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8'
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9'
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10'
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11'
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12'
        }
    ],
    'T': [
        {
            turkishText: 'T', // default
            arabicText: 'ت',
            code: 'T'
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3'
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6'
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7'
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7'
        }
    ],
    'v': [
        {
            turkishText: 'v', // default
            arabicText: 'و',
            code: 'v'
        },
        {
            turkishText: 'vv', // sheddah
            arabicText: 'وّ',
            code: 'vv'
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1'
        }
    ],
    'V': [
        {
            turkishText: 'V', // default
            arabicText: 'و',
            code: 'V'
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1'
        },
        {
            turkishText: 'y', // default
            arabicText: 'ي', // special
            code: 'y'
        },
        {
            turkishText: 'yy', // sheddah
            arabicText: 'يّ',
            code: 'yy'
        },
        {
            turkishText: 'yy', 
            arabicText: 'ي',
            code: 'yy1'
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1'
        },
        {
            turkishText: 'Y', // default
            arabicText: 'ي', // special
            code: 'Y'
        }
    ],
    'z': [
        {
            turkishText: 'z', // default
            arabicText: 'ز',
            code: 'z'
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3'
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4'
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5'
        },
        {
            turkishText: 'zz', // sheddah
            arabicText: 'زّ',
            code: 'zz'
        },
        {
            turkishText: 'ẓẓ', // sheddah
            arabicText: 'ظّ',
            code: 'zz3'
        },
        {
            turkishText: 'żż', // sheddah
            arabicText: 'ضّ',
            code: 'zz4'
        },
        {
            turkishText: 'ẕẕ', // sheddah
            arabicText: 'ذّ',
            code: 'zz5'
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6'
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7'
        },
        {
            turkishText: 'żż', 
            arabicText: 'ض',
            code: 'zz8'
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9'
        }
    ],
    'Z': [
        {
            turkishText: 'Z', // default
            arabicText: 'ز',
            code: 'Z'
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3'
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4'
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5'
        }
    ],
    'a': [
        {
            turkishText: 'a', // default
            arabicText: '', // not represented in Arabic
            code: 'a11'
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0'
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12'
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1'
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2'
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13'
        },
        {
            turkishText: 'a',
            arabicText: 'ى', // alef maksura
            code: 'a14'
        },
        {
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza'
        },
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2'
        },
        {
            turkishText: 'a',
            arabicText: 'اء',
            code: 'ahamza3'
        },
        {
            turkishText: 'a',
            arabicText: 'َ',
            code: 'a10'
        }
    ],
    'A': [
        {
            turkishText: 'A', // default
            arabicText: '', // not represented in Arabic
            code: 'a11'
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0'
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12'
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1'
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2'
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13'
        },
        {
            turkishText: 'A',
            arabicText: 'ى', // alef maksura
            code: 'A14'
        },
        {
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza'
        },
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2'
        },
        {
            turkishText: 'A',
            arabicText: 'اء',
            code: 'Ahamza3'
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10'
        }
    ],
    'e': [
        {
            turkishText: 'e', // default
            arabicText: '', // not represented in Arabic
            code: 'e11'
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0'
        },
        {
            turkishText: 'ė', // special
            arabicText: 'ي',
            code: 'e1'
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5'
        },
        /*{
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12'
        },*/
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza'
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1'
        },
        {
            turkishText: 'e',
            arabicText: 'َ',
            code: 'e10'
        }
    ],
    'E': [
        {
            turkishText: 'E', // default
            arabicText: '', // not represented in Arabic
            code: 'E11'
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0'
        },
        {
            turkishText: 'ė', // ? No E with a diacritic
            arabicText: 'ي', // special
            code: 'E1'
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5'
        },
        /*{
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12'
        },*/
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        },
        {
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza'
        },
        {
            turkishText: 'Yi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10'
        }
    ],
    'i': [
        {
            turkishText: 'i', // default
            arabicText: '', // not represented in Arabic
            code: 'i11'
        },
        {
            turkishText: 'i',
            arabicText: 'ي', // special
            code: 'i6'
        },
        {
            turkishText: 'i',
            arabicText: 'اي',
            code: 'i2'
        },
        {
            turkishText: 'ī',
            arabicText: 'ي', // special
            code: 'i1'
        },
        {
            turkishText: 'ī',
            arabicText: 'اي',
            code: 'i16'
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18'
        },
        {
            turkishText: 'i',
            arabicText: 'ﺍ',
            code: 'i4'
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14'
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'ihamza'
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10'
        }
    ],
    'İ': [
        {
            turkishText: 'İ', // default
            arabicText: '', // not represented in Arabic
            code: 'I11'
        },
        {
            turkishText: 'İ',
            arabicText: 'ي', // special
            code: 'I6'
        },
        {
            turkishText: 'İ',
            arabicText: 'اي',
            code: 'I2'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ي', // special
            code: 'I1'
        },
        {
            turkishText: 'Ī',
            arabicText: 'اي',
            code: 'I16'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18'
        },
        {
            turkishText: 'İ',
            arabicText: 'ﺍ',
            code: 'I4'
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I14'
        },
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'Ihamza'
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10'
        }
    ],
    'ı': [
        {
            turkishText: 'ı', // default
            arabicText: '', // not represented in Arabic
            code: 'i12'
        },
        {
            turkishText: 'ı',
            arabicText: 'ي', // special
            code: 'i7'
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13'
        },
        {
            turkishText: 'ı',
            arabicText: 'اي',
            code: 'i3'
        },
        {
            turkishText: 'ı',
            arabicText: 'ﺍ',
            code: 'i5'
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15'
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0'
        }
    ],
    'I': [
        {
            turkishText: 'I', // default
            arabicText: '', // not represented in Arabic
            code: 'I12'
        },
        {
            turkishText: 'I',
            arabicText: 'ي', // special
            code: 'I7'
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'i13'
        },
        {
            turkishText: 'I',
            arabicText: 'اي',
            code: 'I3'
        },
        {
            turkishText: 'I',
            arabicText: 'ﺍ',
            code: 'I5'
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15'
        },
        {
            turkishText: 'I',
            arabicText: 'ِ', // kasrah
            code: 'I0'
        }
    ],
    'o': [
         {
            turkishText: 'o', // default
            arabicText: '', // not represented in Arabic
            code: 'o10'
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6'
        },
        {
            turkishText: 'ō',
            //representedText: 'o',
            arabicText: 'و',
            code: 'o1'
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2'
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4'
        }
    ],
    'O': [
         {
            turkishText: 'O', // default
            arabicText: '', // not represented in Arabic
            code: 'O10'
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6'
        },
        {
            turkishText: 'Ō',
            //representedText: 'O',
            arabicText: 'و',
            code: 'O1'
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2'
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4'
        }
    ],
    'ö': [
        {
            turkishText: 'ö', // default
            arabicText: '', // not represented in Arabic
            code: 'o11'
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3'
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5'
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7'
        }
    ],
    'Ö': [
        {
            turkishText: 'Ö', // default
            arabicText: '', // not represented in Arabic
            code: 'O11'
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3'
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5'
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7'
        }
    ],
    'u': [
        {
            turkishText: 'u', // default
            arabicText: '', // not represented in Arabic
            code: 'u11'
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6'
        },
        {
            turkishText: 'u',
            arabicText: 'ُ', // ḍammah
            code: 'u10'
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13'
        },
        {
            turkishText: 'ū',
            //representedText: 'u',
            arabicText: 'و',
            code: 'u1'
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4'
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8'
        },
        {
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza'
        }
    ],
    'U': [
        {
            turkishText: 'U', // default
            arabicText: '', // not represented in Arabic
            code: 'U11'
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6'
        },
        {
            turkishText: 'U',
            arabicText: 'ُ', // ḍammah
            code: 'U10'
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13'
        },
        {
            turkishText: 'Ū',
            //representedText: 'U',
            arabicText: 'و',
            code: 'U1'
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4'
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8'
        },
        {
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza'
        }
    ],
    'ü': [
        {
            turkishText: 'ü', // default
            arabicText: '', // not represented in Arabic
            code: 'u12'
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7'
        },
        {
            turkishText: 'ü',
            arabicText: 'ُ', // ḍammah
            code: 'u0'
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3'
        },
        {
            turkishText: 'ü',
            arabicText: 'ﺍ',
            code: 'u5'
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9'
        }
    ],
    'Ü': [
        {
            turkishText: 'Ü', // default
            arabicText: '', // not represented in Arabic
            code: 'U12'
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0'
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ﺍ',
            code: 'U5'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9'
        }
    ],
    '\'': [
        {
            turkishText: 'ʾ', // default
            arabicText: '',
            code: 'hamza'
        },
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2'
        },
        {
            turkishText: 'ˀ', // is this necessary?
            arabicText: 'ء',
            code: '\'3'
        },
        {
            turkishText: 'ʿ',
            arabicText: '\u0671', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0'
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1'
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2'
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3'
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4'
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5'
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6'
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7'
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8'
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9'
        }
    ],
    'yi': [
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza'
        },
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza2'
        }
    ],
    'yı': [ 
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1'
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza3'
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi'
        }
    ],
    'an': [
        {
            turkishText: 'an',
            //arabicText: 'ـً',
            arabicText: 'ً',
            code: 'e6'
        },
        {
            turkishText: 'an',
            //arabicText: 'ـًاً',
            arabicText: 'ًا',
            code: 'atanwin'
        }
    ],
    'en': [
        {
            turkishText: 'en',
            //arabicText: 'ـً',
            arabicText: 'ً',
            code: 'e7'
        },
        {
            turkishText: 'en',
            //arabicText: 'ـًا',
            arabicText: 'ًا',
            code: 'etanwin'
        }
    ],
    'un': [
        {
            turkishText: 'un',
            //arabicText: 'ـٌ',
            arabicText: 'ٌ',
            code: 'e8'
        }
    ],
    'in': [
        {
            turkishText: 'in',
            //arabicText: 'ــٍ',
            arabicText: 'ٍ',
            code: 'e9'
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1'
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2'
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3'
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4'
        }
    ],
    'sh': [
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 'sh'
        }
    ],
    'Sh': [
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'Sh'
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun'
        }
    ],
    'aş-ş': [
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun'
        }
    ],
    'Aş-ş': [
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun'
        }
    ],
    'Allah': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah'
        }
    ],
    'lillah': [
        {
            turkishText: 'lillāh',
            //arabicText: 'ٱللَّهِ',
            arabicText: 'لله',
            code: 'lillah'
        }
    ]
}
