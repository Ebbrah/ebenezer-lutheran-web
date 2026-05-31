export type PersonEntry = {
  name: string;
  role?: string;
  /** Picha ya pasipoti (njia kutoka `public/`, k.m. `/images/people/john-doe.jpg`) */
  photoSrc?: string;
};

export type BarazaMember = {
  name: string;
  photoSrc?: string;
};

export type BarazaJumuiyaGroup = {
  jumuiya: string;
  members: readonly BarazaMember[];
};

/** Mzee wa Baraza ↔ Jumuiya */
export const barazaRows = [
  { mzee: "Afity Nkoo", jumuiya: "Bethlehemu" },
  { mzee: "Sara Mazege", jumuiya: "Bethlehemu" },
  { mzee: "Anitha Mutabuzi", jumuiya: "Bethlehemu" },
  { mzee: "Debora Munna", jumuiya: "Calvary" },
  { mzee: "Gilson Rujabuka", jumuiya: "Calvary" },
  { mzee: "Anastazia Mkumbo", jumuiya: "Ebenezer" },
  { mzee: "Leonald Akyoo", jumuiya: "Ebenezer" },
  { mzee: "Jonaphry Rwabagabo", jumuiya: "Ebenezer" },
  { mzee: "Steven Biko", jumuiya: "Ebenezer" },
  { mzee: "Humphrey Msulwa", jumuiya: "Elshadai A" },
  { mzee: "Baraka Mahenge", jumuiya: "Elshadai B" },
  { mzee: "Carle Lyimo", jumuiya: "Elshadai B" },
  { mzee: "Titus Mkapa", jumuiya: "Elshadai B" },
  { mzee: "Jonas Makyara", jumuiya: "Elshadai C" },
  { mzee: "Kwame Temu", jumuiya: "Elshadai C" },
  { mzee: "Wellu Kizinga", jumuiya: "Elshadai C" },
  { mzee: "Dorothea Badili", jumuiya: "Elshadai D" },
  { mzee: "Furaha Nziku", jumuiya: "Elshadai D" },
  { mzee: "Novatus Msemwa", jumuiya: "Elshadai D" },
  { mzee: "John Mduma", jumuiya: "Elshadai D" },
  { mzee: "Lilian Minja", jumuiya: "Emmanuel" },
  { mzee: "Faraja Kulanga", jumuiya: "Emmanuel" },
  { mzee: "Juliana Swai", jumuiya: "Galilaya" },
  { mzee: "Grace Gasper", jumuiya: "Galilaya" },
  { mzee: "Jane Nyagawa", jumuiya: "Galilaya" },
  { mzee: "Anna Swai", jumuiya: "Galilaya" },
  { mzee: "Shabil Mwantaje", jumuiya: "Galilaya" },
  { mzee: "Linda Ngusulu", jumuiya: "Galilaya" },
  { mzee: "Martha Mtinangi", jumuiya: "Galilaya" },
  { mzee: "Richard Shaba", jumuiya: "Galilaya" },
  { mzee: "Kedmund Malima", jumuiya: "Galilaya" },
  { mzee: "Josephat Nkya", jumuiya: "Kanaani" },
  { mzee: "Lameck Kipyali", jumuiya: "Kanaani" },
  { mzee: "David Mwamwala", jumuiya: "Nazareth" },
  { mzee: "Witnes Mchome", jumuiya: "Nazareth" },
  { mzee: "Daniel Mungule", jumuiya: "Samaria" },
  { mzee: "Henry Nyomeye", jumuiya: "Samaria" },
  { mzee: "Adam Msendo", jumuiya: "Sayuni" },
  { mzee: "Edmund Mugasha", jumuiya: "Sayuni" },
  { mzee: "Ester Ryoba", jumuiya: "Yerusalemu" },
] as const;

function groupBarazaByJumuiya(
  rows: readonly { mzee: string; jumuiya: string }[],
): BarazaJumuiyaGroup[] {
  const order: string[] = [];
  const map = new Map<string, BarazaMember[]>();

  for (const row of rows) {
    if (!map.has(row.jumuiya)) {
      order.push(row.jumuiya);
      map.set(row.jumuiya, []);
    }
    map.get(row.jumuiya)!.push({ name: row.mzee });
  }

  return order.map((jumuiya) => ({
    jumuiya,
    members: map.get(jumuiya)!,
  }));
}

export const barazaByJumuiya: readonly BarazaJumuiyaGroup[] =
  groupBarazaByJumuiya(barazaRows);

