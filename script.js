function myFunction()
{
   
    let word=form1.inputvalue.value;
    //function to detect language of input text
   detectLang(word);
   
}
const languageCodes = {
    aa: 'Afar',ab: 'Abkhazian',af: 'Afrikaans',ak: 'Akan',am: 'Amharic',ar: 'Arabic',as: 'Assamese',av: 'Avaric',ay: 'Aymara',az: 'Azerbaijani',ba: 'Bashkir',be: 'Belarusian',bg: 'Bulgarian',bh: 'Bihari',bi: 'Bislama', bm: 'Bambara',bn: 'Bengali',bo: 'Tibetan',br: 'Breton',bs: 'Bosnian',ca: 'Catalan',
ce: 'Chechen',ch: 'Chamorro',co: 'Corsican',cr: 'Cree',cs: 'Czech',cu: 'Church Slavic',cv: 'Chuvash',cy: 'Welsh',da: 'Danish',de: 'German',dv: 'Divehi',dz: 'Dzongkha',ee: 'Ewe',el: 'Greek', en: 'English', eo: 'Esperanto', es: 'Spanish', et: 'Estonian',eu: 'Basque',    fa: 'Persian',    ff: 'Fulah',    fi: 'Finnish',
    fj: 'Fijian',    fo: 'Faroese',    fr: 'French',    fy: 'Western Frisian',    ga: 'Irish',    gd: 'Scottish Gaelic',    gl: 'Galician',    gn: 'Guarani',    gu: 'Gujarati',    gv: 'Manx',    ha: 'Hausa',    he: 'Hebrew',    hi: 'Hindi',    ho: 'Hiri Motu',    hr: 'Croatian',    ht: 'Haitian',    hu: 'Hungarian',
    hy: 'Armenian',    hz: 'Herero',    ia: 'Interlingua',    id: 'Indonesian',    ie: 'Interlingue',    ig: 'Igbo',    ii: 'Sichuan Yi',    ik: 'Inupiaq',    io: 'Ido',    is: 'Icelandic',
    it: 'Italian',    iu: 'Inuktitut',
    ja: 'Japanese',    jv: 'Javanese',    ka: 'Georgian',
    kg: 'Kongo',    ki: 'Kikuyu',
    kj: 'Kuanyama',    kk: 'Kazakh',    kl: 'Kalaallisut',   km: 'Central Khmer',    kn: 'Kannada',    ko: 'Korean',    kr: 'Kanuri',    ks: 'Kashmiri',    ku: 'Kurdish',    kv: 'Komi',    kw: 'Cornish',    ky: 'Kirghiz',    la: 'Latin',    lb: 'Luxembourgish',
    lg: 'Ganda',    li: 'Limburgan',    ln: 'Lingala',    lo: 'Lao',    lt: 'Lithuanian',    lu: 'Luba-Katanga',    lv: 'Latvian',    mg: 'Malagasy',    mh: 'Marshallese',    mi: 'Maori',    mk: 'Macedonian',    ml: 'Malayalam',    mn: 'Mongolian',    mr: 'Marathi',    ms: 'Malay',    mt: 'Maltese',    my: 'Burmese',    na: 'Nauru',    nb: 'Norwegian Bokm??l',   
     nd: 'North Ndebele',    ne: 'Nepali',    ng: 'Ndonga',    nl: 'Dutch',    nn: 'Norwegian Nynorsk',    no: 'Norwegian',    nr: 'South Ndebele',    nv: 'Navajo',    ny: 'Chichewa',    oc: 'Occitan',    oj: 'Ojibwa',    om: 'Oromo',    or: 'Oriya',    os: 'Ossetian',    pa: 'Punjabi',    pi: 'Pali',    pl: 'Polish',    ps: 'Pashto',    pt: 'Portuguese',    qu: 'Quechua',    rm: 'Romansh',    rn: 'Rundi', 
       ro: 'Romanian',    ru: 'Russian',        rw: 'Kinyarwanda',    sa: 'Sanskrit',    sc: 'Sardinian',    sd: 'Sindhi',    se: 'Northern Sami',    sg: 'Sango',    si: 'Sinhala',    sk: 'Slovak',    sl: 'Slovenian',    sm: 'Samoan',    sn: 'Shona',    so: 'Somali',    sq: 'Albanian',    sr: 'Serbian',    ss: 'Swati',    st: 'Southern Sotho',    su: 'Sundanese',    sv: 'Swedish',    sw: 'Swahili',    ta: 'Tamil',    te: 'Telugu',  
         tg: 'Tajik',    th: 'Thai',    ti: 'Tigrinya',    tk: 'Turkmen',
    tl: 'Tagalog',    tn: 'Tswana',    to: 'Tonga',    tr: 'Turkish',    ts: 'Tsonga',    tt: 'Tatar',tw: 'Twi',    ty: 'Tahitian',    ug: 'Uighur',    uk: 'Ukrainian',    ur: 'Urdu',    uz: 'Uzbek',    ve: 'Venda',
    vi: 'Vietnamese',    vo: 'Volap??k',    wa: 'Walloon',    wo: 'Wolof',    xh: 'Xhosa',    yi: 'Yiddish',    yo: 'Yoruba',    za: 'Zhuang',    zh: 'Chinese',    zu: 'Zulu'
    ,
  };
    
function detectLang(textvalue)
{
    const apiKey = 'b4c02d922e09a0a61663dc23b4bbf4e8'; // replace with your actual API key
const text =textvalue;

fetch(`https://ws.detectlanguage.com/0.2/detect?q=${encodeURIComponent(text)}&key=${apiKey}`, {
  headers: {
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  const languageCode = data.data.detections[0].language;
  const languageName = languageCodes[languageCode];
  console.log(languageName);
  const result=document.getElementById("result");
  result.innerHTML=`Word:&nbsp${text}<br>
  Language Code:&nbsp${languageCode}<br>
  Language Name:&nbsp${languageName}`;
})
.catch(error => {
  console.error(error);
  const result=document.getElementById("result");
  result.innerHTML=`Sorry!!! Please give valid data`
});
}
