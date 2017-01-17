// Exports four JSON objects in which each key: property
// is in the format "rule": "output" for the following languages:
// 1. Ottoman: Arabic
// 2. Ottoman: Turkish
// 3. Ottoman: Latin
// 4. Ottoman: Cyrillic

// Exported object names are as follows:
// ottomanArabic, ottomanTurkish, ottomanLatin, ottomanCyrillic

export const ottomanArabic = {
// Ottoman Arabic Rules

// digraphs 

"{A=}": undefined,
"{a=}": undefined,
"{A=}": undefined,
"{a=}": undefined,
"{a-}": undefined,
"{C,}": undefined,
"{c,}": undefined,
"{D!}": undefined,
"{d!}": undefined,
"{e.}": undefined,
"{G=}": undefined,
"{g=}": undefined,
"{G.}": undefined,
"{g.}": undefined,
"{H!}": undefined,
"{h!}": undefined,
"{H-}": undefined,
"{h-}": undefined,
"{I=}": undefined,
"{i=}": undefined,
"{I=}": undefined,
"{i=}": undefined,
"{i-}": undefined,
"{I.}": undefined,
"{i.}": undefined,
"{J}": undefined,
"{j}": undefined,
"{K!}": undefined,
"{k!}": undefined,
"{N=}": undefined,
"{n=}": undefined,
"{O:}": undefined,
"{o:}": undefined,
"{O=}": undefined,
"{o=}": undefined,
"{O=}": undefined,
"{o=}": undefined,
"{S,}": undefined,
"{s,}": undefined,
"{S!}": undefined,
"{s!}": undefined,
"{S-}": undefined,
"{s-}": undefined,
"{T!}": undefined,
"{t!}": undefined,
"{U:}": undefined,
"{u:}": undefined,
"{U=}": undefined,
"{u=}": undefined,
"{U=}": undefined,
"{u=}": undefined,
"{Z.}": undefined,
"{z.}": undefined,
"{Z!}": undefined,
"{z!}": undefined,
"{Z-}": undefined,
"{z-}": undefined,
"{*}": undefined,
"{@}": undefined,
"{--}": undefined,
"{..}": undefined,

// ARABIC DEFINITE ARTICLE 

"l2D": "+1604;", // Arabic Letter Lam 
"l2d": "+1604;", // Arabic Letter Lam 
"l2D3": "+1604;", // Arabic Letter Lam 
"l2d3": "+1604;", // Arabic Letter Lam 
"l2R": "+1604;", // Arabic Letter Lam 
"l2r": "+1604;", // Arabic Letter Lam 
"l2S2": "+1604;", // Arabic Letter Lam 
"l2s2": "+1604;", // Arabic Letter Lam 
"l2S3": "+1604;", // Arabic Letter Lam 
"l2s3": "+1604;", // Arabic Letter Lam 
"l2S5": "+1604;", // Arabic Letter Lam 
"l2s5":"+1604;", // Arabic Letter Lam 
"l2S": "+1604;", // Arabic Letter Lam 
"l2s": "+1604;", // Arabic Letter Lam 
"l2T": "+1604;", // Arabic Letter Lam 
"l2t": "+1604;", // Arabic Letter Lam 
"l2T3": "+1604;",// Arabic Letter Lam 
"l2t3": "+1604;", // Arabic Letter Lam 
"l2Z5": "+1604;", // Arabic Letter Lam 
"l2z5": "+1604;", // Arabic Letter Lam 
"l2Z4": "+1604;", // Arabic Letter Lam 
"l2z4": "+1604;", // Arabic Letter Lam 
"l2Z3": "+1604;", // Arabic Letter Lam 
"l2z3": "+1604;", // Arabic Letter Lam 
"l2Z": "+1604;", // Arabic Letter Lam 
"l2z": "+1604;", // Arabic Letter Lam 
"l2N": "+1604;", // Arabic Letter Lam 
"l2n": "+1604;", // Arabic Letter Lam 

//supress Allah glyph
"lla0": "+1604;+1600;+1604;+1607:", 
"lle0": "+1604;+1600;+1604;+1607:",

// Allah glyph 
"Allah": "+65010;",
"A4llwa6h": "+1575;+65010;",
"lilwa6h": "+65010;",

// Shadda 
"w2": "+1617;", // Arabic Shadda 
"bw": "+1576;+1617;", // Arabic Letter Beh; Arabic Shadda 
"cw": "+1580;+1617;", // Arabic Letter Jeem; Arabic Shadda 
"dw": "+1583;+1617;", // Arabic Letter Dal; Arabic Shadda 
"fw": "+1601;+1617;", // Arabic Letter Feh; Arabic Shadda 
"gw": "+1603;+1617;", // Arabic Letter Kaf; Arabic Shadda 
"hw": "+1607;+1617;", // Arabic Letter Heh; Arabic Shadda 
"kw": "+1603;+1617;", // Arabic Letter Kaf; Arabic Shadda 
"lw": "+1604;+1617;", // Arabic Letter Lam; Arabic Shadda 
"mw": "+1605;+1617;", // Arabic Letter Meem; Arabic Shadda 
"nw": "+1606;+1617;", // Arabic Letter Noon; Arabic Shadda 
"pw": "+1662;+1617;", // Arabic Letter Peh; Arabic Shadda 
"rw": "+1585;+1617;", // Arabic Letter Reh; Arabic Shadda 
"sw": "+1587;+1617;", // Arabic Letter Seen; Arabic Shadda 
"tw": "+1578;+1617;", // Arabic Letter Teh; Arabic Shadda 
"vw": "+1608;+1617;", // Arabic Letter Waw; Arabic Shadda 
"yw": "+1610;+1617;", // Arabic Letter Yeh; Arabic Shadda 
"zw": "+1586;+1617;", // Arabic Letter Zain; Arabic Shadda 

// CONSONANTS 

"B7": "+1576;", // Arabic Letter Beh 
"b7": "+1576;", // Arabic Letter Beh 
"B": "+1576;", // Arabic Letter Beh 
"b": "+1576;", // Arabic Letter Beh 

"C2": "+1670;", // Arabic Letter Tcheh 
"c2": "+1670;", // Arabic Letter Tcheh 
"C7": "+1580;", // Arabic Letter Jeem 
"c7": "+1580;", // Arabic Letter Jeem 
"C": "+1580;", // Arabic Letter Jeem 
"c": "+1580;", // Arabic Letter Jeem 

"D2": "+1583;", // Arabic Letter Dal 
"d2": "+1583;", // Arabic Letter Dal 
"D3": "+1583;", // Arabic Letter Dal 
"d3": "+1583;", // Arabic Letter Dal 
"D6": "+1591;", // Arabic Letter Tah 
"d6": "+1591;", // Arabic Letter Tah 
"D7": "+1583;", // Arabic Letter Dal 
"d7": "+1583;", // Arabic Letter Dal 
"D": "+1583;", // Arabic Letter Dal 
"d": "+1583;", // Arabic Letter Dal 

"F": "+1601;", // Arabic Letter Feh 
"f": "+1601;", // Arabic Letter Feh 

"G2": "+1603;", // Arabic Letter Kaf 
"g2": "+1603;", // Arabic Letter Kaf 
"G3": "+1603;", // Arabic Letter Kaf 
"g3": "+1603;", // Arabic Letter Kaf 
"G4": "+1594;", // Arabic Letter Ghain 
"g4": "+1594;", // Arabic Letter Ghain 
"G5": "+1594;", // Arabic Letter Ghain 
"g5": "+1594;", // Arabic Letter Ghain 
"G6": "+1603;", // Arabic Letter Kaf 
"g6": "+1603;", // Arabic Letter Kaf 
"G": "+1603;", // Arabic Letter Kaf 
"g": "+1603;", // Arabic Letter Kaf 

"H2": "+1581;", // Arabic Letter Hah 
"h2": "+1581;", // Arabic Letter Hah 
"H3": "+1581;", // Arabic Letter Hah 
"h3": "+1581;", // Arabic Letter Hah 
"H5": "+1582;", // Arabic Letter Khah 
"h5": "+1582;", // Arabic Letter Khah 
"H": "+1607;", // Arabic Letter Heh 
"h": "+1607;", // Arabic Letter Heh 

"J": "+1688:", // Arabic Letter Jeh 
"j": "+1688;", // Arabic Letter Jeh 

"K2": "+1602;", // Arabic Letter Qaf 
"k2": "+1602;", // Arabic Letter Qaf 
"K3": "+1602;", // Arabic Letter Qaf 
"k3": "+1602;", // Arabic Letter Qaf 
"K": "+1603;", // Arabic Letter Kaf 
"k": "+1603;", // Arabic Letter Kaf 

"L": "+1604;", // Arabic Letter Lam 
"l": "+1604;", // Arabic Letter Lam 

"M": "+1605;", // Arabic Letter Meem 
"m": "+1605;", // Arabic Letter Meem 

"N2": "+1606;", // Arabic Letter Noon 
"n2": "+1606;", // Arabic Letter Noon 
"N6": "+1603;", // Arabic Letter Kaf 
"n6": "+1603;", // Arabic Letter Kaf 
"N": "+1606;", // Arabic Letter Noon 
"n": "+1606;", // Arabic Letter Noon 

"p": "+1662;", // Arabic Letter Peh 
"P": "+1662;", // Arabic Letter Peh 

"R": "+1585;", // Arabic Letter Reh 
"r": "+1585;", // Arabic Letter Reh 

"S2": "+1588;", // Arabic Letter Sheen 
"s2": "+1588;", // Arabic Letter Sheen 
"S3": "+1589;", // Arabic Letter Sad 
"s3": "+1589;", // Arabic Letter Sad 
"S4": "+1587;", // Arabic Letter Seen 
"s4": "+1587;", // Arabic Letter Seen  
"S5": "+1579;", // Arabic Letter Theh 
"s5": "+1579;", // Arabic Letter Theh 
"S": "+1587;", // Arabic Letter Seen 
"s": "+1587;", // Arabic Letter Seen  

"T2": "+1591;", // Arabic Letter Tah 
"t2": "+1591;", // Arabic Letter Tah 
"T3": "+1591;", // Arabic Letter Tah 
"t3": "+1591;", // Arabic Letter Tah 
"T6": "+1583;", // Arabic Letter Dal 
"t6": "+1583;", // Arabic Letter Dal 
"T7": "+1577;", // Arabic Letter Teh Marbuta 
"t7": "+1577;", // Arabic Letter Teh Marbuta 
"T": "+1578;", // Arabic Letter Teh 
"t": "+1578;", // Arabic Letter Teh 

"V2": "+1608:", // Arabic Letter Waw 
"v2": "+1608:", // Arabic Letter Waw 
"V3": "+1608:", // Arabic Letter Waw 
"v3": "+1608:", // Arabic Letter Waw 
"V": "+1608;", // Arabic Letter Waw 
"v": "+1608;", // Arabic Letter Waw 

"Y": "+1610;", // Arabic Letter Yeh 
"y": "+1610;", // Arabic Letter Yeh 

"Z2": "+1592;", // Arabic Letter Zah 
"z2": "+1592;", // Arabic Letter Zah 
"Z3": "+1592;", // Arabic Letter Zah 
"z3": "+1592;", // Arabic Letter Zah 
"Z4": "+1590;", // Arabic Letter Dad 
"z4": "+1590;", // Arabic Letter Dad 
"Z5": "+1584;", // Arabic Letter Thal 
"z5": "+1584;", // Arabic Letter Thal 
"Z": "+1586;", // Arabic Letter Zain 
"z": "+1586;", // Arabic Letter Zain 

// INITIAL VOWELS 

"A0": undefined,
"a0": undefined,
"A1": undefined,
"a1": undefined,
"A2": "+1570;", // Arabic Letter Alef With Madda Above 
"a2": "+1570;", // Arabic Letter Alef With Madda Above 
"A3": "+1570;", // Arabic Letter Alef With Madda Above 
"a3": "+1570;", // Arabic Letter Alef With Madda Above 
"A4": "+1575;", // Arabic Letter Alef 
"a4": "+1575;", // Arabic Letter Alef 
"A5": "+1575;", // Arabic Letter Alef 
"a5": "+1575;", // Arabic Letter Alef 
"A6": undefined,
"a6": undefined,
"A7": undefined,
"a7": undefined,
"A8": undefined,
"a8": undefined,
"A9": undefined,
"a9": undefined,
"A": undefined,
"a": undefined,
"E0": undefined,
"e0": undefined,
"E2": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"e2": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"E3": undefined,
"e3": undefined,
"E4": undefined,
"e4": undefined,
"E5": "+1575;", // Arabic Letter Alef 
"e5": "+1575;", // Arabic Letter Alef 
"E6": undefined,
"e6": undefined,
"E7": undefined,
"e7": undefined,
"E8": undefined,
"e8": undefined,
"E9": undefined,
"e9": undefined,
"E": undefined,
"e": undefined,
"I0": undefined,
"i0": undefined,
"I1": undefined,
"i1": undefined,
"I2": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"i2": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"I3": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"i3": "+1575;+1610;", // Arabic Letter Alef; Arabic Letter Yeh
"I4": "+1575;", // Arabic Letter Alef 
"i4": "+1575;", // Arabic Letter Alef 
"I5": "+1575;", // Arabic Letter Alef  
"i5": "+1575;", // Arabic Letter Alef 
"I6": undefined,
"i6": undefined,
"I7": undefined,
"i7": undefined,
"I8": undefined,
"i8": undefined,
"I9": undefined,
"i9": undefined,
"I": undefined,
"i": undefined,
"O0": undefined,
"o0": undefined,
"O1": undefined,
"o1": undefined,
"O2": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"o2": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"O3": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"o3": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"O4": "+1575;", // Arabic Letter Alef 
"o4": "+1575;", // Arabic Letter Alef 
"O5": undefined, // Arabic Letter Alef 
"o5": undefined, // Arabic Letter Alef 
"O6": undefined,
"o6": undefined,
"O7": undefined,
"o7": undefined,
"O8": undefined,
"o8": undefined,
"O9": undefined,
"o9": undefined,
"O": undefined,
"o": undefined,
"U0": undefined,
"u0": undefined,
"U1": undefined,
"u1": undefined,
"U2": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"u2": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"U3": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"u3": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"U4": "+1575;", // Arabic Letter Alef  
"u4": "+1575;", // Arabic Letter Alef 
"U5": "+1575;", // Arabic Letter Alef 
"u5": "+1575;", // Arabic Letter Alef 
"U6": undefined,
"u6": undefined,
"U7": undefined,
"u7": undefined,
"U8": undefined,
"u8": undefined,
"U9": "+1609;",
"u9": "+1609;",
"U": undefined,
"u": undefined,

// FINAL VOWELS 

"A0": "+1607;+8204:", // Arabic Letter Heh 
"a0": "+1607;+8204:", // Arabic Letter Heh 
"A1": "+1575:", // Arabic Letter Alef 
"a1": "+1575:", // Arabic Letter Alef 
"A2": "+1570:", // Arabic Letter Alef With Madda Above 
"a2": "+1570:", // Arabic Letter Alef With Madda Above 
"A3": "+1570:", // Arabic Letter Alef With Madda Above 
"a3": "+1570:", // Arabic Letter Alef With Madda Above 
"A4": undefined,
"a4": undefined,
"A5": undefined,
"a5": undefined,
"A6": "+1648:", // Arabic Letter Superscript Alef 
"a6": "+1648:", // Arabic Letter Superscript Alef 
"A7": "+1575:", // Arabic Letter Alef 
"a7": "+1575:", // Arabic Letter Alef 
"A8": "+1575;+1608:", // Arabic Letter Alef Arabic Letter Waw; 
"a8": "+1575;+1608:", // Arabic Letter Alef Arabic Letter Waw; 
"A9": "+1610:", // Arabic Letter Yeh 
"a9": "+1610:", // Arabic Letter Yeh 
"A": undefined,
"a": undefined,
"E0": "+1607;+8204:", // Arabic Letter Heh 
"e0": "+1607;+8204:", // Arabic Letter Heh 
"E3": undefined,
"e3": undefined,
"E4": undefined,
"e4": undefined,
"E5": undefined,
"e5": undefined,
"E6": "+1611:",
"e6": "+1611:",
"E7": "+1611:",
"e7": "+1611:",
"E8": "+1612:",
"e8": "+1612:",
"E9": "+1613:",
"e9": "+1613:",
"E": undefined,
"e": undefined,
"I0": undefined,
"i0": undefined,
"I1": "+1609:", // Arabic Letter Yeh 
"i1": "+1609:", // Arabic Letter Yeh 
"I6": "+1609:", // Arabic Letter Yeh 
"i6": "+1609:", // Arabic Letter Yeh 
"I7": "+1609:", // Arabic Letter Yeh 
"i7": "+1609:", // Arabic Letter Yeh 
"I8": "+1607:", // Arabic Letter Heh 
"i8": "+1607:", // Arabic Letter Heh 
"I9": "+1610;+1608:", // Arabic Letter Yeh; Arabic Letter Waw 
"i9": "+1610;+1608:", // Arabic Letter Yeh; Arabic Letter Waw 
"I": undefined,
"i": undefined,
"o0": undefined,
"o0": undefined,
"O1": "+1608:", // Arabic Letter Waw 
"o1": "+1608:", // Arabic Letter Waw 
"O2": undefined,
"o2": undefined,
"O3": undefined,
"o3": undefined,
"O4": undefined,
"o4": undefined,
"O5": undefined,
"o5": undefined,
"O6": "+1608:", // Arabic Letter Waw 
"o6": "+1608:", // Arabic Letter Waw 
"O7": "+1608:", // Arabic Letter Waw 
"o7": "+1608:", // Arabic Letter Waw 
"O8": undefined,
"o8": undefined,
"O9": undefined,
"o9": undefined,
"O": undefined,
"o": undefined,
"U0": undefined,
"u0": undefined,
"U1": "+1608:", // Arabic Letter Waw 
"u1": "+1608:", // Arabic Letter Waw 
"U2": undefined,
"u2": undefined,
"U3": undefined,
"u3": undefined,
"U4": undefined,
"u4": undefined,
"U5": undefined,
"u5": undefined,
"U6": "+1608:", // Arabic Letter Waw 
"u6": "+1608:", // Arabic Letter Waw 
"U7": "+1608:", // Arabic Letter Waw 
"u7": "+1608:", // Arabic Letter Waw 
"U8": "+1609:", // Arabic Letter Yeh 
"u8": "+1609:", // Arabic Letter Yeh 
"U9": "+1609:", // Arabic Letter Yeh 
"u9": "+1609:", // Arabic Letter Yeh 
"U": undefined,
"u": undefined,


// MEDIAL VOWELS 

"A0": "+1607;+8204;", // Arabic Letter Heh 
"a0": "+1607;+8204:", // Arabic Letter Heh 
"A1": "+1575;", // Arabic Letter Alef 
"a1": "+1575;", // Arabic Letter Alef 
"A2": "+1570;", // Arabic Letter Alef With Madda Above 
"a2": "+1570;", // Arabic Letter Alef With Madda Above 
"A3": "+1570;", // Arabic Letter Alef With Madda Above 
"a3": "+1570;", // Arabic Letter Alef With Madda Above 
"A4": undefined,
"a4": undefined,
"A5": undefined,
"a5": undefined,
"A6": "+1648;", // Arabic Letter Superscript Alef 
"a6": "+1648;", // Arabic Letter Superscript Alef 
"A7": "+1575;", // Arabic Letter Alef 
"a7": "+1575;", // Arabic Letter Alef 
"A8": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"a8": "+1575;+1608;", // Arabic Letter Alef; Arabic Letter Waw 
"A9": "+1610;", // Arabic Letter Yeh 
"a9": "+1610;", // Arabic Letter Yeh 
"A": undefined,
"a": undefined,
"E0": "+1607;+8204:", // Arabic Letter Heh 
"e0": "+1607;+8204:", // Arabic Letter Heh 
"E1": "+1610;", // Arabic Letter Yeh 
"e1": "+1610;", // Arabic Letter Yeh 
"E2": "+1610;", // Arabic Letter Yeh 
"e2": "+1610;", // Arabic Letter Yeh 
"E3": undefined,
"e3": undefined,
"E4": undefined,
"e4": undefined,
"E5": undefined,
"e5": undefined,
"E6": undefined,
"e6": undefined,
"E7": undefined,
"e7": undefined,
"E8": undefined,
"e8": undefined,
"E9": undefined,
"e9": undefined,
"E": undefined,
"e": undefined,
"I0": undefined,
"i0": undefined,
"I1": "+1610;", // Arabic Letter Yeh 
"i1": "+1610;", // Arabic Letter Yeh 
"I2": undefined,
"i2": undefined,
"I3": "+1610;", // Arabic Letter Yeh 
"i3": "+1610;", // Arabic Letter Yeh 
"I4": undefined,
"i4": undefined,
"I5": undefined,
"i5": undefined,
"I6": "+1610;", // Arabic Letter Yeh 
"i6": "+1610;", // Arabic Letter Yeh 
"I7": "+1610;", // Arabic Letter Yeh 
"i7": "+1610;", // Arabic Letter Yeh 
"I8": "+1607;", // Arabic Letter Heh 
"i8": "+1607;", // Arabic Letter Heh 
"I9": "+1610;+1608;", // Arabic Letter Yeh; Arabic Letter Waw 
"i9": "+1610;+1608;", // Arabic Letter Yeh; Arabic Letter Waw 
"I": undefined,
"i": undefined,
"O0": undefined,
"o0": undefined,
"O1": "+1608;", // Arabic Letter Waw 
"o1": "+1608;", // Arabic Letter Waw 
"O2": undefined,
"o2": undefined,
"O3": undefined,
"o3": undefined,
"O4": undefined,
"o4": undefined,
"O5": undefined,
"o5": undefined,
"O6": "+1608;", // Arabic Letter Waw 
"o6": "+1608;", // Arabic Letter Waw 
"O7": "+1608;", // Arabic Letter Waw 
"o7": "+1608;", // Arabic Letter Waw 
"O8": undefined,
"o8": undefined,
"O9": undefined,
"o9": undefined,
"O": undefined,
"o": undefined,
"U0": undefined,
"u0": undefined,
"U1": "+1608;", // Arabic Letter Waw 
"u1": "+1608;", // Arabic Letter Waw 
"U2": undefined,
"u2": undefined,
"U3": undefined,
"u3": undefined,
"U4": undefined,
"u4": undefined,
"U5": undefined,
"u5": undefined,
"U6": "+1608;", // Arabic Letter Waw 
"u6": "+1608;", // Arabic Letter Waw 
"U7": "+1608;", // Arabic Letter Waw 
"u7": "+1608;", // Arabic Letter Waw 
"U8": "+1610;", // Arabic Letter Yeh 
"u8": "+1610;", // Arabic Letter Yeh 
"U9": "+1610;", // Arabic Letter Yeh 
"u9": "+1610;", // Arabic Letter Yeh 
"U": undefined,
"u": undefined,

// SPECIAL 

"-7": undefined,
"-6": undefined,
"-5": undefined,
"-4": undefined,
"-3": undefined,
"-2": undefined,
"-1": undefined,
"'2": "+1593;", // Arabic Letter Ain 
"'3": "+x0621;",
"'4": "+1575;", // Arabic Letter Alef  
"'5": "+1575;" // Arabic Letter Alef  
};