export const barazaMemberCount = barazaByJumuiya.reduce(
  (sum, group) => sum + group.members.length,
  0,
);

/** Orodha tambarare — inatumika pale ambapo jumuiya haihitajiki */
export const barazaMembers: PersonEntry[] = barazaByJumuiya.flatMap((group) =>
  group.members.map((member) => ({
    name: member.name,
    role: group.jumuiya,
  })),
);

export const jumuiyaRows = [
  { no: 1, name: "Bethlehem", chair: "Sarah Mazege", wazee: "Anita Mutabuzi, Pili Mazege" },
  { no: 2, name: "Calvary", chair: "Godray Rujabuka", wazee: "Debora Munna, Gilson Rujabuka" },
  { no: 3, name: "Ebenezer", chair: "Silver", wazee: "Anastasia Njiku, Leonald Akyoo" },
  { no: 4, name: "Elishadai A", chair: "Emmanuel Mwakalasya", wazee: "Humphrey Msulwa" },
  { no: 5, name: "Elishadai B", chair: "Baraka Mahenge", wazee: "Titus Mkapa, Carle Lyimo" },
  { no: 6, name: "Elishadai C", chair: "Immanuel Moshi", wazee: "Jonas Makyara" },
  { no: 7, name: "Elishadai D", chair: "Nakembetwa Marco", wazee: "Novatus Msemwa, Furaha Nziku" },
  { no: 8, name: "Emmanuel", chair: "Glory Massery", wazee: "Faraja Kulanga" },
  { no: 9, name: "Galilaya", chair: "Linda Ngusulu", wazee: "Anna Swai, Kedmon Malima" },
  { no: 5, name: "Kanaani", chair: "Ceslia Msaki", wazee: "Josephat Nkya, Lameck Kipyali" },
  { no: 6, name: "Nazareth", chair: "Prisca Mnguu", wazee: "David Mwamwala, Witnes Mchome" },
  { no: 7, name: "Samaria", chair: "Clara Chikaka", wazee: "Daniel Mungule, Henry Nyomeye" },
  { no: 8, name: "Sayuni", chair: "Raphael Mlumba", wazee: "Edmund Mugasha, Adam Msendo" },
  { no: 9, name: "Yerusalemu Mpya", chair: "Ibrahim Mwandu", wazee: "Ester Ryoba" },
] as const;

export const kamatiTendajiMembers: PersonEntry[] = [
  {
    name: "Grace Mbata",
    role: "Mchungaji Kiongozi",
  },
  {
    name: "Judith Moshi",
    role: "Mwinjilisti wa Usharika",
  },
  {
    name: "Anna S. Ndosi",
    role: "Katibu wa Baraza la Wazee",
  },
  {
    name: "Baraka Mahenge",
    role: "Katibu Msaidizi wa Baraza la Wazee",
  },
  {
    name: "Welu Kizinga",
    role: "M/Kiti wa Uinjilisti, Misioni na Uwakili",
  },
  {
    name: "Edmund Mugasha",
    role: "M/Kiti wa Mipango, Uchumi na Utawala",
  },
  { name: "Daniel Mungure", role: "M/Kiti wa Fedha" },
  { name: "Anastazia Njiku", role: "M/Kiti wa Malezi" },
  { name: "Carle Lyimo", role: "M/Kiti wa Afya na Udiakonia" },
  { name: "Adam Msendo", role: "M/Kiti wa Mazingira" },
  {
    name: "Debora Daudi",
    role: "Mtunza Hazina wa Usharika",
  },
 
];

export const vikundiList = [
  "Wanawake",
  "Wanaume",
  "Vijana",
  "Praise team",
  "Kwaya ya Umoja",
  "Tehama",
] as const;

export const pastor: PersonEntry = {
  name: "Mch. Grace Mbata",
  role: "Mchungaji wa Usharika",
};

/** Watumishi wa Usharika — orodha rasmi */
export const watumishiWaUsharika: PersonEntry[] = [
  { name: "Mch. Grace Mbata", role: "Mchungaji wa Usharika" },
  { name: "Mwinj. Judith Moshi", role: "Mwinjilisti wa Usharika" },
  { name: "Debora Daudi", role: "Mtunza Hazina" },
  { name: "Israel Mandi", role: "Mwinjilisti - Solowu" },
  { name: "Elias Chaula", role: "Mwinjilisti - Mtungutu" },
  { name: "Neema Kimbisa", role: "Mhudumu wa Madhabahu" },
  { name: "John Mduma", role: "Mtunza Stoo" },
  { name: "Amani Hassani", role: "Mpiga vyombo" },
];
