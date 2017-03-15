export const englishKeyboardDisambiguations = {
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n'
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6'
        }
    ],
    's': [
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2'
        },
        {
            turkishText: '', // ?
            arabicText: 'ص',
            code: 's3'
        },
        {
            turkishText: '', // ?
            arabicText: 'ث',
            code: 's5'
        },
        {
            turkishText: 's',
            arabicText: 'س',
            code: 's'
        }
    ],
    't': [
        {
            turkishText: '', // ? 
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
            arabicText: '', // ?
            code: 't'
        },
        {
            turkishText: '', // ?
            arabicText: 'ة',
            code: 't7'
        },
    ],
    'g': [
        {
            turkishText: '', // ?
            arabicText: 'غ',
            code: 'g4'
        },
        {
            turkishText: 'g',
            arabicText: 'ك', // ?
            code: 'g6'
        },
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'g7'
        },
        {
            turkishText: '', // ?
            arabicText: 'غ',
            code: 'g5'
        },
    ],
    'h': [
        {
            turkishText: '', // ?
            arabicText: 'ح',
            code: 'h3'
        },
        {
            turkishText: '', // ?
            arabicText: 'خ',
            code: 'h5'
        },
        {
            turkishText: 'h', // ?
            arabicText: '', // ?
            code: 'h'
        },
    ],
    'k': [
        {
            turkishText: '', // ?
            arabicText: 'ف',
            code: 'k3'
        },
        {
            turkishText: '', // ?
            arabicText: 'ك',
            code: 'k'
        }
    ],
    'z': [
        {
            turkishText: '', // ?
            arabicText: 'ظ',
            code: 'z3'
        },
        {
            turkishText: '', // ?
            arabicText: 'ض',
            code: 'z4'
        },
        {
            turkishText: '', // ?
            arabicText: 'ذ',
            code: 'z5'
        },
        {
            turkishText: 'z',
            arabicText: 'ز',
            code: 'z'
        },
    ],
    'a': '?',
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // ?
            code: 'e0'
        },
        {
            turkishText: 'e',
            arabicText: 'ي',
            code: 'e1'
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5'
        },
        {
            turkishText: 'e',
            arabicText: '', // ?
            code: 'e'
        },
    ],
    'i': [
        {
            turkishText: 'i',
            arabicText: '', // ?
            code: 'i0'
        },
        {
            turkishText: '', // ?
            arabicText: '', // ?
            code: 'i1'
        },
        {
            turkishText: '', // ?
            arabicText: 'ى', // ?
            code: 'i4'
        },
        {
            turkishText: 'i',
            arabicText: '', // ?
            code: 'i8'
        },
    ]

}

export const turkishKeyboardDisambiguations = function () {
    return englishKeyboardDisambiguations.merge({
        'ğ': [
            {
                turkishText: 'ğ',
                arabicText: 'ك',
                code: 'g6'
            },
            {
                turkishText: 'ğ',
                arabicText: 'غ',
                code: 'g5'
            }
        ]
    })
}