export type LeadershipTreeNode = {
  label: string;
  href?: string;
  children?: readonly LeadershipTreeNode[];
};

/** Muundo wa uongozi — kutoka Mkutano Mkuu hadi matawi ya Kamati ya Utendaji */
export const leadershipStructure: readonly LeadershipTreeNode[] = [
  {
    label: "MKUTANO MKUU",
  },
  {
    label: "BARAZA LA WAZEE",
    href: "/uongozi/baraza",
  },
  {
    label: "KAMATI YA UTENDAJI",
    href: "/uongozi/kamati",
    children: [
      {
        label: "UINJILISTI MISIONI NA UWAKILI",
        href: "/uongozi/kamati",
        children: [
          { label: "Jumuiya", href: "/uongozi/jumuiya" },
          { label: "Praise Team", href: "/uongozi/vikundi/praise-team" },
          { label: "Kwaya", href: "/uongozi/vikundi/kwaya" },
        ],
      },
      {
        label: "MIPANGO UCHUMI NA UTAWALA",
        href: "/uongozi/kamati",
        children: [{ label: "Tehama", href: "/uongozi/vikundi/tehama" }],
      },
      { label: "FEDHA", href: "/uongozi/kamati" },
      {
        label: "MALEZI",
        href: "/uongozi/kamati",
        children: [
          { label: "Vijana", href: "/uongozi/vikundi/vijana" },
          { label: "Wanawake", href: "/uongozi/vikundi/wanawake" },
          { label: "Wanaume", href: "/uongozi/vikundi/wanaume" },
          { label: "Watoto", href: "/uongozi/vikundi/vijana" },
        ],
      },
      { label: "AFYA NA UDIAKONIA", href: "/uongozi/kamati" },
      { label: "MAZINGIRA", href: "/uongozi/kamati" },
    ],
  },
];
