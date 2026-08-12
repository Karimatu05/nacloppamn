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
    slug: "introduction",
    number: 1,
    title: "Introduction to Clove Production",
    summary:
      "The economic and medicinal importance of cloves, major producing regions, and market value.",
    objectives: [
      "Understand the importance of cloves economically and medicinally.",
      "Identify major clove-producing regions.",
      "Explain the uses and market value of cloves.",
    ],
    theory: [
      "Clove (Syzygium aromaticum) is a perennial evergreen tree belonging to the family Myrtaceae. The dried unopened flower buds, known as cloves, are widely used as a spice.",
      "Cloves are used in traditional medicine, pharmaceuticals, cosmetics, and food processing industries.",
      "They are highly valued for their strong aroma, antiseptic properties, and export potential.",
      "Major global producers include Indonesia, Madagascar, Tanzania, Sri Lanka, and India. Cloves are native to Indonesia and the Spice Islands.",
      "With suitable agro-ecological conditions, clove production offers long-term income opportunities for farmers.",
    ],
    practicals: [
      "Display fresh and dried clove buds for identification.",
      "Group discussion on local and international uses of cloves.",
      "Market survey exercise covering prices, buyers, and demand.",
    ],
  },
  {
    slug: "botany-and-growth",
    number: 2,
    title: "Botany and Growth Requirements of Clove",
    summary: "The clove plant, its growth stages, and the climatic and soil conditions it needs.",
    objectives: [
      "Describe the clove plant and its growth stages.",
      "Identify suitable climatic and soil conditions.",
    ],
    theory: [
      "Clove trees grow up to 10–15 m tall and start bearing flowers after 5–7 years.",
      "Climate: warm, humid tropical climate.",
      "Rainfall: 1,500–2,500 mm annually, well distributed.",
      "Temperature: 20–30°C.",
      "Soil: deep, well-drained loamy soils rich in organic matter, with a slightly acidic to neutral pH of 5.5–7.0.",
    ],
    practicals: [
      "Field identification of suitable land.",
      "Soil texture testing using the hand-feel method.",
      "Demonstration of soil pH testing.",
    ],
  },
  {
    slug: "site-selection",
    number: 3,
    title: "Site Selection and Land Preparation",
    summary: "How to select a productive site and prepare the land before planting.",
    objectives: ["Select appropriate sites for clove farming.", "Prepare land for planting."],
    theory: [
      "Proper site selection is critical for long-term productivity.",
      "The site should have good drainage, a gentle slope, and protection from strong winds.",
      "Land preparation involves clearing, stumping, ploughing where applicable, and pegging planting positions.",
    ],
    practicals: [
      "Land inspection and slope assessment.",
      "Pegging and spacing demonstration (6 m × 6 m or 7 m × 7 m).",
      "Digging planting holes (60 × 60 × 60 cm).",
    ],
  },
  {
    slug: "nursery-management",
    number: 4,
    title: "Nursery Management and Propagation",
    summary: "Establishing a clove nursery, seed selection, sowing techniques, and seedling care.",
    objectives: [
      "Establish and manage a clove nursery.",
      "Apply proper seed selection and sowing techniques.",
    ],
    theory: [
      "Cloves are propagated mainly by seeds. Seeds must be fresh, viable, and sourced from healthy mother trees, as they lose viability quickly.",
      "Sow seeds lightly on a well-draining, moist soil surface — do not bury them. Germination takes 6–8 weeks.",
      "Nursery care: partial shade (shade net), high humidity, temperatures of 21–30°C, and damp but never waterlogged soil.",
      "Seedlings are ready for transplanting after 18–24 months. Vegetative propagation through cuttings, grafting, or layering is less common and mostly used for commercial clones.",
    ],
    practicals: [
      "Selection of viable clove seeds.",
      "Nursery bed or polybag preparation.",
      "Seed sowing and watering techniques.",
      "Seedling care and grading.",
    ],
  },
  {
    slug: "transplanting",
    number: 5,
    title: "Transplanting and Field Establishment",
    summary: "Timing and technique for transplanting seedlings into a healthy plantation.",
    objectives: ["Transplant seedlings correctly.", "Establish healthy clove plantations."],
    theory: [
      "Transplanting should be done at the onset of the rainy season to reduce moisture stress.",
      "Seedlings should be handled carefully to avoid root damage. Mulching and temporary shade improve survival rates.",
    ],
    practicals: [
      "Correct seedling removal from the nursery.",
      "Planting depth demonstration.",
      "Mulching using organic materials.",
      "Installation of temporary shade.",
    ],
  },
  {
    slug: "field-management",
    number: 6,
    title: "Field Management Practices",
    summary: "Weeding, fertilizer, mulching, and pruning for optimum growth.",
    objectives: ["Apply good agronomic practices for optimum growth."],
    theory: [
      "Weeding: young plantations (0–3 years) every 6–8 weeks; matured plantations (4+ years) every 3–4 months. Use manual hoeing or slashing and avoid deep hoeing to prevent root damage.",
      "Fertilizer: organic manure at 5–10 kg per tree annually; NPK (15:15:15) at 100 g, 200 g, and 300 g for years 1, 2, and 3; UREA 100–200 g per tree to boost vegetative growth.",
      "Mulching conserves moisture and improves soil fertility: 8–10 cm thick within a 1–1.5 m radius of the tree base, kept 15–20 cm away from the stem to prevent rot.",
      "Pruning: remove dead or diseased branches once or twice per year.",
    ],
    practicals: [
      "Fertilizer application methods.",
      "Mulching and pruning demonstrations.",
      "Growth monitoring and record keeping.",
    ],
  },
  {
    slug: "pest-and-disease",
    number: 7,
    title: "Pest and Disease Management",
    summary: "Identifying major pests and diseases and applying integrated pest management.",
    objectives: [
      "Identify major pests and diseases.",
      "Apply integrated pest management strategies.",
    ],
    theory: [
      "Common challenges include stem borers, leaf miners, fungal leaf spots, and root rot.",
      "Integrated Pest Management (IPM) combining cultural, biological, and chemical control is recommended.",
    ],
    practicals: [
      "Identification of pest and disease symptoms.",
      "Preparation and safe application of control measures.",
      "Demonstration of sanitation practices.",
    ],
  },
  {
    slug: "harvesting",
    number: 8,
    title: "Harvesting and Post-Harvest Handling",
    summary: "Correct harvest stage, drying methods, packaging, and storage.",
    objectives: [
      "Harvest cloves at the correct stage.",
      "Apply proper drying and storage methods.",
    ],
    theory: [
      "Cloves are harvested when flower buds turn from green to pink but before opening. Harvesting is usually done by hand.",
      "Proper drying reduces moisture to about 10–12% to maintain quality.",
    ],
    practicals: [
      "Identification of mature buds.",
      "Harvesting techniques using hands or tools.",
      "Sun-drying and moisture assessment.",
      "Packaging and storage demonstration.",
    ],
  },
  {
    slug: "marketing",
    number: 9,
    title: "Marketing, Value Addition and Record Keeping",
    summary: "Marketing channels, value addition, and basic farm record keeping.",
    objectives: [
      "Understand clove marketing channels.",
      "Practice basic farm record keeping.",
    ],
    theory: [
      "Cloves can be sold fresh or dried.",
      "Value addition includes grinding, oil extraction, and packaging.",
      "Record keeping enhances profitability and access to credit.",
    ],
    practicals: [
      "Simple cost–benefit analysis exercise.",
      "Market linkage discussions.",
      "Farm record book preparation.",
    ],
  },
  {
    slug: "health-and-safety",
    number: 10,
    title: "Health, Safety and Environmental Considerations",
    summary: "Safe agricultural practices, protective equipment, and environmental sustainability.",
    objectives: ["Apply safe agricultural practices.", "Promote environmental sustainability."],
    theory: [
      "Farmers should use protective equipment (PPE).",
      "Agrochemicals must be handled and applied safely.",
      "Adopt climate-smart practices such as mulching and agroforestry.",
    ],
    practicals: [
      "Demonstration of personal protective equipment (PPE).",
      "Waste disposal practices.",
      "Environmental conservation practices.",
    ],
  },
];
