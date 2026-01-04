export const places = [
  // Bon! Coffee
  [69.2810, 41.3118],

  // Socials Coffee
  [69.2829, 41.3126],

  // Black Bear Kofi
  [69.2767, 41.3139],

  // Coffee Nation
  [69.2794, 41.3096],

  // B&B Coffee House
  [69.2748, 41.3152],

  // Breadly (coffee + bakery)
  [69.2841, 41.3101],

  // Cafe Dudek
  [69.2872, 41.3119],

  // Bon Cafe (Chilonzor)
  [69.2049, 41.2758],

  // Coffee Bean Tashkent
  [69.2608, 41.2971],

  // Shox Coffee
  [69.2524, 41.2996],

  // Cafe Navvat
  [69.2713, 41.3122],

  // Minor Coffee
  [69.2947, 41.3229],

  // Coffee Lab
  [69.2891, 41.3183],

  // Istanbul Cafe & Coffee
  [69.2338, 41.2854],

  // Cafe Basilic
  [69.2665, 41.3088],
].map(([longitude, latitude], i) => ({
  id: `${i}`,
  longitude,
  latitude,
}));
