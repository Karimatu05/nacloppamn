export type Module = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  objectives: string[];
  theory: string[];
  practicals: string[];
};

export const modules: Module[] = [
  {
    slug: "gabatarwa",
    number: 1,
    title: "Gabatarwa kan Noman Clove",
    summary:
      "Muhimmancin clove a tattalin arziki da magani, manyan kasashen da ke nomansa, da darajar kasuwarsa.",
    objectives: [
      "Fahimtar muhimmancin clove a bangaren tattalin arziki da magani.",
      "Gano manyan kasashen da ke noman clove.",
      "Bayyana amfani da darajar kasuwar clove.",
    ],
    theory: [
      "Clove (Syzygium aromaticum) itace ce mai kore wadda ba ta faduwa ganye. Ana amfani da furenta wanda bai bude ba bayan an busar da shi a matsayin kayan yaji.",
      "Ana amfani da shi a magungunan gargajiya, masana'antar magani, kayan kwalliya da sarrafa abinci.",
      "Yana da daraja saboda kamshinsa mai karfi, karfinsa wajen kashe kwayoyin cuta, da yiwuwar fitar da shi zuwa kasashen waje.",
      "Manyan kasashen da ke samar da shi: Indonesia, Madagascar, Tanzania, Sri Lanka da India.",
      "A wuraren da yanayi da kasa suka dace, noman clove na iya zama hanyar samun kudin shiga na dogon lokaci ga manoma.",
    ],
    practicals: [
      "Nuna clove sabo da busasshe domin a gane shi.",
      "Tattaunawar rukuni kan yadda ake amfani da clove a gida da kasashen waje.",
      "Binciken kasuwa domin gano farashi da bukata.",
    ],
  },
  {
    slug: "tsirin-clove",
    number: 2,
    title: "Tsarin Tsiron Clove da Bukatun Girma",
    summary: "Siffar bishiyar clove, matakan girma, da irin yanayi da kasa da suka dace.",
    objectives: [
      "Bayyana siffar bishiyar clove da matakan girma.",
      "Gane irin yanayi da kasa da suka dace da noman clove.",
    ],
    theory: [
      "Bishiyar clove na iya kaiwa tsayin mita 10 zuwa 15, kuma yawanci tana fara bada fure bayan shekaru 5 zuwa 7.",
      "Yanayi: yanayi mai dumi da danshi na yankin tropics.",
      "Ruwan sama: 1500 zuwa 2500 mm a shekara, yana rarrabuwa daidai.",
      "Zafin jiki: 20 zuwa 30°C.",
      "Kasa: kasa mai zurfi wadda ruwa baya tsayawa a ciki kuma tana dauke da sinadaran gina jiki (organic matter). pH: 5.5 zuwa 7.0.",
    ],
    practicals: [
      "Gano kasa mai dacewa da noman clove.",
      "Gwajin kasa da hannu domin gane yanayinta.",
      "Nuna yadda ake gwajin pH na kasa.",
    ],
  },
  {
    slug: "zaben-wuri",
    number: 3,
    title: "Zaben Wuri da Shirya Kasa",
    summary: "Yadda ake zabar wuri mai kyau da shirya kasa kafin dasawa.",
    objectives: ["Zabar wurin da ya dace da noman clove.", "Shirya kasa kafin a fara shuka."],
    theory: [
      "Zaben wuri mai kyau yana da muhimmanci domin samun amfanin gona mai yawa.",
      "Wurin ya kamata ya zubar da ruwa da kyau, ya kasance da dan gangare, kuma yana da kariya daga iska mai karfi.",
      "Shirya kasa ya hada da share ciyawa, cire tushen itatuwa, noma kasa idan ya zama dole, da sanya alamun wurin dasawa.",
    ],
    practicals: [
      "Duba kasa da gangarenta.",
      "Nuna yadda ake auna tazara tsakanin tsirrai (6m × 6m ko 7m × 7m).",
      "Haka ramukan dasa tsiro (60 × 60 × 60 cm).",
    ],
  },
  {
    slug: "nursery",
    number: 4,
    title: "Kula da Nursery da Yawaitar Tsirrai",
    summary: "Kafa nursery na clove, zabar iri mai kyau da kula da tsiro.",
    objectives: [
      "Kafa nursery na clove.",
      "Amfani da hanyoyin zabar iri da shuka su yadda ya dace.",
    ],
    theory: [
      "Yawanci ana yawaita clove ta hanyar iri. Irin ya kamata ya kasance sabo, mai kyau, kuma daga itacen uwa mai lafiya.",
      "Ayyukan nursery sun hada da samar da inuwa, ban ruwa akai-akai, da kariya daga kwari.",
      "Tsiron clove yana shirye a dasa shi a gona bayan watanni 18 zuwa 24.",
    ],
    practicals: [
      "Zabar irin clove mai kyau.",
      "Shirya gadon nursery ko polybag.",
      "Shuka iri da ban ruwa.",
      "Kula da tsiro yayin girma.",
    ],
  },
  {
    slug: "dasawa",
    number: 5,
    title: "Dasawa a Gona",
    summary: "Lokaci da hanyar dasa tsiron clove domin gonar clove mai lafiya.",
    objectives: ["Dasa tsiron clove yadda ya dace.", "Kafa gonar clove mai lafiya."],
    theory: [
      "Ya fi kyau a dasa tsiron clove a farkon damina domin rage wahalar bushewar kasa.",
      "Lokacin dasawa: a kula da tushen tsiro kada ya lalace, a rufe kasa da ciyawa ko ganyaye (mulching), a samar da inuwa ta wucin gadi.",
    ],
    practicals: [
      "Cire tsiro daga nursery yadda ya dace.",
      "Nuna zurfin da ya dace a dasa tsiro.",
      "Yin mulching da kayan halitta.",
      "Kafa inuwa ta wucin gadi.",
    ],
  },
  {
    slug: "kula-da-gona",
    number: 6,
    title: "Kula da Gonar Clove",
    summary: "Yanke ciyawa, taki, mulching da gyaran reshe domin kyakkyawan girma.",
    objectives: [
      "Amfani da ingantattun hanyoyin kula da gonar clove domin samun kyakkyawan girma.",
    ],
    theory: [
      "Yanke ciyawa: gonar sabuwa (shekaru 0–3) duk bayan makonni 6 zuwa 8; gonar manya (shekaru 4 zuwa sama) duk bayan watanni 3 zuwa 4.",
      "Taki: taki na gargajiya 5–10 kg a kowace bishiya a shekara, NPK (15:15:15) a matakai daban-daban, da UREA domin kara girman ganye.",
      "Mulching yana taimaka wajen rike danshi da kara karfin kasa.",
      "Gyaran reshe: cire rassan da suka mutu ko suka kamu da cuta.",
    ],
    practicals: [
      "Nuna yadda ake sanya taki.",
      "Nuna yadda ake mulching da pruning.",
      "Lura da girman bishiyoyi da rubuta bayanai.",
    ],
  },
  {
    slug: "kwari-da-cututtuka",
    number: 7,
    title: "Sarrafa Kwari da Cututtuka",
    summary: "Gano manyan kwari da cututtukan clove da amfani da IPM.",
    objectives: ["Gano manyan kwari da cututtukan clove.", "Amfani da hanyoyin sarrafa su."],
    theory: [
      "Matsalolin da ke addabar clove sun hada da stem borers, leaf miners, fungal leaf spots da root rot.",
      "Ana ba da shawarar amfani da Integrated Pest Management (IPM) wanda ya hada hanyoyin gargajiya, halittu da magungunan kwari.",
    ],
    practicals: [
      "Gano alamun kwari da cututtuka.",
      "Hada magungunan kariya.",
      "Nuna hanyoyin tsaftace gona.",
    ],
  },
  {
    slug: "girbi",
    number: 8,
    title: "Girbi da Bayan Girbi",
    summary: "Lokacin girbi, hanyoyin busarwa, marufi da adanawa.",
    objectives: ["Girbe clove a lokacin da ya dace.", "Amfani da hanyoyin busarwa da adanawa."],
    theory: [
      "Ana girbin clove lokacin da furensa ya canza daga kore zuwa ruwan hoda amma bai bude ba. Yawanci ana girbe shi da hannu.",
      "Busarwa mai kyau tana rage danshi zuwa kusan kashi 10 zuwa 12 domin kare ingancinsa.",
    ],
    practicals: [
      "Gano furanni da suka kai girbi.",
      "Nuna yadda ake girbi.",
      "Busar da shi a rana.",
      "Marufi da adanawa.",
    ],
  },
  {
    slug: "kasuwanci",
    number: 9,
    title: "Kasuwanci da Rikodi",
    summary: "Hanyoyin sayarwa, kara daraja, da rubuta bayanan gona.",
    objectives: ["Fahimtar hanyoyin sayar da clove.", "Koyon yadda ake rubuta bayanan gona."],
    theory: [
      "Ana iya sayar da clove sabo ko busasshe.",
      "Ana iya kara masa daraja ta hanyar nika shi ya zama foda, cire man clove, da yin marufi.",
      "Rubuta bayanan gona yana taimaka wa manoma su san ribarsu kuma yana saukaka samun rance.",
    ],
    practicals: [
      "Lissafin kudin shiga da fita.",
      "Tattaunawa kan kasuwa.",
      "Shirya littafin rikodin gona.",
    ],
  },
  {
    slug: "lafiya-da-tsaro",
    number: 10,
    title: "Lafiya da Tsaro",
    summary: "Noma mai tsaro, kayan kariya, da kare muhalli.",
    objectives: ["Amfani da hanyoyin noma masu tsaro.", "Kare muhalli."],
    theory: [
      "Manoma su yi amfani da kayan kariya (PPE).",
      "Su kula da yadda ake amfani da magungunan gona.",
      "Su yi amfani da dabarun noma masu kare muhalli kamar mulching da agroforestry.",
    ],
    practicals: [
      "Nuna kayan kariya (PPE).",
      "Hanyoyin zubar da shara.",
      "Hanyoyin kare muhalli.",
    ],
  },
];
