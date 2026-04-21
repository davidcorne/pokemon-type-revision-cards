import { B as attr, V as escape_html, X as fallback, i as bind_props, l as stringify, n as attr_class, o as ensure_array_like, r as attr_style, u as html } from "../../chunks/dev.js";
//#region src/icons/normal.svg?raw
var normal_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#A8A878\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#A8A878\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"50\" fill=\"none\" stroke=\"#A8A878\" stroke-width=\"3\"/>\n</svg>";
//#endregion
//#region src/icons/fire.svg?raw
var fire_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#F08030\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#F08030\"/>\n  <path d=\"M96 50 L110 75 L95 75 L105 90 L80 90 L90 110 L65 130 L85 110 L70 110 L80 90 L55 90 L65 75 L50 75 Z\" fill=\"#FFE8CC\"/>\n</svg>";
//#endregion
//#region src/icons/water.svg?raw
var water_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#6890F0\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#6890F0\"/>\n  <path d=\"M75 60 Q70 75 75 85 Q85 95 96 95 Q107 95 117 85 Q122 75 117 60 Q107 50 96 50 Q85 50 75 60\" fill=\"#CCE6FF\"/>\n  <circle cx=\"80\" cy=\"110\" r=\"8\" fill=\"#CCE6FF\"/>\n  <circle cx=\"96\" cy=\"120\" r=\"8\" fill=\"#CCE6FF\"/>\n  <circle cx=\"112\" cy=\"110\" r=\"8\" fill=\"#CCE6FF\"/>\n</svg>";
//#endregion
//#region src/icons/electric.svg?raw
var electric_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#F8D030\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#F8D030\"/>\n  <circle cx=\"96\" cy=\"70\" r=\"12\" fill=\"#FFFFCC\" stroke=\"#F8D030\" stroke-width=\"2\"/>\n  <g stroke=\"#FFFFCC\" stroke-width=\"3\" stroke-linecap=\"round\">\n    <line x1=\"96\" y1=\"55\" x2=\"96\" y2=\"35\"/>\n    <line x1=\"126\" y1=\"70\" x2=\"140\" y2=\"56\"/>\n    <line x1=\"126\" y1=\"122\" x2=\"140\" y2=\"136\"/>\n    <line x1=\"66\" y1=\"122\" x2=\"52\" y2=\"136\"/>\n    <line x1=\"66\" y1=\"70\" x2=\"52\" y2=\"56\"/>\n  </g>\n</svg>";
//#endregion
//#region src/icons/grass.svg?raw
var grass_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#78C850\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#78C850\"/>\n  <path d=\"M96 55 L105 75 L100 75 L108 90 L96 85 L84 90 L92 75 L87 75 Z\" fill=\"#CCFFCC\"/>\n  <path d=\"M70 100 L75 115 L72 115 L78 125 L70 123 L62 125 L68 115 L65 115 Z\" fill=\"#CCFFCC\"/>\n  <path d=\"M122 100 L127 115 L124 115 L130 125 L122 123 L114 125 L120 115 L117 115 Z\" fill=\"#CCFFCC\"/>\n</svg>";
//#endregion
//#region src/icons/ice.svg?raw
var ice_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#98D8D8\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#98D8D8\"/>\n  <path d=\"M85 65 L95 85 L90 85 L98 100 L85 92 L72 100 L80 85 L75 85 Z\" fill=\"#E8F8F8\" stroke=\"#98D8D8\" stroke-width=\"1.5\"/>\n  <path d=\"M70 105 L78 120 L74 120 L82 132 L70 126 L58 132 L66 120 L62 120 Z\" fill=\"#E8F8F8\" stroke=\"#98D8D8\" stroke-width=\"1.5\"/>\n  <path d=\"M122 105 L130 120 L126 120 L134 132 L122 126 L110 132 L118 120 L114 120 Z\" fill=\"#E8F8F8\" stroke=\"#98D8D8\" stroke-width=\"1.5\"/>\n</svg>";
//#endregion
//#region src/icons/fighting.svg?raw
var fighting_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#C03028\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#C03028\"/>\n  <path d=\"M80 65 L75 80 L65 85 L75 90 L80 105 L85 90 L95 85 L85 80 Z\" fill=\"#FFE8CC\"/>\n  <circle cx=\"112\" cy=\"75\" r=\"10\" fill=\"#FFE8CC\"/>\n  <circle cx=\"112\" cy=\"115\" r=\"10\" fill=\"#FFE8CC\"/>\n</svg>";
//#endregion
//#region src/icons/poison.svg?raw
var poison_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#A040A0\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#A040A0\"/>\n  <path d=\"M85 55 L90 70 L85 80 L92 85 L85 95 L92 100 L85 110 L90 120 L100 125 L110 120 L115 110 L122 100 L115 85 L122 70 L115 55 Z\" fill=\"#E8CCFF\"/>\n</svg>";
//#endregion
//#region src/icons/ground.svg?raw
var ground_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#E0C068\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#E0C068\"/>\n  <path d=\"M75 75 L96 55 L117 75 L110 96 L117 117 L96 137 L75 117 L82 96 Z\" fill=\"#FFFFCC\" stroke=\"#E0C068\" stroke-width=\"2\"/>\n</svg>";
//#endregion
//#region src/icons/flying.svg?raw
var flying_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#A890F0\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#A890F0\"/>\n  <path d=\"M60 75 Q50 85 55 100 L75 95 Q70 80 75 70 Z\" fill=\"#E8E8FF\"/>\n  <path d=\"M132 75 Q142 85 137 100 L117 95 Q122 80 117 70 Z\" fill=\"#E8E8FF\"/>\n  <path d=\"M80 110 Q75 125 90 135 Q105 125 100 110 Z\" fill=\"#E8E8FF\"/>\n</svg>";
//#endregion
//#region src/icons/psychic.svg?raw
var psychic_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#F85888\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#F85888\"/>\n  <circle cx=\"75\" cy=\"75\" r=\"12\" fill=\"#FFCCFF\" stroke=\"#F85888\" stroke-width=\"2\"/>\n  <circle cx=\"117\" cy=\"75\" r=\"12\" fill=\"#FFCCFF\" stroke=\"#F85888\" stroke-width=\"2\"/>\n  <circle cx=\"96\" cy=\"115\" r=\"12\" fill=\"#FFCCFF\" stroke=\"#F85888\" stroke-width=\"2\"/>\n  <line x1=\"75\" y1=\"75\" x2=\"117\" y2=\"75\" stroke=\"#FFCCFF\" stroke-width=\"2\"/>\n  <line x1=\"75\" y1=\"75\" x2=\"96\" y2=\"115\" stroke=\"#FFCCFF\" stroke-width=\"2\"/>\n  <line x1=\"117\" y1=\"75\" x2=\"96\" y2=\"115\" stroke=\"#FFCCFF\" stroke-width=\"2\"/>\n</svg>";
//#endregion
//#region src/icons/bug.svg?raw
var bug_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#A8B820\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#A8B820\"/>\n  <ellipse cx=\"60\" cy=\"85\" rx=\"12\" ry=\"15\" fill=\"#FFFF99\"/>\n  <ellipse cx=\"132\" cy=\"85\" rx=\"12\" ry=\"15\" fill=\"#FFFF99\"/>\n  <path d=\"M80 110 L75 130 Q85 135 96 135 Q107 135 117 130 L112 110\" fill=\"#FFFF99\"/>\n  <line x1=\"65\" y1=\"90\" x2=\"50\" y2=\"75\" stroke=\"#A8B820\" stroke-width=\"2\"/>\n  <line x1=\"127\" y1=\"90\" x2=\"142\" y2=\"75\" stroke=\"#A8B820\" stroke-width=\"2\"/>\n</svg>";
//#endregion
//#region src/icons/rock.svg?raw
var rock_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#B8A038\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#B8A038\"/>\n  <path d=\"M70 75 L75 60 L85 70 L90 55 L100 65 L105 50 L110 65 L120 60 L120 75 L130 85 L115 90 L120 105 L105 100 L100 115 L90 110 L85 125 L75 110 L60 115 L65 100 L50 105 L55 90 Z\" fill=\"#FFCCCC\"/>\n</svg>";
//#endregion
//#region src/icons/ghost.svg?raw
var ghost_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#705898\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#705898\"/>\n  <path d=\"M75 70 Q70 75 70 85 Q70 95 75 100 L85 105 Q80 100 80 95 Q80 90 85 85 Q90 78 95 78 Q100 78 105 85 Q110 90 110 95 Q110 100 105 105 L115 100 Q120 95 120 85 Q120 75 115 70 Q105 60 96 60 Q85 60 75 70 Z\" fill=\"#FFCCFF\"/>\n  <circle cx=\"82\" cy=\"85\" r=\"4\" fill=\"#705898\"/>\n  <circle cx=\"110\" cy=\"85\" r=\"4\" fill=\"#705898\"/>\n</svg>";
//#endregion
//#region src/icons/dragon.svg?raw
var dragon_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#7038F8\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#7038F8\"/>\n  <path d=\"M75 75 L70 90 L80 85 L75 105 L85 100 L80 120 L96 110 L110 120 L105 100 L115 105 L110 85 L120 90 L115 75 Q105 65 96 65 Q87 65 75 75 Z\" fill=\"#E8CCFF\" stroke=\"#7038F8\" stroke-width=\"1\"/>\n</svg>";
//#endregion
//#region src/icons/dark.svg?raw
var dark_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#705848\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#705848\"/>\n  <circle cx=\"75\" cy=\"80\" r=\"15\" fill=\"#D8D8D8\" stroke=\"#705848\" stroke-width=\"2\"/>\n  <circle cx=\"117\" cy=\"80\" r=\"15\" fill=\"#D8D8D8\" stroke=\"#705848\" stroke-width=\"2\"/>\n  <path d=\"M80 105 Q96 125 112 105\" fill=\"none\" stroke=\"#D8D8D8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"82\" cy=\"80\" r=\"5\" fill=\"#705848\"/>\n  <circle cx=\"110\" cy=\"80\" r=\"5\" fill=\"#705848\"/>\n</svg>";
//#endregion
//#region src/icons/steel.svg?raw
var steel_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#B8B8D0\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#B8B8D0\"/>\n  <g fill=\"#E8E8F8\" stroke=\"#B8B8D0\" stroke-width=\"1.5\">\n    <rect x=\"65\" y=\"70\" width=\"18\" height=\"18\" rx=\"2\"/>\n    <rect x=\"87\" y=\"55\" width=\"18\" height=\"18\" rx=\"2\"/>\n    <rect x=\"109\" y=\"70\" width=\"18\" height=\"18\" rx=\"2\"/>\n    <rect x=\"70\" y=\"100\" width=\"18\" height=\"18\" rx=\"2\"/>\n    <rect x=\"104\" y=\"100\" width=\"18\" height=\"18\" rx=\"2\"/>\n  </g>\n</svg>";
//#endregion
//#region src/icons/fairy.svg?raw
var fairy_default = "<svg width=\"192\" height=\"192\" viewBox=\"0 0 192 192\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"192\" height=\"192\" fill=\"#EE99AC\" opacity=\"0.1\" rx=\"16\"/>\n  <circle cx=\"96\" cy=\"96\" r=\"60\" fill=\"#EE99AC\"/>\n  <g fill=\"#FFCCFF\" stroke=\"#EE99AC\" stroke-width=\"1.5\">\n    <circle cx=\"96\" cy=\"70\" r=\"12\"/>\n    <path d=\"M75 90 L70 75 L80 85 Z\"/>\n    <path d=\"M117 90 L122 75 L112 85 Z\"/>\n    <path d=\"M80 120 L75 135 L85 125 Z\"/>\n    <path d=\"M112 120 L117 135 L107 125 Z\"/>\n  </g>\n  <circle cx=\"96\" cy=\"100\" r=\"8\" fill=\"#FFCCFF\"/>\n</svg>";
//#endregion
//#region src/lib/core/types.ts
var allTypes = [
	"Normal",
	"Fire",
	"Water",
	"Electric",
	"Grass",
	"Ice",
	"Fighting",
	"Poison",
	"Ground",
	"Flying",
	"Psychic",
	"Bug",
	"Rock",
	"Ghost",
	"Dragon",
	"Dark",
	"Steel",
	"Fairy"
];
var getAllTypes = () => [...allTypes];
var typeColors = {
	Normal: {
		color: "#A8A878",
		bgColor: "#E8E8D8",
		textColor: "#000000"
	},
	Fire: {
		color: "#F08030",
		bgColor: "#FFCCCC",
		textColor: "#000000"
	},
	Water: {
		color: "#6890F0",
		bgColor: "#CCE6FF",
		textColor: "#000000"
	},
	Electric: {
		color: "#F8D030",
		bgColor: "#FFFFCC",
		textColor: "#000000"
	},
	Grass: {
		color: "#78C850",
		bgColor: "#CCFFCC",
		textColor: "#000000"
	},
	Ice: {
		color: "#98D8D8",
		bgColor: "#E8F8F8",
		textColor: "#000000"
	},
	Fighting: {
		color: "#C03028",
		bgColor: "#FFE8CC",
		textColor: "#FFFFFF"
	},
	Poison: {
		color: "#A040A0",
		bgColor: "#E8CCFF",
		textColor: "#FFFFFF"
	},
	Ground: {
		color: "#E0C068",
		bgColor: "#FFFFCC",
		textColor: "#000000"
	},
	Flying: {
		color: "#A890F0",
		bgColor: "#E8E8FF",
		textColor: "#000000"
	},
	Psychic: {
		color: "#F85888",
		bgColor: "#FFCCFF",
		textColor: "#FFFFFF"
	},
	Bug: {
		color: "#A8B820",
		bgColor: "#FFFF99",
		textColor: "#000000"
	},
	Rock: {
		color: "#B8A038",
		bgColor: "#FFCCCC",
		textColor: "#000000"
	},
	Ghost: {
		color: "#705898",
		bgColor: "#FFCCFF",
		textColor: "#FFFFFF"
	},
	Dragon: {
		color: "#7038F8",
		bgColor: "#E8CCFF",
		textColor: "#FFFFFF"
	},
	Dark: {
		color: "#705848",
		bgColor: "#D8D8D8",
		textColor: "#FFFFFF"
	},
	Steel: {
		color: "#B8B8D0",
		bgColor: "#E8E8F8",
		textColor: "#000000"
	},
	Fairy: {
		color: "#EE99AC",
		bgColor: "#FFCCFF",
		textColor: "#000000"
	}
};
var getTypeStyle = (type) => typeColors[type];
var typeIcons = {
	Normal: normal_default,
	Fire: fire_default,
	Water: water_default,
	Electric: electric_default,
	Grass: grass_default,
	Ice: ice_default,
	Fighting: fighting_default,
	Poison: poison_default,
	Ground: ground_default,
	Flying: flying_default,
	Psychic: psychic_default,
	Bug: bug_default,
	Rock: rock_default,
	Ghost: ghost_default,
	Dragon: dragon_default,
	Dark: dark_default,
	Steel: steel_default,
	Fairy: fairy_default
};
var getTypeIcon = (type) => typeIcons[type];
var typeChartData = {
	Normal: {
		weak_to: ["Fighting"],
		resists: [],
		immune_to: ["Ghost"]
	},
	Fire: {
		weak_to: [
			"Water",
			"Ground",
			"Rock"
		],
		resists: [
			"Fire",
			"Grass",
			"Ice",
			"Bug",
			"Steel",
			"Fairy"
		],
		immune_to: []
	},
	Water: {
		weak_to: ["Electric", "Grass"],
		resists: [
			"Fire",
			"Water",
			"Ice",
			"Steel"
		],
		immune_to: []
	},
	Electric: {
		weak_to: ["Ground"],
		resists: [
			"Electric",
			"Flying",
			"Steel"
		],
		immune_to: []
	},
	Grass: {
		weak_to: [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug"
		],
		resists: [
			"Water",
			"Electric",
			"Grass",
			"Ground"
		],
		immune_to: []
	},
	Ice: {
		weak_to: [
			"Fire",
			"Fighting",
			"Rock",
			"Steel"
		],
		resists: ["Ice"],
		immune_to: []
	},
	Fighting: {
		weak_to: [
			"Flying",
			"Psychic",
			"Fairy"
		],
		resists: [
			"Bug",
			"Rock",
			"Dark"
		],
		immune_to: []
	},
	Poison: {
		weak_to: ["Ground", "Psychic"],
		resists: [
			"Grass",
			"Fighting",
			"Poison",
			"Bug",
			"Fairy"
		],
		immune_to: []
	},
	Ground: {
		weak_to: [
			"Water",
			"Grass",
			"Ice"
		],
		resists: ["Poison", "Rock"],
		immune_to: ["Electric"]
	},
	Flying: {
		weak_to: [
			"Electric",
			"Ice",
			"Rock"
		],
		resists: [
			"Grass",
			"Fighting",
			"Bug"
		],
		immune_to: ["Ground"]
	},
	Psychic: {
		weak_to: [
			"Bug",
			"Ghost",
			"Dark"
		],
		resists: ["Fighting", "Psychic"],
		immune_to: []
	},
	Bug: {
		weak_to: [
			"Fire",
			"Flying",
			"Rock"
		],
		resists: [
			"Grass",
			"Fighting",
			"Ground"
		],
		immune_to: []
	},
	Rock: {
		weak_to: [
			"Water",
			"Grass",
			"Fighting",
			"Ground",
			"Steel"
		],
		resists: [
			"Normal",
			"Fire",
			"Poison",
			"Flying"
		],
		immune_to: []
	},
	Ghost: {
		weak_to: ["Ghost", "Dark"],
		resists: ["Poison", "Bug"],
		immune_to: ["Normal", "Fighting"]
	},
	Dragon: {
		weak_to: [
			"Ice",
			"Dragon",
			"Fairy"
		],
		resists: [
			"Fire",
			"Water",
			"Electric",
			"Grass"
		],
		immune_to: []
	},
	Dark: {
		weak_to: [
			"Fighting",
			"Bug",
			"Fairy"
		],
		resists: ["Ghost", "Dark"],
		immune_to: ["Psychic"]
	},
	Steel: {
		weak_to: [
			"Fire",
			"Fighting",
			"Ground"
		],
		resists: [
			"Normal",
			"Grass",
			"Ice",
			"Flying",
			"Psychic",
			"Bug",
			"Rock",
			"Dragon",
			"Steel",
			"Fairy"
		],
		immune_to: ["Poison"]
	},
	Fairy: {
		weak_to: ["Poison", "Steel"],
		resists: [
			"Fighting",
			"Bug",
			"Dark"
		],
		immune_to: ["Dragon"]
	}
};
var getWeaknesses = (types) => {
	const result = /* @__PURE__ */ new Set();
	for (const t of types) typeChartData[t].weak_to.forEach((x) => result.add(x));
	return Array.from(result);
};
var getResistances = (types) => {
	const result = /* @__PURE__ */ new Set();
	for (const t of types) typeChartData[t].resists.forEach((x) => result.add(x));
	return Array.from(result);
};
var getImmunities = (types) => {
	const result = /* @__PURE__ */ new Set();
	for (const t of types) typeChartData[t].immune_to.forEach((x) => result.add(x));
	return Array.from(result);
};
var generateQuestionInternal = () => {
	const types = getAllTypes();
	const isSingleType = Math.random() < .6;
	let defendingTypes;
	if (isSingleType) defendingTypes = [types[Math.floor(Math.random() * types.length)]];
	else {
		const type1 = types[Math.floor(Math.random() * types.length)];
		let type2 = types[Math.floor(Math.random() * types.length)];
		while (type2 === type1) type2 = types[Math.floor(Math.random() * types.length)];
		defendingTypes = [type1, type2];
	}
	const categories = [
		"weaknesses",
		"resistances",
		"immunities"
	];
	const category = categories[Math.floor(Math.random() * categories.length)];
	let correctAnswers;
	if (category === "weaknesses") correctAnswers = getWeaknesses(defendingTypes);
	else if (category === "resistances") correctAnswers = getResistances(defendingTypes);
	else correctAnswers = getImmunities(defendingTypes);
	if (correctAnswers.length > 6) correctAnswers = correctAnswers.slice(0, 6);
	return {
		id: `q_${Date.now()}_${Math.random()}`,
		defendingTypes,
		category,
		correctAnswers
	};
};
var generateQuestion = () => {
	for (let i = 0; i < 50; i++) {
		const q = generateQuestionInternal();
		if (q.correctAnswers.length > 0 && q.correctAnswers.length <= 6) return q;
	}
	return generateQuestionInternal();
};
var generateOptions = (correctAnswers, count = 8) => {
	const all = getAllTypes();
	if (correctAnswers.length >= count) return correctAnswers.slice(0, count);
	const distractors = all.filter((t) => !correctAnswers.includes(t)).sort(() => Math.random() - .5).slice(0, count - correctAnswers.length);
	return [...correctAnswers, ...distractors].sort(() => Math.random() - .5);
};
var getScore = (total, correct) => {
	if (total === 0) return 0;
	return Math.round(correct / total * 100);
};
//#endregion
//#region src/lib/components/TypeButton.svelte
function TypeButton($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let type = $$props["type"];
		let isSelected = fallback($$props["isSelected"], false);
		let onClick = fallback($$props["onClick"], () => {});
		const style = getTypeStyle(type);
		const icon = getTypeIcon(type);
		$$renderer.push(`<button${attr_class("type-btn svelte-16q7hdc", void 0, { "selected": isSelected })}${attr_style(`--type-color: ${stringify(style.color)}; --type-bg: ${stringify(style.bgColor)}; --type-text: ${stringify(style.textColor)}`)}>${html(icon)} <span class="type-label svelte-16q7hdc">${escape_html(type)}</span></button>`);
		bind_props($$props, {
			type,
			isSelected,
			onClick
		});
	});
}
//#endregion
//#region src/lib/components/RevisionCard.svelte
function RevisionCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let defendingTypeDisplay, defendingStyle, defendingIcon;
		let question = $$props["question"];
		let onAnswerSubmit = fallback($$props["onAnswerSubmit"], () => {});
		let options = [];
		let selectedTypes = [];
		let isAnswered = false;
		let isCorrect = false;
		const handleTypeSelect = (type) => {
			if (isAnswered) return;
			selectedTypes = selectedTypes.includes(type) ? selectedTypes.filter((t) => t !== type) : [...selectedTypes, type];
		};
		const getCategoryText = () => {
			switch (question.category) {
				case "weaknesses": return "Select types that are super effective against:";
				case "resistances": return "Select types that are not very effective against:";
				case "immunities": return "Select types that deal 0 damage to:";
			}
		};
		$: {
			options = generateOptions(question.correctAnswers, 8);
			selectedTypes = [];
			isAnswered = false;
			isCorrect = false;
		}
		$: defendingTypeDisplay = question.defendingTypes.length === 1 ? question.defendingTypes[0] : `${question.defendingTypes[0]}/${question.defendingTypes[1]}`;
		$: defendingStyle = getTypeStyle(question.defendingTypes[0]);
		$: defendingIcon = getTypeIcon(question.defendingTypes[0]);
		$$renderer.push(`<div class="revision-card animate-scale-in svelte-uqlpjx"><div class="question-header svelte-uqlpjx"><h2 class="question-prompt svelte-uqlpjx">${escape_html(getCategoryText())}</h2> <div class="defending-type svelte-uqlpjx"${attr_style(`--def-bg: ${stringify(defendingStyle.bgColor)}`)}><div class="defending-icon svelte-uqlpjx">${html(defendingIcon)}</div> <div class="defending-info svelte-uqlpjx"><span class="defending-name svelte-uqlpjx"${attr_style(`color: ${stringify(defendingStyle.textColor)}`)}>${escape_html(defendingTypeDisplay)}</span> <span class="defending-label svelte-uqlpjx">Type${escape_html(question.defendingTypes.length > 1 ? "s" : "")}</span></div></div></div> <div class="options-section svelte-uqlpjx"><p class="selection-hint svelte-uqlpjx">`);
		if (selectedTypes.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`Selected: ${escape_html(selectedTypes.length)} / ${escape_html(question.correctAnswers.length)}`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`Select ${escape_html(question.correctAnswers.length)} type${escape_html(question.correctAnswers.length !== 1 ? "s" : "")}`);
		}
		$$renderer.push(`<!--]--></p> <div class="options-grid svelte-uqlpjx"><!--[-->`);
		const each_array = ensure_array_like(options);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let type = each_array[$$index];
			TypeButton($$renderer, {
				type,
				isSelected: selectedTypes.includes(type),
				onClick: () => handleTypeSelect(type)
			});
		}
		$$renderer.push(`<!--]--></div></div> `);
		if (isAnswered) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div${attr_class("feedback svelte-uqlpjx", void 0, {
				"correct": isCorrect,
				"incorrect": !isCorrect
			})}><p class="feedback-title svelte-uqlpjx">${escape_html(isCorrect ? "✓ Correct!" : "✗ Incorrect")}</p> <p class="feedback-text svelte-uqlpjx">${escape_html(isCorrect ? `Great job! You correctly identified all the ${question.category} against ${defendingTypeDisplay}.` : `The correct answer is: ${question.correctAnswers.join(", ")}`)}</p></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="actions svelte-uqlpjx"><button${attr_class("action-btn submit svelte-uqlpjx", void 0, { "enabled": selectedTypes.length === question.correctAnswers.length })}${attr("disabled", selectedTypes.length !== question.correctAnswers.length, true)}><svg viewBox="0 0 24 24" fill="none" class="btn-icon svelte-uqlpjx"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> Submit</button> <button class="action-btn skip svelte-uqlpjx"><svg viewBox="0 0 24 24" fill="currentColor" class="btn-icon svelte-uqlpjx"><path d="M5 4v16M19 12l-8-6v12l8-6Z"></path></svg> Skip</button></div>`);
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			question,
			onAnswerSubmit
		});
	});
}
//#endregion
//#region src/lib/components/ScoreDisplay.svelte
function ScoreDisplay($$renderer, $$props) {
	let percentage, accuracyColor;
	let correctVal = fallback($$props["correctVal"], 0);
	let totalVal = fallback($$props["totalVal"], 0);
	let streak = fallback($$props["streak"], 0);
	$: percentage = totalVal > 0 ? Math.round(correctVal / totalVal * 100) : 0;
	$: accuracyColor = percentage >= 75 ? "var(--success)" : percentage >= 50 ? "var(--warning)" : "var(--danger)";
	$$renderer.push(`<div class="score-display svelte-13scbj8"><div class="score-section svelte-13scbj8"><span class="label svelte-13scbj8">Progress</span> <div class="score-value svelte-13scbj8"><span class="correct svelte-13scbj8">${escape_html(correctVal)}</span> <span class="sep svelte-13scbj8">/</span> <span class="total svelte-13scbj8">${escape_html(totalVal)}</span></div></div> <div class="score-section center svelte-13scbj8"><span class="label svelte-13scbj8">Accuracy</span> <div class="accuracy-circle svelte-13scbj8"${attr_style(`background: ${stringify(accuracyColor)}`)}>${escape_html(percentage)}%</div></div> `);
	if (streak > 0) {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="score-section svelte-13scbj8"><span class="label svelte-13scbj8">Streak</span> <div class="streak-badge svelte-13scbj8"><span class="fire">🔥</span> <span class="streak-num svelte-13scbj8">${escape_html(streak)}</span></div></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div>`);
	bind_props($$props, {
		correctVal,
		totalVal,
		streak
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let score, scoreMessage;
		let state = "start";
		let question = null;
		let correctCount = 0;
		let totalCount = 0;
		let streak = 0;
		const handleAnswerSubmit = (isCorrect) => {
			totalCount++;
			if (isCorrect) {
				correctCount++;
				streak++;
			} else streak = 0;
			setTimeout(() => {
				if (totalCount < 10) question = generateQuestion();
				else state = "end";
			}, 2500);
		};
		$: score = getScore(totalCount, correctCount);
		$: scoreMessage = score >= 90 ? "Outstanding! You know your types!" : score >= 70 ? "Great job! Keep practicing!" : score >= 50 ? "Good start! Study more matchups!" : "Keep learning! Try again soon!";
		$$renderer.push(`<div class="app svelte-1uha8ag"><div class="background-pattern svelte-1uha8ag"></div> <header class="header svelte-1uha8ag"><h1 class="title svelte-1uha8ag">Pokemon Type Revision</h1> <p class="subtitle svelte-1uha8ag">Test your knowledge of Pokemon type effectiveness</p></header> <main class="content svelte-1uha8ag">`);
		if (state === "start") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="start-screen animate-scale-in svelte-1uha8ag"><div class="start-card svelte-1uha8ag"><div class="pokeball-icon svelte-1uha8ag"><svg viewBox="0 0 100 100" class="pokeball svelte-1uha8ag"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="4"></circle><line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" stroke-width="4"></line><circle cx="50" cy="50" r="12" fill="currentColor"></circle><circle cx="50" cy="50" r="6" fill="white"></circle></svg></div> <h2 class="svelte-1uha8ag">Ready to test your skills?</h2> <p class="svelte-1uha8ag">Answer 10 questions about Pokemon type matchups. Choose all the types that match each question category.</p> <button class="start-btn svelte-1uha8ag"><span>Start Quiz</span> <svg viewBox="0 0 24 24" fill="none" class="arrow svelte-1uha8ag"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div>`);
		} else if (state === "quiz" && question) {
			$$renderer.push("<!--[1-->");
			$$renderer.push(`<div class="quiz-screen svelte-1uha8ag"><div class="progress-bar svelte-1uha8ag"><div class="progress-fill svelte-1uha8ag"${attr_style(`width: ${stringify(totalCount / 10 * 100)}%`)}></div></div> <div class="question-counter svelte-1uha8ag">Question ${escape_html(totalCount + 1)} of 10</div> `);
			ScoreDisplay($$renderer, {
				correctVal: correctCount,
				totalVal: totalCount,
				streak
			});
			$$renderer.push(`<!----> `);
			RevisionCard($$renderer, {
				question,
				onAnswerSubmit: handleAnswerSubmit
			});
			$$renderer.push(`<!----></div>`);
		} else if (state === "end") {
			$$renderer.push("<!--[2-->");
			$$renderer.push(`<div class="end-screen animate-scale-in svelte-1uha8ag"><div class="end-card svelte-1uha8ag"><h2 class="svelte-1uha8ag">Quiz Complete!</h2> <p class="score-label svelte-1uha8ag">Here's your final score:</p> <div${attr_class("final-score svelte-1uha8ag", void 0, {
				"gold": score >= 75,
				"silver": score >= 50,
				"bronze": score < 50
			})}><span class="score-num svelte-1uha8ag">${escape_html(score)}%</span></div> <p class="score-detail svelte-1uha8ag">${escape_html(correctCount)} out of ${escape_html(totalCount)} correct</p> <p class="score-message svelte-1uha8ag">${escape_html(scoreMessage)}</p> <button class="start-btn svelte-1uha8ag"><span>Try Again</span> <svg viewBox="0 0 24 24" fill="none" class="arrow svelte-1uha8ag"><path d="M1 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></main></div>`);
	});
}
//#endregion
export { _page as default };