export const ottomanTurkish = {
    
// digraphs 

"{A=}": "A",
"{a=}": "a",
"{A=}": "A",
"{a=}": "a",
"{a-}": "a",
"{C,}": "+199;",
"{c,}": "+231;",
"{D!}": "D",
"{d!}": "d",
"{e.}": "e",
"{G=}": "+286;",
"{g=}": "+287;",
"{G.}": "G",
"{g.}": "g",
"{H!}": "H",
"{h!}": "h",
"{H-}": "H",
"{h-}": "h",
"{I=}": "I",
"{i=}": "i",
"{I=}": "I",
"{i=}": "i",
"{i-}": "i",
"{I.}": "+304;",
"{i.}": "+305;",
"{J}": "J",
"{j}": "j",
"{K!}": "K",
"{k!}": "k",
"{N=}": "N",
"{n=}": "n",
"{O:}": "+214;",
"{o:}": "+246;",
"{O=}": "O",
"{o=}": "o",
"{O=}": "O",
"{o=}": "o",
"{S,}": "+350;",
"{s,}": "+351;",
"{S!}": "S",
"{s!}": "s",
"{S-}": "S",
"{s-}": "s",
"{T!}": "T",
"{t!}": "t",
"{U:}": "+220;",
"{u:}": "+252;",
"{U=}": "U",
"{u=}": "u",
"{U=}": "U",
"{u=}": "u",
"{Z.}": "Z",
"{z.}": "z",
"{Z!}": "Z",
"{z!}": "z",
"{Z-}": "Z",
"{z-}": "z",


"{*}": "+704;",
"{@}": "+64;",
"{--}": "+814;",
"{..}": "+903;",

// ARABIC DEFINITE ARTICLE 

"l2D": "D",
"l2d": "d",
"l2D3": "D3",
"l2d3": "d3",
"l2R": "R",  
"l2r": "r",
"l2S": "S",
"l2s": "s", 
"l2S2": "S2",  
"l2s2": "s2",
"l2S3": "S3", 
"l2s3": "s3", 
"l2S5": "S5", 
"l2s5": "s5", 
"l2T": "T",
"l2t": "t",
"l2T3": "T3", 
"l2t3": "t3",
"l2Z": "Z",
"l2z": "z",
"l2Z5": "Z5",
"l2z5": "z5",
"l2Z4": "Z4",
"l2z4": "z4",
"l2Z3": "Z3",
"l2z3": "z3",
"l2N": "2N",
"l2n": "2n",

// Allah glyph 
"Allah": "All+257;h",
"A4llwa6h": "All+257;h",
"lilwa6h": "All+257;h",

// Shadda 

"w2": "<w2>",
"bw": "bb", // Arabic Shadda 
"cw": "cc", // Arabic Shadda 
"dw": "dd", // Arabic Shadda 
"fw": "ff", // Arabic Shadda 
"gw": "gg", // Arabic Shadda 
"hw": "hh", // Arabic Shadda 
"jw": "jj", // Arabic Shadda 
"kw": "kk", // Arabic Shadda 
"lw": "ll", // Arabic Shadda 
"mw": "mm", // Arabic Shadda 
"nw": "nn", // Arabic Shadda 
"pw": "pp", // Arabic Shadda 
"qw": "qq", // Arabic Shadda 
"rw": "rr", // Arabic Shadda 
"sw": "ss", // Arabic Shadda 
"tw": "tt", // Arabic Shadda 
"vw": "vv", // Arabic Shadda 
"ww": "ww", // Arabic Shadda 
"xw": "xx", // Arabic Shadda 
"yw": "yy", // Arabic Shadda 
"zw": "zz", // Arabic Shadda 


// CONSONANTS 

"B7": "P",
"b7": "p",
"B": "B",
"b": "b",

"C2": "+199;", // Latin Capital Letter C With Cedilla 
"c2": "+231;", // Latin Small Letter C With Cedilla 
"C7": "+199;", // Latin Capital Letter C With Cedilla 
"c7": "+231;", // Latin Small Letter C With Cedilla 
"c": "c",
"C": "C",

"D2": "D",
"d2": "d",
"d3": "d",
"D3": "D",
"D6": "T",
"d6": "t",
"D7": "T",
"d7": "t",
"D": "D",
"d": "d",

"F": "F",
"f": "f",

"G2": "+286;",
"g2": "+287;",
"G3": "K",
"g3": "k",
"G4": "+286;",
"g4": "+287;",
"G5": "+286;",
"g5": "+287;",
"G6": "+286;",
"g6": "+287;",
"g": "g",
"G": "G",

"H2": "H",
"h2": "h",
"H3": "H",
"h3": "h",
"h5": "h",
"H5": "H",
"h": "h",
"H": "H",

"J": "J",
"j": "j",

"K2": "K",
"k2": "k",
"K3": "K",
"k3": "k",
"K": "K",
"k": "k",

"l2": "",
"L": "L",
"l": "l",

"l2": "",

"M": "M",
"m": "m",

"N2": "N",
"n2": "n",
"N6": "N",
"n6": "n",
"N": "N",
"n": "n",

"P": "P",
"p": "p",

"R": "R",
"r": "r",

"S2": "+350;",
"s2": "+351;",
"S3": "S",
"s3": "s",
"S4": "S",  
"s4": "s",  
"S5": "S",
"s5": "s",
"S": "S",
"s": "s",

"T2": "T",
"t2": "t",
"T3": "T",
"t3": "t",
"T6": "T",
"t6": "t",
"T7": "T",
"t7": "t",
"T": "T",
"t": "t",

"V2": "+220;", // Latin Capital Letter U With Diaeresis 
"v2": "+252;", // Latin Small Letter U With Diaeresis 
"V3": "U",
"v3": "u",
"V": "V",
"v": "v",

"Y": "Y",
"y": "y",

"Z2": "Z",
"z2": "z",
"Z3": "Z",
"z3": "z",
"Z4": "Z",
"z4": "z",
"Z5": "Z",
"z5": "z",
"z": "z",
"Z": "Z",


// INITIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "A", 
"a1": "a", 
"A2": "A", 
"a2": "a",
"A3": "A",
"a3": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a",
"A": "A",
"a": "a",
"E0": "E",
"e0": "e",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "E",
"e4": "e",
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "I",
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "I",  
"i1": "i",  
"I2": "+304;", // Latin Capital Letter I With Dot Above  
"i2": "i",
"i3": "+305;", // Latin Small Letter Dotless I   
"I3": "I",
"I4": "+304;", // Latin Capital Letter I With Dot Above  
"i4": "i",
"I5": "I",
"i5": "i",
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "i",
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis  
"o0": "+246;", // Latin Small Letter O With Diaeresis  
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis  
"o3": "+246;", // Latin Small Letter O With Diaeresis  
"O4": "O",  
"o4": "o", 
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"o0": "o",
"O0": "O",
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U1": "U",
"u1": "u",
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "U", 
"u3": "u",
"U4": "U",
"u4": "u",
"U5": "+220;", // Latin Capital Letter U With Diaeresis 
"u5": "+252;", // Latin Small Letter U With Diaeresis 
"U6": "+220;", // Latin Capital Letter U With Diaeresis 
"u6": "+252;", // Latin Small Letter U With Diaeresis 
"U7": "+220;", // Latin Capital Letter S With Caron 
"u7": "+252;", // Latin Small Letter S With Caron 
"U8": "U",
"u8": "u",
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "U",
"u0": "u",

// FINAL VOWELS 

"A0 ": "A",
"a0 ": "a",
"A1 ": "A",
"a1 ": "a",
"A2 ": "A",
"a2 ": "a",
"A3 ": "A",
"a3 ": "a",
"A4 ": "A",
"a4 ": "a",
"A5 ": "A",
"a5 ": "a",
"A6 ": "A",
"a6 ": "a",
"A7 ": "A",
"a7 ": "a",
"A8 ": "A",
"a8 ": "a",
"A9 ": "A",
"a9 ": "a", 
"A": "A",
"a": "a", 
"E0 ": "E",
"e0 ": "e",
"E2 ": "E",
"e2 ": "e",
"E3 ": "E",
"e3 ": "e",
"E4 ": "E",
"e4 ": "e",
"E5 ": "E",
"e5 ": "e",
"E6 ": "E",
"e6 ": "an",
"E7 ": "E",
"e7 ": "en",
"E8 ": "E",
"e8 ": "un",
"E9 ": "E",
"e9 ": "in",
"E": "E",
"e": "e",
"I0 ": "+304;", // Latin Capital Letter I With Dot Above 
"i0 ": "+305;", // Latin Small Letter Dotless I 
"I1 ": "I",
"i1 ": "i",
"I2 ": "+304;", // Latin Capital Letter I With Dot Above 
"i2 ": "+305;", // Latin Small Letter Dotless I 
"I3 ": "I",
"i3 ": "i",
"I4 ": "I",
"i4 ": "i",
"I5 ": "I",
"i5 ": "+305;", // Latin Small Letter Dotless I 
"I6 ": "I",
"i6 ": "i",
"I7 ": "I",
"i7 ": "i",
"I8 ": "I",
"i8 ": "i",
"I9 ": "I",
"i9 ": "i",
"I": "I",
"i": "i",
"O0 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o0 ": "+246;", // Latin Small Letter O With Diaeresis  
"O1 ": "O",
"o1 ": "o",
"O2 ": "O",
"o2 ": "o",
"O3 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o3 ": "+246;", // Latin Small Letter O With Diaeresis  
"O4 ": "O",  
"o4 ": "o",  
"o5 ": "o",
"O5 ": "O",
"o6 ": "o",
"O6 ": "O",
"o7 ": "+246;", // Latin Small Letter O With Diaeresis 
"O7 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o8 ": "o",
"O8 ": "O",
"o9 ": "o",
"O9 ": "O",
"o": "o",
"O": "O",
"u0 ": "+252;", // Latin Small Letter U With Diaeresis 
"U0 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u1 ": "u",
"U1 ": "U",
"U2 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u2 ": "+252;", // Latin Small Letter U With Diaeresis 
"U3 ": "U",
"u3 ": "u",
"u4 ": "u",
"U4 ": "U",
"u5 ": "u",
"U5 ": "U",
"u6 ": "+252;", // Latin Small Letter U With Diaeresis 
"U6 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u7 ": "+252;", // Latin Small Letter U With Diaeresis 
"U7 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u8 ": "u",
"U8 ": "U",
"u9 ": "+252;", // Latin Small Letter U With Diaeresis 
"U9 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// MEDIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "A",
"a1": "a",
"A2": "A",
"a2": "a",
"A3": "A",
"a3": "a",
"A4": "A",
"a4": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a", 
"A": "A",
"a": "a", 
"E0": "E",
"e0": "e",
"E1": "E",
"e1": "e",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "E",
"e4": "e",
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "+304;", // Latin Capital Letter I With Dot Above 
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "I",
"i1": "i",
"I2": "+304;", // Latin Capital Letter I With Dot Above 
"i2": "+305;", // Latin Small Letter Dotless I 
"I3": "I",
"i3": "i",
"I4": "+304;", // Latin Capital Letter I With Dot Above 
"i4": "i",
"I5": "I",
"i5": "+305;", // Latin Small Letter Dotless I 
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "+305;", // Latin Small Letter Dotless I 
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis 
"o0": "+246;", // Latin Small Letter O With Diaeresis  
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis 
"o3": "+246;", // Latin Small Letter O With Diaeresis  
"O4": "O",  
"o4": "o",  
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"o": "o",
"O": "O",
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"u1": "u",
"U1": "U",
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "U",
"u3": "u",
"u4": "u",
"U4": "U",
"u5": "+252;", // Latin Small Letter U With Diaeresis 
"U5": "+220;", // Latin Capital Letter U With Diaeresis 
"u6": "+252;", // Latin Small Letter U With Diaeresis 
"U6": "+220;", // Latin Capital Letter U With Diaeresis 
"u7": "+252;", // Latin Small Letter U With Diaeresis 
"U7": "+220;", // Latin Capital Letter U With Diaeresis 
"u8": "u",
"U8": "U",
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// SPECIAL 

"-7": "-+252;",
"-6": "-u",
"-5": "-+305;",
"-4": "-i",
"-3": "-",
"-2": "",
"-1": "-",
"'2": "+703;",
"'3": "+704;",
"'4": "",
"l2": "'",
"'5": "",
};
export const ottomanLatin = {
    // digraphs 

"{A=}": "+194;",
"{a=}": "+226;",
"{A=}": "+256;",
"{a=}": "+257;",
"{a-}": "+259;",
"{C,}": "+199;",
"{c,}": "+231;",
"{D!}": "+7692;",
"{d!}": "+7693;",
"{e.}": "+279;",
"{G=}": "+286;",
"{g=}": "+287;",
"{G.}": "+288;",
"{g.}": "+289;",
"{H!}": "+7716;",
"{h!}": "+7717;",
"{H-}": "+7722;",
"{h-}": "+7830;",
"{I=}": "+206;",
"{i=}": "+238;",
"{I=}": "+298;",
"{i=}": "+299;",
"{i-}": "+301;",
"{I.}": "+304;",
"{i.}": "+305;",
"{J}": "+1688;",
"{j}": "+1688;",
"{K!}": "+7730;",
"{k!}": "+7731;",
"{N=}": "+209;",
"{n=}": "+241;",
"{O:}": "+214;",
"{o:}": "+246;",
"{O=}": "+212;",
"{o=}": "+244;",
"{O=}": "+232;",
"{o=}": "+233;",
"{S,}": "+350;",
"{s,}": "+351;",
"{S!}": "+7778;",
"{s!}": "+7779;",
"{S-}": "S+818;",
"{s-}": "s+818;",
"{T!}": "+7788;",
"{t!}": "+7789;",
"{U:}": "+220;",
"{u:}": "+252;",
"{U=}": "+219;",
"{u=}": "+251;",
"{U=}": "+362;",
"{u=}": "+363;",
"{Z.}": "+379;",
"{z.}": "+380;",
"{Z!}": "+7726;",
"{z!}": "+7727;",
"{Z-}": "+7828;",
"{z-}": "+7829;",

"{*}": "+704;",
"{@}": "+64;",
"{--}": "+814;",
"{..}": "+903;",

// ARABIC DEFINITE ARTICLE 

"l2D": "D",
"l2d": "d",
"l2D3": "D3",
"l2d3": "d3",
"l2R": "R",  
"l2r": "r",
"l2S": "S",
"l2s": "s", 
"l2S2": "S2",  
"l2s2": "s2",
"l2S3": "S3", 
"l2s3": "s3", 
"l2S5": "S5", 
"l2s5": "s5", 
"l2T": "T",
"l2t": "t",
"l2T3": "T3", 
"l2t3": "t3",
"l2Z": "Z",
"l2z": "z",
"l2Z5": "Z5",
"l2z5": "z5",
"l2Z4": "Z4",
"l2z4": "z4",
"l2Z3": "Z3",
"l2z3": "z3",
"l2N": "2N",
"l2n": "2n",

// Allah glyph 
"Allah": "All+257;h",
"A4llwa6h": "All+257;h",
"lilwa6h": "All+257;h",

// Shadda 

"w2": "<w2>",
"bw": "bb", // Arabic Shadda 
"cw": "cc", // Arabic Shadda 
"dw": "dd", // Arabic Shadda 
"fw": "ff", // Arabic Shadda 
"gw": "gg", // Arabic Shadda 
"hw": "hh", // Arabic Shadda 
"jw": "jj", // Arabic Shadda 
"kw": "kk", // Arabic Shadda 
"lw": "ll", // Arabic Shadda 
"mw": "mm", // Arabic Shadda 
"nw": "nn", // Arabic Shadda 
"pw": "pp", // Arabic Shadda 
"rw": "rr", // Arabic Shadda 
"sw": "ss", // Arabic Shadda 
"tw": "tt", // Arabic Shadda 
"vw": "vv", // Arabic Shadda 
"ww": "ww", // Arabic Shadda 
"yw": "yy", // Arabic Shadda 
"zw": "zz", // Arabic Shadda 

// CONSONANTS 

"B7": "P",
"b7": "p",
"B": "B",
"b": "b",

"C2": "+199;", // Latin Capital Letter C With Cedilla 
"c2": "+231;", // Latin Small Letter C With Cedilla 
"C7": "+199;", // Latin Capital Letter C With Cedilla 
"c7": "+231;", // Latin Small Letter C With Cedilla 
"c": "c",
"C": "C",

"D2": "+7692;", // Latin Capital Letter D With Dot Below 
"d2": "+7693;", // Latin Small Letter D With Dot Below 
"d3": "+7693;", // Latin Small Letter D With Dot Below 
"D3": "+7692;", // Latin Capital Letter D With Dot Below 
"d6": "+7789;", // Latin Small Letter T With Dot Below 
"D6": "+7788;", // Latin Capital Letter T With Dot Below 
"D7": "T",
"d7": "t",
"D": "D",
"d": "d",

"F": "F",
"f": "f",

"G2": "+286;", // Latin Capital Letter G With Breve 
"g2": "+287;", // Latin Small Letter G With Breve 
"G3": "K",
"g3": "k",
"G4": "+288;", // Latin Capital Letter G With Dot Above 
"g4": "+289;", // Latin Small Letter G With Dot Above 
"g5": "+289;", // Latin Small Letter G With Dot Above 
"G5": "+288;", // Latin Capital Letter G With Dot Above 
"g6": "g",
"G6": "G",
"g": "g",
"G": "G",

"H2": "+7716;", // Latin Capital Letter H With Dot Below 
"h2": "+7717;", // Latin Small Letter H With Dot Below 
"H3": "+7716;", // Latin Capital Letter H With Dot Below 
"h3": "+7717;", // Latin Small Letter H With Dot Below 
"h5": "+7830;", // Latin Small Letter H With Line Below 
"H5": "+7722;", // Latin Capital Letter H With Breve Below 
"h": "h",
"H": "H",

"J": "J",
"j": "j",

"K2": "+7730;", // Latin Capital Letter K With Dot Below 
"k2": "+7731;", // Latin Small Letter K With Dot Below 
"K3": "+7730;", // Latin Capital Letter K With Dot Below 
"k3": "+7731;", // Latin Small Letter K With Dot Below 
"K": "K",
"k": "k",

"L": "L",
"l2": "",
"l": "l",

"M": "M",
"m": "m",

"N2": "+209;", // Latin Capital Letter N With Tilde 
"n2": "+241;", // Latin Small Letter N With Tilde 
"N6": "+209;", // Latin Capital Letter N With Tilde 
"n6": "+241;", // Latin Small Letter N With Tilde 
"N": "N",
"n": "n",

"P": "P",
"p": "p",

"R": "R",
"r": "r",

"S2": "+350;", // Latin Capital Letter S With Cedilla 
"s2": "+351;", // Latin Small Letter S With Cedilla 
"S3": "+7778;", // Latin Capital Letter S With Dot Below 
"s3": "+7779;", // Latin Small Letter S With Dot Below 
"S4": "S",
"s4": "s",
"S5": "+348;", 
"s5": "+349;",
"S": "S",
"s": "s",

"T2": "+7788;", // Latin Capital Letter T With Dot Below 
"t2": "+7789;", // Latin Small Letter T With Dot Below 
"T3": "+7788;", // Latin Capital Letter T With Dot Below 
"t3": "+7789;", // Latin Small Letter T With Dot Below 
"T6": "T",
"t6": "t",
"T7": "T",
"t7": "t",
"T": "T",
"t": "t",

"V2": "+220;", // Latin Capital Letter U With Diaeresis 
"v2": "+252;", // Latin Small Letter U With Diaeresis 
"V3": "U",
"v3": "u",
"V": "V",
"v": "v",

"Y": "Y",
"y": "y",

"Z2": "+7826;", // Latin Capital Letter Z With Dot Below 
"z2": "+7827;", // Latin Small Letter Z With Dot Below 
"Z3": "+7826;", // Latin Capital Letter Z With Dot Below 
"z3": "+7827;", // Latin Small Letter Z With Dot Below 
"Z4": "+379;",  // Latin Capital Letter Z With Dot Above 
"z4": "+380;", // Latin Small Letter Z With Dot Above 
"Z5": "+7828;", // Latin Capital Letter Z With Line Below 
"z5": "+7829;", // Latin Small Letter Z With Line Below 
"z": "z",
"Z": "Z",

// INITIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "+256;", // Latin Capital Letter A With Macron 
"a1": "+257;", // Latin Small Letter A With Macron 
"A2": "+256;", // Latin Capital Letter A With Macron 
"a2": "+257;", // Latin Small Letter A With Macron 
"A3": "A",
"a3": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a",
"A": "A",
"a": "a",
"E0": "E",
"e0": "e",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "+278;", // Latin Capital Letter E With Dot Above 
"e4": "+279;", // Latin Small Letter E With Dot Above 
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "I",
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "+298;", // Latin Capital Letter I With Macron 
"i1": "+299;", // Latin Small Letter I With Macron 
"I2": "+304;", // Latin Capital Letter I With Dot Above 
"i2": "i", // Latin Small Letter Dotless I 
"i3": "+305;", // Latin Small Letter Dotless I   
"I3": "I",
"I4": "+304;", // Latin Capital Letter I With Dot Above  
"i4": "i",
"I5": "I",
"i5": "i",
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "i",
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis 
"o0": "+246;", // Latin Small Letter O With Diaeresis 
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis 
"o3": "+246;", // Latin Small Letter O With Diaeresis 
"O4": "+332;", // Latin Capital Letter O With Macron 
"o4": "+333;", // Latin Small Letter O With Macron 
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"0": "o",
"O0": "O",
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U1": "U",
"u1": "u",
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "+220;", // Latin Capital Letter U With Diaeresis 
"u3": "+252;", // Latin Small Letter U With Diaeresis 
"U4": "U",
"u4": "u",
"U5": "+220;", // Latin Capital Letter U With Diaeresis 
"u5": "+252;", // Latin Small Letter U With Diaeresis 
"U6": "U",
"u6": "u",
"U7": "+220;", // Latin Capital Letter U With Diaeresis 
"u7": "+252;", // Latin Small Letter U With Diaeresis 
"U8": "U",
"u8": "u",
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "U",
"u0": "u",

// FINAL VOWELS 

"A0 ": "A",
"a0 ": "a",
"A1 ": "+256;", // Latin Capital Letter A With Macron 
"a1 ": "+257;", // Latin Small Letter A With Macron 
"A2 ": "+256;", // Latin Capital Letter A With Macron 
"a2 ": "+257;", // Latin Small Letter A With Macron 
"A3 ": "A",
"a3 ": "a",
"A4 ": "A",
"a4 ": "a",
"A5 ": "A",
"a5 ": "a",
"A6 ": "A",
"a6 ": "a",
"A7 ": "A",
"a7 ": "a",
"A8 ": "A",
"a8 ": "a",
"A9 ": "A",
"a9 ": "a", 
"A": "A",
"a": "a", 
"E0 ": "E",
"e0 ": "e",
"E2 ": "E",
"e2 ": "e",
"E3 ": "E",
"e3 ": "e",
"E4 ": "+z78;", // Latin Capital Letter E With Dot Above 
"e4 ": "+279;", // Latin Small Letter E With Dot Above 
"E5 ": "E",
"e5 ": "e",
"E6 ": "E",
"e6 ": "an",
"E7 ": "E",
"e7 ": "en",
"E8 ": "E",
"e8 ": "un",
"E9 ": "E",
"e9 ": "in",
"E": "E",
"e": "e",
"I0 ": "I",
"i0 ": "+305;", // Latin Small Letter Dotless I 
"I1 ": "+298;", // Latin Capital Letter I With Macron 
"i1 ": "+299;", // Latin Small Letter I With Macron 
"I2 ": "+304;", // Latin Capital Letter I With Dot Above 
"i2 ": "+305;", // Latin Small Letter Dotless I 
"I3 ": "+298;", // Latin Capital Letter I With Macron 
"i3 ": "+299;", // Latin Small Letter I With Macron 
"I4 ": "+304;", // Latin Capital Letter I With Dot Above 
"i4 ": "i",
"I5 ": "I",
"i5 ": "+305;", // Latin Small Letter Dotless I 
"I6 ": "I",
"i6 ": "i",
"I7 ": "I",
"i7 ": "+305;",
"I8 ": "I",
"i8 ": "i",
"I9 ": "I",
"i9 ": "i",
"I": "I",
"i": "i",
"O0 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o0 ": "+246;", // Latin Small Letter O With Diaeresis 
"O1 ": "O",
"o1 ": "o",
"O2 ": "O",
"o2 ": "o",
"O3 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o3 ": "+246;", // Latin Small Letter O With Diaeresis 
"O4 ": "+332;", // Latin Capital Letter O With Macron 
"o4 ": "+333;", // Latin Small Letter O With Macron 
"o5 ": "o",
"O5 ": "O",
"o6 ": "o",
"O6 ": "O",
"o7 ": "+246;", // Latin Small Letter O With Diaeresis 
"O7 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o8 ": "o",
"O8 ": "O",
"o9 ": "o",
"O9 ": "O",
"o": "o",
"O": "O",
"u0 ": "+252;", // Latin Small Letter U With Diaeresis 
"U0 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u1 ": "+363;", // Latin Small Letter U With Macron 
"U1 ": "+362;", // Latin Capital Letter U With Macron 
"U2 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u2 ": "+252;", // Latin Small Letter U With Diaeresis 
"U3 ": "+362;", // Latin Capital Letter U With Macron 
"u3 ": "+363;", // Latin Small Letter U With Macron 
"u4 ": "u",
"U4 ": "U",
"u5 ": "u",
"U5 ": "U",
"u6 ": "u", 
"U6 ": "U",
"u7 ": "+252;", // Latin Small Letter U With Diaeresis 
"U7 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u8 ": "u",  // ya that converts to u 
"u9 ": "+252;", // Latin Small Letter U With Diaeresis 
"U9 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// MEDIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "+256;", // Latin Capital Letter A With Macron 
"a1": "+257;", // Latin Small Letter A With Macron 
"A2": "+256;", // Latin Capital Letter A With Macron 
"a2": "+257;", // Latin Small Letter A With Macron 
"A3": "A",
"a3": "a",
"A4": "A",
"a4": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a", 
"A": "A",
"a": "a", 
"E0": "E",
"e0": "e",
"E1": "+278;",
"e1": "+279;",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "+278;", // Latin Capital Letter E With Dot Above 
"e4": "+279;", // Latin Small Letter E With Dot Above 
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "I",
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "+298;", // Latin Capital Letter I With Macron 
"i1": "+299;", // Latin Small Letter I With Macron 
"I2": "+304;", // Latin Capital Letter I With Dot Above 
"i2": "+305;", // Latin Small Letter Dotless I 
"I3": "+298;", // Latin Capital Letter I With Macron 
"i3": "+299;", // Latin Small Letter I With Macron 
"I4": "I",
"i4": "i",
"I5": "I",
"i5": "i",
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "+305;",
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis 
"o0": "+246;", // Latin Small Letter O With Diaeresis 
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis 
"o3": "+246;", // Latin Small Letter O With Diaeresis 
"O4": "+332;", // Latin Capital Letter O With Macron 
"o4": "+333;", // Latin Small Letter O With Macron 
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"o": "o",
"O": "O",
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"U1": "+362;", // Latin Capital Letter U With Macron 
"u1": "+363;", // Latin Small Letter U With Macron 
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "+362;", // Latin Capital Letter U With Macron 
"u3": "+363;", // Latin Small Letter U With Macron 
"u4": "u",
"U4": "U",
"u5": "u",
"U5": "U",
"u6": "u",
"U6": "U",
"u7": "+252;", // Latin Small Letter S With Caron 
"U7": "+220;", // Latin Capital Letter S With Caron 
"u8": "u",  // ya that converts to u 
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// SPECIAL 

"-7": "-+252;",
"-6": "-u",
"-5": "-+305;",
"-4": "-i",
"-3": "-",
"-2": "",
"-1": "-",
"'2": "+703;",
"'3": "+704;",
"'4": "'",
"'5": "+0039;",
};

