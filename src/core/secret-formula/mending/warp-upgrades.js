import { DC } from "../../constants";

const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.mending.warpRebuyables[props.id],
    1e30,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E309,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect, effectType } = props;
  props.effect = () =>{ 
    if (props.effectType === "+" || props.effectType === "-"){
      return effect * player.mending.warpRebuyables[props.id];
    }
    return Math.pow(effect, player.mending.warpRebuyables[props.id]);
  };
  props.description = () => props.textTemplate.replace("{value}",formatInt(effect));
  if (!props.noEffect) {
    props.formatEffect = value => formatX(value, 2, 0);
    props.formatCost = value => format(value, 2, 0);
  }
  return props;
};


export const warpUpgrades = [
  rebuyable({
    name: "More Infinite Power",
    id: 1,
    initialCost: 1e300,
    costMult: 30,
    textTemplate: "Infinity power softcap reduction",
    effect: 0.002,
    noEffect: true
  }),
  rebuyable({
    name: "Warp Upgrade 2",
    id: 2,
    initialCost: 1e300,
    costMult: 30,
    textTemplate: "[TBD]",
    effect: 1,
    effectType: "×"
  }),
  rebuyable({
    name: "Warp Upgrade 3",
    id: 3,
    initialCost: 1e300,
    costMult: 30,
    textTemplate: "[TBD]",
    effect: 1,
    effectType: "×"
  }),
  {
    name: "Visible Galaxies",
    id: 4,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Obscure galaxy polynomial level -${formatInt(1)}`,
  },
  {
    name: "Warp Upgrade 5",
    id: 5,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption+",
    id: 6,
    cost: 1e300,
    requirement: "Mend with an average corruption level of 6 or higher",
    hasFailed: () => !player.mending.corruptionChallenge.corruptedMend || !player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 6,
    checkRequirement: () => player.mending.corruptionChallenge.corruptedMend && player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 6,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Corruption caps +${formatInt(1)}`,
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 7",
    id: 7,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 8",
    id: 8,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 9",
    id: 9,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Visible Galaxies",
    id: 10,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Obscure galaxy polynomial level -${formatInt(1)}`,
  },
  {
    name: "Noticeable Galaxies",
    id: 11,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Obscure galaxy polynomial level -${formatInt(1)}`,
  },
  {
    name: "Corruption++",
    id: 12,
    cost: 1e300,
    requirement: "Mend with an average corruption level of 8 or higher",
    hasFailed: () => !player.mending.corruptionChallenge.corruptedMend || !player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 8,
    checkRequirement: () => player.mending.corruptionChallenge.corruptedMend && player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 8,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Corruption caps +${formatInt(1)}`,
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  /*
  {
    name: "Warp Upgrade 13",
    id: 13,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 14",
    id: 14,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Corruption+",
    id: 15,
    cost: 1e300,
    requirement: "Mend with an average corruption level of 6 or higher",
    hasFailed: () => !player.mending.corruptionChallenge.corruptedMend || !player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 6,
    checkRequirement: () => player.mending.corruptionChallenge.corruptedMend && player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 6,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Corruption caps +${formatInt(1)}`,
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 16",
    id: 16,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 17",
    id: 17,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 18",
    id: 18,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 19",
    id: 19,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 20",
    id: 20,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 21",
    id: 21,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 22",
    id: 22,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Warp Upgrade 23",
    id: 23,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Noticeable Galaxies",
    id: 24,
    cost: 1e300,
    requirement: "Wait 5 Hours [NYI]",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Obscure galaxy polynomial level -${formatInt(1)}`,
  },
  {
    name: "Corruption++",
    id: 25,
    cost: 1e300,
    requirement: "Mend with an average corruption level of 8 or higher",
    hasFailed: () => !player.mending.corruptionChallenge.corruptedMend || !player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 8,
    checkRequirement: () => player.mending.corruptionChallenge.corruptedMend && player.mending.corruption.reduce((partialSum, a) => partialSum + a, 0) >= 8,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "gain a Replicanti Galaxy",
    description: () => `Corruption caps +${formatInt(1)}`,
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  }, */
];
