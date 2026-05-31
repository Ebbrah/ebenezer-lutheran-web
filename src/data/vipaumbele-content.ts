export type VipaumbeleSubSection = {
  title: string;
  items: readonly string[];
};

export type VipaumbeleCommitteeSection = {
  id: string;
  title: string;
  subsections?: readonly VipaumbeleSubSection[];
  /** Kamati zenye malengo moja kwa moja bila vichwa vidogo */
  items?: readonly string[];
};

/** Vipaumbele vya kamati — baada ya picha za ukurasa */
export const vipaumbeleCommitteeSections: readonly VipaumbeleCommitteeSection[] =
  [
    {
      id: "uinjilisti",
      title: "KAMATI YA UINJILISTI, MISIONI NA UWAKILI",
      subsections: [
        {
          title: "HUDUMA YA UINJILISTI",
          items: [
            "Kuwa na mkakati wa makusudi kuimalisha huduma za kiroho na ufahamu wa neno la Mungu katika jumuiya za sasa katika kuimalisha uchaji na kuwafanya washarika waendelee kuimalika katika kujua ukweli wa neno la Mungu na kuepuka mafundisho potofu.",
            "Kuimalisha ukuaji wa kiroho kupitia semina na mikutano ya neno la mungu na kutengeneza program maalumu kwa ajili ya makundi mbalimbali kama vile Watoto, Vijana, Wazee na watu wenye uihitaji maalumu.",
            "Kuimarisha huduma za kimisioni katika mtaa wa Solowu na Mtungutu na kuainisha maeneo mapya ya huduma ya kimisioni",
            "Kuimalisha huduma ya neno la Mungu kupitia kwaya ndani ya usharika",
            "Kuwa na mkakati maalumu wa kuimalisha mahusiano na makanisa mengine.",
          ],
        },
        {
          title: "HUDUMA YA UIMBAJI",
          items: [
            "Kuandaa nyimbo mpya, kurekodi sauti na picha za video na kuzisambaza kupitia kurasa za mitandao ya kijamii, Televisheni na vituo vya redio.",
            "Kuinua uchumi wa vikundi vya uimbaji kwa kufanya ununuzi wa mashine ili kuwezesha utengenezaji wa vitafunwa, mradi wa utengenezaji wa batiki na sabuni za maji.",
          ],
        },
        {
          title: "HUDUMA YA IBADA YA NYUMBA KWA NYUMBA",
          items: [
            "Kuandaa na kuimalisha shughuli za injili na upatanisho nyumba kwa nyumba ili kuwafanya washarika waendelee kuwepo usharika wa Ebenezer.",
            "Kuendelea na mkakati thabiti wa kusimamia na kupokea mawazo, maswali na ushauri kutoka katika ibada za Jumuiya na kuzitengenezea mkakati wa majibu kwa njia ya mahubiri, semina na vipindi vya maswali na majibu.",
          ],
        },
      ],
    },
    {
      id: "mipango",
      title: "KAMATI YA MIPANGO, UCHUMI NA UTAWALA",
      subsections: [
        {
          title: "MIPANGO YA UJENZI",
          items: [
            "Kuendelea na ukamilishaji wa ujenzi wa jengo la kanisa ikiwemo ujenzi wa madhabahu, kupiga rangi ya nje, kuweka viti na mfumo mzima wa cctv, muziki na sauti;",
            "Uboreshaji wa mazingira ya nje ya kanisa kwa kujenga uzio;",
            "Kuanza ujenzi wa ofisi za Usharika;",
            "Kukamilisha zoezi la kuainisha matumizi bora ya ardhi ya kanisa (Land use plan)",
          ],
        },
        {
          title: "MIPANGO YA UCHUMI NA MIRADI",
          items: [
            "Uwekezaji katika mifuko ya uwekezaji;",
            "Ujenzi wa sehemu za kupangisha pindi uzio utakapojengwa;",
            "Kuendeleza duka la usharika sambamba na uwepo wa maktaba ya vitabu;",
            "Ununuzi wa Ardhi kwa matumizi mbalimbali sambamba na kuwa mradi pamoja na kuboresha ardhi zilizopo;",
            "Ununuzi wa mashine ya kuuza maji; na",
            "Kukamisha mradi wa shule ya ufundi ikiwa ni pamoja na ununuzi wa vifaa katika kalakana ya kuchomelea na vyereani vya kuanza kujifunzia.",
          ],
        },
        {
          title: "UTAWALA",
          items: [
            "Kuboresha mazingira ya uendeshaji wa kazi Usharikani kwa kuandaa miongozo ya usimamizi na utendaji kazi;",
            "Kuboresha maslahi ya watumishi sambamba na kuwajengea uwezo, ikiwemo vikundi, jumuiya na kamati mbalimbali za Usharika;",
            "Kuwa na mfumo wa usimamizi na utendaji kazi ambao utajumuisha usajili wa washarika na taarifa zao, usimamizi wa bajeti, mapato na matumizi, madeni, kutuma ujumbe mfupi kwa washarika ikiwemo na matangazo ya usharika na utoaji ripoti;",
            "Kuongeza na kusimamia ajira kwa vijana kwa njia mbalimbali hapa Usharikani.",
          ],
        },
      ],
    },
    {
      id: "malezi",
      title: "KAMATI YA MALEZI",
      subsections: [
        {
          title: "HUDUMA YA WATOTO",
          items: [
            "Kuendelea kukuza huduma ya watoto wa kuandaa semina mbalimbali, matamasha na ziara za kimafunzo kwa watoto;",
            "Kuimarisha huduma ya watoto kwa kuwapatia mafunzo walimu wa watoto elimu sahihi juu ya watoto",
            "Kuboresha makundi ya watoto kwa ngazi zote ili kutoa elimu iliyo sawa na inayohitajika kwa kila kundi/rika.",
          ],
        },
        {
          title: "HUDUMA YA VIJANA",
          items: [
            "Kukuza wigo wa vijana kuendelea kulipenda kanisa kwa kutoa fursa za kujiunga na huduma ya vijana usharikani;",
            "Kuandaa matamasha, michezo, mashindano, semina na ushiriki wao katika mambo mbalimbali ya kikanisa.",
          ],
        },
        {
          title: "HUDUMA YA WANAWAKE",
          items: [
            "Kuendelea kusimamia usafi na upambaji wa madhabahu na kanisa;",
            "Kuimarisha huduma ya wanawake kwa kuandaa semina mbalimbali na kushiriki ibada kwa ngazi zote, mashindano, semina na ushiriki wao katika mambo mbalimbali ya kikanisa.",
          ],
        },
        {
          title: "HUDUMA YA WANAUME",
          items: [
            "Kuendelea kusimamia zoezi la upatikanaji wa saruji kwa ajili ya ujenzi wa kanisa;",
            "Kuimarisha huduma ya wanaume kwa kuandaa semina mbalimbali za wanaume sambamba na ushiriki wa wanaume katika mipango mbalimbali ya Usharika.",
          ],
        },
      ],
    },
    {
      id: "afya",
      title: "KAMATI YA AFYA NA UDIAKONIA",
      items: [
        "Kubaini wahitaji katika ngazi ya usharika na jumuiya ili kuendelea kutoa msaada na uhitaji pale inapotakiwa;",
        "Kuhimarisha huduma ya Udiakonia kwa kubaini kazi zinazotendeka katika ngazi ya vikundi na Jumuiya ili kuweza kuziratibu vema;",
      ],
    },
    {
      id: "mazingira",
      title: "KAMATI YA MAZINGIRA",
      items: [
        "Kusimamia utunzaji wa mazingira kwa kuendelea kutoa elimu sambamba na kupanda miti",
      ],
    },
  ];
