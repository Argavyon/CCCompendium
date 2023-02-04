const spellDatabase = [
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
    "name": "World's Cry",
    "tier": 1,
    "tags": [
      "Evocation",
      "Spirit"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You unleash a small portion of the world's pain upon a 15 foot cube adjacent to you. Creatures<br>inside must make an Intuition saving throw or take 2d10 damage. This damage has no type and<br>cannot be reduced or negated in any way.",
    "empower": "Damage increased to 3d10. If the creature is vulnerable to a damage type, they are<br>vulnerable to damage from this spell.",
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
    "desc": "You and all creatures you choose within range are magically bonded with the earth. All affected<br>creatures are unaffected by terrain hazards and penalties, and increase their movement speed<br>by 10 feet.<br>The spell ends for a creature if they are not touching the ground for more than 3 seconds.",
    "empower": "",
    "author": "CrusaderDroid"
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
    "name": "Challenger's Charge",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You break into a dash, ignoring difficult terrain and other creatures in the way, before leaping<br>forward onto a target point within range and slamming down with great force. Creatures within 5<br>feet of the point of impact must make a Strength saving throw or take 1d6 bludgeoning damage.<br>Creatures that have taken damage from this spell can't move away from you during their next<br>turn until they have successfully hit you with a weapon attack.",
    "empower": "Range increased to 60 feet.",
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
    "name": "Decipher Magic",
    "tier": 1,
    "tags": [
      "Divination",
      "Universal"
    ],
    "cost": "1 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You learn the properties of a specific magical effect in range. You know the spell's name, its<br>effects, and the level or overall strength of its original caster. When cast on a magic item, you<br>gain knowledge of its enchantment and any applicable conditions. When cast on a creature, you<br>can discern any spell effects affecting the creature as well as their properties.",
    "empower": "",
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
    "desc": "As a response to any action, you fling a mystic bolt at a target within range, dealing 1d6 arcane damage.",
    "empower": "Removes the AP cost on this spell.",
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
    "empower": "",
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
    "empower": "Targets an additional creature each time this spell is empowered.",
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
    "name": "Arcane Bolt",
    "tier": 1,
    "tags": [
      "Evocation",
      "Universal",
      "Arcane"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A solid bolt of pure magic forms from the palm of your hand and unerringly homes in on a<br>creature you can see within range, dealing 1d4+2 arcane damage on hit.",
    "empower": "For each time you Empower this spell, launch an additional bolt at another creature<br>within range. Multiple bolts can't strike the same creature.",
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
    "desc": "Summons a small spirit of pure water to assist you. Choose a creature in range. The creature is protected by a thin shimmering veil. They gain a swimming speed equal to their walking speed, and have advantage on saving throws made against any psionic or sound based spell or effect.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Mindburst",
    "tier": 1,
    "tags": [
      "Divination",
      "Psychic"
    ],
    "cost": "4 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You strike at the target creature's mind, dealing 4d6 psychic damage.",
    "empower": "The creature must succeed on an Intuition saving throw or take an additional 2d6 psychic damage, taking half of that damage on a success.",
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
    "desc": "Target creature must succeed on a Constitution saving throw or take 2d6 poison damage as a horrific boil emerges from their skin.<br><br>A creature can strike the boil with a weapon attack, causing it to burst into a hideous dark cloud that fills a 10 foot radius sphere for 1 minute. Creatures that start their turn in the cloud take 1d6 poison damage and are poisoned until the start of their next turn.",
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
    "desc": "A scintillating swarm of snowflakes surrounds you, chilling the air nearby. You gain a number of<br>temporary hit points equal to 1d10 plus your spellcasting modifier. While the temporary hit points<br>remain, you are invisible if you are obscured and have not attacked or cast a spell on your last<br>turn. Your invisibility ends when you attack or cast a spell.",
    "empower": "Also creates a cloud of fog in a 20 foot radius sphere centered on you, which remains<br>while you have temporary hit points from this spell. The fog lightly obscures creatures inside.",
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
    "name": "Explosive Aegis",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Fire"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You ready an explosive field around yourself. The first time a creature damages you in melee<br>before your next turn, it detonates and deals 1d12 fire damage to your attacker.",
    "empower": "Damage increased to 2d12. Other creatures you choose within 5 feet must make a<br>Dexterity save or take the same damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wind Sign",
    "tier": 1,
    "tags": [
      "Evocation",
      "Wind",
      "Sign"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "Strong winds pick up around a 30 foot radius sphere centered on a point you can see within range. The winds blow away fogs and gases and impose disadvantage on ranged weapon attacks that cross through this area.<br><br>While inside the area, your Wind spells have their AP cost reduced by 1, to a minimum of 1.",
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
    "name": "Magic Fist",
    "tier": 1,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Magical force surrounds your fist. The next unarmed attack you make before the end of your<br>next turn that hits your target sends them flying backwards 30 feet. If they collide with another<br>creature or object during this movement, they immediately stop and are knocked prone and take<br>an additional 1d12 bludgeoning damage.",
    "empower": "Removes the AP cost from this spell.",
    "author": "CrusaderDroid"
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
    "desc": "You scatter blessed dust in a 10 foot square within range. This dust does nothing to most creatures, but any undead creature that touches the dust by moving through it or interacting with a dusted object takes 2d6 radiant damage. A creature can only suffer this damage once on each of their turns, even if it would travel through dust created by multiple applications of this spell.",
    "empower": "Area increased to 15 feet.",
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
    "desc": "Spirit-filled winds surround you, opening the spirits of all creatures you choose within range.<br>Each affected creature restores 1 hit point for each AP they spend on their next turn.",
    "empower": "Removes the AP cost on this spell.",
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
    "name": "Cauterize",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Blessed fire burns an injury on a creature you can see, healing 1d6+2 hit points. This healing<br>benefits from bonuses to fire damage. In addition, the target is cured of the poisoned condition.",
    "empower": "Also burns away the weakest negative spell with a duration of 1 minute or less<br>affecting the creature. On a tie, you choose.",
    "author": "CrusaderDroid"
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
    "desc": "You create a simple protective field around a target creature in range or in a 10 foot radius area<br>centered on yourself. For each AP spent to cast this, the ward has 3 temporary hit points.<br>Creatures inside a warded area use the ward's hit points first when taking damage.<br>At the start of your next turn, the ward fades.",
    "empower": "Add your spellcasting modifier to the final hit point total.",
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
    "name": "Shadowy Grasp",
    "author": "Levi",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Physical",
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
    "desc": "A malignant wandering spirit makes contact with a target creature, who must succeed on a<br>Constitution saving throw or suffer 2d6 poison damage. Roll 1d4 on a failed saving throw to<br>determine if the target is poisoned, blind, frightened, or paralyzed until the end of your next turn.",
    "empower": "Damage increased to 3d6. On a successful saving throw, the target takes half<br>damage.",
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
    "name": "Fire Lash",
    "tier": 1,
    "tags": [
      "Evocation",
      "Fire"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A thin wave of fire reaches out from your hand and lashes at a target creature within range. It<br>must make a Dexterity saving throw or take 3d6 fire damage.",
    "empower": "Damage increases to 4d6. On a successful saving throw, the creature takes half<br>damage instead.",
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
    "name": "Moment of Opportunity",
    "tier": 1,
    "tags": [
      "Divination",
      "Holy"
    ],
    "cost": "1 AP",
    "range": "90 feet",
    "duration": "1 minute",
    "desc": "The target creature becomes poised to receive a vision of the right moment to act. If they would roll a 1 on an attack roll or saving throw during the spell's duration, it becomes a 20 instead, and the spell ends.",
    "empower": "Any roll equal to or less than the creature's proficiency modifier instead becomes a 20, and the spell ends.",
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
    "desc": "Intensely cold winds blow forth in a 15 foot wide, 90 foot long line. Creatures in the area must make a Constitution saving throw or take 3d6 cold damage and have their movement speed halved until the start of your next turn. Creatures that succeed on their saving throw take half damage.",
    "empower": "Damage increased to 5d6.",
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
    "name": "Constellation Gaze",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Eldritch",
      "Summoning",
      "Radiant",
      "Psychic",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "Your eyes become portals that welcome stellar beings. You are blinded while the spell remains<br>active, but you can precisely sense the presence of creatures within 60 feet. Once on each of<br>your turns, you can spend 1 AP to fix your gaze upon a creature, who must succeed on an<br>Intuition saving throw or take 1d6 radiant damage and be frightened of you until the start of your<br>next turn.",
    "empower": "Creatures remain frightened as long as they can see you. They can repeat the saving<br>throw at the end of each of their turns to end the effect early. A creature that is frightened and<br>targeted again takes an additional 1d6 psychic damage.",
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
    "name": "Scourge",
    "tier": 1,
    "tags": [
      "Evocation",
      "Unholy"
    ],
    "cost": "2 AP",
    "range": "90 feet",
    "duration": "Instantaneous",
    "desc": "A crackling blast of dark magic rushes from your chest towards a target creature within range that you can see. It must make a Dexterity saving throw or take 2d10 unholy damage. Creatures within 5 feet of the target take 1d10 unholy damage if the target fails their saving throw.",
    "empower": "Increases secondary damage range to 10 feet. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
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
    "desc": "A dead creature jerkily rises to life under your control. It is significantly weakened in this state - its maximum AP is reduced to 1 and cannot be increased, its movement speed is halved, and it is vulnerable to all damage. It can make one attack for 1 AP. It takes its turn after yours. Casting this spell again ends the spell on any existing targets.<br><br>When the spell expires, the creature's body is reduced to ash, consumed by the magic that animated it.",
    "empower": "Duration increased to 1 hour.",
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
    "name": "Acid Adder",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Acid",
      "Beast"
    ],
    "cost": "2 AP",
    "range": "60'",
    "duration": "1 minute",
    "desc": "Conjure a snake of translucent acid that is launched at a target within range. They must make a<br>Dexterity (save?), taking 2d6 acid damage on a failed save, or half as much on a successful<br>one.<br>At the start of each of your turns while the spell is active you can spend 1 AP to launch the<br>snake at another target.",
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
    "name": "Tear the Veil",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Eldritch",
      "Sign"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You tear apart a small part of the barrier between realms, causing a brief overlap with the realm of magic in a 30 foot radius centered on target point within range. Creatures in the area that cast spells take arcane damage equal to the MP cost of the spell.<br><br>Eldritch spells cast in this area cost 1 less AP.",
    "empower": "",
    "author": "CrusaderDroid"
  },
  {
    "name": "Minor Nightmare",
    "tier": 1,
    "tags": [
      "Illusion",
      "Summoning",
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
    "name": "Lightning Tether",
    "tier": 1,
    "tags": [
      "Evocation",
      "Lightning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "1 minute",
    "desc": "You tether yourself to a target creature with a stream of electricity six inches wide. The tether has a maximum length of 60 feet, and moving farther than 60 feet from your target ends the spell.<br><br>When you move, the tether moves with you. Any creature that touches the tether or starts their turn inside the tether's area takes 1d8 lightning damage. A creature can only take this damage once between each of your turns.",
    "empower": "Tether maximum range increased to 120 feet.",
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
    "desc": "With a wave of your hand, a volley of three multicolored arrows of light fly forth. Up to three<br>creatures within range must make a Dexterity saving throw or take 1d8 radiant damage.<br><br>Hit or miss, the arrows remain embedded in whatever they strike, radiating bright light out to 10<br>feet and revealing hidden or invisible creatures within range for the duration. A creature with an<br>arrow stuck in them can spend 1 AP to crush it and end the effect.",
    "empower": "Damage increases to 2d8. Fires an additional arrow at one more target.",
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
    "desc": "The target's vision briefly improves to where they can see two seconds into the future. The<br>target adds your spellcasting modifier to the next ranged attack they make, and adds your<br>spellcasting modifier to the damage done by any critical hit they make.",
    "empower": "The target can't have disadvantage on the attack roll.",
    "author": "CrusaderDroid"
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
    "name": "Waterspout Step",
    "tier": 1,
    "tags": [
      "Evocation",
      "Water"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Water bursts from the ground beneath you and catapults you up to 60 feet into the air.",
    "empower": "Removes the AP cost on this spell.",
    "author": "CrusaderDroid"
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
    "desc": "You appear to transform yourself into three separate foxes. You can't attack or cast spells in this<br>form, but you can move each fox separately during your turn. Each fox shares your AC, and if a<br>fox would take damage, it disappears.<br>At the start of your next turn, you choose one fox to reveal as yourself. If only one fox is left<br>remaining, the spell ends immediately. If all remaining foxes take damage simultaneously,<br>choose one fox to reveal as yourself.",
    "empower": "You transform into five foxes instead.",
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
      "Sign"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You amplify the gravity affecting a 60 foot radius sphere centered on a point within range. Creatures that are inside the area can't move as a response to actions, can't take the Dash action, and fall 30 feet at the end of their turns if they are flying.<br><br>While you are inside the area, your Earth spells cost 1 less AP to cast, to a minimum of 1.<br><br>The spell ends if you leave the area.",
    "empower": "",
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
    "name": "Disjunct",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Space"
    ],
    "cost": "1 AP",
    "range": "15 feet",
    "duration": "Instantaneous",
    "desc": "You teleport to target location within range. Any creature in that space is teleported to your former location.",
    "empower": "",
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
    "desc": "As a response to being targeted by a weapon attack, you turn yourself into an ethereal ghost. You are immune to physical damage until the start of your next turn, but vulnerable to fire and radiant damage. You can't make weapon attacks in this state.",
    "empower": "",
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
    "desc": "A creature corpse or a dead creature reanimated by one of your spells within range that you can see explodes into black flames. All creatures within 10 feet of the corpse must make a Dexterity saving throw or take 1d10 fire damage and 1d10 unholy damage. The target corpse or creature is utterly destroyed.",
    "empower": "Damage is increased to either 2d10 fire or 2d10 unholy. Creatures that succeed on their saving throw take half damage.",
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
    "name": "Seeker Bolt",
    "tier": 1,
    "tags": [
      "Evocation",
      "Lightning"
    ],
    "cost": "2 AP",
    "range": "120 feet",
    "duration": "Instantaneous",
    "desc": "You fire a large solid bolt of lightning that locks on to a creature within range and moves 30 feet<br>closer. At the start of each of your turns, if it has not collided with a creature or object, it moves<br>30 feet closer to the target. On impact with anything, it deals 3d10 lightning damage. Seeker<br>Bolt's damage is reduced to 1d10 if it hits a creature within 30 feet.<br>A creature can make a ranged attack targeting the bolt to destroy it. The bolt has AC 16 and<br>discharges on impact with any ranged projectile, destroying the bolt.",
    "empower": "At the start of your next turn, the bolt flies 120 feet towards the target.",
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
    "name": "Space Eater",
    "tier": 1,
    "tags": [
      "Conjuration",
      "Eldritch",
      "Space"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "You conjure a being from beyond that devours the empty space between you and a target<br>creature up to 30 feet away from you. The creature is pulled directly adjacent to you, and<br>everything in a 30 foot long, 5 foot wide line is moved an equal distance towards you. Objects<br>that are not fully contained within the area are unaffected.",
    "empower": "Reduces the AP cost to 1.",
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
    "desc": "Pitch-black thread winds around a target creature in range that you can see, who must make a<br>Dexterity saving throw. On a failure, they become bound (can't use AP to attack or cast non-Still<br>spells) for the duration.<br>The spell ends automatically if the creature moves out of range. The creature can spend 2 AP to<br>make a Strength saving throw, breaking free on a success.",
    "empower": "The spell no longer ends automatically when the creature moves out of range. AP<br>cost to attempt a save increases to 3.",
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
    "desc": "Target creature must succeed on a Constitution saving throw or have bits of their bone pulled through their skin, dealing 2d6 piercing damage. You gain temporary hit points equal to the damage dealt until the start of your next turn.<br><br>This spell is ineffective against creatures without a skeleton, such as elementals or oozes.",
    "empower": "Damage increased to 3d6. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Alchemical Waste",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You expel various waste products from alchemy in a 30 foot line. Creatures in the area of effect<br>must make a Dexterity saving throw or take 2d8 acid damage. Expunging this waste decreases<br>the cost of your next Transmutation spell before the end of your next turn by 1 AP.<br>~~Creatures without a soul are vulnerable to this spell's acid damage and take 3d8 acid<br>damage instead.~~",
    "empower": "Creatures that fail the saving throw are also poisoned until the start of your next turn.",
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
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You call a swarm of biting rats to attack a 15 foot radius centered on a target point within range. Every creature you choose in the area must succeed on a Dexterity saving throw or take 1d4 piercing and 1d4 poison damage.<br><br>A creature that takes poison damage contracts the Ratbite disease. When it uses a hit die to recover hit points, it only restores hit points equal to its Constitution. It can make a Constitution saving throw after using a hit die during a break to attempt to recover from the disease.",
    "empower": "Poison damage increased to 2d4. A successful saving throw deals half damage.",
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
    "name": "Wind Dome",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Wind"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "Exceedingly strong winds kick up around you, forming a dome 15 feet away from you. The winds lightly obscure you, and creatures that attempt to pass through the dome must make a Strength saving throw or be thrown away 10 feet. Ranged attacks aimed through the dome are thrown off course and automatically miss.<br><br>The dome dissipates at the start of your next turn.",
    "empower": "",
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
    "name": "Soften Surface",
    "tier": 1,
    "tags": [
      "Transmutation",
      "Acid"
    ],
    "cost": "2 AP",
    "range": "30 feet",
    "duration": "Instantaneous",
    "desc": "You spray acid covering a 10 foot cube within range. If it lands on an object that is completely contained within the area, the object becomes vulnerable to all physical damage.",
    "empower": "Area increased to a 15 foot cube.",
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
    "name": "Aqua Screen",
    "tier": 1,
    "tags": [
      "Abjuration",
      "Water"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "You create a thin film of water 15 feet long, 5 feet tall, and 1 inch thick anywhere within range that you can see. Ranged attacks that pass through the water have disadvantage, and fire attacks or spells that pass through the water deal half damage.",
    "empower": "Cost reduced to 1 AP.",
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
    "desc": "A 10 foot radius area centered on target point explodes into flames. Creatures inside must make<br>a Dexterity saving throw or take 1d6 fire damage.<br>At the start of your next turn, a 20 foot radius area centered on the same point explodes into<br>flames. Creatures inside must make a Dexterity saving throw or take 1d6 fire damage.",
    "empower": "Damage increases to 2d6 on both explosions. A creature that succeeds on their<br>saving throw takes half damage.",
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
    "name": "Noxious Cloud",
    "tier": 1,
    "tags": [
      "Evocation",
      "Disease"
    ],
    "cost": "3 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "A 20 foot radius sphere centered on a target point you can see erupts into a thin brown mist. Any creature in the area when it is created, as well as any creature that starts their turn inside of it or moves into it during their turn, must make a Constitution saving throw if they can breathe. On a failure, they lose 2 AP coughing and hacking.<br><br>The mist dissipates at the start of your next turn, or when a Wind spell affects its area.",
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
    "name": "Lull",
    "tier": 1,
    "tags": [
      "Enchantment",
      "Fey"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "1 minute",
    "desc": "A target creature must make an Intuition saving throw or become gradually more drowsy. At the<br>start of each of their turns, their maximum AP is reduced by 1 for the duration of the spell. A<br>creature that reaches 0 AP falls asleep for the remaining duration, or until forcefully woken up<br>by damage or an adjacent creature spending 2 AP to stir them awake.",
    "empower": "A creature that wakes up before the spell ends only has 1 AP on their next turn.",
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
    "name": "Silver Screen",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Physical",
      "Earth",
      "Radiant"
    ],
    "cost": "2 AP",
    "range": "Touch ",
    "duration": "1 hour",
    "desc": "You touch a surface and transform up to a 10 foot square on that surface into a brilliant silver substance. Choose one of the following effects: <br>>The surface becomes perfectly reflective. Light and projectiles bounce off it harmlessly, reflected away at an angle.<br>>The surface becomes transparent, enabling vision past up to 5 feet of solid matter through the surface.",
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
    "name": "Mother Bear's Fury",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Physical",
      "Beast",
      "Spirit"
    ],
    "cost": "2 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Instantaneous",
    "desc": "The spirit of the bear fills you with protective wrath. You can't be affected by effects that would reduce your AP until the start of your next turn, and you are immune to conditions and spells that would prevent you from acting.<br><br>When a creature friendly to you within range takes damage before the start of your next turn, you gain 1 AP until the end of your next turn, to a maximum of 3 AP. You can only spend this AP on weapon attacks or Physical spells.",
    "empower": "AP can stack up to 6 AP.",
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
    "name": "Strength of the Land",
    "author": "Levi",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Physical",
      "Earth",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "The energy of the earth beneath your feet flows through you and stabilizes you. For the duration, as long as you are on the ground, you are proficient in all Strength rolls and you have advantage on any saving throw against an effect that would forcibly move you or knock you prone.<br><br>If you have the Earth tag, this spell does not require concentration.<br><br>If you have the Water tag, you incorporate some fluidity to your stubbornness, and can choose to automatically succeed on saving throws against effects that would forcibly move you or knock you prone.",
    "empower": ""
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
    "name": "Phoenix Wave",
    "tier": 2,
    "tags": [
      "Evocation",
      "Beast",
      "Fire",
      "Radiant"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot radius) ",
    "duration": "Instantaneous",
    "desc": "Channeling the healing flames of the phoenix, you loose a wave of fire that radiates out from you in a 30 foot radius sphere. All creatures in range other than you must either make a Constitution saving throw or take 2d6 fire damage, or be healed for 2d6 hit points. You choose whether a creature is damaged or healed.<br><br>Flammable objects in the area burst into brilliant flames that shed light out to 30 feet.",
    "empower": "You are healed for 2d6 hit points. A successful saving throw deals half damage.",
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
    "name": "Grove of Warding",
    "tier": 2,
    "tags": [
      "Abjuration",
      "Plant",
      "Fey",
      "Space"
    ],
    "cost": "3 AP",
    "range": "10 feet",
    "duration": "24 hours",
    "desc": "When you cast this spell, you must also pay the MP cost for another spell with the Plant tag. You create a 10 foot radius circle of small mushrooms that contains the selected spell. You define the conditions that must be achieved before the spell is activated, such as \"when a creature steps inside\", or \"in one minute\". You can be as specific as necessary.<br><br>When the conditions are achieved, the spell is cast. If it requires concentration, the grove is considered to concentrate on it. Once the spell ends, the grove vanishes.",
    "empower": "",
    "author": "CrusaderDroid"
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
    "name": "Madden Beasts",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Disease",
      "Beast",
      "Psychic"
    ],
    "cost": "3 AP",
    "range": "60 feet ",
    "duration": "1 hour",
    "desc": "All beasts in a 15 foot radius centered on target point you can see must succeed on an Intuition saving throw or be driven berserk. They must attack the nearest creature they can see, and they must move to the nearest creature with all available movement if they can't currently attack a creature.<br><br>A beast that ends its turn without attacking takes 2d6 psychic damage.<br><br>Affected beasts can attempt the saving throw again upon reducing a creature to 0 or fewer hit points or taking psychic damage. On a success, the spell ends.",
    "empower": ""
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
    "name": "Feedback Blast",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Evocation",
      "Acid",
      "Arcane",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self (15 foot cone)",
    "duration": "Instantaneous",
    "desc": "Magically charged acid blasts forth in a 15 foot cone from your hands. Creatures in the area must make a Dexterity saving throw or take 8d4 acid damage. Creatures that succeed take half damage.<br><br>If any creature is affected by a spell, the acid seeps into the connection and feeds back into the original caster. The caster of that spell takes 10d4 acid damage and has disadvantage on any saving throw made to maintain concentration.",
    "empower": "Range increased to 20 foot cone."
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
    "name": "Flame Blossom",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire",
      "Summoning",
      "Plant"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "You summon a seed of the great Flame Oak, attached to a creature, object, or point within<br>range. The seed sheds dim light in a 15 foot radius and lasts for 1 hour, at which point it<br>vanishes. At any point, you may spend 1 AP to cause all seeds you have summoned to<br>violently detonate. Creatures within 20 feet of the seed must make a Dexterity saving throw.<br>Targets take 4d6 fire damage on a failure, or half damage on a success. Creatures within the<br>area of multiple detonations only take damage from one.",
    "empower": "You summon an additional seed.",
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
    "name": "Fire Cross",
    "tier": 2,
    "tags": [
      "Evocation",
      "Fire",
      "Holy"
    ],
    "cost": "2 AP",
    "range": "60 feet",
    "duration": "Instantaneous",
    "desc": "Two 15 foot long lines of fire descend upon a target creature in range, one parallel to you and one perpendicular to you, with the center of both lines centered on the target creature. Creatures in range must succeed on a Dexterity saving throw or take 3d8 fire damage, and the creature in the center must succeed on a Dexterity saving throw or take 5d8 fire damage. A successful saving throw reduces the damage by half.",
    "empower": "Line length increased to 25 feet. All creatures affected take 1d8 radiant damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Don't Trip Twice With The Same Stone",
    "author": "Argavyon",
    "tier": 2,
    "tags": [
      "Divination",
      "Earth",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 hour",
    "desc": "As a reaction to falling prone or as an action during your turn, you fall prone and gather the strands of fate to avoid falling again.<br>While this lasts and you are within 120 feet of the casting location, you cannot be knocked prone.",
    "empower": ""
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
    "name": "Forest's Eviction",
    "tier": 2,
    "tags": [
      "Evocation",
      "Plant",
      "Physical"
    ],
    "cost": "3 AP",
    "range": "Self (30 foot cone) ",
    "duration": "Instantaneous",
    "desc": "You create and swing a massive vine through a 30 foot cone. Creatures in the area must succeed on a Dexterity saving throw or take 5d6 bludgeoning damage and be knocked 20 feet away from you. A creature that collides with an object or terrain takes an additional 2d6 damage and falls prone.",
    "empower": "Creatures that succeed take half damage and are knocked back 5 feet instead.",
    "author": "CrusaderDroid"
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
    "name": "Dragon's Roar",
    "author": "Soreile",
    "tier": 2,
    "tags": [
      "Illusion",
      "Draconic",
      "Psychic"
    ],
    "cost": "2 AP",
    "range": "30 foot radius",
    "duration": "Instant",
    "desc": "You create a grand illusion of an ancient dragon for an instant, and it looses a mighty roar that rattles the minds of those who hear it. All targets in range must make an Intuition saving throw. On a failure, on their next turn they are frightened.",
    "empower": "All targets also take 2d6 psychic damage, halved on a successful save."
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
    "name": "Greymane's Stonefist",
    "author": "Argavyon ",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Earth",
      "Physical"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "During your turn or as a reaction to being dealt physical damage, you cover one of your limbs (or, if you lack limbs, create one that can only be used for a single attack) with stone. Your next unarmed attack will deal 2d6 bonus bludgeoning damage and end this spell.<br>You may do an unarmed attack once as part of casting this spell.<br>While this spell lasts, you gain resistance to your choice of slashing, piercing or bludgeoning damage.",
    "empower": "You cast two of your limbs with stone, with your next two unarmed strikes dealing bonus damage. The resistance from this spell lasts for the full 1 minute duration."
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
    "name": "Phantom Bows",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Physical",
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
    "name": "Plague Boils",
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
    "name": "Wolfcall",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Conjuration",
      "Beast",
      "Summoning",
      "Concentration"
    ],
    "cost": "2 AP",
    "range": "10 feet",
    "duration": "8 hours",
    "desc": "You call two wolves to your side. They obey your mental commands and fight until slain. When the spell ends, they vanish into the wind to wherever they came.<br><br>If the spell ends early, the wolves remain, but no longer obey your commands. They may still be allied to you depending on how you treated them.",
    "empower": "Summons a third wolf."
  },
  {
    "name": "Transfer Focus",
    "author": "CrusaderDroid",
    "tier": 2,
    "tags": [
      "Enchantment",
      "Arcane",
      "Psychic"
    ],
    "cost": "1 AP",
    "range": "Touch",
    "duration": "Instantaneous",
    "desc": "You either pass concentration of a spell to a willing target creature, or begin concentrating on the spell the willing target creature was concentrating on. The target must have the Spellcasting feature to transfer concentration, and you must not be concentrating on a spell to take over concentrating from a creature.",
    "empower": "Range increased to 60 feet."
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
    "name": "Control Light",
    "tier": 2,
    "tags": [
      "Illusion",
      "Radiant",
      "Shadow",
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
    "name": "Shockwave",
    "tier": 2,
    "tags": [
      "Evocation",
      "Physical"
    ],
    "cost": "2 AP",
    "range": "Self (special)",
    "duration": "Instantaneous",
    "desc": "You strike with enough force to send a rippling wave of raw power forward. Choose whether to strike in a 15 foot radius traveling along the ground or a 30 foot cone. Creatures in range must make a Strength saving throw. On a failure, they take 3d6 bludgeoning damage, and you choose whether they are knocked prone or pushed back 15 feet.",
    "empower": "You can choose both effects for a given creature. A successful saving throw deals half damage.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Impact Boon",
    "tier": 2,
    "tags": [
      "Transmutation",
      "Physical",
      "Concentration"
    ],
    "cost": "1 AP",
    "range": "Self",
    "duration": "1 minute",
    "desc": "A powerful aura envelops one of your currently equipped melee weapons. The first time you hit a creature with that weapon during your turns, the aura lashes out at all creatures adjacent to your target other than you, dealing bludgeoning damage equal to half the damage taken by the main target.",
    "empower": "",
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
    "name": "Distillation",
    "tier": 3,
    "tags": [
      "Transmutation",
      "Holy",
      "Poison"
    ],
    "cost": "3 AP",
    "range": "Self (60 foot radius) ",
    "duration": "7 days",
    "desc": "You pull in all the poison from a 60 foot radius around you, concentrating it into one vial. Every creature in range is cured of the poisoned condition, and all Poison tag spells in the area immediately end.<br><br>The created vial is lethally poisonous. If applied to a weapon or piece of ammunition, it deals an additional 2d6 poison damage the next time it deals damage. The damage increases by 1d6 for each poisoned creature and 3d6 for each Poison tag spell that was absorbed in the creation. If the vial's poison deals at least 5d6 damage, creatures damaged by it must make a Constitution saving throw or be paralyzed until the start of the attacker's next turn.",
    "empower": "",
    "author": "CrusaderDroid"
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
    "name": "Vineghast Calling",
    "tier": 3,
    "tags": [
      "Necromancy",
      "Summoning",
      "Plant",
      "Physical",
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
    "name": "Bane Barrier",
    "tier": 3,
    "tags": [
      "Abjuration",
      "Poison"
    ],
    "cost": "2 AP",
    "range": "Self",
    "duration": "Instantaneous",
    "desc": "As a response to being targeted by an attack or spell, you shield yourself with a barrier of sharp, poisonous quills. You have advantage on all saving throws and add your spellcasting stat to your AC until the start of your next turn. This can cause incoming attacks to miss.<br><br>If a creature was attempting to attack you in melee and missed, they must make a Constitution saving throw. On a failure, they take 6d4 poison damage and become poisoned for 1 minute. On a success, they take half damage and are not poisoned. They can repeat the saving throw at the end of each of their turns to end the poisoned effect early.",
    "empower": "AP cost reduced by 1.",
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
    "name": "Arcanist's Mist",
    "tier": 3,
    "tags": [
      "Conjuration",
      "Arcane",
      "Poison",
      "Concentration"
    ],
    "cost": "3 AP",
    "range": "90 feet",
    "duration": "10 minutes",
    "desc": "A fog of whatever color you choose is unleashed into a 30 foot radius sphere, centered on a target point you can see. The fog spreads around corners and through openings. It obscures vision outside of the fog, but not into the fog.<br><br>Creatures inside the fog when it forms, and who start their turn inside or move into it during their turn, must make a Constitution saving throw. On a failure, they inhale the fog. For the duration of the spell, they have an aura around them of the same color as the fog, visible only to you. You can see this aura even through walls and other obstructions.<br><br>An affected creature that is targeted by one of your spells suffers additional poison damage equal to the MP cost of your spell.",
    "empower": "",
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
    "name": "Eye of Laplace",
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
    "empower": "The damage is increased to 5d6. The target retains a glyph even if they succeed on their Wil save.",
    "author": "CrusaderDroid"
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
    "empower": "Initial damage increased to 2d4.",
    "author": "CrusaderDroid"
  },
  {
    "name": "Wine Wager",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Poison"
    ],
    "cost": "3 AP",
    "range": "Self",
    "duration": "1 year",
    "desc": "Target creature must succeed on an Intuition saving throw. On a failure, they become locked in a game of wits against you, as you create two glasses of wine. At least one glass of wine must be poisoned - a creature that drinks the poisoned wine takes 12d6 poison damage and must make a Constitution saving throw or fall unconscious for 1 hour.<br><br>The creature chooses which wine glass to drink from before both you and the creature drink at the same time. You cannot force the creature to choose, but it cannot leave without choosing before the spell ends. Once the creature drinks, you are compelled to drink as well.<br><br>The spell ends immediately if the creature takes damage from any other source other than this spell, or you are reduced to 0 or fewer hit points.<br><br>If you are clearly immune to poison damage, such as if you are undead or a construct, the creature automatically passes its Intuition saving throw.",
    "empower": "Instead of the normal effect, a creature that drinks the poisoned wine is immediately affected by any one of your Poison tag spells.",
    "author": "CrusaderDroid"
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
    "name": "Summon Harphest",
    "tier": 3,
    "tags": [
      "Enchantment",
      "Eldritch",
      "Summoning"
    ],
    "cost": "2 AP",
    "range": "Self (120 foot radius) ",
    "duration": "10 minutes",
    "desc": "You summon a Harphest - an intangible yet physical voice from the Sea of Possibility. It speaks honeyed madness into the ears of creatures within range. Now and at the start of each of your turns, up to six random creatures within range must make an Intuition saving throw. On a failure, on their next turn, they roll 1d20 to determine their action:<br>- On a roll of 1 to 5, the creature falls prone, screaming. Their turn ends.<br>- On a roll of 6 to 15, overlaying voices and visions distract the creature. They flail about, making one weapon attack on a random adjacent creature if possible. Their turn ends.<br>- On a roll of 16 to 20, the creature becomes frightened and loses 1 AP, but can act normally.<br><br>You cannot end this spell normally. You must make a DC 15 check with your spellcasting stat during your turn to end the spell. You have advantage on the check if you cast Containment Field during your turn.",
    "empower": "You can choose one target creature each turn.",
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
  }
];
