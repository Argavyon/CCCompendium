const SpellDatabase = [
  {
    "name": "Pixie Play",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Fey",
      "Summoning"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "For each AP spent to cast this spell, you summon a tiny sprite which then proceeds to inhabit a nearby space within range and turn invisible. Each sprite must choose a different space. <br><br>As a response to a creature moving within 10 feet of a sprite, for 0 AP you may command the sprite to trip the creature. The creature must succeed on a Dexterity saving throw or fall prone and immediately end their movement this turn. This can only take effect if the creature is large size or smaller. The sprite then leaves.",
    "empower": ""
  },
  {
    "name": "Share Sight",
    "tier": 1,
    "tags": [
      "Divination",
      "Psychic",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "You can close your eyes to see through the eyes of target creature you touch. Your body is considered blinded while doing so.",
    "empower": "Removes the Concentration tag.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Circle of Warding",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "Self (10 foot radius)",
    "duration": "24 hours",
    "desc": "You inscribe a magic circle around you that repels outside forces. No summoned or reanimated creature can affect you in any way while you remain inside the circle, nor can they move through the circle.<br><br>The spell ends if you exit the circle.<br>(Reanimated is a condition applied by spells and effects that are very clearly Necromancy, such as Puppeteer. \"Natural\" undead not under a spell are unaffected.)",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Blessed Meal",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Holy",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "Consecrates the food eaten during a break. Whenever a creature rolls a hit die during the break to recover hit points and MP, they heal an additional 2 hit points and MP, and are cured of the poisoned condition.<br><br>This spell has no effect on the caster.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Guiding Breeze",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create gentle winds at a target point within range that extends out in a 30 foot long, 5 foot wide line, with the winds blowing in one direction you choose. When a creature you choose moves within the line in that same direction, all their movement while within the line only costs 5 feet.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Moment of Opportunity",
    "tier": 1,
    "tags": [
      "Divination",
      "Holy",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "The target creature becomes poised to receive a vision of the right moment to act. If they would roll a 1 on an attack roll or saving throw during the spell's duration, it becomes a 20 instead, and the spell ends.",
    "empower": "Any roll equal to or less than the creature's proficiency modifier instead becomes a 20, and the spell ends.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Tear the Veil",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Eldritch"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You tear apart a small part of the barrier between realms, causing a brief overlap with the realm of magic in a 30 foot radius centered on target point within range. Creatures in the area that cast spells take arcane damage equal to the MP cost of the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Acid Adder",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Acid",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Conjure a snake of translucent acid that is launched at a target within range. They must make a Dexterity saving throw, taking 2d6 acid damage on a failed save, or half as much on a successful one.<br>At the start of each of your turns while the spell is active you can spend 1 AP to launch the snake at another target within 60 feet of you.",
    "empower": "",
    "author": "Zombehking"
  },
  {
    "name": "Shadowblind",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Shadow",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "10 minutes",
    "desc": "Target creature must succeed on an Intuition saving throw or be struck shadowblind, seeing everything as shifting shadows with no color. They can't visually discern between different creatures beyond shape and silhouette, and fail any ability check that would require precise identification.",
    "empower": "The spell can target up to three creatures within range.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Constellation Gaze",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Eldritch",
      "Radiant",
      "Psychic",
      "Concentration"
    ],
    "cost": "1 to 3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Your eyes become portals that welcome stellar beings. You are blinded while the spell remains active, but you can precisely sense the presence of creatures within 60 feet, increased by 30 feet for each AP spent past the first. Once on each of your turns, you can spend 1 AP to fix your gaze upon a creature, who must succeed on an Intuition saving throw or take 2d6 radiant damage and be frightened of you until the start of your next turn.",
    "empower": "Creatures remain frightened as long as they can see you. They can repeat the saving throw at the end of each of their turns to end the effect early. A creature that is frightened and targeted again takes an additional 1d6 psychic damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Amplify Gravity",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Earth",
      "Space",
      "Concentration",
      "Sign",
      "Deprecated"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You amplify the gravity affecting a 60 foot radius sphere centered on a point within range. Creatures that are inside the area can't move as a response to actions, can't take the Dash action, and fall 30 feet at the end of their turns if they are flying.<br><br>While you are inside the area, your Earth spells cost 1 less AP to cast, to a minimum of 1.<br><br>The spell ends if you leave the area.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Repulse",
    "tier": 1,
    "tags": [
      "Evocation",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot line)",
    "duration": "Instantaneous",
    "desc": "You push out arcane power in a 30 foot line. Creatures and objects in this line are pushed up to 30 feet away from you, stopping their movement early if they would enter an occupied space. Unwilling creatures can make a Strength saving throw to reduce the movement to 5 feet.",
    "empower": "The range becomes Self (15 foot radius).",
    "author": "CrusaderDroid"
  },
  {
    "name": "Cold Front",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Cold",
      "Wind",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "Self (90 foot line) ",
    "duration": "Instantaneous",
    "desc": "Intensely cold winds, snow, and ice blow forth in a 15 foot wide, 90 foot long line. Creatures in the area must make a Constitution saving throw or take 3d6 cold damage and have their movement speed halved until the start of your next turn. Creatures that succeed on their saving throw take half damage.",
    "empower": "Damage increased to 5d6.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Writ",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Universal"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "24 hours",
    "desc": "You engrave onto a surface a mystical set of symbols and shapes that convey a message. As you cast this spell, describe one or more creatures that this message is intended for, and what your message is. This message must be 15 words or less.<br><br>The encoded message will appear as indecipherable abstract nonsense to any creature except the intended recipient(s) and the caster.<br><br>If the surface is disrupted or destroyed, the message is also lost.",
    "empower": ""
  },
  {
    "name": "Aqua Screen",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Water"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create two thin films of water 15 feet long, 5 feet tall, and 1 inch thick anywhere within range that you can see. The films cannot overlap in space. Ranged attacks that pass through the water have disadvantage, and fire attacks or spells that pass through the water deal half damage.",
    "empower": "Cost reduced to 1 AP.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Caustic Volley",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You launch small acidic darts at up to three creatures within range, who must make a Dexterity saving throw or take 1d8 acid damage.<br><br>On your next two turns, you can spend 1 AP once per turn to repeat the effect.",
    "empower": "You can target up to five creatures with each volley.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wind Dome",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Exceedingly strong winds kick up around you, forming a dome 15 feet away from you. The winds lightly obscure you, and creatures that are within 15 feet of you when the dome is created or who attempt to pass through the dome must make a Strength saving throw or be thrown away 10 feet. Ranged attacks aimed through the dome are thrown off course and automatically miss.<br><br>The dome dissipates at the start of your next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Primal Flow",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Beast",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Untamed raw vitality surges through your body. You gain an extra pool of movement containing 60 feet of movement. When you move during your turn, you may expend movement from the pool to move. You may only expend movement from the pool on a given turn up to the amount of movement you have expended that turn from any other source, including your base movement.<br><br>This spell ends early when the pool is depleted.",
    "empower": "Increase the starting pool to 90 feet or reduce the AP cost of this spell to 1."
  },
  {
    "name": "False Image",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Illusion",
      "Universal"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create an illusory image no bigger than a 5 foot cube at a point within range you can see. The image can be anything you choose, although it is restricted only to visual imagery and cannot replicate sound, touch, smell, or taste.<br><br>If you have the Illusion tag, you can also create a sound that accompanies the image. The sound can repeat for the full duration, or start and stop after a set time.<br><br>The image does not hold up to scrutiny. A creature can spend 1 AP to make a Knowledge saving throw. On a success, it detects the illusion, which appears as transparent to them for the duration. A creature that physically interacts with the illusion automatically makes and succeeds on this saving throw.",
    "empower": ""
  },
  {
    "name": "Torchlight",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "Touch ",
    "duration": "15 minutes",
    "desc": "The touched item emits light out to 60 feet as if it was a lit torch.",
    "empower": "Duration increased to 1 hour.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Brilliant Arrows",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fey",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "With a wave of your hand, a volley of three multicolored arrows of light fly forth. Up to three creatures within range must make a Dexterity saving throw or take 1d8 radiant damage.<br><br>Hit or miss, the arrows remain embedded in whatever they strike, radiating bright light out to 10 feet and revealing hidden or invisible creatures within range for the duration. A creature with an arrow stuck in them can spend 1 AP to crush it and end the effect.",
    "empower": "Damage increases to 2d8. Fires an additional arrow at one more target.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sacred Border",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "A 30 foot long, 10 foot tall perpendicular line centered on a point within range shimmers with a golden light. Creatures you choose can't cross through this line.<br><br>The spell ends if a creature crosses through the line.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Betrayal of Bone",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "Target creature must succeed on a Constitution saving throw or have bits of their bone pulled through their skin, dealing 2d10 piercing damage. You gain temporary hit points equal to the damage dealt until the start of your next turn.<br><br>This spell is ineffective against creatures without a skeleton, such as elementals or oozes.",
    "empower": "Damage increased to 3d10. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rock Fling",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You conjure and then fling a rock of 10 pounds at a target creature within range. It must succeed on a Dexterity saving throw or take 4d6 bludgeoning damage. If the creature is Medium size or smaller, they are also knocked prone.<br><br>If you are adjacent to a rock or similar earth object that weighs between 10 to 20 pounds, you can instead throw that object with this spell for 1 AP.",
    "empower": "Range increased to 300 feet. Creatures have advantage on their saving throw if you are targeting a creature farther than 90 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Lashing Vines",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Plant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "From your palm, vines burst forth and target up to three creatures within range, no two of which can be more than 10 feet apart from each other. Each target must make a Dexterity saving throw or become grappled. At the start of each of their turns while grappled, they take 1d8 piercing damage.<br><br>You can't move as long as at least one creature is grappled. A grappled creature can make a Strength saving throw at the end of each of its turns, breaking the grapple on a success.<br><br>For 1 AP, you can pull a grappled creature up to 15 feet towards you.",
    "empower": "Pull range increases to 30 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Claw Growth",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Beast",
      "Draconic",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "When you cast this spell, choose one of the following effects for the duration. You can only choose an effect if you have the appropriate tag.<br><br>Beast: Your hands become beast claws, unable to hold objects. They do 1d6 slashing damage and count as finesse weapons. For every two attacks you make with these claws during a turn, you can make one additional attack for free.<br>Draconic: One or both of your hands become large dragon claws too big to hold objects. The claws do 1d12 slashing damage, and ignore resistance to slashing damage.<br>Physical: Sharp talons emerge from your fingertips. You add your spellcasting modifier to the damage dealt with unarmed attacks.",
    "empower": ""
  },
  {
    "name": "Shifting Shade",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Shadow",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Thick shadows gather around you and black out a 15 foot radius sphere centered on you. Only you can see inside this darkness. It blocks all vision through and out of the sphere otherwise.<br><br>At the start of each of your turns while you are inside, you can move yourself anywhere within the sphere without consuming movement.",
    "empower": "Range becomes 20 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Echocatch",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour ",
    "desc": "When you cast this spell, you begin recording all sounds around you or from a specific direction until the spell ends. You may end the spell at will anytime. When the spell ends, the recorded sounds manifest as a very small packet of air, and you have up to 1 minute to store it in an airtight container before it breaks. If stored, the packet does not break until the seal of the container is opened. When the packet breaks, the recorded sounds are released and can be heard by any nearby creatures exactly as they were recorded, as if originating from the location where the packet broke.",
    "empower": ""
  },
  {
    "name": "Webweaver",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Forbidden (Arachnid)"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 hour",
    "desc": "You leap up and create a web directly beneath you that spans a 30 foot radius. The web needs at least two objects on opposite ends to anchor to, or it falls flat and ends immediately.<br><br>Creatures other than you that are in the area of the web when it is first created, or step into the area of the web, must succeed on a Dexterity saving throw or be restrained by the web. They can make a Strength saving throw for 2 AP during their turn to tear themselves free.<br><br>You can freely traverse this web, and ignore difficult terrain in the web. You can move 2 feet for every 1 foot of movement spent as long as you move on your web.<br><br>Casting this spell again destroys the first web. Webs are destroyed instantly if anything in the area is targeted by an attack or spell that does fire damage.",
    "empower": "Casting this spell again does not destroy the first web. You can maintain a number of webs equal to your proficiency modifier before destroying the oldest web."
  },
  {
    "name": "Venomous Flow",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Poison",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot line per tier)",
    "duration": "Instantaneous",
    "desc": "You create a wave of sludge-like poison that travels forth from you in a 15 foot wide line out to the maximum range of the spell. The width increases by 10 feet at tier 4 and 7. Creatures in the path must make a Dexterity saving throw or take 3d10 poison damage plus 2d10 additional damage for each tier above 1. A successful saving throw deals half damage. Plants and plant creatures take maximum damage from this spell.",
    "empower": "Treat the spell as one tier higher.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Furry Friend",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Beast",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "5 feet",
    "duration": "8 hours",
    "desc": "You summon a Small or smaller beast such as a dog, squirrel, or monkey. It obeys your mental commands for the duration. You can use 1 AP to blind yourself and see through its eyes.<br><br>The summoned beast is not a combatant, and will flee from all danger until the battle ends. It has 1 HP and AC 13. It vanishes if reduced to 0 HP, ending the spell early.",
    "empower": ""
  },
  {
    "name": "Mystic Shell",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Arcane",
      "Eldritch",
      "Universal"
    ],
    "cost": "2 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Magic wraps around you in a translucent, prismatic shell. Your AC is set to 12 + your spellcasting stat, and cannot be reduced or increased.<br><br>If you would be struck by a critical hit, the spell ends and converts the critical hit to a normal attack.",
    "empower": "Duration increased to 8 hours. No longer shatters on a critical hit, but still prevents critical hits."
  },
  {
    "name": "Bramble Wave",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A ball of condensed brambles and vines is summoned and then launched at a target creature within range that you can see. It must make a Dexterity saving throw or take 2d8 piercing damage and be restrained. The ball then expands out into a 10 foot radius field of brambles and vines. The area becomes difficult terrain, and any creature in this radius must make a Dexterity saving throw or become restrained.<br><br>A restrained creature can repeat their saving throw at the end of each of their turns. On a success, they are no longer restrained.",
    "empower": "Radius increases to 15 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Icy Pillars",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You cause four 5 foot tall, 20 pound jagged pillars of ice to spring up at a target empty space. Creatures you choose that are adjacent to it must make a Dexterity saving throw or take 2d8 cold damage.<br><br>The pillars have 5 hit points and AC 10. They obstruct movement into the space until they are all destroyed.",
    "empower": "You target two empty spaces. A creature can only take damage from this spell once.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Prism",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Radiant"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create an ethereal prism at a target space within range that you can see. If you target the prism with a Radiant spell, the prism splits the spell, enabling you to target up to two other creatures within 60 feet of the prism, even if they would be out of range of the original spell.",
    "empower": "Range increased to 120 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Soul of the Ursine",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Forbidden (Werebear)"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You align your soul with the soul of the First Bear. Your movement speed increases by 10 feet, you have advantage on grapple attacks and Constitution saving throws, and you have resistance to damage dealt to your maximum hit points. If you have claws and they deal less than 1d10 damage, they are increased to 1d10 damage.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Hundred Needles",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Evocation",
      "Forbidden (Fairylock)"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Needles of black, glimmering light form around a target creature within range you can see, before thrusting themselves at the target. They are inflicted with 1 Fairylock, and must succeed at a Dexterity saving throw or take 1d6 piercing and 1d6 radiant damage and become afflicted with an additional 1 Fairylock.<br><br>Fairylock remains for 1 minute after its most recent application. For every AP a creature spends, it takes 1 damage per Fairylock it has.",
    "empower": "Radiant damage increased to 2d6. Inflicts 2 Fairylock on a failed saving throw instead."
  },
  {
    "name": "Decipher Magic",
    "tier": 1,
    "tags": [
      "Divination",
      "Universal"
    ],
    "cost": "1 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You learn the properties of a specific magical effect in range. You know the spell's name, its effects, and the level or overall strength of its original caster. When cast on a magic item, you gain knowledge of its enchantment and any applicable conditions. When cast on a creature, you can discern any spell effects affecting the creature as well as their properties.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Seeker Bolt",
    "tier": 1,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You fire a large solid bolt of lightning that locks on to a creature within range and moves 30 feet closer. At the start of each of your turns, if it has not collided with a creature or object, it moves<br>30 feet closer to the target. On impact with anything, it deals 3d10 lightning damage. Seeker<br>Bolt's damage is reduced to 1d10 if it hits a creature within 30 feet.<br>A creature can make a ranged attack targeting the bolt to destroy it. The bolt has AC 16 and discharges on impact with any ranged projectile, destroying the bolt.",
    "empower": "At the start of your next turn, the bolt flies 120 feet towards the target.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Defenestrate",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Physical",
      "Space"
    ],
    "cost": "2 AP",
    "range": "Special",
    "duration": "Instantaneous",
    "desc": "As part of casting this spell, you make a proficient melee attack with your spellcasting modifier against a medium or smaller creature in your reach which has an open space behind them which can be obstructed by no more than 1 foot of solid material.<br><br>On a hit a magical portal opens behind the creature with a thin glass-like barrier on it, which you fling the creature through. The creature is shoved 5 feet away from you, taking 4d6 force damage from crashing through the barrier, and the creature always lands prone from the shock of passing through through shattering barrier. The portal then promptly closes behind them.<br><br>If for some reasons unknown the target is willing to be thrown through the portal, you may choose to deal  no damage to the target and not force them to land prone as the barrier shatters harmlessly.",
    "empower": "Spacetime warps, you no longer need an open space behind your target, and may select the target destination of the target creature to be any open space you can see within 30 feet of you."
  },
  {
    "name": "Minor Nightmare",
    "tier": 1,
    "tags": [
      "Illusion",
      "Unholy",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "10 feet",
    "duration": "1 minute",
    "desc": "You conjure the image of a minor nightmare to appear before you in an empty space within range. When you cast this spell, and for 1 AP once on each of your turns, you can select a creature within 60 feet that can see the nightmare. The creature must succeed on an Intuition saving throw or be frightened of the nightmare until it can no longer see it, or you choose a new target.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Spellsight",
    "tier": 1,
    "tags": [
      "Divination",
      "Arcane"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "The target's creature's eyes are opened to the realm of magic. For the duration of this spell, they can perceive all active spell effects on creatures they can see. Each spell is a discrete object to the target, with a transparent thread tracing back towards the general direction of the caster if they are within 120 feet.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hasty Mending",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A target willing creature within range that you can see has their body quickly, but sloppily, mended of its wounds. They are healed for 3d6 hit points, and their maximum hit points are reduced by the value of the highest die rolled.<br><br>The spell fails if it would cause a creature to be reduced to 0 maximum hit points.",
    "empower": "Choose one - reduce the AP cost by 1, or use the lowest die rolled to determine maximum hit point loss."
  },
  {
    "name": "Memorial to the Fallen",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Forbidden (Worldshaping)",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You construct a reverent monument over 10 minutes in memory of a creature you knew who has died. The monument can take any shape within a 10 foot cube, centered on a point within range.<br><br>As long as the monument exists, the creature's soul can always choose to rest in the monument, ignoring all other spell and creature effects. While inhabited, creatures within 10 feet can make a DC 15 Intuition check to listen to the soul inside the monument. Even on a success, most of the message tends to be garbled, with only a few words being intelligible. Whether the creature succeeds or not, it can't attempt this again until it completes a rest.<br><br>Casting this spell again on an inhabited monument creates an ethereal body for 24 hours for the inhabitant. It can't move more than 10 feet from the monument. It can speak and be heard while in this body, and it can choose to vanish while in the body and not speak.",
    "empower": "Empower this spell as if it was a tier 9 spell. Casting an empowered version on an inhabited monument creates a replica of the physical body of the creature, allowing for the creature to be revived within the duration."
  },
  {
    "name": "Concussive Burst",
    "tier": 1,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "5 feet",
    "duration": "Instantaneous",
    "desc": "You create a powerful burst of energy in a target direction that knocks you 30 feet away. Any creature in the target direction must make a Strength saving throw or be knocked away 30 feet from you and be knocked prone. A successful saving throw causes the creature to be knocked away 5 feet and not be knocked prone.",
    "empower": "The target area increases to a 15 foot cone.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Lull",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A target creature must make an Intuition saving throw or become gradually more drowsy. At the start of each of their turns, their maximum AP is reduced by 1 for the duration of the spell. A creature that reaches 0 AP falls asleep for the remaining duration, or until forcefully woken up by damage or an adjacent creature spending 2 AP to stir them awake.",
    "empower": "A creature that wakes up before the spell ends only has 1 AP on their next turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Space Eater",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Eldritch",
      "Space"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You conjure a being from beyond that devours the empty space between you and a target creature up to 30 feet away from you. The creature is pulled directly adjacent to you, and everything in a 30 foot long, 5 foot wide line is moved an equal distance towards you. Objects that are not fully contained within the area are unaffected.",
    "empower": "Reduces the AP cost to 0.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Scourge",
    "tier": 1,
    "tags": [
      "Evocation",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A crackling blast of dark magic rushes from your chest towards a target creature within range that you can see. It must make a Dexterity saving throw. On a failure, it and all other creatures within 5 feet of the target take 2d8 unholy damage, and you can cast this spell again this turn on a different creature.",
    "empower": "Increases secondary damage range to 10 feet. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Zealous Accusation",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You issue forth an accusation laced with your conviction. Up to two creatures within range must make a Willpower saving throw or take 2d6 radiant damage. Creatures that succeed take half damage.",
    "empower": "Damage increased to 3d6.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Grass Slicer",
    "tier": 1,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "A razor sharp wind emanates from you and slices through the ground in a 15 foot wide, 30 foot long line. Creatures in the way must make a Dexterity saving throw or take 3d4 slashing damage. Creatures not in contact with the ground are unaffected.",
    "empower": "The line extends to 45 feet. Creatures that succeed on their saving throw take half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Call Salamander",
    "tier": 1,
    "tags": [
      "Summoning",
      "Spirit",
      "Fire"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Summons a small spirit of pure fire to assist you. Choose a creature in range. The creature is filled with vital energy. They regain 2 HP at the start of each of their turns, and have advantage on saving throws made against any poison, disease, or curse.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Call Undine",
    "tier": 1,
    "tags": [
      "Summoning",
      "Spirit",
      "Water"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Summons a small spirit of pure water to assist you. Choose a creature in range. The creature is protected by a thin shimmering veil. The affected creature has resistance to damage dealt by other creatures during its turn, and when it would make a saving throw during its turn, it rolls 1d4 and adds the result to its saving throw.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Quick Draw",
    "tier": 1,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You can cast this spell while rolling initiative to immediately draw a weapon, if necessary, and make one weapon attack on a target within range of your weapon.",
    "empower": "You can draw the weapon of an adjacent creature instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Healing Touch",
    "tier": 1,
    "tags": [
      "Evocation",
      "Holy"
    ],
    "cost": "1 to 3 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "A creature you touch heals 1d6 hit points per AP spent.",
    "empower": "You add your spellcasting stat to each die rolled.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Summon Cave",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Draconic",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot radius)",
    "duration": "Instantaneous",
    "desc": "The earth rises around you to form a dome with a radius of 15 feet centered on you. One side of the dome, a 90 degree arc, is left open. You choose which side is open.<br><br>The newly formed cave is dark, unless light is inside or can get through the opening. The cave has AC 10 and 50 hit points. If its hit points are reduced to 0, the spell ends immediately as the cave collapses.",
    "empower": "The cave has resistance to physical damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Prying Mind",
    "tier": 1,
    "tags": [
      "Divination",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "You attempt to intrude into a creature's mind and tear out a momentary but useful memory. The creature must make a Knowledge saving throw. On a failure, it takes 2d10 psychic damage, and you select an action it can't use on its next turn.",
    "empower": "Damage increased to 3d10. A successful save deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Deflection",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Arcane",
      "Fey",
      "Universal"
    ],
    "cost": "1 AP",
    "range": "Self ",
    "duration": "Instantaneous",
    "desc": "As a response to being targeted by an attack, you can add your spellcasting modifier to your AC for that attack.<br><br>If you successfully avoid a ranged weapon attack in this way, you can choose another creature within 30 feet to be targeted by the attack instead.",
    "empower": "Adds an additional 2 AC."
  },
  {
    "name": "Envenomed Dart",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Poison",
      "Silent"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "With a gesture, a magically poisoned projectile silently flies forth at a target you can see within range. It must make a Dexterity saving throw or take 1d6 piercing damage and become affected by the poison. At the start of its next turn, it must make a Constitution saving throw or lose 2 AP.<br><br>A creature that cannot see you has disadvantage on saving throws from this spell, and is unaware they have taken damage or that you have cast this spell.",
    "empower": "A failed Constitution saving throw also deals 1d12 poison damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Corpse Explosion",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Unholy",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A creature corpse or a dead creature reanimated by one of your spells within range that you can see explodes into black flames. All creatures within 10 feet of the corpse must make a Dexterity saving throw or take 2d10 fire damage and 2d10 unholy damage, with a successful saving throw dealing half damage instead. The target corpse or creature is utterly destroyed.",
    "empower": "Choose one:<br>- Either the fire or unholy damage is increased by 1d10.<br>- The radius is increased to 15 feet.<br>- Refund 2 AP when targeting a creature you have reanimated.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Puppeteer",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Unholy",
      "Summoning"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A dead creature jerkily rises to life under your control, restored to its maximum hit points. It is significantly weakened in this state - its maximum AP is reduced to 1 and cannot be increased, its movement speed is halved, and it is vulnerable to all damage. It can make one attack for 1 AP. It takes its turn after yours. Casting this spell again ends the spell on any existing targets.<br><br>When the spell expires, the creature's body is reduced to ash, consumed by the magic that animated it.",
    "empower": "Duration increased to 1 hour.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Plague Guard",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Disease",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "8 hours",
    "desc": "You reinforce your body and make yourself immune to physical diseases as well as all spells with the Disease tag that have a tier equal to or lower than the tier you cast this spell at.",
    "empower": "Range becomes touch.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Soul Sear",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A ghostly beam of dark magic extends from your palm to a creature you can sense, passing through all other objects and creatures. The target creature must succeed on a Constitution saving throw or take 3d6 unholy damage. A creature reduced to 0 hit points from this spell has their soul burned out of their body, leaving behind a body perfect for future use. Casting a Necromancy spell on such a body refunds half the MP cost used for the spell.",
    "empower": "Damage increases to 4d6. A creature that succeeds on the saving throw takes half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Aqualung",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Water"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 hour",
    "desc": "You create a bubble of controlled water and air that surrounds a 30 foot radius around you. Creatures you choose within this area can breathe underwater and gain a swim speed equal to their walking speed. They lose these benefits if they leave the area.",
    "empower": "Radius increased to 45 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Spark of Action",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Lightning"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A creature at 0 hit points or a creature you are currently controlling with a Necromancy spell is struck with a jolt of electricity, and immediately takes one non-spell action that costs 2 AP or less. It has disadvantage on all rolls, and its targets have advantage on all required rolls.<br><br>A creature can only be targeted once per turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Noxious Cloud",
    "tier": 1,
    "tags": [
      "Evocation",
      "Disease"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A 10 foot radius sphere, increased by 5 feet per AP spent after the first, centered on a target point you can see erupts into a thin brown mist. Any creature in the area when it is created, as well as any creature that starts their turn inside of it or moves into it during their turn, must make a Constitution saving throw if they can breathe. On a failure, they lose 2 AP coughing and hacking, or 1 AP instead if the spell was cast with fewer than 3 AP.<br><br>The mist dissipates at the start of your next turn, or when a Wind spell affects its area.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Magic Fist",
    "tier": 1,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Magical force surrounds your fist. The next unarmed attack you make before the end of your next turn that hits your target sends them flying backwards 30 feet. If they collide with another creature or object during this movement, they immediately stop and are knocked prone and take an additional 1d12 bludgeoning damage.",
    "empower": "Removes the AP cost from this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Outer Beckons",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Eldritch",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "10 minutes",
    "desc": "Distracting and disturbing whispers haunt the target, who must succeed on an Intuition saving throw. On a failure, every time it makes an attack roll or ability check, it rolls 1d6 and subtracts the result from its roll.<br><br>The creature can repeat the saving throw at the end of each of its turns where it fails an attack roll or ability check. On a success, the spell ends.",
    "empower": "Range becomes Sight.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Disjunct",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Space"
    ],
    "cost": "1 or 3 AP",
    "range": "15 feet",
    "duration": "Instantaneous",
    "desc": "You teleport to target location within range. Any creature in that space is teleported to your former location. If cast for 3 AP, range is increased to 45 feet.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "False Escape",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Illusion",
      "Forbidden (Nightmare)"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature you are aware of must succeed on a Knowledge saving throw. On a failure, the next time they attempt to move before the spell ends, they instead lose all their movement. The target believes they have been pulled back to their original location after their movement. If they are not frightened, they must then succeed on an Intuition saving throw or become frightened for the duration of the spell. On a success, the spell ends.<br><br>A creature can repeat the Intuition saving throw at the end of each of their turns. On a success, they are no longer frightened, and the spell ends.<br><br>When cast on a frightened target, the spell's range increases to Sight, and they take 3d10 psychic damage on a failed Intuition saving throw instead of being frightened. A successful saving throw reduces the damage taken by half.",
    "empower": ""
  },
  {
    "name": "Turnkey",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Universal"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous ",
    "desc": "This spell either mechanically locks or jams a doorway, or removes a mechanical lock or jam. If used to unlock a magical lock, make a contested spellcasting ability check against the source's spellcasting DC, dispelling the magical lock on a success.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fleeting Shadow",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Shadow"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You wrap yourself in shadow. Instead of your normal movement this turn, you can move in a straight line in any direction up to half your movement speed, up to three times. This movement ignores difficult terrain and can pass through creatures. Creatures can't spend AP as a response to this movement.<br><br>At the end of your turn, if you cannot fly and are above the ground, you fall to the ground.",
    "empower": "Gain one additional movement.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Soften Surface",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You spray acid covering a 10 foot cube within range. If it lands on an object that is completely contained within the area, the object becomes vulnerable to all slashing, piercing, and bludgeoning damage.",
    "empower": "Area increased to a 15 foot cube.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Conjure Feyblood",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Fey",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "24 hours",
    "desc": "You create enough Feyblood poison for a number of applications equal to your spellcasting stat. When applied to a weapon or piece of ammunition, Feyblood requires the target to make a DC 13 Constitution saving throw or be poisoned for 1 minute. A creature poisoned in this way is also charmed by all creatures it can see and does not realize it was wounded. It can't attack or cast spells while charmed in this way.<br><br>An affected creature that takes damage is no longer charmed, and can then repeat the saving throw against the poisoned condition immediately and at the end of each of its turns. On a success, the effect ends. An adjacent creature can use 2 AP to shake an affected creature free of the charmed condition.<br><br>Casting this spell again destroys all previously summoned applications. After 24 hours, all summoned applications dissolve harmlessly.",
    "empower": "You add your proficiency modifier to the number of applications created.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Infernal Consumption",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Evocation",
      "Forbidden (Hellfire)"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Obsidian flames attempt to envelop target creature within range that you can see. They must succeed on a Dexterity saving throw, taking 5d6 damage on a failure and half damage on a success. Half of the damage is fire, while the other half is unholy.<br><br>If this reduces the creature's hit points to 0 or lower, you steal one of their hit dice until you spend it or complete a rest.",
    "empower": "Pay the empower cost in hit points instead of MP. Damage increased to 6d6. Steals two hit dice if it successfully reduces a creature to 0 or fewer hit points."
  },
  {
    "name": "Arctic Winds",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Cold",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot line)",
    "duration": "1 minute",
    "desc": "Chilling winds blow forth in a 30 foot long, 5 foot wide line. Creatures inside must make a Constitution saving throw or take 3d4 cold damage.<br><br>The winds remain for 1 minute. Creatures moving against the winds use 2 feet of movement for every 1 foot moved.",
    "empower": "Range increased to 45 feet. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Carried Burden",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Holy"
    ],
    "cost": "X AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "You take the burden of weak flesh from creatures you choose within range and put it upon yourself. Every chosen creature other than yourself is healed for 1d6 hit points, plus additional healing equal to your spellcasting stat times the number of AP spent to cast this spell.<br><br>At the start of your next turn, you must make a Constitution saving throw with a DC equal to half the damage healed, to a maximum of 25. On a failure, you lose AP equal to the spell's AP cost as the burden proves too heavy for you. You repeat this saving throw at the start of each of your turns until you succeed, with the DC dropping by 5 on each failure.",
    "empower": "Healing increased to 2d6.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Uri's Bountiful Tree",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Plant",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "15 feet",
    "duration": "15 minutes",
    "desc": "You create a 15 foot tall tree bearing fruit of your choice in an empty space within range. The tree grows 3 fruits upon creation, and grows one new fruit every minute. A creature that eats a fruit is nourished and sustained for one full day and doesn't need to eat or drink anything else for that day, heals 1d4 hit points, and is protected from natural disease for one full day.<br><br>A creature that eats more than three fruits in one day becomes oversatiated and takes 1d4 poison damage instead of any of the spell's benefits.<br><br>The spell fails if the tree cannot grow to its full height.",
    "empower": "The tree creates two fruits every minute.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Ether Twist",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature must make a Constitution saving throw or have their ethereal pattern forcibly modified, taking 2d8 arcane damage. Until the start of your next turn, the target is vulnerable to the next source of arcane damage, ignoring resistances and immunities.",
    "empower": "Damage increased to 3d8. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Shark Shadow",
    "tier": 1,
    "tags": [
      "Illusion",
      "Water",
      "Shadow",
      "Beast",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "The ground in the area ripples as a shadowy fin surfaces, seemingly everywhere at once as it prowls the area.<br><br>When a creature you can see within range takes damage from a slashing or piercing attack, or a spell with the Water tag, you can command the shadow to emerge as a shark to attack the creature as a response. This deals 1d10 piercing damage, and causes the creature to bleed illusory blood for the duration of the spell. Additional attacks from the shark on such targets deal 2d10 damage instead.<br><br>A creature can only take damage from the shark once between each of your turns. You can make one attack as a response every turn for 0 AP, with subsequent attacks costing 1 AP.<br><br>The spell cannot reach targets not touching the ground inside the spell's area. If you leave the area, the spell ends.",
    "empower": "You know the location of bleeding creatures within the area and can attack them even if you can't see them.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sparkstep",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "30 feet ",
    "duration": "1 hour",
    "desc": "Target creature's steps are lightened. Their walking speed is increased by 10 feet. When they are targeted by another spell with the Lightning tag, their walking speed is increased by 10 feet until the end of their next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Explosive Aegis",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Fire"
    ],
    "cost": "1 or 3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You ready an explosive field around yourself. The first time a creature damages you in melee before the spell ends, it detonates and deals 1d12 fire damage to your attacker, ending the spell. If cast with 3 AP, damage is increased to 3d12.",
    "empower": "Damage increased by 1d12. Other creatures you choose within 5 feet must make a Dexterity save or take the same damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Spark of Joy",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Fey",
      "Silent"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "10 minutes",
    "desc": "You touch a creature, which must succeed on an Intuition saving throw. On a failure, the creature is flooded with feelings of joy. If they are not fighting you, they are charmed by you for the duration, unless you or your allies take action that would offend them.<br><br>If cast on a creature fighting you, the sudden rush of emotion disorients the creature instead of its usual effect. It loses 1 AP on its next turn and loses all AP it currently possesses.<br><br>A creature that succeeds on its saving throw knows you attempted to charm them.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Haunting Chill",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Cold",
      "Spirit"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A target creature you can see must make a Constitution saving throw or become haunted by a clinging chill. The next three times they take damage before the start of your next turn, they take an additional 1d6 cold damage. A creature that takes damage from this spell three times has their movement speed reduced to 0 until the start of your next turn, and can't use AP outside of their turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Frenzy Bite",
    "tier": 1,
    "tags": [
      "Evocation",
      "Beast",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Two poisoned fangs sprout forth from your hand and fly at a target creature within range that you can see. It must make a Dexterity saving throw or take 2d4 poison damage.<br><br>If it failed its Dexterity saving throw, at the start of its next turn, the target must make a Willpower saving throw, with beasts having disadvantage. On a failure, the target takes an additional 1d6 poison damage and flies into a mad rage for that turn, gaining 1 AP and using their turn to attack the closest creature with all remaining AP. A creature reduced to 0 hit points from this damage only falls unconscious when their turn ends.",
    "empower": "Initial damage increased to 3d4. Additional damage increased to 2d6.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fireflies",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "1-3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "For each AP spent on this spell, two small motes of fire spin into existence in an orbit around your head. As part of casting the spell, and for 1 AP on subsequent turns, you can send up to 3 of these motes towards creatures within 60 feet that you can see. Each mote can target one creature, and creatures targeted by a mote must succeed on a Dexterity saving throw or take 1d4+1 fire damage per mote.",
    "empower": "Summons an additional mote per AP spent. A creature that makes a successful saving throw takes half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Storm Spear",
    "tier": 1,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "You hurl a spear of lightning at a target creature within range that you can see, who must make a Dexterity saving throw or take 1d10 lightning damage.<br><br>For the duration of the spell, you can throw a second spear for 2 AP, and a third spear for 2 AP. The second spear deals 2d10 lightning damage on a failed saving throw, and the third spear deals 3d10 lightning damage on a failed saving throw. The spell ends after throwing a third spear.",
    "empower": "A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Beckon Rats",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Beast",
      "Disease"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You call a swarm of biting rats to attack a 10 foot radius, increased by 5 feet for every AP spent past the first, centered on a target point within range. Every creature you choose in the area must succeed on a Dexterity saving throw or take 1d4 piercing and 2d4 poison damage. On a successful saving throw, creatures only take the piercing damage. Small creatures have disadvantage on the saving throw, and tiny creatures automatically fail. <br><br>A creature that takes poison damage contracts the Ratbite disease. It takes an additional 1 poison damage each time it would normally take poison damage, or when it would receive healing. When it uses a hit die to recover hit points, it only restores hit points equal to its Constitution. It can make a Constitution saving throw after using a hit die during a break to attempt to recover from the disease.",
    "empower": "Choose one: radius increased by 10 feet, poison damage increased by 3d4, or piercing damage increased by 2d4.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Color Shift",
    "tier": 1,
    "tags": [
      "Illusion",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "Self (60 foot radius) ",
    "duration": "8 hours",
    "desc": "You change the colors of any number of objects within range. They remain in the new color until the duration of the spell. You can be as specific as you choose with each color, but you cannot create new patterns, only replace colors in an existing pattern.",
    "empower": "Duration becomes \"Until dispelled\".",
    "author": "CrusaderDroid"
  },
  {
    "name": "Vexatious Traveler",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Spirit",
      "Poison",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A malignant wandering spirit makes contact with a target creature, who must succeed on a<br>Constitution saving throw or suffer 2d6 poison damage. Roll 1d4 on a failed saving throw to determine if the target is poisoned, blind, frightened, or paralyzed until the end of your next turn.",
    "empower": "Damage increased to 3d6. On a successful saving throw, the target takes half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Biting Remark",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Acid",
      "Fey"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You speak words laced with deadly magic, directed at a target creature you can see that can hear and understand you. It must make a Willpower saving throw or take 3d4 acid damage and suffer disadvantage on its attack rolls on its next turn.",
    "empower": "Damage increased to 4d4. A successful saving throw deals half damage and no other effect.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Shine Ray",
    "tier": 1,
    "tags": [
      "Evocation",
      "Radiant"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You fire a bright beam of light that strikes a target creature you can see within range. It must make a Constitution saving throw or take 2d10 radiant damage.",
    "empower": "Damage increased to 3d10. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Beguiling Spores",
    "author": "Lupusam",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Poison",
      "Psychic",
      "Forbidden (Fungal)",
      "Silent",
      "Still"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "Any number of creatures you choose within range must pass a Constitution save, or be Charmed by the mind altering spores you release. If you damage a creature Charmed in this way, that creature takes 2d6 poison damage and the condition is replaced with Poisoned for the remaining duration for that creature as they struggle to overcome the chemical influence.<br>A creature immune to the Charmed condition or the Poisoned Condition is immune to Beguiling Spores' full effect.",
    "empower": "Increase the range to 45 feet and the duration to 5 minutes."
  },
  {
    "name": "Clay Coffin",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "The earth rises up to entrap a target creature within range that you can see. They must make a Dexterity saving throw or be encased in earth, unable to move or take actions until the encasing earth is destroyed.<br><br>The earth casing has 20 hit points and AC 10. It can be destroyed by other creatures attacking it, and all damage that creature would take is redirected to the casing. A trapped creature can make a Strength saving throw at the end of each of its turns. On a success, they instantly break free.",
    "empower": "The earth casing has resistance to physical damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Alchemical Waste",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "1-2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You expel various waste products from alchemy in a 30 foot long, 5 foot wide line. Creatures in the area of effect must make a Dexterity saving throw or take 2d8 acid damage. The acid remains until the start of your next turn, and any creature that steps in the area during their turn or starts their turn in the area must make a Dexterity saving throw or take 2d8 acid damage, halved on a success. If cast for 2 AP, the damage is increased from 2d8 to 3d8 on both the initial saving throw and the lingering area.",
    "empower": "Creatures that fail the saving throw are also poisoned until the start of your next turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fire Lash",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "1-2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A thin wave of fire reaches out from your hand and lashes at a target creature within range. It must make a Dexterity saving throw or take 3d8 fire damage. If cast for 2 AP, it instead deals 4d8 fire damage, and a creature that succeeds on the saving throw takes half damage.",
    "empower": "Damage increases to 5d8. If cast for 2 AP, also affects an adjacent creature to the target.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Plague Boil",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on a Constitution saving throw or take 2d6 poison damage as a horrific boil emerges from their skin.<br><br>A creature that hits the victim with a weapon attack strikes the boil, causing it to burst into a hideous dark cloud that fills a 10 foot radius sphere for 1 minute. Creatures that start their turn in the cloud take 1d6 poison damage and are poisoned until the start of their next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Focused Sands",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Time"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature must succeed on a Willpower saving throw or take 1d12 damage and lose 1 AP until the end of their next turn, as a part of their skin is rapidly aged and reverted painfully.<br><br>A creature can only lose AP from this spell once between each of its turns.",
    "empower": "Damage increases to 2d12.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Lightning Tether",
    "tier": 1,
    "tags": [
      "Evocation",
      "Lightning",
      "Concentration"
    ],
    "cost": "1 or 2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You tether yourself to a target creature with a stream of electricity six inches wide. The tether has a maximum length of 60 feet, and moving farther than 60 feet from your target ends the spell. If cast with 1 AP, the initial cast range is reduced to 5 feet.<br><br>When you move, the tether moves with you. Any creature that touches the tether or starts their turn inside the tether's area takes 1d8 lightning damage, plus your spellcasting stat. A creature can only take this damage once between each of your turns.",
    "empower": "Tether maximum range increased to 120 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Spectral Shift",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "As a response to being targeted by a weapon attack, you turn yourself into an ethereal ghost, sacrificing 1d6 maximum hit points. You are immune to slashing, piercing, and bludgeoning damage until the start of your next turn, but vulnerable to fire and radiant damage. You can't make weapon attacks in this state. Each time you use this spell before taking a break or rest, the maximum hit point cost increases by 1d6.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Song of Beginning",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Forbidden (Song)",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song about the start of a grand adventure, invigorating the spirits of your allies. If you spend at least 1 AP during your turn towards casting this spell, creatures you choose within range become inspired. Inspired creatures add 1 to every roll they make, and can survive being reduced to 0 or fewer hit points once per rest, instead being reduced to 1 hit point. The effect vanishes if creatures leave the area of the spell or if you do not spend at least 1 AP on trying to cast the spell.<br><br>When completed, you form the energy from the song into a sphere of focused magic that is flung at a location within range. Creatures in a 15 foot radius of the impact point must succeed on an Intuition saving throw or take 3d6 radiant and 3d6 psychic damage, halved on a success. Inspired creatures are unaffected.",
    "empower": "Inspired creatures gain temporary hit points until the start of your next turn equal to your proficiency modifier times the number of AP spent."
  },
  {
    "name": "Saint's Dust",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Holy",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "24 hours",
    "desc": "You scatter blessed dust in a 10 foot square within range, which then clings tightly to anything it falls upon. This dust does nothing to humanoids, beasts, and constructs, but any other creature that touches the dust by moving through it or interacting with a dusted object takes 2d6 radiant damage. A creature can only suffer this damage once on each of their turns, even if it would travel through dust created by multiple applications of this spell. <br>The dust falls off of carried objects in the area, including wielded weapons.",
    "empower": "Area increased to 15 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Arcane Bolt",
    "tier": 1,
    "tags": [
      "Evocation",
      "Universal",
      "Arcane"
    ],
    "cost": "1-2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A solid bolt of pure magic forms from the palm of your hand and unerringly homes in on a creature you can see within range, dealing 1d4+2 arcane damage on hit. If cast with 2 AP, fires three bolts instead, each one targeting a different creature.",
    "empower": "Launch a second wave of three bolts at either the same creatures or different creatures within range. A creature can't take damage from more than two bolts.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mystic Backhand",
    "tier": 1,
    "tags": [
      "Evocation",
      "Arcane"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "As a response to any action, you fling a mystic bolt at a target within range, dealing 1d6 arcane damage plus your spellcasting stat.",
    "empower": "Removes the AP cost on this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Dragonfear",
    "tier": 1,
    "tags": [
      "Illusion",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Target creature perceives you as a fearsome dragon. At the start of each of its turns, it must make an Intuition saving throw. On a failure, it becomes frightened of you as long as it can see you until the spell ends.",
    "empower": "Targets two additional creatures.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Spirit Artery",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Spirit"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "Spirit-filled winds surround you, opening the spirits of all creatures you choose within range. Each affected creature restores 2 hit points for each AP they spend on their next turn.",
    "empower": "Removes the AP cost on this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Tree of Health",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Plant",
      "Holy"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You enchant a seed in hand and toss it to the target location, where it instantly blooms into a towering tree that occupies a 10 foot radius, 15 foot tall cylinder.<br><br>A creature that begins their turn within 5 feet of the tree heals 1d6 hit points and has resistance to poison damage until the start of their next turn. A creature can only benefit from one tree per turn.<br><br>The tree has AC 12, 20 hit points, and vulnerability to slashing and fire damage. If reduced to 0 hit points, it falls in a 10 foot long, 10 foot wide line away from its attacker. Creatures in range must make a Dexterity saving throw or take 3d10 bludgeoning damage. The tree then disappears.<br><br>If the tree cannot grow to its full height, it first deals 3d10 bludgeoning damage to any object impeding its way, continuing to grow if this damage would destroy the object. If it does not destroy the object, the tree violently splinters and destroys itself.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Monkey's Agility",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "Self ",
    "duration": "1 hour",
    "desc": "You gain a climb speed equal to your walking speed for the duration of the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wintercloak",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Cold",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "A scintillating swarm of snowflakes surrounds you, chilling the air nearby. You gain a number of temporary hit points equal to 1d10 plus your spellcasting modifier. While the temporary hit points remain, you are invisible if you are obscured and have not attacked or cast a spell on your last turn. Your invisibility ends when you attack or cast a spell.",
    "empower": "Also creates a cloud of fog in a 20 foot radius sphere centered on you, which remains while you have temporary hit points from this spell. The fog lightly obscures creatures inside.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Telltale",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Psychic",
      "Spirit"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "A target creature makes a Willpower saving throw. On a failed save, for the next minute that creature freely speaks every thought they have without noticing they are thinking out loud. These thoughts are in the primary language of the affected creature. If the creature cannot speak any language this spell fails.<br><br>If an affected creature notices at any point that another creature nearby has heard one of their thoughts, they will believe that they misspoke, and this spell immediately ends. A creature that succeeds on the initial Willpower save, or for whom this spell has ended, cannot be affected again for 1 day.",
    "empower": ""
  },
  {
    "name": "Mud Spray",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Earth",
      "Water"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Thick mud is launched at a 10 foot cube centered on target point within range you can see. Creatures in the area must make a Dexterity saving throw or take 2d8 bludgeoning damage and be blinded until they use 1 AP to clean the mud off their eyes.",
    "empower": "Damage increased to 2d12. A successful saving throw deals half damage."
  },
  {
    "name": "Simple Ward",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Universal",
      "Arcane"
    ],
    "cost": "Up to 3 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You create a simple protective field around a target creature in range or in a 10 foot radius area centered on yourself. For each AP spent to cast this, the ward has 3 temporary hit points.<br>Creatures inside a warded area use the ward's hit points first when taking damage.<br>At the start of your next turn, the ward fades.",
    "empower": "Add your spellcasting modifier to the final hit point total.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Piper's Call",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "10 feet",
    "duration": "1 hour",
    "desc": "You call a rat swarm to an empty space within range. It takes its turn after yours and obeys your mental commands. It vanishes when reduced to 0 hit points.<br><br>If you cast this spell again, the previous rat swarm vanishes.",
    "empower": "Summons two rat swarms instead. If you cast this spell again, both of them vanish."
  },
  {
    "name": "World's Cry",
    "tier": 1,
    "tags": [
      "Evocation",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You unleash a small portion of the world's pain upon a 15 foot cube adjacent to you. Creatures inside must make an Intuition saving throw or take 2d10 damage, halved on a success. This damage has no type and cannot be reduced or negated in any way.",
    "empower": "Damage increased to 3d10. If the creature is vulnerable to a damage type, they are vulnerable to damage from this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Scarlet String",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Divination",
      "Necromancy",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "1 mile",
    "duration": "1 hour",
    "desc": "Requires a drop of blood that was taken from the target within the last 24 hours.<br><br>You form a connection using a sample of blood to the original creature. For the duration, only visible to you is a transparent red thread that connects between the blood sample and the target, if they are in range.<br><br>If the target is dead and their soul is still within range, or the target has also cast Scarlet String using your blood and is within range, you can sense their mind, and can telepathically communicate. Either side may unilaterally cut off this connection at any time.",
    "empower": "When you empower this spell, by offering a drop of your own blood, you may grant a willing creature within 30 feet of you the effects of this spell targeting yourself. (This uses the other creature's concentration)."
  },
  {
    "name": "Shadow Thread",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Spirit",
      "Shadow",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Pitch-black thread winds around a target creature in range that you can see, who must make a Dexterity saving throw. On a failure, they become restrained for the duration. You can spend 1 AP to pull a creature restrained by this spell up to 20 feet closer to you. The creature can spend 2 AP during their turn to make a Strength saving throw, breaking free on a success.",
    "empower": "AP cost to attempt a save increases to 3.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Outburst",
    "tier": 1,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "Immediately after landing a successful melee weapon attack, you can cast this spell to let loose a ferocious blast of energy from your weapon at a target within range, dealing damage equal to your weapon's damage die, plus your spellcasting stat. A creature can only be targeted by this spell once on each of your turns.",
    "empower": "Removes the AP cost.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sacred Shard",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Physical",
      "Radiant",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A longsword-sized shard of holy metal descends from the sky onto a target point in range. If a creature is occupying the area, it must make a Dexterity saving throw or take 1d8 slashing and 1d8 radiant damage.<br><br>The shard can be picked up and wielded by you as a weapon. It is treated as a longsword that deals an additional 1d4 radiant damage on hit. No other creature can move the shard.",
    "empower": "The shard gains a bonus to its attack and damage rolls equal to half your proficiency modifier, rounded down.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Warp Bubble",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Space"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A target creature is encased in a bubble of warped space that follows them. Until the start of your next turn, weapon attacks from and against that creature fail, as the bubble sends the attack elsewhere. Unwilling creatures can make a Willpower saving throw to avoid being affected.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Edit Perception",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on an Intuition saving throw. On a failure, you briefly invade their mind and remove the existence of yourself or a creature you can see from their perception. The chosen creature cannot be detected with any of the target's senses.<br><br>If the chosen creature damages or interacts with the target, it can repeat the saving throw. On a success, the spell ends.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Earthfriend",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Earth",
      "Spirit",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (10 foot radius)",
    "duration": "1 minute",
    "desc": "You and all creatures you choose within range are magically bonded with the earth. All affected creatures are unaffected by terrain hazards and penalties, and increase their movement speed by 10 feet.<br>The spell ends for a creature if they are not touching the ground for more than 3 seconds.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Waterspout Step",
    "tier": 1,
    "tags": [
      "Evocation",
      "Water",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Water bursts from the ground beneath you and catapults you up to 60 feet into the air.",
    "empower": "Removes the AP cost on this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Call Gnome",
    "tier": 1,
    "tags": [
      "Summoning",
      "Spirit",
      "Earth"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Summons a small spirit of pure earth to assist you. Choose a creature in range. The creature has their natural defenses bolstered. They gain resistance to all types of damage. Every time they take damage, roll a d20. If the result is lower than the greater between 11 or the amount of damage they would have taken before resistance is applied, this spell ends for them.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Heat Shock",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A 20 foot radius area centered on target point explodes into flames. Creatures inside must make a Dexterity saving throw or take 2d6 fire damage.<br>At the start of your next turn, a 20 foot radius area centered any point within the previous area explodes into flames. Creatures inside must make a Dexterity saving throw or take 2d6 fire damage.",
    "empower": "Damage increases to 3d6 on both explosions. A creature that succeeds on their saving throw takes half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Aim True",
    "tier": 1,
    "tags": [
      "Divination"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "The target's vision briefly improves to where they can see two seconds into the future. The target adds your spellcasting modifier to the next ranged attack they make, and adds your spellcasting modifier to the damage done by any critical hit they make.",
    "empower": "The target can't have disadvantage on the attack roll.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Split Second",
    "tier": 1,
    "tags": [
      "Illusion",
      "Time"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "As a response to a creature making a weapon attack or casting a spell that targets one creature, you can slow their perception of time. Their target gains 1 AP that can only be used on responses that target themselves or their attacker.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mindburst",
    "tier": 1,
    "tags": [
      "Divination",
      "Psychic",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You strike at the target creature's mind, dealing 4d6 psychic damage.",
    "empower": "The creature must succeed on an Intuition saving throw or take an additional 2d6 psychic damage, taking half of that damage on a success.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fox Hunt",
    "tier": 1,
    "tags": [
      "Illusion",
      "Fey",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You appear to transform yourself into three separate foxes. You can't attack or cast spells in this form, but you can move each fox separately during your turn. Each fox shares your AC, and if a fox would take damage, it disappears.<br>At the start of your next turn, you choose one fox to reveal as yourself. If only one fox is left remaining, the spell ends immediately. If all remaining foxes take damage simultaneously, choose one fox to reveal as yourself.",
    "empower": "You transform into five foxes instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Bramble Block",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "For each AP spent on this spell, you create two 5 foot cubes of brambles on empty spaces within range, which must be adjacent to at least one cube of brambles.<br><br>The brambles block ranged weapon attacks and cost 2 feet of movement speed for every 1 foot traveled.",
    "empower": "Create an additional cube per AP spent.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Create Weakpoint",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "1 AP",
    "range": "30 feet ",
    "duration": "Instantaneous",
    "desc": "You sling a quick splash of acid aimed at a target creature within range that you can see. It must make a Dexterity saving throw or take 1d4 acid damage and become vulnerable to the next source of physical damage it does not resist or null.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Treasure Sense",
    "tier": 1,
    "tags": [
      "Divination",
      "Draconic"
    ],
    "cost": "2 AP",
    "range": "1 mile",
    "duration": "Instantaneous",
    "desc": "Within the spell's range, you become aware of the most valuable  collection of riches. You obtain a mental image of the collection and a 5 foot radius surrounding it.<br><br>The spell ignores all treasure within 10 feet of you.",
    "empower": "You also sense the current direction of the collection.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Maneater",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Acid",
      "Plant",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "30 feet ",
    "duration": "8 hours",
    "desc": "You subtly create and toss a seed into a space within range, which burrows into the ground. At the start of your next turn, it quietly blooms into an acidic, carnivorous, oversized plant that remains burrowed. The first creature to move within 10 feet of the space triggers the plant and must make a Dexterity saving throw. On a failure, the plant deals 2d6 acid damage and grapples the creature. At the start of each of your turns afterwards, the plant deals 1d6 acid damage while it maintains the grapple.<br><br>The plant uses your spellcasting stat to determine its rolls when contesting grapples. If the creature breaks the grapple, the plant is torn apart and wilts immediately.<br><br>A Tiny or smaller creature reduced to 0 hit points from this spell is devoured by the plant. If a creature is reduced to 0 hit points while grappled, the plant retreats back into the ground and waits for another creature. The plant is destroyed if the terrain it resides in is destroyed or forcibly changed to or from difficult terrain, or if it is in the area of a damaging spell.",
    "empower": "You place two plants, which must be at least 15 feet away from each other.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sanguine Needles",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Necromancy",
      "Forbidden (Blood)",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature's open wounds burst forth into bloody needles, dealing piercing damage equal to half the difference between their maximum hit points and their current hit points, up to 10 damage times the tier of the spell.<br><br>Creatures without blood are immune to this spell.",
    "empower": ""
  },
  {
    "name": "Mist River",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Water",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You create a flowing river 30 feet long and 5 feet wide, with the midpoint being anywhere within range. You can shape the river however you like as long as the path of the river does not overlap with itself.<br><br>The river is difficult terrain. It emanates thick mist that covers a 15 foot wide, 10 foot tall line centered on the river, which heavily obscures vision inside and through the mist. The mist can be dispelled by a strong wind, but at the start of each of your turns, the mist returns. When the spell ends, both river and mist disappear.",
    "empower": "Range increases to 60 feet. Length increases to 60 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Shadowy Grasp",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Shadow",
      "Silent"
    ],
    "cost": "1 AP",
    "range": "Varies",
    "duration": "1 minute",
    "desc": "You manifest your shadow into the world as a phantasmal appendage of some sort. It can interact with objects as well as you can with your own hands or other limbs, but can lift no more than 1 pound.<br><br>When you first cast this spell and while this spell is active, once per turn you may use 1 AP to have the shadow attack, making an attack roll with your spellcasting modifier. On a hit the shadow deals 1d4 force damage.<br><br>The base reach of the shadow is 30 feet in bright light, 60 feet in dim light, and 120 feet in darkness.",
    "empower": "Strengthen the shadow's corporeal form, doubling its reach and raising its damage to 1d6."
  },
  {
    "name": "Call Sylph",
    "tier": 1,
    "tags": [
      "Summoning",
      "Spirit",
      "Wind"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Summons a small spirit of pure air to assist you. Choose a creature in range. The creature is supported by a gentle cushion of air. They gain an additional 10 feet of movement at the start of each of their turns, and their carrying capacity is doubled. Additionally, their falling speed can be no more than 60 feet per round, and they do not suffer fall damage. This spell ends for a creature upon landing from a fall of 15 or more feet.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Streaming Needle",
    "author": "CrusaderDroid",
    "tier": 1,
    "tags": [
      "Evocation",
      "Water"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute ",
    "desc": "One of your hands projects a thin but intense stream of water constantly. As part of casting this spell, and as an off-hand attack on each of your other turns, you can make an attack on a creature within 60 feet with this stream, using your spellcasting stat to determine your attack bonus. On a hit, it deals 3d4 slashing damage to creatures within 10 feet, 2d4 slashing damage to creatures between 10 to 30 feet, and 1d4 slashing damage to creatures between 30 to 60 feet. This spell is treated as having the lethal property. <br><br>You can't hold anything in your hand while the spell remains. The water extinguishes non-magical fires it touches. You can't cast this spell again until it ends.",
    "empower": "You add your spellcasting stat to the damage dealt."
  },
  {
    "name": "Grasping Shade",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Shadow"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Your shadow extends out to grab at an object or creature. An unwilling creature must make a Dexterity saving throw to avoid being grabbed. On a failure, you drag yourself through your shadow to an adjacent empty space to your target, optionally dealing 2d4 slashing damage.",
    "empower": "Removes the AP cost.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hungry Maw",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Eldritch",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "15 feet",
    "duration": "Instantaneous",
    "desc": "Your arm painfully transforms into the maw of an unknown creature, which bites down on a 15 foot long, 5 foot wide line. Creatures in the path must make a Dexterity saving throw or take 3d10 arcane damage. Creatures that succeed take half damage.<br><br>You take 3 damage when you cast this spell.",
    "empower": "Damage increased to 4d10. Self damage increased to 4.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Jaculus",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Draconic",
      "Spirit",
      "Summoning",
      "Wind"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "A ball of serpentine spirits become infused into your body for a short time, bringing with them the violent energy of a storm at sea.<br><br>For the duration of the spell, whenever you make a ranged weapon attack that launches one or more projectiles, one of the spirits enters each projectile and infuses it, increasing the speed and intensity of each shot. Your ranged weapon attacks that launch projectiles have their range doubled, ignore partial cover, and make no sound as they travel.",
    "empower": ""
  },
  {
    "name": "Greetings of Gravity",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Space",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Gravity intensifies in a 20 foot radius, 100 foot tall cylinder. Creatures inside must use 2 feet of movement for every 1 foot traveled, and flying creatures inside crash to the ground and can't fly while they remain inside. A creature that starts their turn in the area must succeed on a Strength saving throw or take 1d10 bludgeoning damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sudden Connection",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Fey",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "8 hours",
    "desc": "As you touch the target creature, it must succeed on an Intuition saving throw. On a failure, it becomes charmed by you for the duration. The target abruptly sees you as a friend, forgetting any prior misgivings it may have had towards you. When the spell ends, they keep this view of you.<br><br>The spell fails if you have damaged the creature within the past week, and ends immediately if the target takes damage. Creatures you are currently fighting automatically succeed on their saving throw. A creature that succeeds on their saving throw knows you tried to use magic to influence it.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Challenger's Charge",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You break into a dash, ignoring difficult terrain and other creatures in the way, before leaping forward onto a target point within range and slamming down with great force. Creatures within 5 feet of the point of impact must make a Strength saving throw or take 1d6 bludgeoning damage.<br>Creatures that have taken damage from this spell can't move away from you during their next turn until they have successfully hit you with a weapon attack.",
    "empower": "Range increased to 60 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wind Sign",
    "tier": 1,
    "tags": [
      "Evocation",
      "Wind",
      "Sign",
      "Deprecated"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Strong winds pick up around a 30 foot radius sphere centered on a point you can see within range. The winds blow away fogs and gases and impose disadvantage on ranged weapon attacks that cross through this area.<br><br>While inside the area, your Wind spells have their AP cost reduced by 1, to a minimum of 1.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Cauterize",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Blessed fire burns an injury on a creature you can see, healing 1d6+2 hit points. This healing benefits from bonuses to fire damage. In addition, the target is cured of the poisoned condition.",
    "empower": "Also grants the target advantage on saving throws until the start of your next turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Anticipate",
    "tier": 1,
    "tags": [
      "Divination",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You look into the future to see any immediate threats. If a hostile creature you can see spends 3 AP on an action or begins to cast a spell before the start of your next turn, you can gain 3 AP as a response and immediately take an action before the creature can finish its own action. The spell then ends.",
    "empower": "You can move up to half your movement speed in addition to taking one action.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Distort",
    "tier": 1,
    "tags": [
      "Evocation",
      "Space"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A 10 foot radius area of space centered on target point is forcibly distorted for a moment. Creatures in the area must make a Constitution saving throw or take 3d4 damage, which cannot be reduced or negated in any way. A creature that succeeds on the saving throw takes half damage.",
    "empower": "Radius increases to 15 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Aegis of Awe",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Holy",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Soft golden light forms a protective field around you. When a creature would target you with an attack or harmful spell, it must roll 1d20. On a roll of 10 or lower, they must choose a different target or lose the action.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Whisperwind",
    "tier": 1,
    "tags": [
      "Wind",
      "Transmutation"
    ],
    "cost": "1 AP",
    "range": "300'",
    "duration": "Instantaneous",
    "desc": "Whisper a message onto the wind, which travels unerringly toward your intended recipient. This spell can target any creature within range that has a clear path through the air. The message can only be up to 12 words, and are in a language you speak.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Ice Path",
    "tier": 1,
    "tags": [
      "Evocation",
      "Cold"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "15 minutes",
    "desc": "You layer ice over a 60 foot long, 5 foot wide, 6 inch thick line. The ice must have at least one end on solid ground, and cannot be at an angle steeper than 15 degrees.<br><br>The ice forms a traversable path, even over water. Creatures ignore difficult terrain when traveling on the path.",
    "empower": "Double either the width or the length of the path.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wave Blade",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Water"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create a horizontal blade of water that spans a 10 foot wide line across the ground, and launch it forward from you to target point within range. Creatures in the blade's path must succeed on a Dexterity saving throw or take 2d6 slashing damage, halved on a success. At the start of each of your successive turns, you can command the blade to move to a new location within 60 feet of you, slashing all creatures in the way. The blade can't travel vertically and must follow the surface of the ground.<br><br>If cast in water or while in a surface with water up to one foot in height, the blade doubles in size.",
    "empower": "Choose one - damage increased to 3d6, or blade width increases by 5 feet, or the blade can move vertically."
  },
  {
    "name": "Vampiric Touch",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Target creature must make a Constitution saving throw or take 4d6 unholy damage, halved on a success. You are healed for half of the damage dealt.",
    "empower": "You are healed for the damage dealt instead."
  },
  {
    "name": "Downpour",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Water",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Heavy rain falls in a 20 foot square, adding one foot of water to the area. The rain counts as difficult terrain, and any location with more than one foot of water inside is difficult terrain for creatures without a swim speed.<br><br>At the start of each of your turns, you can choose to move the rain to a new location. After you choose to move it or not, another foot of water builds up on the area.<br><br>Water from this spell is not magical and remains after the spell ends. It is not potable, and does not necessarily remain in the area it fell in, spreading out to adjacent areas as normal water would.",
    "empower": "Choose one - area increased to 30 foot square, or three feet of water pour out each turn."
  },
  {
    "name": "Vanish",
    "tier": 2,
    "tags": [
      "Illusion",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "15 minutes",
    "desc": "Target creature becomes invisible. The spell ends if the creature attacks or casts a spell.",
    "empower": "Removes the AP cost on the spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Magus's Entrenchment",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "30 feet ",
    "duration": "1 hour",
    "desc": "A 20 foot square centered on target point within range becomes magically infused to preserve its current state. It can't be changed from normal terrain to difficult terrain or vice versa, and spells that would create a persistent area of effect on that ground instead fail to have any effect on the area.<br><br>This spell preserves any existing effects in the area, suspending their duration until the end of this spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Revert",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Time"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "As a response to you or another creature within taking damage, you revert a portion of the damage taken. Up to half the damage or 10 damage, whichever is lower, is prevented.",
    "empower": "You can choose either to double the threshold to 20 damage, or to additionally affect all creatures within 5 feet of you.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Containment Field",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "24 hours",
    "desc": "You inscribe a magic circle in a 10 foot radius centered on target point. Non-summoned creatures can make a Willpower saving throw to attempt to exit the circle, ending the spell on a success. Unwilling creatures can make a Dexterity saving throw when this spell is cast to avoid being trapped inside the circle, moving to the nearest empty space on a success.<br><br>The circle prevents creatures from leaving. Summoned and reanimated creatures cannot target anything outside the circle with any effect or attack while inside. You can cast spells inside the circle, where they only affect anything inside the circle even if their range would exceed the area of the circle.<br><br>The spell ends if you enter the circle or cast this spell again.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Valthrian's Pack Bond",
    "author": "BFHNV",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Psychic",
      "Beast",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You form a psychic bond of instinct between yourself and any number of creatures within range.  Each round, the first time an affected creature spends AP as a response, all other affected creatures gain 1 AP that can only be used for responses.",
    "empower": "Affected creatures gain 2 AP instead."
  },
  {
    "name": "Grotesque Patchwork",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You take flesh from a dead creature within range and weave it into the wounds of an injured creature within range that you can see, restoring 5d6 hit points.<br><br>The creature corpse used for this can't be targeted by this spell again.<br><br>You can't target undead creature corpses, but you can target your own reanimated creatures instead of a corpse. Doing so sets your reanimated creature to 0 hit points, and you can't use its corpse as a target again.",
    "empower": "Healing increased by 1d6. You can distribute each die of healing among any other creatures in range."
  },
  {
    "name": "Aura of Clarity",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Psychic"
    ],
    "cost": "1 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "You project an aura that calms creatures you choose within range, helping them focus on magical endeavors. They can take the Focus action for 0 AP. Mage weapons used by affected creatures deal additional damage equal to your proficiency modifier.<br><br>You are not affected by this spell.",
    "empower": ""
  },
  {
    "name": "Crushing Aura",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Space",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You project a field around you that amplifies the gravity in the area. You and all other creatures inside have your movement reduced to 5 feet and cannot fly. Other creatures take 1d6 bludgeoning damage at the start of each of their turns. Creatures in the area that are flying crash to the ground, taking 1d6 bludgeoning damage per 5 feet fallen.<br><br>Once on each of your turns, you can spend 1 AP to intensify the effect on a creature within range. It must succeed on a Strength saving throw or take 1d12 bludgeoning damage and be knocked prone.",
    "empower": "Your movement speed is halved instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Manifold Woes",
    "tier": 2,
    "tags": [
      "Divination",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A target creature you can see must succeed on a Willpower saving throw or have their fate forcibly edited and then foretold to amplify their failures. Each time the creature fails an attack roll or saving throw, they suffer 1d10 damage.",
    "empower": "The creature has disadvantage on their next attack roll or saving throw.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rose of Lies",
    "tier": 2,
    "tags": [
      "Illusion",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "24 hours",
    "desc": "You create an illusory field covering a 30 foot radius which must be contained completely within the range of the spell. The field can show anything other than objects and creatures.<br><br>Inside the field is a black rose, which cannot be hidden by the illusion. You can place the rose anywhere within the field. If it is destroyed, the spell ends.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Zeno's Division",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Space",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "Any number of creatures you choose within range must succeed on an Intuition saving throw or be affected by this spell, as you warp space to prevent their escape. Whenever they would move away from you, they must use 2 feet of movement for every 1 foot moved.<br><br>Against affected targets, you can move 2 feet closer per 1 foot moved when you move towards them, and you treat them as if they were half as far away from you for the purposes of attacks and spells targeting them.",
    "empower": "Reduces the AP cost to 1."
  },
  {
    "name": "Uri's Oasis",
    "author": "Uri de Vries",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Water",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "120ft",
    "duration": "8 hours.",
    "desc": "Point at a location within range. At the chosen point, a deposit of water emerges appearing in anything of your choice, or the following examples; A geyser emerges erupts from the ground, a pond fills up, or a river or waterfall flows from a higher point to the chosen area.<br><br>So long you are within range, the oasis keeps replenishing itself and can create water up to 1.000 gallons at a time, before excess starts to dissipate. The water is always considered clean and pure. Water consumed this way or stored in containers does not dissipate, even if the spell ends or it moves out of range.",
    "empower": ""
  },
  {
    "name": "Blue Bolt",
    "tier": 2,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A lightning bolt strikes your target from out of nowhere, dealing 2d8 lightning damage. The creature must make a Dexterity saving throw or take an additional 3d8 lightning damage, halved on a success.",
    "empower": "Initial damage increased to 3d8.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Crippling Ray",
    "tier": 2,
    "tags": [
      "Necromancy"
    ],
    "cost": "2 AP",
    "range": "120'",
    "duration": "Instantaneous",
    "desc": "Fire a ray of crippling energy at a creature within range. They must succeed on a Constitution saving throw or have their movement speed reduced by 10', they only have 2 AP per turn, and be unable to make reactions for up to 1 minute. They can reattempt this saving throw at the end of each of their following turns, ending the effect on a success.",
    "empower": "Fire an additional ray at another target, or fire a second ray at the same target to impose disadvantage on the initial saving throw.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Pride's Fall",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Poison",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "You conjure and fling a transparent, barely-visible dart of poison at the target creature. It must make a Dexterity saving throw or be struck by the dart. A creature that can't see you or the dart automatically fails the saving throw.<br><br>Once it hits the creature, the dart's poison subtly leaks through. At any time as a response to the creature taking any action, you can spend 1 AP to trigger the poison. The creature takes 2d10 poison damage per AP spent on the triggering action and must make a Constitution saving throw. On a failure, it becomes poisoned until the end of its next turn and has its action canceled.",
    "empower": "Reduces the AP cost by 1."
  },
  {
    "name": "Detox",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Poison",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "Removes the poisoned condition and any poison effects, and dispels Poison spells of equal or lower tier than this spell on the target creature you touch. For the duration, the creature has advantage on all saving throws against poison effects and Poison spells, and has resistance to poison damage.",
    "empower": "AP cost reduced by 1 and range increased to 60 feet."
  },
  {
    "name": "Don't Trip Twice With The Same Stone",
    "author": "Argavyon",
    "tier": 2,
    "tags": [
      "Divination",
      "Earth",
      "Physical",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "As a reaction to falling prone or as an action during your turn, you fall prone and gather the strands of fate to avoid falling again.<br>While this lasts and you are within 120 feet of the casting location, you cannot be knocked prone.",
    "empower": ""
  },
  {
    "name": "Wolfcall",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Beast",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "10 feet",
    "duration": "8 hours",
    "desc": "You call two wolves to your side in any empty space within range. They obey your mental commands and fight until slain. When the spell ends, they vanish into the wind to wherever they came.<br><br>If you cast this spell again, any previous wolves summoned by this spell vanish.",
    "empower": "Summons a third wolf."
  },
  {
    "name": "Transfer Focus",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Arcane"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You either pass concentration of a spell to a willing target creature, or begin concentrating on the spell the willing target creature was concentrating on. The target must have the Spellcasting feature to transfer concentration, and you must not be concentrating on a spell to take over concentrating from a creature.",
    "empower": "Range increased to 60 feet."
  },
  {
    "name": "Will of the Wisps",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Summoning",
      "Fey",
      "Necromancy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You summon several mischievous spirits that possess the body of a recently deceased creature. For the duration, the recently deceased creature is reanimated under the control of the spirits inhabiting the body. You have no control over the reanimated creature, the spirits have full access to the memories and skills of the deceased creature and will act as they wish, able to act and speak as the creature did in life, but cannot cast spells. As you cast this spell, you may give an instruction or ask a question that is within 10 or less words. The spirits will adhere to your instruction to the best of their interpretation, or answer your question truthfully.",
    "empower": "You convince the impatient and fickle spirits to raise your word limit to 20."
  },
  {
    "name": "Wild Rage",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Forbidden (Werebear)"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "Rage descends upon you, empowering you to strike down attackers. Whenever you take damage, you must move up to two times your movement speed towards your attacker and immediately make one weapon attack against them if you are within melee range. This attack deals an additional 1d10 damage on hit.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Phantom Bows",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Shadow",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "Five bows of shadow line up and fire one shadowy arrow each down a 25 foot wide line composed of five 5 foot lines. The first creature in each 5 foot line must make a Dexterity saving throw or take 4d8 piercing damage, halved on a success. Each arrow stops after striking a creature.",
    "empower": "Damage increased to 6d8.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Seek History",
    "tier": 2,
    "tags": [
      "Divination",
      "Spirit",
      "Eldritch",
      "Holy",
      "Fey"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You touch an object and learn of the object's creator, when it was created, and where it was created.<br><br>If the object was not created by a creature, the spell will inform you of such. Otherwise, it will give the creator's name and species.",
    "empower": "You also learn the identities of who touched or used this object in the last 24 hours.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Bloom Snapdragon",
    "author": "Zombehking",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Plant",
      "Draconic",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "30'",
    "duration": "1 minute",
    "desc": "Create a 5' tall and wide Snapdragon bush at a target point within range. It's dragon-like flowers bite and snarl at anything that comes within 5' of the bush. Creatures in the area must make a Willpower saving throw against your Spell Save DC, taking 2d8 piercing damage and becoming Frightened of the bush for the duration. They can repeat the saving throw at the end of each of their turns, ending the effect on a success.<br><br>Creatures who are shoved or moved into the bush take double damage without a saving throw.",
    "empower": "The bush is 10' wide and tall instead. The damage is halved on a successful save instead of negated."
  },
  {
    "name": "Masquerade",
    "author": "Soreile ",
    "tier": 2,
    "tags": [
      "Illusion",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You hastily assemble a magically convincing disguise that obscures your normal clothing and appearance, but not your overall shape, species, or build.<br><br>Creatures can't recognize you without a Knowledge saving throw, unless you give yourself away. You have advantage on Willpower saving throws to deceive creatures with your words. <br><br>Creatures that observe you casting this spell are completely unaffected.",
    "empower": ""
  },
  {
    "name": "Fire Cross",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire",
      "Holy",
      "Deprecated"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Two 15 foot long lines of fire descend upon a target creature in range, one parallel to you and one perpendicular to you, with the center of both lines centered on the target creature. Creatures in range must succeed on a Dexterity saving throw or take 3d8 fire damage, and the creature in the center must succeed on a Dexterity saving throw or take 5d8 fire damage. A successful saving throw reduces the damage by half.",
    "empower": "Line length increased to 25 feet. All creatures affected take 1d8 radiant damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Icicle Swarm",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Cold",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Now and for 1 AP on each of your subsequent turns for the duration, you can fire up to three icicles at up to three creatures within range that you can see. Targets must make a Dexterity saving throw or take 1d8 cold damage per icicle. A creature damaged by this spell loses 15 feet of movement speed until the end of their next turn.",
    "empower": "Fires four icicles each time instead. A creature targeted by four icicles takes half damage on a successful saving throw."
  },
  {
    "name": "Solidify",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Earth",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 minute",
    "desc": "A target creature or object you touch becomes incredibly solid. They can't be moved by any outside force, and gain resistance to physical damage. Objects also become immune to other spells. Creatures have their AP reduced to 1 for the duration. Unwilling creatures can make a Constitution saving throw to avoid the effect, and can repeat it at the end of each of their turns to end the effect early.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mind to Blades",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Divination",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "Sight",
    "duration": "Instantaneous",
    "desc": "You must be concentrating on a spell to cast this spell. You end your concentration and transform it into mental blades that directly assault a creature's mind. It must make a Knowledge saving throw or take 6d6 psychic damage, halved on a success. If this damage reduces the creature to 0 or fewer hit points, you refund half the MP of the spell you were concentrating on.",
    "empower": "Can target two additional creatures."
  },
  {
    "name": "Xid's Expendable Companion",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Spirit",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "10 feet",
    "duration": "1 minute",
    "desc": "You throw a skull into the air above a target space within range, whereupon it manifests an ethereal, skeletal body. The skull has the statistics of a skeleton, save that it has 1 hit point and AC 18.<br><br>The skull obeys your mental commands, but has an alarming tendency to move towards suspected traps. It always fails its saving throws against traps, and it can move up to its movement speed towards a possible trap that you or it can perceive as a response for 0 AP.<br><br>When the spell ends, the skull is turned into dust.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rannach's Stalwart Fellows",
    "tier": 2,
    "tags": [
      "Illusion",
      "Beast",
      "Physical",
      "Psychic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "You create lifelike illusions of three humanoids and a Medium beast, which all travel with you and remain within 5 feet of you. You gain the following benefits for the duration of the spell: <br><br>>Your movement and actions can't trigger responses. The illusions move to defend you as you act.<br>>You have +1 AC for each illusion that remains, to a maximum of +4.<br>>At the end of each of your turns, the illusions strike at creatures within 5 feet of you that you choose. Each creature must make a Knowledge saving throw or take 1d8 psychic damage. Each illusion can target one creature, and a creature can only be targeted once.<br><br>The illusions have AC 16. A creature can deliberately target an illusion with a weapon attack. On a successful hit, the illusion vanishes. The spell ends if all illusions have vanished.",
    "empower": "The illusions have AC 20.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Clutch of Madness",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "An invisible hand grips all creatures in a 10 foot cube centered on target point within range that you can see. Creatures in the area must make a Dexterity saving throw or take 2d6 bludgeoning damage and be restrained until the start of your next turn.<br><br>At the start of your next turn, any creature damaged must then make an Intuition saving throw. On a failure, madness seeps into their minds as the hand releases them. For the duration of the spell, they must do nothing except attack the nearest creature, moving as necessary.<br><br>Creatures that have gone mad can repeat the saving throw at the end of each of their turns. On a success, the effect ends for them.",
    "empower": "Choose one - damage increased to 4d6, or area increased to 15 foot square, or you can move restrained creatures up to 15 feet at the start of your next turn."
  },
  {
    "name": "Lock Movement",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Psychic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 minute ",
    "desc": "Within a 20 foot radius centered on a target point within range, creatures you choose must succeed on an Intuition saving throw or have their movement bound by you. They cannot move unless they move exactly 15 feet in one direction at a time. If they have insufficient movement speed remaining, they can't move.",
    "empower": ""
  },
  {
    "name": "Steal Senses",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot cone) ",
    "duration": "Instantaneous",
    "desc": "You blow poisonous gas in a 15 foot cone. Creatures inside must make a Constitution saving throw or be blinded and deafened until the end of your next turn, and lose any magical forms of detection. On a success, they are instead blinded and deafened until the start of their next turn, but any magical detection remains.",
    "empower": ""
  },
  {
    "name": "Impact Boon",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Physical",
      "Concentration",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "A powerful aura envelops one of your currently equipped melee weapons. The first time you hit a creature with that weapon during your turns, the aura lashes out at all creatures adjacent to your target other than you, dealing bludgeoning damage equal to half the damage taken by the main target.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sinister Siphon",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Poison",
      "Unholy",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "You channel a beam of poisonous magic that attacks a target creature within range and stays focused on them. The creature must make a Constitution saving throw now and at the start of each of your turns. On a failure, they take 2d10 poison damage and become poisoned until the start of your next turn, and you are healed for half of the damage done. On a success, they take half damage and are not poisoned, and you do not receive healing.<br><br>You can't take the Attack action while concentrating on this spell. Other creatures or objects that move between you and the target block the beam, causing it to do no damage and have no effect if the beam is obstructed at the start of your turn.",
    "empower": "Choose one - damage increased to 3d10 and becomes unholy, or healing additionally adds your spellcasting stat to the healing received, or the beam ignores obstructions."
  },
  {
    "name": "Death Blossom",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Plant",
      "Poison",
      "Disease"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A corpse you can see within range has a flower bloom from it. The flower can be ground into a deadly powder that invites death into the target when consumed.<br><br>A creature that ingests the powder becomes afflicted. At the start of each of its turns, it must succeed on a Constitution saving throw or have one hit die destroyed. If no hit dice are remaining, the creature's maximum and current hit points are halved, and the effect ends. A creature that makes two consecutive successes ends the effect early.",
    "empower": "Affected creatures can't receive any healing.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Primordial Droplet",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Eldritch",
      "Holy",
      "Unholy",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You wrest a droplet of pure power from creation itself and bestow it upon a target creature you can see within range. They are healed for 4d10 hit points. For 1 minute, one of their stats you choose is increased by 1.<br><br>A creature reduced to 0 or fewer hit points while affected by this spell has primordial power burst from their body, horribly mangling it and rendering it unusable for most forms of reanimation.",
    "empower": "Choose two stats to increase by 1."
  },
  {
    "name": "Lifefuel",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Forbidden (Hellfire)"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You spend your maximum hit points instead of MP for this spell, which cannot be reduced in cost. You burn up to three of your hit dice, rolling them and adding half of the value rolled to your MP.",
    "empower": "Pay the empower cost in hit points instead of MP, and deduct it from your maximum hit points. You add the full value rolled to your MP instead."
  },
  {
    "name": "Plague of Sorrows",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Disease",
      "Psychic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on an Intuition saving throw or be struck with overwhelming sadness. They are blinded as they cannot stop crying. When a creature within 60 feet is reduced to 0 hit points, they wail uncontrollably, forcing creatures within 20 feet to make an Intuition saving throw or be affected by this spell for the duration.<br><br>An affected creature can repeat the saving throw at the end of each of their turns, ending the effect on them on a success.<br><br>You are unaffected by your own spell and can designate any number of creatures when casting the spell to be unaffected.",
    "empower": "When a creature wails, all creatures in range take 1d6 psychic damage per wail if they fail the saving throw. The original target must spend 2 AP to attempt the saving throw."
  },
  {
    "name": "Airlock",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Wind",
      "Space"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "1 hour",
    "desc": "A vacuum sphere of 10 foot radius appears centered on target point. For the duration, all air and sounds inside cannot travel outside and vice versa.<br><br>This spell can be destroyed by any Wind spell that deals damage, or even a sufficiently strong gust of natural wind.",
    "empower": ""
  },
  {
    "name": "Sledrock",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "Self (300 foot line)",
    "duration": "Instantaneous",
    "desc": "You tear out a 3 foot long rock from the ground underneath you and propel it forward while you are still on the rock. It moves 60 feet in a target horizontal direction, and continues moving 60 feet at the start of each of your turns until it has moved 300 feet. You can jump off at any time, and the rock will continue traveling by itself.<br><br>If the rock hits a creature or object in the way, the obstacle must make a Dexterity saving throw or take 4d10 bludgeoning damage and be knocked prone. The rock then continues through their space. On a successful saving throw, the obstacle takes half damage and is knocked back 5 feet, and the rock is destroyed.",
    "empower": "Choose one - movement speed increased to 90 feet and range increased to 450 feet, or you can direct the rock in a vertical direction, or you can change the rock's direction once during the spell."
  },
  {
    "name": "Microrealm",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Space"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You create a small planar realm in your current space that attempts to suck in all creatures within range. Unwilling creatures must succeed on a Willpower saving throw or be drawn into the realm.<br><br>The realm has an exit and entry in both planes in the same space where you cast the spell. All creatures inside the realm are contained within the entrance on the outside. The realm on the inside looks exactly like the plane outside, save that it ends in solid force at the border of the spell. Creatures that were taken inside maintain their relative position.<br><br>When the spell ends, all creatures return to their relative position outside of the realm. If it is occupied, they return to the closest empty space.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Creeping Death",
    "author": "Lupusam",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Disease",
      "Unholy",
      "Forbidden (Fungal)"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You spread noxious spores, infecting any number of creatures you choose within range that need to breathe. At the start of an infected creature's turn they must make a Constitution save, taking 2d6 poison damage on a failure, or ending the infection on a success. The infection lasts until the creature passes a constitution save or is cured by magical healing.<br>When an infected creature dies for any reason, you can control it forcing it to immediately take one full turn as you puppet the corpse through the spores, then the body rapidly decomposes.",
    "empower": "Increase the damage on a failed save to 4d6, and an infected creature must pass 2 Constitution saves to end the infection."
  },
  {
    "name": "Kuinu's Grudge",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Acid",
      "Fire"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You surround yourself with a dreadful cursed fate. Any creature that damages you with a weapon attack becomes marked by this curse, taking 1d6 additional fire damage from all incoming weapon attacks before the start of their next turn. Any creature that casts a spell or uses an effect that forces you to make a saving throw becomes marked as well, taking 1d6 additional acid damage from all damaging spells until the start of their next turn.",
    "empower": "You automatically mark all creatures you choose within 15 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Arcanist's Retort",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot line)",
    "duration": "Instantaneous",
    "desc": "You blast arcane magic in a 5 foot wide, 60 foot long line. Creatures in the way must make a Dexterity saving throw or take 4d10 arcane damage, halved on a success.",
    "empower": "Can be cast as a response to taking damage for 0 AP. The attacker must be in range of the spell."
  },
  {
    "name": "Disable Sensation",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 minute",
    "desc": "Target creature loses all feeling of sensation. They have disadvantage on Strength and Dexterity rolls, but automatically succeed on Constitution saving throws. An unwilling creature can make a Constitution saving throw to avoid the effect.",
    "empower": ""
  },
  {
    "name": "Vigor Transfusion",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You select two targets, one of which can be yourself, and transfer life force from one target to another. Choose Strength, Dexterity, or Constitution. One target has disadvantage on all rolls with that stat, while the other has advantage instead. Unwilling creatures can make an Intuition saving throw to avoid this effect.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Setting Suns of the Sea",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Eldritch"
    ],
    "cost": "1-3 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "For each AP spent, you pull a dying sun from the Sea of Possibility and place it in an empty space within range. It radiates something resembling light out to 10 feet.<br><br>Any creature that ends their turn in the light takes 1d8 psychic damage. Any creature that takes damage from this spell twice becomes afflicted with madness. At the start of their turn, they must succeed on an Intuition saving throw or immediately attack the nearest creature, moving as necessary. They can repeat the saving throw at the end of each of their turns. On a success, the creature is no longer maddened and can't be maddened by this spell again.",
    "empower": "Creates two additional suns."
  },
  {
    "name": "Greymane's Stonefist",
    "author": "Argavyon ",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Earth",
      "Physical",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "During your turn or as a reaction to being dealt physical damage, you cover one of your limbs (or, if you lack limbs, create one that can only be used for a single attack) with stone. Your next unarmed attack will deal 2d6 bonus bludgeoning damage and end this spell.<br>You may do an unarmed attack once as part of casting this spell.<br>While this spell lasts, you gain resistance to your choice of slashing, piercing or bludgeoning damage.<br><br>(Not to be confused with Greymane's Stonefists.)",
    "empower": "You cast two of your limbs with stone, with your next two unarmed strikes dealing bonus damage. The resistance from this spell lasts for the full 1 minute duration."
  },
  {
    "name": "Phoenix Wave",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Channeling the healing flames of the phoenix, you loose a wave of fire that radiates out from you in a 30 foot radius sphere. All creatures in range other than you must either make a Constitution saving throw or take 2d6 fire damage, or be healed for 2d6 hit points. You choose whether a creature is damaged or healed.<br><br>Flammable objects in the area burst into brilliant flames that shed light out to 30 feet.",
    "empower": "You are healed for 2d6 hit points. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Stern Warning",
    "tier": 2,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "Harsh winds pick up and strike at a 30 foot cube centered within a point in range that you can see. Creatures must make a Dexterity saving throw or take 2d6 bludgeoning damage.<br><br>Creatures that take damage from this spell are vulnerable to the damage dealt from your next Wind spell cast before the end of your next turn.",
    "empower": "Area increased to a 40 foot cube.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Forest's Eviction",
    "tier": 2,
    "tags": [
      "Evocation",
      "Plant"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot cone) ",
    "duration": "Instantaneous",
    "desc": "You create and swing a massive vine through a 30 foot cone. Creatures in the area must succeed on a Dexterity saving throw or take 5d6 bludgeoning damage and be knocked 20 feet away from you. A creature that collides with an object or terrain takes an additional 2d6 damage and falls prone.",
    "empower": "Creatures that succeed take half damage and are knocked back 5 feet instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wisp's Light",
    "tier": 2,
    "tags": [
      "Illusion",
      "Fey",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute ",
    "desc": "You create a small mote of light at a target location you can see. It emits light out to 15 feet. A creature within its light that can see it when it is created, or when it moves into the light, must make an Intuition saving throw. On a failure, it can only see the illuminated area as its vision is transfixed on the light. It will make an effort to stay within the area of the light.<br><br>During your turn, you can move the light up to 15 feet for 1 AP.<br><br>A creature outside the light can repeat the saving throw. On a success, they can't be affected by this spell again for the duration.",
    "empower": "The light's area is increased to 20 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Feedback Blast",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Acid",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot cone)",
    "duration": "Instantaneous",
    "desc": "Magically charged acid blasts forth in a 15 foot cone from your hands. Creatures in the area must make a Dexterity saving throw or take 8d4 acid damage. Creatures that succeed take half damage.<br><br>If any creature is affected by a spell, the acid seeps into the connection and feeds back into the original caster. The caster of that spell takes 10d4 acid damage and has disadvantage on any saving throw made to maintain concentration.",
    "empower": "Range increased to 20 foot cone."
  },
  {
    "name": "Healing Rains",
    "tier": 2,
    "tags": [
      "Evocation",
      "Water"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Soothing water sprinkles down in a 10 foot radius, 100 foot tall cylinder. When a creature starts their turn in the area, they are healed for 1d4 hit points.",
    "empower": "You add your spellcasting stat to healing from this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hailstrom",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Water",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous / 1 turn",
    "desc": "A violent vortex of small ice particles swirls in a 10-foot radius dome centered on target point. All creatures inside when this occurs must make a Constitution saving throw, taking 2d8 cold damage on a failed save or half as much on a success.<br><br>A cloud of super conductive frozen gases lingers in the area until the start of your next turn, acting as difficult terrain for creatures that aren't immune or resistant to cold damage. At the start of your next turn, the gasses collapse back into another vortex and repeat this spell's damage to all creatures inside, then dissipate. <br><br>When at least one creature in the cloud takes lightning damage from an attack or effect while this cloud remains, the cloud immediately repeats this spell's damage to all other creatures in the cloud, and all creatures that did not take lightning damage from the triggering attack or effect also receive half as much lightning damage.",
    "empower": "Remove the AP cost of this spell."
  },
  {
    "name": "Umbralchill Protector",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Cold",
      "Shadow",
      "Summoning"
    ],
    "cost": "3 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Your shadow becomes imbued with cold magic and extends itself. You gain 1 AP at the end of each of your turns, usable only for responses granted by this spell. When a creature moves within 10 feet of you or makes a melee attack against you, you can spend 1 AP as a response to have your shadow reach out and touch the creature. It must succeed on a Constitution saving throw or take 3d8 cold damage and have their movement speed set to 0 until the end of their turn. A successful saving throw inflicts half damage and reduces their movement speed by 10 feet instead.",
    "empower": "You gain 2 AP instead."
  },
  {
    "name": "Shield of Convenience",
    "tier": 2,
    "tags": [
      "Illusion"
    ],
    "cost": "1 AP",
    "range": "5 feet",
    "duration": "Instantaneous",
    "desc": "As a response to being targeted by an attack, you can cast this spell to swap places with an adjacent creature or object. The object cannot be larger than you or more than one size smaller than you. The swapped target is now the new target of the incoming attacker. The attacker does not recognize the swap until one second after their attack.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Light of the Boundary",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Eldritch",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius)",
    "duration": "15 minutes",
    "desc": "A pale light shines above your head, illuminating a 30 foot area. This light is drawn from the Sea of Possibility, and insulates all creatures within from attacks on the mind, granting advantage on Knowledge, Intuition, and Willpower saving throws.<br><br>At the end of your turn, if you moved from your position, the light moves 5 feet in your direction. If you are outside the range of the light after it moves, the spell ends.",
    "empower": "The light moves to follow you as you move, instead of only moving 5 feet at the end of your turn."
  },
  {
    "name": "Terrain Blast",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Earth"
    ],
    "cost": "1 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "A 15 foot radius circle centered on target point within range violently churns. Any creatures on difficult terrain within this area take 2d6 bludgeoning damage.",
    "empower": ""
  },
  {
    "name": "Stuttershock",
    "author": "BFHNV",
    "tier": 2,
    "tags": [
      "Evocation",
      "Lightning",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "As a response to a creature making an attack, you send a large shock through their nervous system, disrupting their movement.  The creature takes 2d6 lightning damage and has disadvantage on attack rolls for the rest of their turn.",
    "empower": "On the creature's next turn, you can spend 1 AP once to repeat the effect."
  },
  {
    "name": "Groundslam",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Physical",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot radius)",
    "duration": "Instantaneous",
    "desc": "You slam the ground with enough force to rupture the spell's area. It becomes difficult terrain, and every creature in range must make a Strength saving throw or take 2d8 bludgeoning damage and be knocked prone. Creatures that succeed on their saving throw take half damage and are not knocked prone.",
    "empower": "Radius increased to 20 feet. Damage increased to 3d8.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Vengeful Fire",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire",
      "Potent",
      "Silent"
    ],
    "cost": "1 AP",
    "range": "Sight",
    "duration": "Instantaneous",
    "desc": "As a response to a creature you can see damaging you, you gesture and set the attacker ablaze, dealing 2d6 fire damage, plus 1d6 fire damage for each tier higher than 2. If cast as a tier 5 spell or higher,  the target must make a Dexterity saving throw or take an additional 3d6 fire damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Target Toxin",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Poison"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "You enchant a weapon or piece of ammunition with a poison that tracks its victim. The next time the poisoned weapon damages a creature, it establishes a mental connection to you. You always know where the creature is for the remaining duration of the spell.<br><br>Every 10 minutes, the creature must make a Constitution saving throw. On a failure, they take 1d8 poison damage, and their highest stat drops by 1 for the duration of the spell. In the case of a tie, the creature chooses which stat is decreased.",
    "empower": "Every 10 minutes, the creature's two highest stats drop by 1 on a failed saving throw instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Elder's Rebuke",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Spirit"
    ],
    "cost": "1 AP",
    "range": "90 feet ",
    "duration": "Instantaneous",
    "desc": "As a response to a creature you can see that has either attacked or made a saving throw, you can force the creature to make a Willpower saving throw. On a failure, they take 2d8 psychic damage and repeat their last roll, taking the worse of the two results. If this would turn a success into a failure, they take an additional 2d8 psychic damage.",
    "empower": "Damage increased to 3d8 on the initial saving throw and the failed roll.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Silver Screen",
    "tier": 2,
    "tags": [
      "Divination",
      "Earth",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "Touch ",
    "duration": "1 hour",
    "desc": "You touch a surface and transform up to a 10 foot square on that surface, split into how many parts you choose, into a brilliant silver substance. The surface allows vision through the material to the other side, but does not allow creatures on the other side to see you through the same surface.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Banish Light",
    "tier": 2,
    "tags": [
      "Illusion",
      "Shadow",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot line)",
    "duration": "1 minute",
    "desc": "With a striking motion, all light vanishes in a 60 foot long, 15 foot wide line. The area is completely dark, prohibiting any vision. Anything that would cast light does not cast light into or inside this area.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Uri's Little Helper",
    "author": "Uri de Vries",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Familiar"
    ],
    "cost": "3 AP",
    "range": "touch",
    "duration": "until dispelled",
    "desc": "You touch a creature, putting it in a state of blind servitude. The creature must be no bigger than a Small creature, but can be either a Beast, Fiend, Aberration, Construct or Monstrosity, and may not be of level (?) or higher. If the creature is already under control of something else, its controller must make a spellcasting check to remain control of it.<br><br>For as long the creature is yours to control, you can command it to move or use any of its abilities. It understands your words even if it could not understand your language before, and shares a telepathic bond with you to communicate.<br><br>For another 3 AP, you may amplify your control of the creature, transferring your consciousness to your familiar. You are able to sense and speak as though you were your own. For as long you do, your original body remains unconscious in a state of trance. Using an action again relinquishes the consciousness from the familiar back to you.<br><br>The spell ends when you cast it again on a new creature, or if the familiar you have dies.",
    "empower": ""
  },
  {
    "name": "Stagnant Air",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Cold",
      "Disease",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP ",
    "range": "Self (60 foot radius) ",
    "duration": "1 hour",
    "desc": "In a 60 foot radius sphere surrounding you and moving with you, the air becomes still and chilling to the bone, filling with an uncomfortable scent. Living creatures within this area can't restore hit points under any circumstances.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Flashburst",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Illusion",
      "Lightning",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create and then hurl a spherical mix of light and electricity to the target point, where it explodes in a 20 foot radius. Creatures in the area must succeed on a Constitution saving throw or be blinded and deafened for 1 minute. A creature that succeeds is deafened until the start of their turn.<br><br>A creature can repeat the saving throw at the start of each of their turns. On a success, the effect ends early.",
    "empower": "Range increased to 90 feet."
  },
  {
    "name": "Wildfire",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Fire"
    ],
    "cost": "X AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create a fire on a space within range for each AP spent casting this spell. Creatures in the same space as a fire when it is created, as well as creatures that pass through the fire on their turn or end their turn in a fire, must make a Dexterity saving throw or take 3d6 fire damage, halved on a success.<br><br>At the start of each of your turns, at least one created fire must spread into all spaces within 5 feet not already on fire. You can choose any number of fires to spread.",
    "empower": "Creates two additional fires.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unholy Rupture",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You trigger a blast of unholy magic at target point you can see within range. All creatures within 15 feet of the point must succeed on a Constitution saving throw or take 5d10 unholy damage, halved on a success.<br><br>You can target a creature you have reanimated instead of a point. If you do, the creature is utterly destroyed, and you regain half the MP spent on this spell.",
    "empower": "Can target any reanimated creature you control, even if they are out of range or sight."
  },
  {
    "name": "Forked Lightning",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot cone) ",
    "duration": "Instantaneous",
    "desc": "You strike out with thin bolts of lightning from your fingertips at up to three targets within range, who must make a Dexterity saving throw or take 3d8 lightning damage, halved on a success.",
    "empower": "Targets two additional creatures."
  },
  {
    "name": "Vital Surge",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Holy",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature is surged with life magic. They are cured of the blinded, deafened, paralyzed, poisoned, and stunned conditions, and any diseases they are suffering from are removed. Dispels Poison and Disease tag spells from the target of equal or lesser tier than the tier this spell is cast at.",
    "empower": "The target also restores the use of one spent hit die and heals 2d8 hit points."
  },
  {
    "name": "Sorcerous Skinweave",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Arcane"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Target creature has magic woven into their very skin temporarily. They have resistance to damage from non-Arcane spells until the end of your next turn.",
    "empower": ""
  },
  {
    "name": "Overgrowth",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Plant",
      "Time"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot line)",
    "duration": "Instantaneous",
    "desc": "A wave of verdant energy sweeps forth in a 15 foot wide, 60 foot long line extending from you. Grass and other plants in the area quickly grow and turn the area into difficult terrain. Creatures caught in the growth must make a Dexterity saving throw or be restrained. They can spend 2 AP to make a Strength saving throw to free themselves.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hush",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Wind",
      "Concentration",
      "Silent",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Self (5 foot radius)",
    "duration": "1 hour",
    "desc": "The air around you becomes calm and still. This effect moves with you for the duration. Any sound that would be created in the radius of this spell dissipates, and sounds from outside cannot penetrate in.<br><br>Wind spells of lower level than the level this spell is cast at cannot be cast inside the radius of this spell  and their effects cannot pass through its edges.",
    "empower": ""
  },
  {
    "name": "Song of Victory",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Illusion",
      "Forbidden (Song)",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song about comrades facing a great evil. If you spend at least 1 AP during your turn towards casting this spell, illusory warriors appear in the area to reinforce creatures you choose. Those creatures can, once per turn, gain advantage on one attack roll they make, or instead add an additional 1d6 psychic damage to their weapon damage.<br><br>When completed, the magic forms the projection of a powerful lance that is hurled forward towards a target within 300 feet that you can see. Creatures in a 5 foot wide line between you and the target must make a Dexterity saving throw or take 4d10 piercing damage, halved on a success. The targeted creature takes 4d10 piercing damage and must succeed on a Willpower saving throw or take 4d10 psychic damage, halved on a success.",
    "empower": "The illusory warriors instead increase damage by 1d10."
  },
  {
    "name": "Oathbound Gauntlet",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You throw a magically created gauntlet at a target creature that can see you, challenging it to a duel. It must make a Willpower saving throw. On a failure, both you and your target are locked into a duel with each other. Any attack or spell from either duelist that does not target or include either duelist automatically fails.<br><br>You must make a Willpower saving throw to end the effect early. Otherwise, the spell only ends when one creature is reduced to 0 or fewer hit points.",
    "empower": "You have resistance to all damage taken outside of the duel.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hoard",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Draconic"
    ],
    "cost": "3 AP",
    "range": "Touch ",
    "duration": "8 hours",
    "desc": "Target object or willing creature cannot be taken from you while you are holding them or in possession of them.<br><br>The spell ends if the target is no longer touching you.",
    "empower": "Affects any number of targets within Touch range.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Compromise Existence",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Arcane",
      "Disease",
      "Eldritch",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must make a Willpower saving throw. On a failure, an otherworldly plague seeps into every part of its being. It loses all resistances and immunities for the duration.<br><br>A creature can repeat the saving throw at the end of each of its turns. On a success, the spell ends early.<br><br>A creature reduced to 0 or fewer hit points while affected by this spell has their body utterly torn apart and returned to the Sea of Possibility.",
    "empower": "One nullified resistance or immunity of your choice becomes a vulnerability."
  },
  {
    "name": "Eye of Fear",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Draconic",
      "Still",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "90 feet ",
    "duration": "1 minute",
    "desc": "Target creature within range that is looking at you must succeed on an Intuition saving throw or be frightened of you for 1 minute.<br><br>The effect ends if the target takes damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Source Warp",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Water",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous / 1 hour",
    "desc": "You touch a body of water of no more than 10 cubic feet and alter its properties. You may choose to either purify the water, completely removing any poisons, disease, and magical effects in it, or corrupt the water, fundamentally changing its properties. <br><br>If you choose to corrupt the water, you must have another liquid on hand to use as reference. This spell consumes the liquid to transmute a volume of water up to 10x the amount of liquid consumed. For the duration, the affected water has all the non-magical properties of the reference liquid, though on inspection it remains normal water.",
    "empower": "Corrupt effect lasts 1 day instead."
  },
  {
    "name": "Sparksurge",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You instantly travel up to twice your movement speed, able to move in any direction through occupied spaces and objects no larger than a 5 foot cube. Everything you pass through must make a Dexterity saving throw or take 3d8 lightning damage, halved on a success.",
    "empower": "Movement increased to three times your movement speed.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Burst Gale",
    "tier": 2,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Sudden strong winds burst out in a 5 foot wide, 15 foot long line starting at any point in range that you can see and traveling in any direction. Creatures in the way must make a Strength saving throw or take 4d6 bludgeoning damage and be thrown 20 feet in the direction of the wind. A creature that collides with another creature or object during this movement deals 2d6 damage to itself and the source of collision. A creature that succeeds on its saving throw takes half damage and does not move.",
    "empower": "Line length increased to 25 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wyvern Breath",
    "tier": 2,
    "tags": [
      "Evocation",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "You gain the ability to fire deadly spheres of draconic magic. When you cast this spell, choose a damage type other than slashing, piercing, or bludgeoning. You can spend up to 3 AP during your turns to make a ranged attack using your spellcasting modifier. On hit, the attack deals 1d8 damage of that type in a 15 foot long, 5 foot wide line extending through the target per AP spent.",
    "empower": "Base damage increased by 1d8.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Ice Block",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "8 hours",
    "desc": "You create a block of solid ice that can occupy any area up to a 10 foot cube. It remains until destroyed or the spell ends. The block has AC 10, 10 hit points per 5 feet occupied, and vulnerability to fire damage.",
    "empower": "Doubles the hit points of the block and removes its fire vulnerability."
  },
  {
    "name": "Bloodwrack",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Water"
    ],
    "cost": "1-3 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Target creature takes 1d6 damage, plus bonus damage equal to the number of spent or destroyed hit dice on the target, per AP spent, as you twist and contort their own blood to damage them from within. Damage dealt by this spell also reduces the target's maximum hit points by the same amount.",
    "empower": "Also destroys a hit die on the target."
  },
  {
    "name": "Photon Barrage",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Radiant"
    ],
    "cost": "X AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "For every AP spent on this spell, you fire one beam of light at a target creature within range you can see. A creature targeted by at least one beam must succeed on a Dexterity saving throw or take 1d10 radiant damage per beam, halved on a success.",
    "empower": "Each beam additionally deals bonus damage equal to your spellcasting stat."
  },
  {
    "name": "Black Breath",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "Target creature's lungs are filled with blackened, sickening air. They must make a Constitution saving throw, taking 3d10 poison damage on a failure. On a success, they take half damage and cough out all of the air, ending the spell.<br><br>A creature that fails the saving throw coughs and hacks during each of their turns, forcing creatures within 5 feet to make a Constitution saving throw or be affected by the spell for its remaining duration. They can spend up to 3 AP to focus on coughing out the black air and repeat the saving throw at the end of their turn, ending the effect on a success. A creature that spends less than 3 AP takes 1d10 poison damage at the end of their turn per AP not spent on the spell.",
    "empower": "Damage increases to 4d10 and maximum AP that can be spent coughing increases to 4. Spreads to creatures within 10 feet."
  },
  {
    "name": "Ingest",
    "author": "Uri de Vries",
    "tier": 2,
    "tags": [
      "Enchantment"
    ],
    "cost": "1 AP",
    "range": "5ft / touch",
    "duration": "1 hour",
    "desc": "You usher a word in a whisper, which may only be a noun or a name. As the whisper is told, the words manifest as an illusory leech that enters another creature's ear of your choice. While the leech is in place, you'll know every phrase in which the word is said or written, or heard or seen by the host, so long you're still on the same plane.<br><br>For as long the leech is in place, you may spend an additional 2 AP. If you do, you may have the leech try to delve into it's host's brain. It must make an intelligence saving throw. On a fail, you may either have the host spill all its knowledge about the chosen word, or forget everything they know about it, but not both. On a fail or success, the spell then ends.",
    "empower": ""
  },
  {
    "name": "Marionette Strings",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Psychic",
      "Shadow",
      "Concentration",
      "Silent",
      "Deprecated"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "An infinitesimally thin thread of shadows is sent to a target creature in range. That creature must succeed on an Intuition saving throw or become unknowingly bound by the thread. A creature that succeeds on the saving throw is still bound, but are aware they are bound.<br><br>A creature aware they are bound by this spell may spend 1 AP at any time to end this spell on themselves.<br><br>While a creature is bound, you gain access to the following response actions. Each costs 1 AP, and the spell ends once you take one of these actions.<br>>In response to the creature attempting to cast a spell that is not Still, you disrupt their gesture, canceling the spell from being cast. The creature does not pay MP, but they do lose any AP that would have been spent, and cannot cast that spell again in the same turn.<br>>In response to the creature making an attack, you may change the target to any creature or object in range. If the creature is unwilling to attack the newly chosen target, the attack is made with disadvantage and only deals half damage on a hit.<br>>In response to the creature taking any action that requires rolling a d20, the creature automatically rolls a 1.",
    "empower": ""
  },
  {
    "name": "Ash Vision",
    "tier": 2,
    "tags": [
      "Divination",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You toss an object no heavier than 10 pounds into the air, where it is instantly destroyed and transformed into ash that coats you. While you are covered in this ash, you can see a path that leads to the original owner as long as they still reside on the same plane as you.<br><br>The path can wind around obstacles and walls, but it does not take into account dangerous terrain or traps.<br><br>The spell ends if you are no longer covered in the ash.",
    "empower": "Duration increased to 8 hours. The ash can't be washed away without the use of magic.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Magnetize",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "A targeted surface or object you touch that fits within a 10 foot cube becomes magnetized. When any metal object or weapon would come within 5 feet of the object, it is attracted to the magnetized object and stays there.<br><br>A creature that is carrying an affected object can make a Strength saving throw to resist having their object pulled to the magnetized object. A creature can use 2 AP to make a Strength saving throw to dislodge an object from the magnetized object.",
    "empower": "The duration becomes 8 hours."
  },
  {
    "name": "Call Truthsworn Flame",
    "tier": 2,
    "tags": [
      "Divination",
      "Fire",
      "Spirit",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "8 hours",
    "desc": "You call forth a truthsworn flame, an ethereal spirit with a hatred for lies. It immediately lays claim over the spell's area, which every creature inside can sense.<br><br>When a creature in the area speaks a lie, the truthsworn flame immediately lashes out at them, dealing 2d6 fire damage and imposing disadvantage on Willpower ability checks until the end of their next turn. A creature reduced to 0 hit points from this spell only falls unconscious.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rasping Call of the Undead King",
    "author": "Zombehking",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Unholy",
      "Cold",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60' long 5' wide line",
    "duration": "1 minute",
    "desc": "Conjure the fetid breath from the First Zombie, spreading it around you indiscriminately. In a line from you, creatures must make a Constitution saving throw. On a failure, they take 4d8 cold damage, and for the duration of the concentration take an additional 2d8 cold damage from undead and spells with the Necromancy tag. On a success, they take half damage and no other effect.",
    "empower": "Creatures that fail the saving throw are additionally frightened of you."
  },
  {
    "name": "Holy Storm",
    "tier": 2,
    "tags": [
      "Evocation",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Bolts of divine energy rain down from the skies upon up to 3 targets within range, who must make a Dexterity saving throw or take 3d8 radiant damage, halved on a success.",
    "empower": "Can target two additional targets.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unseen Agent",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Shadow",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "Your shadow separates from yourself. It inherits your movement speed and can move at any time during your turn. You can see and hear through the shadow as if you were in its location.<br><br>Radiant spells that deal damage that strike the shadow immediately end the spell, and you take 4d6 radiant damage that cannot be reduced or negated.<br><br>While this spell is active, an attentive creature can notice you are not currently casting a shadow.",
    "empower": "The shadow has doubled movement speed."
  },
  {
    "name": "Dragon's Roar",
    "author": "Soreile",
    "tier": 2,
    "tags": [
      "Illusion",
      "Draconic"
    ],
    "cost": "2 AP",
    "range": "30 foot radius",
    "duration": "Instant",
    "desc": "You create a grand illusion of an ancient dragon for an instant, and it looses a mighty roar that rattles the minds of those who hear it. All targets in range must make an Intuition saving throw. On a failure, on their next turn they are frightened.",
    "empower": "All targets also take 2d6 psychic damage, halved on a successful save."
  },
  {
    "name": "Grove of Warding",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Plant",
      "Fey"
    ],
    "cost": "3 AP",
    "range": "10 feet",
    "duration": "24 hours",
    "desc": "When you cast this spell, you must also pay the MP cost for another spell with the Plant tag. You create a 10 foot radius circle of small mushrooms that contains the selected spell. You define the conditions that must be achieved before the spell is activated, such as \"when a creature steps inside\", or \"in one minute\". You can be as specific as necessary.<br><br>When the conditions are achieved, the spell is cast. If it requires concentration, the grove is considered to concentrate on it. Once the spell ends, the grove vanishes.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Oracle Eyes",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Divination",
      "Potent"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "You open your mind to the cosmos, and briefly see the absolute truth of everything around you.<br><br>This flash of insight lasts only a fraction of a second, lest the overload of information destroys your psyche. When you cast this spell the following are revealed to you if they exist within the range of the spell:<br>>The number of creatures in range.<br>>If there are any creatures, objects, or pathways that are invisible or otherwise obscured or hidden.<br>>If there are any creatures, objects, or pathways currently under the effect of any magical illusion.<br><br>If cast at a higher tier, the radius of this spell is equal to 10 feet times the normal MP cost of a spell of that tier, regardless of the actual MP you spent to cast it.<br><br>Casting this spell more than once without taking a break or rest requires a successful Constitution check of DC 10, with each successive casting increasing the DC by 5. On a failure ,the spell fails as you overstrain your mind.",
    "empower": ""
  },
  {
    "name": "Summon Grems",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "15 minutes",
    "desc": "You summon two grems in two empty spaces within range that you can see. You can choose any grem that matches one of your tags. They take their turn after yours and follow your mental commands.<br><br>If you are reduced to 0 or fewer hit points, the grems are banished back to their plane.",
    "empower": ""
  },
  {
    "name": "Crusader's Assault",
    "tier": 2,
    "tags": [
      "Evocation",
      "Physical",
      "Holy"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Righteous strength fills you, granting you 2 AP for this turn that can only be spent on weapon attacks. For the rest of your turn, your melee weapon attacks deal an additional 1d6 radiant damage to your target and all creatures you choose that are adjacent to the target.",
    "empower": "You make an additional weapon attack as part of casting this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Stardust Field",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Space"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "15 minutes",
    "desc": "You pull a small section of a nebula into a 30 foot radius sphere. It is gorgeous, yet incredibly thick, preventing vision through it and blinding creatures inside of it. It remains for the duration, and is too heavy to blow away with Wind spells.<br><br>Creatures that are not engaged in combat that see the nebula are enamored by it. Creatures without hit dice are compelled to admire it until it ends or they are damaged. Creatures with hit dice must succeed on an Intuition saving throw to avoid doing nothing except admiring it until they take damage or it ends or another creature spends 1 AP to shake them. A creature that made this saving throw can repeat it once per minute to end its enthralling effect on itself.",
    "empower": "Radius increased to 50 feet. Disables blindsight and other senses inside and through the nebula."
  },
  {
    "name": "Teleport Projectile",
    "author": "BFHNV",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Physical",
      "Space"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "As a response to a ranged attack within range missing or piercing through its target, you create a small portal in its path that redirects it.  Choose a direction and a space within range for the projectile to emerge from.  If you attempt to redirect the projectile to hit a creature, make an attack roll based on your spellcasting stat.  Damage is rolled as if the original attacker had hit.",
    "empower": "Removes the AP cost of this spell."
  },
  {
    "name": "Bloody Reaper",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Forbidden (Blood)"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot cone)",
    "duration": "Instantaneous",
    "desc": "Your blood bursts out of one of your wounds, optionally dealing up to 20 damage to you, and forms a large but thin scythe that sweeps across a 30 foot cone. Creatures within this area must succeed on a Dexterity saving throw or take slashing damage equal to 10 plus the damage you've dealt to yourself by casting this spell. A successful saving throw halves the damage taken.<br><br>If you are afflicted by any diseases or Disease spells, it spreads to any creature that failed their saving throw.<br><br>You can't use this spell unless your current hit points are below half of your maximum hit points.",
    "empower": "Choose one - range becomes Self (30 foot radius) but the additional damage from self-injury is halved, or creatures 30 feet away that take damage heal you for 4 hit points per creature hit."
  },
  {
    "name": "Bridge of Roses",
    "author": "Soreile",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Fey",
      "Plant",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You create a bridge of overlapping vines 15 feet wide that begins to grow from your location to a target point within range. It grows 30 feet upon casting, and 30 feet at the start of each of your turns until it reaches its destination.<br><br>Fey roses of any color you choose sprout from the vines and emit pollen. Creatures that must breathe while moving onto the bridge or starting their turn on the bridge inhale the pollen and must succeed on a Constitution saving throw or lose 1 AP and half of their movement speed until the end of their turn. Any number of creatures you choose when casting this spell are unaffected.<br><br>The bridge will burn if it is struck by an attack or spell that deals fire damage. At the start of each of your turns after it is hit by fire, the bridge narrows by 5 feet until it breaks.<br><br>When cast at a higher tier, the range increases by 30 feet for each tier above 2.",
    "empower": ""
  },
  {
    "name": "Hex of Exhaustion",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "A black totem is created in an empty space adjacent to you, which focuses its magic on a target creature within range that you can see. The creature loses 1 AP the first time it moves more than half of its movement speed during its turn until the spell ends.<br><br>The target is made aware of the location of the totem. If they attack or damage the totem, it is destroyed and the spell ends immediately. If the totem is destroyed, you take 2d6 unholy damage from the backlash.",
    "empower": "Prevents backlash from a destroyed totem.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sludgify",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Acid",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute ",
    "desc": "You transform a 10 foot square, increased by 5 feet per cast tier, into a pool of acid 5 feet deep. Non-magical objects completely contained in the area sink into the acid and are destroyed. The pool is difficult terrain and deals 3d4 acid damage per 5 feet moved within.",
    "empower": ""
  },
  {
    "name": "Undertow",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Water"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot line)",
    "duration": "Instantaneous",
    "desc": "A 5 foot wide, 10 foot tall wave appears either in front of you or 90 feet ahead of you. If it appears in front of you, it rushes out in a 90 foot long line. Otherwise, the wave rushes towards you and stops before it touches you.<br><br>Creatures caught in the wave must make a Strength saving throw or take 3d6 bludgeoning damage and be dragged 15 feet in the direction of the wave. A creature that succeeds takes half damage and is not moved. Objects that completely fit within the wave are dragged 15 feet as well. An object moved into the same space as a creature knocks the creature prone.",
    "empower": "You can start the wave at any point along the line in either direction."
  },
  {
    "name": "Dartskin",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Poison",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "A creature you touch has their skin changed to produce powerful poison. Whenever a creature touches the target, they take 3d6 poison damage. This damage can only occur once between each of the target's turns. A creature that bites the target takes 25 poison damage and becomes poisoned until the end of their next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rappel",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Forbidden (Arachnid)"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "A thread of web bursts from your body and pulls you up 300 feet onto an ethereal web. Any time before the end of your next turn, you can choose to drop down next to a creature within 60 feet, or a creature restrained by an Arachnid spell.",
    "empower": "You can move up to 30 feet along the web before choosing a location to drop down."
  },
  {
    "name": "Kaya's Blazing Star",
    "author": "Soreile",
    "tier": 2,
    "tags": [
      "Evocation",
      "Radiant",
      "Space"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instant",
    "desc": "You cloak yourself in star-fire and rocket through the air towards a point that you choose. You must have a line of sight to the point (creatures and difficult terrain do not count as obscuring your sight), and the maximum distance to the point is twice your remaining movement speed for the turn. Every creature between yourself and your destination must make a Dexterity saving throw or take 2d6 radiant damage and 1d6 bludgeoning damage. On a success, they only take 1d6 Radiant damage. <br><br>If the target location is occupied, the creature occupying the space must also make a Dexterity throw; if they fail, they take 2d6 radiant damage, 2d6 bludgeoning damage, and are also pushed 5 feet into an adjacent square and knocked prone. On a success, they take 2d6 radiant damage.<br><br>You are moved to the target location, consuming your remaining movement for the turn. This movement does not trigger attacks of opportunity, and ignores difficult terrain.",
    "empower": "All creatures within a 5 foot radius of the target point must make a Dexterity save or take 2d6 radiant damage, 2d6 bludgeoning damage and be knocked prone, and any creature at the exact target point has disadvantage on their Dexterity save."
  },
  {
    "name": "Glow Trap",
    "tier": 2,
    "tags": [
      "Illusion",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "You scatter four one-inch radius spheres of light to any four points within range that you can see. At the start of your next turn, they arm themselves. The next time a creature moves within 5 feet of the sphere, it explodes, illuminating a 20 foot radius for 1 minute. All creatures in that range are covered in the light and glow, emitting dim light out to 20 feet and becoming unable to hide or conceal their presence for the duration.<br><br>When you cast this spell, you can indicate which creatures do not set off spheres when they approach. You do not need to see any creatures or creature types you wish to exclude. Any excluded creatures are immune to being covered in light by an explosion from one of the spheres.",
    "empower": "Range increased to 90 feet. Sphere count increased to eight.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Control Light",
    "tier": 2,
    "tags": [
      "Illusion",
      "Radiant",
      "Concentration",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "15 minutes",
    "desc": "You assume total control over all natural light in the area. You can freely illuminate any space in the area, as well as remove all natural light from any space in the area, and can do so as many times as you like during your turn for 0 AP.<br><br>The spell cannot manipulate magical light or darkness.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Shade's Vengeance",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Shadow"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target corpse within range has its shadow reanimated to make one weapon attack on a creature within the attack's range. It uses the creature's statistics to determine its attack and damage.",
    "empower": ""
  },
  {
    "name": "Caustic Burst",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "1 AP",
    "range": "Self (5 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Acid bursts from your body and deals 2d6 acid damage to all creatures within 5 feet.",
    "empower": "Range increases to Self (10 foot radius)."
  },
  {
    "name": "Shockwave",
    "tier": 2,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot cone)",
    "duration": "Instantaneous",
    "desc": "You strike with enough force to send a rippling wave of raw power forward in a 30 foot wide cone. Creatures in range must make a Strength saving throw. On a failure, they take 3d6 bludgeoning damage, and you choose whether they are knocked prone or pushed back 15 feet.",
    "empower": "You can choose both effects for a given creature. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unwavering Protection",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Holy",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "Holy power spirals out from you and shields yourself and creatures in range that you choose. This magic follows you as you move. You gain 3d6+10 temporary hit points for the duration of the spell. Each creature you choose that starts their turn within range has their temporary hit points set equal to your temporary hit points if it would be higher. The spell ends when you run out of temporary hit points.",
    "empower": "You gain +10 temporary hit points."
  },
  {
    "name": "Strength of the Land",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Physical",
      "Earth",
      "Concentration",
      "Deprecated"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "The energy of the earth beneath your feet flows through you and stabilizes you. For the duration, as long as you are on the ground, you are proficient in all Strength rolls and you have advantage on any saving throw against an effect that would forcibly move you or knock you prone.<br><br>If you have the Earth tag, this spell does not require concentration.<br><br>If you have the Water tag, you incorporate some fluidity to your stubbornness, and can choose to automatically succeed on saving throws against effects that would forcibly move you or knock you prone.",
    "empower": ""
  },
  {
    "name": "Windsense",
    "tier": 2,
    "tags": [
      "Divination",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You become acutely aware of all shifts in the wind. You gain the following benefits: <br>>You have advantage on rolls to detect movement.<br>>You impose disadvantage on creatures making ranged attacks against you from more than 60 feet away.<br>>You have advantage on saving throws against Wind spells, and suffer no effect from them on a successful saving throw.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Thought Jammer",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Evocation",
      "Psychic"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A target creature must make a Knowledge saving throw or have their thoughts disrupted on a failure. On that creature's next turn, they cannot take any action that they took in their previous turn.",
    "empower": ""
  },
  {
    "name": "Viper's Fangs",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Poison"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "Any number of creatures you choose have their weapons coated in a quick-acting poison. Their next successful weapon attack while the spell lasts deals an additional 1d6 poison damage on hit, increased to 2d6 against creatures that are poisoned. A creature that ingests the poison from their own weapon takes 50 poison damage instead, ending the spell for them immediately.",
    "empower": ""
  },
  {
    "name": "Etched Unveiling",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Divination",
      "Acid",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Over the span of one minute, you brush your hand across a surface or object, leaving trace amounts of acid that work their way into the object. After one minute, the acid will have etched the name of all creatures that have touched the object or surface within the past 24 hours.<br><br>If the amount of names exceeds the amount of space on the target, only a blot of acid damage will be shown.",
    "empower": ""
  },
  {
    "name": "Compel Spirits",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Spirit",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "Your presence radiates out to the full range of the spell, challenging the spirits. Creatures you choose within this area must succeed on an Intuition saving throw. On a failure, choose whether each target that failed is frightened of you or charmed by you until the start of your next turn.<br><br>Incorporeal creatures affected by this spell are particularly vulnerable. Whichever effect is chosen for them lasts for the duration of the spell.<br><br>The field moves with you until the spell ends. A creature can only be affected by this spell once per cast.",
    "empower": "Deals 2d10 psychic damage on a failed saving throw. Incorporeal creatures take 3d10 damage instead.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unruly Spectators",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A 60 foot radius circle becomes exposed to a crowd of fey, eagerly watching the events that unfold. Whenever a creature other than you inside this area fails an attack roll, the fey ridicule them with words laced with magic, dealing 1d8 psychic damage.<br><br>If you leave the area, the spell ends. If the spell ends early for any reason, the crowd boos and hisses at you, dealing 3d8 psychic damage.",
    "empower": "Damage increased to 1d12."
  },
  {
    "name": "Madden Beasts",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Disease",
      "Beast",
      "Psychic",
      "Deprecated"
    ],
    "cost": "3 AP",
    "range": "60 feet ",
    "duration": "1 hour",
    "desc": "All beasts in a 15 foot radius centered on target point you can see must succeed on an Intuition saving throw or be driven berserk. They must attack the nearest creature they can see, and they must move to the nearest creature with all available movement if they can't currently attack a creature.<br><br>A beast that ends its turn without attacking takes 2d6 psychic damage.<br><br>Affected beasts can attempt the saving throw again upon reducing a creature to 0 or fewer hit points or taking psychic damage. On a success, the spell ends.",
    "empower": ""
  },
  {
    "name": "Projection",
    "tier": 2,
    "tags": [
      "Illusion"
    ],
    "cost": "2 AP",
    "range": "Self (10 foot radius) ",
    "duration": "8 hours",
    "desc": "Within the range of the spell, you can create an image of anything that can fully fit within the area. You can create one thing, or multiple things that all fit within the area. The image appears to be real, and obscures or hides creatures accordingly, but interacting with the image reveals that it is an illusion.<br><br>A creature that is suspicious of the illusion can make a Knowledge saving throw during their turn. On a success, the illusion appears transparent to them.<br><br>The spell ends if you cast this spell again.",
    "empower": "Range increased to Self (15 foot radius).",
    "author": "CrusaderDroid"
  },
  {
    "name": "Chemical Coating",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You fire multiple small globs of acid at a target creature within range that you can see. It must make a Dexterity saving throw or take 3d6 acid damage and be coated in acid. A successful saving throw deals half damage and does not coat the creature in acid.<br><br>Coated creatures take 1d6 acid damage at the start of each of their turns for the duration of the spell. Each time they take acid damage from a source other than this spell, the damage increases by 1d6 for the duration of the spell, to a maximum of 4d6. A coated creature can use 2 AP during their turn to make a Dexterity saving throw, ending the effect on a success.",
    "empower": "Choose one - initial damage per turn increased to 2d6, or maximum damage increased to 7d6, or you can target two creatures."
  },
  {
    "name": "Foretold Flames",
    "tier": 2,
    "tags": [
      "Divination",
      "Fire"
    ],
    "cost": "1-3 AP",
    "range": "120 feet",
    "duration": "1 hour",
    "desc": "You foretell a creature's impending demise in flames, sealing it into the near future. The next time this creature would take fire damage, the flames intensify and deal an additional 1d10 fire damage per AP spent on this spell. The spell then ends.<br><br>Casting this spell again before it has triggered ends the first spell without effect.",
    "empower": "If the source of fire damage requires a saving throw, the creature has disadvantage on its saving throw.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mother Bear's Fury",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Beast",
      "Spirit"
    ],
    "cost": "0 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Instantaneous",
    "desc": "The spirit of the bear fills you with protective wrath. You can't be affected by effects that would reduce your AP until the start of your next turn, and you are immune to conditions and spells that would prevent you from acting.<br><br>When a creature friendly to you within range takes damage before the start of your next turn, you gain 1 AP until the end of your next turn, to a maximum of 3 AP. You can only spend this AP on weapon attacks or Beast spells.",
    "empower": "AP can stack up to 6 AP.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Martial Wisdom",
    "tier": 2,
    "tags": [
      "Divination",
      "Physical"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You gain a weapon style for your currently equipped weapon until the end of your turn.",
    "empower": "The spell gains a duration of 1 minute.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Flame Blossom",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You summon a seed of the great Flame Oak, attached to a creature, object, or point within range. The seed sheds dim light in a 15 foot radius and lasts for 1 hour, at which point it vanishes. At any point, you may spend 1 AP to cause all seeds you have summoned to violently detonate. Creatures within 20 feet of the seed must make a Dexterity saving throw.<br>Targets take 4d6 fire damage on a failure, or half damage on a success. Creatures within the area of multiple detonations only take damage from one.",
    "empower": "You summon an additional seed.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Penumbral Chains",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Forbidden (Fairylock)"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Black glimmering chains of light emerge from the ground and attempt to ensnare target creature within range you can see. They must make a Dexterity saving throw or take 2d6 bludgeoning and 2d6 radiant damage and be burdened by the chains until the end of their next turn. While burdened, they must spend 1 AP to move up to 10 feet, and can't move otherwise.",
    "empower": "Reduce the AP cost of this spell by 1."
  },
  {
    "name": "Greymane's Stonefists",
    "author": "Argavyon",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You transform your fists into large stone hands. If your species does not have hands, you instead create two floating stone hands near your front limbs. They are too inflexible to use to wield weapons. Each fist does 2d10 damage on a hit, and uses either your Strength or spellcasting stat to determine their attack and damage bonuses. Your fists do 20 damage to objects made of stone or ice.<br><br>The fists grant you increased power to carry and destroy objects. You can punch a space to transform it into difficult terrain, or clear out difficult terrain with one strike, for 1 AP. Your carrying capacity is tripled so long as you can hold the objects with your fists. Grappled creatures have disadvantage on rolls to break free of the grapple.",
    "empower": "Duration becomes one hour."
  },
  {
    "name": "Gloom Crush",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Shadow",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Overwhelming melancholy surges through a 20 foot radius sphere centered on a target area in range. Each creature in the area must make an Intuition saving throw or fall victim to this melancholy, increasing all AP costs by 1 for the duration.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Bursting Boils",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Up to 3 creatures within range must succeed on a Constitution saving throw or take 3d10 poison damage as large, pulsing boils emerge from their skin. A creature that succeeds takes half damage and does not have boils emerge.<br><br>At the start of your next turn, the boils explode, and any creature within 10 feet of the target must succeed on a Constitution saving throw or take 2d10 poison damage. A creature that succeeds takes half damage.",
    "empower": "Damage increased by 1d10 on creation of the boils and explosion of the boils."
  },
  {
    "name": "Acidify",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Acid",
      "Earth"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "A nonmagical object that occupies a space no larger than a 10 foot cube is transformed into acid, which pools out into a 10 foot radius puddle. Creatures in range of the acid must make a Dexterity saving throw or take 5d6 acid damage. On a success, they move into the nearest empty space adjacent to the puddle.<br><br>The puddle remains for 1 minute. A creature that moves into the puddle or starts its turn there takes 2d6 acid damage.",
    "empower": "The puddle expands to 15 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Savagery",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Beast"
    ],
    "cost": "1-3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Target creature immediately makes one melee weapon attack per AP spent on the spell, targeting the last creature it attacked in melee. Each attack additionally deals 1d6 psychic damage to the attacker through overexertion.<br><br>If a beast is targeted, it makes one additional attack.<br><br>An unwilling creature can make an Intuition saving throw to avoid the effect on a success.",
    "empower": ""
  },
  {
    "name": "Harden Flesh",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Earth"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Your flesh becomes hard as rock, and roughly about as flexible. You have resistance to slashing, piercing, bludgeoning, and fire damage, but your movement speed is halved and you have disadvantage on Dexterity saving throws and ability checks.",
    "empower": ""
  },
  {
    "name": "Light of Scrutiny",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target object becomes vulnerable to all damage for the duration, as cracks, flaws, and defects are revealed.",
    "empower": "Range becomes Self (60 foot cone). You choose what objects are affected."
  },
  {
    "name": "Revolution of Shadows",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Shadow",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "In a 30 foot area centered on a target point you can see, every creature you choose within that area has their shadow rise up to stab them in the back. They must make a Dexterity saving throw or take 5d6 piercing damage, halved on a success.<br><br>A creature reduced to 0 or fewer hit points from this spell is overtaken by their shadow instead. For 1 minute, they are reanimated and become a puppet under your control, able to either move or make one weapon attack during their turn, but not both.",
    "empower": "Damage increased to 7d6."
  },
  {
    "name": "Vanishing Field",
    "tier": 3,
    "tags": [
      "Illusion",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (10 foot radius) ",
    "duration": "15 minutes",
    "desc": "This spell functions like Vanish, except it affects all creatures you choose within the range of the spell. The field is centered on you and follows you as you move. Any affected creature that attacks becomes visible, and only vanishes again at the end of their next turn if they are in range. A creature that ends their turn outside the field becomes visible.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Beast Roar",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "You loose a powerful roar that fills you and beasts you choose with primal power. You add your spellcasting stat to the damage done with weapons and Beast spells for everyone affected.<br><br>Beasts you choose that are not under your control and in range must succeed on an Intuition saving throw or become frightened of you and all affected beasts for the duration. They can repeat the saving throw at the end of each of their turns where they can no longer see you or an affected beast, or when they take damage, to end the effect on a success.",
    "empower": "Also adds bonus damage to a number of non-Beast creatures equal to your proficiency modifier. Frightened beasts have their movement speed reduced to 0."
  },
  {
    "name": "Snowflake Mirage",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Illusion",
      "Cold",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Illusory, feytouched snow rains down on a 60 foot radius area within range. Choose a creature within range that you can see when you cast this spell. The snowflakes project the image of that creature everywhere within the area. Creatures have disadvantage on attack rolls while within the area, and if they target the projected creature, can only hit them on a roll of 20. Creatures also have disadvantage on all Intuition checks to search for or detect other creatures within the area.<br><br>Any portion of the area affected by a Fire spell is burned up and no longer affected by this spell.",
    "empower": ""
  },
  {
    "name": "Hunting Threads",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Forbidden (Arachnid)"
    ],
    "cost": "1 AP",
    "range": "Self (120 foot cone)",
    "duration": "Instantaneous",
    "desc": "You fire up to five silken threads out at creatures you can see within range. They must succeed on a Dexterity saving throw or be restrained by the threads until the end of your next turn.<br><br>You can spend 1 AP before the spell ends to pull any number of creatures restrained by this spell up to 60 feet closer to you. A restrained creature can make a Strength saving throw to resist the effect. On a success, they are pulled 10 feet instead.<br><br>The thread is unbreakable, but does not require any physical strength to maintain, even if creatures are hanging in mid-air.",
    "empower": ""
  },
  {
    "name": "Umbral Stalker",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Shadow",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You infect the shadow of a target creature you can see. For the duration of the spell, you can use 1 AP to dissolve into shadow and emerge from the creature's shadow, moving you into an adjacent space and ending the spell.",
    "empower": "You are aware of the shadow's position.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Crimson Stain",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Disease",
      "Forbidden (Blood)"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius) ",
    "duration": "8 hours",
    "desc": "Black blood bursts from your heart, skewering you and attempting to skewer every creature within 30 feet. You take anywhere between 10 to 30 piercing damage as you choose and infect yourself with the Crimson Stain disease, while creatures in the area must succeed on a Dexterity saving throw or take the same damage and also be infected. A successful saving throw deals half damage and avoids infection.<br><br>Creatures with the Crimson Stain visibly have blood seeping through the skin covering the heart. If they spend more than 2 AP during a turn, blood pushes through, forcing the creature to roll one of its remaining hit die, take damage equal to the result, and lose the hit die. A creature without hit dice remaining takes damage equal to half the difference between their maximum hit points and their current hit points.",
    "empower": "You are immune to the Crimson Stain, but are still a carrier of the disease. Damage maximum increased to 45."
  },
  {
    "name": "The Devourer",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Summoning",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "5 feet",
    "duration": "8 hours",
    "desc": "You call forth a devourer, a creature made of a void of magic. It  hunts a 30 foot radius around itself for any existing spell effect with the Summoning tag. If a spell effect with that tag is in the area, or is cast in the area, the devourer immediately rushes to it and devours it whole, dealing 4d8 psychic damage to its caster and ending the effect immediately.<br><br>At the start of each of your turns, the area of the devourer increases by 30 feet.<br><br>If a devourer meets another devourer, they clash and destroy each other, dealing 12d8 psychic damage to their casters.<br><br>You can't end this spell early.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mass Edit Perception",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "This spell is similar to Edit Perception, except every creature within range that can see you must make an Intuition saving throw or be affected. You know which creatures have succeeded on their saving throws.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "False World",
    "tier": 3,
    "tags": [
      "Illusion",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You create a 20 foot radius sphere that attempts to trap all creatures you choose inside of it in an illusory realm of wonder. Creatures must make a Knowledge saving throw or be spellbound by this world. They are unaware of everything and everyone not in the illusion, and can only move 5 feet during their turns.<br><br>A creature that is interacted with by an unaffected creature, or a creature that takes damage, can repeat the saving throw, ending the effect early on a success. A creature that moves or is moved out of range is no longer affected by the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Gifts for the Living",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "You call upon the spirits of the deceased for restoration to avoid their fate. Every non-reanimated creature you choose within range heals 2d12 hit points. Each corpse and reanimated creature within range adds an additional 1d12 hit points, to a maximum of 6d12 hit points.<br><br>Creatures healed by this spell must finish a rest before they can be healed by it again.",
    "empower": "Also removes the poisoned condition and ends any disease effects on creatures."
  },
  {
    "name": "Draconic Effigy",
    "author": "Argavyon",
    "tier": 3,
    "tags": [
      "Draconic",
      "Transmutation"
    ],
    "cost": "3 AP",
    "range": "20 feet",
    "duration": "1 minute",
    "desc": "Transmute a piece of metal or stone into the large statue of a dragon, occupying an empty square within range. The statue has 20 AC, 80 HP and resists all damage from ranged attacks.<br>When you summon it, and for 1 AP once per turn afterwards, you can command it to move up to 20ft and then attack with either its breath of its claws.<br>The claws deal 2d8 slashing damage on a 10ft arc, with a to-hit bonus equal to your spellcasting modifier, and the breath deals 1d12 fire damage on a 30ft cone on a failed Dexterity save with your spell DC.",
    "empower": ""
  },
  {
    "name": "Distillation",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Holy",
      "Poison",
      "Deprecated"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "7 days",
    "desc": "You pull in all the poison from a 60 foot radius around you, concentrating it into one vial. Every creature in range is cured of the poisoned condition, and all Poison tag spells in the area immediately end.<br><br>The created vial is lethally poisonous. If applied to a weapon or piece of ammunition, it deals an additional 2d6 poison damage the next time it deals damage. The damage increases by 1d6 for each poisoned creature and 3d6 for each Poison tag spell that was absorbed in the creation. If the vial's poison deals at least 5d6 damage, creatures damaged by it must make a Constitution saving throw or be paralyzed until the start of the attacker's next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sacrificial Shield",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You channel a part of your life into a strong, temporary barrier. Pay up to half of your current hit points to gain temporary hit points equal to twice that amount for the duration.<br><br>While the temporary hit points remain from this spell, you can't receive healing, but you are immune to unholy damage and vulnerable to radiant damage.",
    "empower": "You can expend hit dice to power the spell instead. Roll each hit die and add double the amount of healing you would normally receive as temporary hit points."
  },
  {
    "name": "Exile to the Sky",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on a Dexterity saving throw or be thrown 600 feet into the air and suspended there, unable to take any action.<br><br>The spell fails if the creature cannot be lifted the full height. When the spell ends, the creature harmlessly lands in its original space.",
    "empower": ""
  },
  {
    "name": "Arcane Fusillade",
    "tier": 3,
    "tags": [
      "Evocation",
      "Arcane",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "Arcane energies fold around you and spin out into deadly seeking projectiles. Every creature you choose within range takes 1d4 arcane damage, and must succeed on a Dexterity saving throw or take 3d4 arcane damage, halved on a success.<br><br>At the start of each of your turns, you can repeat the damaging effect if you use all your AP and movement for the turn. Otherwise, the spell ends.",
    "empower": "Initial damage increased to 2d4, and range increased to 90 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Preserve Integrity",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Space",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "You spatially seal off a 60 foot radius area centered on target point within range. Space and Summoning spells of equal or lower tier in the same area can't be cast. Summoned creatures can't enter the area and are immediately expelled. Creature corpses inside the area can't be reanimated.<br><br>You can cast this spell over the course of 15 minutes. If you do so, the MP cost is halved.",
    "empower": "Duration becomes 24 hours."
  },
  {
    "name": "Quake",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Earth"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "The earth around you splits, fragments, and cracks as it shakes violently. Creatures other than you within range take 3d6 bludgeoning damage, and must make a Strength saving throw or fall prone and take 2d6 additional bludgeoning damage.<br><br>The area is difficult terrain afterwards. A creature already in difficult terrain takes 2d6 additional damage from falling prone from failing the saving throw.<br><br>This spell has no effect on creatures not touching the ground. Creatures underground are vulnerable to the damage from this spell.",
    "empower": "You can choose which creatures are affected. The terrain beneath unaffected creatures does not become difficult terrain."
  },
  {
    "name": "Savage Rampage",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Beast",
      "Physical"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "Sheer primal power overtakes you. Make one weapon attack with your currently equipped weapon on every creature you choose within range. You deal an additional 3d6 damage on hit.",
    "empower": "Recover 1 AP for each creature reduced to 0 or fewer hit points, up to 3 AP."
  },
  {
    "name": "Song of Pride",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Forbidden (Song)",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song of overconfident heroes becoming complacent in the face of danger. If you spend at least 1 AP during your turn towards casting this spell, this pride begins to seep into the area around you. Creatures you choose within range add your spellcasting stat to their attack rolls, and take additional damage from weapons and spells equal to your spellcasting stat. An unwilling creature can make an Intuition saving throw to avoid being affected each turn.<br><br>Upon completing this spell, that moment of pride sinks into the spirit of affected creatures, for better or worse. For each affected creature, they either add your spellcasting stat to their attack rolls for 1 minute, or add your spellcasting stat to the damage taken from weapons and spells for 1 minute. You choose which effect applies to them.",
    "empower": "Reduces the AP cost by 3."
  },
  {
    "name": "Prismatic Eye",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "1 mile",
    "duration": "1 hour",
    "desc": "You create a pair of invisible eyes. One eye floats 30 feet above a point within 30 feet of you, while the other eye flies to a point within 1 mile that you can see. The distant eye scans everything in a 60 foot radius around it, which the nearby eye projects onto the ground directly below it. The distant eye can detect hidden or invisible creatures this way, but cannot see through objects or into containers.<br><br>You can move either eye for 2 AP. The spell ends if you cast it again.",
    "empower": ""
  },
  {
    "name": "Serpent Lock",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Poison",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "Sight",
    "duration": "1 hour",
    "desc": "You loose a transparent snake-like construct of poison magic that targets one creature you can see. Now and at the start of each of your turns, it moves 30 feet towards the target. Upon reaching the target, it \"bites\", subsuming itself into the target. It must make a Constitution saving throw. On a failure, it is paralyzed for the duration. It repeats the saving throw at the end of each of its turns. On the first time it succeeds, it is no longer paralyzed but has its movement set to 0. On the second success, its movement is halved. On the third success, the spell ends. The creature is unaware it has been affected by a spell in this manner, perceiving it as a strange failure of their body.<br><br>A creature that succeeds on the initial saving throw has their movement speed reduced by half for the duration and is aware they have been affected. At the end of each of their turns, they can repeat the saving throw with advantage to end the effect on a success.<br><br>The spell camouflages itself to avoid detection. It takes the closest possible path to reach its target, climbing around obstacles and squeezing through any opening larger than one inch. If it ends its movement in an empty space, a creature can identify it with a DC 20 Intuition saving throw. If the target is aware of the spell, it automatically succeeds on its first saving throw against the spell.",
    "empower": "After the creature recovers from being paralyzed, it is also poisoned until the spell ends. The spell moves 45 feet per turn instead."
  },
  {
    "name": "Liquidate",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Acid",
      "Water"
    ],
    "cost": "1 AP",
    "range": "Self ",
    "duration": "Instantaneous",
    "desc": "Your body melts into a puddle covering your prior space. You can't be targeted, but can't cast any other spells or attack. You can still move. At the start of your next turn, you reform into your normal form.<br><br>If the terrain you are on is damaged or destroyed, you take 30 damage and reduce your maximum hit points by the same amount, as your liquid body is broken up and disrupted, inflicting grievous injuries when you reform.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Hellbound Torrent",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Forbidden (Hellfire)"
    ],
    "cost": "0 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Streams of obsidian flames pour out of the air around you to target up to three creatures within range that you can see. They must succeed on a Dexterity saving throw or take 4d6 damage, halved on a success. Half of this damage is fire, and the other half is unholy.",
    "empower": "Pay the empower cost in hit points instead of MP. Deduct the cost from your maximum hit points. You can cast this spell again this turn."
  },
  {
    "name": "Rejection",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Psychic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (10 foot radius) ",
    "duration": "1 minute",
    "desc": "You create an intense field that fills a 10 foot radius around you. Attacks and spells of equal or lower tier fail to penetrate the field. Creatures that try to pass the field must make an Intuition saving throw. On a failure, they are instead stunned until the start of your next turn and knocked backwards 5 feet.<br><br>Your movement speed is halved for the duration of the spell.",
    "empower": ""
  },
  {
    "name": "Crucible Forge",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Fire",
      "Holy",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You summon a field of fire and steel that envelops a creature. This field is indestructible and prevents movement as well as attacks and spells through the field. An unwilling creature can make a Dexterity saving throw to avoid being encased in the field.<br><br>The field superheats the area inside, forcibly burning away impurities. At the start of each of the creature's turns, it must make a Constitution saving throw, taking 2d6 fire damage on a failure and half damage on a success. Any conditions on the creature are ended. The creature can use its action to make a Willpower saving throw to break free of the field, ending the field on a success.<br><br>When the field ends, either as the result of a successful Willpower saving throw, or when you choose to end it for 0 AP at any time, the creature within is forged in body and spirit. For each time it took damage from the spell, the creature heals 2d12 hit points and gains 1 AP. This bonus AP remains until the end of the creature's next turn.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Caustic Plunge",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A 20 foot square area within range sinks 3 feet into a pool of acid. Creatures standing in this area take 2d6 damage immediately. The acid remains for 1 minute as difficult terrain, and creatures that start their turn inside or step inside for the first time during their turn take 2d6 acid damage.",
    "empower": "Affects a 30 foot square."
  },
  {
    "name": "Vexatious Pilgrimage",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Spirit",
      "Poison",
      "Disease",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You invite a pilgrimage of malign spirits into the area around you. Now and at the start of each of your turns, up to 3 creatures within range are targeted by a Vexatious Traveler spell.",
    "empower": "Vexatious Traveler becomes empowered for the duration."
  },
  {
    "name": "Mind Lance",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Psychic"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot line)",
    "duration": "Instantaneous",
    "desc": "A crippling burst of mental information floods out from you into every creature in a 15 foot wide, 60 foot long line. They must make an Intuition saving throw or take 4d10 psychic damage and be stunned until the end of their next turn. A creature that succeeds takes half damage and loses 1 AP on their next turn instead.",
    "empower": "Damage increased to 5d10."
  },
  {
    "name": "Wind Shift",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature moves up to 30 feet in any direction. They must end this movement on solid ground.",
    "empower": "You can choose to swap places with the creature instead of moving them."
  },
  {
    "name": "Call Flora Vindicator",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Plant",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "At target point within range, a seed drops into the ground. Within the span of six seconds, it blooms into a towering plant creature of indeterminate type, bristling with spines, vines, carnivorous plants, and heavy bark.<br><br>The flora vindicator is a Large plant creature with AC 16 and 150 hit points, with a movement speed of 20 feet. It takes its turn after yours and uses your spellcasting stat for all of its attack and damage rolls and saving throws. It can fire needles at up to three targets within 60 feet for 1d8 piercing damage for 1 AP, or slam a creature within 15 feet with a vine for 2d8 bludgeoning damage for 2 AP. It tries to automatically grapple creatures that it attacks with its vines or who attack it in melee, and it has no limit to how many creatures it can grapple. It can move freely even when grappling creatures.<br><br>Whenever you take damage outside of your turn, the flora vindicator gains 1 AP on its next turn.",
    "empower": "Removes the Concentration tag from this spell."
  },
  {
    "name": "Distant Pillar",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Forbidden (Fairylock)"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A horizontal pillar of black, gleaming light forms and is launched at a target creature within range you can see. It must make a Dexterity saving throw or suffer 3 Fairylock, take 3d6 bludgeoning and 3d6 radiant damage, and be knocked backwards 30 feet. A successful saving throw deals half damage and prevents all other effects.<br><br>Fairylock remains for 1 minute after its most recent application. For every AP a creature spends, it takes 1 damage per Fairylock it has.",
    "empower": "If cast after another Fairylock spell, remove the AP cost on this spell."
  },
  {
    "name": "Stormwrath",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You call down three lightning bolts that each strike a 10 foot radius area centered on target points you can see. Creatures in the area must make a Dexterity saving throw or take 6d6 lightning damage, halved on a success. A creature can only take damage from this spell once, even if multiple bolts overlap.",
    "empower": "Adds two additional bolts."
  },
  {
    "name": "Wind Wall",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Wind"
    ],
    "cost": "1 AP",
    "range": "10 feet",
    "duration": "Instantaneous",
    "desc": "You throw out a wave of wind that forms a wall 15 feet long and 10 feet tall that remains until the start of your next turn. Projectiles that would pass through the wall are thrown into the ground and destroyed.",
    "empower": "Removes the AP cost from this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Dark Pact",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Eldritch"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You strike a deal with forces from beyond. When you start your turn at 0 hit points while the spell is active, you must cast a spell. The spell costs 0 AP, but uses your maximum hit points instead of your MP for its cost. You cannot receive healing while at 0 hit points for the duration of the spell.<br><br>You can make a Willpower saving throw against your own spell DC at the end of each of your turns. On a success, the spell ends immediately. You cannot end the spell otherwise.",
    "empower": "Maximum hit point costs are halved.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unholy Wave",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Soul-searing unholy magic sinks into the target creature, dealing 2d6 unholy damage.<br><br>At the end of the creature's next turn, that magic explodes outwards in a 20 foot radius. The target and every creature in range must succeed on a Constitution saving throw or take 6d6 unholy damage, halved on a success.<br><br>If the initial damage reduces a creature to 0 or fewer hit points, they immediately trigger the wave.",
    "empower": "You can choose which creatures take damage from either part of this spell."
  },
  {
    "name": "Spacial Collapse",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Space"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Space in a 20 foot radius, 100 foot tall cylinder centered on target point within range you can see briefly collapses into an area the thickness of a coin before reverting back to normal in the same second. Creatures in the area must succeed on a Dexterity saving throw or take 6d4 damage, halved on a success, which cannot otherwise be reduced or prevented. Creatures that fail their Dexterity saving throw must also make an Intuition saving throw or be stunned until the end of their next turn.<br><br>Creatures in the area that are flying are immediately grounded.",
    "empower": "Damage increases to 8d4."
  },
  {
    "name": "Reposition",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Space"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "Target creature within range is teleported to target empty space within range.<br><br>The spell fails if the creature does not end on solid ground.",
    "empower": ""
  },
  {
    "name": "Infiltration",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Shadow",
      "Still",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 week",
    "desc": "Your shadow extends out to target creature's shadow and touches it, attempting to place a part of itself into their shadow. They must succeed on a Willpower saving throw, or the transfer is complete. You gain knowledge of the creature's location relative to yours as well as a precise knowledge of every action the creature does and every word the creature speaks.<br><br>Even on a successful saving throw, the creature does not know you targeted it with this spell unless they have the Shadow tag.",
    "empower": ""
  },
  {
    "name": "Arrival",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Draconic"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "With a mighty leap, you arrive at target point you can see and physically reach, radiating draconic presence on arrival. Creatures within 30 feet must make an Intuition saving throw or be frightened of you until the end of their next turn. Every creature frightened this way grants you 1 AP, to a maximum of 6 AP.",
    "empower": "A creature that is frightened also takes 2d6 psychic damage. All creatures in range can't take responses against your actions."
  },
  {
    "name": "Vampiric Curse",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Disease",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature you can see within range must succeed on a Constitution saving throw or have their skin changed to resemble a vampire's own skin. When exposed to direct sunlight, the creature immediately takes 2d10 radiant damage, increasing by 1d10 for each consecutive turn they end their turn in sunlight. They have disadvantage on attack rolls while in the sunlight.<br><br>A creature can repeat the saving throw at the end of each of their turns. On a success, the spell ends.",
    "empower": "Grants vulnerability to radiant damage from other sources of radiant damage other than this spell."
  },
  {
    "name": "Ward from Beasts",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Beast"
    ],
    "cost": "3 AP",
    "range": "Self (300 foot radius)",
    "duration": "8 hours",
    "desc": "A magic totem is planted into the ground that emanates an aura out to 300 feet. Beasts outside of this aura can't enter. Beasts inside deal only half damage with their attacks and experience an intense antipathy that makes them want to leave the aura.<br><br>The spell ends if the totem is destroyed.",
    "empower": ""
  },
  {
    "name": "Lightning Guard",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "The target creature is enveloped in a field of static electricity. When a creature attacks the target with a weapon attack, the lightning crashes against the attack and negates it completely.<br><br>Each time the barrier prevents an attack, roll 1d20. On a roll of 10 or lower, the barrier temporarily dissipates. It returns at the end of the target creature's next turn.<br><br>The barrier is instantly destroyed if hit by a spell with the Cold tag, or if the creature enters a body of water.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Kuinu's Coordination",
    "tier": 3,
    "tags": [
      "Divination",
      "Fire"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "As a response to a willing creature casting a spell that includes you as a target, you forge a connection of fire between you and the target creature. For the duration, you are immune to all of that creature's harmful spells. You take no damage and automatically succeed on all saving throws against their spells, suffering no adverse effects.<br><br>Apocalyptic spells ignore this spell's effect.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Beastshape",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Beast",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You transform yourself into a beast with hit dice equal to or less than your character level. Your equipment merges into your new form and can't be used.<br><br>While you are transformed, you use your new form's stats if they are greater than yours. You lose access to your species features and talents, and gain your form's features and attacks. You can't cast non-Beast spells, and Beast spells have their AP cost increased by 1.<br><br>You are forced back into your original form if reduced to 0 or fewer hit points.",
    "empower": "You gain temporary hit points equal to twice the form's hit dice. While they remain, damage doesn't provoke concentration checks."
  },
  {
    "name": "Arcanist's Mist",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Arcane",
      "Poison",
      "Concentration",
      "Deprecated"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "10 minutes",
    "desc": "A fog of whatever color you choose is unleashed into a 30 foot radius sphere, centered on a target point you can see. The fog spreads around corners and through openings. It obscures vision outside of the fog, but not into the fog.<br><br>Creatures inside the fog when it forms, and who start their turn inside or move into it during their turn, must make a Constitution saving throw. On a failure, they inhale the fog. For the duration of the spell, they have an aura around them of the same color as the fog, visible only to you. You can see this aura even through walls and other obstructions.<br><br>An affected creature that is targeted by one of your spells suffers additional poison damage equal to the MP cost of your spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Air Ride",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You gain a flight speed equal to your walking speed for the duration.",
    "empower": "Also affects all creatures you choose within 5 feet of you. A creature that ends their turn more than 5 feet away from you falls to the ground."
  },
  {
    "name": "Luminous Marring",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "300 feet ",
    "duration": "1 minute",
    "desc": "Painful light shines down and sears target creature within range that you can see. It must succeed on a Constitution saving throw. On a failure, it takes 4d12 radiant damage and becomes marred through the intense light, becoming vulnerable to your choice of slashing, piercing, or bludgeoning damage until the end of your next turn. A creature that is immune to a damage type cannot be vulnerable, but a resistance is replaced with a vulnerability. On a successful saving throw, the target takes half damage and does not gain a vulnerability.",
    "empower": "Choose one - Damage increased to 6d12, or you can choose any non-radiant damage type to bestow a vulnerability, or you affect an additional target."
  },
  {
    "name": "Bane Barrier",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Poison"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "As a response to being targeted by an attack or spell, you shield yourself with a barrier of sharp, poisonous quills. You have advantage on all saving throws and add your spellcasting stat to your AC until the start of your next turn. This can cause incoming attacks to miss.<br><br>If a creature was attempting to attack you in melee and missed, they must make a Constitution saving throw. On a failure, they take 6d4 poison damage and become poisoned for 1 minute. On a success, they take half damage and are not poisoned. They can repeat the saving throw at the end of each of their turns to end the poisoned effect early.",
    "empower": "AP cost reduced by 1.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Blacklight",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Radiant"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "A target item becomes imbued with a black light that shines out to 60 feet. Reanimated creatures within the light have the duration on any spell reanimating them suspended.",
    "empower": "The duration becomes 24 hours."
  },
  {
    "name": "Hearkening Thunder",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Lightning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You overcharge yourself with lightning magic. Lightning spells without the Delayed tag cost 0 AP but double MP for the duration.<br><br>At the start of each of your turns, you must pay 10 MP if you wish to keep concentrating on this spell. If you can't or don't want to pay the MP, the spell ends.",
    "empower": ""
  },
  {
    "name": "Establish Domain",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Arcane",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "Self (60 foot radius) ",
    "duration": "Until dispelled",
    "desc": "You assert your magical authority over a 60 foot sphere. When anyone casts a spell in this area, you can do one of the following: <br><br>>You can empower the spell by paying MP equal to its cost.<br>>You can add one target of your choice to a spell that targets a number of creatures. The target must be in range of the original caster.<br>>You can copy a spell with a range of Self to yourself. If it is a Concentration spell, it ends when the original caster loses concentration.<br>>You can spend MP equal to the cost of the spell to cast it yourself for 1 AP. You choose new targets as necessary. You can activate this only once between each of your turns.<br>>You can gain MP equal to the tier of the spell being cast.<br><br>Your domain lasts until it is dispelled, you are reduced to 0 hit points or banished from the current plane, or until another creature casts this spell overlapping your domain. Casting this spell again dispels your prior domain.",
    "empower": ""
  },
  {
    "name": "Impulse",
    "author": "Uri de Vries",
    "tier": 3,
    "tags": [
      "Divination",
      "Time"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute (Concentration?)",
    "desc": "State an action, or course of (possible-) actions made by you. If any of the actions made requires checks, attacks or saving throws to be made, you or that creature relevant to the roll makes those rolls.<br><br>You gain insight in what the possible outcome would be, without that either of the events has happened yet or that other costs have been made yet to perform them. The time you can peer ahead can be no larger than 6 (or however long one 'round' is) seconds.<br><br>If or when the forecasted events are to your approval, you may let them enroll as forecast, using all results, before the spell ends. Otherwise, you may discard the forecast and continue the duration of this spell.",
    "empower": ""
  },
  {
    "name": "Imitation",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Illusion",
      "Shadow"
    ],
    "cost": "X AP",
    "range": "Variable",
    "duration": "Instantaneous",
    "desc": "You craft shadow magic into a potent illusion taking the form of any tier 1 or 2 spell without the Concentration tag, a Forbidden tag, or a range of Self, and unleash it. This works similarly to the chosen spell, except that it uses this spell's tags, and all saving throws are changed to Knowledge saving throws.<br><br>A creature that succeeds on any saving throw caused by the illusory spell takes no damage and ignores all effects of the spell until it ends.",
    "empower": ""
  },
  {
    "name": "Icewall",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Cold",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "90 feet ",
    "duration": "1 hour",
    "desc": "You create nine 10 foot cubes of ice and place them in any unoccupied space within range. Each cube must be adjacent to at least one other cube. Each cube has AC 10 and 30 hit points and vulnerability to fire.<br><br>You can cast this spell before you finish paying the full AP cost. You instead create a number of cubes equal to the AP you paid.",
    "empower": "You can carve the cubes as you create them to make shapes, such as stairs or a sculpture."
  },
  {
    "name": "Spell Vector",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Arcane",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature is magically edited to copy and spread spell effects affecting it to any creature it touches. If the target uses a touch range attack or spell, strikes a creature in melee, shoves or drags a creature, or is the target of any of the prior actions, they copy all currently existing spell effects on them to the touched creature, except for this spell.<br><br>When the spell ends, all shared effects on other creatures also end.",
    "empower": "Duration increased to 15 minutes."
  },
  {
    "name": "Lightningrod",
    "author": "Levi",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "Touch (1 mile)",
    "duration": "1 hour",
    "desc": "When you cast this spell, you charge and link to a metallic object of medium or smaller size. You always know the location of the object if it is within range and not completely obstructed by non-conductive materials.<br><br>At any time within the duration, you may spend 1 AP to transform into pure energy and move instantly to the location of the charged object. This spell then ends.",
    "empower": "Raise the range and duration to 10 miles and 8 hours respectively."
  },
  {
    "name": "Intervention",
    "tier": 3,
    "tags": [
      "Evocation",
      "Holy",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "A subtle holy symbol of light is embedded in the target creature. If the creature would take damage that would reduce them to 0 or fewer hit points, the damage is negated, and they are healed for 6d6 hit points. The spell then ends.<br><br>A creature can't be targeted with this spell again until it completes a rest.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Emerald Knives",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot cone)",
    "duration": "1 minute",
    "desc": "You hurl a fan of knives crafted from poison magic in a 60 foot cone. Every creature you choose within range must succeed on a Dexterity saving throw. On a failure, the knife harmlessly passes through them and flips around, aimed at their back. On a success, the knife misses completely and vanishes.<br><br>When a creature with a knife at their back attempts to make a weapon attack, you can spend 1 AP as a reaction to cause the knife behind them to stab them, dealing 5d6 poison damage and causing them to be poisoned until the end of your next turn. The creature must then make a Constitution saving throw. On a failure, they lose the attack and all AP spent on it. The knife then vanishes.",
    "empower": "Choose one - damage increased to 8d6, or damage reduced to 3d6 and response cost reduced to 0 AP, or range increased to Self (60 foot radius)."
  },
  {
    "name": "Open Book",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Psychic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You see the surface thoughts of any creature whose eyes you can see. You can see these thoughts as long as you can maintain eye contact with them. In addition to any information you may gather, you have advantage on attack rolls against them as well as ability checks to influence them, and they have disadvantage on attack rolls against you.",
    "empower": ""
  },
  {
    "name": "Akashic Record",
    "tier": 3,
    "tags": [
      "Divination",
      "Sign",
      "Ritual"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create a temporary distortion that overlaps reality with the Plane of Revelation in a 30 foot circle centered on a point within range. The borders of the distortion are visible as a translucent wall of multicolored light with symbols both known and foreign flickering across it. Within this zone, the following effects occur:<br><br>-All creatures within the zone attempting to intentionally deceive another instantly fail. Anyone listening to them is intuitively aware that the information is false.<br>-All creatures within the zone fail at any attempts to conceal their presence, as luminous symbols flicker around them, describing them in snippets of divine language.<br>-All creatures within the zone can understand all languages, and their speech is understood by any creature that knows at least one language.<br>-All Divination spells cast by a creature within the zone have their AP cost reduced by 1, to a minimum of 1.<br>-All Divination spells cast by a creature within the zone that can be Empowered may be Empowered for 1 fewer MP per tier.<br><br>When cast as a Ritual, the duration is extended to 8 hours.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Epidemic",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A virulent plague rips through a 20 foot radius area centered on a point within range you can see. Creatures in the area must make a Constitution saving throw or take 3d6 poison damage and become diseased by the spell for 1 minute. A successful saving throw deals half damage and avoids the disease.<br><br>Each time a diseased creature ends their turn adjacent to a creature, the diseased creature must make a Constitution saving throw or take 3d6 poison damage.",
    "empower": "Damage increased to 4d6."
  },
  {
    "name": "Protect",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You can cast this in response to any effect that would damage you or force you to make a saving throw outside of your turn.<br><br>You are immune to everything until the start of your next turn. You can't take any further responses.<br><br>After casting this spell, increase its AP cost by 10. Reduce its cost by 1 at the start of each of your turns until it returns to normal.",
    "empower": ""
  },
  {
    "name": "Arise",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "15 minutes",
    "desc": "Up to three corpses within range become infused with unholy magic and rise to life as either skeletons or zombies, as chosen by you. They take their turn after yours.<br><br>A skeleton or zombie reanimated by this spell that is reduced to 0 hit points disintegrates.",
    "empower": "Targets up to five corpses."
  },
  {
    "name": "Eye of Laplace",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Divination",
      "Psychic",
      "Eldritch"
    ],
    "cost": "2 AP",
    "range": "Sight",
    "duration": "Instant",
    "desc": "You conjure a set of eye-shaped glyphs around a target that fire a burst of psychic energy. The target must make a Wil save. On a failure, they take 3d6 Psychic damage. In addition, one glyph remains attached to the target. You can simultaneously see from your location and from the location of all currently active Laplace glyphs, and locations you can see using a Laplace glyph are valid targeting locations for Sight range spells. If the target succeeds on their save, they take half damage and do not retain a glyph.<br><br>You may have a number of Laplace glyphs active at any one time equal to your spellcasting stat, minimum of 1. If you use Eye of Laplace on another target while at your maximum number of glyphs, the oldest glyph fades. Glyphs fade after 1 hour or if the creature they are attached to is knocked unconscious.<br><br>You may choose to forgo the damage when casting Eye of Laplace. A target may choose not to make a Wil save when targeted in this manner.",
    "empower": "The damage is increased to 5d6. The target retains a glyph even if they succeed on their Wil save."
  },
  {
    "name": "Giantslayer Legend",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You invoke the attributes of the legendary giantslayer of fey lore. You gain the following benefits: <br>- Your movement speed increases by 10 feet.<br>- Creatures larger than you have disadvantage when attacking you.<br>- Your weapon attacks on creatures larger than you deal additional damage equal to one roll of your weapon damage die.<br>- When targeted by a spell and you succeed on a Dexterity saving throw, you are completely unaffected.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Accelerate",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Time",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature gains 2 AP on each of their turns for the duration.<br><br>When the spell ends, the target creature is stunned until the end of their next turn.",
    "empower": "Bonus AP increased to 3.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Precipice of Madness",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Eldritch"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "10 minutes",
    "desc": "The target creature's perception on reality subtly changes. They suffer no ill effects until they fail a roll. Upon failing a roll while the spell is active they must make an Intuition saving throw. On a failure, eldritch forms appear to intrude upon reality, driving the creature into a berserk frenzy. It can take no other actions other than to spend all AP on moving and attacking the nearest creature.<br><br>If the creature cannot or does not attack during a turn, it makes an Intuition saving throw. On a success, the eldritch forms fade away until the creature fails another roll and then fails its saving throw.",
    "empower": "The creature can't roll with advantage for the duration of the spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Plasma Chain",
    "author": "Levi",
    "tier": 3,
    "tags": [
      "Evocation",
      "Fire",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "60 feet (Special)",
    "duration": "1 minute",
    "desc": "You launch a stream of pure energy at a target creature in range. Upon reaching that creature, the energy can then jump through any number of other creatures of your choice, provided the total distance covered by the energy including the initial distance to reach the primary target is less than or equal to 60 feet.<br><br>All creatures the energy jumps through must make a Constitution saving throw, taking 2d6 fire damage and 2d6 lightning damage on a failed save, or half as much on a success.<br><br>All affected creatures become charged with free ions for up to 1 minute. The next time a charged creature receives fire or lightning damage, that damage increases by 2d6 of the other type, then this effect ends on them.<br><br>If the caster has the fire tag, fire damage dealt by this spell and its lingering effect changes from d6s to d8s.<br>If the caster has the lightning tag, lightning damage dealt by this spell and its lingering effect changes from d6s to d8s.",
    "empower": "Range increases to 90 feet."
  },
  {
    "name": "War Machine",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You channel powerful war magic. When you take the Attack action, you can also cast a Physical spell with an AP cost of 2 or less as part of the Attack action without consuming additional AP.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Catalog",
    "author": "Uri de Vries",
    "tier": 3,
    "tags": [
      "Divination"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 Hour",
    "desc": "Choose a spell (other than this one) that you currently know and another spell you don't know. You forget the chosen spell, and instead gain knowledge of the new spell until the spell ends. The chosen spells must be of a spellbook fit for your class.",
    "empower": ""
  },
  {
    "name": "Vineghast Calling",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Summoning",
      "Plant",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 hour",
    "desc": "You call upon the vengeful spirits of the dead to give life to a vineghast, a fearsome creature bearing multiple weapons. It takes its turn after yours, and while you concentrate on this spell, it obeys your mental commands.<br><br>If you stop concentrating on this spell, the vineghast breaks free from your control, and spends all its turns moving to and attacking the nearest creature for the remaining duration of the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Blooded Spite",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "1 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Your blood, or similar bodily liquid, becomes highly acidic. Taking slashing or piercing damage sprays that blood in a 15 foot long jet towards the attacker, damaging all creatures in the way for 2d4 acid damage.",
    "empower": "Damage increased to 4d4."
  },
  {
    "name": "Earth Ally",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Earth",
      "Spirit",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You call forth a benign ethereal spirit from the earth, granted great power over the earth.<br><br>At the start of each of your turns, the spirit can do one of the following, as chosen by you: <br><br>>The spirit raises up to three stone pillars, each occupying a 5 foot cube, within 30 feet of you. It can raise the same pillar multiple times, and it can target occupied spaces. It can't raise a pillar that would crush a creature due to insufficient space.<br>>The spirit creates or removes difficult terrain in a 20 foot cube within 30 feet of you.<br>>The spirit carves a 15 foot cube area within 30 feet. It can take any shape you desire, such as stairs or a sculpture.<br>>The spirit imbues you with earth magic, granting you temporary hit points equal to twice your spellcasting stat until the start of your next turn. While the temporary hit points remain, you are resistant to slashing, piercing, and bludgeoning damage and immune to Earth spells, but your movement speed is halved.",
    "empower": ""
  },
  {
    "name": "Skimmer",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Water"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You gain the ability to move at high speed across a surface of water. As soon as you touch a surface of water, your movement speed quadruples so long as you maintain contact with the water.<br><br>The spell ends if you do anything other than using all your movement speed each turn, or if you are not in contact with the surface of water.",
    "empower": "Range becomes Self (5 foot radius). Each affected creature has an independent version of the spell that ends separately from yours."
  },
  {
    "name": "Fulmination",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Lightning",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "A massive torrent of lightning crashes down in a 30 foot square area within range. All creatures inside take 10d6 lightning damage.",
    "empower": ""
  },
  {
    "name": "Full Bloom",
    "author": "Levi",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Fey",
      "Plant",
      "Sign"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Boundless life energy floods a 30 foot radius sphere centered on a point in range. Plants inside the area are instantly revived if dead, and revitalized. Any creature that starts its turn in the area can choose to absorb some of this life energy to either recover health equal to a roll of one of their largest hit dice, or end one poison or disease affecting them. This effect doubles its healing for Fey and Plants. This effect does not occur for Constructs or Undead.<br><br>While inside the area, your Fey spells have their AP costs reduced by 1, to a minimum of 1.<br><br>While inside the area, your Plant spells may be empowered by paying the MP cost of a spell one tier lower instead of the spell's own tier.",
    "empower": ""
  },
  {
    "name": "Arcanist's Smite",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Arcane"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Concentrated arcane magic forms a thin beam that you blast at one target creature within range that you can see, triggering an explosion. The primary target must succeed on a Dexterity saving throw or take 3d6 arcane damage, plus 1d6 arcane damage per AP spent on this spell, and be knocked backwards 5 feet per AP spent and fall prone. A successful saving throw inflicts half damage and does not knock the target backwards.<br><br>Creatures within a radius of 5 feet of the target per AP spent on the spell must succeed on a Dexterity saving throw or take 3d6 arcane damage and be knocked back 5 feet away from the target. A successful saving throw deals half damage and does not knock the target backwards.<br><br>AP spent on Arcane spells by you this turn can be counted towards AP spent on this spell.",
    "empower": "There is no upper limit on how much AP can be spent on this spell. You can use AP from other creatures' Arcane spells cast between each of your turns."
  },
  {
    "name": "Steam Burst",
    "tier": 3,
    "tags": [
      "Evocation",
      "Fire",
      "Water"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Scalding steam erupts from a target point on a solid surface within range, engulfing a 20 foot radius, 60 foot tall cylinder emanating from the target point. The steam can travel around corners. Creatures in the area must make a Constitution saving throw or take 7d6 fire damage, halved on a success.",
    "empower": "Damage increased to 10d6.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Dispel Magic",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Arcane",
      "Universal",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You end one spell effect of equal or lower tier than the tier you cast Dispel Magic at. You can use this as a response to another creature within range that you can see casting a spell to cancel the spell, preventing it from being cast. The casting creature still expends MP as normal.<br><br>You can cast this spell at any tier even if you cannot normally cast spells of that tier. You know what tier the target spell is when casting this spell.",
    "empower": "Dispel Magic gains the Silent and Still tags.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Endless Revelation",
    "author": "BFHNV",
    "tier": 3,
    "tags": [
      "Divination",
      "Radiant",
      "Eldritch",
      "Potent",
      "Sign",
      "Deprecated"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Brilliant light shines from a point within range, piercing through everything in a 30-foot radius.  You can see everything in the area in perfect detail at all times.  Shadow spells of equal or lower tier within the area or overlapping with it have no effect.<br><br>Radiant spells cast in the area cost 2 less AP, to a minimum of 1.",
    "empower": ""
  },
  {
    "name": "Crushing Awe",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "You emanate an unnatural aura of awe out to a 30 foot radius. Each creature within must make an Intuition saving throw or take 3d6 psychic damage, lose 1 AP on their next turn, and repeat the saving throw until they succeed once or fail three times. A creature reduced to 0 hit points by this spell is left in a delirious stupor for 1 minute and can't act unless they are damaged or an adjacent creature spends 2 AP to shake them free, whereupon they fall unconscious if they are still at 0 hit points.",
    "empower": "Any number of creatures you choose are unaffected. A successful saving throw deals half damage."
  },
  {
    "name": "Falselight",
    "author": "BFHNV",
    "tier": 3,
    "tags": [
      "Illusion",
      "Radiant",
      "Shadow",
      "Concentration",
      "Potent"
    ],
    "cost": "3 AP",
    "range": "Self (30 feet)",
    "duration": "1 hour",
    "desc": "An illusory lantern appears in your hand, shedding illusory light in a 30 foot radius.  You and any number of creatures you choose perceive this as magical bright light, removing all shadows and revealing anything invisible.  All other creatures perceive it as magical darkness, making it impossible to see in or out of the area.<br><br>When cast at a higher tier, the radius increases by 15 feet for every tier above 3.",
    "empower": ""
  },
  {
    "name": "Standoff",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Physical",
      "Concentration"
    ],
    "cost": "0 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You can cast this spell while rolling initiative to fill the air with intense tension. Creatures in range other than you must make an Intuition saving throw to move or take any action.<br><br>The spell ends if you or any creature within the spell's effect move or take an action, or a creature within the spell's effect is damaged.",
    "empower": "When a creature other than you ends the spell, you gain 2 AP and can immediately make a response.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Twist Fate",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Eldritch",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You protect yourself through blending multiple strands of fate, gaining the following benefits: <br>>You can't have disadvantage on any roll.<br>>Creatures you target can't have advantage on ability checks or saving throws against your actions.<br>>Creatures targeting you can't have advantage on their attack rolls.<br>>If you take damage, you can end the spell to negate the damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hijack",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Psychic"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "Target creature immediately moves up to half its movement speed and takes one action that costs 2 AP or less. You choose the target for that action, if applicable.<br><br>Unwilling creatures can make an Intuition saving throw to prevent being controlled.",
    "empower": "Costs 2 AP."
  },
  {
    "name": "Banshee's Aid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Spirit",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "15 minutes",
    "desc": "You call an ethereal banshee to aid you, which appears in a target area. The banshee can do one of three effects, which you can switch between during your turn for 1 AP:<br>>All sound in a 30 foot radius around the banshee is silenced.<br>>The banshee shrieks, deafening all creatures other than you in a 30 foot radius around the banshee. At the start of your turn, any deafened creature still in the area takes 1d10 psychic damage.<br>>The banshee suppresses its presence and becomes invisible.<br><br>You can move the banshee up to 15 feet during your turn for 1 AP.",
    "empower": "Removes the AP cost on changing effects and movement.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Equinox Clash",
    "tier": 3,
    "tags": [
      "Evocation",
      "Fire",
      "Cold"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot cone)",
    "duration": "Instantaneous",
    "desc": "A stream of fire spouts from one hand while a stream of cold spouts from the other hand, as you swing both arms forward and violently combine the streams. Creatures within range must make a Dexterity saving throw or take 5d6 fire damage or 5d6 cold damage, halved on a success. Creatures in a 5 foot wide, 30 foot long line at the center of the cone instead take 4d6 fire and 4d6 cold damage, halved on a success.",
    "empower": "Center line range increased to 60 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Pillar of Fire",
    "tier": 3,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "A pillar of fire 100 feet tall descends onto a 20 foot radius area centered on a point you can see within range. Creatures in the area must make a Dexterity saving throw or take 8d6 fire damage. Creatures that succeed take half damage.<br><br>The pillar of fire remains until the start of your next turn, continually pouring down from above. Any creature that enters the pillar that did not already take damage from the spell must make a Dexterity saving throw or take 8d6 fire damage, halved on a success.",
    "empower": "Damage increases to 10d8.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Typhoon Wave",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "The winds in a 30 foot radius centered on a target point you can see intensify to powerful levels. Every creature in the area must succeed on a Strength saving throw or take 5d6 bludgeoning damage and be moved 10 feet in any direction into an empty space. Creatures adjacent to an object they can hold onto have advantage on the saving throw.",
    "empower": "Damage increased to 6d6. Radius increased to 40 feet."
  },
  {
    "name": "Maxwell's Convulsion",
    "author": "Levi",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Cold",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Select two 20-foot cubes in range. These areas must be entirely within the cast range of this spell, cannot overlap, and must touch each other at at least one point, edge, or side. Heat energy is magically sucked out of one area and forcibly injected into the other area.<br><br>In the cold area, all creatures inside must make a Constitution saving throw, taking 4d8 cold damage on failed save or half as much on a success. All exposed water immediately freezes and fires are put out as temperatures drastically drop.<br><br>In the hot area, all creatures inside must make a Constitution saving throw, taking 4d8 fire damage on failed save or half as much on a success. All exposed water immediately vaporizes and most dry flammable materials spontaneously ignite as temperatures sharply rise.<br><br>If the caster has the fire tag, you may now change the size of the hot area to a 15-foot cube or 25-foot cube, and creatures inside take 5d8 damage instead.<br><br>If the caster has the cold tag, you may now change the size of the cold area to a 15-foot cube or 25-foot cube, and creatures inside take 5d8 damage instead.",
    "empower": "The maximum cast range is increased to 120 feet, and the areas no longer need to touch each other."
  },
  {
    "name": "Summon Harphest",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "Self (120 foot radius) ",
    "duration": "1 minute",
    "desc": "You summon a Harphest - an intangible yet physical voice from the Sea of Possibility. It speaks honeyed madness into the ears of creatures within range. Now and at the start of each of your turns, up to three random creatures within range must make an Intuition saving throw. On a failure, on their next turn, they roll 1d20 to determine their action:<br>- On a roll of 1 to 5, the creature falls prone, screaming. Their turn ends.<br>- On a roll of 6 to 15, overlaying voices and visions distract the creature. They flail about, making one weapon attack on a random adjacent creature if possible. Their turn ends.<br>- On a roll of 16 to 20, the creature becomes frightened and loses 1 AP, but can act normally.<br><br>You cannot end this spell normally. You must make a DC 15 check with your spellcasting stat during your turn to end the spell. You have advantage on the check if you cast Containment Field during your turn.",
    "empower": "You can choose one target creature each turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Loyal Hound",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Beast",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "10 feet",
    "duration": "8 hours",
    "desc": "You create a hunting hound with an undying loyalty to you. It is ethereal and immune to harm.<br><br>The hound remains within 10 feet of where it was summoned at all times. It can be told to watch for creatures or events of any criteria you specify, such as \"the man with the six-fingered hand\" or \"a source of fire\". You can adjust these criteria at any time without requiring an action. If the hound sees anything within 60 feet that fits the criteria, it barks loudly enough to be heard within 300 feet, telepathically notifying you.<br><br>The hound has unerringly true vision. If something that fits the chosen criteria would be hidden to it due to magic, its barks dispel the effect.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Heat Haze",
    "tier": 3,
    "tags": [
      "Illusion",
      "Fire",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Flames ignite around you and create a hazy mirage of you. It has its own AP pool which is equal to yours, can use all your non-spellcasting actions, and shares all current spell effects you have. It can't move away from you and can't take actions that would move it. When it would deal damage, it converts all damage it would deal to fire damage, and it deals half the damage it would normally inflict.<br><br>The spell ends if you are reduced to 0 or fewer hit points, or if you come into contact with enough water to soak you completely or take damage from a spell with the Water tag.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Scorpion's Escape",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Poison"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "In response to being targeted by a spell or making a saving throw against a spell currently affecting you, you inject yourself with poison magic, dealing 4d6 poison damage that can't be reduced or negated.<br><br>The poison then travels to the triggering caster, who takes twice as much damage as you and must immediately make a concentration saving throw even if their spell does not have the Concentration tag. On a failure, the spell ends or is lost, and any AP spent on the spell is lost.",
    "empower": "Self-damage reduced to 2d6, and the reflected damage is instead multiplied by 5."
  },
  {
    "name": "Sunspot",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Radiant",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "As you begin casting this spell, mark a 20 foot radius area on the ground centered on target point within range you can see. Now and at the start of each of your turns, intense light bombards the area, and every creature inside must make a Constitution saving throw or take 2d12 radiant damage, halved on a success.<br><br>At the end of each turn where you spend at least 1 AP casting the spell, you can choose to move the area by up to 10 feet. The area then increases its radius by 10 feet.<br><br>When you finish casting this spell, the area erupts into searing sunlight. Creatures in the area are blinded until the end of your next turn and must succeed on a Constitution saving throw or take 8d12 radiant damage, halved on a success. Undead creatures instead take 12d12 radiant damage.",
    "empower": "Choose one - damage is increased to 12d12 and 18d12 to undead on eruption, or damage dealt per turn increased to 3d12, or initial radius increased to 30 feet."
  },
  {
    "name": "Boundary of Death",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Physical"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You channel your power into a slashing melee weapon you possess, then immediately make one attack against a creature in range. On a hit, it deals an additional 1d4 damage.<br><br>If a 4 is rolled on the bonus damage die, it deals an additional 50 damage.",
    "empower": "You have advantage on the attack roll.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Northern Cross",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Holy",
      "Sign"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "A brilliant constellation forms 200 feet above you, creating a cylinder that covers a 30 foot radius centered on you. This area has the following effects: <br>- When a creature is healed, you can choose to add your spellcasting stat to the healing received. <br>- Shadow and Unholy spells in the area are dispelled. Creatures inside can't be targeted or affected by Shadow or Unholy spells, and a creature affected by them that enters the area is freed of their effects.<br>- Your Holy spells cost 1 less AP, to a minimum of 1 AP, while you are in the area.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Thornbind",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Thorned vines burst from the ground in a 20 foot radius centered on target point you can see within range, and attempt to grab all creatures in the area. A creature must succeed on a Dexterity saving throw or take 4d6 piercing damage and be restrained for the duration.<br><br>During their turn, a creature can choose to take 1d6 piercing damage once per turn to make a Strength saving throw. On a success, they are freed.<br><br>The vines can be cut apart or burned by a creature that can deal slashing or fire damage that spends 3 AP to free an adjacent restrained creature.",
    "empower": "Damage required to make a saving throw increases to 2d6."
  },
  {
    "name": "Wine Wager",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Poison",
      "Ritual",
      "Silent"
    ],
    "cost": "N/A AP",
    "range": "Self",
    "duration": "1 year",
    "desc": "Target creature must succeed on an Intuition saving throw after being engaged in one minute of conversation with you while you cast this spell. On a failure, they become locked in a game of wits against you, as you create two glasses of wine. At least one glass of wine must be poisoned - a creature that drinks the poisoned wine takes 12d6 poison damage and must make a Constitution saving throw or fall unconscious for 1 hour.<br><br>The creature chooses which wine glass to drink from before both you and the creature drink at the same time. You cannot force the creature to choose, but it cannot leave without choosing before the spell ends. Once the creature drinks, you are compelled to drink as well.<br><br>The spell ends immediately if the creature takes damage from any other source other than this spell, or you are reduced to 0 or fewer hit points.<br><br>If you are clearly immune to poison damage, such as if you are undead or a construct, the creature automatically passes its Intuition saving throw.",
    "empower": "Instead of the normal effect, a creature that drinks the poisoned wine is immediately affected by any one of your Poison tag spells.",
    "author": "CrusaderDroid"
  },
  {
    "name": "On Scaled Wings",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You grow two large draconic wings that give you a flight speed equal to your walking speed for the duration.",
    "empower": "Duration increased to 8 hours.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Hall of Mirrors",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Illusion",
      "Fey",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You scatter ethereal mirrors all over a 60 foot radius around yourself. While in this area, when you are attacked, attacking creatures must roll 1d20 first. On a roll of 15 or lower, they strike at a mirror image of yourself and do no damage to you.<br><br>Creatures you damage ignore this effect on their next turn.<br><br>The spell ends if you leave the area.",
    "empower": ""
  },
  {
    "name": "Rushing Waves",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Water"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "Instantaneous",
    "desc": "With a motion, water erupts from your location and sweeps out to a 90 foot radius around you. Creatures within range must succeed on a Strength saving throw or take 2d6 bludgeoning damage and be swept away 10 feet. A successful saving throw deals half damage and does not knock the creature backwards.<br><br>Creatures on difficult terrain are bashed into the ground and take an additional 4d6 bludgeoning damage.<br><br>The water washes away all difficult terrain and all non-Water spells that affect the ground or an area that includes the ground it washes over. Difficult terrain reverts to normal terrain, and spells affected immediately end.",
    "empower": "Any number of creatures, terrain, and spells you choose are unaffected."
  },
  {
    "name": "Grand Ray",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Radiant",
      "Delayed"
    ],
    "cost": "3 AP",
    "range": "Self (300 foot line)",
    "duration": "Instantaneous",
    "desc": "You blast a focused beam of light out in a 15 foot wide, 300 foot long line away from you. Creatures that are not behind cover in this line must make a Constitution saving throw or take 6d10 Radiant damage, halved on a success. Creatures in the center 5 feet of the line are also blinded on a failed saving throw until the end of your next turn.",
    "empower": "Damage increases to 7d10. If any creature is reduced to 0 or fewer hit points by this spell, refund 1 AP."
  },
  {
    "name": "Snapfrost",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Evocation",
      "Cold"
    ],
    "cost": "1-3 AP",
    "range": "60 feet ",
    "duration": "Instantaneous",
    "desc": "For every AP spent on this spell, a 10 foot radius sphere centered on a point within range suddenly and abruptly freezes. Creatures in the area must succeed on a Constitution saving throw or take 6d4 cold damage and have their movement speed reduced by half on their next turn. A successful saving throw deals half damage and does not reduce movement speed. A creature can only take damage once from this spell, no matter how many spheres they are within.<br><br>The freeze also freezes all water in the area. Creatures standing in water in the area are restrained. They can spend 1 AP to make a Strength saving throw to break free if only their feet are caught, or 2 AP if they are frozen over more of their body. On a success, they break free.",
    "empower": "Choose one - create two more spheres, or damage increased to 10d4, or movement speed reduced to 5 feet on a failed saving throw."
  },
  {
    "name": "Portal",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Space",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "120 feet",
    "duration": "15 minutes",
    "desc": "You create two portals, with each portal taking an empty space at a point within range that you can see. Any creature can freely travel through one portal to arrive at the other portal. Creatures can see the other destination through a portal. Spells and attacks can travel through the portal.",
    "empower": ""
  },
  {
    "name": "Ursa Major",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Forbidden (Werebear)"
    ],
    "cost": "3 AP",
    "range": "Self ",
    "duration": "15 minutes",
    "desc": "You take the Mantle of the First Bear and transform yourself into a ferocious werebear. You gain the following benefits for the duration of the spell: <br><br>>Your Strength, Dexterity, and Constitution increase by 2. This can take you past +5 or +6 in a stat.<br>>Your hands can be used as claws, which deal 1d6 slashing damage on a hit. Your claws ignore resistance and immunity to slashing damage.<br>>Your movement speed increases by 5 feet for every Werebear spell affecting you, including this one.<br>>Your damage with your claws increases by 1 for every Werebear spell affecting you, including this one.<br>>After taking damage to your hit points, you gain temporary hit points equal to your Constitution (minimum 1) until the start of your next turn.<br>>You can make an additional attack when taking the Attack action. This stacks with Extra Attack.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Bewitched Objects",
    "author": "Soreile",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Until dispelled",
    "desc": "You enchant any number of objects within range, none of which can exceed 5 pounds in weight. You can mentally command these objects.<br><br>The objects have a rudimentary intelligence. They can obey your orders and carry out complex commands and communicate with you through elaborate pantomime that is unintelligible to other creatures. They can observe a small area around them and can understand any languages you can speak. When observed, unless you explicitly command otherwise, they remain still and are indistinguishable from normal objects.<br><br>If an animated object is destroyed, the spell ends for that object.",
    "empower": ""
  },
  {
    "name": "Blackened Edifice",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Earth",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "60 feet ",
    "duration": "1 hour",
    "desc": "A tower of black stone rises from the earth at a target empty area, occupying a cylinder with a radius of 10 feet and a height of 20 feet, topped with an ornate, reflective jet black glass obelisk. The spell fails if there is insufficient room for this construction.<br><br>The tower emanates unholy energy. Undead and reanimated creatures that start their turn within 60 feet gain temporary hit points equal to your spellcasting stat at the start of each of their turns.<br><br>You can spend 1 AP once per turn to have the obelisk blast a target creature within 120 feet with a ray of unholy magic. It must make a Constitution saving throw or take 2d6 unholy damage. Undead and reanimated creatures are healed for the same amount instead, even if they don't normally absorb unholy damage.<br><br>The tower has AC 14 and 120 hit points. Casting this spell again while a tower already exists destroys the first tower.",
    "empower": "The obelisk can target a second creature, but it must be Undead or reanimated."
  },
  {
    "name": "Waterfall",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Water"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "100 feet above a target point within range that you can see, vast amounts of water begin to pour down, covering a line up to 30 feet wide centered on that point. The water douses flames and Fire spells that make contact with it, and heavily obscures creatures on the other side. Creatures that enter the water during their movement have their movement set to 0 for the rest of the turn and must make a Strength saving throw or be knocked prone. Creatures forcibly moved into the water are knocked prone.<br><br>At the start of each of your turns, you can move the waterfall up to 10 feet in any horizontal direction. It can't change its orientation.<br><br>The water vanishes one second upon hitting the ground, instead recycling itself to reappear at the top again. Pollutants and other objects swept up in the water will continue to be a part of the waterfall until the spell ends.",
    "empower": "Increases the force of the water to inflict 3d6 bludgeoning damage on a failed saving throw, and half of that on a success."
  },
  {
    "name": "Dread Coagulation",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Acid",
      "Summoning",
      "Water"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You spread thin webs of acidic liquid through any number of corpses in range, and cause them to congeal together into a mindless acidic blob under your direct control. Its starting location is any empty space within range.<br><br>The blob has AC 16 and 30 hit points, plus 10 hit points for every corpse used in its creation. It takes the size of the largest corpse used, gaining an additional 20 hit points for every size category above Medium. It is resistant to slashing, bludgeoning, and piercing damage, absorbs acid damage, and is vulnerable to fire and cold damage.<br><br>The blob is an unintelligent creature incapable of self-action. It does not take turns of its own. You must telepathically command it during your turn using 1 AP to have the blob take a turn, and can only do this once per turn. It has a movement speed of 20 feet, uses your spellcasting stat for all saving throws, and can make an acidic touch attack using your proficiency modifier and spellcasting stat to determine attack bonuses. On a hit, it deals 3d10 acid damage plus your spellcasting stat, absorbing the creature if it would reduce it to 0 or fewer hit points and restoring 10 hit points. The blob can squeeze through openings as small as one inch, although doing so requires its full movement for the turn.<br><br>Creatures that move through the blob's space must make a Dexterity saving throw or take 3d10 acid damage.",
    "empower": ""
  },
  {
    "name": "Summon Anima",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Summoning"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "15 minutes",
    "desc": "You summon an anima into an object that represents it within range. You can choose any anima that matches one of your tags. It takes its turn after yours and follows your mental commands.<br><br>If you are reduced to 0 or fewer hit points, the anima is banished back to its plane.",
    "empower": ""
  },
  {
    "name": "Neutralization",
    "author": "Zombehking",
    "tier": 3,
    "tags": [
      "Evocation",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "30'",
    "duration": "Instantaneous",
    "desc": "You wash a creature with a mild acid and base, neutralizing everything about them. The target creature loses all persistent effects (not permanent effects), whether they are good or bad. An unwilling target can make a Dexterity saving throw to avoid the effect.",
    "empower": ""
  },
  {
    "name": "Bearer of Bad News",
    "author": "CrusaderDroid",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Beast",
      "Psychic",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "You summon a brown bear in an adjacent empty space, imbued with an unnerving focus on a target creature within range that you can see. The brown bear gains temporary hit points each turn equal to two times your spellcasting stat and adds your spellcasting stat to all of its attack and damage rolls against that target as long as the target has more than 0 hit points. It takes its turn after yours and obeys your mental commands, but cannot attack any creature other than the focused target.<br><br>You can spend 3 AP to change the focused target to a new creature within range, reduced to 2 AP if the prior target has been reduced to 0 hit points or is no longer in range.<br><br>The bear vanishes when the spell ends or it is reduced to 0 or fewer hit points.",
    "empower": "Removes the Concentration tag from this spell. Casting this spell again causes the previous bear to vanish."
  },
  {
    "name": "False Firmament",
    "author": "Levi",
    "tier": 3,
    "tags": [
      "Illusion",
      "Eldritch",
      "Lightning",
      "Wind",
      "Water",
      "Space",
      "Sign",
      "Deprecated"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A projection of the starry skies forms above you in a 60 foot radius dome centered on your position. The projection depicts the exact view of night sky above your current position regardless of distance and actual time of day.<br><br>Spells that require view of the sky or stars may be cast inside the area as if the caster has a view of the actual sky or stars.<br><br>The area is filled with dim light.<br><br>While inside the area, your spells that share any tag with this spell have their MP cost lowered as if they were a spell of one tier lower (no effect on tier 1 spells).<br><br>If you have the Illusion tag, when you cast this spell you may instead choose to project a modified view of the sky, altered as you wish. Creatures viewing the altered projection cannot discern if the projection is real or altered.",
    "empower": ""
  },
  {
    "name": "Soul Erosion",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Acid",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "All creatures other than you within range must succeed on an Intuition saving throw. On a failure, acidic magic seeps into their soul and exposes their weakness. They become vulnerable to the next source of damage they take before the end of their next turn, and have disadvantage on all saving throws to end ongoing effects during their next turn and at the end of their next turn.",
    "empower": ""
  },
  {
    "name": "Chatter Curse",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Beast",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on an Intuition saving throw or have their head transformed to resemble a parrot. They continually and obnoxiously speak in a parody of their voice at all times. Creatures within 30 feet that can hear and understand the target can't have advantage on their rolls. You can exempt any number of creatures you see from being affected by this effect.<br><br>The target must also make a Willpower saving throw at the start of each of their turns. On a failure, they thoughtlessly speak about a secret they wanted to keep.",
    "empower": ""
  },
  {
    "name": "Exile",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Eldritch",
      "Holy",
      "Space",
      "Unholy",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on a Willpower saving throw or be removed from your current plane. If they are a native, they are set in a harmless demiplane and can repeat the saving throw at the end of each of their turns to return to their prior location.<br><br>If the creature is not from this plane, they are instead locked in a battle of wills with you. They are partially phased out of the plane and can't be targeted by anything. At the start of each of its turns, it makes a competing Willpower roll against your spellcasting stat. If it gets two consecutive successes or your concentration is broken, it ends the spell early and deals 4d12 psychic damage to you and stuns you until the end of your next turn from the backlash of the spell. If it gets two consecutive failures, it is banished from the plane for a year and a day, sent back to its native plane, and the spell ends.",
    "empower": "An extraplanar creature is banished if it fails twice, even if it succeeds once after failing."
  },
  {
    "name": "The Bleeding Cords",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Forbidden (Blood)"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "Target creature below half its maximum hit points is restrained by thick cords pulled from its own blood. It takes 2d10 bludgeoning damage at the start of each of its turns.<br><br>The creature can spend 2 AP and either 1 hit die or 10 hit points to make a Strength saving throw to break free. On a success, the spell ends.",
    "empower": "Binds an additional creature of equal or smaller size adjacent to the target. Only the target can attempt the saving throw."
  },
  {
    "name": "Surging Vessel",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Arcane",
      "Eldritch",
      "Holy",
      "Psychic",
      "Unholy",
      "Concentration"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Power rushes through you as you open your body up to raw magic. For the duration, you use your spellcasting stat in place of your Strength, Dexterity, and Constitution, and have resistance to damage from spells.<br><br>At the end of each turn while this spell is active, you take damage equal to your spellcasting stat times the number of turns you've ended while concentrating on the spell.",
    "empower": "You gain +1 to your spellcasting stat for the duration."
  },
  {
    "name": "The Conception",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Draconic",
      "Eldritch",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You summon an image of the very first dragon, a being so disconnected from modern dragonkind that the mere image causes uncontrollable distress. Every creature within range that can see you must make an Intuition saving throw. On a failure, they are frightened for the duration, and spend their turns moving to the closest possible location to take the Hide action. On a success, they are frightened until the start of your next turn.<br><br>A creature that is Hiding can repeat the saving throw at the start of each of their turns. On a success, the effect ends for them.",
    "empower": "Creatures that fail any saving throw from this spell take 1d20 psychic damage."
  },
  {
    "name": "Guardian Angel",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Holy",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "15 minutes",
    "desc": "You call forth a fragment of pure holy power to watch over the target creature. They can use your spellcasting stat instead of their own stats for any saving throw. If they would take damage that would reduce them to 0 or fewer hit points during the spell, they are instead healed to one half of their maximum hit points and have all conditions and negative spell effects removed. The spell then ends.<br><br>This spell can't be cast on the same target more than once per rest.",
    "empower": ""
  },
  {
    "name": "Storm Chains",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You cast chains of lightning from yourself to target creature, which are five feet long lines. At the start of each of their turns, or if a creature starts their turn inside the chain, they must make a Dexterity saving throw or take 3d8 lightning damage, halved on a success. If a target is more than 60 feet away from you, the chain breaks on them.<br><br>You can target a new creature for 1 AP during each of your turns. A creature can only take damage from this spell once between each of your turns.",
    "empower": "Range increased to 90 feet. Chain range before breaking increased to 90 feet."
  },
  {
    "name": "Grasping Growth",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Plant",
      "Concentration"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "You infuse energy into the ground and will new life to sprout in the form of thick vines in a 60 foot radius area centered on your current location.  For each AP spent to cast this spell you spawn one vine.<br><br>Each vine can be commanded to coil around one creature in range that is within 60 feet of the ground. A targeted creature must succeed on a Dexterity saving throw or become prone and restrained. An airborne creature caught by a vine is pulled down to the ground, suffering fall damage as necessary. Vines that miss their target retreat into the ground harmlessly. A creature restrained by this spell may repeat the save at the start of each of their turns to attempt to free themselves. Alternatively if a vine is destroyed, the restrained creature is freed. Vines have 10 AC, 20 HP, and a restrained creature has disadvantage on attacking the vines restraining them.<br><br>While this spell lasts, you may repeat the cast effect once on each of your turns at no additional MP cost, paying 1-3 AP each time, to spawn more vines.",
    "empower": ""
  },
  {
    "name": "Deceleration",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Time",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A 30 foot radius sphere centered on a target point you can see begins to decelerate in time. Every creature within the sphere when it is cast and when they start their turn inside of the sphere must succeed on an Intuition saving throw. On a failure, they become affected by the deceleration as well.<br><br>Affected creatures have their movement speed halved, have disadvantage on Dexterity saving throws, lose 1 AP, and can only make one attack per turn no matter how many attacks they would normally be able to make.<br><br>A creature outside the sphere can repeat the saving throw at the end of each of their turns, ending the effect on a success.",
    "empower": ""
  },
  {
    "name": "Force of Will",
    "tier": 4,
    "tags": [
      "Evocation"
    ],
    "cost": "3 AP",
    "range": "Self (15 foot radius)",
    "duration": "Instantaneous",
    "desc": "Raw magical force is expelled from you into a 15 foot radius sphere centered on you. You remove the frightened, charmed, and paralyzed conditions from you, and other creatures within range must make a Willpower saving throw or take 5d12 damage, halved on a success.",
    "empower": "Removes the AP cost from this spell.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Superposition",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Illusion",
      "Lightning",
      "Space",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (600 feet)",
    "duration": "8 hours",
    "desc": "Your body dissociates into two identical phantom images formed of energized particles which you can freely move separately, exploring different possibilities. If used in combat, the two bodies have their own movement speed, though they share your turn. The phantom images are both considered your true body, and share their senses with each other. Due to their uncertain and illusory nature, the phantom images have advantage on skill checks to perceive their surroundings or to hide their presence. Their existence is so thin that creatures more than 30 feet away cannot detect them with non-magical senses.<br><br>If at any point during this spell's duration, another creature becomes aware of one of your phantom images or the two bodies move out of range of each other the spell ends early. When the spell ends, you must choose one of the two bodies to be your true body, and the other phantom image dissipates into nonexistence as probability collapses onto that body and its actions being the true line of reality.<br><br>**Empower:** The range of this spell becomes Self (1 mile).",
    "empower": ""
  },
  {
    "name": "Touch of Torment",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Forbidden (Hellfire)"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature becomes surrounded by flickering obsidian flames whispering of their final fate. Whenever they take fire damage, the flames flare up and deal an additional 1d6 fire damage. Whenever they take unholy damage, the flames whisper louder and impose disadvantage on their next attack roll.<br><br>A creature can spend 2 AP during their turn to make an Intuition saving throw to end the spell early on a success.",
    "empower": "Pay the empower cost in hit points instead of MP. Fire damage increased to 2d6. Unholy damage imposes disadvantage on all attack rolls they make during their turn."
  },
  {
    "name": "Song of the End",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Forbidden (Song)",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 feet)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song about the downfall of a kingdom, overturned by a vengeful god. If you spend at least 1 AP during your turn towards casting this spell, you gain temporary hit points equal to five times your spellcasting stat per AP spent.<br><br>While casting, all creatures within range immediately know you are casting a powerful spell. Most sentient creatures with means will attempt to target you to force you to stop. Creatures with fewer hit dice than your level must instead make an Intuition saving throw or be frightened for 1 minute and take any measures required to leave the area of effect.<br><br>When completed, a devastating wave of force rushes from you and blasts the area of the spell. Creatures within range take 8d10+20 arcane damage, and must make an Intuition saving throw or take 4d10 psychic damage, halved on a success. Terrain in the area is utterly destroyed, leaving a hollowed out hole. Objects that fit completely within the area are destroyed.<br><br>A creature reduced to 0 or fewer hit points by this spell is disintegrated.",
    "empower": "A number of creatures equal to your spellcasting stat within range are unaffected by this spell."
  },
  {
    "name": "Telekinesis",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Psychic",
      "Concentration",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "As part of casting this spell, and for 1 AP on each of your turns, you can move yourself or an object of up to 100 pounds, plus 100 more for each tier above 4 this spell was cast at, up to 60 feet in any direction. Objects currently held by a creature will also drag the creature along if they fail a Strength saving throw.<br><br>If an object would be moved into a creature's space, the creature must make their choice of a Strength or Dexterity saving throw or take 4d6 bludgeoning damage and be knocked away 5 feet and fall prone. The object then continues on its path. A successful Dexterity saving throw avoids the damage and being knocked away and falling prone. A successful Strength saving throw prevents all effects and stops the object immediately. Creatures can't make a Strength saving throw if the object is larger than they are.",
    "empower": "You can choose to instead spend 3 AP to move up to two objects, or move yourself and one object."
  },
  {
    "name": "Death Grip",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You transform the surface of one of your empty hands into a highly corrosive acid. The target creature must succeed on a Constitution saving throw or have 1d6 hit dice destroyed. If the creature has insufficient hit dice, it instead takes 20 acid damage for each hit die that would be destroyed.<br><br>Creatures you are grappling have disadvantage on the saving throw.",
    "empower": ""
  },
  {
    "name": "Release",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Beast",
      "Water",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "120 feet",
    "duration": "15 minutes",
    "desc": "You break a seal between the boundary that separates the ground from the deep ocean, creating a portal on the ground at target point you can see, with a radius of 30 feet. The area in the portal becomes water, extending down infinitely, and is threatened by an abyssal denizen. Any creature that ends their turn in the water must make a Dexterity saving throw or be grabbed by the denizen's tentacles and pulled underwater 20 feet, taking 4d6 bludgeoning damage. Creatures without a swim speed have disadvantage on the saving throw.<br><br>At the start of each of an affected creature's turns while grabbed, it must repeat the saving throw. On a success, it breaks free and can swim back up and no longer needs to roll saving throws against this spell. On a failure, it is dragged down 20 more feet in addition to taking 4d6 bludgeoning damage.<br><br>If the spell ends, water first gushes out at high speed, enough to eject every creature in the water into the air. They are launched a number of feet into the air equal to the number of feet they were underwater.",
    "empower": ""
  },
  {
    "name": "Path of Ice",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Cold",
      "Water",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot long line)",
    "duration": "10 minutes",
    "desc": "You conjure a stream of water that covers a 10 foot wide line up to 90 feet long, which travels forward and away from you. Upon reaching the desired location, it freezes solid. Creatures in the path must make a Dexterity saving throw or be restrained and take 6d6 cold damage. A creature that succeeds takes half damage and moves out of the way of the path into the closest empty space.<br><br>The path remains for the duration of the spell. Each 5 foot square has 10 hit points, AC 10, and vulnerability to fire and bludgeoning damage, and shatters if its hit points are reduced to 0. A creature restrained by the spell can make a weapon attack against the nearest square, freeing itself if the square is destroyed.",
    "empower": "Destroyed squares are restored at the start of each of your turns.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Divine Scourge",
    "tier": 4,
    "tags": [
      "Evocation",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "Without warning, multiple pillars of light descend onto all creatures you choose within a 30 foot radius, centered on a point within range. Targeted creatures must succeed on a Dexterity saving throw or take 7d8 radiant damage, halved on a success.",
    "empower": "Radius increases to 40 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "The Crows",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Beast",
      "Spirit",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot line) ",
    "duration": "1 minute",
    "desc": "You call forth an unceasing murder of spirit crows, flying forth from you in a 90 foot long, 25 foot wide, 10 foot tall line. The crows obstruct vision into and out of the area, making it impossible to see further than 5 feet. Creatures that move through the area use 2 feet of movement for every 1 foot traveled.<br><br>Creatures who start their turns in the area or who move into the area during their turn must make a Dexterity saving throw, taking 4d6 slashing damage on a failure and half damage on a success.<br><br>You can't move or take any other action while concentrating on the spell.",
    "empower": "Damage increased to 6d6."
  },
  {
    "name": "Black Bile",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Disease",
      "Water"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Until cured",
    "desc": "You invisibly contaminate a body of liquid within range. Any creature that drinks this liquid becomes afflicted by Black Bile, a withering disease causing the creature to cough out horrid globs of black bile upon drinking any liquid. The creature is poisoned for the duration, and always rolls the minimum value on all hit dice used for recovery. Each time the creature would drink something, it must make a Constitution saving throw. On a failure, it coughs out the liquid with horrid black bile mixed in, and takes 1d6 poison damage. Damage taken this way reduces the creature's maximum hit points by the same amount.<br><br>A creature that succeeds in three Constitution saving throws within 24 hours without any failures is on the path to recovery and has advantage on all future saving throws against this spell. A creature that achieves this again is cured on the next day.",
    "empower": ""
  },
  {
    "name": "Relentless Storm",
    "tier": 4,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Creatures in a 15 foot radius, 300 foot tall cylinder centered on a target point you can see become targeted by a large storm cloud, which strikes down with lightning. Creatures must make a Dexterity saving throw now and each time they spend AP during their next turn. They take 6d8 lightning damage on a failure, halved on a success.",
    "empower": "Radius increased to 20 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Power Lock",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Forbidden (Fairylock)"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "You flood a target creature's vision with black, glimmering lights, who must make an Intuition saving throw or take 3d6 psychic and 3d6 radiant damage and have their AP costs increased by 1 for the duration. A successful saving throw deals half damage with no other effects.<br><br>If a creature affected by Fairylock is targeted, the creature additionally spends all remaining AP at the end of each of their turns.<br><br>A creature can repeat the saving throw at the end of each of their turns, before spending AP as a result of this spell if applicable. On a success, the spell ends.",
    "empower": "Reduces the AP cost by 1."
  },
  {
    "name": "Create Hyphaelactery",
    "author": "Lupusam",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Plant",
      "Unholy",
      "Forbidden (Fungus)"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "24 hours",
    "desc": "You touch a plant or patch of dirt and create a fungal phylactery that stores your soul, this phylactery is a softly glowing patch of fungus a foot across that detects as magical, it smells of rot and poison and is inedible to all living creatures. The first time you would die during the duration, your body instead turns to mold and crumbles away as your soul reincarnates in a new body at the site of your Hyphaelactery, destroying it in the process. Reincarnating takes 1 minute after which you are at full health with all conditions cured.",
    "empower": "The duration increases to 1 week."
  },
  {
    "name": "Profound Disappointment",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Acid",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet ",
    "duration": "1 hour",
    "desc": "You speak your disappointment to a creature within range that can hear and understand you, lacing your words with a corrosive magic that crushes their will. The creature must succeed on an Intuition saving throw or be heavily affected by your words. For the duration of the spell, they have disadvantage on all ability checks, and are charmed by you. If they would make a Willpower roll, they must first roll 1d20. On a roll of 10 or lower, the creature automatically fails the roll.<br><br>If you damage the creature, it can repeat the saving throw. On a success, the spell ends.<br><br>A creature that succeeds on its initial saving throw knows you attempted to use magic to influence its mind, and can't be targeted by this spell again until it completes a rest.",
    "empower": ""
  },
  {
    "name": "Comet",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Cold",
      "Earth",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "Sight",
    "duration": "Instantaneous",
    "desc": "A 30 foot radius area centered on a point you can see is faintly marked with light. At the start of your next turn, a comet streaks down from the sky and impacts the target area. Anything in the center 5 feet takes 8d10 bludgeoning, 4d10 cold, and 4d10 radiant damage and becomes restrained by the comet. All other creatures in the area must succeed on a Dexterity saving throw or take 6d10 bludgeoning damage, 3d10 cold damage, and 3d10 radiant damage.<br><br>The comet remains in the location as a large object occupying a 10 foot radius.<br><br>The spell fails if the sky is not visible when you cast the spell, such as when you are indoors or underground.",
    "empower": ""
  },
  {
    "name": "Harness Fury",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Fire",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You rekindle the spirit of a creature that died within 1 minute, forcibly binding its spirit to its corpse. It restores all of its hit points.<br><br>The creature is a berserk husk of its former self. It gains 1 AP, can only take the Attack action, and will always attempt to attack the nearest creature, moving as far as it can to do so. Every time it makes an attack, it takes 1d8 fire damage, ignoring its own resistance and immunity. On a successful hit, it deals the same amount of fire damage it took as bonus damage to its target.<br><br>When the spell ends or the creature reaches 0 hit points, the corpse collapses as the spirit burns out. It can't be targeted by this spell again unless it is brought back to life permanently, then dies again.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Falling Leaves",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Plant",
      "Wind",
      "Sign"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "A cylindrical 60 foot radius 120 foot high area around you is filled with dim light, dyed in rich shades of red and orange. Phantasmal yellowed or browning dried leaves of all sorts, flutter down constantly, fading away before they actually touch anything.<br><br>While inside the area, your Plant spells cost 1 less AP, and their MP cost is reduced equal to twice their tier. Additionally, your Wind spells that deal damage sweep up the phantasmal leaves, and add 1d8 additional slashing damage per tier of the spell to the damage dealt.<br><br>Plant spells inside the area which have a duration immediately end when any turn ends, with any conjured or summoned creatures and objects fading away. every tier above 4.",
    "empower": ""
  },
  {
    "name": "Mass Shadowblind",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Shadow",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "10 minutes",
    "desc": "This is similar to the spell Shadowblind, except that it targets any creature you choose within range that you can see.",
    "empower": "No longer requires vision of any targets. You become aware of all possible targets when choosing who to affect, although you lose this awareness after casting the spell."
  },
  {
    "name": "Trance of Shared Minds",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Divination",
      "Psychic",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "30 feet ",
    "duration": "24 hours",
    "desc": "You spend 15 minutes with any number of creatures of equal or fewer hit dice than you within range, prepping their mind to receive a fragment of your knowledge. When the spell finishes, all targeted creatures share your proficiencies, share one weapon style you know, and share one tier 1 spell you know. Creatures in this trance can cast the shared spell using your MP if you choose to allow it.<br><br>You can choose to cast this spell without the Ritual tag for 3 AP, but it gains the Concentration tag and sets the duration to 1 minute.",
    "empower": "Range increased to 60 feet."
  },
  {
    "name": "Jetstream",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Evocation",
      "Wind",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "A 5 foot wide, 5 foot high, and up to 120 foot long air current attempts to form, shooting out a windblast in a straight line. All creatures caught in the windblast must make a Constitution saving throw, taking 8d6 force damage on a failed save or half as much on a success. Regardless, all creatures hit are forcibly moved out of the path of air current if possible. All objects struck by the windblast take twice as much damage. The windblast stops on the first object it strikes that it does not destroy, if it encounters one.<br><br>The violent air current created remains until the start of your next turn. Creatures cannot enter the wind current except from its origin point. Creatures may enter the wind current from its origin point to immediately move to the end point of the wind current without consuming movement. This movement can occur even if the air current crosses an area with no ground underneath it.<br><br>When cast at a higher tier, the range of this spell doubles for every tier above 4.",
    "empower": ""
  },
  {
    "name": "Menagerie",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Beast",
      "Potent"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You summon between two to four beasts whose combined number of hit dice cannot exceed 12. They take their turns after yours in any order you choose, and obey your mental commands.<br><br>For each tier higher this spell is cast at, the maximum number of hit dice increases by 3, and the maximum number of creatures summoned increases by 1.<br><br>Casting this spell again causes all previous creatures to vanish. The creatures vanish if they are reduced to 0 hit points or the spell ends.",
    "empower": ""
  },
  {
    "name": "Warding Sphere",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Summoning"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You inscribe multiple Circles of Warding onto every creature in range that you choose. These circles move with the owner. They are dispelled if the owner moves in a way that puts a summoned or reanimated creature inside.<br><br>A summoned creature can spend 3 AP to attempt to overcome a circle it is adjacent to. It makes a Willpower saving throw. On a success, the spell ends for that creature.",
    "empower": "Duration increased to 10 minutes.",
    "author": "CrusaderDroid"
  },
  {
    "name": "First Dragon's Breath",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Draconic",
      "Eldritch",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "You pull forth the smallest fraction of the breath of the First Dragon, wholly obliterating a 15 foot wide, 60 foot long, 30 foot tall line, whose start and end points are both within range of the spell. All creatures in the area are frightened until the end of their next turn, and must make a Dexterity saving throw or take 4d6 fire damage, must make a Constitution saving throw or take 4d6 unholy damage, and must make an Intuition saving throw or take 4d6 psychic damage. Each successful saving throw reduces the respective damage by half. A creature that fails all three saving throws is frightened for one minute.<br><br>Objects fully contained in the area are utterly destroyed. Difficult terrain in the area is incinerated as the breath completely levels the ground.",
    "empower": "Every failed saving throw deals 1d6+2 poison damage."
  },
  {
    "name": "Toxic Burst",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Poison"
    ],
    "cost": "1-3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You cause additional poison to burst into the body of a poisoned creature within range. For each AP spent on the spell, they take 2d4 poison damage and have one hit die destroyed. If no hit dice are left, damage is increased to 2d12.",
    "empower": "Destroys an additional hit die."
  },
  {
    "name": "Doppelganger",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Illusion",
      "Shadow",
      "Concentration",
      "Ritual",
      "Mastery"
    ],
    "cost": "N/A",
    "range": "120 feet",
    "duration": "1 hour",
    "desc": "As you cast this spell, you must have had sight of the target for at least 1 unbroken minute to record their appearance perfectly within 1 hour before actually activating the spell.<br><br>You craft pure darkness into a copy of the recorded creature, this copy is under your control, and is such an exact copy that it adds +10 to all skill checks and saving throws to falsify its identity pretending to be the actual creature. While the copy is active, you can share its senses, though you lose your own corresponding sense while borrowing the sense of the copy. The copy begins to rapidly dissipate back into shadows if it moves too far away from you. The copy has 10 HP, 0 STR, 0 DEX, 0 CON, and your KNO, INT, and WIL. The copy cannot attack or cast spells, but can otherwise interact with the world as any creature could.<br><br>If at any point the original creature sees the copy it has a instinctive sense of disgust and animosity towards the copy, recognizing it for what it is. For a creature that is aware of both the original creature and the copy at the same time, the copy loses its +10 bonus to skill checks and saving throws.",
    "empower": ""
  },
  {
    "name": "Feasting Forest",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Plant",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "Within a 60 foot radius centered on a target point within the area, all trees, plant life, and shrubbery that occupy at least a 5 foot cube are mutated and grow massive fangs and a grasping tongue. Each affected plant reaches out up to 10 feet towards a creature within their range, who must make their choice between a Strength or Dexterity saving throw. On a failure, the tongue grabs them and pulls them adjacent to the plant, restraining them and biting down on them for 4d10 piercing damage. Any plant that did not find a target not already targeted by another plant returns to normal.<br><br>Restrained creatures can spend 2 AP to repeat the saving throw. On a success, they free themselves, and the plant returns to normal. At the end of each of their turns, they take 4d10 piercing damage while restrained. A creature reduced to 0 hit points from this spell is devoured whole by the plant.",
    "empower": "Each plant can reach up to 20 feet."
  },
  {
    "name": "Harness Weather",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Cold",
      "Lightning",
      "Water",
      "Wind",
      "Concentration",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (300 foot radius)",
    "duration": "15 minutes",
    "desc": "You take control of the weather in the surrounding area and can change it as you see fit. As part of casting this spell and for 2 AP during any of your turns, choose one of the following effects to take place anywhere in range: <br>>Intense winds blow in either a 30 foot long, 10 foot wide, 15 foot tall line, or a 30 foot radius sphere. Ranged weapon attacks that pass through automatically miss, and creatures that move through the area spend 2 feet of movement for every 1 foot moved.<br>>Hail storms down in a 20 foot radius, 100 foot tall cylinder. Creatures that enter the area or start their turn inside take 2d6 cold and 1d6 bludgeoning damage.<br>>Heavy rains pour down in a 30 foot radius, 100 foot tall cylinder, obscuring vision through the area and extinguishing fires. Creatures inside are resistant to fire damage.<br>>Lightning strikes a creature within range. They must make a Dexterity saving throw or take 8d12 lightning damage.<br>>Dark clouds blot out sunlight in a 60 foot radius area.<br><br>Any effects created by this spell last until the spell ends.",
    "empower": "Reduces the AP cost to 6."
  },
  {
    "name": "Crystalline Refraction",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Earth",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Six shimmering crystal shards spin into existence and orbit around your head. While they remain, you can spend 1 AP as a response to making a Constitution saving throw to maintain concentration on a spell to destroy one shard and automatically succeed on the saving throw.<br><br>For 1 AP once per turn, you can instead fling a shard at high speed into a creature within 60 feet of you. It takes 2d8 piercing damage and has disadvantage on Constitution saving throws to concentrate on a spell until the start of its next turn.",
    "empower": "Damage increased to 3d8."
  },
  {
    "name": "Killing Wave",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Your next melee weapon attack before the end of your turn instead strikes all creatures in a 15 foot square adjacent to you. Make one attack and damage roll for all creatures. Effects that add additional damage to your attacks apply to all targets.",
    "empower": "Also affects a 5 foot radius around you as well.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Gate of Purgation",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Fire",
      "Holy",
      "Delayed",
      "Sign"
    ],
    "cost": "6 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Ethereal white flames fill the air in a 30 foot radius and 30 foot high cylinder rising from target point. The flames provide bright light in the area and cast dim light out to a radius of an additional 90 feet.<br><br>For Undead, Fiends, and Urthings, or any creature whose body is inhabited by a soul or other external consciousness that is not their original, the flames cause intense debilitating pain. When one of these creatures enters or touches the flames for the first time on each of their turns, they immediately lose concentration, their AP is lowered by 3, and their movement is lowered by half of their speed. Additionally the flames are difficult terrain for these creatures, and these creatures cannot gain HP, temporary HP, MP, AP, or additional movement as long as they are touching the flames.<br><br>For any other creature, touching the flames gives them advantage on saving throws against all magical effects as long as they are touching the flames.<br><br>While inside the area, your Fire and Holy spells apply the effects of being touched by this spell's purifying flames to targets hit until the start of their next turn.<br><br>Note: I wrote Tier 4 but it might be worth much more than that in certain circumstances, so idk.",
    "empower": ""
  },
  {
    "name": "Warshade",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Shadow",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Your shadow comes to life in an adjacent empty space. It is a copy of you in your current condition, with shadowy versions of your current equipment that can't be removed or switched, and it takes its turn after you. It has all of your features and talents and styles and spells. It can only cast Shadow spells that don't require concentration, and it uses your MP for any spells it casts. It is under your complete mental control.<br><br>While this spell is active, either you or your shadow can pay 1 AP to pull either of you up to 60 feet towards the other.<br><br>Your shadow has hit points equal to your current hit points, and vanishes if it is reduced to 0 or fewer hit points.",
    "empower": ""
  },
  {
    "name": "Wakevenom Thorn",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Plant",
      "Poison",
      "Silent"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A silent, poisonous thorn flies from you into a target creature within range that you can see. They must make a Constitution saving throw or be paralyzed. While paralyzed, they hallucinate that they are acting normally.<br><br>If the creature takes damage, they can make a Knowledge saving throw with advantage to realize they are hallucinating. On a success, they make a Constitution saving throw at the end of each of their turns or when they take damage. On a success, the spell ends.",
    "empower": "Targets up to three creatures, each of whom cannot be more than 10 feet from another target."
  },
  {
    "name": "Fata Morgana",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Illusion",
      "Water",
      "Wind",
      "Silent",
      "Still",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "A faint ethereal mist fills a 30 foot radius 60 foot high cylinder. While the spell lasts, you may freely alter what is visible and invisible inside the area, including creating convincing images of anything you can imagine. Creatures that are suspicious of what they perceive or even fully aware that they are inside an illusion can nevertheless not tell the difference between what is or is not real inside the illusion.<br><br>You have full awareness of the true position of everything inside the area even if you make it invisible.<br><br>If used in combat, the area inside this spell is difficult terrain for any creature without Truesight, and you may only adjust the area once at the start or end of each of your turns. This spell may grant invisibility to any creature or object inside the area, lasting until you remove it, they leave the area, or the spell ends.",
    "empower": ""
  },
  {
    "name": "Apostolic Fever",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Holy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "Target creature becomes afflicted with Apostolic Fever. At the start of each of their turns, they must make a Willpower saving throw. On a failure, the fever overwhelms them for that turn. They are poisoned until the start of their next turn, and any action they take that would deal damage causes them to take 2d6 poison damage. When they deal damage while poisoned in this way, they always deal minimum damage.<br><br>A creature that succeeds on three saving throws in a row against this disease fully recovers, ending the spell.",
    "empower": "Poison damage dealt this way ignores resistance and immunity.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Incinerate Magic",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Fire",
      "Arcane"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You ignite a magical effect in an attempt to utterly burn it away. Against a spell of tier 4 or lower, the effect ends immediately and the caster must make an Intuition saving throw, taking 4d6 fire and 4d6 arcane damage on a failure as the flames travel from the effect back to the caster. A successful saving throw deals half damage.<br><br>Against a spell of tier 5 or higher, you must succeed on a spellcasting check with a DC of 10 + the tier of the spell. On a failure, your spell has no effect.",
    "empower": "Automatically succeeds the spellcasting check.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Light Trickster",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Illusion",
      "Fey",
      "Radiant",
      "Shadow",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "Self (300 foot radius)",
    "duration": "1 minute",
    "desc": "You call upon a capricious fey magic to manipulate both light and appearance in the area. At the start of each of your turns while you remain in the area, choose one of the following effects: <br>>A 30 foot radius area becomes brightly lit. A 30 foot radius area elsewhere that was previously lit becomes completely dark.<br>>Choose a creature you can see within range. All creatures within 30 feet of that creature appear as exact copies of that creature. This illusion fails to hold up to physical inspection.<br>>Choose a creature or object you can see within range. Up to ten duplicates of that creature or object appear in empty spaces within 30 feet of the target. If a targeted creature moves, you can spend 1 AP as a response to cause any number of duplicates to move as well, using the creature's movement speed as their own.<br><br>All effects last until the end of the spell.",
    "empower": ""
  },
  {
    "name": "Dominion over Blades",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "You assert dominion over every edged weapon in the radius, gaining the following benefits: <br>- You are immune to slashing damage.<br>- Any weapon that deals slashing damage in the area can be pulled to your hand if it is not carried. This does not cost any AP.<br>- When a creature in range attacks with a slashing weapon, you can choose to give it advantage on its attack roll.<br>- When a creature in range misses with a slashing weapon, you can choose to have the creature take damage as if it had hit itself with its own weapon.<br>- For 1 AP, you can attack up to two creatures within range with floating blades. They must make a Dexterity saving throw or take 1d8 slashing damage, plus bonus damage equal to your spellcasting stat.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Outbreak",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature within range that is blinded, deafened, poisoned, paralyzed, stunned, or affected by a Disease spell emanates a black mist that spreads out to 30 feet. Creatures in range of the mist must make a Constitution saving throw or be afflicted with the same conditions as the target for the same duration.",
    "empower": "The mist spreads to 60 feet. You and any creatures within 10 feet of you that you choose are immune."
  },
  {
    "name": "Thunderlord's Arrival",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Lightning",
      "Wind",
      "Space",
      "Potent"
    ],
    "cost": "3 AP",
    "range": "3 miles",
    "duration": "Instantaneous",
    "desc": "You and everything you are carrying streak into the sky as a bolt of pure lightning envelops you harmlessly. During this time you gain a birds eye view of the area around you and must select a point open to the sky. This point crackles with static electricity that nearby creatures can intuitively sense danger from.<br><br>At the start of your next turn, you crash down with a lightning bolt at the target point, dealing 4d6 lightning damage to creatures within 5 feet, and emitting a shockwave for 30 feet. Creatures hit by the shockwave are pushed back 5 feet if possible and must make a Dexterity saving throw, taking 8d6 force damage on a failed save or half as much on a success. Creatures that fail the save are knocked prone.<br><br>If cast at a higher tier you may bring 1 other creature with you for each tier past 4. These creatures must be touching you when this spell is cast, and will arrive at the target location harmlessly in the same relative position.",
    "empower": ""
  },
  {
    "name": "Disdain",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Draconic"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You exhale dragonbreath at a target within range. The creature must succeed on a Dexterity saving throw or take 6d6 fire damage, halved on a success.<br><br>This spell refunds half its MP cost and 1 AP if the creature is reduced to 0 or fewer hit points by this spell.",
    "empower": ""
  },
  {
    "name": "Sigil of Summoning",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Summoning",
      "Potent"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Special",
    "desc": "You create a sigil on a surface within range that you can see. The sigil then serves as the center of a Summoning spell of lower tier than the tier this spell was cast at. If it has the Concentration tag, the sigil instead concentrates on the spell for you.<br><br>The sigil has AC 10 and 30 hit points, plus 15 per tier this spell is cast at. If destroyed, the spell ends. The surface the sigil is on cannot be destroyed or modified until the sigil is destroyed.<br><br>The first sigil is instantly destroyed if you cast this spell again.",
    "empower": ""
  },
  {
    "name": "Hex of Despair",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "A black totem is created in an empty space adjacent to you, which focuses its magic on a target creature within range that you can see. Each time the creature fails a roll, it suffers a cumulative -1 penalty to all rolls, up to a maximum penalty equal to your spellcasting stat. The penalty is removed when the spell ends.<br><br>The target is made aware of the location of the totem. If they attack or damage the totem, it is destroyed and the spell ends immediately. If the totem is destroyed, you take 4d6 unholy damage from the backlash.",
    "empower": "Prevents backlash from a destroyed totem."
  },
  {
    "name": "Gaian Rampart",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Earth"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Until dispelled or destroyed",
    "desc": "You create a 10 foot tall stone obelisk at target location within range. It has AC 16, 120 hit points, and resistance to slashing and piercing damage.<br><br>If another obelisk is within 60 feet, an impenetrable barrier of force interwoven with multicolored stones forms between the two obelisks. Only creatures you choose can pass through the barrier.<br><br>Any number of obelisks, either created by you or another creature, can be connected, so long as the resultant barriers do not intersect each other.",
    "empower": ""
  },
  {
    "name": "Pandemonium",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Enchantment",
      "Physical",
      "Psychic",
      "Unholy",
      "Delayed",
      "Sign"
    ],
    "cost": "4 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Countless frenzied voices whispering of curses and violence and maddened anguished cries suffuse the air in a 30 foot radius sphere centered on target point.<br><br>Creatures that start their turn inside the area gain 1 AP, and cannot take any action on their turn until they first take the Attack action, unless they cannot. Fiends gain 2 AP instead.<br><br>Creatures inside the area cannot target any creature outside the area with an attack, spell, or feature unless there are no valid targets inside the area. Creatures inside the area cannot target a point outside the area to aim a spell or feature unless there are no valid target points inside the area.<br><br>As long as there is at least one other creature inside the area, creatures inside the area cannot willingly move outside the area. Those that attempt to do so must make a  Willpower saving throw. On a success they can leave the area, on a failure their movement ends this turn. A creature that succeeds this saving throw must succeed again if they reenter the area after leaving then attempt to leave again.<br><br>While inside the area, your weapon attacks and damaging spells deal an additional die of damage.",
    "empower": ""
  },
  {
    "name": "Reversal",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Time"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You reverse the flow of time on a creature, restoring 6d6 hit points and ending any conditions on them.<br><br>Alternatively, you can target a creature that received healing between the end of your last turn and this turn. It must make an Intuition saving throw or take damage equal to the total amount of healing it had received.",
    "empower": ""
  },
  {
    "name": "Invoke War",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Arcane",
      "Physical",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You infuse the ambient magic with lethal intent, creating an ethereal semi-sentient being of war. It has 3 AP, which replenishes at the end of each of your turns, and marks out a 60 foot radius around it. Every time a creature in the area is attacked or targeted by a damaging spell, the being of war spends 1 AP as a response to launch its own attack on the same creature, using your spellcasting stat and proficiency modifier to determine its attack roll. If multiple creatures are targeted, it picks the creature with the highest amount of hit points, randomly choosing a target on ties. On a hit, it inflicts 4d6 arcane damage if the trigger was a spell, and 2d6 piercing damage if the trigger was a weapon attack.<br><br>If you lose your concentration on the spell, the being of war does not disappear, but becomes berserk. Every time it would attack, it additionally targets you if you are still in range.",
    "empower": ""
  },
  {
    "name": "Shadow Caster",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Arcane",
      "Shadow"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "The shadow of a target creature within range animates, then casts one spell of tier 3 or lower that you know or that you have seen the target cast. The spell costs 0 AP.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Call Haunthollow",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Plant",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "15 minutes",
    "desc": "You call forth an ashen, pale tree that occupies a 10 foot radius, 20 foot tall cylinder at target location you can see. This tree has no greenery, but a hollow in the center of the tree emits an unearthly wailing that causes the infinite ashen vines within to shake and rattle.<br><br>At the start of each of your turns, the haunthollow sends a vine out to a creature corpse within 60 feet of it and reanimates the creature under its control. At the end of each of your turns, the haunthollow commands each creature to move up to half its movement speed and optionally make one weapon attack. You choose where each creature moves and who each creature attacks.<br><br>If no corpses are within range, the haunthollow instead launches a vine at whatever creature is in range with the lowest hit point count. The creature must make a Dexterity saving throw or take 3d6 unholy damage. A creature reduced to 0 hit points from this damage is instantly reanimated.<br><br>The haunthollow has AC 12 and 120 hit points. Its vines have AC 12, 10 hit points and are vulnerable to slashing, fire and radiant damage. Destroying a vine immediately ends the reanimation effect on that creature. Destroying the haunthollow ends the spell.<br><br>If your concentration is broken, the haunthollow no longer regards you as an ally or obeys your commands, and will command reanimated creatures to defend itself and attack the nearest living creature to itself.",
    "empower": ""
  },
  {
    "name": "Acidic Hail",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Acid",
      "Cold",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Acidic hailstones fall from the sky, striking a 20 foot radius cylinder 100 feet tall. Creatures in the area when it is created and who start their turn in the area must succeed on a Dexterity saving throw or take 4d4 cold and 4d4 acid damage, halved on a success. The hailstones break apart on impact and transform the terrain into difficult terrain.<br><br>During your turn, you can spend 1 AP to move the hail up to 30 feet.",
    "empower": "Damage increased to 6d4 cold damage and 6d4 acid damage."
  },
  {
    "name": "Vigilance of the First Bear",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Forbidden (Werebear)"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You take on the senses of the First Bear, that which roots out danger before it can strike. You gain the following benefits: <br><br>>You have perfect knowledge of the location of all creatures within 90 feet of you, and you cannot be blinded, deafened, charmed, or frightened. <br>>You have advantage on Intuition saving throws. <br>>For every AP you spend on making weapon attacks, you gain 1 AP at the end of your turn. This AP is lost at the start of your next turn.<br>>Creatures that make a weapon attack provoke a response attack from you. You can move up to two times your movement speed as part of this response attack.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Exalted Altar",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Earth",
      "Holy"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You craft nonmagical stone within a 10 foot radius centered on a target point within range and turn it into an altar of holiness. Undead and reanimated creatures within 60 feet of the altar lose 1 hit die for every time they end their turn within range, and take damage equal to one-quarter of their maximum hit points if they have no more hit dice remaining.<br><br>When you cast a spell that restores hit points to a creature, the altar stores the MP cost of the spell. You can spend 1 AP during your turn to have the altar manifest all stored MP as a sphere of divine energy. The first creature to pick it up heals a number of hit points equal to the MP that was stored.<br><br>A creature that has died within range of the altar can be placed on the altar. When the spell ends, the creature is returned to life with 1 hit point.",
    "empower": ""
  },
  {
    "name": "Warp Field",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Abjuration",
      "Space",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot radius) ",
    "duration": "1 minute",
    "desc": "You create an immobile dome of warped space in the area. Weapon attacks from and against creatures in the dome to creatures outside the dome fail, as the dome sends the attack elsewhere.<br><br>The spell ends if you leave the dome.",
    "empower": ""
  },
  {
    "name": "Petal Dance",
    "author": "Levi",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Fey",
      "Plant",
      "Wind",
      "Concentration"
    ],
    "cost": "0 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You enter into a trance, dancing to invoke the quintessence of springtime. While this spell is active, you cannot take any action except making attacks or devoting AP towards this spell, however you also permanently benefit from the effects of the disengage and dodge actions.<br><br>For each AP to devote to this spell, 2 glimmering flower petals appear and swirl around you, joining you in the dance. You may have a maximum of 6 petals around you at once. When this spell ends, any remaining petals linger until the end of your next turn.<br><br>Whenever you attack one or more creatures within 60 feet of you while this spell is active, 1 petal is consumed as it flies out at your targets. The targets must make a Dexterity saving throw, taking 2d6 slashing damage on a failed save, or half as much on a success.",
    "empower": "Immediately create 3 petals when you cast this spell.<br>When cast at a higher tier, the range of this spell doubles for every tier above 4."
  },
  {
    "name": "Spear of Seven Suns",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Radiant",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Sight",
    "duration": "1 minute",
    "desc": "As part of beginning to cast this spell, designate a location or target creature that you can see. When you finish casting this spell, a pillar of light that occupies a cylinder with a radius of 10 feet and a height of 300 feet descends on the target. It takes 2d8 radiant damage, and must make a Dexterity saving throw or take 4d8 additional radiant damage, halved on a success.<br><br>At the start of each of your turns, if a creature was targeted, the pillar moves to center itself on the targeted creature. All creatures it moves through must make a Dexterity saving throw or take 4d8 radiant damage.",
    "empower": "When the pillar moves through the targeted creature, it takes half damage on a successful saving throw instead of no damage."
  },
  {
    "name": "Harbinger of Ill Futures",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Disease",
      "Earth",
      "Poison",
      "Radiant",
      "Apocalyptic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You summon a humanoid-shaped mass of rocks, each of which is imbued with a sickly green core. It shines this pale light out to 30 feet.<br><br>Creatures that start their turn in the light lose 1d6 maximum hit points and must make a Constitution saving throw. On a failure, they are poisoned, and lose 3d6 maximum hit points for each turn they start in range while poisoned in this way. A creature can repeat the saving throw if they end a turn out of the light, ending the poisoned effect on a success.<br><br>You can command the creature to move up to 30 feet at the start of each of your turns. It has AC 14 and 100 hit points, and crumbles into nothingness if destroyed. If it suffers fire damage, it begins to critically overheat. At the end of your next turn if it is still alive, it explodes, and every creature within 90 feet must succeed on a Constitution saving throw or take 12d6 fire damage, halved on a success. Damage taken this way can't be negated, and reduces your maximum hit points by twice the damage taken. The explosion area becomes permanently affected, causing creatures that end their turn inside to lose 1d6 maximum hit points.",
    "empower": ""
  },
  {
    "name": "Oak of All Arbor",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Plant",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "You summon a massive oak tree, covering a 30 foot radius cylinder 300 feet tall, centered on a point within range. All creatures within the area are forcibly displaced to the nearest empty space. Any object fully contained within the area is destroyed. If the tree cannot grow to its full size, it splinters and breaks spectacularly, and all creatures within a 90 foot radius must succeed on a Dexterity saving throw or take 8d10 piercing damage, halved on a success.<br><br>The oak is laden with all manner of greenery, from flowers to fruit to vines to thorns. When you cast a Plant spell, you can cast it using any point on the oak to calculate range. You can have the oak concentrate on another Plant spell for you if you cast a spell in this manner. During your turn, you can adjust the oak's structure to allow for creatures to climb on it, or to prevent creatures from climbing on it.<br><br>The oak is indestructible, unless the spell ends, whereupon it withers and dies at the end of your next turn, fading away. Casting this spell again causes the first oak to wither and die.",
    "empower": ""
  },
  {
    "name": "Light of Truth",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Divination",
      "Radiant",
      "Potent",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (300 foot cone) ",
    "duration": "1 hour",
    "desc": "You hold up one hand that continually shines a piercing light that illuminates the area. All falsehoods within are banished - creatures can't tell lies, hidden messages are revealed, and Illusion and Enchantment spells of equal or lower tier than this spell can't be cast, and have their effects ended immediately.<br><br>The light moves with your hand. You can't carry anything in that hand while concentrating on this spell, or the effect is suspended until your hand is free.",
    "empower": ""
  },
  {
    "name": "Blood to Poison",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Poison"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on a Constitution saving throw or have their blood begin changing into poison. They become poisoned, and at the start of each of their turns, must roll one of their hit dice, taking poison damage equal to the amount of healing they would normally receive. Damage dealt this way reduces maximum hit points by the same amount. A creature with no hit dice remaining instead falls unconscious for the duration of the spell.<br><br>The creature can repeat the saving throw at the end of each of their turns. On a success, the spell ends early, and they are no longer poisoned.",
    "empower": "The first time the creature rolls a hit die, they roll three instead."
  },
  {
    "name": "Verminous Wave",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Beast",
      "Disease",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A wave of clinging miasma emanates out in a 20 foot radius, centered on a target point in range that you can see. Creatures caught in the wave become afflicted by the miasma.<br><br>At the start of each afflicted creature's turn, all matter of vermin seem to appear from nowhere and swarm over all creatures within a 15 foot radius of the target. Everyone must make a Dexterity saving throw or take 3d4 poison and 3d4 piercing damage, halved on a success. Creatures afflicted with the miasma have disadvantage on the saving throw.<br><br>A creature able to submerge their body in water removes the miasma, ending the effect on them immediately.",
    "empower": ""
  },
  {
    "name": "Offering for the Young",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Conjuration",
      "Forbidden (Arachnid)"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "A spherical, infested web is hurled at a target creature within range, who must succeed on a Dexterity saving throw or take 6d12 poison damage and be restrained as the sphere breaks and wraps around the creature. On a successful saving throw, the creature takes half damage and is not restrained, and the spell immediately ends.<br><br>A creature restrained by this spell is subject to a unique poison that turns them into a brooding ground for spiders. At the start of each of their turns, they must make a Constitution saving throw or take 2d12 poison damage, halved on a success. At the end of each of their turns while restrained, they can make a Strength saving throw to break free on a success, but this does not stop the poison damage by itself. A creature that succeeds at two consecutive Constitution saving throws against this spell ends the spell early.<br><br>A creature reduced to 0 or fewer hit points by this spell has spiders burst from their body, including one spider that rapidly accelerates in growth to a giant spider. It obeys your mental commands loyally until death.",
    "empower": "Creates two giant spiders instead."
  },
  {
    "name": "Guide to the Slain",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Necromancy",
      "Draconic",
      "Spirit",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You take on the aspect of the one that carries souls to the afterlife, gaining some of its power. For the duration, creatures that die within 60 feet of you restore one hit die to you, and can be optionally sent to the afterlife, destroying their body. Reanimated and undead creatures must succeed on a Willpower saving throw when targeting you with an attack or spell, losing their turn on a failure. Your body turns partly ethereal, causing attacking creatures to roll 1d20 when attacking you with a weapon. On a roll of 10 or lower, the weapon harmlessly phases through you.",
    "empower": ""
  },
  {
    "name": "Crush",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Evocation",
      "Physical",
      "Space"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Everything within a 30 foot radius of target point must make a Strength saving throw. On a failure, they are thrown as close to the center of the point as possible, and take 3d10 bludgeoning damage plus 1d10 bludgeoning damage for each additional creature or object of Medium or larger size pulled in, to a maximum of 4d10 additional damage. A creature that succeeds takes 2d10 bludgeoning damage and is moved 5 feet towards the point.<br><br>If multiple creatures or objects would occupy the same space, you choose which creature or object occupies what space.",
    "empower": "Radius increased to 40 feet."
  },
  {
    "name": "Evaporate",
    "author": "CrusaderDroid",
    "tier": 4,
    "tags": [
      "Transmutation",
      "Fire",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You instantly evaporate an amount of water that can fill a 40 foot cube, increased by 20 feet for each tier higher this spell is cast at. The water does not need to fit completely within the cube, but it must be from the same body of water.",
    "empower": ""
  },
  {
    "name": "Shear Heart",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Forbidden (Blood)"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You attack the heart, the one weakness of all creatures, with brutal blood magic. Target creature below half its maximum hit points must succeed on a Constitution saving throw. On a success, the spell ends. On a failure, they must roll two hit dice, take damage equal to the result rolled, then lose the hit dice, and then repeat the saving throw.<br><br>If a creature has no more hit dice remaining to pay the cost, their heart is nearly crushed by the magic. They take damage equal to half their current hit points, and then set their maximum hit points equal to their current hit points.",
    "empower": ""
  },
  {
    "name": "Dragonstrike",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Draconic"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You summon a dragon 600 feet above a target point within range, without allowing it to fully fly. It falls 300 feet immediately while screaming \"AUGH, ARGH, AUGH\" as it fails to fly. At the end of your next turn, it crashes down completely, dealing 14d12 bludgeoning damage in a 30 foot radius around its landing point before it vanishes.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Summon Plague Eater",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Disease",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "You call forth an ethereal plague eater - a vaguely animalistic being that devours sickness. It marks out a 60 foot radius around itself. If a creature in this area would take poison damage, the plague eater instead devours the poison damage, negating it entirely. If any other creature attempts to cast a Disease or Poison spell within range, the plague eater devours the spell, causing MP to be spent but preventing all other effects. If a creature would be poisoned, the plague eater devours the poison and prevents the condition from being applied.<br><br>At the end of each of your turns, the plague eater attacks one creature you choose within range. It must succeed on a Constitution saving throw or take 4d6 poison damage, increased by 2d6 damage each time it had eaten damage, poison, or a spell between your last turn and this turn, and become poisoned until the end of your next turn. A successful saving throw halves the damage and prevents being poisoned. Poisoned creatures are vulnerable to the damage from this spell.<br><br>If the plague eater devours three or more effects in one turn, it becomes berserk for the duration. A berserk plague eater must attack three targets within range each turn. You can choose which targets, but you must choose three targets when possible.",
    "empower": ""
  },
  {
    "name": "Fangs of the Eartheater",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Earth",
      "Eldritch",
      "Poison",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "Massive poisonous fangs 20 feet tall jut out of the ground, forming a ring with a radius of 60 feet centered on the target point. Any creature that touches the fangs takes 5d10 poison damage.<br><br>At the start of each of your turns, the ring shrinks by 5 feet. Any creature in the occupied space takes 5d10 poison damage and is pushed 5 feet away, towards the center.<br><br>The fangs leave behind difficult terrain as they move and tear apart the ground.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Scrapstorm Blade",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "1 minute",
    "desc": "You launch a spinning disc of compressed, jagged metal with a radius of 15 feet towards a target point you can see. Every creature in a 15 foot wide line between you and the point must succeed on a Dexterity saving throw or take 7d6 slashing damage. Any object in the way takes 42 damage.<br><br>Upon reaching the point or an object it cannot destroy, the blade embeds itself and sheds sharp shrapnel in a 15 foot radius around itself. Any creature that enters the area during their turn or starts their turn inside takes 3d6 slashing damage. Any creature that makes contact with the blade takes 42 slashing damage.<br><br>Casting this spell again while it is already active removes the first disc.",
    "empower": "You instead launch two discs. They destroy each other if they touch after landing. A creature can only take damage from one disc if they are in range of both."
  },
  {
    "name": "Vine Whip",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Plant",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You create a long vine to use as a whip. It is treated as a whip, save that its reach is 30 feet and it deals 1d8 bludgeoning damage on a hit. You can use the vine to grab onto objects, although it grants you no additional strength beyond your own for pulling them closer to you.",
    "empower": ""
  },
  {
    "name": "Sable Reflection",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Space",
      "Shadow"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot line)",
    "duration": "Instantaneous",
    "desc": "From your current location, you create a line of ethereal glass 10 feet tall that extends out to 60 feet. Choose one side of the glass - all creatures up to 30 feet away from the glass on that side are reflected as shadowy figures on the other side, preserving their relative position to the mirror.<br><br>The shadows take their turn immediately after the original. They are under your complete mental control and are otherwise an exact copy of the original creature.<br><br>At the start of your next turn, the glass and all shadows disappear.",
    "empower": "One shadow immediately takes a turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Eraser",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Space"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "A 15 foot long, 5 foot wide, 5 foot tall line that starts and ends anywhere within range is torn off from reality. All creatures in the line must succeed on a Dexterity saving throw or take 8d6 damage, halved on a success, which can't be reduced or prevented in any way. Creatures must then move out of the area into the nearest adjacent empty space if possible - you decide where they move if they failed the saving throw, and they decide where to move if they succeeded instead.<br><br>The affected area is temporarily gone from reality. Anything in the area when it disappeared is unaffected until it returns, and any creatures there can't take any action. What remains in its former location is a blank hole in reality that cannot be navigated through by any means. Attacks and spells that would travel through the hole end at the hole.<br><br>When the spell ends, the removed area returns to its location.",
    "empower": "Range increased to 60 feet. Line length increased to 20 feet."
  },
  {
    "name": "That Which Waits",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Forbidden (Arachnid)",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You take the form of a massive spider, its appearance shaped according to your desire. For the duration, you have the following effects: <br><br>>Your size increases by one category.<br>>Your equipment melds into your new form and can't be used by you.<br>>Substitute your spellcasting stat for all Strength, Dexterity, and Constitution attack rolls or saving throws.<br>>You gain a vicious bite attack that deals 2d8 piercing damage and requires a Constitution saving throw from the target. On a failure, they take an additional 2d8 poison damage and are paralyzed until the end of your next turn. You use your spellcasting stat to determine attack and damage bonuses.<br>>Arachnid spells cost 1 AP less to cast, to a minimum of 0.<br>>Your movement speed increases by 15 feet. You gain a climb speed equal to your walking speed. You ignore difficult terrain.",
    "empower": ""
  },
  {
    "name": "Thalassophobia",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Illusion",
      "Psychic",
      "Water",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Within a 15 foot radius sphere centered on target point you can see, all creatures within must succeed on an Intuition saving throw. On a failure, they believe they are deep underwater. They are blinded, frightened, and have their movement speed reduced to 5 feet.<br><br>If the creature has a swim speed, they are not frightened and their movement speed is not reduced.<br><br>A creature can repeat the saving throw at the end of each of their turns, with creatures with swim speeds having advantage. On a success, the spell ends.",
    "empower": "Radius increased to 25 feet."
  },
  {
    "name": "Howl",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Beast",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "With a bloodcurling howl, you call for wolves to join you in battle. Two wolves appear anywhere within range, and remain for the duration of the spell. They take their turn after yours, and cannot be commanded. They will not attack any creatures you choose, and will otherwise attack the closest non-chosen creatures to them during their turn. They vanish upon being reduced to 0 hit points.<br><br>At the start of each of your turns, two more wolves appear.<br><br>When the spell ends, all wolves summoned by this spell vanish.",
    "empower": "Summons an additional three wolves immediately."
  },
  {
    "name": "Agony",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "60'",
    "duration": "Concentration, up to 1 minute",
    "desc": "Cause a single target creature to be wracked with intense pain. They must make a Constitution saving throw. If they fail, they fall prone and cannot stand back up, they have 1 AP that cannot be used to deal damage, they cannot reserve AP for a reaction, and they take 5d8 necrotic damage. If they succeed, they only take 3d8 necrotic damage. A creature can repeat this saving throw at the end of each of their turns, ending the effect on a success.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Karmic Exchange",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Spirit"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You target two creatures within range that you can see, one of whom can be yourself. Choose one creature to make an Intuition saving throw. On a failure, you heal the other creature for 5d6 hit points, deal an equal amount of psychic damage to the creature that failed the saving throw, and transfer one condition from the healed creature to the damaged creature. On a success, you heal the other creature for 2d6 hit points instead, and the creature that succeeded takes an equal amount of psychic damage.",
    "empower": "Transfers all conditions."
  },
  {
    "name": "Hellborn Unraveling",
    "tier": 5,
    "tags": [
      "Evocation",
      "Arcane",
      "Fire",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot line)",
    "duration": "Instantaneous",
    "desc": "Horrific power emanates from your palm into a 5 foot wide, 90 foot long line. The first creature in the path of the line must make a Constitution saving throw or take 4d6 fire, 4d6 unholy, and 4d6 arcane damage, halved on a success. If the creature is reduced to 0 or fewer hit points, it is obliterated with an unearthly screech, and the spell continues to the next creature in the line. If a creature is not obliterated, the spell ends without going any further.<br><br>Any creature damaged by the spell has all spell effects instantly dispelled. The line dispels all spell effects it travels through.",
    "empower": "Before the creature makes a saving throw, it takes 3d6 arcane damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Seed Burst",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "You hurl a trio of seeds forward from you at any three target spaces within range that you can see. These seeds explode on impact in a 20 foot radius into raw vernal magic. Creatures in range of at least one of these explosions must succeed on a Dexterity saving throw or take 6d6 poison damage, halved on a success. Constructs cannot have resistance or immunity to damage from this spell, and are additionally restrained until the end of your next turn on a failure.<br><br>This spell instead empowers plant creatures. They gain 2 AP on their next turn.<br><br>Creatures in range of more than one explosion only take damage from one explosion.",
    "empower": "Creates an additional seed."
  },
  {
    "name": "Acrimonious Projection",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Illusion",
      "Acid",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Target creature within range that you can see must succeed on an Intuition saving throw or be afflicted with a deadly illusion that causes all creatures that the target sees to appear as copies of the target.<br><br>If the target damages any creature other than you, the illusion on that creature breaks and splashes acid up to 15 feet towards the target, who must make a Dexterity saving throw or take 5d6 acid damage, halved on a success, if they are within range.<br><br>If the target creature damages you, the spell ends.",
    "empower": ""
  },
  {
    "name": "Seize",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Spirit",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You assert control over a target creature's spirit, paralyzing the creature.<br><br>While concentrating on this spell, you lose 1 AP at the start of each of your turns. At the start of the target's turn, it can make an Intuition saving throw. On a success, you instead lose 3 AP and can't move during your next turn. On two consecutive successes, the spell ends.<br><br>When the spell ends, the creature can't be targeted by this spell again until it completes a rest.",
    "empower": "Affects a second target in range."
  },
  {
    "name": "Thunderhead Aspis",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Lightning",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You surround the target in a black storm cloud that covers a 20 foot radius around them. It obscures vision from creatures outside the cloud. Any creature that enters the cloud must first make a Dexterity saving throw or take 3d8 lightning damage and lose 1 AP. Lightning spells that travel through the cloud instantly shock all creatures other than the target within 30 feet, dealing 3d8 lightning damage. A creature can only take this bonus damage once between each of the target's turns.",
    "empower": ""
  },
  {
    "name": "Blizzard",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Cold",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "For each turn you spend at least 1 AP towards casting this spell, you create a 30 foot radius, 100 foot tall cylinder of falling snow at a target location within range that you can see. When you complete this spell, all snowing areas intensify into chilling blizzards. Creatures in any area take 6d6 cold damage, and must succeed on a Constitution saving throw or take 6d6 additional cold damage, halved on a success. The blizzards remain until the start of your next turn, obscuring all vision in and out of the area and acting as difficult terrain.",
    "empower": "Immediately creates two areas when you begin to cast this spell."
  },
  {
    "name": "Fourfold Mirage",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Illusion",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot cone)",
    "duration": "1 minute",
    "desc": "You blast disorienting lights through a 60 foot cone, causing all creatures in range that can see it to make a Constitution saving throw. On a failure, they take 4d6 radiant damage and see four copies of every creature while they remain affected by the spell. On a success, they take half damage and no other effect.<br><br>A creature that is seeing multiple creatures must roll 1d20 when targeting any creature with an attack or spell. On a roll of 15 or lower, the attack or spell is aimed at a mirage and harmlessly misses. They can repeat the saving throw at the end of each of their turns, ending the effect early on a success.",
    "empower": ""
  },
  {
    "name": "Time Vortex",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Time"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Sands swirl about you as you siphon time from all creatures within range. Every creature in range must make an Intuition saving throw or take 4d12 damage and lose 1 AP as parts of their bodies are rapidly aged and reverted. A successful saving throw deals half damage and does not lose AP.<br><br>You gain 1 AP for each creature that failed their saving throw, to a maximum of 3 AP.",
    "empower": "Choose one - damage increased to 6d12, or radius increased to 45 feet."
  },
  {
    "name": "Earthsiege",
    "tier": 5,
    "tags": [
      "Evocation",
      "Earth",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "You entrench yourself, loosening up the earth in a 60 foot radius around yourself and becoming unable to move. As part of casting this spell, and for 1 AP on your future turns, you can dislodge a 5 foot cube of non-difficult terrain within the loosened earth's area, and fling it at a target creature or space within range. The creature must make a Dexterity saving throw or take 3d8 bludgeoning damage.<br><br>After using each 5 foot cube, the area becomes difficult terrain, and you can't use that cube again. You can throw rocks and other similar earth-based objects in lieu of using the ground.",
    "empower": "Range increases to 1 mile. Creatures outside 300 feet have advantage on their saving throws.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Repel the Weak",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Draconic",
      "Psychic",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "All frightened creatures in range immediately move up to their movement speed away from you. On their next turn, they lose 2 AP.",
    "empower": "Frightened creatures will spend 1 AP as a response to take the Dash action before moving."
  },
  {
    "name": "Gemstone Tangle",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Earth",
      "Plant",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "A sphere of myriad intertwining gem-encrusted vines projects from you out to 30 feet. Each time any creature moves 5 feet within the sphere, they touch a vine, unleashing a barrage of gem thorns at the intruder. They must make a Dexterity saving throw or take 3d6 piercing damage. A creature that fails their saving throw against this spell fails all successive saving throws against this spell for the duration of their turn.<br><br>You can't move or take any other action while concentrating on this spell.",
    "empower": "Damage increased to 4d6. Damage dealt ignores resistance."
  },
  {
    "name": "Cairn",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Earth",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "All adjacent empty spaces rumble. At the start of your next turn, 5 foot tall stone pillars erupt in those spaces, displacing any creature in those spaces into an adjacent empty space, prioritizing the original casting space.<br><br>The pillars have AC 10 and 15 hit points and remain until destroyed.",
    "empower": ""
  },
  {
    "name": "Mountain Crusher",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Physical",
      "Earth"
    ],
    "cost": "2 AP",
    "range": "5 feet",
    "duration": "Instantaneous",
    "desc": "You swing your weapon and strike the earth, creating a massive rupture that covers a 60 foot cone. Any object fully within the area is utterly destroyed, while all creatures within must make a Strength saving throw or take 8d8 bludgeoning damage and be knocked prone. The area becomes difficult terrain.<br><br>If a solid surface, such as a cave wall, is struck, the spell carves out a stable tunnel 10 feet tall, 15 feet wide, and 90 feet long.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Command Aquatic Beasts",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Beast",
      "Psychic",
      "Water",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (300 foot radius)",
    "duration": "1 hour",
    "desc": "You send out a wave that taps into the minds of all beasts that live in the water. Beasts with hit dice less than half your level are automatically charmed for the duration. Beasts with hit dice between half your level and your level must make an Intuition saving throw to avoid being charmed for the duration. Beasts with hit dice greater than your level can repeat the saving throw at the end of each of their turns while charmed to end the effect on them early.<br><br>Creatures charmed by this spell freely share all information with you telepathically, including what they have seen and are seeing as well as what they are feeling. They obey your mental commands.",
    "empower": ""
  },
  {
    "name": "Iceblood Fortitude",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "You imbue the target's body with the solidity of ice. For the duration, unless it would exceed two times their current hit points, damage they take can't exceed one-tenth of their maximum hit points.",
    "empower": "You can target up to three creatures."
  },
  {
    "name": "Unchained Spirit",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You remove the shackles of the spirit of a dead creature within range that has not been dead for more than 1 minute, allowing it to return to the battle. The spirit is an exact copy of the creature at full health, and has a spiritual copy of all of its current equipment. It takes its turns like it would have while it was alive, and can be attacked normally.<br><br>When the spell ends, the spirit is exhausted, and the creature can't be targeted by this spell again until it is revived. <br><br>If the spirit is reduced to 0 hit points, its corpse disintegrates as the spirit fades.",
    "empower": ""
  },
  {
    "name": "Walking Corpse",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Unholy",
      "Cantrip"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "8 hours",
    "desc": "You reanimate target corpse. It obeys your commands and takes its turn after yours. It has 1 hit point, can't take any actions, and has no access to any of its features. All it can do is move up to its movement speed.<br><br>When reduced to 0 hit points, the reanimated creature returns to being a corpse.",
    "empower": "You target three corpses instead."
  },
  {
    "name": "Wintercraft",
    "tier": 5,
    "tags": [
      "Evocation",
      "Cold",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "You channel intense winter magic to craft an object made of ice anywhere within the area of the spell. It can be up to a 10 foot by 10 foot cube in size. You can use 1 AP once on each of your turns for the duration of the spell to create another object.<br><br>Each object has 30 hit points, AC 10, and vulnerability to fire and bludgeoning damage. It is permanent until destroyed.",
    "empower": "You can spend 1 AP to create an object twice per turn.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rite of Rebirth",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Holy",
      "Water",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You submerge the touched creature or corpse in a body of water large enough to allow the target to be fully submerged. After one hour, during which you cannot move or take any other action, the target emerges from the water as a new creature.<br><br>The target becomes a humanoid species in its prime regardless of its original form or state. The exact species is randomly chosen. It keeps any prior class levels and talents. It may choose new traits, if applicable. It loses access to all species features and talents it had before, and gains its new species' features, as well as an equivalent amount of species talents according to its class levels, if applicable.<br><br>If the ritual is interrupted, the target's body is dissolved by the water.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Unshackled by Death",
    "tier": 5,
    "tags": [
      "Necromancy"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You touch a target creature temporarily animated by a Necromancy spell and liberate it from death. The creature does not regain its original form, but all of its capabilities in life that were not dependent on its original body are returned to it, including class levels, features, talents, and spells.<br><br>The animating spell harmlessly ends. The creature is no longer under the direct control of the original caster. It may become hostile depending on its memories.<br><br>Learning this spell permanently endows the user with knowledge that persists beyond death. You can always cast this spell on yourself, ignoring all effects that would prohibit your ability to cast spells.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sky God's Offering",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Lightning",
      "Wind",
      "Apocalyptic",
      "Concentration",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "A powerful tornado touches down and covers a 60 foot radius cylinder with a height of 10 miles. Everything in the area is swept up into the tornado and rises 100 feet.<br><br>At the start of any affected creature's turn, they must succeed on a Dexterity saving throw. On a success, they are flung out of the tornado at their current altitude, landing between 100 to 200 feet away and taking fall damage accordingly. On a failure, they are swept 100 feet higher.<br><br>If the spell ends by reaching its full duration, a massive bolt of lightning descends onto the area of the tornado, obliterating everything inside, creature and object.",
    "empower": ""
  },
  {
    "name": "Foresight",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Divination",
      "Psychic",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Target creature's immediate thoughts are known to you. When the creature starts its next turn, you gain 2 AP and can immediately Ready an action.",
    "empower": ""
  },
  {
    "name": "Null Pain",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Acid",
      "Physical",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 minute",
    "desc": "The touched creature has their sense of pain deadened for the duration. When they would take damage, write down the amount of damage they would take and then prevent the damage. The target automatically succeeds on all Constitution saving throws for the duration as well, and is immune to the poisoned condition.<br><br>When the spell ends, apply all damage prevented to the target creature.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Melt",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Acid",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You destroy an object you are holding that weighs no more than 20 pounds.",
    "empower": ""
  },
  {
    "name": "Shadowslip",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Shadow",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You briefly become a shadow and move up to 30 feet. This movement can move you through a maximum of 5 feet worth of solid objects or walls, so long as the object or wall has an opening of at least half an inch wide.",
    "empower": ""
  },
  {
    "name": "Hydrate",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Water",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Special",
    "desc": "When you cast this spell, choose one of two effects: <br>>You create up to a 20 foot cube of water centered on a target point in range you can see. It is ordinary water, suitable for drinking, and obeys the laws of physics immediately after being created.<br>>You cause rain to fall in a 40 foot radius cylinder 100 feet tall for 1 hour. Enough water will fall by the duration to fill the entire area with up to 5 feet of water if it has nowhere else to go.",
    "empower": ""
  },
  {
    "name": "World Ablaze",
    "tier": 5,
    "tags": [
      "Illusion",
      "Fire",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature in range that you can see must succeed on an Intuition saving throw or fall victim to an illusion of a world on fire. To the target, flames appear to ignite everything and crackle and burn loudly, blocking vision and hearing of anything past 30 feet. On each of its turns, the target takes 3d6 fire damage.<br><br>A creature can repeat the saving throw at the end of each of its turns. On a success, the spell ends.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fog of Many Deaths",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Poison",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "You create a faintly multicolored fog in a 30 foot cube within range. Creatures in the fog when it is created and who start their turn inside must succeed on a Constitution saving throw. On a failure, they must roll 1d6. They are poisoned and have their speed halved until the start of their next turn on a roll of 1 or 2, are paralyzed until the start of their next turn on a roll of 3 or 4, and are unconscious on a roll of 5 or 6, woken only by taking damage or when the spell ends.<br><br>At the end of each of your turns, the fog expands its area by 5 feet, unless it is in an area of strong wind. It stops expanding once it covers a 60 foot cube.",
    "empower": "Range increased to 300 feet."
  },
  {
    "name": "Starsear",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Radiant",
      "Space",
      "Cantrip"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "Drop a star from the sky in a burst of cosmic power at a point within range. Creatures within 10' of that point must make a Dexterity saving throw, taking 4d4 radiant damage on a failed save, and half as much on a successful one. If this hits at least one creature, you can cause a second star to drop on a different point within 60' of the first point, but it must be at least 10' away from the first point.",
    "empower": ""
  },
  {
    "name": "Black Shockwave",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Forbidden (Fairylock)",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "Black, glimmering light radiates from your uplifted hand into the area around you, sending out rippling waves. Creatures you choose have resistance to the first source of damage they take before the start of your next turn. All other creatures must succeed on a Constitution saving throw or take 4d6 bludgeoning damage and 4d6 radiant damage, halved on a success. Creatures that fail their saving throw deal half damage with all of their attacks and spells during their next turn.",
    "empower": "Creatures you choose instead gain resistance to all damage before the start of your next turn."
  },
  {
    "name": "Infect Magic",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Arcane",
      "Disease",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You attempt to infect the connection between a spell effect with concentration and the spellcaster. You choose either the spell effect itself or a creature affected by the spell effect and target that effect. Its caster must make a saving throw using its spellcasting stat. On a failure, your infection overrides their control of the spell. For the duration of this spell, the original owner can no longer willingly end the spell. At the start of each of their turns, if their spell is still active, they take 3d10 poison damage, ignoring resistance and immunity, and have one hit die destroyed. If there are no more hit dice, the creature is vulnerable to the damage taken.<br><br>The creature makes Concentration saves as normal when damaged by other creatures or effects, but if they fail, their spell does not end. Instead, they take the same damage they would normally take at the start of their turn.<br><br>An affected creature can spend 2 AP to repeat the saving throw. On a success, both this spell and their concentrated spell end.",
    "empower": ""
  },
  {
    "name": "Lightning Cannon",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Lightning",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "Self (600 foot line)",
    "duration": "Instantaneous",
    "desc": "A powerful bolt of lightning streaks from your hands in a 600 foot long, 5 foot wide, 15 foot tall line. Any creature in the way must succeed on a Dexterity saving throw or take 14d8 lightning damage, halved on a success. Creatures that fail the Dexterity saving throw must also make a Strength saving throw or be thrown backwards 15 feet and be knocked prone.<br><br>The bolt will stop upon striking an object it cannot destroy.",
    "empower": "Width increased to 15 feet."
  },
  {
    "name": "Skyward",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "All creatures you choose within a 60 foot radius centered on target point within range you can see are flung up to 60 feet into the air by strong winds. Unwilling creatures can make a Strength saving throw to halve the distance moved.<br><br>Large creatures only move half as far. Huge creatures and larger are unaffected.",
    "empower": ""
  },
  {
    "name": "Nova",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "Any number of creatures you choose within range that can see you are struck with beams of light bursting from your body, taking 3d10 radiant damage.",
    "empower": "Damage increased to 4d10."
  },
  {
    "name": "Moment of Clarity",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Divination",
      "Time"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You peek into the future and see exactly how to achieve the outcome you want. For the rest of your turn, when you would roll, treat the result as if you had rolled a 20.<br><br>Casting this spell causes your eyes to visibly glow, making it obvious you used magic to influence your actions.<br><br>Trying to cast this spell again before finishing a break causes you to have a sharp headache, dealing 6d12 psychic damage to you which cannot be reduced or prevented.",
    "empower": ""
  },
  {
    "name": "Gravechill",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 minute",
    "desc": "The touched creature must succeed on a Constitution saving throw or be overtaken by a chill that grips their very soul. They take 6d10 cold damage, can't regain hit points or gain temporary hit points, and take 5 cold damage per 5 feet they move on their turn. A successful saving throw deals half damage and no other effect. The creature can repeat the saving throw at the end of each of their turns, ending the effect early on a success.<br><br>A creature that is reduced to 0 hit points while affected by this spell has their body freeze where it stands, preserving it in good condition. If a spell would reanimate this creature, it refunds MP equal to its tier to its caster.<br><br>If you are controlling a reanimated creature, you can have them deliver this spell with a touch instead of you.",
    "empower": "Initial damage increased to 9d10."
  },
  {
    "name": "Blackout",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Shadow",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (300 foot radius) ",
    "duration": "1 hour",
    "desc": "All light in a 300 foot radius around you vanishes, plunging the area into total darkness. Nobody can see through this darkness. Radiant spells of equal or lower tier than this spell fail when cast within this darkness.",
    "empower": "Radiant spells of any tier fail when cast inside this darkness."
  },
  {
    "name": "Simple Summon",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Summoning",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "1 hour",
    "desc": "You summon any creature with 1 hit die or any non-magical solid object that fits within a 5 foot cube. Summoned creatures obey your commands, but can't attack. Summoned objects have 5 hit points.",
    "empower": ""
  },
  {
    "name": "Tornado",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "90 feet ",
    "duration": "1 minute",
    "desc": "You create a tornado centered on target point within range that you can see, with a radius of 5, 10, or 15 feet, and a height of 30, 60, or 90 feet. The spell fails if the tornado has no room to reach its full size. When you cast this spell, designate a direction across the ground for the tornado to move in. <br><br>Whenever any creature or object touches the tornado and can be fully contained inside of it, including when the tornado is created, they are swept up and flung 30 feet in a random direction. If they collide with an object or creature, they stop moving, land in the nearest adjacent empty space, and take 6d6 bludgeoning damage and fall prone. The blocking object or creature must succeed on a Strength saving throw or take 6d6 bludgeoning damage, halved on a success.<br><br>At the start of each of your turns, the tornado moves 10 feet in the designated direction.",
    "empower": "Size can be increased to a 20 foot radius and a 120 foot height."
  },
  {
    "name": "Unholy Vigor",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "Target reanimated creature under your control gains 6 AP on its next turn and takes damage equal to half its current hit points.",
    "empower": ""
  },
  {
    "name": "Mothlight",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Fire",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You hold up your hand as you generate a brilliant, hypnotic flame. Every creature you choose within range must succeed on an Intuition saving throw. On a failure, they become charmed by you, and can only move closer to the fire during their turn. The fire moves with you, and charmed creatures will follow you even after you move out of range.<br><br>A creature can repeat the saving throw at the end of each of their turns. On a success, the spell ends for them. If the creature takes any damage, the spell also ends immediately for them.",
    "empower": "Range increased to 60 feet.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Vicious Aspect",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You immediately cast up to three other, different Draconic spells with a range of Self. You must pay the MP cost for each spell. They end when this spell ends.",
    "empower": "Duration becomes 8 hours. Automatically empowers the selected spells if they are a lower tier than this spell."
  },
  {
    "name": "Destructive Grasp",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Acid",
      "Arcane",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You create two large hands, crafted from acid, that mimic your hand movements. You can't be holding anything in your hands when you cast this spell.<br><br>Each hand can move up to 30 feet away from you. They are treated as if they have a Strength of 7, and you can carry objects, perform fine movements, and make mage weapon attacks with either hand. A successful hit deals 3d10 acid damage. You are also able to grapple, shove, and trip with each hand.<br><br>Any object touched by a hand takes 30 acid damage. Any creature that starts its turn touching a hand takes 3d10 acid damage.",
    "empower": ""
  },
  {
    "name": "Voice of Thunder",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Illusion",
      "Lightning",
      "Concentration",
      "Silent"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour ",
    "desc": "Your voice becomes booming thunder, audible out to 300 feet. Creatures that can hear you are deafened to everything but your voice. You can choose any number of creatures you can see when casting this spell to be unaffected.",
    "empower": "Remove the Concentration tag from this spell."
  },
  {
    "name": "Night's Claim",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Shadow",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Without a noise, your shadow extends forward towards a target and attempts to engulf them. The target must succeed on a Dexterity saving throw or take 10d6 cold damage. If the target is unaware of your presence, they automatically take 80 cold damage instead, with no saving throw.<br><br>If you reduce a creature to 0 or fewer hit points with this spell, you silently swap locations with your target.",
    "empower": "Range increased to 120 feet."
  },
  {
    "name": "Revival",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Holy",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "After 15 minutes, target dead creature you touch is returned to life. Their maximum hit points are set to half of their highest value, and their current hit points are set equal to half of their maximum hit points.<br><br>The spell requires at least the head of the creature, and will recreate the body accordingly, replacing lost limbs and other disfigurements. The spell fails if there is no head, or if the creature's soul is unable to return to the body.",
    "empower": "The creature's current hit points are set equal to their maximum hit points."
  },
  {
    "name": "Purge Poison",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Poison",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Instantly removes the poisoned condition from a target creature, or removes all poison from target object. If a creature is targeted, they gain resistance to poison damage until the start of your next turn.",
    "empower": ""
  },
  {
    "name": "Calling Card",
    "author": "Levi",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Space",
      "Summoning",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Self",
    "duration": "Indefinite",
    "desc": "Spending 15 minutes on a ritual, you create a magical contract between you and another willing creature, manifesting in the form of a thin and small card.<br><br>When you hold the card in hand and will it to activate, the card disintegrates and the  other creature connected by the contract gains a general awareness of the situation and location around the destroyed card. They may then choose to accept or decline the summons.<br><br>If they accept, they teleport along with any objects they are carrying, though no more than their carrying capacity, to an open space within 5 feet of where the card was destroyed. This spell then ends. This spell fails if the card holder and other creature are not in the same plane.<br><br>A caster may have a number of Calling Card contracts active equal to their proficiency modifier. A creature on either end of an active Calling Card contract cannot be bound by another Calling Card contract.",
    "empower": ""
  },
  {
    "name": "Inculcate Fear",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Disease",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Until dispelled",
    "desc": "You coat an object or creature in a transparent powder. When any other creature makes contact with the powder, it soaks through the sink and is absorbed into the bloodstream. The creature must then make a Constitution saving throw - on a failure, the powder takes hold and causes the creature to view whichever object or creature was covered in powder with extreme feelings of dread. Each time they see the object or creature, they must make an Intuition saving throw or be frightened of them for 1 hour, or until 1 minute passes while they are out of sight.",
    "empower": ""
  },
  {
    "name": "Pride",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Draconic",
      "Cantrip",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute ",
    "desc": "You can't be frightened or charmed for the duration.",
    "empower": "Remove the Concentration tag."
  },
  {
    "name": "Mend",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Holy",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Target creature or object heals 5 hit points.",
    "empower": ""
  },
  {
    "name": "Reinkarnation",
    "author": "Levi",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Fey"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "1 minute / Varies",
    "desc": "You call upon the spirit of a deceased creature using an image of its likeness in life. This spell fails if the intended spirit does not recognize the image as a depiction of itself, or rejects the invitation.<br><br>If successful, the spirit appears as an ethereal reconstruction of its appearance in life anchored to the image, and is maintained this way for up to 1 minute. The spirit can be spoken to and respond, and has all of its memories and personality in life, but it cannot interact with the material plane or move more than 5ft away from the image. The spirit is not under the caster's control, and may end the spell at any time by choosing to depart.<br><br>While a spirit is successfully anchored to its image, and the image is placed (or directly drawn) on an intact corpse of the same species as the spirit was in life which has been dead for less than 1 hour, if the spirit is willing, it may possess the corpse and revive in that body. When this occurs, the resultant revived creature's features morph to some degree to resemble the spirit's original appearance over the next 24 hours, and during this time this spell can be dispelled targeting the revived creature. After this period passes, the spell becomes permanent and can no longer be dispelled. The spell instead becomes permanent immediately if the intact corpse originally belonged to the spirit in the first place.",
    "empower": ""
  },
  {
    "name": "Borrowed Time",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Unholy",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "30 feet",
    "duration": "6 hours",
    "desc": "You reanimate the corpse of a creature within range and allow its soul to re-enter its body. Its maximum hit points are fully restored, and its current hit points are set equal to half its maximum hit points. You can impose conditions on the creature's ability to act when you cast this spell, but the creature is otherwise free to act as they please. <br><br>When the spell ends, the creature must make a DC 20 Constitution saving throw. On a success, their maximum hit points are reduced to 1, and they remain alive but no longer reanimated. On a failure, they die.<br><br>A creature reduced to 0 hit points while affected by this spell has their body begin to disintegrate. Unless they are brought back to life, the body will vanish after 1 hour.",
    "empower": "Reduces the AP cost to 3."
  },
  {
    "name": "Capricious Curse",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "Target creature must succeed on an Intuition saving throw or be struck with a curse against their actions. Each time they spend AP, they take 2d6 psychic damage.<br><br>If a creature has taken damage from this effect more than three times in one turn, the curse ends on the creature and attempts to jump to a creature you choose within 60 feet of the original target that has not been cursed by this spell before. They must succeed on an Intuition saving throw or be similarly cursed. On a success, the curse ends.<br><br>Casting this spell again ends the previous curse.",
    "empower": "On a success, you can instead direct the curse at a different creature that has not been cursed instead of letting it end."
  },
  {
    "name": "Titan Vine",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot line) ",
    "duration": "Instantaneous",
    "desc": "A massive vine, 15 feet wide, bursts from your palms and zigzags through the ground in front of you into a 60 foot long line. Any creature in the way must make a Dexterity saving throw. On a success, they move out of the way into the nearest empty space. On a failure, they take 10d6 bludgeoning damage and are restrained until the start of your next turn. Your turn then ends.<br><br>At the start of your next turn, you rip the vine out of the ground, flinging every restrained creature 30 feet into the air and landing behind you. Their relative position to you is preserved - a creature 30 feet away will land 30 feet away from you. If a creature is moved into a space it cannot occupy, it stops its movement in the closest possible space immediately, takes 4d6 bludgeoning damage, and must make a Constitution saving throw or be stunned until the start of your next turn.",
    "empower": "Adds 2d6 piercing damage from thorns. Creatures that succeed on the saving throw still take this damage."
  },
  {
    "name": "Insulate",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Cold",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot radius) ",
    "duration": "1 minute",
    "desc": "You create an immobile, transparent dome speckled with snow and ice, centered on you. Creatures can freely pass through the dome. Anyone inside the dome is resistant to cold damage, and immune to cold damage from your spells.",
    "empower": ""
  },
  {
    "name": "Baleful Glare",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Fire",
      "Cantrip",
      "Silent",
      "Still"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "With a glare, target creature you can see bursts into flames and takes 2d12 fire damage.",
    "empower": ""
  },
  {
    "name": "Living Zombie",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Disease",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "8 hours",
    "desc": "You touch a target creature at 0 hit points and deaden their nerves, allowing them to keep on taking action even when they should be dead. They gain temporary hit points equal to their normal maximum hit points. While they have these temporary hit points, they can't receive healing and lose 1 AP, but can otherwise take action normally during each of their turns.<br><br>When the spell ends, the target's maximum hit points are reduced to 1. If the spell ends due to all temporary hit points being lost, first calculate the excess damage, then reduce the target's maximum hit points to 1.",
    "empower": ""
  },
  {
    "name": "Weapon of Justice",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Holy",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (special)",
    "duration": "1 minute",
    "desc": "Divine magic gathers in your hands and takes the shape of a weapon of your choice. With that weapon, you strike out in an area depending on the damage type of the weapon: a 10 foot radius around you for a bludgeoning weapon, a 15 foot cone for a slashing weapon, and a 20 foot line for a piercing weapon. Every creature in range must succeed on a Dexterity saving throw or take 8d10 radiant damage.<br><br>The weapon remains for the duration of the spell. Its damage type becomes radiant, and you are proficient with this weapon. It can be treated as a mage weapon.  Whenever you or an allied creature within 60 feet that you can see takes damage, your next weapon attack deals an additional 2d10 radiant damage on hit and requires the target to make a Constitution saving throw or be blinded until the start of your next turn.",
    "empower": "The weapon deals an additional 1d10 radiant damage on every weapon attack."
  },
  {
    "name": "Cauldron Conflagration",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Fire",
      "Water",
      "Concentration",
      "Delayed",
      "Potent"
    ],
    "cost": "5 AP",
    "range": "90 feet ",
    "duration": "15 minutes",
    "desc": "A massive indestructible cauldron covering a 15 foot radius circle erupts into existence and continuously causes the air within a 30 foot radius around the cauldron to burst into flames. All creatures within the area must succeed on a Dexterity saving throw or take 10d6 fire damage, halved on a success. Any creature that ends their turn inside the area must repeat the same saving throw.<br><br>Within a 60 foot area, the cauldron draws in all available oxygen, preventing Fire spells of equal or lower tier than the tier this spell was cast at. Creatures within this area for more than 5 minutes begin to suffocate if they need air.",
    "empower": ""
  },
  {
    "name": "Magnetic Whip",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Lightning",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "60 feet ",
    "duration": "Instantaneous",
    "desc": "You either pull yourself to a metallic object larger than you, or you pull a metallic object or willing creature into an empty space adjacent to you.",
    "empower": ""
  },
  {
    "name": "Replication",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Divination",
      "Shadow",
      "Space",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "300 feet",
    "duration": "1 year",
    "desc": "You take 10 minutes to sift through a 40 foot cube within range with shadows, recording everything within the area down to the nearest detail. Once complete, an exact copy of the area manifests as an indestructible 6 inch cube in your hand. You can use the cube for 2 AP to convert a 40 foot cube area centered on you into a replica of the area, recreated with shadows. This completely covers the area you are in - creatures within the area are pulled in to your replica. Any walls and objects that did not exist in your replica that are inside the area are harmlessly phased out of existence while the replica is active.<br><br>The shadows that comprise everything will disintegrate if they leave the area. Magical objects do not have their properties retained - a copy of a magic scroll would have its writing preserved, but would be unusable for its spell, for instance. In all other regards, they are perfectly real, and may even cause harm.<br><br>When you leave the area, any creation disappears and returns to a cube in your hand. You can create up to three such cubes - creating a fourth cube destroys the oldest cube. Leaving an area will un-phase any phased walls and objects, harmlessly shunting creatures that would be inside a wall or object to the nearest empty space.",
    "empower": ""
  },
  {
    "name": "The Last Light",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "15 minutes",
    "desc": "You imbue the touched creature with a faint light. They shed dim light out to 5 feet. Each time the creature takes damage, they shed bright light out to 5 feet and dim light out another 5 feet, with both increasing by 5 feet each time they take damage.<br><br>If the target is reduced to 0 hit points, the light within explodes outwards, striking all creatures within the bright light that the target chooses. Each such creature must succeed on a Constitution saving throw. On a failure, they are blinded for 1 minute and take 10d10 radiant damage. On a success, they take half damage and are blinded until the start of the target's next turn.",
    "empower": ""
  },
  {
    "name": "Whispers of Knowledge",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Divination",
      "Spirit",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A friendly spirit whispers aid into a target creature's ears. They have advantage on one roll of their choice on their next turn. <br><br>You can't target yourself with this spell.",
    "empower": ""
  },
  {
    "name": "Soulbite",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Unholy",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "Your soul lashes out and bites the target's soul. Make a spell attack(?) at advantage. If you hit, you deal damage equal to your level, and gain an equal amount of temporary hit points.<br><br>You can spend up to 2 additional AP to add the same number of additional attacks against different targets. Temporary hit points gained by this spell on the same turn can stack.",
    "empower": ""
  },
  {
    "name": "Tailwinds",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Wind",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self (30 foot line) ",
    "duration": "Instantaneous",
    "desc": "Strong winds come forth in a 5 foot wide, 30 foot long line extending from you, blowing away light objects and Tiny creatures until they are at the edge of the spell's range. All creatures moving in the same direction as the wind use 1 foot of movement speed for every 2 feet traveled. The wind disperses by the start of your next turn.",
    "empower": ""
  },
  {
    "name": "Purge",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Holy",
      "Radiant"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Divine light crashes down in a 15 foot radius pillar with a height of 300 feet. Creatures in the area must succeed on a Constitution saving throw or take 6d6 radiant damage, halved on a success.<br><br>Undead and reanimated creatures inside instead lose 2d6 hit dice on a failed saving throw and take 6d12 radiant damage instead. On a success, they lose 1d6 hit dice and take half damage. If no more hit dice are left, any undead or reanimated creature in the center 5 feet is utterly obliterated, while other such creatures take additional radiant damage equal to half their maximum hit points.",
    "empower": "Destroys an additional two hit dice on undead and reanimated creatures."
  },
  {
    "name": "Plague Burst",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Necromancy",
      "Disease",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self (15 foot radius)",
    "duration": "Instantaneous",
    "desc": "You emit a wave of rotting disease around you. Creatures in range around you roll one hit die and take damage equal to the amount of healing they would have received. Damage dealt this way reduces maximum hit points by two times the amount. If a creature has no hit dice remaining, they are instead poisoned until the end of your next turn.",
    "empower": ""
  },
  {
    "name": "Master's Aid",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Divination",
      "Spirit",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You allow a masterful spirit to possess you. Choose one of the following benefits for the duration of the spell: <br><br>>Choose a creature. It can only hit you with an attack on a roll of 20.<br>>Choose a stat. If you have a chance of succeeding in an ability check with that stat, you automatically succeed in that ability check.",
    "empower": "Duration becomes 15 minutes."
  },
  {
    "name": "*Love's Kiss*",
    "author": "neitherrhyme",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Spirit",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Indefinite",
    "desc": "You spend one hour embracing a target creature to attune the spell. At any time after you have attuned to them, you may activate this spell one time with a kiss which immediately removes all spell effects and diseases the target received after attuning the spell.",
    "empower": ""
  },
  {
    "name": "Call Victorious Winds",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Holy",
      "Summoning",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius) ",
    "duration": "1 minute",
    "desc": "You call forth an ethereal, divine wind spirit that oversees victory. Choose any number of creatures within range that you can see. Those creatures have advantage on all attack rolls and saving throws. Each time they successfully deal damage with any attack or spell, they deal an additional 1d6 damage. When an affected creature reduces another creature to 0 or fewer hit points, they additionally heal 3d6 hit points.<br><br>The spirit is fickle. If any affected creature is reduced to 0 or fewer hit points, or if you lose concentration on this spell, it will instead side with your opponents and grant its benefits to all creatures you are currently fighting. It will not switch sides again.<br><br>You can't end this spell early.",
    "empower": ""
  },
  {
    "name": "Fog Blossom",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Illusion",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You create a white bulb at target point within range that you can see. At the start of your next turn, it blooms and spreads out a thick, white fog within a 30 foot radius around itself.<br><br>Creatures inside the fog can't see out of the fog and can only see 5 feet inside the fog. If they attempt to leave the fog, they must first make a Knowledge saving throw. On a failure, they instead use their remaining movement to move back towards the center of the fog. On a success, they can leave the fog.",
    "empower": "Range increased to 90 feet."
  },
  {
    "name": "Empower Beasts",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "You cause primal magics to surge through all beasts in a 20 foot radius centered on target point within range that you can see. For the duration, they gain the following benefits: <br>>Their current and maximum hit points are doubled or increased by 30, whichever is lower.<br>>At the start of their turns, they heal 1d6 hit points, plus your spellcasting stat.<br>>They use your proficiency modifier in place of theirs, and use your spellcasting stat to determine their attack and damage rolls. They deal additional damage on a hit equal to your proficiency modifier.<br>>Their movement speed increases by 20 feet.<br><br>A creature affected by this spell twice has the older version of this spell ended first.",
    "empower": "Radius increased to 30 feet."
  },
  {
    "name": "Unstoppable Rage",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Forbidden (Werebear)"
    ],
    "cost": "1 AP",
    "range": "Self ",
    "duration": "15 minutes",
    "desc": "You invoke a primal rage and let it act through you. Whenever you take damage, you can choose to roll one of your available hit dice to heal yourself equal to twice the value rolled. Whenever you reduce a creature to 0 or fewer hit points, you steal one of their hit dice for yourself until the spell ends. You can act normally even at 0 hit points, although you will die if your maximum hit points reach 0.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Reinforce",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Abjuration",
      "Physical",
      "Cantrip"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You gain resistance to a damage type of your choice until the start of your next turn.",
    "empower": ""
  },
  {
    "name": "Song of Hope",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Enchantment",
      "Forbidden (Song)",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 feet)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song about a young survivor finding a treasure of hope in the ruins of their kingdom. If you spend at least 1 AP during your turn towards casting this spell, peace and hope befall all creatures within range. If they take the Attack action or cast a spell that would deal damage or force a saving throw, they must make an Intuition saving throw first. On a failure, their action is canceled and they lose the AP. A creature that fails two Intuition saving throws in a row from this spell is instead charmed by you until you stop casting or they take damage. Beasts within range are immediately charmed by you and do nothing except listen to your song.<br><br>When completed, a brilliant sphere of divine energy ascends and scatters many rays of light throughout the area. Creatures you choose heal a number of hit points equal to half of their missing hit points, and have all negative spells and effects on them ended. You can choose to revive any creature that died within the area while you were casting this spell and isn't reanimated, restoring one quarter of their maximum hit points and setting them to that value. This spell mends bodily damage upon revival, such as missing limbs, but cannot affect disintegrated creatures.",
    "empower": "Range increased to 90 feet."
  },
  {
    "name": "Finality and Flame",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Evocation",
      "Forbidden (Hellfire)",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You spend your maximum hit points instead of MP for this spell, which cannot be reduced in cost. You curse a target creature within range that you can see to a horrific fate, as obsidian flames dance along their skin. Each time they take damage while affected by this spell, one of their hit dice is destroyed. If no more hit dice are remaining, the flames seep into the creature and cause a terrible conflagration of fire in a 30 foot radius centered on the target. All creatures within range must succeed on a Dexterity saving throw or take 12d12 damage, halved on a success. Half of this damage is fire, while the other half is unholy. The original target automatically fails the saving throw and has their body obliterated if reduced to 0 hit points.<br><br>The spell ends if the explosion is triggered. The affected creature can make a Willpower saving throw during their turn for 3 AP to end the spell early on a success.",
    "empower": "Pay the empower cost in hit points instead of MP, and deduct it from your maximum hit points. You instead target up to three creatures, all of whom must be within 10 feet of each other."
  },
  {
    "name": "Flash Step",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Until the end of your turn, every time you would travel 5 feet, you instead transform into a bolt of lightning and dash 30 feet in any direction. Creatures you pass through must make a Dexterity saving throw or take 2d10 lightning damage. A creature that fails a saving throw from this spell fails all other saving throws from this spell.<br><br>A creature can only take damage from this spell four times in one turn.",
    "empower": "Reduces the AP cost by 1."
  },
  {
    "name": "Myriad Scales",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP ",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Multiple layers of dragon scales coat your skin. You have resistance to all damage. If you are unarmored, your AC becomes 16 + your defensive stat.<br><br>You can choose to end the spell when you would be affected by an attack or spell to completely negate all damage and effects on yourself.",
    "empower": ""
  },
  {
    "name": "Preymorph",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Beast",
      "Fey",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "1 hour",
    "desc": "Target creature within range that you can see must succeed on an Intuition saving throw or be turned into a (relatively) harmless prey animal, such as a deer or rabbit. The creature gains 10 temporary hit points, and retains its normal hit point total and its mental stats, but takes on the physical stats of its new form, can't speak, and loses access to all of its features and talents and spells. Its equipment merges into its new form and can't be used.<br><br>If the creature loses all of its temporary hit points, it transforms back to its original form.",
    "empower": "The creature gains 30 additional temporary hit points."
  },
  {
    "name": "Oozemass Formation",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Acid",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You create a Huge sized oozemass, a barely-sentient acidic slime. It takes its turn after yours and obeys your mental commands, but cannot act on its own.<br><br>The oozemass has AC 0, 800 hit points, absorbs acid, and is vulnerable to all other forms of damage. On its turn, it is only able to move 15 feet. Any terrain it passes through becomes difficult terrain sizzling with acid that deals 1d6 acid damage to any creature for every 5 feet moved within it. If the oozemass moves through a creature's space, it is engulfed. At the start of each engulfed creature's turn, it takes 6d6 acid damage, and the oozemass heals a number of hit points equal to half the damage done. An engulfed creature can make a Strength or Dexterity saving throw for 2 AP during their turn to escape to an empty adjacent space on a success.<br><br>The oozemass disappears when the spell ends, releasing all engulfed creatures.",
    "empower": "The oozemass immediately moves 15 feet upon being summoned."
  },
  {
    "name": "Forest Ally",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Conjuration",
      "Beast",
      "Cantrip"
    ],
    "cost": "2 AP",
    "range": "30 feet ",
    "duration": "1 hour",
    "desc": "You summon a beast with 1 or 2 hit dice to an empty space within range. It takes its turn after yours and follows your mental commands. It vanishes when it reaches 0 hit points or the spell ends.<br><br>Casting this spell again causes the first creature to vanish.",
    "empower": ""
  },
  {
    "name": "Chimerize",
    "author": "CrusaderDroid",
    "tier": 5,
    "tags": [
      "Transmutation",
      "Beast",
      "Eldritch"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "Target creature you touch gains a characteristic from any beast creature you have seen before. Choose one from the following list to keep until the spell ends: <br><br>>The beast's Strength, Dexterity, Constitution, or Intuition, if it would be higher than the target's stat<br>>All of a beast's movement speeds, if the target does not have them or if it would be greater<br>>One of the beast's features<br>>One of the beast's actions",
    "empower": "You choose three times."
  },
  {
    "name": "Battle Sense",
    "tier": 6,
    "tags": [
      "Divination",
      "Physical",
      "Psychic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You become able to see up to twelve seconds into the future, granting a nearly impossible benefit against weapon users. For the duration of the spell, weapon attacks can only hit you on a roll of 20.<br><br>At the start of each of your turns, you must use either 1 AP and half of your movement, or 2 AP, to continue concentrating on this spell. If you choose not to pay either cost, the spell ends.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "All The Light Touches",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Divination",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "Sight",
    "duration": "Until ended",
    "desc": "You replace your vision with that of a source of light you can see. Anything the light can reach, you can see. Your body is blinded, and you have disadvantage on attack rolls and Strength and Dexterity rolls in this state.<br><br>The spell does not give you extraordinary range of vision - targeting the sun, for instance, will prevent you from seeing anything happening in the world, on account of being too small to see.",
    "empower": ""
  },
  {
    "name": "Hand of Light",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Radiant",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot line)",
    "duration": "Instantaneous",
    "desc": "You stretch out a hand, which forms a translucent image of a larger humanoid hand that fires a beam of light from each finger. Each beam of light is 5 feet wide, 5 feet tall, and 90 feet long. You choose the direction of each beam.<br><br>Creatures caught in at least one beam must make a Dexterity saving throw. On a failure, they take 8d10 radiant damage, increased by 1d10 for each other beam they are within. On a success, they take half damage.",
    "empower": "Choose one - additional beam damage increased to 2d10, or one beam becomes 15 feet wide, or base beam damage increased to 10d10."
  },
  {
    "name": "Mass Shadow Caster",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Arcane",
      "Shadow"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "The shadows of all creatures in a 30 foot area centered on target point within range come to life, then cast a tier 1 spell you know. The spells cost 0 AP. Each shadow can choose different targets, but all of them cast the same spell. A creature that fails a saving throw against one spell fails all subsequent saving throws.",
    "empower": ""
  },
  {
    "name": "Deathly Inversion",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Necromancy",
      "Eldritch",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "24 hours",
    "desc": "Up to three creatures within range must succeed on a Willpower saving throw or have their existence poisoned such that healing becomes lethal harm. For the duration of the spell, the next 100 hit points of healing they would receive instead damages them for the same amount.<br><br>A creature taking a break can spend hit dice to remove part of the effect without further damage. Each hit die spent removes 20 points from the threshold.",
    "empower": "Choose one: range increased to 120 feet, or target two more creatures, or increase threshold to 150 hit points."
  },
  {
    "name": "Unfailing Host of Light",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Fire",
      "Holy",
      "Radiant",
      "Summoning"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You call upon a host of divine beings to shield target creature. The target creature is completely immune to all damage, other spells, and any sort of negative effects until the start of your next turn.<br><br>At the start of your next turn, divine fire pours down in multiple waves in a 30 foot radius around the target. All creatures you choose must succeed on a Dexterity saving throw, taking 12d8 damage on a failure and half damage on a success. Damage inflicted is evenly split between fire and radiant damage.",
    "empower": "Choose one: creatures within 5 feet of the target automatically fail their saving throw, damage increased to 12d12, or radius increased to 45 feet."
  },
  {
    "name": "Summon Wyvern",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Draconic",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 hour",
    "desc": "You summon a wyvern to an empty space within range that you can see. The wyvern obeys your mental commands and takes its turn immediately, interrupting your turn. It then takes its turn after your turn.<br><br>If you do not have the Summoning tag, the duration is reduced to 1 minute.<br><br>If you do not have the Draconic tag, the wyvern rebels against your unworthy control. You can't dismiss the wyvern by ending the spell early. If you lose concentration on the spell, the wyvern breaks free completely. It becomes hostile to everyone and prioritizes killing you over anything else.",
    "empower": ""
  },
  {
    "name": "Spirit Disruption",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Spirit"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A burst of spiritual energy ripples out from target point within range to a 30 foot radius. Creatures must make a saving throw using their worst stat, taking 8d6 psychic damage on a failure and half damage on a success.<br><br>Incorporeal creatures and all undead creatures are harshly affected by this spell. They take 12d6 psychic damage, ignoring resistance and immunity, with no saving throw. If they are incorporeal, they are forcibly made corporeal for 1 minute and cannot become incorporeal again.",
    "empower": ""
  },
  {
    "name": "Terraform",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Earth",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "You adjust the terrain around you to be anything you please, so long as it remains within the range of the spell.<br><br>If you have the Plant tag, you can also add greenery to the terrain you adjust.<br><br>The adjustments take place over a period of six seconds. Creatures that may be imperiled by the rapid changes can make a Dexterity saving throw to move up to half their movement speed on a success.",
    "empower": "Choose one: radius increases to 90 feet, or this spell gains the Concentration tag and a duration of 1 minute, during which you can adjust the terrain at the start of each of your turns as long as you remain in the area."
  },
  {
    "name": "Crystallize",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Necromancy",
      "Cold",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Up to three creatures within range that you can see must succeed on a Constitution saving throw or begin having parts of their body transformed into ice. They lose 1 AP and half of their movement speed during each of their turns. Every time they take cold damage, they must succeed on a Constitution saving throw or take 3d6 additional cold damage and lose 1 AP on their next turn. A creature reduced to 0 or fewer hit points while affected by this spell is fully crystallized and shatters if struck by any weapon attack.<br><br>A creature can use all of its remaining AP on each of its turns to repeat the saving throw. On a success, the spell ends for them.",
    "empower": "Targets an additional two creatures."
  },
  {
    "name": "Encroaching Winter",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Cold",
      "Mastery"
    ],
    "cost": "3 AP",
    "range": "Self (90 feet)",
    "duration": "1 minute ",
    "desc": "An intense blizzard kicks up in the area around you for the duration, blocking all creatures' vision into the blizzard and restricting creatures inside to 15 feet of vision. You can place up to six 10 foot cubes of ice anywhere within the blizzard. They are indestructible, and vanish when the spell ends.",
    "empower": ""
  },
  {
    "name": "Echoing Blast",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Fire",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Sight",
    "duration": "Instantaneous",
    "desc": "Manifold waves of fire compress onto themselves in your hands, then fly towards a target point you can see. Upon reaching the point, every wave unfolds in the span of a quarter-second, creating a massive explosion of heat and flame. Every creature in a 90 foot radius is affected, depending on their distance to the center: <br>>Creatures in the center 5 feet must succeed on a Constitution saving throw or take 18d6 fire damage, halved on a success.<br>>Creatures within 30 feet of the center must succeed on a Constitution saving throw or take 14d6 fire damage, halved on a success.<br>>Creatures between 30 to 60 feet from the center must succeed on a Dexterity saving throw or take 10d6 fire damage, halved on a success.<br>>Creatures past 60 feet from the center must succeed on a Dexterity saving throw or take 6d6 fire damage.<br><br>The spell leaves behind a trail of ephemeral flames in the air that marks the path traveled from your hands to the target. It lingers for 1 hour.",
    "empower": "Increase the die size from d6 to d10."
  },
  {
    "name": "Mobius Capture",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Arcane",
      "Space",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "90 feet ",
    "duration": "24 hours",
    "desc": "You draw in a magical effect from a creature or area within range that you can see and trap it inside a specialized 5 foot radius sphere, created in an empty space within 30 feet of you. Until the sphere breaks, the spell is suspended and has no effect on anything or anyone.<br><br>The sphere has AC 10, 60 hit points, and is immune to weapon attacks. If it is destroyed, the spell resumes, targeting its original target. If the target is no longer in range, the spell travels as far as it can towards the target, then fizzles out with no further effect.<br><br>The sphere breaks if you cast this spell again. No effect against Apocalyptic spells.",
    "empower": "Reduce the cost by 1 AP. Empower this only as a response to a creature casting a spell."
  },
  {
    "name": "Arsenal Rain",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A storm of assorted melee weapons rains down in a 30 foot radius, centered on target point within range. Creatures inside must make a Dexterity saving throw or take 10d10 damage, halved on a success. This damage is slashing, piercing, or bludgeoning damage, chosen for each creature affected. They remain embedded for the duration of the spell.<br><br>While you are in this area, you can pull out any weapon you choose from the ground and make an attack with it once per turn for 0 AP. On a successful hit, roll the weapon's damage dice an additional time.",
    "empower": "Reduce the AP cost by 1."
  },
  {
    "name": "Abyssal Call",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Eldritch",
      "Summoning",
      "Water",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "Black waters spread from yourself and form a 60 foot radius pool of water around you as you sink down into the depths, merging with a massive sea creature called from the deepest abysses of the ocean.<br><br>The sea creature is a Gargantuan creature. The spell fails if you cast it in a location that cannot fit the creature. It has AC 18, and 200 hit points, and cannot receive healing. It automatically succeeds on all saving throws. While it has at least one hit point, you have resistance to all damage taken, and the creature takes damage equal to the damage you take.<br><br>You and the creature can move anywhere within the pool of water during your turn, but cannot leave the water. You can spend 1 AP to make a tentacle attack, 2 AP to make two tentacle attacks, and 3 AP to make one tentacle attack on all creatures within 10 feet of you. The tentacle attack has a reach of 10 feet, uses your spellcasting stat to determine attack and damage bonuses, deals 3d10 bludgeoning damage on a hit, and grapples the target on a hit. You can only grapple one creature with each attack, no matter how many creatures you hit. At the start of each of your turns, grappled creatures take 2d10 bludgeoning damage.<br><br>The spell ends when you or the creature have been reduced to 0 or fewer hit points.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sacrosanct Wrath",
    "tier": 6,
    "tags": [
      "Evocation",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "Planar",
    "duration": "Instantaneous",
    "desc": "A creature that has damaged you within the past year is suddenly blasted with a mighty pillar of light. The creature and all creatures within a 20 foot cylinder 300 feet tall must make a Dexterity saving throw or take 12d8 radiant damage, halved on a success.<br><br>A creature can't be targeted or take damage from this spell again until they finish a rest.",
    "empower": "Damage dealt to the main target reduces maximum hit points by the same amount.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Arboreal Hammer",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "At target point you can see within range, a massive tree with a width of 25 feet and a height of 100 feet grows, then topples over in a 25 foot wide, 100 foot long line in target direction you choose. Creatures in the way must succeed on a Dexterity saving throw or take 10d10 bludgeoning damage, halved on a success. Creatures caught in the further half of the line are struck by branches for an additional 3d10 piercing damage.<br><br>If the tree can't grow to its full height, it grows as far as it can before it falls. The length of the line is equal to the tree's height.",
    "empower": "Range increased to 90 feet."
  },
  {
    "name": "False Confidence",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Illusion",
      "Fey",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "The target must succeed on a Knowledge saving throw. On a failure, they feel as if their body is extraordinarily in shape. They have advantage on all attack rolls and ability checks they make. Each time they succeed on a roll with advantage, they acquire a token.<br><br>When the creature fails a roll with advantage, the spell unravels and reveals a wracked body overexerted by their force. They take 2d12 damage times the amount of tokens they have. This damage can't be reduced or negated. For the remainder of the spell, they have disadvantage on attack rolls and ability checks, and can't gain advantage.",
    "empower": "Choose one: Range increased to 300 feet, or the spell gains the Silent and Still tags, or you target up to two additional creatures."
  },
  {
    "name": "Death Foreseen",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Divination",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "Sight",
    "duration": "8 hours",
    "desc": "Target creature must succeed on a Willpower saving throw. On a failure, you see the path that leads to the creature's demise. The creature has disadvantage on saving throws against effects you cause, and if the creature would take damage from you and have its hit points fall below the amount of damage taken, it is instantly killed.<br><br>The creature knows you have seen its death. If it damages you, it can repeat the saving throw. On a success, the spell ends.",
    "empower": ""
  },
  {
    "name": "Skinrot",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Necromancy",
      "Disease",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Up to 3 creatures within range must succeed on a Constitution saving throw. On a failure, they become afflicted with skinrot, a debilitating disease that causes skin to slough off on any physical contact harder than a shove. Whenever the creature takes damage from a weapon attack, they lose one hit die and take additional poison damage equal to one roll of that hit die. All damage from weapons they suffer while affected is deducted from their maximum hit points.<br><br>Creatures that have no skin or cannot be poisoned are immune to this spell. Affected creatures can repeat the saving throw on the end of each of their turns to end the effect early on a success.",
    "empower": "Affects two additional targets."
  },
  {
    "name": "Toxic Companion",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Fey",
      "Poison",
      "Shadow",
      "Concentration",
      "Silent",
      "Still"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "15 minutes",
    "desc": "Now and for 2 AP on any of your turns, you can choose a target creature within range that you can see to make an Intuition saving throw. On a failure, the creature's shadow speaks words into their mind, eroding their self-control. During their turn, you can spend 1 AP for the following actions:<br>>As a response to the creature making an attack, you can change the target of the attack and impose disadvantage on the attack.<br>>As a response to the creature moving, you can direct half of its movement for the turn, choosing where it moves. You can make this decision at any point during its movement.<br>>As a response to the creature beginning to cast a spell, you can force it to make a Constitution saving throw. On a failure, it loses the spell and its concentration, if it is concentrating on anything.<br>>You can influence the creature to speak up to twenty-five words of your choice. The creature believes the words are their own.<br>>You can have the shadow reach out and poison an adjacent creature's shadow. They become targeted by this spell for the remaining duration.<br><br>After using any of these actions, the creature can repeat the saving throw at the end of their turn. On a success, the spell ends for them.",
    "empower": ""
  },
  {
    "name": "Annihilate",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Space"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Everything that fits in a 10 foot cube centered on target point within range that you can see must succeed on a Willpower saving throw. On a failure, it loses five hit dice. On a success, it takes 8d6 damage, which cannot be reduced or prevented. <br><br>Objects that are not held by a creature as well as creatures without enough hit dice that fail their saving throw are utterly annihilated as their core components are procedurally scattered across the plane.",
    "empower": "Deals an additional 3d6 damage on both a successful save and a failed save."
  },
  {
    "name": "Nausea Crash",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature you can see must make a Constitution saving throw. On a failure, overwhelming nausea causes the creature to violently retch, taking 8d6 poison damage and losing 3 AP on their next turn. On a success, they take half damage and lose 1 AP instead.<br><br>Creatures immune to being poisoned are unaffected by this spell.",
    "empower": "Choose one: damage is increased to 12d6, range is increased to 300 feet, or the creature is stunned instead of losing AP."
  },
  {
    "name": "Cyclone of Steel",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Physical",
      "Concentration",
      "Mastery"
    ],
    "cost": "3 AP",
    "range": "Self (15 foot radius)",
    "duration": "1 minute",
    "desc": "You spin about rapidly as a torrent of sharp steel blades whirls into existence around you. Any creature that is within 15 feet of you at any point during your turn must make a Dexterity saving throw or take 8d6 slashing damage, halved on a success. A creature can only take damage from this spell once per turn. You are immune to Physical spells while concentrating on this spell.<br><br>At the start of each of your turns, you must pay 3 AP to continue concentrating on this spell. If you can't, the spell ends immediately.",
    "empower": "Choose one - movement speed increases by 20 feet for the duration, or damage is increased to 10d6, or radius is increased to 20 feet."
  },
  {
    "name": "Summon Sage",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "5 feet",
    "duration": "1 minute",
    "desc": "You summon a sage - a benevolent humanoid symbiote from the Sea of Possibility. It establishes a mental connection with you upon arrival.<br><br>The sage is intangible and can't be affected by any effect other than the end of your spell. It takes its turn after yours. It has a walking speed of 20 feet, and knows every spell you know, using your MP to cast. It obeys your mental commands.<br><br>When the spell expires, the sage returns to the Sea of Possibility.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Prism Ward",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A scintillating transparent dome imbued with many colored gems whirrs about the target creature. They have resistance to damage other than slashing, piercing, and bludgeoning, and they reflect radiant damage.<br><br>If one of your damaging Radiant spells would target or damage them, the spell deals no damage to the target and instead splits into two separate copies. You choose the targets or area for each copy. Creatures can only be affected once by a copied spell, even if they are in range of both copies. Copied spells can't be copied again.",
    "empower": ""
  },
  {
    "name": "Fey Law",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Fey"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "You impose on reality a law of your choosing. Choose up to three weapons or spells to outlaw when you cast this spell. All creatures in the area are bound by this law, and suffer 10d10 psychic damage each time they violate the law by attacking with that weapon or casting that spell. When the spell ends, all affected creatures are freed from the law.<br><br>No effect on creatures with a Knowledge of -3 or lower.",
    "empower": ""
  },
  {
    "name": "Quillburst",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Poison",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (60 feet)",
    "duration": "Instantaneous",
    "desc": "Three waves of poisonous quills erupt around you and fly towards every creature you choose in range that you can see. They must make a Dexterity saving throw for each wave or take 3d8 poison damage and be poisoned until the end of your next turn. A successful saving throw deals half damage and does not poison, while a failed saving throw automatically fails all successive saving throws.",
    "empower": "Choose one: radius increased to 90 feet, or add a fourth wave."
  },
  {
    "name": "Timeslip",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Time",
      "Delayed"
    ],
    "cost": "2 or 5 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You adjust the initiative of up to three other creatures within range as you please. Unwilling creatures can make an Intuition saving throw to avoid the effect on a success.<br><br>The current initiative count is unchanged, and follows the new initiative order after your turn ends, even if a creature has already taken their turn this round.<br><br>This spell is particularly exhausting. The first time you cast this spell each rest, it costs 2 AP. After you cast it, it costs 5 AP until you finish a break or rest.",
    "empower": "Range becomes Self (30 foot radius), and you can affect any number of targets within range."
  },
  {
    "name": "Streaking Flame",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Fire",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A thin, streaking bolt of flame flies towards a target creature within range that you can see. It must succeed on a Dexterity saving throw or take 8d6 fire damage, halved on a success.<br><br>The fire then attempts to bounce to another creature of your choice within 15 feet of the original creature, which must make the same saving throw, except the damage is reduced by 1d6. The flame continues to bounce between targets, reducing the damage by 1d6, until the damage is reduced to 0 or there are no valid targets to bounce to. A creature that fails a saving throw fails all successive saving throws from this spell.",
    "empower": "Choose one: damage is increased to 9d8, or bounce range is increased to 30 feet."
  },
  {
    "name": "Usurper of the Slain",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Necromancy",
      "Unholy",
      "Delayed",
      "Mastery"
    ],
    "cost": "6 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Permanently take control of up to 10 hit dice worth of undead creatures in a 60 foot radius centered on target area, starting with the creatures with the lowest hit dice. Creatures with more than 7 hit dice can make an Intuition saving throw to avoid the effect.<br><br>No effect on creatures with class levels.",
    "empower": "Choose one: Reduce the cost by 3 AP, or double the amount of hit dice worth of undead affected. You can't affect any undead with more than 10 hit dice."
  },
  {
    "name": "Wind Allegiance",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Spirit",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "You bind the wind to serve target creature within range. They gain the following benefits:<br><br>>Their movement speed increases by 10 feet. If they have a flying speed, it increases by 20 feet instead.<br>>Their ranged weapon attacks have advantage and can't have disadvantage.<br>>Creatures attacking this creature with ranged weapon attacks have disadvantage and can't have advantage.<br>>The creature is immune to damage from your Wind spells, and your Wind spells that target the creature or include them in the area refund MP equal to their tier.",
    "empower": "Duration becomes 8 hours."
  },
  {
    "name": "Pressure Wave",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Wind",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "You create multiple overlapping high and low pressure areas that surround a 15 foot radius centered on target point within range, creating an impenetrable loop of wind. Creatures inside must make a Strength saving throw at the start of each of their turns or take 6d8 bludgeoning damage from the winds. Creatures attempting to leave the area must make a Strength saving throw or take 6d8 bludgeoning damage and be flung back into the center of the area.<br><br>If this spell is cast again by anyone within 90 feet of a previously existing instance of this spell, the pressure areas flood into each other and cancel each other out, ending both spells.",
    "empower": "Choose one - damage is increased to 8d8, or radius is increased to 20 feet."
  },
  {
    "name": "Shadowbeast",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Illusion",
      "Shadow",
      "Concentration",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Your shadow transforms into one that matches a hideous quadrupedal beast. At the start of each of your turns, it tries to attack one creature within 30 feet you choose. They must make a Dexterity saving throw or take 6d6 piercing damage, halved on a success. At the end of each of your turns, it lies in wait and attacks the first creature to attack you within its range before the start of your next turn.<br><br>Your shadow is more malleable in this form. You can use it to manipulate objects from up to 30 feet away, and you gain a climb speed equal to your walking speed. You can take the Hide action for 1 AP as your shadow quickly obscures you. If you would be reduced to 0 hit points, your shadow intercepts the attack or spell, ending the spell immediately and preventing all effects that would have affected you.",
    "empower": ""
  },
  {
    "name": "Soul Convergence",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Necromancy",
      "Spirit",
      "Concentration",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You overlap the area of the spell with ghostly re-enactments of many other similar events in the history of the world. When you cast this spell, and at the start of each of your turns, select three creatures and choose one effect for each creature:<br>-The creature can reroll any roll they make once during their turn, taking the result of the second roll.<br>-The creature is locked into repeating history, and has disadvantage on all attack rolls.",
    "empower": "Duration becomes 15 minutes."
  },
  {
    "name": "Crushtide",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Water",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot line)",
    "duration": "Instantaneous",
    "desc": "A wave of water 15 feet tall, 15 feet wide, and 60 feet long erupts in front of you, optionally carrying you to any point within the line. Creatures in the area must succeed on a Strength saving throw or take 8d6 bludgeoning damage and be knocked prone. A successful saving throw deals half damage and does not knock prone.<br><br>During your next turn, if you are still in the same area covered by the wave, you can spend 2 AP to cause a second wave, twice as tall, wide, and long, starting from the end point of the first wave. You can optionally choose to ride the wave to any point within the wave. Creatures in the wave must succeed on a Strength saving throw or take 8d6 bludgeoning damage and be knocked prone. A successful saving throw deals half damage and does not knock prone.",
    "empower": "Damage increased to 10d6 on both waves."
  },
  {
    "name": "Fatal Wrath",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Arcane",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Four bolts of black magic spring out from your hands, each homing in on a different creature you choose within range. They must make a Dexterity saving throw or take 8d6 damage, split evenly between arcane and unholy damage. A successful saving throw deals half damage.<br><br>If a reanimated creature is targeted, or if the target creature is reduced to 0 hit points, an additional bolt springs from them at any other creature within range you choose. You can target a previously targeted creature with these additional bolts. A creature that fails a saving throw against this spell fails all successive saving throws against this spell. These bolts cannot trigger additional bolts.",
    "empower": "Fires two more bolts."
  },
  {
    "name": "Stoneshift",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Earth",
      "Mastery"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "While touching a stone surface, you melt with the surface as if you were a liquid. In this state, you can travel along stone at a rate up to four times your movement speed. You can't take any other action in this form.<br><br>If the stone you are traveling on is destroyed, or if you move away from the stone, the spell ends.",
    "empower": "The spell gains a duration of 1 minute. You can enter and exit stone for 1 AP during your turn while the spell persists."
  },
  {
    "name": "Restore Health",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Evocation",
      "Holy",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Restoring magic pours over target creature in range that you can see. All Disease and Poison spells affecting them end immediately. The creature then rolls one of its remaining hit dice and heals a number of hit points equal to ten times the normal amount. If no hit dice are remaining, the creature instead heals 20 hit points and restores one hit die.",
    "empower": ""
  },
  {
    "name": "Rosetrap",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Plant",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "15 minutes",
    "desc": "You create six roses on any surface within range. Each rose must be at least 10 feet apart from any other rose created by this spell. You can choose any number of creatures when casting this spell to be unaffected.<br><br>When a creature moves within 10 feet of a rose, it triggers and bursts into a mass of writhing vines, reducing the triggering creature's movement to 0 for the  turn and forcing it to stop moving. Creatures within 20 feet must make a Dexterity saving throw or take 6d8 piercing damage and be restrained. Creatures that succeed take half damage and are not restrained.<br><br>A restrained creature can spend 1 AP to take 2d8 piercing damage and make a Strength saving throw. On a success, they break free from the entrapping rose. A restrained creature that takes slashing or fire damage is freed from being restrained.<br><br>The roses can be destroyed if the surface they are on is destroyed. If the rose is destroyed after being triggered, all affected creatures are freed.",
    "empower": ""
  },
  {
    "name": "Entropic Dome",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Acid",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "You create a dome of acid that rapidly dissolves anything that crosses through. Ranged attacks that cross through the dome are dissolved harmlessly. Creatures that pass through the dome take 8d8 acid damage.<br><br>You can spend 2 AP during your turn to move the dome to center itself on you again. This does not inflict damage if a creature would pass through the dome. If you leave the dome, the spell ends.",
    "empower": ""
  },
  {
    "name": "Banish Disease",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Abjuration",
      "Disease",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius) ",
    "duration": "1 hour",
    "desc": "You project a field of crackling energy centered on you that follows you as you move and sanitizes everything in the field. No other Disease spell can function in this area, and any other Disease spells that enter the area are dispelled on contact.<br><br>The purity of the area has additional benefits: creatures within have advantage on Constitution saving throws and resistance against poison damage, and any contamination inside the area is immediately purified. Creatures that receive healing in this area heal for an additional 2d6 hit points, up to a maximum amount of additional healing equal to the original value healed.",
    "empower": "Choose one: radius is increased to 60 feet, or duration becomes 8 hours."
  },
  {
    "name": "Precision Warp",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Space",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "Up to six creatures you choose within range that you can see, of which you can be one of them, are teleported to any other location within range. You pick each individual destination for each creature. You can specify a particular destination, or give directions such as \"60 feet north, 10 feet up\".<br><br>Unwilling creatures can make a Willpower saving throw to avoid being teleported. Even if they fail, you can't teleport an unwilling creature more than 50 feet into the air.",
    "empower": "Choose one: Double the amount of possible targets, or you no longer need line of sight to target a creature."
  },
  {
    "name": "Godly Example",
    "tier": 6,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A thundering column of lightning descends from the sky onto a target creature you can see, blasting a 60 foot radius sphere with the shock wave. The target creature must make a Constitution saving throw or take 10d8 lightning damage plus 1d8 lightning damage for each other creature in the spell's area, halved on a success. The total damage cannot exceed 20d8. Other creatures must make a Constitution saving throw or take 8d8 lightning damage, halved on a success.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Command Nature",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Beast",
      "Plant",
      "Concentration",
      "Potent"
    ],
    "cost": "2 AP",
    "range": "Self (120 foot radius) ",
    "duration": "8 hours",
    "desc": "You assert control over all of nature within a 120 foot radius around yourself that moves with you. You gain the following benefits: <br><br>>Beast and plant creatures with fewer hit dice than you that are not currently fighting you are charmed by you for the duration, even if they leave the range of the spell.<br>>You can command a charmed beast or plant creature during its turn for 1 AP. It follows your exact commands.<br>>Terrain is never difficult for you and any number of creatures you choose. At the start of each of your turns, choose any number of creatures in range. They always treat all terrain as difficult.<br>>You automatically take control of all Beast and Plant spells of equal or lower tier than this spell that are cast in range of this spell, or whose casters are in range or enter range while concentrating. You can choose new targets for each spell, and end spells freely. You do not need to concentrate on any such spells.",
    "empower": ""
  },
  {
    "name": "Future Shift",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Time"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Target creature's body is shifted 6 seconds into the future, advancing all effect durations on them by 6 seconds and triggering all start of turn and end of turn effects. An unwilling creature can make an Intuition saving throw to avoid the effect on a success.",
    "empower": "Instead shifts one minute into the future, six seconds at a time. Unwilling creatures can make an Intuition saving throw to stop the effect completely on a success. You can stop at any 6 second interval."
  },
  {
    "name": "Corrosive Stream",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Conjuration",
      "Acid",
      "Mastery"
    ],
    "cost": "0 AP",
    "range": "Self (30 foot line) ",
    "duration": "Instantaneous",
    "desc": "Corrosive acid bursts from your body and deals 3d8 acid damage to all creatures in the area of effect.",
    "empower": "Damage increased to 5d8."
  },
  {
    "name": "Dragonbless",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Draconic",
      "Mastery"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You grant any creature within range that you see the same benefits as a Draconic spell currently affecting you. When the spell ends for you, it ends for the affected creature.",
    "empower": "Targets up to three creatures."
  },
  {
    "name": "Petrify",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Earth",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "15 minutes",
    "desc": "Target creature within range that you can see must make a Constitution saving throw or become restrained as their body begins to turn to stone. At the end of their next turn, they must make a Constitution saving throw. On a success, they are restrained until the end of their next turn, as the petrification slowly withdraws. On a failure, they become petrified for the duration.<br><br>A petrified creature has resistance to slashing, piercing, and bludgeoning damage, but can't act at all. If reduced to 0 hit points, they shatter. If the spell reaches its full duration, 10 of the creature's hit dice are destroyed. If there are insufficient hit dice remaining, they are permanently petrified.",
    "empower": "Range instead becomes Self (30 foot cone)."
  },
  {
    "name": "Nerves of Glass",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Psychic",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "300 feet ",
    "duration": "Instantaneous",
    "desc": "Target creature within range must succeed on an Intuition saving throw or lose 3 AP. On a success, they lose 1 AP instead.",
    "empower": ""
  },
  {
    "name": "Mass Beastshape",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Beast",
      "Concentration",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius) ",
    "duration": "15 minutes",
    "desc": "This spell is similar to Beastshape, except that it affects all willing creatures in range. You can choose a different shape for each affected creature.",
    "empower": "Duration increased to 1 hour."
  },
  {
    "name": "Manifest Horror",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Illusion",
      "Eldritch",
      "Psychic",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "Target frightened creature's horror takes form as a terrifying shapeless mass, constantly shifting through obscene forms. It appears in an adjacent space to the creature, and remains until the creature becomes unconscious or is no longer frightened, at which point the spell ends and the horror vanishes.<br><br>At the start of each of the creature's turns, the horror attacks them. They must make an Intuition saving throw or take 8d10 psychic damage, halved on a success. The horror then attempts to spread the creature's fear to all other creatures within 30 feet that are not already frightened. Each creature must make an Intuition saving throw or take 3d10 psychic damage and become frightened until the horror vanishes.<br><br>The horror imposes disadvantage on all of the target's saving throws to end the frightened condition. The first time the target creature succeeds on a saving throw while the horror is present, it is instead turned into a failure.",
    "empower": ""
  },
  {
    "name": "*Skeleton Key*",
    "author": "neitherrhyme",
    "tier": 6,
    "tags": [
      "Space",
      "Conjuration",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Self",
    "duration": "Indefinite",
    "desc": "Spending ten minutes with a door, you create a magical key attuned to that door. <br><br>This key may be placed in any door; if you do so, the key will disappear and the door it is placed in will open into a one-way portal to the attuned door for the next hour, or until either door is closed or destroyed.<br><br>A caster may only maintain one instance of Skeleton Key, and only one instance of Skeleton Key may be attuned to a given door.",
    "empower": ""
  },
  {
    "name": "Ruler of the Weather",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Cold",
      "Lightning",
      "Water",
      "Wind",
      "Concentration",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (300 foot radius)",
    "duration": "1 hour",
    "desc": "This spell is similar to Harness Weather, except that you choose two effects each time. You can choose the same effect twice in one turn.",
    "empower": "Reduces the AP cost to 4."
  },
  {
    "name": "Majesty",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Draconic",
      "Delayed",
      "Mastery"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You end any number of spell effects or conditions on you. You heal 1d6 hit points for each effect or condition ended, and 1d6 hit points per tier of each Draconic spell ended.<br><br>Each time you cast this spell, the AP cost increases by 1 until you take a break or rest.",
    "empower": "You don't need to concentrate on this spell, even when you can't pay the full cost immediately."
  },
  {
    "name": "Invisible Death",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Illusion",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "15 minutes",
    "desc": "You create a 10 foot cube of transparent, adhesive acid centered on target point in range that you can see. Any creature that is in the area when it is created must make a Dexterity saving throw or be ensnared in the spell.<br><br>The acid is invisible once created, unless darkened by magic. Any creature that moves into the acid is ensnared and stops moving immediately. Ensnared creatures can't move or take action unless an adjacent creature spends 2 AP to pull them free. Every minute, an ensnared creature takes 2d6 acid damage, then can make a Strength saving throw to free itself.",
    "empower": ""
  },
  {
    "name": "Eyes of the Storm",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Divination",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Your eyes fill with lightning. You can't see normally, but you gain a top-down view of the surrounding area, able to see a 300 foot square centered on you. You can shift your vision to any area you please for 1 AP.<br><br>Nothing is hidden from you. You can see invisible and hidden creatures anywhere you are looking. You can choose to end this spell and fire a 5 foot wide, 5 foot tall bolt of lightning from your current location to target creature you can see. Every creature in the bolt must succeed on a Dexterity saving throw or take 14d6 lightning damage, halved on a success.",
    "empower": ""
  },
  {
    "name": "Edit Creation",
    "tier": 6,
    "tags": [
      "Transmutation",
      "Arcane"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "Instantaneous",
    "desc": "You change the terrain in a 30 foot radius around you to be whatever you so desire. You cannot change terrain to cause immediate harm to a creature, such as creating lava underneath them, although you may create disadvantageous situations such as surrounding a creature with tall rocks.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Companion Call",
    "author": "CrusaderDroid",
    "tier": 6,
    "tags": [
      "Enchantment",
      "Beast",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Permanent",
    "desc": "You form a bond with target charmed beast with fewer hit dice than you. After remaining in contact for 15 minutes, it permanently becomes your faithful companion. You establish a telepathic link with it that allows you to command it as long as you are conscious. It gains hit dice until it ties your hit dice, and uses your proficiency modifier instead of its own. It adds your proficiency modifier to the damage it deals with all attacks. In combat, it takes its turn after yours.<br><br>You can't cast this spell again until your companion dies. If your companion is revived, the spell does not persist, although it still retains its memories of you.<br><br>A creature that is only temporarily transformed into a beast is never a valid target for this spell.",
    "empower": ""
  },
  {
    "name": "Infectious Aura",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Disease",
      "Poison",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "A field of horrific taint festers into existence around you that follows you. Whenever any creature other than you within the field takes slashing or piercing damage, they take an additional 3d6 poison damage and become poisoned until they leave the field.",
    "empower": ""
  },
  {
    "name": "Stolen Reflection",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Illusion",
      "Arcane",
      "Eldritch",
      "Shadow"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "In response to a spell being cast within range, you can make an opposed spellcasting roll against the caster - both of you roll 1d20 and add your spellcasting stats. If you win, a brief tear between possibilities steals the magic from the target as an alternate version of yourself casts the spell instead. You choose all targets for the spell, if applicable.",
    "empower": ""
  },
  {
    "name": "Metabolize",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Beast",
      "Holy",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "Target willing creature's body painfully undergoes biological manipulation. They restore 1d6 hit dice and take 10 damage for every die restored, which cannot be resisted or negated. This damage cannot reduce a creature below 1 hit point.",
    "empower": "Now restores 2d6+2 hit dice instead."
  },
  {
    "name": "The First Trumpet",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Apocalyptic",
      "Eldritch",
      "Summoning"
    ],
    "cost": "4 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You forcibly extract a creature from the Sea of Possibility. It can be any creature with a CS of 13 or lower, or a copy of a creature with no more than 13 class levels. It arrives at the target location.<br><br>The created creature is visibly wrong and distorted. Roll 1d6-2 for each stat and add the result to its current stat block. At the start of each of its turns, it heals itself for ten percent of its maximum hit points. It has 4 AP by default. It retains all features and talents of the intended creature.<br><br>The creature is not under your control and is hostile to all life not from the Sea of Possibility. It spends its actions trying to destroy all life not of the Sea of Possibility, prioritizing its summoner if they are in range. More intelligent creatures may make long term plans to cause as much destruction as possible. It lasts until reduced to 0 hit points, which causes it to disintegrate.<br><br>You cannot end this spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "The Choir Above",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Holy",
      "Apocalyptic",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "1 mile",
    "duration": "1 week",
    "desc": "The heavens split open above a target point in range, as melodic heavenly voices sing of wonder, audible out to 1 mile. All creatures that can hear it must succeed on an Intuition saving throw or be caught up in the choir, doing nothing except singing for the duration of the spell. A creature that succeeds is immune to the spell until they finish a rest.<br><br>The choir protects those who sing with them. Any creature that attacks a singing creature is struck for 10d10 radiant damage, regardless if the attack hit or missed. Singing creatures are immune to all conditions and automatically succeed on all saving throws, taking no damage from spells. They do not need to eat, drink, or sleep while they sing.<br><br>When the spell ends, singing creatures are left with a sense of hope and wonder.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Throne of Winter",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Cold",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "An empowered throne of ice appears behind you as you sit, plunging the area around you into a chilling blizzard. While seated, you are immune to cold damage, and a 60 foot area around you becomes a thick blizzard that obscures vision. Creatures within this blizzard at the start of their turns have their movement speed halved and must make a Constitution saving throw or take 8d6 cold damage, halved on a success.<br><br>The blizzard expands by 30 feet at the start of each of your turns. Water spells cast within the blizzard automatically fail.<br><br>You must remain seated during the spell. If you leave the seat, the spell ends.",
    "empower": ""
  },
  {
    "name": "Thief of Talents",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Psychic"
    ],
    "cost": "1 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "You steal the knowledge of up to three weapon styles, spells, proficiencies, or class talents from target creature you can sense. They lose access to the stolen knowledge for the duration. An unwilling creature can make an Intuition saving throw to avoid being affected.",
    "empower": "Choose one: duration increased to one hour, or always steals one piece of knowledge even on a successful saving throw."
  },
  {
    "name": "Winter Court's Cruelty",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Illusion",
      "Cold",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A 30 foot radius sphere centered on target point within range becomes subject to the whims of the fey. Creatures that start their turn inside must succeed on a Constitution saving throw or have their movement speed reduced to 5 feet until the end of their turn, as the temperature appears to drop precipitously. Whenever a creature in the area takes damage, they additionally take 2d6 additional cold damage. A creature reduced to 0 hit points while inside is frozen solid, and dies if shattered.",
    "empower": ""
  },
  {
    "name": "Circle of Healing",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Any number of creatures in a 40 foot radius centered on target point within range that you can see heal 10d6 hit points.",
    "empower": "Add your spellcasting stat to every die rolled."
  },
  {
    "name": "Magna Sling",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "1 mile",
    "duration": "Instantaneous",
    "desc": "You charge an object that weighs no less than 1 pound, then set up a series of magnetic charges that fling it at impossibly fast speeds towards a target creature or direction you choose. The first time it hits a creature, it must make a Dexterity saving throw or take 10d8 piercing and 10d8 lightning damage, halved on a success. If it hits an object, it instead deals 80 piercing and 80 lightning damage.<br><br>The projectile continues to travel afterwards, dealing 5d8 piercing and 5d8 lightning damage to any creature in the way on a failed saving throw and half of that on a success, and 40 piercing damage and 40 lightning damage to any object in the way.",
    "empower": "Choose one - initial damage increased to 10d12, or the first three targets hit take the original damage."
  },
  {
    "name": "Unceasing Light",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "You fire a small dart of light at a target object or point within range. Upon impact, it embeds itself and then shines brilliant light out to 90 feet, blinding creatures that are within 10 feet of the source. The light prevents Shadow spells from being cast inside, and reveals invisible creatures.<br><br>You can fire another dart for 2 AP during each of your turns as long as the spell continues. A dart that is dislodged has its radius of light halved, and it no longer blinds creatures.<br><br>When the spell ends, all darts lose their light.",
    "empower": "Darts are permanent once embedded, even if the spell ends. Dislodging the darts reduces their range as normal."
  },
  {
    "name": "Pain Swap",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Psychic",
      "Spirit",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You trade your current hit points with the target creature's current hit points. Any hit points above a creature's maximum are lost.<br><br>An unwilling creature can make a Willpower saving throw to avoid the effect on a success.",
    "empower": "Range increases to 30 feet."
  },
  {
    "name": "Hydro Drill",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Physical",
      "Water",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You engulf one of your arms in intensely-spinning water, forming a drill. You can use this drill as a weapon, using either your Strength, Dexterity, or spellcasting stat to determine its attack and damage bonuses. It deals 10d6 piercing damage on a hit, ignoring all effects that would reduce its damage. It deals 60 damage to objects.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Bursting Aura",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You begin to radiate large amounts of magic. Other creatures within 30 feet of you restore 1 MP at the start of each of their turns.<br><br>You can end this spell to unleash a devastating shockwave of magic, causing creatures within 30 feet of you to make a Dexterity saving throw or take 8d6 arcane damage and lose MP equal to half the damage taken. A creature that succeeds takes half damage and still takes MP damage equal to half the damage taken.",
    "empower": "MP restoration increased to 3. Damage increased to 12d6."
  },
  {
    "name": "Mortality's Cinders",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Fire",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "You touch a willing creature and burn away the limits of mortality upon them, for a time. For the duration of the spell, they can't heal any hit points, but add your spellcasting modifier to every roll they make. When the target makes a successful attack or saving throw, they take 1d12 damage, which can't be reduced or prevented in any way. Half of this damage reduces the target's maximum hit points by the same amount.<br><br>This spell can only be ended early while taking a break.",
    "empower": ""
  },
  {
    "name": "Core Tap",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Earth",
      "Fire",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A 60 foot radius area centered on a point on the ground within range rumbles ominously. At the start of your next turn, the area collapses into a 100 foot deep hole. On each subsequent turn, the hole deepens by twice the depth, until it reaches the core of the world.",
    "empower": ""
  },
  {
    "name": "Echoed Spirit",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Spirit",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "You summon a spiritual version of any creature without class levels and with hit dice equal to or less than your own hit dice. It can't take damage from other creatures and takes its turn after yours. It follows your telepathic commands and disappears when the spell ends or it reaches 0 hit points.<br><br>At the start of each of its turns, it loses hit points equal to ten percent of its maximum hit points. This value increases by ten percent for each successive turn.",
    "empower": "Choose one - summons an additional creature but increases the damage taken to twenty percent, or the creature gains 3 additional AP at the start of each of its turns, or damage is delayed until the start of its third turn."
  },
  {
    "name": "We All Go Together",
    "author": "neitherrhyme",
    "tier": 7,
    "tags": [
      "Spirit",
      "Necromancy",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "The life force of all willing creatures in a 20ft radius centered on the caster become linked. All hit points and die of all linked creatures are considered to be a single pool of health for the duration of the spell. <br><br>Upon ending the spell, damage is distributed equally among all creatures until they are at 1 hit point, after which they can receive no more until all creatures subject to the spell have 1 hit point. After this point damage is taken by the creatures with the lowest number of hit die until all damage has been distributed. <br><br>**Empowered**: Unwilling creatures must make a constitution saving throw or be included in the spell.",
    "empower": ""
  },
  {
    "name": "Defer",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Space",
      "Silent",
      "Still"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You end your turn after weaving a subtle protection. The next time you would take damage before the start of your next turn, you instead teleport to an empty space within 60 feet you can see. You then immediately take a turn with the remaining AP you have.<br><br>If you are still in the area of the attack after teleporting, you must still defend against the triggering attack. Otherwise, it misses you completely.",
    "empower": "Gain 2 AP after teleporting."
  },
  {
    "name": "Curse of Incineration",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "1 AP",
    "range": "60 feet ",
    "duration": "1 minute",
    "desc": "Target creature within range that you can see becomes surrounded with a field of heat. When they take fire damage, they take an additional 10 fire damage, plus 10 more fire damage for each time they've taken damage from this spell.<br><br>A creature reduced to 0 hit points while affected by this spell explodes, and all creatures within 30 feet must succeed on a Dexterity saving throw or take fire damage equal to the last amount of fire damage dealt to the target from this spell. A creature that succeeds takes half damage.<br><br>An affected creature that is submerged in a non-flammable liquid ends the spell early.",
    "empower": "Damage starts at 30 instead of 10."
  },
  {
    "name": "Ghostly Coven",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Spirit",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Three spirits come forth and cast three spells - a tier 1 spell, a tier 2 spell, and a tier 3 spell - that do not require concentration. You choose each spell and the target of each spell, and any spell with a range of Self targets you. You do not need to know the spell chosen, but any spell you do know that you choose is empowered.",
    "empower": "A fourth spirit casts a tier 4 spell."
  },
  {
    "name": "Objection",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Eldritch"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "As a response to any creature you can see at any time during their turn, you can cause a brief but violent surge in reality. This ends the creature's turn immediately.<br><br>A creature must finish a rest before they can be targeted by this spell again.",
    "empower": ""
  },
  {
    "name": "Call of the Crusade",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Holy",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "With a divine cry, all creatures within range that you choose become invulnerable until the start of your next turn. They can't take any damage or suffer any negative effects.<br><br>A creature affected by this spell can't be affected again until they complete a rest.",
    "empower": ""
  },
  {
    "name": "Warrior from Beyond",
    "tier": 7,
    "tags": [
      "Evocation",
      "Physical",
      "Arcane",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "10 minutes",
    "desc": "You pull together arcane energies to form an ethereal being that is the epitome of combat. It closely follows you, only turning physical when it strikes. It can make up to three attacks every turn without any AP cost, targeting a creature within 60 feet and using your spellcasting stat and proficiency modifier for its attack and damage rolls. On each hit, it deals 3d8 arcane damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Lifewrack Toxin",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "8 hours",
    "desc": "You create three doses of lifewrack toxin, which can be applied to a weapon or piece of ammunition or dissolved in a liquid. A creature that ingests the poison or is damaged by a poisoned weapon must make a Constitution saving throw or be affected for the duration.<br><br>Whenever a creature poisoned by lifewrack toxin spends AP, they take 4 poison damage per AP spent. Whenever a creature makes an ability check, they must first roll 1d20. On a roll of 10 or below, a coughing fit seizes them, causing them to fail the ability check automatically. <br><br>A creature can spend 2 AP and one hit die to repeat the saving throw, ending the effect early on a success. The creature still takes damage on a successful saving throw from the spent AP.",
    "empower": ""
  },
  {
    "name": "Skyice Pathways",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Cold",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "1 hour",
    "desc": "Four bolts of ice-cold lightning fall from the sky and trace out up to four pathways of solid ice. Each pathway is a 5 foot wide, 30 foot long line that starts and ends at a target point within range. The pathways remain until the spell ends.<br><br>Creatures caught in the way of each pathway must succeed on a Dexterity saving throw. On a failure, they take 6d8 cold damage and are restrained inside the pathway. They can spend 2 AP during their turn to make a Strength saving throw to break free of the pathway, destroying the segment they occupy. A creature can only be affected by one pathway.",
    "empower": "Duration increases to 8 hours. Restrained creatures must use 3 AP to make a saving throw."
  },
  {
    "name": "Earthquake",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Earth",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (90 foot radius)",
    "duration": "Instantaneous",
    "desc": "Everything in range that is within 1 foot of the ground must make a Dexterity saving throw or take 10d12 bludgeoning damage and be knocked prone. A successful saving throw deals half damage and does not knock the creature prone. Objects take 200 bludgeoning damage instead.",
    "empower": "Radius increased to 120 feet."
  },
  {
    "name": "Heartbreak",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Fey",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "Self (Sight)",
    "duration": "Instantaneous",
    "desc": "You forcibly end the charmed condition on all creatures that can see you and are charmed by you, dealing grievous injuries to their psyche. Choose one of the following effects for each affected creature: <br>>Their maximum hit points are set to their current hit points.<br>>They lose one-quarter of their current hit points.<br>>They enter a berserk rage for 1 minute and can do nothing but attack the closest creature.<br>>They fall into a near-unconscious state and can't take any actions for 1 minute.<br><br>A creature affected by the latter two effects can make an Intuition saving throw at the end of each of their turns to end the effect early on a success.",
    "empower": ""
  },
  {
    "name": "Contempt",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Draconic"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "Target creature with hit dice equal to or less than half your hit dice becomes frightened of you for the duration. It can't take any action other than the Dash and Disengage actions, and it must run from you at the start of each of its turns while it can still see you.",
    "empower": "Range becomes Self (30 foot radius)."
  },
  {
    "name": "Thunderlord's Bellow",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "Your voice becomes that of a wrathful deity, booming loud enough to be audible out to 1 mile. Creatures within 120 feet you choose that can hear you speak must succeed on a Constitution saving throw or be deafened to everything except your words. Creatures with fewer hit dice than your character level that can hear you must succeed on an Intuition saving throw or be charmed or frightened by you when you speak, and remain this way until they take damage or the spell ends.",
    "empower": ""
  },
  {
    "name": "Garden",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "Permanent",
    "desc": "Any number of any type of plant of which you have knowledge grows anywhere within the area. You can choose multiple types of plants and choose anywhere within the area for them to grow. They reach their full maturity at the end of your turn.<br><br>The plants you choose to grow do not count as difficult terrain and cannot directly harm creatures as they grow. Otherwise, they are identical in every way to a naturally grown version of that plant.",
    "empower": ""
  },
  {
    "name": "Megalo Shadow",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Illusion",
      "Beast",
      "Shadow",
      "Water",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius) ",
    "duration": "1 minute ",
    "desc": "The ground ripples as a massive illusory shark made of shadows bursts from the ground, swimming as if the land is an ocean.<br><br>At the start of each of your turns, the shark immediately rushes towards the creature with the fewest hit dice that is still hostile. That creature must make an Intuition saving throw or roll three of its remaining hit dice and take psychic damage equal to the number rolled. Damage dealt this way is deducted from maximum hit points, and the hit dice are destroyed. A creature without hit dice remaining instead loses half of its current hit points and is frightened for the duration, and the shark will not attack that creature again.<br><br>If you frighten a creature during your turn, the shark immediately attacks that creature.<br><br>The spell ends early if you leave the area.",
    "empower": ""
  },
  {
    "name": "Showdown",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Physical"
    ],
    "cost": "0 AP",
    "range": "90 feet ",
    "duration": "Instantaneous",
    "desc": "You can cast this spell when rolling initiative to challenge a target creature that is fighting you. Before anyone else can act, you and the target take your turns first. You gain 3 AP during this turn.",
    "empower": ""
  },
  {
    "name": "Rumbling Defenders",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Earth",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You assemble many rocks into a pair of towering earthen defenders, placed anywhere within range. The defenders are immune to harm, and grant resistance to damage to you while you are adjacent to at least one of them.<br><br>At the start of your turn, you can have each defender move up to 10 feet and make one attack against a creature within 300 feet by throwing a boulder. You use your proficiency modifier and spellcasting stat to determine its attack bonuses, and it deals 4d6 bludgeoning damage plus your spellcasting stat on hit.<br><br>The defenders crumble if you are reduced to 0 or fewer hit points.",
    "empower": ""
  },
  {
    "name": "Hollowing Moonlight",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Radiant",
      "Shadow"
    ],
    "cost": "2 AP",
    "range": "300 feet",
    "duration": "Instantaneous",
    "desc": "A 10 foot radius, 300 foot tall cylinder of pale moonlight descends on a target point within range that you can see, then sweeps up to 60 feet across the ground in any direction you choose. Creatures the moonlight passes through must make a Constitution saving throw or take 6d8 radiant and 6d8 unholy damage, plus 5 unholy damage for every hit die that they are missing.<br><br>A creature reduced to 0 hit points by this spell has their soul extracted from their body. A spell that reanimates the creature refunds half of its MP cost.",
    "empower": "Choose one - radius increased to 15 feet, or movement range increased to 120 feet, or damage from missing hit dice increased to 10."
  },
  {
    "name": "Reflection of Night",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Shadow",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "15 minutes",
    "desc": "You create up to four domes of thick shadow with a radius of 20 feet. You can place these domes at a fixed location, or have them follow a target creature. When you cast this spell, you can choose any number of creatures to see through the shadows created by this spell.<br><br>Each dome grants resistance to fire damage to all creatures inside, and reflects all radiant damage. Any creature inside can Hide for 0 AP. If they do so, the shadows conceal their appearance and make them invisible until the end of their next turn. No creature other than the ones you choose can see through the shadows of the domes.",
    "empower": "Choose one - double the amount of domes created, or radius of each dome increased to 30 feet, or range increased to 120 feet."
  },
  {
    "name": "Storm of the Arcane",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Arcane",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "Arcane magic forms a lethal storm around you that continually pours seeking bolts. Now and at the start of each of your turns, ten bolts of arcane magic fly out, homing in on any creature in range that you choose. You can choose how many bolts hit each creature. The first bolt that hits a creature each turn deals 4d6 arcane damage, with each successive bolt dealing 1d6 damage.<br><br>On each of your turns after casting this spell, you can spend up to 3 AP to fire 2 more bolts per AP spent.",
    "empower": "You add your spellcasting stat to the damage done with each bolt."
  },
  {
    "name": "Exhalation",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Draconic"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot cone)",
    "duration": "Instantaneous",
    "desc": "You exhale raw draconic magic outward in a 60 foot cone. All creatures within the area of effect must succeed on either a Dexterity, Constitution, or Intuition saving throw, chosen by the creature, or take 10d10 arcane damage, halved on a success. A creature loses all of their movement speed if they failed a Dexterity saving throw, loses all damage immunities if they failed a Constitution saving throw, and is frightened if they failed an Intuition saving throw. All effects last until the end of your next turn.",
    "empower": ""
  },
  {
    "name": "Acidstorm",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "Dozens of acidic beads spiral around you for the duration. Any creature that starts their turn within 5 feet of you must succeed on a Dexterity saving throw or take 5d6 acid damage.<br><br>You can send a bead out to a point within 90 feet for 1 AP once per turn. The bead explodes into a pillar of acid 100 feet tall with a radius of 15 feet. Creatures inside must make a Dexterity saving throw or take 5d6 acid damage, halved on a success.",
    "empower": "Choose one - damage increased on both effects to 7d6, or you can send a bead out twice per turn. A creature can only take damage from this spell once per turn even if multiple beads explode."
  },
  {
    "name": "Desiccation",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Time"
    ],
    "cost": "2 AP",
    "range": "60 feet ",
    "duration": "Instantaneous",
    "desc": "Any number of creatures within range must succeed on a Willpower saving throw or take 5d12 damage and lose 1 AP as multiple patches of their body are rapidly aged and reverted. A successful saving throw halves the damage and prevents AP loss.",
    "empower": "Damage increased to 7d12."
  },
  {
    "name": "Star Pollination",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Eldritch",
      "Plant",
      "Space",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "Winds from unknown realms come forth and spread the seeds of up to five stars. You choose a target point or creature within range that you can see to serve as the bed for each seed.<br><br>A chosen creature must succeed on a Dexterity saving throw to avoid the seed. On a success, the seed instead plants itself in an adjacent empty space you choose.<br><br>At the start of your next turn, the seeds begin to bloom, turning into magnificent star flowers that burn without heat and continue to grow. Each star flower occupies a 5 foot radius sphere, shedding bright light out to 15 feet. Any creature in the light of at least one star at the start of their turns must succeed on a saving throw using their lowest stat or take 4d6 arcane damage, halved on a success. The damage increases by 2d6 each time they have to make this saving throw before the spell ends. Creatures that are used as seed beds have the star flower emerge from their body, and it moves with them as they move.<br><br>The stars drink up magic. Whenever any creature within the light of a star casts a spell, that star grows, expanding its radius by 5 feet and its light by 15 feet.<br><br>At the end of the spell, every star explodes, scattering stellar pollen into the area where its light touched that sticks to any creature that touches it. The area and any creature covered in the pollen remain illuminated for 8 hours, and creatures affected by the pollen become vulnerable to arcane damage for the duration.",
    "empower": ""
  },
  {
    "name": "Mass Distort",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Space"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Up to five 10 foot radius spheres within range are forcibly distorted. Creatures in at least one sphere must make a Constitution saving throw or take 10d4 damage, which cannot be reduced or negated. A successful saving throw deals half damage.",
    "empower": "Choose one - damage increases to 10d6, radius increases to 15 feet, or you create only one sphere with a radius of 20 feet that deals 10d12 damage."
  },
  {
    "name": "Heavenward Sphere",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Wind",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 hour",
    "desc": "You create a sphere of whirling winds around you that extends out to a 60 foot radius, granting you a flight speed equal to your walking speed for the duration. When you fly, every creature and every object that weighs less than 100 pounds within the sphere is also carried into the air with you. Unwilling creatures can make a Strength saving throw to avoid being lifted into the air.<br><br>Creatures within the sphere gain a flight speed equal to their walking speed, halved if they were unwilling. They can't leave the sphere without you allowing it or the creature making a Strength saving throw to break through. Ranged attacks that travel through the sphere have disadvantage. If you move and a creature or object would leave the sphere, it is instead forcibly dragged with you.<br><br>When the spell ends or if you land, the sphere drops all creatures and objects inside.",
    "empower": "Choose one - radius increases to 90 feet, or duration increases to 8 hours."
  },
  {
    "name": "Fragility of Form",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A 60 foot cube centered on a point within range becomes encased in cohesive, corrosive acid. At the start of your next turn, every object in the area not carried or held by a creature merges into one object with 1 hit point.",
    "empower": ""
  },
  {
    "name": "Castigation of the Unworthy",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Holy",
      "Unholy"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A colorless blast strikes a target creature within range that you can see. They must make a Willpower saving throw or take 4d6 damage, which cannot be reduced or negated. On a successful saving throw, they take half damage.<br><br>On each of your successive turns, you can spend 1 AP once per turn to strike the same target again, forcing them to repeat the saving throw. Each time you do, the damage increases by 2d6.<br><br>A creature reduced to 0 hit points by this spell falls to the ground screaming, surrounded by an unnatural field that protects them from all harm while tormenting them with their sins. After one hour, they regain 1 hit point, and become permanently charmed by you.",
    "empower": "Damage starts at 8d6 instead."
  },
  {
    "name": "Ignition Weapon",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Transmutation",
      "Fire",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "1 minute ",
    "desc": "Target weapon ignites with white-hot flame. It deals an additional 2d10 fire damage on every hit, and marks the area of impact with flames.<br><br>When an affected creature or object is reduced to 0 hit points, all marks on that target detonate, causing every creature you choose within 20 feet to succeed on a Dexterity saving throw or take 2d10 fire damage per mark, to a maximum of 16d10 damage. A successful saving throw deals half damage.<br><br>When the spell ends, all existing marks explode, but deal only 1d10 fire damage per mark.",
    "empower": ""
  },
  {
    "name": "Amnesia Dust",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "Target creature is dusted with an unusual fey powder and must succeed on an Intuition saving throw. On a success, they lose 1 AP on their next turn. On a failure, they completely forget how to take any action. On their turn, the first time they attempt to use an action they haven't used after being affected by this spell or make an ability check with a stat, it automatically fails and their turn ends.<br><br>After ending their turn in this way, a creature can repeat the saving throw, ending the spell on a success.",
    "empower": "Affects all creatures within 5 feet of the target."
  },
  {
    "name": "Diamondize",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Abjuration",
      "Earth",
      "Radiant",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "Target creature's skin becomes diamond. They are immune to slashing, piercing, bludgeoning, fire, cold, and radiant damage. If they would take radiant damage, it instead is dealt to every other creature within 30 feet.",
    "empower": "Targets an additional creature."
  },
  {
    "name": "Mending Tides",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Water"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Waves of restorative water rush out from you out to a 60 foot radius, healing 6d6 hit points on every creature you choose within range.<br><br>At the end of your next turn, the waves pull back to the original point where you cast the spell before vanishing, healing every creature you choose that is still in the area for 6d6 hit points.",
    "empower": "Choose one - radius increased to 90 feet, or healing increased to 8d6."
  },
  {
    "name": "Ill Tidings",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Poison",
      "Wind"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Sickened winds surround a target creature within range that you can see, and swirl out to either a 30 foot radius sphere centered on the target, or a 60 foot long, 15 foot wide, 10 foot tall line extending from the creature in any direction. Every creature in the winds must make a Constitution saving throw or be afflicted with every condition and every Poison spell affecting the targeted creature. Each effect incurred this way deals 4d6 poison damage.",
    "empower": "The spell affects both a radius and a line."
  },
  {
    "name": "Arcane Siphon",
    "tier": 7,
    "tags": [
      "Enchantment",
      "Arcane",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You reach out to all creatures and prepare to take in some of the magic they expend on their spells. Every time a creature within 60 feet casts a spell, you restore hit points and MP equal to the tier of the spell. You can spend 1 AP as a response to double the MP restored, dealing arcane damage to the target equal to twice the tier of the spell in the process.<br><br>In addition, you have resistance to damage from spells. When you are targeted by a spell, you restore hit points and MP equal to the tier of the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Rain of Fire",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Evocation",
      "Fire",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "This spell is similar to Pillar of Fire, except its damage is increased to 14d6, and it creates five such pillars anywhere within the area. A creature can only take damage from this spell once, no matter how many pillars it is touching.",
    "empower": "Reduces the AP cost to 2."
  },
  {
    "name": "Necrophagic Tide",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Necromancy",
      "Acid",
      "Disease",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "15 minutes",
    "desc": "You create a black, acidic ooze that occupies a 10 foot radius within range. It immediately moves up to 20 feet in a direction you choose, and any creature that it touches or moves through, or any creature that ends their turn inside, must succeed on a Constitution saving throw or take 10d10 acid damage, halved on a success. Undead creatures take 100 acid damage instead, halved on a success. You can move it once at the beginning of each of your turns.<br><br>If a creature is reduced to 0 hit points from this damage, the ooze completely dissolves their body, then splits into a new ooze that appears within 30 feet. You move all oozes at the same time. For each ooze you control, increase the damage dealt by 1d10, or 10 against undead. A creature can only take damage from one ooze each turn.",
    "empower": ""
  },
  {
    "name": "The King of Rats",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Beast",
      "Disease",
      "Summoning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "15 feet",
    "duration": "1 minute",
    "desc": "You summon the king of rats, a huge-sized rat of unusual intelligence, in an empty space within range. It obeys your mental commands for the duration and takes its turn after yours.<br><br>The king of rats has 250 hit points, AC 16, and 5 in every stat. It is immune to all negative effects of Disease spells, including damage. It has a bite attack that uses your proficiency modifier to determine its attack bonus, dealing 8d6 piercing damage on a hit and passing on every Disease spell it is currently affected by to the target. At the start of each of its turns, it summons 1d4 rat swarms that share its existing Disease effects and take their turn after the king of rats.<br><br>If the spell ends early, the king of rats remains for the full duration, but will no longer obey your commands. If you do not have the Beast tag, it becomes hostile to you.",
    "empower": "Choose a Disease spell you know to affect the king of rats when summoned."
  },
  {
    "name": "Paradox Assault",
    "author": "CrusaderDroid",
    "tier": 7,
    "tags": [
      "Conjuration",
      "Time"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You pull the past self of a creature within range to repeat one of the actions they took last turn, targeting the same creature or area as before and making attack rolls or requiring saving throws as necessary.",
    "empower": ""
  },
  {
    "name": "Before the Divine",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Divination",
      "Holy",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "A target creature you touch becomes poisoned for the duration. An unwilling creature can make a Constitution saving throw to avoid the effect.<br><br>While poisoned in this way, the creature falls unconscious and has a vision of standing before the gods, as their spirit temporarily connects to the gods. The creature can ask the gods anything. The gods can respond however they please.<br><br>The spell ends early if the target is damaged, but ending the spell early invites the wrath of the gods on whichever creature caused the spell to end, dealing 300 radiant damage that cannot be reduced or negated. A successful Willpower saving throw halves the damage taken.<br><br>A creature can only visit the gods once per week. Successive uses only knock the creature unconscious for 1 minute instead.",
    "empower": ""
  },
  {
    "name": "Lost Rhyme",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Psychic",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (120 foot radius) ",
    "duration": "1 minute ",
    "desc": "Silent noise infects the minds of all creatures you choose within range. Whenever they take any action, they must make an Intuition saving throw. On a failure, the action is canceled, and they can't take that action again for the duration of the spell.<br><br>If an attack or spell action triggered this effect, only attacking with the same weapon or casting that same spell is prevented.",
    "empower": "Duration increases to 15 minutes."
  },
  {
    "name": "Sunstorm",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Radiant",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (300 foot radius)",
    "duration": "1 minute",
    "desc": "Rays of sunlight fall from the sky and strike up to 3 creatures you choose within range, dealing 4d10 radiant damage and revealing their location to you for 1 minute.<br><br>At the start of each of your turns, you choose new creatures to be struck by sunlight. The maximum number of creatures you can target increases by 1 each turn.",
    "empower": "Choose one - creatures are also blinded until the start of their turn, or damage increased to 6d10, or number of creatures begins at 6."
  },
  {
    "name": "Cloud Blessing",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "8 hours",
    "desc": "Any number of creatures you choose within range gain a flight speed of 30 feet for the duration.",
    "empower": "Choose one - range increased to 90 feet, or flight speed is set to their walking speed if it would be higher."
  },
  {
    "name": "Villainous Ascent",
    "author": "neitherrhyme",
    "tier": 8,
    "tags": [
      "Enchantment",
      "Psychic",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "100 ft ",
    "duration": "Until Dispelled",
    "desc": "You empower a designated individual to oppose all of existence, and existence opposes them in turn. For the duration of the spell, all attacks made by or against the target are made with advantage, and the target rolls with advantage on all Intuition and Will saves. <br><br>Additionally, all creatures which see the target are overcome with the need to end the target's life. Any creature who sees the target must make a Will and Intuition save. Any creature who fails either save is incapable of perceiving the target as anything but an enemy; any creature who fails both saves can only take offensive actions against the target until the spell is dispelled.<br><br>This spell is treated as dispelled when the target's body is completely destroyed.",
    "empower": ""
  },
  {
    "name": "Yoonus's Mastercraft",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Fire",
      "Physical",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Self (60 foot radius) ",
    "duration": "Variable",
    "desc": "1 minute after beginning to cast this spell, an impregnable forge constructs itself around you, expelling every creature other than yourself. After 10 minutes, the forge fades away to reveal a masterpiece you have created. Choose whether it is a weapon, armor, or an object.<br><br>Weapons created this way have a +3 bonus to attack and damage rolls, and ignore resistances on creatures they damage. Armor created this way has a +3 bonus to AC, and is resistant to any four damage types you choose. Both of these last for 1 hour before being destroyed.<br><br>Objects are objectively beautiful works of art. Any creature that sees them must make an Intuition saving throw or be charmed by you once they realize you created the art. Objects are permanent and can be anything that fits within the radius of the spell.",
    "empower": ""
  },
  {
    "name": "Mass Preymorph",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Beast",
      "Fey",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 hour",
    "desc": "This spell is similar to Preymorph, except that it targets a 30 foot radius sphere centered on a point within range.",
    "empower": "All affected creatures gain 30 additional temporary hit points."
  },
  {
    "name": "Maximize",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Arcane"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "The next spell you cast that affects an area has its area of effect tripled.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mortal Omen",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Disease",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "1 minute",
    "desc": "Your body emits a thick blackish-brown gas that covers a 30 foot sphere around you, following you as you move. You are immune to its effects and can see through it, but the area is heavily obscured for other creatures, and creatures that enter it during their turn or start their turn inside lose 1 AP, become vulnerable to poison damage, have disadvantage on their Constitution saving throws against Disease spells and disease effects, and must make a Constitution saving throw or take 3d10 poison damage and lose 2 AP coughing and hacking.<br><br>This spell is treated as if it was a disease. Effects that spread disease will spread this spell to affected creatures. They are not immune to its effects, but you are immune to any other creature's spell effect.",
    "empower": ""
  },
  {
    "name": "A Single Path",
    "author": "neitherrhyme",
    "tier": 8,
    "tags": [
      "Illusion"
    ],
    "cost": "N/A",
    "range": "Self",
    "duration": "Until Dispelled",
    "desc": "Designate an area of up to 50ft by 50ft. Over the course of an hour, you walk a path, entering this space at one point and leaving at another, which is determined to be the 'Correct' path. Any creature who enters the space afterwards who does not follow the 'Correct' path will find themselves back at the entry point. A creature subject to this effect may make a Knowledge save to notice something amiss. If they succeed at this save, they may make a Knowledge save to ignore the effect. Both saves can be made each time a creature finds itself at the entry point.",
    "empower": ""
  },
  {
    "name": "Beautiful Imitation",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Necromancy",
      "Plant",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "When you begin casting this spell, a huge flower forms and occupies a 20 foot radius empty space. You can't cast this spell if there is no room for the flower. It has AC 15 and 300 hit points. If it is reduced to 0 hit points before you finish the spell, the spell is interrupted and you lose all MP spent.<br><br>When you first begin casting this spell, choose a creature you can see. When you finish, the flower blooms and unveils a copy of that creature, made of plant fiber. It is an exact copy of that creature in its current condition, save that its creature type is plant. It takes its turn after yours and unerringly follows your mental commands.",
    "empower": "Duration increased to 15 minutes."
  },
  {
    "name": "Host",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Divination",
      "Spirit",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You become a host to many different spirits granting you knowledge and skill. You have advantage on every roll for the duration.",
    "empower": ""
  },
  {
    "name": "Circle of Power",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Summoning",
      "Sign"
    ],
    "cost": "3 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You create a summoning circle with a radius of 30 feet centered on a target point within range. It has 8 charges. Each time you cast a spell with the Summoning tag while you are within the circle, a number of charges equal to the tier of the spell are consumed to reduce the cost to 0 AP. Once all charges are consumed, the circle fades away.<br><br>If you cast a spell that would exceed the number of remaining charges, the circle immediately fades away, and you must pay the original AP cost of the spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Valthrian's Symbiosis",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Necromancy",
      "Eldritch",
      "Psychic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius) ",
    "duration": "1 minute",
    "desc": "You establish a multi-layered symbiotic connection between yourself and up to six other creatures within range. For the duration, when a creature makes a roll of any type, they use the best possible bonus from all connected creatures. Creatures share the highest possible movement speed of all connected creatures, and share all proficiencies and weapon styles of all connected creatures.<br><br>If your concentration is broken, you and all connected creatures take 10d6 psychic damage from the abrupt break. Half of this damage is deducted from maximum hit points.",
    "empower": "Doubles the maximum number of creatures you can target."
  },
  {
    "name": "Myriad Shadowthorns",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Illusion",
      "Shadow",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "You create a 30 foot long, 1 foot wide wall of transparent shadows, extending upwards as far as the eye can see. When a projectile crosses the shadow, four thorns made of shadows appear inside the wall, close to the point of impact.<br><br>For 1 AP during each of your turns, you can either reposition the wall somewhere else within range, or choose to fire all collected thorns, targeting one creature per thorn. Creatures must make an Intuition saving throw or take 2d6 psychic damage per thorn targeting them, to a maximum of 16d6 damage. A successful saving throw deals half damage.",
    "empower": ""
  },
  {
    "name": "Arcanist's Shift",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Abjuration",
      "Arcane",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You shift yourself onto an overlapping plane. You can't be targeted or affected or sensed by anything originating from your home plane, but you can still see as normal. You can't make weapon attacks, but you can move, interact with objects, and cast spells as normal.",
    "empower": ""
  },
  {
    "name": "Tidal Wave",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Water"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot square)",
    "duration": "Instantaneous",
    "desc": "Massive amounts of water swell beneath you to form a towering tidal wave that covers a 90 foot square in front of you. You are raised 150 feet into the air upon the wave as it gathers. All creatures in the area of effect are aware they are in the area.<br><br>At the start of your next turn, the wave crashes down on the target area, dealing 14d8 bludgeoning damage to everything in the area. Any object totally covered by the wave takes maximum damage. You move to any empty space within the area of effect.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Turn the Tide",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Holy",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Four 10 foot radius spheres centered on points within range erupt into holy magic. For each creature within these spheres, choose one of the following: <br>>The creature must make a Reflex saving throw or take 10d6 radiant damage, halved on a success.<br>>The creature is healed for 10d6 hit points.",
    "empower": "Radius of each sphere increased to 20 feet."
  },
  {
    "name": "Vexatious Martyr",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Disease",
      "Poison",
      "Spirit",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (120 foot radius) ",
    "duration": "1 minute",
    "desc": "You host a swarm of malignant spirits inside of you. Each time you take damage, three spirits, plus one per 10 damage taken, emerge from you, targeting any number of creatures you choose within range. For each spirit targeting a creature, they are affected by a Vexatious Traveler spell. A creature that fails a saving throw against one spirit fails all subsequent saving throws from the same group of spirits.<br><br>You can't have your concentration broken by damage while concentrating on this spell.",
    "empower": ""
  },
  {
    "name": "Idolatrous Image",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Illusion",
      "Lightning",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "1 mile",
    "duration": "1 minute",
    "desc": "In a flash of lightning, you create any image of your choosing anywhere within range, and select what creatures are unaffected by this spell. Every other creature that can see it must succeed on an Intuition saving throw or be blinded for the duration. The only thing they can see is the image.<br><br>A creature that takes damage can repeat the saving throw at the end of their next turn. On a success, they are no longer blinded.",
    "empower": ""
  },
  {
    "name": "Permafrost",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Cold",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "A 10 foot radius becomes encased in impossibly thick, cold ice. Any creatures inside must make a Dexterity saving throw. On a failure, they are frozen solid. On a success, they move to the nearest empty space out of range.<br><br>Frozen creatures take 5d10 cold damage instead of taking a turn. Damage taken this way bypasses temporary hit points. They gain 50 temporary hit points and a vulnerability to fire damage. If their temporary hit points are reduced to 0, the ice breaks and they can take turns normally.<br><br>Creatures immune to cold damage are immune to this spell.",
    "empower": "Choose one - damage increased to 8d10, or radius increased to 20 feet, or temporary hit points increased to 125."
  },
  {
    "name": "Armor Absolver",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute ",
    "desc": "Intense acid sprays from your hand at target creature within range. They must make a Dexterity saving throw or take 10d10 acid damage and have their AC set to 10 + their Dexterity for the duration. A successful saving throw deals half damage with no other effect.",
    "empower": "Targets a 30 foot cone instead."
  },
  {
    "name": "Kaya's Meteor Shower",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Radiant",
      "Space"
    ],
    "cost": "3 AP",
    "range": "1 mile",
    "duration": "Instantaneous",
    "desc": "You vanish and can't be targeted until the start of your next turn as, overhead, up to eight meteors can be seen whistling through the sky. You choose a target point for each meteor within range.<br><br>At the start of your next turn, each meteor crashes down and strikes a 30 foot radius area centered on their point. Every creature within range of at least one meteor must make a Dexterity saving throw, with disadvantage if they are in the center 10 feet of a meteor, or take 12d6 bludgeoning and 4d6 radiant damage, halved on a success.<br><br>You reappear at the center of any one of the meteors that landed.",
    "empower": "You can choose to break up meteors into four smaller meteoroids that deal half damage in a 15 foot radius. Creatures have disadvantage on the saving throw if they are within 5 feet of a meteoroid."
  },
  {
    "name": "Enforce Futility",
    "tier": 8,
    "tags": [
      "Enchantment",
      "Physical",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "Creatures you choose within range must succeed on an Intuition saving throw or be overcome by your sheer power and become frightened of you. While frightened in this way, a creature can't make any weapon attacks. If they cast a spell that would require a saving throw, all targeted creatures have advantage on the saving throw.<br><br>A creature that ends their turn more than 60 feet away from you can repeat the saving throw. On a success, the effect ends.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Levi's Bladeless Heaven Slash",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Evocation",
      "Lightning",
      "Physical",
      "Space",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "Self (1 mile line) ",
    "duration": "1 minute",
    "desc": "You make a vertical slashing motion miming holding a sword in your hand. Four seconds later, a 5 foot wide, 300 foot tall line extending from you out to one mile splits open in a flash of lightning, then splits apart as it is banished. Everything within 25 feet of the line other than you must succeed on a Dexterity saving throw or take 8d8 slashing damage and 8d8 lightning damage, halved on a success. Everything in the line takes an additional 50 damage which cannot be reduced or prevented in any way, and is banished to a demiplane where they cannot take action or be harmed for the duration.<br><br>For the duration of the spell, the split remains. It is totally impossible to cross the split or attack or affect any creature on the opposite side through any means.<br><br>You can't end this spell early through any circumstances. When the spell ends, anything that survived the damage returns from the demiplane.",
    "empower": ""
  },
  {
    "name": "Hurricane",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Wind",
      "Concentration",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "Self (90 foot radius)",
    "duration": "1 minute",
    "desc": "Intense storm winds pick up and swirl about you out to a 90 foot radius sphere that follows you as you move, having the following effects: <br>>Loose dirt, dust, and other similar particles heavily obscure the area.<br>>Creatures that are flying within the area or fly into the area are violently slammed into the ground for 10d8 bludgeoning damage. No creature can fly inside the area.<br>>Creatures that begin their turn within the area must succeed on a Strength saving throw or take 6d8 bludgeoning damage, halved on a success.<br>>Unattended objects that weigh less than 200 pounds are picked up and carried by the winds.<br><br>A 15 foot radius centered on yourself is the eye of the storm. None of the spell's effects are active in the eye.",
    "empower": "Choose one - damage on each turn increased to 9d8, or radius increases to 180 feet and the eye increases to 30 feet."
  },
  {
    "name": "Uri's Terraform",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Beast",
      "Earth",
      "Plant",
      "Water",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Self (10 mile radius)",
    "duration": "Permanent",
    "desc": "Over the course of 8 hours, you begin to shape the surrounding land into a lush paradise capable of untold biological diversity. It starts with a roughly 10 foot radius around you, then expands by another roughly 10 feet at the end of each of your turns. You determine the exact shape of the land, including the creation or destruction of mountains, caves, valleys, rivers, lakes, and other geological features. As long as you are still casting this spell, you can make changes to anything at any point in time.<br><br>The land is impossibly good for all living creatures. Food and water are always pure and can never be contaminated or poisoned by any means. Creatures that take a break within the area automatically heal for a number of hit points equal to their total hit dice. Food is particularly nutritious - a creature that eats anything from this area is satisfied for 24 hours.<br><br>The spell is an exhausting process. You can't cast this spell as part of a rest. If the spell is interrupted, the area ceases expanding.",
    "empower": ""
  },
  {
    "name": "Chronoshift",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Time",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You revert yourself back to your status after your last rest, including hit points, MP, condition, and remaining uses of talents or features. You then lose the MP spent on this spell.<br><br>Casting this spell again before completing a rest instead causes you to get lost in time for 2d4+2 hours, removing you from the current timeline and causing you to vanish. When the duration expires, you reappear in the same location you cast this spell.",
    "empower": ""
  },
  {
    "name": "The Last Song",
    "author": "neitherrhyme",
    "tier": 8,
    "tags": [
      "Evocation",
      "Forbidden (Song)",
      "Apocalyptic",
      "Delayed"
    ],
    "cost": "100 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "You begin to sing a song about the end of all stories, and life begins to lower the curtain. If you spend at least 1 AP during your turn towards casting this spell, all creatures within range must succeed on a Intuition save or join the chorus. Creatures who have joined the chorus must spend 1 AP towards finishing The Last Song until either they are incapacitated or the spell is finished.   If creatures leave the area of the spell, they are treated as an extension of your casting until the spell ends. If you do not spend at least 1 AP on trying to cast the spell, the spell ends.<br><br>When completed, everything living in earshot of the sound begins to slowly crumble to nothing. All living things within range must succeed on a Constitution saving throw, or begin deteriorating, taking 10d12 damage on a success. Deteriorating creatures take 1d12 damage every hour. Each time they take damage from any source, Deteriorating creatures force all living things within 60ft to make the same save. Deteriorating can only be removed from individual creatures by dispelling.",
    "empower": ""
  },
  {
    "name": "Hand of the Undead King",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Necromancy",
      "Unholy",
      "Cold"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute ",
    "desc": "From out of the ground at a target point within range rises a large-sized rotted hand, a representation of the First Zombie. The air in a 10 foot radius around it becomes freezingly cold, and non-undead creatures that start their turn within this radius take 3d6 cold damage and have their movement speed halved until the end of their turn.<br><br>The hand uses your proficiency modifier and spellcasting stat to determine its attack bonus. You can spend AP to command the hand as follows: <br>>For 1 AP, you can have the hand move up to 30 feet and attempt to strike a creature, dealing 4d6 bludgeoning and 4d6 unholy damage on a hit. <br>>For 2 AP, you can have the hand attempt to grapple a creature. A grappled creature takes 3d6 cold and 3d6 unholy damage at the start of each of its turns, and you are healed for the unholy damage dealt to the creature in this way. The hand can only grapple one creature at a time, and can't target creatures more than one size category larger than it.<br>>For 3 AP, you can have the hand move up to 30 feet and slam down, sending deathly cold air through all non-undead creatures in a 15 foot radius around it. They must make a Constitution saving throw or take 6d6 cold damage and have their movement speed set to 5 feet until the end of their next turn. A successful saving throw deals half damage and only halves their movement speed.<br><br>Casting this spell again removes the first hand. The hand is bound to the ground.",
    "empower": "Summon two hands. You command both hands at once with each action."
  },
  {
    "name": "Greymane's Golemform",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Earth",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "15 minutes",
    "desc": "You pull the earth up around you to place you at the center of a golem body constructed from earth. Your size increases to Huge, you gain 100 temporary hit points and resistance to all damage, and your attacks are heavy stone punches that deal 8d6 bludgeoning damage on hit, using either your Strength or your spellcasting stat for attack and damage bonuses. <br><br>When you cast this spell, designate a creature to protect. The target creature is visibly marked as your ward. Creatures that attack your ward grant you 1 AP and provoke a response attack from you. If your ward is reduced to 0 hit points, the spell ends immediately.",
    "empower": ""
  },
  {
    "name": "Tell the Tale",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Enchantment",
      "Fey",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "You take on the role of a fairy tale protagonist, convincing reality itself to favor you. You automatically succeed all ability checks for the duration. <br><br>If the spell is ended early by losing your concentration through taking damage, the karmic debt incurred by tricking reality immediately becomes due. You have disadvantage on all rolls for the remainder of the normal duration, and can't take a break or rest during this time.",
    "empower": ""
  },
  {
    "name": "The True Self",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Enchantment",
      "Shadow",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You transform into a copy of the target creature, except distinctly more nightmarish. You gain access to all of the creature's features, actions, spells, talents, proficiencies, and weapon styles.<br><br>You must attack or cast a spell that affects the target creature at least once on each of your subsequent turns. If you do not, the spell ends.<br><br>If the target is reduced to 0 hit points, the duration is increased to 15 minutes, and you no longer need to attack the target.",
    "empower": ""
  },
  {
    "name": "Rend",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Abjuration",
      "Draconic",
      "Space"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "Draconic claws slash through reality and create three 5 foot wide, 15 foot tall, 30 foot long lines within range, each line within 15 feet of another line and all three lines parallel to each other.<br><br>Any creature inside a line must make a Dexterity saving throw or be thrown through the rift. On a success, they are displaced into an adjacent empty space not occupied by a line and must make a Constitution saving throw or take 14d6 arcane damage, halved on a success. The lines remain for the duration.<br><br>Attacks and spells that pass through the lines are harmlessly shunted into an alternate plane. Creatures that are pushed into a line, or were thrown through the rift, are removed from the plane and can't take action until the end of the duration. <br><br>When the spell ends, all creatures within are thrown back through to their original locations, taking 20d6 arcane damage.",
    "empower": ""
  },
  {
    "name": "Xid's Rush of Fools",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Necromancy",
      "Spirit",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute ",
    "desc": "Up to twelve creature skulls are reanimated and transformed into rather simple-minded skeletons, placed in any empty space within range. They have 1 hit point, AC 12, and 50 feet movement speed. They take their turn after you. They cannot be commanded - they will always move towards the nearest hostile creature and make one attack using your proficiency modifier and spellcasting stat to determine attack and damage bonuses, dealing 1d8 unholy damage on a hit. A creature hit by any skeleton is automatically hit by all other skeletons that attack it this turn.<br><br>If a skeleton is killed, it immediately revives in the nearest empty space to you. All skeletons die when the spell ends.<br><br>Casting this spell again destroys the skeletons from the first cast.",
    "empower": "Summon up to thirty-six skeletons from an equal amount of skulls instead."
  },
  {
    "name": "Might",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Transmutation",
      "Draconic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute ",
    "desc": "Set your Strength and Constitution to 6 for the duration of the spell. If they are already at or above 6, increase it by 2 instead. You immediately gain hit points from your new Constitution score.",
    "empower": "Set both stats to 9, or increase them by 3 if they are already at 9 or higher."
  },
  {
    "name": "Lupusam's Biologia",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Necromancy",
      "Eldritch",
      "Water"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "1 hour",
    "desc": "You freely modify the stats, movement speed, resistances, immunities, and vulnerabilities of any biological creature you touch. You can set any stat up to double its current value, or down to its negative value. You can set movement speed from 0 to twice as much. A creature can have up to two immunities, and can have an additional immunity for every vulnerability it has.<br><br>An unwilling creature can make a Constitution saving throw to resist the effect. At the end of each of its turns while affected, it rolls 1d20, adding 1 for each time it makes this roll. On a roll of 16 or better, the spell ends. <br><br>The process is biologically taxing on the creature. If it is used on the same creature within 7 days of the last successful spell, the body violently rejects the changes, and the creature must succeed on a Constitution saving throw or take 30d10 poison damage, halved on a success.",
    "empower": ""
  },
  {
    "name": "Kuinu's Vengeance",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Abjuration",
      "Acid",
      "Fire",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Scintillating layers of acid and fire surround you. When you take damage from a weapon attack, acid bubbles and pops and spews forth, dealing 6d6 acid damage to the attacker and all other creatures in a 5 foot wide line to the attacker. When you take damage from a spell, waves of fire ignite the threads of magic and cause the offending caster to explode in a 15 foot radius, dealing 8d6 fire damage to the caster and all other creatures in range.",
    "empower": "Choose any number of willing creatures. They can't damage you and can't take damage from this spell for the duration."
  },
  {
    "name": "Gateway to the Infernal",
    "author": "CrusaderDroid",
    "tier": 8,
    "tags": [
      "Conjuration",
      "Fire",
      "Space",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "90 feet",
    "duration": "15 minutes",
    "desc": "You tear open a portal with a radius of up to 60 feet centered on a point within range, facing the direction of your choice. The portal opens a way to a plane filled with heat so intense it pours out in abundance. All creatures within 30 feet of the side of the opening must succeed on a Constitution saving throw or take 10d12 fire damage, halved on a success. Each time they end their turn within range, they must repeat the saving throw.<br><br>The portal prevents any movement or vision through itself while it remains. An unwise creature can enter the plane it is linked to through the portal.",
    "empower": ""
  },
  {
    "name": "Orbital Exile",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Target creature must succeed on a Strength saving throw or be propelled by winds into the atmosphere and remain there in geosynchronous orbit for the duration. The winds protect them from any harm they would take from the environment, and safely return the creature to their prior location after the spell ends.",
    "empower": "Choose one - duration increased to 15 minutes, targets a 15 foot radius within range instead, or the winds do not protect the creature on re-entry."
  },
  {
    "name": "Origin Ocean",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Water",
      "Delayed",
      "Sign"
    ],
    "cost": "8 AP",
    "range": "Self (300 foot cube)",
    "duration": "1 hour",
    "desc": "The area around you becomes submerged in water for the duration.<br><br>While you remain in the area, Water spells cost 0 AP. You restore 3 MP the first time you cast a Water spell each turn.<br><br>You can spend 3 AP to create up to 10 hit dice worth of beasts with a swim speed anywhere within the water. They are composed of water, and their creature type is changed to elemental. They take their turn after yours and follow your mental command.<br><br>The spell ends if you leave the area.",
    "empower": "You continuously spread the water as you move, increasing the area accordingly."
  },
  {
    "name": "Impervious",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Physical",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You are immune to all damage.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Fiefdom",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Earth",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Until dispelled",
    "desc": "You assert dominion over the surrounding area and dislodge it from the ground, causing it to float into the air. It gains a flight speed of 30 feet.<br><br>You can spend 1 AP to move the land with a mental command. You can spend 2 AP to have it attempt to crush all creatures directly underneath. Creatures with a Strength or Constitution below -1 are utterly crushed on hit and have their hit points reduced to 0. All other creatures must make a Strength saving throw or take 10d10 bludgeoning damage, halved on a success.<br><br>While you are on the land, casting this spell again grants the spell a range of 300 feet. A 30 foot radius sphere at the target point within range is carved out and merged with your current airborne land. You can spend 1 AP to separate your controlled land into multiple parts. You must move each part separately.<br><br>If you die, the land you've controlled falls to the ground. Creatures underneath are crushed as if you attacked them with the land.",
    "empower": "Targets three chunks of land within 300 feet that merge into one."
  },
  {
    "name": "Sacred Hope",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Holy",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Planar",
    "duration": "Instantaneous",
    "desc": "Any number of creatures you have known for at least 15 minutes have all of their hit points fully healed.<br><br>A creature must complete a rest before they can be affected by this spell again.",
    "empower": "Removes the AP cost on this spell."
  },
  {
    "name": "Sanctuary of Heavens",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Lightning",
      "Concentration",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "Self (60 foot radius)",
    "duration": "Until dispelled",
    "desc": "A towering spiral of clouds engulfs you and forms a 60 foot radius cylinder centered on you, as tall as the skies. You are hidden inside the clouds.<br><br>Any creature that tries to move into the clouds, or any creature anywhere that tries to attack you or target you with a spell, is immediately struck by lightning, taking 5d6 lightning damage. Their turn immediately ends, and their movement and action is interrupted.<br><br>You can't move or take any actions while concentrating on this spell, except to move vertically up and down the cylinder of clouds. Each time a creature is damaged, you lose 3 MP. If you can't afford the MP cost, the spell ends. If you are above the ground and can't fly when the spell ends, you fall.",
    "empower": ""
  },
  {
    "name": "Domain of the Ice Monarch",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Cold"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius)",
    "duration": "Permanent",
    "desc": "When you cast this spell, you permanently assert dominion over a 30 foot radius. Its temperature drops to chilling levels, leaving only you and creatures you choose unaffected. All other creatures in the area that start their turn inside must succeed on a Constitution saving throw or take 4d6 cold damage and have their movement speed halved. A creature that succeeds on their saving throw takes half damage and does not lose movement speed. Objects in this area take 25 cold damage at the start of each of your turns.<br><br>Objects created by your Cold spells inside this area have resistance to all damage and absorb cold damage. If a Cold spell you cast creates an object, it refunds 1 AP and half of its MP cost.<br><br>If you cast this spell again, you can choose to either grow your current effect radius by 30 feet, or discard it completely and start again at a new location.",
    "empower": "Radius increased to 90 feet. If cast again, you can grow it by 90 feet."
  },
  {
    "name": "Archon Form",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Arcane",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You turn yourself into a being of pure magic for the duration of the spell. Choose a spell of tier 5 or lower without the Concentration tag that you know. You can cast that spell for 1 AP and 0 MP for the duration of this spell.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Autosustaining Summoning",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Summoning",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You touch a magic effect with a duration of 10 minutes or more and attempt to modify the spell to last permanently. While you are casting this spell, the duration of the original effect is suspended.<br><br>After 8 hours of casting, the effect is made permanent. If it required concentration, it no longer requires concentration. It can no longer be ended unless dispelled.<br><br>This spell does not negate any other condition that would end a spell early. A spell that ends if the caster steps out of range will still end if the caster steps out of range even after the spell was made permanent.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Disintegration Field",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Acid",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (10 foot radius) ",
    "duration": "1 minute",
    "desc": "A thin, intensely acidic barrier forms around you out to 10 feet. Ranged projectiles that touch it are instantly disintegrated. Creatures that touch it immediately take 10d6 acid damage and must make a Constitution saving throw or take 10d6 additional acid damage, halved on a success. Damage dealt from this spell is deducted from creatures' maximum hit points.<br><br>You can spend 3 AP to have the field expand to 30 feet, then contract back to 10 feet.<br><br>A creature reduced to 0 hit points by this spell instantly disintegrates without a trace.",
    "empower": ""
  },
  {
    "name": "Apex of the Arcane",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Arcane",
      "Apocalyptic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (Minimum 120 foot radius)",
    "duration": "Special",
    "desc": "This spell can be cast as a ritual over the course of eight hours.<br><br>You create a dome of scintillating colors that envelops the area around you. This area is a 120 foot radius dome centered on you, increased by up to 1 mile when cast as a ritual.<br><br>Every spell cast through or within the dome restores MP to you equal to half the MP cost of the spell, rounded up. You can choose to instead expend MP equal to the spell's MP cost to cancel the spell's effect completely.<br><br>The duration when cast normally is 1 minute. When cast as a ritual, the duration is until dispelled.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Radiant Torrent",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Radiant",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "A massive beam of light emerges from your hands and continually blasts a 25 foot wide, 25 foot tall, 300 foot line in target direction. Creatures in this line or who move into it must make a Constitution saving throw or take 14d6 radiant damage, halved on a success.<br><br>You can't do anything during your turns while concentrating on this spell, except for moving and aiming the spell in a new direction. When you move your aim, the beam of light moves from its old direction to the new direction, causing every creature it passes through to make a saving throw to avoid damage.<br><br>Objects in the way of the beam are obliterated at the start of each of your turns.",
    "empower": ""
  },
  {
    "name": "Future Perfection",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Divination",
      "Psychic",
      "Concentration"
    ],
    "cost": "0 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "You foresee a victorious future. For the duration, the first time you fail a roll during each creature's turn, instead treat it as if you had rolled a 20.",
    "empower": ""
  },
  {
    "name": "Impose Reality",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Illusion",
      "Space"
    ],
    "cost": "3 AP",
    "range": "Self (300 foot radius)",
    "duration": "Instantaneous",
    "desc": "You move every creature and object within range to any point of your choosing within range. If an object is not fully contained in the area, you can move the part that is contained.<br><br>Objects that are moved into the air are permanently anchored to their new location, unable to move or be moved.",
    "empower": ""
  },
  {
    "name": "Heroic Return",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Necromancy",
      "Holy",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "30 feet ",
    "duration": "Instantaneous",
    "desc": "After 15 minutes, you name a creature that has died prematurely. If they are willing, they return to life in an empty space you choose, fully healed as if they had finished a rest.<br><br>This spell cannot revive a creature that has passed away from old age or natural causes.",
    "empower": "Removes the Ritual tag and sets the AP cost to 3."
  },
  {
    "name": "Hells Unleashed",
    "tier": 9,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute",
    "desc": "You reanimate every corpse within range. They keep all their capabilities they had in life, and are under your direct control for the duration of the spell.<br><br>You also animate 1d6+2 skeletons and 1d6+2 zombies within the area of the spell for the duration of the spell.<br><br>While this spell lasts, creatures you have animated by this spell or other Necromancy spells can't be reduced below 1 hit point.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Dragon Aspect",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Draconic"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Choose any dragon creature. You transform yourself into a hybrid between yourself and the chosen creature. You gain all of its movement speeds, resistances, immunities, features, and actions. Reduce the AP cost of its actions by 1, to a minimum of 1.",
    "empower": "Duration becomes 1 hour."
  },
  {
    "name": "Drowned Beckons",
    "tier": 9,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Water"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "8 hours",
    "desc": "Target creature must succeed on an Intuition saving throw. On a failure, it becomes charmed as inexplicable calls from the ocean beckon to it. It must use all its actions on each of its turns to find the nearest body of water to submerge itself in.<br><br>A submerged creature can repeat the saving throw at the end of each of its turns. On a success, the spell ends.<br><br>A creature that drowns while affected by this spell does not realize it is dead until another creature interacts with it, preventing it from being revived or reanimated until it realizes it is dead.<br><br>A creature that succeeds on its saving throw can't be targeted by this spell again.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Steal Shape",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Beast",
      "Fey",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Touch",
    "duration": "1 year and 1 day",
    "desc": "Target creature must succeed on an Intuition saving throw or be transformed into a beast of your choice with hit dice between 10 to 25. It becomes bound to you and must obey your commands, although it is not charmed.<br><br>The creature uses the beast's capabilities as its own and completely loses access to all of its prior capabilities, including features, talents, spells, and more. The creature replaces the beast's Knowledge, Intuition, and Willpower with its own stats, however. The transformation fully heals the creature in its new form.<br><br>When you cast this spell, you must set a condition that can be reasonably achieved over the course of the spell. \"Win this battle\" and \"Guard me for 6 months\" are a few examples. You cannot set a condition that would overtly lead to the creature's death, such as \"Until you kill yourself\" or \"When you touch lava\". The spell ends when the condition is achieved, and the spell fails if an invalid condition is given.<br><br>If the creature dies, they transform back to their original form.<br><br>If cast on a willing creature, the AP cost is reduced to 3.",
    "empower": "Add the Ritual tag. The spell now takes 10 minutes to cast regardless of target, and its duration becomes \"Until dispelled\"."
  },
  {
    "name": "Divide",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Eldritch",
      "Delayed"
    ],
    "cost": "4 AP",
    "range": "Self (90 foot radius)",
    "duration": "Instantaneous",
    "desc": "Divide the current and maximum hit points of all creatures in range, including you, by two. Divide all objects in half.",
    "empower": ""
  },
  {
    "name": "Lightning",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Lightning",
      "Delayed"
    ],
    "cost": "1-9 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "You target a creature you can see when you begin casting this spell, who knows they have been targeted by you. When you finish casting this spell, a bolt of lightning unerringly strikes the target creature if they are still within range. They take 4d6 lightning damage, plus 4d6 for each AP spent on the spell. The range increases by 90 feet for each AP spent past the first.",
    "empower": "Range becomes Planar. Damage per AP increases by 1d6. Maximum AP increases to 18."
  },
  {
    "name": "Death Knight Calling",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Necromancy",
      "Unholy"
    ],
    "cost": "3 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You touch the body of a dead creature and reach out to their spirit, asking them to serve you in exchange for power. If they accept, their body rises as a powerful death knight under your command.<br><br>A creature that rises as a death knight has the following effects: <br>>Their creature type becomes undead.<br>>Their hit dice are increased to equal yours if their total hit dice would be lower.<br>>Their Strength, Dexterity, and Constitution are increased by 2. If they would still be lower than 2, they are set to 2.<br>>They are immune to being charmed or frightened, absorb unholy damage, and are vulnerable to radiant damage.<br><br>Death knights retain their consciousness and morality. They follow your commands and cannot take an action that would injure you without your approval. If given no commands, a death knight will act on its own as it did in life.<br><br>A death knight reduced to 0 hit points is not destroyed or knocked unconscious, but is instead bound and contained within a black crystal that appears either in your possession, or at their prior location if you are dead. The crystal has 100 hit points, but if you are still alive, it is indestructible. You can release a death knight within a crystal during a rest, returning them to unlife and fully healing them as if they had finished a rest. If a crystal is destroyed, the death knight within is permanently killed.<br><br>You cannot cast this spell on yourself under any circumstances.",
    "empower": ""
  },
  {
    "name": "True Love's Kiss",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You kiss a dead, unconscious, or charmed creature, or a creature affected by Steal Shape, that you have known for at least a month and channel fey magic to rewrite their fate. The creature restores all of their hit points and maximum hit points and hit dice, has all conditions removed from them, and has all negative spell effects dispelled and all curses lifted.<br><br>After using this spell on a creature, casting this spell again instead allows you to channel love to the affected creature from any range as long as you can see them and they can see you. They are healed for half of their maximum hit points and have all conditions removed from them.",
    "empower": ""
  },
  {
    "name": "Mass Tornado",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Wind"
    ],
    "cost": "3 AP",
    "range": "90 feet ",
    "duration": "15 minutes",
    "desc": "This spell is similar to Tornado, except that you summon eight tornadoes instead. You choose the location and direction and size of each tornado.",
    "empower": "Size can be increased to a 20 foot radius and a 120 foot height. Creatures picked up by any tornado additionally take 3d6 bludgeoning damage."
  },
  {
    "name": "Lightform",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Radiant"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Until dispelled",
    "desc": "You transform your body into pure light. Weapon attacks deal no damage to you under any circumstances, and you absorb fire and radiant damage.<br><br>While in this form, your Radiant spells deal +2 damage per damage die rolled, and you can move to any point struck by one of your Radiant spells as part of that spell.<br><br>At the start of each of your turns, you lose 15 MP. If you can't pay that cost, the spell ends.",
    "empower": ""
  },
  {
    "name": "Stampede",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Beast",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "Summon any number and type of beasts with 5 or fewer hit dice in any number of empty spaces within range. You may additionally summon up to four beasts with a combined hit dice total of forty or less.<br><br>The beasts are permanently charmed by you. They will generally attack your foes, although you cannot command them.",
    "empower": "Radius increased to 90 feet."
  },
  {
    "name": "Hateful Plague",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Necromancy",
      "Disease"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius) ",
    "duration": "24 hours",
    "desc": "Waves of barely-visible spheres of concentrated plague emanate from you and embed themselves into any creature within range other than you, infecting them for the duration. While infected, a creature's maximum hit points is set to their current hit points, and all damage taken is dealt to both current and maximum hit points.<br><br>A creature can't drop below 1 hit point while infected. Taking damage that would cause them to drop below 1 hit point instead causes them to drop prone and writhe in agony for the duration.<br><br>At the start of each of your turns, the plague increases its radius by 30 feet.",
    "empower": ""
  },
  {
    "name": "Yielded Will",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Enchantment",
      "Spirit",
      "Delayed"
    ],
    "cost": "7 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "You grip at the spirits of all creatures within a 30 foot radius of target point within range that you can see. All creatures must make an Intuition saving throw. On a failure, you control their next turn.<br><br>A creature can willingly fail the saving throw to have advantage on all rolls it makes during that turn.<br><br>The spell requires you to be able to mentally command the targets, and ends abruptly if you are unconscious, even if there are creatures that failed the saving throw.",
    "empower": "Reduces the AP cost to 4."
  },
  {
    "name": "Opposition",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Divination",
      "Spirit"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "Spirits flood the target creature with visions of failure and destruction. The creature fails every roll it makes until the start of your next turn.<br><br>A creature can't be affected by this spell again until they complete a rest.",
    "empower": ""
  },
  {
    "name": "World of Ash",
    "tier": 9,
    "tags": [
      "Evocation",
      "Fire",
      "Apocalyptic",
      "Concentration",
      "Delayed"
    ],
    "cost": "12 AP",
    "range": "Self (1 mile radius)",
    "duration": "Instantaneous",
    "desc": "A ravaging wave of fire emanates from you in a 30 foot radius sphere.  Every object it touches is reduced to ash. Creatures other than you that touch the wave must make a Constitution saving throw or take 24d12 fire damage, halved on a success.<br><br>The area left behind is a blasted wasteland of ash and fire. While the wave is still traveling, creatures other than you that start their turn in the area must make a Constitution saving throw or take 8d12 fire damage, halved on a success.<br><br>At the start of each of your turns, the wave expands by 30 feet, plus 30 feet for every turn that has passed since you cast this spell. When it reaches the maximum range, the spell ends.<br><br>A creature that is reduced to 0 hit points by this spell is turned to ash.<br><br>If the spell ends early by any means, you take 30d12 fire damage. This damage cannot be prevented in any way. If you are reduced to 0 hit points in this way, you become ash. <br>(Delayed spells can be started without paying the full cost immediately. You must concentrate on the spell and pay at least 1 AP towards the cost every turn, or you lose concentration and the spell.)",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Inferno",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Fire",
      "Sign"
    ],
    "cost": "2 AP",
    "range": "Self (60 foot radius) ",
    "duration": "1 minute",
    "desc": "The area around you combusts and ignites into raging flames. Creatures other than you within range take 6d10 fire damage.<br><br>Your Fire spells that deal damage have their AP cost reduced to 1 AP and refund half the MP cost. Each Fire spell you cast causes the flames from this spell to burn hotter, dealing 3d10 fire damage to all other creatures in the area.<br><br>The spell ends if you leave the area.",
    "empower": "Fire spells now ignite their area of effect and add it to this spell's area."
  },
  {
    "name": "Ice Age",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Cold",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "300 feet",
    "duration": "1 minute",
    "desc": "While casting this spell, each time you end your turn having spent at least 1 AP casting this spell, two massive hailstones slam into the ground, each one targeting a different point within range. The hailstones occupy a 10 foot radius and displace creatures into the nearest adjacent empty space, and creatures within 20 feet of each hailstone on arrival must make a Dexterity saving throw or take 6d6 cold and 4d6 bludgeoning damage, halved on a success.<br><br>When you finish casting this spell, for each turn it took to cast this spell, you summon two more hailstones. Hailstones then remain for 1 minute, with AC 10 and 200 hit points. Hailstones are immune to damage before you finish casting the spell, and disappear if your spell is interrupted before you finish casting or you drop a hailstone on top of another hailstone.<br><br>Creatures can only take damage from one hailstone on each of your turns.",
    "empower": ""
  },
  {
    "name": "Deity's Divine Wrath",
    "tier": 9,
    "tags": [
      "Evocation",
      "Holy",
      "Apocalyptic",
      "Delayed"
    ],
    "cost": "9 AP",
    "range": "Self (120 foot radius)",
    "duration": "Instantaneous",
    "desc": "Every creature and object in range of the spell has their maximum hit points reduced by 400. Anything reduced to 0 hit points is utterly disintegrated without a trace.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Lasher Overrun",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Plant",
      "Delayed"
    ],
    "cost": "1-9 AP",
    "range": "90 feet",
    "duration": "1 hour",
    "desc": "For each AP spent casting this spell, four seeds flow from you to any target point within range and wait. When you finish casting the spell, all seeds bloom into vicious animated spiked vines, called lashers.<br><br>During your turn, you can command any number of lashers for 0 AP to attack. Lashers can attack any creature within 30 feet, using your spellcasting stat and proficiency modifier to determine its attack bonus. On a hit, it deals 1d8 piercing and 1d8 poison damage and pulls the creature to its location. A creature hit by a lasher is subsequently hit by all other lashers that attack it this turn. A lasher can only attack once on each of your turns.<br><br>Lashers have AC 14 and are destroyed if they take any damage.",
    "empower": "Number of seeds per AP spent increased to 6. Any number of lashers can be revived for 3 AP."
  },
  {
    "name": "Sea Leak",
    "tier": 9,
    "tags": [
      "Evocation",
      "Eldritch",
      "Poison",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 year",
    "desc": "You puncture a hole that allows the Sea of Possibility to leak through, flooding a 60 foot radius sphere centered on you. Every creature in range loses all damage resistance, immunities, absorptions, and reflects, then must make a Constitution saving throw. On a failure, they become vulnerable to poison damage, then take 5d10 poison damage as the Sea of Possibility poisons their very existence.<br><br>Creatures that start their turn inside the area must repeat the Constitution saving throw. If they have failed the saving throw, they must instead make Willpower saving throws, taking 10d6 poison damage on a failed saving throw, and half damage on a success.<br><br>Creatures regain their damage resistances, immunities, absorptions, and reflects 1 hour after leaving the area.<br><br>A creature reduced to 0 or fewer hit points while inside the spell's area of effect immediately becomes absorbed by the Sea of Possibility.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Sealed Fate",
    "tier": 9,
    "tags": [
      "Divination",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "Sight",
    "duration": "Permanent",
    "desc": "You learn every single event that will happen to target creature in the future. While you are alive, this path cannot be changed. A creature destined to die in one week's time, for instance, will always survive everything until that time, and will always succumb to what will kill them at the appointed time no matter what efforts are taken.<br><br>It is recommended not to cast this on yourself.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Skies of Fire",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Evocation",
      "Fire",
      "Concentration",
      "Ritual"
    ],
    "cost": "N/A",
    "range": "10 miles",
    "duration": "1 minute",
    "desc": "Immediately upon beginning to cast this spell, a thin pillar of fire rises from you and into the atmosphere, revealing your location until the spell ends. After 15 minutes of casting, you can select four 1 mile radius targets and four half-mile radius targets anywhere within range. The skies turn a terrifyingly beautiful orange-red as fire descends in manifold waves upon the targeted areas. Creatures with 10 or fewer hit dice are utterly incinerated if they start their turn in range, while all other creatures that start their turn in range must succeed on a Dexterity saving throw or take 100 fire damage, halved on a success. Objects with a size lower than Huge are incinerated, while Huge and larger objects take 100 fire damage at the start of each of your turns.<br><br>You can't move or take any other action while casting or concentrating on this spell.",
    "empower": ""
  },
  {
    "name": "Fade",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Illusion",
      "Shadow",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Until dispelled",
    "desc": "You become invisible for the duration.",
    "empower": "Reduces the duration to 24 hours and removes the Concentration tag."
  },
  {
    "name": "Breath of the Ancient",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Draconic"
    ],
    "cost": "3 AP",
    "range": "Self (90 foot cone)",
    "duration": "Instantaneous",
    "desc": "You call upon one of the ancient dragons that predates written history to breathe upon all creatures in range. They must make a saving throw using their lowest stat or take 20d8 damage of your choice and become frightened of you for 1 minute. A creature that succeeds takes half damage and becomes frightened of you until the end of your next turn. You can choose different damage types for each creature.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wasteland",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Acid",
      "Earth",
      "Delayed"
    ],
    "cost": "5 AP",
    "range": "Self (60 foot radius) ",
    "duration": "Instantaneous",
    "desc": "You grab the earth and infuse it with acid. Any number of spaces you choose erupt with acid, cracking the ground and making it difficult terrain. Creatures on any such space, or who enter a space during their turn, must make a Dexterity saving throw or take 8d10 acid damage, halved on a success.<br><br>The acid remains until another spell restores the terrain.",
    "empower": ""
  },
  {
    "name": "Timerift",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Time",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Until dispelled ",
    "desc": "A 20 foot radius sphere centered on target point within range that you can see is twisted and warped that any creature in the area or touching the area is shunted into a parallel timeline. While the spell lasts, they can't take any action.<br><br>Any creature that enters the area over the duration is similarly affected.<br><br>When the spell ends, all affected creatures reappear in the closest empty space to their original location and must succeed on an Intuition saving throw or be stunned until the end of their next turn.<br><br>At the start of each of your turns, you must pay 20 MP to keep concentrating on the spell. If you can't, the spell ends.",
    "empower": ""
  },
  {
    "name": "Umbral Split",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Shadow"
    ],
    "cost": "2 AP",
    "range": "Self ",
    "duration": "1 minute",
    "desc": "Your shadow gains a life of its own. It can take its turn after yours, following your mental orders. It can't attack, but it is otherwise an exact copy of you, including your current MP. All spells the shadow casts gain the Silent and Still tags.<br><br>The shadow can't take damage or be affected by anything, but if you are reduced to 0 hit points, the shadow instantly fades away.",
    "empower": "Your shadow sacrifices itself if you would be reduced to 0 hit points, setting your hit points equal to half your maximum hit points and negating any excess damage."
  },
  {
    "name": "Stunlock",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Enchantment",
      "Psychic",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "1 minute ",
    "desc": "Creatures you choose in the area must succeed on an Intuition saving throw or be stunned for the duration of the spell.<br><br>You can't move, attack, or use any non-Psychic spells while concentrating on this spell.",
    "empower": ""
  },
  {
    "name": "Time Crash",
    "tier": 9,
    "tags": [
      "Abjuration",
      "Time",
      "Apocalyptic",
      "Delayed"
    ],
    "cost": "20 AP",
    "range": "Planar",
    "duration": "1 minute",
    "desc": "Time violently stops in your current plane for everyone except you. Affected creatures are aware of the effect but unable to take any action or interact with the world in any way. Damage incurred by creatures during this time is delayed until the end of the spell.<br><br>When the spell ends, affected creatures must make an Intuition saving throw or become stunned for 1 minute as they try to process the sensory shock of being frozen in time. They can repeat the saving throw at the end of each of their turns. A creature that took damage during this time automatically fails the saving throw and is also frightened for the duration.",
    "empower": "You choose up to five other creatures in the same plane to be unaffected.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Grow Nature Guardian",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Transmutation",
      "Plant",
      "Summoning",
      "Delayed"
    ],
    "cost": "6 AP",
    "range": "30 feet",
    "duration": "Until destroyed",
    "desc": "You infuse life and intellect into a massive amount of plant matter and create a nature guardian - a towering being devoted to the protection of nature.<br><br>The nature guardian takes a shape you choose, but is always Gargantuan size, displacing everything in its tiles into the nearest adjacent empty tiles upon being summoned. It has AC 24 and 400 hit points, and uses your spellcasting stat for all of its own stats. Beasts and plants within 1 mile are permanently charmed by it.<br><br>The nature guardian takes its turn after yours. It is not under your control. If a creature it can see damages a beast or plant, or destroys terrain, it becomes enraged and targets that creature. It can use 1 AP to lash out with a vine as a weapon attack to deal 4d20 bludgeoning damage on a hit. It can use 2 AP to slam down and send a wave of greenery in a 60 foot wide, 120 foot long line that transforms the terrain into difficult terrain, which requires creatures in this range to make a Dexterity saving throw or take 6d20 bludgeoning damage and be restrained until the end of their next turn, and take half damage and not be restrained on a success. It can cast any Plant spell of tier 7 or lower that you know, ignoring MP costs. It has a movement speed of 20 feet.<br><br>You can't cast this spell again until the first nature guardian is destroyed.",
    "empower": ""
  },
  {
    "name": "Return to the Feral",
    "tier": 9,
    "tags": [
      "Enchantment",
      "Beast",
      "Apocalyptic"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Until dispelled",
    "desc": "All creatures with a Knowledge higher than -4 within a 40 foot radius sphere centered on a target point within range must succeed on an Intuition saving throw. On a failure, they become feral beasts incapable of anything other than basic survival instincts. Their Knowledge is set to -5, they lose the ability to speak, and they must attack any creature they see, moving as necessary to do so.<br><br>A creature damaged by an affected creature must also make an Intuition saving throw. On a failure, the spell spreads to them as well.<br><br>A creature that spends one week without damaging any creature is no longer affected by this spell. A creature that succeeds on their saving throw against this spell can't be affected by this spell again.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Arsenal of Ages",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Conjuration",
      "Physical",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "120 feet",
    "duration": "Until dispelled",
    "desc": "Roughly five feet above and behind your head, copies of every weapon known to civilization throughout the ages manifest. Now and for 3 AP on each of your turns, you can launch a volley of these weapons at high speeds in a direction. Every creature in a 15 foot wide line starting from you to target point within range must succeed on a Dexterity saving throw or take 6d10 slashing, 6d10 piercing, and 6d10 bludgeoning damage, halved on a success. Creatures can't resist this damage.<br><br>You can freely switch to any weapon you choose while concentrating on this spell by pulling a copy out from the mass of weapons. When you equip a weapon in this way, it has a +3 bonus to attack and damage rolls, and grants you one weapon style of your choice for that weapon.<br><br>At the start of each of your turns, you must pay 10 MP. If you can't, the spell ends, and any weapon created from this spell vanishes.",
    "empower": "Barrage cost reduced to 2 AP. Barrage can be used for 1 AP when targeting a point within 10 feet."
  },
  {
    "name": "Toxic Rapture",
    "author": "CrusaderDroid",
    "tier": 9,
    "tags": [
      "Necromancy",
      "Poison"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius)",
    "duration": "Instantaneous",
    "desc": "All poisoned creatures within range are paralyzed for the duration of their poisoned condition.<br><br>A creature that has been damaged can make a Constitution saving throw at the end of their turn. On a success, they are no longer paralyzed and can't be paralyzed by this spell again for 24 hours.",
    "empower": "Radius increased to 120 feet."
  }
];
