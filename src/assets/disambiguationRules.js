export const englishKeyboardDisambiguations = {
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
            turkishText: 'p', // at the end of the word, automatically p
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
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2'
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7'
        },
        {
            turkishText: 'cc', // sheddah
            arabicText: 'جّ',
            code: 'cc'
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
        }
    ],
    'C': [
        {
            turkishText: 'C', // default
            arabicText: 'ج',
            code: 'C'
        },
        {
            turkishText: 'Ç',
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
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4'
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
            turkishText: 'gg', // sheddah
            arabicText: 'كّ',
            code: 'gg'
        },
        {
            turkishText: 'ġġ', // sheddah
            arabicText: 'غّ',
            code: 'gg4'
        }
    ],
    'G': [
        {
            turkishText: 'G', // default
            arabicText: 'ك',
            code: 'G6'
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غ',
            code: 'G4'
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
            turkishText: 'hh', // sheddah
            arabicText: 'هّ',
            code: 'hh'
        },
        {
            turkishText: 'ḥḥ', // sheddah
            arabicText: 'حّ',
            code: 'hh3'
        },
        {
            turkishText: 'ẖẖ', // sheddah
            arabicText: 'خّ',
            code: 'hh5'
        },
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
            turkishText: 'ññ', // sheddah
            arabicText: 'كّ',
            code: 'nn6'
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
            turkishText: 'ş', // sh combination --> s2
            arabicText: 'ش',
            code: 's2'
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
            turkishText: 'şş', // sheddah
            arabicText: 'شّ',
            code: 'ss2'
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
        }
    ],
    'S': [
        {
            turkishText: 'S', // default
            arabicText: 'س',
            code: 'S'
        },
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'S2'
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
    't': [ // exceeds 9 options, needs categories
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
            turkishText: 'tt', // sheddah
            arabicText: 'دّ',
            code: 'ttd7'
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
            turkishText: 'a', // special
            arabicText: 'َ',
            code: 'a10'
        }
    ],
    'A': [
        {
            turkishText: 'A', // default
            arabicText: '', // not represented in Arabic
            code: 'A11'
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
            turkishText: 'A', // special
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
            turkishText: 'e', // special
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
            turkishText: 'ė', // ? No capital E with diacritic in chart
            arabicText: 'ي', // special
            code: 'E1'
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5'
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
            turkishText: 'E', // special
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
            turkishText: 'i', // special
            arabicText: 'ي',
            code: 'i6'
        },
        {
            turkishText: 'i',
            arabicText: 'اي',
            code: 'i2'
        },
        {
            turkishText: 'ī', // special
            arabicText: 'ي',
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
            turkishText: 'i', // special
            arabicText: 'ِ', // kasrah
            code: 'i10'
        },
        {
            turkishText: 'ı',
            arabicText: '', // not represented in Arabic
            code: 'i12'
        },
        {
            turkishText: 'ı', // special
            arabicText: 'ي',
            code: 'i7'
        },
        {
            turkishText: 'ı',
            arabicText: 'اي',
            code: 'i3'
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13'
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
            turkishText: 'ı', // special
            arabicText: 'ِ', // kasrah
            code: 'i0'
        }
    ],
    'I': [
        {
            turkishText: 'İ', // default
            arabicText: '', // not represented in Arabic
            code: 'I11'
        },
        {
            turkishText: 'İ', // special
            arabicText: 'ي',
            code: 'I6'
        },
        {
            turkishText: 'İ',
            arabicText: 'اي',
            code: 'I2'
        },
        {
            turkishText: 'Ī', // special
            arabicText: 'ي',
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
            code: 'i14'
        },
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'Ihamza'
        },
        {
            turkishText: 'İ', // special
            arabicText: 'ِ', // kasrah
            code: 'I10'
        },
        {
            turkishText: 'İ', // special
            arabicText: 'ِ', // kasrah
            code: 'I10'
        },
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12'
        },
        {
            turkishText: 'I', // special
            arabicText: 'ي',
            code: 'I7'
        },
        {
            turkishText: 'I',
            arabicText: 'اي',
            code: 'I3'
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'I13'
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
            turkishText: 'I', // special
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
            turkishText: 'ö',
            arabicText: '', // not represented in Arabic
            code: 'o11'
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1'
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2'
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3'
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4'
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5'
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6'
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7'
        }
    ],
    'O': [
        {
            turkishText: 'O', // default
            arabicText: '', // not represented in Arabic
            code: 'O10'
        },
        {
            turkishText: 'Ö',
            arabicText: '', // not represented in Arabic
            code: 'O11'
        },
        {
            turkishText: 'Ō',
            arabicText: 'ﻮ',
            code: 'O1'
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2'
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3'
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4'
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5'
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6'
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
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12'
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6'
        },
        {
            turkishText: 'ü', // special
            arabicText: 'ُ', // ḍammah
            code: 'u0'
        },
        {
            turkishText: 'u', // special
            arabicText: 'ُ', // ḍammah
            code: 'u10'
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1'
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3'
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13'
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4'
        },
        {
            turkishText: 'ü',
            arabicText: 'ﺍ',
            code: 'u5'
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7'
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8'
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9'
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
            turkishText: 'Ü',
            arabicText: '', // not represented in Arabic
            code: 'U12'
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6'
        },
        {
            turkishText: 'Ü', // special
            arabicText: 'ُ', // ḍammah
            code: 'U0'
        },
        {
            turkishText: 'U', // special
            arabicText: 'ُ', // ḍammah
            code: 'U10'
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1'
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3'
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13'
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ﺍ',
            code: 'U5'
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7'
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9'
        },
        {
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza'
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
    'yi': [ // does this need a capital case?
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza'
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1'
        },
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza2'
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            arabicText: 'ۀ',
            code: 'iHamza3'
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
        },
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun'
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
        },
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
            turkishText: 'ġġ', // default
            arabicText: 'غّ',
            code: 'gg4'
        }/*,
        {
            turkishText: 'kk',
            arabicText: 'كّ',
            code: 'gg7'
        }*/
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
            turkishText: 'ññ', // sheddah
            arabicText: 'كّ',
            code: 'nn6'
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
            turkishText: 'tt', // sheddah
            arabicText: 'دّ',
            code: 'ttd7'
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
