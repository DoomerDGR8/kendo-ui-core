(function( window, undefined ) {
    kendo.cultures["nn"] = {
        name: "nn",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n %","n %"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "kr"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],
                    namesAbbr: ["sø.","må.","ty.","on.","to.","fr.","la."],
                    namesShort: ["sø.","må.","ty.","on.","to.","fr.","la."]
                },
                months: {
                    names: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],
                    namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"]
                },
                AM: ["f.m.","f.m.","F.M."],
                PM: ["e.m.","e.m.","E.M."],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd d. MMMM yyyy",
                    F: "dddd d. MMMM yyyy HH:mm:ss",
                    g: "dd.MM.yyyy HH:mm",
                    G: "dd.MM.yyyy HH:mm:ss",
                    m: "d. MMMM",
                    M: "d. MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    };
})(this);
