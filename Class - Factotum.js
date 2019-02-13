var iFileName = "Class - Factotum.js";
RequiredSheetVersion(12.999);

//Create the source
SourceList["D:FC"] = { // do not redefine the already existing "D:FC" entry in the sourcelist, that will cause other things to fail
	name : "Domannaa: The Factotum Class",
	abbreviation : "D:FC",
	group : "Domannaa",
	date : "2019/01/07"
};

//Create the class
ClassList["factotum"] = {
	regExpSearch : /factotum/i, // regex doesn't have to be complex when searching for just one word
	name : "Factotum",
	source : ["D:FC", 0],
	primaryAbility : "\n \u2022 Factotum: Intelligence;",
	prereqs : "\n \u2022 Factotum: Dexterity 13 and Intelligence 13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Int"],
	abilitySave : 4,
	skills : ["\n\n" + toUni("Factotum") + ": Choose any three skills.", "\n\n" + toUni("Factotum") + ": Choose any one skill."],
	toolProfs : {
		primary : [["Any tool", 4]],
		secondary : [["Any tool", 1]]
	},
	armor : [
		[true, false, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Factotum starting equipment:\n \u2022 Climber's kit -or- healer's kit;\n \u2022 a longsword -or- a rapier -or- two simple melee weapons;\n \u2022 A light crossbow and 20 bolts -or- three javelins;\n \u2022 Leather armor, a dungeoneer's pack, an arcane focus, and a holy symbol.\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Factotum Archetype", []], // don't add the subclass here if you are adding it using the AddSubClass() function
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"jack of all trades" : { // feature object names should all be lowercase
			name : "Jack of All Trades",
			source : ["D:FC", 0],
			minlevel : 2,
			description : "\n   " + "I can add half my proficiency bonus to any ability check that doesn't already include it",
			eval : "Checkbox('Jack of All Trades', true);",
			removeeval : "Checkbox('Jack of All Trades', false);"
		},
		"expertise" : {
			name : "Expertise",
			source : ["D:FC", 0],
			minlevel : 1,
			description : "\n   " + "I gain expertise with two skills/thieves' tools I am proficient with; two more at 6th level",
			skillstxt : "Expertise with any two skill proficiencies and/or thieves' tools, and two more at 6th level",
			additional : levels.map(function (n) {
				return "with " + (n < 6 ? 2 : 4) + " skills";
			})
		},
		"inspiration" : {
			name : "Inspiration",
			source : ["D:FC", 0],
			minlevel : 2,
			description : desc([
					"I gain inspiration points, which I can spend on various abilities",
					"as a bonus action, I can spend one to add my Int bonus to an attack,",
					"check or save, or I can dash or disengage"
				]),
			action : ["bonus action", ""],
			usages : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "short rest"
		},
		"mystical dilettante" : {
			name : "Mystical Dilettante",
			source : ["D:FC", 0],
			minlevel : 2,
			description : desc([
					"I use an action to cast a spell from the wizard list up to 1st level using genius points equal to spell lvl",
					"I can cast 2nd level spells at 5th level, 3rd at 8th, 4th at 10th, 5th at 13th"
				]),
			action : ["action", ""]
		},
		"subclassfeature3" : {
			name : "Archetype",
			source : ["D:FC", 0],
			minlevel : 3,
			description : "\n   " + "Choose a Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose Martial Savant"
		},
		"opportunistic piety" : {
			name : "Opportunistic Piety",
			source : ["D:FC", 0],
			minlevel : 3,
			description : desc([
					"As an action, I can appeal to the gods in a spur of the moment plea of desperation. I can either:",
					"Spend a genius point to heal a creature I touch by my factotum level + Int modifier,",
					"or spend a genius point to force all undead in 30ft to make a wisdom saving throw vs my DC",
					"If they fail this save, they are turned, and can only spend their turns moving away from me"
				]),
			action : ["action", ""]
		},
		"brains over brawn" : {
			name : "Brains over Brawn",
			souce : ["D:FC", 0],
			minlevel : 5,
			description : desc([
					"I can substitute Intelligence for Strength, Dexterity or Constitution in a check"
				])
		},
		"cunning surge" : {
			name : "Cunning Surge",
			source : ["D:FC", 0],
			minlevel : 9,
			description : desc([
					"I can spend 5 Inspiration points to take an extra action on my turn"
				])
		},
		"arcane understanding" : {
			name : "Arcane Understanding",
			source : ["D:FC", 0],
			minlevel : 15,
			description : desc([
					"My knowledge of the arcane broadens, allowing me to cast greater spells using Mystical Dilettante",
					"Once per long rest, I can cast a 6th level spell, or a 7th level spell at 18th level"
				])
		},
		"spark of brilliance" : {
			name : "Spark of Brilliance",
			source : ["D:FC", 0],
			minlevel : 20,
			description : desc([
					"Once per long rest, as an action, I roll a d20 and regain inspiration points equal to the roll"
				]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
};
//Create the Martial Savant Subclass
AddSubClass(
	"factotum",
	"martial savant", {
	regExpSearch : /^(?=.*factotum)(?=.*martial)(?=.*savant).*$/i,
	subname : "Martial Savant",
	source : ["D:FC", 0],
	attacks : [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3], // this has to be part of the main object, it can't be part of a class feature
	features : {
		"subclassfeature3" : {
			name : "Martial Proclivity",
			source : ["D:FC", 0],
			minlevel : 3,
			description : desc([
					"I gain proficiency with medium armor and shields",
				]),
			armor : [false, true, false, true]
		},
		"subclassfeature3.1": {
			name : "Pinpoint Strike",
			source : ["D:FC", 8],
			minlevel : 3,
			description : desc([
					"Once per turn when I hit with a weapon attack, I can spend an inspiration point",
					"When I do so, I add my intelligence modifier to the damage roll"
				])
		},
		"subclassfeature7" : {
			name : "Extra Attack",
			source : ["D:FC", 0],
			minlevel : 7,
			description : desc([
					"I can attack twice when I take the attack action, and 3 times at 14th level"
				])
			
		},
		"subclassfeature11" : {
			name : "Chink in the Armor",
			source : ["D:FC", 0],
			minlevel : 11,
			description : desc([
					"When I use my Pinpoint strike, I ignore resistance, and treat immunity as resistance"
				])
		},
		"subclassfeature17" : {
			name : "Calculated Blow",
			source : ["D:FC", 0],
			minlevel : 17,
			description : desc([
					"When making an attack, I can spend 3 inspiration points to gain advantage on the attack roll",
					"If I hit with this attack, damage is treated as if the maximum was rolled on the weapon's die"
				])
		}
	}
});
