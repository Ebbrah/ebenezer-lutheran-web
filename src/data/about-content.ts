export const historiaParagraphs = [
  "Usharika wa Ebenezer ni miongoni mwa sharika 53 za Kanisa la Kiinjili la Kilutheri Tanzania (KKKT) ndani ya Dayosisi ya Dodoma. Vilevile, Usharika huu ni miongoni mwa sharika 27 za Jimbo la makao makuu ndani ya Dayosisi ya Dodoma. Usharika wa Ebenezer ulianzishwa tarehe 21 Februari 2015 ukiwa ni mtaa chini ya Usharika wa Arusha Road.",
  "Usharika wa Ebenezer kipindi ukiwa Mtaa ulikuwa na takribani ya waumini 153, ambapo watu wazima walikuwa 58 na watoto 95. Wakati huo walikuwa wakisalia chini ya mti mmoja uliokua maeneo ya viwanja vya usharika kwa sasa.",
  "Usharika wa Ebenezer ulifunguliwa rasmi tarehe 07 Aprili 2019 na Askofu Mstaafu wa kipindi hicho wa Dayosisi ya Dodoma Askofu Amoni Kinyunyu baada ya kuidhinishwa na vikao vya maamuzi vya Dayosisi ya Dodoma.",
  "Usharika wa Ebenezer kwa sasa una takribani ya washarika 1,102 ikiwa 702 ni watu wazima na 400 ni Watoto. Vilevile, una Jumuiya 14 ambazo huendesha ibada za nyumba kwa nyumba.",
  "Usharika unalea mitaa miwili ya Solowu na Mtungutu yenye takribani ya washarika 212, ambapo Mtaa wa Solowu una washarika 56, kati ya hao Watoto ni 25 na watu wazima 31. Mtaa wa Mtungutu una washarika 156, kati yao Watoto ni 45 na watu wazima 111.",
] as const;

export const historiaVisionQuote =
  "Usharika wa Ebenezer unatekeleza maono ya Kanisa kwa kuwafanya watu wote wamjue Yesu Kristo na kuwa na uzima katika utimilifu wake kwa kuwapelekea Habari Njema za Neno la Mungu kutoka kwenye Biblia katika Upendo wa Kristo unaotolewa kwa watu wote.";

export const watumishiWelcome =
  "Karibu kwenye ukurasa huu. Hapa tunawakumbuka wachungaji na wainjilisti waliohudumu katika Usharika wa Ebenezer tangu kuanzishwa kwake — watumishi waliotuongoza kwa upendo na uaminifu katika safari ya imani.";

export type StaffWaliohudumuEntry = {
  title: string;
  name: string;
  /** Picha ya pasipoti (njia kutoka `public/`, k.m. `/images/people/mch-brayson-mlangi.jpg`) */
  photoSrc?: string;
};

export const wachungajiWaliohudumu: readonly StaffWaliohudumuEntry[] = [
  { title: "2016 - 2018", name: "Mch. Brayson Mlangi" },
  { title: "2018 - 2020", name: "Mch. Marco Kinyau" },
  { title: "2020 - 2026", name: "Mch. Jofrey Sumila" },
  { title: "2021 - 2022", name: "Mch. Meshack Mtambulo" },
  { title: "2022 - 2023", name: "Mch. Yona Kitunda" },
  { title: "2023 - 2024", name: "Mch. Elineema Mcharo" },
  { title: "2026 -", name: "Mch. Grace Mbata" },
];

export const wainjilistiWaliohudumu: readonly StaffWaliohudumuEntry[] = [
  { title: "2015 - 2020", name: "Mwinj. Brayson Nyaregete" },
  { title: "2020 - 2021", name: "Mwinj. Hosiana" },
  { title: "2021 - 2023", name: "Mwinj. Judith Moshi" },
  { title: "2025 -", name: "Mwinj. Judith Moshi" },
];

/** @deprecated Tumia wachungajiWaliohudumu na wainjilistiWaliohudumu */
export const staffRoles = [
  ...wachungajiWaliohudumu,
  ...wainjilistiWaliohudumu,
] as const;

export const maonoText =
  "Kuufanya Ulimwengu unaoshuhudia Neema ya Mungu na Upendo wa Kristo unaotolewa kwa watu wote.";

export const dhamiraText =
  "Pamoja katika Kristo tunawekwa Huru kwa Neema ili tuishi kwa Uaminifu, Ushuhuda kamili na kutumika kwa furaha.";

export const miikoItems = [
  "Msamaha na upatanisho.",
  "Utu, uhuru na haki.",
  "Umoja katika kutofautiana.",
  "Ujasiri na uwazi katika kuleta mabadiliko.",
  "Uaminifu na uwakili katika uumbaji wa Mungu.",
] as const;

export const vipaumbeleItems = [
  "Kuhakikisha ukuaji endelevu wa Kanisa na Dayosisi.",
  "Kutafuta fedha ili kukuza uchumi wa Kanisa na Dayosisi.",
  "Kuleta uongozi bora wa Kanisa na Utendaji fanisi.",
  "Kutoa huduma bora za kijamii.",
  "Kuhakikisha utunzaji bora wa Mazingira, Jamii, Uchumi na Siasa.",
] as const;

export const hudumaItems = [
  "Mafundisho ya Neno la Mungu",
  "Maombi na Maombezi",
  "Vipindi vizuri vya Kumsifu na Kumuabudu Mungu",
  "Huduma ya Sakramenti takatifu",
  "Huduma za ubatizo",
  "Huduma mafundisho ya ndoa na Kufunga ndoa",
  "Huduma mbali mbali za Kidiakonia",
  "Shughuli mbalimbali za Vijana, watoto, Wakina mama na wakina baba",
  "Ibada za nyumba kwa nyumba",
  "Uimbaji kupitia vikundi mbalimbali (kwaya)",
] as const;
