export type WajibuListEntry =
  | string
  | {
      lead: string;
      subItems: readonly string[];
      subListStyle?: "lower-roman" | "decimal";
    };

export type WajibuSection = {
  id: string;
  title: string;
  entries: readonly WajibuListEntry[];
};

export const wajibuSections: readonly WajibuSection[] = [
  {
    id: "mkutano-mkuu",
    title: "WAJIBU WA MKUTANO MKUU WA USHARIKA",
    entries: [
      "Kupokea na kujadili taarifa ya kazi ya Mchungaji Kiongozi na Baraza la Wazee la Usharika;",
      "Kupokea, kujadili na kuidhinisha taarifa ya fedha, mpango na bajeti wa Usharika kwa mwaka unaofuata;",
      "Kuzungumzia kwa ujumla mafanikio na matatizo ya Usharika;",
      "Kuchagua wazee wa Kanisa wa Ushairika;",
      "Kujadili, kupitisha na kupeleka ombi la Mtaa kuwa Ushairika kwa vikao vya Jimbo; na",
      "Kupitisha maazimio muhimu ya kazi za Usharika.",
    ],
  },
  {
    id: "baraza-la-wazee",
    title: "WAJIBU WA BARAZA LA WAZEE LA USHARIKA",
    entries: [
      "Kusimamia na kufanikisha shughuli zote za Uongozi katika Usharika ikijumuisha kazi za Misioni, Uinjilisti na Uwakili, maendeleo yote na uchumi wa Usharika;",
      "Kuamua mashauri juu ya Uongozi wa Usharika, kutunza maadili pamoja na mafundisho ya Kikristo, ili kuhakikisha kwamba yanapatikana kutokana na msingi wa imani ya Kikristo kama ilivyoelezwa katika Kanuni ya 11 ya Katiba hii;",
      {
        lead: "Kuunda kamati za Usharika kutokana na Wazee wa Kanisa na Wakristo wachache;",
        subItems: [
          "Kamati ya Fedha",
          "Kamati ya Mipango, Uchumi na Utawala",
          "Kamati ya Uinjilisti, Misioni na Uwakili",
          "Kamati ya Malezi",
          "Kamati ya Afya na Udiakonia",
        ],
        subListStyle: "lower-roman",
      },
      "Kuteua Wenyeviti wa Kamati za Usharika zilizotajwa hapo juu;",
      "Kuthibitisha mahali pa kufungua Mtaa mpya wa Usharika na kuona namna ya kutunza Mtaa huo;",
      "Kupokea na kujadili ombi la Mtaa wa Usharika unaoomba kuwa Usharika unaojitegemea kimaamuzi na kupendekeza kwa Halmashauri ya Jimbo kupitia Mkutano Mkuu wa Usharika;",
      "Kuhakikisha kuwa mapatano ya Usharika, Jimbo, Dayosisi na Kanisa yanafuatwa na kutekelezwa;",
      "Kutunza, kulinda na kusimamia mali za Usharika na mali za Jimbo, Dayosisi na Kanisa zilizomo katika Usharika huo;",
      "Kupokea, kujadili na kuamua mambo yaletwayo toka Kamati mbalimbali za Sharika na toka Mabaraza ya Mitaa ya Usharika;",
      "Kuteua Wajumbe wawili wa kuingia Bodi ya Kituo cha Jimbo kilichopo katika Usharika;",
      "Kuonya, kushauri, kusimamia, kufundisha, kutenga na kupokea Wakristo kama itakavyoshauriwa na Mchungaji Kiongozi wa Usharika;",
      "Kumchagua Katibu wa Baraza la Wazee wa Usharika na Msaidizi wake inapobidi;",
      "Kumchagua au kumuajiri Mtunza Hazina wa Usharika;",
      "Kupokea maombi, kuwapima na kuwaita Wanafunzi wa kujiunga na masomo ya ama Biblia au Theolojia wafao na kuwapeendekeza kwa Jimbo na Dayosisi;",
      "Kujaza pengo la Mzee wa Kanisa mara litokeapo;",
      "Kupima Wanafunzi wa Kipaimara kabla ya kubarikiwa; na",
      "Kusimamia Sheria, Kanuni na Miongozi ya Dayosisi.",
    ],
  },
  {
    id: "kamati-utendaji",
    title: "WAJIBU WA KAMATI YA UTENDAJI YA USHARIKA",
    entries: [
      "Kutunza mambo yote ya dharura yanayotokea kabla au baada ya kikao cha Baraza la Wazee wa Ushairika na yale yanayoagizwa na Baraza la Wazee wa Ushairika;",
      "Kupoke ana kujadilia taarifa mbalimbali za kamati za Usharika;",
      "Kupeleka kumbukumbu na mapatano yake kwa Baraza la Wazee wa Ushairika; na",
      "Kupendekeza, kuwahamisha na kuwabadilisha Parish Wokers na Wainjilisti vituo vya kazi toka Mtaa hadi Mtaa ndani ya Mitaa ya Ushairika inapobidi, uongozi wa Jimbo utaarifiwe kimaandishi.",
    ],
  },
  {
    id: "kamati-uinjilisti",
    title: "WAJIBU WA KAMATI YA UINJILISTI, MISIONI NA UWAKILI",
    entries: [
      "Kujadili na kutunza huduma za Misioni, Uinjilisti na Uwakili katika maeneo ya Usharika kwa njia ya mahubiri, vielelezo, maandiko na duka la vitabu;",
      "Kukuza huduma za Muziki na Uimbaji;",
      "Kupanga na kufanikisha Semina, Warsha na Mikutano ya kiroho;",
      "Kuweka, kutunza na hata kupanua mipaka wazi ya Usharika;",
      "Kutuma kumbukumbu za mapendekezo ya kikao kwa Baraza la Wazee la Usharika;",
      "Kuandaa mpango na kufundisha masomo ya Uwakili; na",
      "Kuratibu shughuli za jumuiya.",
    ],
  },
  {
    id: "kamati-mipango",
    title: "WAJIBU WA KAMATI YA MIPANGO, UCHUMI NA UTAWALA",
    entries: [
      "Kabuni njia za kuanzisha miradi ya Uchumi;",
      "Kujenga, kutunza na kukarabati majengo na vifaa mbalimbali vya Usharika na Mitaa;",
      "Kushauri na kusimamia uendeshaji wa miradi ya Usharika na Mitaa ya Usharika;",
      "Kufundisha Wakristo masomo ya uchumi, miradi na ujasiriamali;",
      "Kuandaa taarifa za utawala, miradi, maendeleo na uchumi na kuzituma kwa Baraza la Wazee la Usharika;",
      "Kutuma kumbukumbu na mapendekezo kwa Baraza la Wazee la Usharika;",
      "Kuandaa makadirio ya bajeti na mpango kazi wa Usharika;",
      "Kupendekeza mipango ya matumizi ya Ardhi katika eneo la usharika;",
      "Kuandaa mipango madhubuti ya maendeleo ya upanuzi wa ardhi katika sharika;",
      "Kusimamia na kuhakiki ujenzi wa miradi mbalimbali katika sharika na mitaa yake;",
      "Kusimamia uanzishwaji na uendelezaji wa vikundi vya maendeleo ndani ya Usharika; na",
      "Kufanya ufuatiliaji na tathimini ya programu na miradi ya maendeleo inayotekelezwa na usharika.",
    ],
  },
  {
    id: "kamati-fedha",
    title: "WAJIBU WA KAMATI YA FEDHA",
    entries: [
      "Kujadili na kutunza wajibu za fedha;",
      "Kutekeleza Bajeti ya mapato na matumizi;",
      "Kupokea na kujadili taarifa za fedha za miezi mitatu mitatu za mapato na matumizi, kisha ya Mwaka mzima, kujumuisha urari na mizania za mahesabu ya Mwaka;",
      "Kubuni na kutafuta vyanzo vya fedha; na",
      "Kutuma kumbukumbu na mapendekezo kwa Baraza la Wazee wa Usharika.",
    ],
  },
  {
    id: "kamati-malezi",
    title: "WAJIBU YA KAMATI YA MALEZI",
    entries: [
      {
        lead: "Kupokea, kujadili na kutunza wajibu za:",
        subItems: [
          "Huduma ya Elimu ya Kikristo",
          "Huduma ya Umoja wa Vijana na Vikundi vya Vijana.",
          "Huduma ya Umoja wa Wanawake na Vikundi vya Wanawake.",
          "Huduma ya Watoto na Shule ya Jumapili.",
          "Kupanga na kufundisha jamii mafundisho ya haki za Watoto katika makundi ya rika mbalimbali.",
          "Kujenga mahusiano kwa Wanawake na Wanaume kwa njia za Programu za Ndoa, Unyumba na Jinsia.",
        ],
        subListStyle: "lower-roman",
      },
      "Kutuma kumbukumbu na mapendekezo kwa Baraza la Wazee la Usharika.",
    ],
  },
  {
    id: "kamati-afya-udiakonia",
    title: "WAJIBU WA KAMATI YA AFYA NA UDIAKONIA",
    entries: [
      "Kutunza wahitaji wa msaada wa kiroho na kimwili na kuwapatia mahitaji yao;",
      "Kuona mipango mizuri ya kuanzisha vituo vya huduma mbalimbali kama Zahanati, vituo vya malezi n.k;",
      "Kuandaa na kufundisha masomo ya Malezi bora na ustawi wa jamii kwa njia za Semina, Warsha, Vipeperushi, Mabango, Mafundisho ya hadhara n.k;",
      "Kupanga, kuanzisha na kukuza huduma za Udiakonia na Afya kwa jamii inayozunguka Usharika; na",
      "Kutuma kumbukumbu na mapendekezo kwa Baraza la Wazee la Usharika.",
    ],
  },
  {
    id: "kamati-mazingira",
    title: "WAJIBU WA KAMATI YA MAZINGIRA",
    entries: [
      "kuhakikisha utekelezaji na utunzaji wa mazingira bora na usafi kwenye eneo la usharika na mitaa yake;",
      "kushauri baraza la wazee wa usharika na usharika kwa ujumla kuhusu masuala yote ya usafi na mazingira;",
      "kukuza weledi kuhusu ulinzi wa mazingira, upandaji miti, utunzaji wa bustani na uhifadhi maliasili kwenye eneo la usharika;",
      "kukusanya na kusimamia taarifa kuhusu mazingira na matumizi ya maliasili kwenye eneo la usharika na mitaa yote ya usharika;",
      "kuandaa taarifa za mihula kuhusu hali ya mazingira ndani ya eneo la usharika;",
      "kufanya mapitio ya sheria ndogo zinazohusu usimamizi wa mazingira na shughuli maalumu za kisekta zinazohusiana na mazingira;",
      "kutoa taarifa kwenye baraza la wazee wa usharika kuhusu utekelezaji wa shughuli za usafi na mazingira; na",
      "kutekeleza majukumu mengine kwa kadiri mamlaka ya serikali za mitaa itakavyokuwa ikiyatoa.",
    ],
  },
];
