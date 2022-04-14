let myFavoriteCountry = {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
            "nativeName": {
                "kor": {
                    "official": "대한민국",
                    "common": "한국"
                }
            }
        },
        "tld": [
            ".kr",
            ".한국"
        ],
        "cca2": "KR",
        "ccn3": "410",
        "cca3": "KOR",
        "cioc": "KOR",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "KRW": {
                "name": "South Korean won",
                "symbol": "₩"
            }
        },
        "idd": {
            "root": "+8",
            "suffixes": [
                "2"
            ]
        },
        "capital": [
            "Seoul"
        ],
        "altSpellings": [
            "KR",
            "Korea, Republic of",
            "Republic of Korea",
            "남한",
            "남조선"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "languages": {
            "kor": "Korean"
        },
        "translations": {
            "ara": {
                "official": "جمهورية كوريا",
                "common": "كوريا الجنوبية"
            },
            "ces": {
                "official": "Korejská republika",
                "common": "Jižní Korea"
            },
            "cym": {
                "official": "Republic of Korea",
                "common": "South Korea"
            },
            "deu": {
                "official": "Republik Korea",
                "common": "Südkorea"
            },
            "est": {
                "official": "Korea Vabariik",
                "common": "Lõuna-Korea"
            },
            "fin": {
                "official": "Korean tasavalta",
                "common": "Etelä-Korea"
            },
            "fra": {
                "official": "République de Corée",
                "common": "Corée du Sud"
            },
            "hrv": {
                "official": "Republika Koreja",
                "common": "Južna Koreja"
            },
            "hun": {
                "official": "Koreai Köztársaság",
                "common": "Dél-Korea"
            },
            "ita": {
                "official": "Repubblica di Corea",
                "common": "Corea del Sud"
            },
            "jpn": {
                "official": "大韓民国",
                "common": "韓国"
            },
            "kor": {
                "official": "대한민국",
                "common": "한국"
            },
            "nld": {
                "official": "Republiek Korea",
                "common": "Zuid-Korea"
            },
            "per": {
                "official": "جمهوری کره",
                "common": "کرهٔ جنوبی"
            },
            "pol": {
                "official": "Republika Korei",
                "common": "Korea Południowa"
            },
            "por": {
                "official": "República da Coreia",
                "common": "Coreia do Sul"
            },
            "rus": {
                "official": "Республика Корея",
                "common": "Южная Корея"
            },
            "slk": {
                "official": "Kórejská republika",
                "common": "Južná Kórea"
            },
            "spa": {
                "official": "República de Corea",
                "common": "Corea del Sur"
            },
            "swe": {
                "official": "Republiken Korea",
                "common": "Sydkorea"
            },
            "urd": {
                "official": "جمہوریہ کوریا ",
                "common": "جنوبی کوریا"
            },
            "zho": {
                "official": "大韩民国",
                "common": "韩国"
            }
        },
        "latlng": [
            37,
            127.5
        ],
        "landlocked": false,
        "borders": [
            "PRK"
        ],
        "area": 100210,
        "demonyms": {
            "eng": {
                "f": "South Korean",
                "m": "South Korean"
            },
            "fra": {
                "f": "Sud-coréenne",
                "m": "Sud-coréen"
            }
        },
        "flag": "🇰🇷",
        "maps": {
            "googleMaps": "https://goo.gl/maps/7ecjaJXefjAQhxjGA",
            "openStreetMaps": "https://www.openstreetmap.org/relation/307756"
        },
        "population": 51780579,
        "gini": {
            "2016": 31.4
        },
        "fifa": "KOR",
        "car": {
            "signs": [
                "ROK"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC+09:00"
        ],
        "continents": [
            "Asia"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/kr.png",
            "svg": "https://flagcdn.com/kr.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/kr.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/kr.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                37.55,
                126.98
            ]
        },
        "postalCode": {
            "format": "SEOUL ###-###",
            "regex": "^(?:SEOUL)*(\\d{6})$"
        }
    }

let v1 = myFavoriteCountry.tld[0]
console.log(v1);

let v2 = myFavoriteCountry.name.nativeName.kor.official
console.log(v2);

let v3 = myFavoriteCountry.idd.suffixes[0]
console.log(v3);