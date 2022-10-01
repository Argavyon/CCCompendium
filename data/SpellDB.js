const spellDatabase = [
	{"name":"Acid Adder","tier":1,"tags":["Conjuration","Acid","Beast"],"cost":"2 AP","range":"60'","duration":"1 minute","desc":"Conjure a snake of translucent acid that is launched at a target within range. They must make a<br>Dexterity (save?), taking 2d6 acid damage on a failed save, or half as much on a successful<br>one.<br>At the start of each of your turns while the spell is active you can spend 1 AP to launch the<br>snake at another target.","empower":""},
	{"name":"Aim True","tier":1,"tags":["Divination","Support"],"cost":"1 AP","range":"Touch","duration":"Instantaneous","desc":"The target's vision briefly improves to where they can see two seconds into the future. The<br>target adds your spellcasting modifier to the next ranged attack they make, and adds your<br>spellcasting modifier to the damage done by any critical hit they make.","empower":"The target can't have disadvantage on the attack roll."},
	{"name":"Alchemical Waste","tier":1,"tags":["Transmutation","Acid"],"cost":"2 AP","range":"30 feet","duration":"Instantaneous","desc":"You expel various waste products from alchemy in a 30 foot line. Creatures in the area of effect<br>must make a Dexterity saving throw or take 2d8 acid damage. Expunging this waste decreases<br>the cost of your next Transmutation spell before the end of your next turn by 1 AP.<br>~~Creatures without a soul are vulnerable to this spell's acid damage and take 3d8 acid<br>damage instead.~~","empower":"Creatures that fail the saving throw are also poisoned until the start of your next turn."},
	{"name":"Arcane Bolt","tier":1,"tags":["Evocation","Universal","Arcane"],"cost":"2 AP","range":"90 feet","duration":"Instantaneous","desc":"A solid bolt of pure magic forms from the palm of your hand and unerringly homes in on a<br>creature you can see within range, dealing 1d4+2 arcane damage on hit.","empower":"For each time you Empower this spell, launch an additional bolt at another creature<br>within range. Multiple bolts can't strike the same creature."},
	{"name":"Betrayal of Bone","tier":1,"tags":["Necromancy","Physical"],"cost":"2 AP","range":"30 feet","duration":"Instantaneous","desc":"Target creature must succeed on a Constitution saving throw or have bits of their bone pulled through their skin, dealing 2d6 piercing damage. You gain temporary hit points equal to the damage dealt until the start of your next turn.","empower":""},
	{"name":"Brilliant Arrows","tier":1,"tags":["Evocation","Fey","Radiant"],"cost":"1 AP","range":"120 feet","duration":"1 minute","desc":"With a wave of your hand, a volley of three multicolored arrows of light fly forth. Up to three<br>creatures within range must make a Dexterity saving throw or take 1d8 radiant damage.<br><br>Hit or miss, the arrows remain embedded in whatever they strike, radiating bright light out to 10<br>feet and revealing hidden or invisible creatures within range for the duration. A creature with an<br>arrow stuck in them can spend 1 AP to crush it and end the effect.","empower":"Damage increases to 2d8. Fires an additional arrow at one more target."},
	{"name":"Carried Burden","tier":1,"tags":["Necromancy","Holy"],"cost":"X AP","range":"Self (30 foot radius)","duration":"Instantaneous","desc":"You take the burden of weak flesh from creatures you choose within range and put it upon yourself. Every chosen creature other than yourself is healed for 1d6 hit points, plus additional healing equal to your spellcasting stat times the number of AP spent to cast this spell.<br><br>At the start of your next turn, you must make a Constitution saving throw with a DC equal to half the damage healed, to a maximum of 25. On a failure, you lose AP equal to the spell's AP cost as the burden proves too heavy for you. You repeat this saving throw at the start of each of your turns until you succeed, with the DC dropping by 5 on each failure.","empower":"Healing increased to 2d6."},
	{"name":"Cauterize","tier":1,"tags":["Evocation","Fire","Holy","Healing"],"cost":"2 AP","range":"60 feet","duration":"Instantaneous","desc":"Blessed fire burns an injury on a creature you can see, healing 1d6+2 hit points. This healing<br>benefits from bonuses to fire damage. In addition, the target is cured of the poisoned condition.","empower":"Also burns away the weakest negative spell with a duration of 1 minute or less<br>affecting the creature. On a tie, you choose."},
	{"name":"Challenger's Charge","tier":1,"tags":["Transmutation","Physical","Mobility"],"cost":"1 AP","range":"30 feet","duration":"Instantaneous","desc":"You break into a dash, ignoring difficult terrain and other creatures in the way, before leaping<br>forward onto a target point within range and slamming down with great force. Creatures within 5<br>feet of the point of impact must make a Strength saving throw or take 1d6 bludgeoning damage.<br>Creatures that have taken damage from this spell can't move away from you during their next<br>turn until they have successfully hit you with a weapon attack.","empower":"Range increased to 60 feet."},
	{"name":"Constellation Gaze","tier":1,"tags":["Transmutation","Eldritch","Summoning","Radiant","Psychic Concentration"],"cost":"2 AP","range":"Self","duration":"1 minute","desc":"Your eyes become portals that welcome stellar beings. You are blinded while the spell remains<br>active, but you can precisely sense the presence of creatures within 60 feet. Once on each of<br>your turns, you can spend 1 AP to fix your gaze upon a creature, who must succeed on an<br>Intuition saving throw or take 1d6 radiant damage and be frightened of you until the start of your<br>next turn.","empower":"Creatures remain frightened as long as they can see you. They can repeat the saving<br>throw at the end of each of their turns to end the effect early. A creature that is frightened and<br>targeted again takes an additional 1d6 psychic damage."},
	{"name":"Corpse Explosion","tier":1,"tags":["Necromancy","Unholy","Fire"],"cost":"2 AP","range":"90 feet","duration":"Instantaneous","desc":"A creature corpse or a dead creature reanimated by one of your spells within range that you can see explodes into black flames. All creatures within 10 feet of the corpse must make a Dexterity saving throw or take 1d10 fire damage and 1d10 unholy damage. The target corpse or creature is utterly destroyed.","empower":""},
	{"name":"Crushing Aura","tier":2,"tags":["Conjuration","Space","Physical","Concentration"],"cost":"3 AP","range":"Self (30 foot radius)","duration":"1 minute","desc":"You project a field around you that amplifies the gravity in the area. You and all other creatures inside have your movement reduced to 5 feet and cannot fly. Other creatures take 1d6 bludgeoning damage at the start of each of their turns. Creatures in the area that are flying crash to the ground, taking 1d6 bludgeoning damage per 5 feet fallen.<br><br>Once on each of your turns, you can spend 1 AP to intensify the effect on a creature within range. It must succeed on a Strength saving throw or take 1d12 bludgeoning damage and be knocked prone.","empower":"Your movement speed is halved instead."},
	{"name":"Decipher Magic","tier":1,"tags":["Divination","Universal","Utility"],"cost":"1 AP","range":"120 feet","duration":"Instantaneous","desc":"You learn the properties of a specific magical effect in range. You know the spell's name, its<br>effects, and the level or overall strength of its original caster. When cast on a magic item, you<br>gain knowledge of its enchantment and any applicable conditions. When cast on a creature, you<br>can discern any spell effects affecting the creature as well as their properties.","empower":""},
	{"name":"Dragon Claws","tier":1,"tags":["Transmutation","Draconic","Physical"],"cost":"1 AP","range":"Self","duration":"1 minute","desc":"You transform your hands into large dragon claws. They use either your Strength or your<br>Dexterity to determine your attack and damage bonus, and deal 1d8 slashing damage on a hit.<br>You can't attack with your claws if they are carrying a weapon or shield.<br>While the spell is active, you can make one attack with your claws for 1 AP if both hands are<br>empty.","empower":"The claws grow sharper and deal 1d10 damage instead. A creature struck twice in<br>one turn by your claws takes bonus damage equal to your spellcasting modifier."},
	{"name":"Dragonfear","tier":1,"tags":["Illusion","Draconic","Concentration"],"cost":"2 AP","range":"90 feet","duration":"1 minute","desc":"Target creature perceives you as a fearsome dragon. At the start of each of its turns, it must make an Intuition saving throw. On a failure, it becomes frightened of you as long as it can see you until the spell ends.","empower":"Targets an additional creature each time this spell is empowered."},
	{"name":"Earthfriend","tier":1,"tags":["Transmutation","Earth","Spirit","Support","Mobility","Concentration"],"cost":"2 AP","range":"Self (10 foot radius)","duration":"1 minute","desc":"You and all creatures you choose within range are magically bonded with the earth. All affected<br>creatures are unaffected by terrain hazards and penalties, and increase their movement speed<br>by 10 feet.<br>The spell ends for a creature if they are not touching the ground for more than 3 seconds.","empower":""},
	{"name":"Explosive Aegis","tier":1,"tags":["Abjuration","Fire"],"cost":"1 AP","range":"Self","duration":"Instantaneous","desc":"You ready an explosive field around yourself. The first time a creature damages you in melee<br>before your next turn, it detonates and deals 1d12 fire damage to your attacker.","empower":"Damage increased to 2d12. Other creatures you choose within 5 feet must make a<br>Dexterity save or take the same damage."},
	{"name":"Fire Lash","tier":1,"tags":["Evocation","Fire"],"cost":"2 AP","range":"60 feet","duration":"Instantaneous","desc":"A thin wave of fire reaches out from your hand and lashes at a target creature within range. It<br>must make a Dexterity saving throw or take 3d6 fire damage.","empower":"Damage increases to 4d6. On a successful saving throw, the creature takes half<br>damage instead."},
	{"name":"Flame Blossom","tier":2,"tags":["Evocation","Fire","Summoning","Plant"],"cost":"2 AP","range":"60 feet","duration":"Instantaneous","desc":"You summon a seed of the great Flame Oak, attached to a creature, object, or point within<br>range. The seed sheds dim light in a 15 foot radius and lasts for 1 hour, at which point it<br>vanishes. At any point, you may spend 1 AP to cause all seeds you have summoned to<br>violently detonate. Creatures within 20 feet of the seed must make a Dexterity saving throw.<br>Targets take 4d6 fire damage on a failure, or half damage on a success. Creatures within the<br>area of multiple detonations only take damage from one.","empower":"You summon an additional seed."},
	{"name":"Fox Hunt","tier":1,"tags":["Illusion","Fey","Beast"],"cost":"2 AP","range":"Self","duration":"Instantaneous","desc":"You appear to transform yourself into three separate foxes. You can't attack or cast spells in this<br>form, but you can move each fox separately during your turn. Each fox shares your AC, and if a<br>fox would take damage, it disappears.<br>At the start of your next turn, you choose one fox to reveal as yourself. If only one fox is left<br>remaining, the spell ends immediately. If all remaining foxes take damage simultaneously,<br>choose one fox to reveal as yourself.","empower":"You transform into five foxes instead."},
	{"name":"Gloom Crush","tier":2,"tags":["Enchantment","Shadow","Fey","Concentration"],"cost":"2 AP","range":"90 feet","duration":"1 minute","desc":"Overwhelming melancholy surges through a 20 foot radius sphere centered on a target area in range. Each creature in the area must make an Intuition saving throw or fall victim to this melancholy, increasing all AP costs by 1 for the duration.","empower":""},
	{"name":"Grasping Shade","tier":1,"tags":["Transmutation","Shadow"],"cost":"1 AP","range":"60 feet","duration":"Instantaneous","desc":"Your shadow extends out to grab at an object or creature. An unwilling creature must make a Dexterity saving throw to avoid being grabbed. On a failure, you drag yourself through your shadow to an adjacent empty space to your target, optionally dealing 2d4 slashing damage.","empower":"Removes the AP cost."},
	{"name":"Grass Slicer","tier":1,"tags":["Evocation","Wind"],"cost":"2 AP","range":"30 feet","duration":"Instantaneous","desc":"A razor sharp wind emanates from you and slices through the ground in a 15 foot wide, 30 foot long line. Creatures in the way must make a Dexterity saving throw or take 3d4 slashing damage. Creatures not in contact with the ground are unaffected.","empower":"The line extends to 45 feet. Creatures that succeed on their saving throw take half damage."},
	{"name":"Haunting Chill","tier":1,"tags":["Necromancy","Cold","Spirit"],"cost":"1 AP","range":"90 feet","duration":"Instantaneous","desc":"A target creature you can see must make a Constitution saving throw or become haunted by a clinging chill. The next three times they take damage before the start of your next turn, they take an additional 1d6 cold damage. A creature that takes damage from this spell three times has their movement speed reduced to 0 until the start of your next turn, and can't use AP outside of their turn.","empower":""},
	{"name":"Heat Shock","tier":1,"tags":["Evocation","Fire"],"cost":"2 AP","range":"60 feet","duration":"Instantaneous","desc":"A 10 foot radius area centered on target point explodes into flames. Creatures inside must make<br>a Dexterity saving throw or take 1d6 fire damage.<br>At the start of your next turn, a 20 foot radius area centered on the same point explodes into<br>flames. Creatures inside must make a Dexterity saving throw or take 1d6 fire damage.","empower":"Damage increases to 2d6 on both explosions. A creature that succeeds on their<br>saving throw takes half damage."},
	{"name":"Lull","tier":1,"tags":["Enchantment","Fey","Control"],"cost":"2 AP","range":"60 feet","duration":"1 minute","desc":"A target creature must make an Intuition saving throw or become gradually more drowsy. At the<br>start of each of their turns, their maximum AP is reduced by 1 for the duration of the spell. A<br>creature that reaches 0 AP falls asleep for the remaining duration, or until forcefully woken up<br>by damage or an adjacent creature spending 2 AP to stir them awake.","empower":"A creature that wakes up before the spell ends only has 1 AP on their next turn."},
	{"name":"Magic Fist","tier":1,"tags":["Evocation","Physical"],"cost":"1 AP","range":"Self","duration":"Instantaneous","desc":"Magical force surrounds your fist. The next unarmed attack you make before the end of your<br>next turn that hits your target sends them flying backwards 30 feet. If they collide with another<br>creature or object during this movement, they immediately stop and are knocked prone and take<br>an additional 1d12 bludgeoning damage.","empower":"Removes the AP cost from this spell."},
	{"name":"Moment of Opportunity","tier":1,"tags":["Divination","Holy"],"cost":"1 AP","range":"90 feet","duration":"1 minute","desc":"The target creature becomes poised to receive a vision of the right moment to act. If they would roll a 1 on an attack roll or saving throw during the spell's duration, it becomes a 20 instead, and the spell ends.","empower":"Any roll equal to or less than the creature's proficiency modifier instead becomes a 20, and the spell ends."},
	{"name":"Northern Cross","tier":3,"tags":["Conjuration","Holy","Sign"],"cost":"3 AP","range":"Self (30 foot radius)","duration":"1 minute","desc":"A brilliant constellation forms 200 feet above you, creating a cylinder that covers a 30 foot radius centered on you. This area has the following effects: <br>- When a creature is healed, you can choose to add your spellcasting stat to the healing received. <br>- Shadow and Unholy spells in the area are dispelled. Creatures inside can't be targeted or affected by Shadow or Unholy spells, and a creature affected by them that enters the area is freed of their effects.<br>- Your Holy spells cost 1 less AP, to a minimum of 1 AP, while you are in the area.","empower":""},
	{"name":"Outer Beckons","tier":1,"tags":["Conjuration","Eldritch","Summoning"],"cost":"2 AP","range":"90 feet","duration":"10 minutes","desc":"Distracting and disturbing whispers haunt the target, who must succeed on an Intuition saving throw. On a failure, every time it makes an attack roll or ability check, it rolls 1d6 and subtracts the result from its roll.<br><br>The creature can repeat the saving throw at the end of each of its turns where it fails an attack roll or ability check. On a success, the spell ends.","empower":"Range becomes Sight."},
	{"name":"Puppeteer","tier":1,"tags":["Necromancy","Unholy","Summoning"],"cost":"3 AP","range":"90 feet","duration":"1 minute","desc":"A dead creature jerkily rises to life under your control. It is significantly weakened in this state - its maximum AP is reduced to 1 and cannot be increased, its movement speed is halved, and it is vulnerable to all damage. It can make one attack for 1 AP. It takes its turn after yours. Casting this spell again ends the spell on any existing targets.","empower":""},
	{"name":"Sable Reflection","tier":5,"tags":["Conjuration","Space","Shadow"],"cost":"3 AP","range":"Self (60 foot line)","duration":"Instantaneous","desc":"From your current location, you create a line of ethereal glass 10 feet tall that extends out to 60 feet. Choose one side of the glass - all creatures up to 30 feet away from the glass on that side are reflected as shadowy figures on the other side, preserving their relative position to the mirror.<br><br>The shadows take their turn immediately after the original. They are under your complete mental control and are otherwise an exact copy of the original creature.<br><br>At the start of your next turn, the glass and all shadows disappear.","empower":"One shadow immediately takes a turn."},
	{"name":"Sacred Shard","tier":1,"tags":["Conjuration","Physical","Radiant","Holy"],"cost":"2 AP","range":"60 feet","duration":"1 minute","desc":"A longsword-sized shard of holy metal descends from the sky onto a target point in range. If a creature is occupying the area, it must make a Dexterity saving throw or take 1d8 slashing and 1d8 radiant damage.<br><br>The shard can be picked up and wielded by you as a weapon. It is treated as a longsword that deals an additional 1d4 radiant damage on hit. No other creature can move the shard.","empower":"The shard gains a bonus to its attack and damage rolls equal to half your proficiency modifier, rounded down."},
	{"name":"Seeker Bolt","tier":1,"tags":["Evocation","Lightning"],"cost":"2 AP","range":"120 feet","duration":"Instantaneous","desc":"You fire a large solid bolt of lightning that locks on to a creature within range and moves 30 feet<br>closer. At the start of each of your turns, if it has not collided with a creature or object, it moves<br>30 feet closer to the target. On impact with anything, it deals 3d10 lightning damage. Seeker<br>Bolt's damage is reduced to 1d10 if it hits a creature within 30 feet.<br>A creature can make a ranged attack targeting the bolt to destroy it. The bolt has AC 16 and<br>discharges on impact with any ranged projectile, destroying the bolt.","empower":"At the start of your next turn, the bolt flies 120 feet towards the target."},
	{"name":"Shadow Thread","tier":1,"tags":["Conjuration","Spirit","Shadow","Control","Concentration"],"cost":"2 AP","range":"60 feet","duration":"1 minute","desc":"Pitch-black thread winds around a target creature in range that you can see, who must make a<br>Dexterity saving throw. On a failure, they become bound (can't use AP to attack or cast non-Still<br>spells) for the duration.<br>The spell ends automatically if the creature moves out of range. The creature can spend 2 AP to<br>make a Strength saving throw, breaking free on a success.","empower":"The spell no longer ends automatically when the creature moves out of range. AP<br>cost to attempt a save increases to 3."},
	{"name":"Simple Ward","tier":1,"tags":["Abjuration","Universal","Arcane"],"cost":"Up to 3 AP","range":"Touch","duration":"Instantaneous","desc":"You create a simple protective field around a target creature in range or in a 10 foot radius area<br>centered on yourself. For each AP spent to cast this, the ward has 3 temporary hit points.<br>Creatures inside a warded area use the ward's hit points first when taking damage.<br>At the start of your next turn, the ward fades.","empower":"Add your spellcasting modifier to the final hit point total."},
	{"name":"Soul Sear","tier":1,"tags":["Necromancy","Unholy"],"cost":"2 AP","range":"90 feet","duration":"Instantaneous","desc":"A ghostly beam of dark magic extends from your palm to a creature you can sense, passing through all other objects and creatures. The target creature must succeed on a Constitution saving throw or take 3d6 unholy damage. A creature reduced to 0 hit points from this spell has their soul burned out of their body, leaving behind a body perfect for future use. Casting a Necromancy spell on such a body refunds half the MP cost used for the spell.","empower":""},
	{"name":"Space Eater","tier":1,"tags":["Conjuration","Eldritch","Space","Utility"],"cost":"2 AP","range":"Self","duration":"Instantaneous","desc":"You conjure a being from beyond that devours the empty space between you and a target<br>creature up to 30 feet away from you. The creature is pulled directly adjacent to you, and<br>everything in a 30 foot long, 5 foot wide line is moved an equal distance towards you. Objects<br>that are not fully contained within the area are unaffected.","empower":"Reduces the AP cost to 1."},
	{"name":"Spark of Joy","tier":1,"tags":["Enchantment","Fey","Silent"],"cost":"1 AP","range":"Touch","duration":"10 minutes","desc":"You touch a creature, which must succeed on an Intuition saving throw. On a failure, the creature is flooded with feelings of joy. If they are not fighting you, they are charmed by you for the duration, unless you or your allies take action that would offend them.<br><br>If cast on a creature fighting you, the sudden rush of emotion disorients the creature instead of its usual effect. It loses 1 AP on its next turn and loses all AP it currently possesses.<br><br>A creature that succeeds on its saving throw knows you attempted to charm them.","empower":""},
	{"name":"Spirit Artery","tier":1,"tags":["Conjuration","Spirit","Healing"],"cost":"1 AP","range":"Self (30 foot radius)","duration":"Instantaneous","desc":"Spirit-filled winds surround you, opening the spirits of all creatures you choose within range.<br>Each affected creature restores 1 hit point for each AP they spend on their next turn.","empower":"Removes the AP cost on this spell."},
	{"name":"Summon Cave","tier":1,"tags":["Conjuration","Draconic","Earth"],"cost":"2 AP","range":"Self (15 foot radius)","duration":"Instantaneous","desc":"The earth rises around you to form a dome with a radius of 15 feet centered on you. One side of the dome, a 90 degree arc, is left open. You choose which side is open.<br><br>The newly formed cave is dark, unless light is inside or can get through the opening. The cave has AC 10 and 50 hit points. If its hit points are reduced to 0, the spell ends immediately as the cave collapses.","empower":"The cave has resistance to physical damage."},
	{"name":"Treasure Sense","tier":1,"tags":["Divination","Draconic"],"cost":"2 AP","range":"1 mile","duration":"Instantaneous","desc":"Within the spell's range, you become aware of the most valuable  collection of riches. You obtain a mental image of the collection and a 5 foot radius surrounding it.<br><br>The spell ignores all treasure within 10 feet of you.","empower":"You also sense the current direction of the collection."},
	{"name":"Vexatious Traveler","tier":1,"tags":["Conjuration","Spirit","Poison","Disease"],"cost":"2 AP","range":"60 feet","duration":"Instantaneous","desc":"A malignant wandering spirit makes contact with a target creature, who must succeed on a<br>Constitution saving throw or suffer 2d6 poison damage. Roll 1d4 on a failed saving throw to<br>determine if the target is poisoned, blind, frightened, or paralyzed until the end of your next turn.","empower":"Damage increased to 3d6. On a successful saving throw, the target takes half<br>damage."},
	{"name":"Wind Dome","tier":1,"tags":["Abjuration","Wind"],"cost":"2 AP","range":"Self","duration":"Instantaneous","desc":"Exceedingly strong winds kick up around you, forming a dome 15 feet away from you. The winds lightly obscure you, and creatures that attempt to pass through the dome must make a Strength saving throw or be thrown away 10 feet. Ranged attacks aimed through the dome are thrown off course and automatically miss.<br><br>The dome dissipates at the start of your next turn.","empower":""},
	{"name":"Wind Sign","tier":1,"tags":["Evocation","Wind","Sign"],"cost":"2 AP","range":"60 feet","duration":"1 minute","desc":"Strong winds pick up around a 30 foot radius sphere centered on a point you can see within range. The winds blow away fogs and gases and impose disadvantage on ranged weapon attacks that cross through this area.<br><br>While inside the area, your Wind spells have their AP cost reduced by 1, to a minimum of 1.","empower":""},
	{"name":"Wintercloak","tier":1,"tags":["Abjuration","Cold","Fey"],"cost":"2 AP","range":"Self","duration":"1 minute","desc":"A scintillating swarm of snowflakes surrounds you, chilling the air nearby. You gain a number of<br>temporary hit points equal to 1d10 plus your spellcasting modifier. While the temporary hit points<br>remain, you are invisible if you are obscured and have not attacked or cast a spell on your last<br>turn. Your invisibility ends when you attack or cast a spell.","empower":"Also creates a cloud of fog in a 20 foot radius sphere centered on you, which remains<br>while you have temporary hit points from this spell. The fog lightly obscures creatures inside."},
	{"name":"World's Cry","tier":1,"tags":["Evocation","Spirit"],"cost":"3 AP","range":"Self","duration":"Instantaneous","desc":"You unleash a small portion of the world's pain upon a 15 foot cube adjacent to you. Creatures<br>inside must make an Intuition saving throw or take 2d10 damage. This damage has no type and<br>cannot be reduced or negated in any way.","empower":"Damage increased to 3d10. If the creature is vulnerable to a damage type, they are<br>vulnerable to damage from this spell."},
];
