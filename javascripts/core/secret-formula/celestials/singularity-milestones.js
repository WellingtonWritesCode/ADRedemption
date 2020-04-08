"use strict";

GameDatabase.celestials.singularityMilestones = [
  // Infinite
  {
    id: 1,
    start: 1,
    repeat: 5,
    limit: 0,
    description: "Small continuum bonus",
    effect: completions => completions * 0.05,
    effectFormat: x => `+${format(x, 2, 2)}`
  },
  {
    id: 2,
    start: 2,
    repeat: 10,
    limit: 0,
    description: "Dark Matter production multiplier",
    effect: completions => Math.pow(1.5, completions),
    effectFormat: x => formatX(x, 2, 2)
  },
  {
    id: 3,
    start: 3,
    repeat: 30,
    limit: 0,
    description: "Dark Energy production multiplier",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2, 2)
  },
  {
    id: 4,
    start: 4,
    repeat: 40,
    limit: 0,
    description: "Dark Matter Dimension upgrades are cheaper",
    effect: completions => Math.pow(0.85, completions),
    effectFormat: x => formatPercents(1 - x)
  },
  {
    id: 5,
    start: 50,
    repeat: 1000,
    limit: 0,
    description: "You gain more singularities",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2, 0)
  },
  // Limited
  {
    id: 6,
    start: 8,
    repeat: 8,
    limit: 8,
    description: "Automatically creates a singularity after reaching a cap (with a delay)",
    effect: completions => [Infinity, 20, 15, 10, 5, 3, 2, 1, 0][completions],
    effectFormat: x => `${formatInt(x)}s`
  },
  {
    id: 7,
    start: 12,
    repeat: 40,
    limit: 5,
    description: "Dark Matter Dimension interval decrease",
    effect: completions => Math.pow(0.75, completions),
    effectFormat: x => formatX(x)
  },
  {
    id: 8,
    start: 30,
    repeat: 100,
    limit: 4,
    description: "Dark Matter Dimension autobuyers",
    effect: completions => completions,
    effectFormat: x => `Dimension ${x} autobuyer`
  },
  // TODO:
  {
    id: 9,
    start: 40,
    repeat: 8,
    limit: 8,
    description: "Annihilation autobuyer (with a delay)",
    effect: completions => [Infinity, 20, 15, 10, 5, 3, 2, 1, 0][completions],
    effectFormat: x => `${formatInt(x)}s`
  },
  // TODO:
  {
    id: 10,
    start: 250,
    repeat: 10,
    limit: 8,
    description: "Auto cap raiser (with a delay)",
    effect: completions => [Infinity, 20, 15, 10, 5, 3, 2, 1, 0][completions],
    effectFormat: x => `${formatInt(x)}s`
  },
  // Unique
  {
    id: 11,
    start: 10,
    repeat: 0,
    limit: 1,
    description: "Tesseracts boost Dark Energy and Dark Matter production",
    effect: () => Math.pow(1.25, player.celestials.enslaved.tesseracts),
    effectFormat: x => formatX(x)
  },
  {
    id: 12,
    start: 100,
    repeat: 0,
    limit: 1,
    description: "Singularities improve the DT multiplier upgrade",
    effect: () => 1 + Math.log10(player.celestials.laitela.singularities) / 21,
    effectFormat: x => formatX(x)
  },
  {
    id: 13,
    start: 1000,
    repeat: 0,
    limit: 1,
    description: "Highest glyph level boosts Dark Energy and Dark Matter production",
    effect: () => Math.max(1, (player.bestGlyphLevel - 10000) / 1000),
    effectFormat: x => formatX(x)
  },
  {
    id: 14,
    start: 1e4,
    repeat: 0,
    limit: 1,
    description: "Singularities boost Alchemy Momentum buildup speed",
    effect: () => Math.pow(Math.log10(player.celestials.laitela.singularities), 3),
    effectFormat: x => formatX(x)
  },
  {
    id: 15,
    start: 1e5,
    repeat: 0,
    limit: 1,
    description: "Annihilation boosts dark energy and dark matter production",
    effect: () => Math.log10(Laitela.darkMatterMult),
    effectFormat: x => formatX(x)
  },
  {
    id: 16,
    start: 1e6,
    repeat: 0,
    limit: 1,
    description: "Singularities boosts Annihilation modifier",
    effect: () => Math.log10(player.celestials.laitela.singularities),
    effectFormat: x => formatX(x)
  },
  {
    id: 17,
    start: 1e7,
    repeat: 0,
    limit: 1,
    description: "Gamespeed boosts dark energy and dark matter production",
    effect: () => Math.max(Math.log10(getGameSpeedupFactor()) / 10 - 20, 1),
    effectFormat: x => formatX(x)
  },
  {
    id: 18,
    start: 1e8,
    repeat: 0,
    limit: 1,
    description: "Singularities boost glyph level",
    effect: () => 1 + Math.log10(player.celestials.laitela.singularities) / 20,
    effectFormat: x => formatX(x)
  },
  {
    id: 19,
    start: 1e9,
    repeat: 0,
    limit: 1,
    description: "DT boosts dark energy and dark matter production",
    effect: () => Math.pow(2, Decimal.log10(player.dilation.dilatedTime) / 1000),
    effectFormat: x => formatX(x)
  },
  {
    id: 20,
    start: 1e10,
    repeat: 0,
    limit: 1,
    description: "Singularities make tesseracts stronger",
    effect: () => 1 + Math.log10(player.celestials.laitela.singularities) / 10,
    effectFormat: x => formatX(x)
  }
];
