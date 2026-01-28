// segments.js
// Angles are degrees where 0° is to the RIGHT (3 o’clock), 90° is DOWN.
// r0/r1 are ring bounds as a fraction of wheel radius (0 center → 1 edge).
//
// Edit these to match your wheel categories.
// Tip: Start broad (8–12 wedges), then refine later.

window.SEGMENTS = [
  // Example: outer ring wedges (r 0.70–1.00) split into 8 slices (45° each)
  // Adjust text + colors to match your wheel.

  { a0: 0,   a1: 45,  r0: 0.70, r1: 1.00, label: "Floral", legend: "Floral", color: "#d9a7ff",
    description: "Floral notes can feel like fresh flowers, dried petals, or perfumed aromatics.\nExamples to look for: jasmine, rose-like, lilac, lavender." },

  { a0: 45,  a1: 90,  r0: 0.70, r1: 1.00, label: "Fruity", legend: "Fruity", color: "#ffb3c7",
    description: "Fruity notes can be bright, juicy, or dried.\nExamples: citrus zest, stone fruit, berry, dried apricot/raisin." },

  { a0: 90,  a1: 135, r0: 0.70, r1: 1.00, label: "Vegetal / Green", legend: "Vegetal / Green", color: "#a7e6a2",
    description: "Vegetal notes often feel fresh, grassy, leafy, or seaweed-like.\nExamples: spinach, steamed greens, fresh-cut grass, nori." },

  { a0: 135, a1: 180, r0: 0.70, r1: 1.00, label: "Nutty / Cocoa", legend: "Nutty / Cocoa", color: "#c9a27f",
    description: "Nutty notes can feel toasted, creamy, or cocoa-like.\nExamples: almond, hazelnut, cocoa powder, praline." },

  { a0: 180, a1: 225, r0: 0.70, r1: 1.00, label: "Roasted / Toasted", legend: "Roasted / Toasted", color: "#b07a52",
    description: "Roasted notes come from heat-driven reactions.\nExamples: toast, roasted grain, caramelized sugar, smoky edges." },

  { a0: 225, a1: 270, r0: 0.70, r1: 1.00, label: "Spice", legend: "Spice", color: "#ffcf77",
    description: "Spice notes can be warm, sweet-spiced, or peppery.\nExamples: cinnamon, clove, pepper, anise." },

  { a0: 270, a1: 315, r0: 0.70, r1: 1.00, label: "Earthy / Woody", legend: "Earthy / Woody", color: "#b7c0a6",
    description: "Earthy notes can feel mineral, forest-floor, wood, or bark.\nExamples: wet stone, cedar, dried leaves, mushroomy hints." },

  { a0: 315, a1: 360, r0: 0.70, r1: 1.00, label: "Sweet / Vanilla", legend: "Sweet / Vanilla", color: "#ffe7a3",
    description: "Sweet notes can be honeyed, creamy, or vanilla-like.\nExamples: honey, vanilla, marshmallow, sugar cookie." },

  // Example: middle ring wedges (r 0.45–0.70), fewer/broader categories
  { a0: 0, a1: 120, r0: 0.45, r1: 0.70, label: "Fresh & Bright", legend: "Fresh & Bright", color: "#9fd8ff",
    description: "Use this for aromas/flavors that feel crisp, clean, high-toned, or zesty." },

  { a0: 120, a1: 240, r0: 0.45, r1: 0.70, label: "Warm & Round", legend: "Warm & Round", color: "#ffd1a6",
    description: "Use this for flavors that feel mellow, cozy, baked, honeyed, or creamy." },

  { a0: 240, a1: 360, r0: 0.45, r1: 0.70, label: "Deep & Earthy", legend: "Deep & Earthy", color: "#c7d0b8",
    description: "Use this for forest-floor, mineral, woody, aged, or fermented impressions." },

  // Example: inner ring (r 0.00–0.45) as a broad anchor
  { a0: 0, a1: 360, r0: 0.00, r1: 0.45, label: "Start Here", legend: "Start Here", color: "#e9e9e9",
    description: "Start broad, then move outward to get more specific.\nIf you’re unsure, stay with the broader category." }
];