export const ottomanCyrillic = {

// digraphs 

"{A=}": "A",
"{a=}": "a",
"{A=}": "A",
"{a=}": "a",
"{a-}": "a",
"{C,}": "+199;",
"{c,}": "+231;",
"{D!}": "D",
"{d!}": "d",
"{e.}": "e",
"{G=}": "+286;",
"{g=}": "+287;",
"{G.}": "G",
"{g.}": "g",
"{H!}": "H",
"{h!}": "h",
"{H-}": "H",
"{h-}": "h",
"{I=}": "I",
"{i=}": "i",
"{I=}": "I",
"{i=}": "i",
"{i-}": "i",
"{I.}": "+304;",
"{i.}": "+305;",
"{J}": "J",
"{j}": "j",
"{K!}": "K",
"{k!}": "k",
"{N=}": "N",
"{n=}": "n",
"{O:}": "+214;",
"{o:}": "+246;",
"{O=}": "O",
"{o=}": "o",
"{O=}": "O",
"{o=}": "o",
"{S,}": "+350;",
"{s,}": "+351;",
"{S!}": "S",
"{s!}": "s",
"{S-}": "S",
"{s-}": "s",
"{T!}": "T",
"{t!}": "t",
"{U:}": "+220;",
"{u:}": "+252;",
"{U=}": "U",
"{u=}": "u",
"{U=}": "U",
"{u=}": "u",
"{Z.}": "Z",
"{z.}": "z",
"{Z!}": "Z",
"{z!}": "z",
"{Z-}": "Z",
"{z-}": "z",


"{*}": "+704;",
"{@}": "+64;",
"{--}": "+814;",
"{..}": "+903;",

// ARABIC DEFINITE ARTICLE 

"l2D": "D",
"l2d": "d",
"l2D3": "D3",
"l2d3": "d3",
"l2R": "R",  
"l2r": "r",
"l2S": "S",
"l2s": "s", 
"l2S2": "S2",  
"l2s2": "s2",
"l2S3": "S3", 
"l2s3": "s3", 
"l2S5": "S5", 
"l2s5": "s5", 
"l2T": "T",
"l2t": "t",
"l2T3": "T3", 
"l2t3": "t3",
"l2Z": "Z",
"l2z": "z",
"l2Z5": "Z5",
"l2z5": "z5",
"l2Z4": "Z4",
"l2z4": "z4",
"l2Z3": "Z3",
"l2z3": "z3",
"l2N": "2N",
"l2n": "2n",

// Allah glyph 
"Allah": "All+257;h",
"A4llwa6h": "All+257;h",
"lilwa6h": "All+257;h",

// Shadda 

"w2": "<w2>",
"bw": "bb", // Arabic Shadda 
"cw": "cc", // Arabic Shadda 
"dw": "dd", // Arabic Shadda 
"fw": "ff", // Arabic Shadda 
"gw": "gg", // Arabic Shadda 
"hw": "hh", // Arabic Shadda 
"jw": "jj", // Arabic Shadda 
"kw": "kk", // Arabic Shadda 
"lw": "ll", // Arabic Shadda 
"mw": "mm", // Arabic Shadda 
"nw": "nn", // Arabic Shadda 
"pw": "pp", // Arabic Shadda 
"qw": "qq", // Arabic Shadda 
"rw": "rr", // Arabic Shadda 
"sw": "ss", // Arabic Shadda 
"tw": "tt", // Arabic Shadda 
"vw": "vv", // Arabic Shadda 
"ww": "ww", // Arabic Shadda 
"xw": "xx", // Arabic Shadda 
"yw": "yy", // Arabic Shadda 
"zw": "zz", // Arabic Shadda 


// CONSONANTS 

"B7": "+1041;", // Cyrillic Capital Letter Be 
"b7": "p",
"B": "+1041;", // Cyrillic Capital Letter Be 
"b": "b",

"C2": "+199;", // Latin Capital Letter C With Cedilla 
"c2": "+231;", // Latin Small Letter C With Cedilla 
"C7": "+199;", // Latin Capital Letter C With Cedilla 
"c7": "+231;", // Latin Small Letter C With Cedilla 
"c": "c",
"C": "C",

"D2": "+1044;", // Cyrillic Capital Letter De 
"d2": "+1106;", // Cyrillic Small Letter Dje 
"d3": "+1106;", // Cyrillic Small Letter Dje 
"D3": "+1044;", // Cyrillic Capital Letter De 
"D6": "+1044;", // Cyrillic Capital Letter De 
"d6": "+1106;", // Cyrillic Small Letter Dje 
"D7": "+1044;", // Cyrillic Capital Letter De 
"d7": "+1106;", // Cyrillic Small Letter Dje 
"D": "+1044;", // Cyrillic Capital Letter De 
"d": "+1106;", // Cyrillic Small Letter Dje 

"F": "F",
"f": "f",

"G2": "+1043;", // Cyrillic Capital Letter Ghe 
"g2": "+1107;", // Cyrillic Small Letter Gje 
"G3": "+1043;", // Cyrillic Capital Letter Ghe 
"g3": "+1107;", // Cyrillic Small Letter Gje 
"G4": "+1043;", // Cyrillic Capital Letter Ghe 
"g4": "+1107;", // Cyrillic Small Letter Gje 
"G5": "+1043;", // Cyrillic Capital Letter Ghe 
"g5": "+1107;", // Cyrillic Small Letter Gje 
"G6": "+1043;", // Cyrillic Capital Letter Ghe 
"g6": "+1107;", // Cyrillic Small Letter Gje 
"g": "+1107;", // Cyrillic Small Letter Gje 
"G": "+1043;", // Cyrillic Capital Letter Ghe 

"H2": "H",
"h2": "h",
"H3": "H",
"h3": "h",
"h5": "h",
"H5": "H",
"h": "h",
"H": "H",

"J": "+1032;",
"j": "+1112;",

"K2": "K",
"k2": "k",
"K3": "K",
"k3": "k",
"K": "K",
"k": "k",

"l2": "",
"L": "L",
"l": "l",

"l2": "",

"M": "M",
"m": "m",

"N2": "N",
"n2": "n",
"N6": "N",
"n6": "n",
"N": "N",
"n": "n",

"P": "+1055;", // Cyrillic Capital Letter Pe 
"p": "p",

"R": "R",
"r": "r",

"S2": "+350;",
"s2": "+351;",
"S3": "S",
"s3": "s",
"S4": "S",  
"s4": "s",  
"S5": "S",
"s5": "s",
"S": "S",
"s": "s",

"T2": "+1058;", // Cyrillic Capital Letter Te 
"t2": "t",
"T3": "+1058;", // Cyrillic Capital Letter Te 
"t3": "t",
"T6": "+1058;", // Cyrillic Capital Letter Te 
"t6": "t",
"T7": "+1058;", // Cyrillic Capital Letter Te 
"t7": "t",
"T": "+1058;", // Cyrillic Capital Letter Te 
"t": "t",

"V2": "+1042;", // Cyrillic Capital Letter Ve 
"v2": "+252;", //  
"V3": "+1042;", // Cyrillic Capital Letter Ve 
"v3": "u",
"V": "+1042;", // Cyrillic Capital Letter Ve 
"v": "v",

"Y": "Y",
"y": "y",

"Z2": "+1046;", // Cyrillic Capital Letter Zhe 
"z2": "z",
"Z3": "+1046;", // Cyrillic Capital Letter Zhe 
"z3": "z",
"Z4": "+1046;", // Cyrillic Capital Letter Zhe 
"z4": "z",
"Z5": "+1046;", // Cyrillic Capital Letter Zhe 
"z5": "z",
"z": "z",
"Z": "+1046;", // Cyrillic Capital Letter Zhe 


// INITIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "A", 
"a1": "a", 
"A2": "A", 
"a2": "a",
"A3": "A",
"a3": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a",
"A": "A",
"a": "a",
"E0": "E",
"e0": "e",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "E",
"e4": "e",
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "I",
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "I",  
"i1": "i",  
"I2": "+304;", // Latin Capital Letter I With Dot Above  
"i2": "i",
"i3": "+305;", // Latin Small Letter Dotless I   
"I3": "I",
"I4": "+304;", // Latin Capital Letter I With Dot Above  
"i4": "i",
"I5": "I",
"i5": "i",
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "i",
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis  
"o0": "+246;", // Latin Small Letter O With Diaeresis  
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis  
"o3": "+246;", // Latin Small Letter O With Diaeresis  
"O4": "O",  
"o4": "o", 
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"o0": "o",
"O0": "O",
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U1": "U",
"u1": "u",
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "U", 
"u3": "u",
"U4": "U",
"u4": "u",
"U5": "+220;", // Latin Capital Letter U With Diaeresis 
"u5": "+252;", // Latin Small Letter U With Diaeresis 
"U6": "+220;", // Latin Capital Letter U With Diaeresis 
"u6": "+252;", // Latin Small Letter U With Diaeresis 
"U7": "+220;", // Latin Capital Letter S With Caron 
"u7": "+252;", // Latin Small Letter S With Caron 
"U8": "U",
"u8": "u",
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "U",
"u0": "u",

// FINAL VOWELS 

"A0 ": "A",
"a0 ": "a",
"A1 ": "A",
"a1 ": "a",
"A2 ": "A",
"a2 ": "a",
"A3 ": "A",
"a3 ": "a",
"A4 ": "A",
"a4 ": "a",
"A5 ": "A",
"a5 ": "a",
"A6 ": "A",
"a6 ": "a",
"A7 ": "A",
"a7 ": "a",
"A8 ": "A",
"a8 ": "a",
"A9 ": "A",
"a9 ": "a", 
"A": "A",
"a": "a", 
"E0 ": "E",
"e0 ": "e",
"E2 ": "E",
"e2 ": "e",
"E3 ": "E",
"e3 ": "e",
"E4 ": "E",
"e4 ": "e",
"E5 ": "E",
"e5 ": "e",
"E6 ": "E",
"e6 ": "an",
"E7 ": "E",
"e7 ": "en",
"E8 ": "E",
"e8 ": "un",
"E9 ": "E",
"e9 ": "in",
"E": "E",
"e": "e",
"I0 ": "+304;", // Latin Capital Letter I With Dot Above 
"i0 ": "+305;", // Latin Small Letter Dotless I 
"I1 ": "I",
"i1 ": "i",
"I2 ": "+304;", // Latin Capital Letter I With Dot Above 
"i2 ": "+305;", // Latin Small Letter Dotless I 
"I3 ": "I",
"i3 ": "i",
"I4 ": "I",
"i4 ": "i",
"I5 ": "I",
"i5 ": "+305;", // Latin Small Letter Dotless I 
"I6 ": "I",
"i6 ": "i",
"I7 ": "I",
"i7 ": "i",
"I8 ": "I",
"i8 ": "i",
"I9 ": "I",
"i9 ": "i",
"I": "I",
"i": "i",
"O0 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o0 ": "+246;", // Latin Small Letter O With Diaeresis  
"O1 ": "O",
"o1 ": "o",
"O2 ": "O",
"o2 ": "o",
"O3 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o3 ": "+246;", // Latin Small Letter O With Diaeresis  
"O4 ": "O",  
"o4 ": "o",  
"o5 ": "o",
"O5 ": "O",
"o6 ": "o",
"O6 ": "O",
"o7 ": "+246;", // Latin Small Letter O With Diaeresis 
"O7 ": "+214;", // Latin Capital Letter O With Diaeresis 
"o8 ": "o",
"O8 ": "O",
"o9 ": "o",
"O9 ": "O",
"o": "o",
"O": "O",
"u0 ": "+252;", // Latin Small Letter U With Diaeresis 
"U0 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u1 ": "u",
"U1 ": "U",
"U2 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u2 ": "+252;", // Latin Small Letter U With Diaeresis 
"U3 ": "U",
"u3 ": "u",
"u4 ": "u",
"U4 ": "U",
"u5 ": "u",
"U5 ": "U",
"u6 ": "+252;", // Latin Small Letter U With Diaeresis 
"U6 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u7 ": "+252;", // Latin Small Letter U With Diaeresis 
"U7 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u8 ": "u",
"U8 ": "U",
"u9 ": "+252;", // Latin Small Letter U With Diaeresis 
"U9 ": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// MEDIAL VOWELS 

"A0": "A",
"a0": "a",
"A1": "A",
"a1": "a",
"A2": "A",
"a2": "a",
"A3": "A",
"a3": "a",
"A4": "A",
"a4": "a",
"A5": "A",
"a5": "a",
"A6": "A",
"a6": "a",
"A7": "A",
"a7": "a",
"A8": "A",
"a8": "a",
"A9": "A",
"a9": "a", 
"A": "A",
"a": "a", 
"E0": "E",
"e0": "e",
"E1": "E",
"e1": "e",
"E2": "E",
"e2": "e",
"E3": "E",
"e3": "e",
"E4": "E",
"e4": "e",
"E5": "E",
"e5": "e",
"E6": "E",
"e6": "e",
"E7": "E",
"e7": "e",
"E8": "E",
"e8": "e",
"E9": "E",
"e9": "e",
"E": "E",
"e": "e",
"I0": "+304;", // Latin Capital Letter I With Dot Above 
"i0": "+305;", // Latin Small Letter Dotless I 
"I1": "I",
"i1": "i",
"I2": "+304;", // Latin Capital Letter I With Dot Above 
"i2": "+305;", // Latin Small Letter Dotless I 
"I3": "I",
"i3": "i",
"I4": "+304;", // Latin Capital Letter I With Dot Above 
"i4": "i",
"I5": "I",
"i5": "+305;", // Latin Small Letter Dotless I 
"I6": "I",
"i6": "i",
"I7": "I",
"i7": "+305;", // Latin Small Letter Dotless I 
"I8": "I",
"i8": "i",
"I9": "I",
"i9": "i",
"I": "I",
"i": "i",
"O0": "+214;", // Latin Capital Letter O With Diaeresis 
"o0": "+246;", // Latin Small Letter O With Diaeresis  
"O1": "O",
"o1": "o",
"O2": "O",
"o2": "o",
"O3": "+214;", // Latin Capital Letter O With Diaeresis 
"o3": "+246;", // Latin Small Letter O With Diaeresis  
"O4": "O",  
"o4": "o",  
"o5": "o",
"O5": "O",
"o6": "o",
"O6": "O",
"o7": "+246;", // Latin Small Letter O With Diaeresis 
"O7": "+214;", // Latin Capital Letter O With Diaeresis 
"o8": "o",
"O8": "O",
"o9": "o",
"O9": "O",
"o": "o",
"O": "O",
"u0": "+252;", // Latin Small Letter U With Diaeresis 
"U0": "+220;", // Latin Capital Letter U With Diaeresis 
"u1": "u",
"U1": "U",
"U2": "+220;", // Latin Capital Letter U With Diaeresis 
"u2": "+252;", // Latin Small Letter U With Diaeresis 
"U3": "U",
"u3": "u",
"u4": "u",
"U4": "U",
"u5": "+252;", // Latin Small Letter U With Diaeresis 
"U5": "+220;", // Latin Capital Letter U With Diaeresis 
"u6": "+252;", // Latin Small Letter U With Diaeresis 
"U6": "+220;", // Latin Capital Letter U With Diaeresis 
"u7": "+252;", // Latin Small Letter U With Diaeresis 
"U7": "+220;", // Latin Capital Letter U With Diaeresis 
"u8": "u",
"U8": "U",
"u9": "+252;", // Latin Small Letter U With Diaeresis 
"U9": "+220;", // Latin Capital Letter U With Diaeresis 
"u": "u",
"U": "U",

// SPECIAL 

"-7": "-+252;",
"-6": "-u",
"-5": "-+305;",
"-4": "-i",
"-3": "-",
"-2": "",
"-1": "-",
"'2": "+703;",
"'3": "+704;",
"'4": "",
"l2": "'",
"'5": "",
};
