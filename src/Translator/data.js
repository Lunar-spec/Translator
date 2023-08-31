const countries = [
    {
        code: "am-ET",
        language: "Amharic",
    },
    {
        code: "ar-SA",
        language: "Arabic",
    },
    {
        code: "be-BY",
        language: "Bielarus",
    },
    {
        code: "bem-ZM",
        language: "Bemba",
    },
    {
        code: "bi-VU",
        language: "Bislama",
    },
    {
        code: "bjs-BB",
        language: "Bajan",
    },
    {
        code: "bn-IN",
        language: "Bengali",
    },
    {
        code: "bo-CN",
        language: "Tibetan",
    },
    {
        code: "br-FR",
        language: "Breton",
    },
    {
        code: "bs-BA",
        language: "Bosnian",
    },
    {
        code: "ca-ES",
        language: "Catalan",
    },
    {
        code: "cop-EG",
        language: "Coptic",
    },
    {
        code: "cs-CZ",
        language: "Czech",
    },
    {
        code: "cy-GB",
        language: "Welsh",
    },
    {
        code: "da-DK",
        language: "Danish",
    },
    {
        code: "dz-BT",
        language: "Dzongkha",
    },
    {
        code: "de-DE",
        language: "German",
    },
    {
        code: "dv-MV",
        language: "Maldivian",
    },
    {
        code: "el-GR",
        language: "Greek",
    },
    {
        code: "en-GB",
        language: "English",
    },
    {
        code: "es-ES",
        language: "Spanish",
    },
    {
        code: "et-EE",
        language: "Estonian",
    },
    {
        code: "eu-ES",
        language: "Basque",
    },
    {
        code: "fa-IR",
        language: "Persian",
    },
    {
        code: "fi-FI",
        language: "Finnish",
    },
    {
        code: "fn-FNG",
        language: "Fanagalo",
    },
    {
        code: "fo-FO",
        language: "Faroese",
    },
    {
        code: "fr-FR",
        language: "French",
    },
    {
        code: "gl-ES",
        language: "Galician",
    },
    {
        code: "gu-IN",
        language: "Gujarati",
    },
    {
        code: "ha-NE",
        language: "Hausa",
    },
    {
        code: "he-IL",
        language: "Hebrew",
    },
    {
        code: "hi-IN",
        language: "Hindi",
    },
    {
        code: "hr-HR",
        language: "Croatian",
    },
    {
        code: "hu-HU",
        language: "Hungarian",
    },
    {
        code: "id-ID",
        language: "Indonesian",
    },
    {
        code: "is-IS",
        language: "Icelandic",
    },
    {
        code: "it-IT",
        language: "Italian",
    },
    {
        code: "ja-JP",
        language: "Japanese",
    },
    {
        code: "kk-KZ",
        language: "Kazakh",
    },
    {
        code: "km-KM",
        language: "Khmer",
    },
    {
        code: "kn-IN",
        language: "Kannada",
    },
    {
        code: "ko-KR",
        language: "Korean",
    },
    {
        code: "ku-TR",
        language: "Kurdish",
    },
    {
        code: "ky-KG",
        language: "Kyrgyz",
    },
    {
        code: "la-VA",
        language: "Latin",
    },
    {
        code: "lo-LA",
        language: "Lao",
    },
    {
        code: "lv-LV",
        language: "Latvian",
    },
    {
        code: "men-SL",
        language: "Mende",
    },
    {
        code: "mg-MG",
        language: "Malagasy",
    },
    {
        code: "mi-NZ",
        language: "Maori",
    },
    {
        code: "ms-MY",
        language: "Malay",
    },
    {
        code: "mt-MT",
        language: "Maltese",
    },
    {
        code: "my-MM",
        language: "Burmese",
    },
    {
        code: "ne-NP",
        language: "Nepali",
    },
    {
        code: "niu-NU",
        language: "Niuean",
    },
    {
        code: "nl-NL",
        language: "Dutch",
    },
    {
        code: "no-NO",
        language: "Norwegian",
    },
    {
        code: "ny-MW",
        language: "Nyanja",
    },
    {
        code: "ur-PK",
        language: "Pakistani",
    },
    {
        code: "pau-PW",
        language: "Palauan",
    },
    {
        code: "pa-IN",
        language: "Panjabi",
    },
    {
        code: "ps-PK",
        language: "Pashto",
    },
    {
        code: "pis-SB",
        language: "Pijin",
    },
    {
        code: "pl-PL",
        language: "Polish",
    },
    {
        code: "pt-PT",
        language: "Portuguese",
    },
    {
        code: "rn-BI",
        language: "Kirundi",
    },
    {
        code: "ro-RO",
        language: "Romanian",
    },
    {
        code: "ru-RU",
        language: "Russian",
    },
    {
        code: "sg-CF",
        language: "Sango",
    },
    {
        code: "si-LK",
        language: "Sinhala",
    },
    {
        code: "sk-SK",
        language: "Slovak",
    },
    {
        code: "sm-WS",
        language: "Samoan",
    },
    {
        code: "sn-ZW",
        language: "Shona",
    },
    {
        code: "so-SO",
        language: "Somali",
    },
    {
        code: "sq-AL",
        language: "Albanian",
    },
    {
        code: "sr-RS",
        language: "Serbian",
    },
    {
        code: "sv-SE",
        language: "Swedish",
    },
    {
        code: "sw-SZ",
        language: "Swahili",
    },
    {
        code: "ta-LK",
        language: "Tamil",
    },
    {
        code: "te-IN",
        language: "Telugu",
    },
    {
        code: "tet-TL",
        language: "Tetum",
    },
    {
        code: "tg-TJ",
        language: "Tajik",
    },
    {
        code: "th-TH",
        language: "Thai",
    },
    {
        code: "ti-TI",
        language: "Tigrinya",
    },
    {
        code: "tk-TM",
        language: "Turkmen",
    },
    {
        code: "tl-PH",
        language: "Tagalog",
    },
    {
        code: "tn-BW",
        language: "Tswana",
    },
    {
        code: "to-TO",
        language: "Tongan",
    },
    {
        code: "tr-TR",
        language: "Turkish",
    },
    {
        code: "uk-UA",
        language: "Ukrainian",
    },
    {
        code: "uz-UZ",
        language: "Uzbek",
    },
    {
        code: "vi-VN",
        language: "Vietnamese",
    },
    {
        code: "wo-SN",
        language: "Wolof",
    },
    {
        code: "xh-ZA",
        language: "Xhosa",
    },
    {
        code: "yi-YD",
        language: "Yiddish",
    },
    {
        code: "zu-ZA",
        language: "Zulu",
    },
];

countries.sort((a, b) => a.language.localeCompare(b.language));
countries.forEach((country, index) => {
    country.id = index + 1;
});

export default countries;
