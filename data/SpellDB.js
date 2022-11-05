const spellDatabase = [
    {
        "cost": "2 AP",
        "desc": "You and all creatures you choose within range are magically bonded with the earth. All affected<br>creatures are unaffected by terrain hazards and penalties, and increase their movement speed<br>by 10 feet.<br>The spell ends for a creature if they are not touching the ground for more than 3 seconds.",
        "duration": "1 minute",
        "empower": "",
        "name": "Earthfriend",
        "range": "Self (10 foot radius)",
        "tags": [
            "Transmutation",
            "Earth",
            "Spirit",
            "Support",
            "Mobility",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You learn the properties of a specific magical effect in range. You know the spell's name, its<br>effects, and the level or overall strength of its original caster. When cast on a magic item, you<br>gain knowledge of its enchantment and any applicable conditions. When cast on a creature, you<br>can discern any spell effects affecting the creature as well as their properties.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Decipher Magic",
        "range": "120 feet",
        "tags": [
            "Divination",
            "Universal",
            "Utility"
        ],
        "tier": 1
    },
    {
        "cost": "0 AP",
        "desc": "The next spell you cast that affects an area has its area of effect tripled.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Maximize",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Arcane"
        ],
        "tier": 8
    },
    {
        "cost": "2 AP",
        "desc": "You summon a seed of the great Flame Oak, attached to a creature, object, or point within<br>range. The seed sheds dim light in a 15 foot radius and lasts for 1 hour, at which point it<br>vanishes. At any point, you may spend 1 AP to cause all seeds you have summoned to<br>violently detonate. Creatures within 20 feet of the seed must make a Dexterity saving throw.<br>Targets take 4d6 fire damage on a failure, or half damage on a success. Creatures within the<br>area of multiple detonations only take damage from one.",
        "duration": "Instantaneous",
        "empower": "You summon an additional seed.",
        "name": "Flame Blossom",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Fire",
            "Summoning",
            "Plant"
        ],
        "tier": 2
    },
    {
        "cost": "3 AP",
        "desc": "You rekindle the spirit of a creature that died within 1 minute, forcibly binding its spirit to its corpse. It restores all of its hit points.<br><br>The creature is a berserk husk of its former self. It gains 1 AP, can only take the Attack action, and will always attempt to attack the nearest creature, moving as far as it can to do so. Every time it makes an attack, it takes 1d8 fire damage, ignoring its own resistance and immunity. On a successful hit, it deals the same amount of fire damage it took as bonus damage to its target.<br><br>When the spell ends or the creature reaches 0 hit points, the corpse collapses as the spirit burns out. It can't be targeted by this spell again unless it is brought back to life permanently, then dies again.",
        "duration": "1 minute",
        "empower": "",
        "name": "Harness Fury",
        "range": "30 feet",
        "tags": [
            "Necromancy",
            "Fire",
            "Spirit"
        ],
        "tier": 4
    },
    {
        "cost": "2 AP",
        "desc": "Pitch-black thread winds around a target creature in range that you can see, who must make a<br>Dexterity saving throw. On a failure, they become bound (can't use AP to attack or cast non-Still<br>spells) for the duration.<br>The spell ends automatically if the creature moves out of range. The creature can spend 2 AP to<br>make a Strength saving throw, breaking free on a success.",
        "duration": "1 minute",
        "empower": "The spell no longer ends automatically when the creature moves out of range. AP<br>cost to attempt a save increases to 3.",
        "name": "Shadow Thread",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Spirit",
            "Shadow",
            "Control",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Your shadow extends out to grab at an object or creature. An unwilling creature must make a Dexterity saving throw to avoid being grabbed. On a failure, you drag yourself through your shadow to an adjacent empty space to your target, optionally dealing 2d4 slashing damage.",
        "duration": "Instantaneous",
        "empower": "Removes the AP cost.",
        "name": "Grasping Shade",
        "range": "60 feet",
        "tags": [
            "Transmutation",
            "Shadow"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A pillar of fire 100 feet tall descends onto a 20 foot radius area centered on a point you can see within range. Creatures in the area must make a Dexterity saving throw or take 8d6 fire damage. Creatures that succeed take half damage.<br><br>The pillar of fire remains until the start of your next turn, continually pouring down from above. Any creature that enters the pillar that did not already take damage from the spell must make a Dexterity saving throw or take 8d6 fire damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Damage increases to 10d8.",
        "name": "Pillar of Fire",
        "range": "120 feet",
        "tags": [
            "Evocation",
            "Fire"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "A longsword-sized shard of holy metal descends from the sky onto a target point in range. If a creature is occupying the area, it must make a Dexterity saving throw or take 1d8 slashing and 1d8 radiant damage.<br><br>The shard can be picked up and wielded by you as a weapon. It is treated as a longsword that deals an additional 1d4 radiant damage on hit. No other creature can move the shard.",
        "duration": "1 minute",
        "empower": "The shard gains a bonus to its attack and damage rolls equal to half your proficiency modifier, rounded down.",
        "name": "Sacred Shard",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Physical",
            "Radiant",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A ball of condensed brambles and vines is summoned and then launched at a target creature within range that you can see. It must make a Dexterity saving throw or take 2d8 piercing damage and be restrained. The ball then expands out into a 10 foot radius field of brambles and vines. The area becomes difficult terrain, and any creature in this radius must make a Dexterity saving throw or become restrained.<br><br>A restrained creature can repeat their saving throw at the end of each of their turns. On a success, they are no longer restrained.",
        "duration": "1 minute",
        "empower": "Radius increases to 15 feet.",
        "name": "Bramble Wave",
        "range": "90 feet",
        "tags": [
            "Conjuration",
            "Plant"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Summons a small spirit of pure water to assist you. Choose a creature in range. The creature is protected by a thin shimmering veil. They gain a swimming speed equal to their walking speed, and have advantage on saving throws made against any psionic or sound based spell or effect.",
        "duration": "1 minute",
        "empower": "",
        "name": "Call Undine",
        "range": "60 feet",
        "tags": [
            "Summoning",
            "Spirit",
            "Water"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Strong winds pick up around a 30 foot radius sphere centered on a point you can see within range. The winds blow away fogs and gases and impose disadvantage on ranged weapon attacks that cross through this area.<br><br>While inside the area, your Wind spells have their AP cost reduced by 1, to a minimum of 1.",
        "duration": "1 minute",
        "empower": "",
        "name": "Wind Sign",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Wind",
            "Sign"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Immediately after landing a successful melee weapon attack, you can cast this spell to let loose a ferocious blast of energy from your weapon at a target within range, dealing damage equal to your weapon's damage die, plus your spellcasting stat. A creature can only be targeted by this spell once on each of your turns.",
        "duration": "Instantaneous",
        "empower": "Removes the AP cost.",
        "name": "Outburst",
        "range": "30 feet",
        "tags": [
            "Evocation",
            "Physical"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Target creature in range that you can see must succeed on an Intuition saving throw or fall victim to an illusion of a world on fire. To the target, flames appear to ignite everything and crackle and burn loudly, blocking vision and hearing of anything past 30 feet. On each of its turns, the target takes 3d6 fire damage.<br><br>A creature can repeat the saving throw at the end of each of its turns. On a success, the spell ends.",
        "duration": "1 minute",
        "empower": "",
        "name": "World Ablaze",
        "range": "60 feet",
        "tags": [
            "Illusion",
            "Fire",
            "Concentration"
        ],
        "tier": 5
    },
    {
        "cost": "3 AP",
        "desc": "From your current location, you create a line of ethereal glass 10 feet tall that extends out to 60 feet. Choose one side of the glass - all creatures up to 30 feet away from the glass on that side are reflected as shadowy figures on the other side, preserving their relative position to the mirror.<br><br>The shadows take their turn immediately after the original. They are under your complete mental control and are otherwise an exact copy of the original creature.<br><br>At the start of your next turn, the glass and all shadows disappear.",
        "duration": "Instantaneous",
        "empower": "One shadow immediately takes a turn.",
        "name": "Sable Reflection",
        "range": "Self (60 foot line)",
        "tags": [
            "Conjuration",
            "Space",
            "Shadow"
        ],
        "tier": 5
    },
    {
        "cost": "1 AP",
        "desc": "You wrap yourself in shadow. Instead of your normal movement this turn, you can move in a straight line in any direction up to half your movement speed, up to three times. This movement ignores difficult terrain and can pass through creatures. Creatures can't spend AP as a response to this movement.<br><br>At the end of your turn, if you cannot fly and are above the ground, you fall to the ground.",
        "duration": "Instantaneous",
        "empower": "Gain one additional movement.",
        "name": "Fleeting Shadow",
        "range": "Self",
        "tags": [
            "Conjuration",
            "Shadow"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A target creature you can see must succeed on a Willpower saving throw or have their fate forcibly edited and then foretold to amplify their failures. Each time the creature fails an attack roll or saving throw, they suffer 1d10 damage.",
        "duration": "1 minute",
        "empower": "The creature has disadvantage on their next attack roll or saving throw.",
        "name": "Manifold Woes",
        "range": "90 feet",
        "tags": [
            "Divination",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "A 10 foot radius area centered on target point explodes into flames. Creatures inside must make<br>a Dexterity saving throw or take 1d6 fire damage.<br>At the start of your next turn, a 20 foot radius area centered on the same point explodes into<br>flames. Creatures inside must make a Dexterity saving throw or take 1d6 fire damage.",
        "duration": "Instantaneous",
        "empower": "Damage increases to 2d6 on both explosions. A creature that succeeds on their<br>saving throw takes half damage.",
        "name": "Heat Shock",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Fire"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "The target's creature's eyes are opened to the realm of magic. For the duration of this spell, they can perceive all active spell effects on creatures they can see. Each spell is a discrete object to the target, with a transparent thread tracing back towards the general direction of the caster if they are within 120 feet.",
        "duration": "1 hour",
        "empower": "",
        "name": "Spellsight",
        "range": "Touch",
        "tags": [
            "Divination",
            "Arcane"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Flames ignite around you and create a hazy mirage of you. It has its own AP pool which is equal to yours, can use all your non-spellcasting actions, and shares all current spell effects you have. It can't move away from you and can't take actions that would move it. When it would deal damage, it converts all damage it would deal to fire damage, and it deals half the damage it would normally inflict.<br><br>The spell ends if you are reduced to 0 or fewer hit points, or if you come into contact with enough water to soak you completely or take damage from a spell with the Water tag.",
        "duration": "1 minute",
        "empower": "",
        "name": "Heat Haze",
        "range": "Self",
        "tags": [
            "Illusion",
            "Fire",
            "Physical"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "Creatures you choose within range must succeed on an Intuition saving throw or be overcome by your sheer power and become frightened of you. While frightened in this way, a creature can't make any weapon attacks. If they cast a spell that would require a saving throw, all targeted creatures have advantage on the saving throw.<br><br>A creature that ends their turn more than 60 feet away from you can repeat the saving throw. On a success, the effect ends.",
        "duration": "1 minute",
        "empower": "",
        "name": "Enforce Futility",
        "range": "Self (60 foot radius)",
        "tags": [
            "Enchantment",
            "Physical",
            "Concentration"
        ],
        "tier": 8
    },
    {
        "cost": "1 AP",
        "desc": "Summons a small spirit of pure air to assist you. Choose a creature in range. The creature is supported by a gentle cushion of air. They gain an additional 10 feet of movement at the start of each of their turns, and their carrying capacity is doubled. Additionally, their falling speed can be no more than 60 feet per round, and they do not suffer fall damage. This spell ends for a creature upon landing from a fall of 15 or more feet.",
        "duration": "1 minute",
        "empower": "",
        "name": "Call Sylph",
        "range": "60 feet",
        "tags": [
            "Summoning",
            "Spirit",
            "Wind"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Target creature must succeed on an Intuition saving throw. On a failure, you briefly invade their mind and remove the existence of yourself or a creature you can see from their perception. The chosen creature cannot be detected with any of the target's senses.<br><br>If the chosen creature damages or interacts with the target, it can repeat the saving throw. On a success, the spell ends.",
        "duration": "1 minute",
        "empower": "",
        "name": "Edit Perception",
        "range": "120 feet",
        "tags": [
            "Enchantment",
            "Eldritch",
            "Control",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You call upon the vengeful spirits of the dead to give life to a vineghast, a fearsome creature bearing multiple weapons. It takes its turn after yours, and while you concentrate on this spell, it obeys your mental commands.<br><br>If you stop concentrating on this spell, the vineghast breaks free from your control, and spends all its turns moving to and attacking the nearest creature for the remaining duration of the spell.",
        "duration": "1 hour",
        "empower": "",
        "name": "Vineghast Calling",
        "range": "30 feet",
        "tags": [
            "Necromancy",
            "Summoning",
            "Plant",
            "Physical",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "Target creature's steps are lightened. Their walking speed is increased by 10 feet. When they are targeted by another spell with the Lightning tag, their walking speed is increased by 10 feet until the end of their next turn.",
        "duration": "1 hour",
        "empower": "",
        "name": "Sparkstep",
        "range": "30 feet ",
        "tags": [
            "Transmutation",
            "Lightning"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You reach out to all creatures and prepare to take in some of the magic they expend on their spells. Every time a creature within 60 feet casts a spell, you restore hit points and MP equal to the tier of the spell. You can spend 1 AP as a response to double the MP restored, dealing arcane damage to the target equal to twice the tier of the spell in the process.<br><br>In addition, you have resistance to damage from spells. When you are targeted by a spell, you restore hit points and MP equal to the tier of the spell.",
        "duration": "1 minute",
        "empower": "",
        "name": "Arcane Siphon",
        "range": "Self (60 foot radius)",
        "tags": [
            "Enchantment",
            "Arcane",
            "Concentration"
        ],
        "tier": 7
    },
    {
        "cost": "2 AP",
        "desc": "Thick shadows gather around you and black out a 15 foot radius sphere centered on you. Only you can see inside this darkness. It blocks all vision through and out of the sphere otherwise.<br><br>At the start of each of your turns while you are inside, you can move yourself anywhere within the sphere without consuming movement.",
        "duration": "Instantaneous",
        "empower": "Range becomes 20 feet.",
        "name": "Shifting Shade",
        "range": "Self (15 foot radius) ",
        "tags": [
            "Conjuration",
            "Shadow",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You reanimate every corpse within range. They keep all their capabilities they had in life, and are under your direct control for the duration of the spell.<br><br>You also animate 1d6+2 skeletons and 1d6+2 zombies within the area of the spell for the duration of the spell.<br><br>While this spell lasts, creatures you have animated by this spell or other Necromancy spells can't be reduced below 1 hit point.",
        "duration": "1 minute",
        "empower": "",
        "name": "Hells Unleashed",
        "range": "Self (60 foot radius)",
        "tags": [
            "Necromancy",
            "Unholy"
        ],
        "tier": 9
    },
    {
        "cost": "3 AP",
        "desc": "You unleash a small portion of the world's pain upon a 15 foot cube adjacent to you. Creatures<br>inside must make an Intuition saving throw or take 2d10 damage. This damage has no type and<br>cannot be reduced or negated in any way.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 3d10. If the creature is vulnerable to a damage type, they are<br>vulnerable to damage from this spell.",
        "name": "World's Cry",
        "range": "Self",
        "tags": [
            "Evocation",
            "Spirit"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Bolts of divine energy rain down from the skies upon up to 3 targets within range, who must make a Dexterity saving throw or take 3d8 radiant damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Can target two additional targets.",
        "name": "Holy Storm",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Holy"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "A malignant wandering spirit makes contact with a target creature, who must succeed on a<br>Constitution saving throw or suffer 2d6 poison damage. Roll 1d4 on a failed saving throw to<br>determine if the target is poisoned, blind, frightened, or paralyzed until the end of your next turn.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 3d6. On a successful saving throw, the target takes half<br>damage.",
        "name": "Vexatious Traveler",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Spirit",
            "Poison",
            "Disease"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You instantly travel up to twice your movement speed, able to move in any direction through occupied spaces and objects no larger than a 5 foot cube. Everything you pass through must make a Dexterity saving throw or take 3d8 lightning damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Movement increased to three times your movement speed.",
        "name": "Sparksurge",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Lightning"
        ],
        "tier": 2
    },
    {
        "cost": "3 AP",
        "desc": "You summon a field of fire and steel that envelops a creature. This field is indestructible and prevents movement as well as attacks and spells through the field. An unwilling creature can make a Dexterity saving throw to avoid being encased in the field.<br><br>The field superheats the area inside, forcibly burning away impurities. At the start of each of the creature's turns, it must make a Constitution saving throw, taking 2d6 fire damage on a failure and half damage on a success. Any conditions on the creature are ended. The creature can use its action to make a Willpower saving throw to break free of the field, ending the field on a success.<br><br>When the field ends, either as the result of a successful Willpower saving throw, or when you choose to end it for 0 AP at any time, the creature within is forged in body and spirit. For each time it took damage from the spell, the creature heals 2d12 hit points and gains 1 AP. This bonus AP remains until the end of the creature's next turn.",
        "duration": "1 minute",
        "empower": "",
        "name": "Crucible Forge",
        "range": "30 feet",
        "tags": [
            "Abjuration",
            "Fire",
            "Holy",
            "Physical",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "3 AP",
        "desc": "You create a small planar realm in your current space that attempts to suck in all creatures within range. Unwilling creatures must succeed on a Willpower saving throw or be drawn into the realm.<br><br>The realm has an exit and entry in both planes in the same space where you cast the spell. All creatures inside the realm are contained within the entrance on the outside. The realm on the inside looks exactly like the plane outside, save that it ends in solid force at the border of the spell. Creatures that were taken inside maintain their relative position.<br><br>When the spell ends, all creatures return to their relative position outside of the realm. If it is occupied, they return to the closest empty space.",
        "duration": "1 minute",
        "empower": "",
        "name": "Microrealm",
        "range": "Self (30 foot radius)",
        "tags": [
            "Transmutation",
            "Space"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "Two 15 foot long lines of fire descend upon a target creature in range, one parallel to you and one perpendicular to you, with the center of both lines centered on the target creature. Creatures in range must succeed on a Dexterity saving throw or take 3d8 fire damage, and the creature in the center must succeed on a Dexterity saving throw or take 5d8 fire damage. A successful saving throw reduces the damage by half.",
        "duration": "Instantaneous",
        "empower": "Line length increased to 25 feet. All creatures affected take 1d8 radiant damage.",
        "name": "Fire Cross",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Fire",
            "Holy"
        ],
        "tier": 2
    },
    {
        "cost": "1 AP",
        "desc": "Spirit-filled winds surround you, opening the spirits of all creatures you choose within range.<br>Each affected creature restores 1 hit point for each AP they spend on their next turn.",
        "duration": "Instantaneous",
        "empower": "Removes the AP cost on this spell.",
        "name": "Spirit Artery",
        "range": "Self (30 foot radius)",
        "tags": [
            "Conjuration",
            "Spirit",
            "Healing"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You issue forth an accusation laced with your conviction. Up to two creatures within range must make a Willpower saving throw or take 2d6 radiant damage. Creatures that succeed take half damage.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 3d6.",
        "name": "Zealous Accusation",
        "range": "30 feet",
        "tags": [
            "Enchantment",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Whisper a message onto the wind, which travels unerringly toward your intended recipient. This spell can target any creature within range that has a clear path through the air. The message can only be up to 12 words, and are in a language you speak.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Whisperwind",
        "range": "300'",
        "tags": [
            "Wind",
            "Transmutation"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Exceedingly strong winds kick up around you, forming a dome 15 feet away from you. The winds lightly obscure you, and creatures that attempt to pass through the dome must make a Strength saving throw or be thrown away 10 feet. Ranged attacks aimed through the dome are thrown off course and automatically miss.<br><br>The dome dissipates at the start of your next turn.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Wind Dome",
        "range": "Self",
        "tags": [
            "Abjuration",
            "Wind"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Soft golden light forms a protective field around you. When a creature would target you with an attack or harmful spell, it must roll 1d20. On a roll of 10 or lower, they must choose a different target or lose the action.",
        "duration": "1 minute",
        "empower": "",
        "name": "Aegis of Awe",
        "range": "Self",
        "tags": [
            "Abjuration",
            "Holy",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Target creature perceives you as a fearsome dragon. At the start of each of its turns, it must make an Intuition saving throw. On a failure, it becomes frightened of you as long as it can see you until the spell ends.",
        "duration": "1 minute",
        "empower": "Targets an additional creature each time this spell is empowered.",
        "name": "Dragonfear",
        "range": "90 feet",
        "tags": [
            "Illusion",
            "Draconic",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You invoke the attributes of the legendary giantslayer of fey lore. You gain the following benefits: <br>- Your movement speed increases by 10 feet.<br>- Creatures larger than you have disadvantage when attacking you.<br>- Your weapon attacks on creatures larger than you deal additional damage equal to one roll of your weapon damage die.<br>- When targeted by a spell and you succeed on a Dexterity saving throw, you are completely unaffected.",
        "duration": "1 minute",
        "empower": "",
        "name": "Giantslayer Legend",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Fey",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "A creature that has damaged you within the past year is suddenly blasted with a mighty pillar of light. The creature and all creatures within a 20 foot cylinder 300 feet tall must make a Dexterity saving throw or take 12d8 radiant damage, halved on a success.<br><br>A creature can't be targeted or take damage from this spell again until they finish a rest.",
        "duration": "Instantaneous",
        "empower": "Damage dealt to the main target reduces maximum hit points by the same amount.",
        "name": "Sacrosanct Wrath",
        "range": "Planar",
        "tags": [
            "Evocation",
            "Holy"
        ],
        "tier": 6
    },
    {
        "cost": "2 AP",
        "desc": "A creature corpse or a dead creature reanimated by one of your spells within range that you can see explodes into black flames. All creatures within 10 feet of the corpse must make a Dexterity saving throw or take 1d10 fire damage and 1d10 unholy damage. The target corpse or creature is utterly destroyed.",
        "duration": "Instantaneous",
        "empower": "Damage is increased to either 2d10 fire or 2d10 unholy. Creatures that succeed on their saving throw take half damage.",
        "name": "Corpse Explosion",
        "range": "90 feet",
        "tags": [
            "Necromancy",
            "Unholy",
            "Fire"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You throw a magically created gauntlet at a target creature that can see you, challenging it to a duel. It must make a Willpower saving throw. On a failure, both you and your target are locked into a duel with each other. Any attack or spell from either duelist that does not target or include either duelist automatically fails.<br><br>You must make a Willpower saving throw to end the effect early. Otherwise, the spell only ends when one creature is reduced to 0 or fewer hit points.",
        "duration": "1 minute",
        "empower": "You have resistance to all damage taken outside of the duel.",
        "name": "Oathbound Gauntlet",
        "range": "30 feet",
        "tags": [
            "Enchantment",
            "Physical"
        ],
        "tier": 2
    },
    {
        "cost": "1-3 AP",
        "desc": "You foretell a creature's impending demise in flames, sealing it into the near future. The next time this creature would take fire damage, the flames intensify and deal an additional 1d10 fire damage per AP spent on this spell. The spell then ends.<br><br>Casting this spell again before it has triggered ends the first spell without effect.",
        "duration": "1 hour",
        "empower": "If the source of fire damage requires a saving throw, the creature has disadvantage on its saving throw.",
        "name": "Foretold Flames",
        "range": "120 feet",
        "tags": [
            "Divination",
            "Fire"
        ],
        "tier": 2
    },
    {
        "cost": "1 AP",
        "desc": "Summons a small spirit of pure earth to assist you. Choose a creature in range. The creature has their natural defenses bolstered. They gain resistance to all types of damage. Every time they take damage, roll a d20. If the result is lower than the greater between 11 or the amount of damage they would have taken before resistance is applied, this spell ends for them.",
        "duration": "1 minute",
        "empower": "",
        "name": "Call Gnome",
        "range": "60 feet",
        "tags": [
            "Summoning",
            "Spirit",
            "Earth"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You conjure a being from beyond that devours the empty space between you and a target<br>creature up to 30 feet away from you. The creature is pulled directly adjacent to you, and<br>everything in a 30 foot long, 5 foot wide line is moved an equal distance towards you. Objects<br>that are not fully contained within the area are unaffected.",
        "duration": "Instantaneous",
        "empower": "Reduces the AP cost to 1.",
        "name": "Space Eater",
        "range": "Self",
        "tags": [
            "Conjuration",
            "Eldritch",
            "Space",
            "Utility"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You become able to see up to twelve seconds into the future, granting a nearly impossible benefit against weapon users. For the duration of the spell, weapon attacks can only hit you on a roll of 20.<br><br>At the start of each of your turns, you must use either 1 AP and half of your movement, or 2 AP, to continue concentrating on this spell. If you choose not to pay either cost, the spell ends.",
        "duration": "1 minute",
        "empower": "",
        "name": "Battle Sense",
        "range": "Self",
        "tags": [
            "Divination",
            "Physical",
            "Psychic",
            "Concentration"
        ],
        "tier": 6
    },
    {
        "cost": "2 AP",
        "desc": "Creatures in a 15 foot radius, 300 foot tall cylinder centered on a target point you can see become targeted by a large storm cloud, which strikes down with lightning. Creatures must make a Dexterity saving throw now and each time they spend AP during their next turn. They take 6d8 lightning damage on a failure, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Radius increased to 20 feet.",
        "name": "Relentless Storm",
        "range": "90 feet",
        "tags": [
            "Evocation",
            "Lightning"
        ],
        "tier": 4
    },
    {
        "cost": "2 AP",
        "desc": "A razor sharp wind emanates from you and slices through the ground in a 15 foot wide, 30 foot long line. Creatures in the way must make a Dexterity saving throw or take 3d4 slashing damage. Creatures not in contact with the ground are unaffected.",
        "duration": "Instantaneous",
        "empower": "The line extends to 45 feet. Creatures that succeed on their saving throw take half damage.",
        "name": "Grass Slicer",
        "range": "30 feet",
        "tags": [
            "Evocation",
            "Wind"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You select two targets, one of which can be yourself, and transfer life force from one target to another. Choose Strength, Dexterity, or Constitution. One target has disadvantage on all rolls with that stat, while the other has advantage instead. Unwilling creatures can make an Intuition saving throw to avoid this effect.",
        "duration": "1 minute",
        "empower": "",
        "name": "Vigor Transfusion",
        "range": "60 feet",
        "tags": [
            "Necromancy",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "You appear to transform yourself into three separate foxes. You can't attack or cast spells in this<br>form, but you can move each fox separately during your turn. Each fox shares your AC, and if a<br>fox would take damage, it disappears.<br>At the start of your next turn, you choose one fox to reveal as yourself. If only one fox is left<br>remaining, the spell ends immediately. If all remaining foxes take damage simultaneously,<br>choose one fox to reveal as yourself.",
        "duration": "Instantaneous",
        "empower": "You transform into five foxes instead.",
        "name": "Fox Hunt",
        "range": "Self",
        "tags": [
            "Illusion",
            "Fey",
            "Beast"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A target creature must make an Intuition saving throw or become gradually more drowsy. At the<br>start of each of their turns, their maximum AP is reduced by 1 for the duration of the spell. A<br>creature that reaches 0 AP falls asleep for the remaining duration, or until forcefully woken up<br>by damage or an adjacent creature spending 2 AP to stir them awake.",
        "duration": "1 minute",
        "empower": "A creature that wakes up before the spell ends only has 1 AP on their next turn.",
        "name": "Lull",
        "range": "60 feet",
        "tags": [
            "Enchantment",
            "Fey",
            "Control"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Summons a small spirit of pure fire to assist you. Choose a creature in range. The creature is filled with vital energy. They regain 2 HP at the start of each of their turns, and have advantage on saving throws made against any poison, disease, or curse.",
        "duration": "1 minute",
        "empower": "",
        "name": "Call Salamander",
        "range": "60 feet",
        "tags": [
            "Summoning",
            "Spirit",
            "Fire"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You channel your power into a slashing melee weapon you possess, then immediately make one attack against a creature in range. On a hit, it deals an additional 1d4 damage.<br><br>If a 4 is rolled on the bonus damage die, it deals an additional 50 damage.",
        "duration": "Instantaneous",
        "empower": "You have advantage on the attack roll.",
        "name": "Boundary of Death",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Physical"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "You strike with enough force to send a rippling wave of raw power forward. Choose whether to strike in a 15 foot radius traveling along the ground or a 30 foot cone. Creatures in range must make a Strength saving throw. On a failure, they take 3d6 bludgeoning damage, and you choose whether they are knocked prone or pushed back 15 feet.",
        "duration": "Instantaneous",
        "empower": "You can choose both effects for a given creature. A successful saving throw deals half damage.",
        "name": "Shockwave",
        "range": "Self (special)",
        "tags": [
            "Evocation",
            "Physical"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "A scintillating swarm of snowflakes surrounds you, chilling the air nearby. You gain a number of<br>temporary hit points equal to 1d10 plus your spellcasting modifier. While the temporary hit points<br>remain, you are invisible if you are obscured and have not attacked or cast a spell on your last<br>turn. Your invisibility ends when you attack or cast a spell.",
        "duration": "1 minute",
        "empower": "Also creates a cloud of fog in a 20 foot radius sphere centered on you, which remains<br>while you have temporary hit points from this spell. The fog lightly obscures creatures inside.",
        "name": "Wintercloak",
        "range": "Self",
        "tags": [
            "Abjuration",
            "Cold",
            "Fey"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "The earth rises around you to form a dome with a radius of 15 feet centered on you. One side of the dome, a 90 degree arc, is left open. You choose which side is open.<br><br>The newly formed cave is dark, unless light is inside or can get through the opening. The cave has AC 10 and 50 hit points. If its hit points are reduced to 0, the spell ends immediately as the cave collapses.",
        "duration": "Instantaneous",
        "empower": "The cave has resistance to physical damage.",
        "name": "Summon Cave",
        "range": "Self (15 foot radius)",
        "tags": [
            "Conjuration",
            "Draconic",
            "Earth"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You swing your weapon and strike the earth, creating a massive rupture that covers a 60 foot cone. Any object fully within the area is utterly destroyed, while all creatures within must make a Strength saving throw or take 8d8 bludgeoning damage and be knocked prone. The area becomes difficult terrain.<br><br>If a solid surface, such as a cave wall, is struck, the spell carves out a stable tunnel 10 feet tall, 15 feet wide, and 90 feet long.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Mountain Crusher",
        "range": "5 feet",
        "tags": [
            "Transmutation",
            "Physical",
            "Earth"
        ],
        "tier": 5
    },
    {
        "cost": "2 AP",
        "desc": "You hold up your hand as you generate a brilliant, hypnotic flame. Every creature you choose within range must succeed on an Intuition saving throw. On a failure, they become charmed by you, and can only move closer to the fire during their turn. The fire moves with you, and charmed creatures will follow you even after you move out of range.<br><br>A creature can repeat the saving throw at the end of each of their turns. On a success, the spell ends for them. If the creature takes any damage, the spell also ends immediately for them.",
        "duration": "1 minute",
        "empower": "Range increased to 60 feet.",
        "name": "Mothlight",
        "range": "Self (30 foot radius)",
        "tags": [
            "Enchantment",
            "Fire",
            "Concentration"
        ],
        "tier": 5
    },
    {
        "cost": "1 AP",
        "desc": "The target creature becomes poised to receive a vision of the right moment to act. If they would roll a 1 on an attack roll or saving throw during the spell's duration, it becomes a 20 instead, and the spell ends.",
        "duration": "1 minute",
        "empower": "Any roll equal to or less than the creature's proficiency modifier instead becomes a 20, and the spell ends.",
        "name": "Moment of Opportunity",
        "range": "90 feet",
        "tags": [
            "Divination",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You create a flowing river 30 feet long and 5 feet wide, with the midpoint being anywhere within range. You can shape the river however you like as long as the path of the river does not overlap with itself.<br><br>The river is difficult terrain. It emanates thick mist that covers a 15 foot wide, 10 foot tall line centered on the river, which heavily obscures vision inside and through the mist. The mist can be dispelled by a strong wind, but at the start of each of your turns, the mist returns. When the spell ends, both river and mist disappear.",
        "duration": "Instantaneous",
        "empower": "Range increases to 60 feet. Length increases to 60 feet.",
        "name": "Mist River",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Water",
            "Fey",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Your next melee weapon attack before the end of your turn instead strikes all creatures in a 15 foot square adjacent to you. Make one attack and damage roll for all creatures. Effects that add additional damage to your attacks apply to all targets.",
        "duration": "Instantaneous",
        "empower": "Also affects a 5 foot radius around you as well.",
        "name": "Killing Wave",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Physical"
        ],
        "tier": 4
    },
    {
        "cost": "3 AP",
        "desc": "Cause a single target creature to be wracked with intense pain. They must make a Constitution saving throw. If they fail, they fall prone and cannot stand back up, they have 1 AP that cannot be used to deal damage, they cannot reserve AP for a reaction, and they take 5d8 necrotic damage. If they succeed, they only take 3d8 necrotic damage. A creature can repeat this saving throw at the end of each of their turns, ending the effect on a success.",
        "duration": "Concentration, up to 1 minute",
        "empower": "",
        "name": "Agony",
        "range": "60'",
        "tags": [
            "Necromancy",
            "Unholy"
        ],
        "tier": 5
    },
    {
        "cost": "3 AP",
        "desc": "You enchant a seed in hand and toss it to the target location, where it instantly blooms into a towering tree that occupies a 10 foot radius, 15 foot tall cylinder.<br><br>A creature that begins their turn within 5 feet of the tree heals 1d6 hit points and has resistance to poison damage until the start of their next turn. A creature can only benefit from one tree per turn.<br><br>The tree has AC 12, 20 hit points, and vulnerability to slashing and fire damage. If reduced to 0 hit points, it falls in a 10 foot long, 10 foot wide line away from its attacker. Creatures in range must make a Dexterity saving throw or take 3d10 bludgeoning damage. The tree then disappears.<br><br>If the tree cannot grow to its full height, it first deals 3d10 bludgeoning damage to any object impeding its way, continuing to grow if this damage would destroy the object. If it does not destroy the object, the tree violently splinters and destroys itself.",
        "duration": "1 minute",
        "empower": "",
        "name": "Tree of Health",
        "range": "30 feet",
        "tags": [
            "Transmutation",
            "Plant",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "Gravity intensifies in a 20 foot radius, 100 foot tall cylinder. Creatures inside must use 2 feet of movement for every 1 foot traveled, and flying creatures inside crash to the ground and can't fly while they remain inside. A creature that starts their turn in the area must succeed on a Strength saving throw or take 1d10 bludgeoning damage.",
        "duration": "1 minute",
        "empower": "",
        "name": "Greetings of Gravity",
        "range": "90 feet",
        "tags": [
            "Transmutation",
            "Space",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Target creature must succeed on a Constitution saving throw or have bits of their bone pulled through their skin, dealing 2d6 piercing damage. You gain temporary hit points equal to the damage dealt until the start of your next turn.<br><br>This spell is ineffective against creatures without a skeleton, such as elementals or oozes.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 3d6. A successful saving throw deals half damage.",
        "name": "Betrayal of Bone",
        "range": "30 feet",
        "tags": [
            "Necromancy",
            "Physical"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You channel powerful war magic. When you take the Attack action, you can also cast a Physical spell with an AP cost of 2 or less as part of the Attack action without consuming additional AP.",
        "duration": "1 minute",
        "empower": "",
        "name": "War Machine",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Physical",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "A 30 foot long, 10 foot tall perpendicular line centered on a point within range shimmers with a golden light. Creatures you choose can't cross through this line.<br><br>The spell ends if a creature crosses through the line.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Sacred Border",
        "range": "30 feet",
        "tags": [
            "Abjuration",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You touch a target creature temporarily animated by a Necromancy spell and liberate it from death. The creature does not regain its original form, but all of its capabilities in life that were not dependent on its original body are returned to it, including class levels, features, talents, and spells.<br><br>The animating spell harmlessly ends. The creature is no longer under the direct control of the original caster. It may become hostile depending on its memories.<br><br>Learning this spell permanently endows the user with knowledge that persists beyond death. You can always cast this spell on yourself, ignoring all effects that would prohibit your ability to cast spells.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Unshackled by Death",
        "range": "Touch",
        "tags": [
            "Necromancy"
        ],
        "tier": 5
    },
    {
        "cost": "2 AP",
        "desc": "A target creature or object you touch becomes incredibly solid. They can't be moved by any outside force, and gain resistance to physical damage. Objects also become immune to other spells. Creatures have their AP reduced to 1 for the duration. Unwilling creatures can make a Constitution saving throw to avoid the effect, and can repeat it at the end of each of their turns to end the effect early.",
        "duration": "1 minute",
        "empower": "",
        "name": "Solidify",
        "range": "Touch",
        "tags": [
            "Transmutation",
            "Earth",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "1 to 3 AP",
        "desc": "A creature you touch heals 1d6 hit points per AP spent.",
        "duration": "Instantaneous",
        "empower": "You add your spellcasting stat to each die rolled.",
        "name": "Healing Touch",
        "range": "Touch",
        "tags": [
            "Evocation",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A ghostly beam of dark magic extends from your palm to a creature you can sense, passing through all other objects and creatures. The target creature must succeed on a Constitution saving throw or take 3d6 unholy damage. A creature reduced to 0 hit points from this spell has their soul burned out of their body, leaving behind a body perfect for future use. Casting a Necromancy spell on such a body refunds half the MP cost used for the spell.",
        "duration": "Instantaneous",
        "empower": "Damage increases to 4d6. A creature that succeeds on the saving throw takes half damage.",
        "name": "Soul Sear",
        "range": "90 feet",
        "tags": [
            "Necromancy",
            "Unholy"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "The target's vision briefly improves to where they can see two seconds into the future. The<br>target adds your spellcasting modifier to the next ranged attack they make, and adds your<br>spellcasting modifier to the damage done by any critical hit they make.",
        "duration": "Instantaneous",
        "empower": "The target can't have disadvantage on the attack roll.",
        "name": "Aim True",
        "range": "Touch",
        "tags": [
            "Divination",
            "Support"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "Magical force surrounds your fist. The next unarmed attack you make before the end of your<br>next turn that hits your target sends them flying backwards 30 feet. If they collide with another<br>creature or object during this movement, they immediately stop and are knocked prone and take<br>an additional 1d12 bludgeoning damage.",
        "duration": "Instantaneous",
        "empower": "Removes the AP cost from this spell.",
        "name": "Magic Fist",
        "range": "Self",
        "tags": [
            "Evocation",
            "Physical"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Distracting and disturbing whispers haunt the target, who must succeed on an Intuition saving throw. On a failure, every time it makes an attack roll or ability check, it rolls 1d6 and subtracts the result from its roll.<br><br>The creature can repeat the saving throw at the end of each of its turns where it fails an attack roll or ability check. On a success, the spell ends.",
        "duration": "10 minutes",
        "empower": "Range becomes Sight.",
        "name": "Outer Beckons",
        "range": "90 feet",
        "tags": [
            "Conjuration",
            "Eldritch",
            "Summoning"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You ready an explosive field around yourself. The first time a creature damages you in melee<br>before your next turn, it detonates and deals 1d12 fire damage to your attacker.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 2d12. Other creatures you choose within 5 feet must make a<br>Dexterity save or take the same damage.",
        "name": "Explosive Aegis",
        "range": "Self",
        "tags": [
            "Abjuration",
            "Fire"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "With a gesture, a magically poisoned projectile silently flies forth at a target you can see within range. It must make a Dexterity saving throw or take 1d6 piercing damage and become affected by the poison. At the start of its next turn, it must make a Constitution saving throw or lose 2 AP.<br><br>A creature that cannot see you has disadvantage on saving throws from this spell, and is unaware they have taken damage or that you have cast this spell.",
        "duration": "Instantaneous",
        "empower": "A failed Constitution saving throw also deals 1d12 poison damage.",
        "name": "Envenomed Dart",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Poison",
            "Silent"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You touch a creature, which must succeed on an Intuition saving throw. On a failure, the creature is flooded with feelings of joy. If they are not fighting you, they are charmed by you for the duration, unless you or your allies take action that would offend them.<br><br>If cast on a creature fighting you, the sudden rush of emotion disorients the creature instead of its usual effect. It loses 1 AP on its next turn and loses all AP it currently possesses.<br><br>A creature that succeeds on its saving throw knows you attempted to charm them.",
        "duration": "10 minutes",
        "empower": "",
        "name": "Spark of Joy",
        "range": "Touch",
        "tags": [
            "Enchantment",
            "Fey",
            "Silent"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Within the spell's range, you become aware of the most valuable  collection of riches. You obtain a mental image of the collection and a 5 foot radius surrounding it.<br><br>The spell ignores all treasure within 10 feet of you.",
        "duration": "Instantaneous",
        "empower": "You also sense the current direction of the collection.",
        "name": "Treasure Sense",
        "range": "1 mile",
        "tags": [
            "Divination",
            "Draconic"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You change the terrain in a 30 foot radius around you to be whatever you so desire. You cannot change terrain to cause immediate harm to a creature, such as creating lava underneath them, although you may create disadvantageous situations such as surrounding a creature with tall rocks.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Edit Creation",
        "range": "Self (30 foot radius)",
        "tags": [
            "Transmutation",
            "Arcane"
        ],
        "tier": 6
    },
    {
        "cost": "2 AP",
        "desc": "You attempt to intrude into a creature's mind and tear out a momentary but useful memory. The creature must make a Knowledge saving throw. On a failure, it takes 2d10 psychic damage, and you select an action it can't use on its next turn.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 3d10. A successful save deals half damage.",
        "name": "Prying Mind",
        "range": "90 feet",
        "tags": [
            "Divination",
            "Psychic"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A thin wave of fire reaches out from your hand and lashes at a target creature within range. It<br>must make a Dexterity saving throw or take 3d6 fire damage.",
        "duration": "Instantaneous",
        "empower": "Damage increases to 4d6. On a successful saving throw, the creature takes half<br>damage instead.",
        "name": "Fire Lash",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Fire"
        ],
        "tier": 1
    },
    {
        "cost": "N/A",
        "desc": "Consecrates the food eaten during a break. Whenever a creature rolls a hit die during the break to recover hit points and MP, they heal an additional 2 hit points and MP, and are cured of the poisoned condition.<br><br>This spell has no effect on the caster.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Blessed Meal",
        "range": "Self (30 foot radius)",
        "tags": [
            "Transmutation",
            "Holy",
            "Ritual"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You fire a large solid bolt of lightning that locks on to a creature within range and moves 30 feet<br>closer. At the start of each of your turns, if it has not collided with a creature or object, it moves<br>30 feet closer to the target. On impact with anything, it deals 3d10 lightning damage. Seeker<br>Bolt's damage is reduced to 1d10 if it hits a creature within 30 feet.<br>A creature can make a ranged attack targeting the bolt to destroy it. The bolt has AC 16 and<br>discharges on impact with any ranged projectile, destroying the bolt.",
        "duration": "Instantaneous",
        "empower": "At the start of your next turn, the bolt flies 120 feet towards the target.",
        "name": "Seeker Bolt",
        "range": "120 feet",
        "tags": [
            "Evocation",
            "Lightning"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Your arm painfully transforms into the maw of an unknown creature, which bites down on a 15 foot long, 5 foot wide line. Creatures in the path must make a Dexterity saving throw or take 3d10 arcane damage. Creatures that succeed take half damage.<br><br>You take 3 damage when you cast this spell.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 4d10. Self damage increased to 4.",
        "name": "Hungry Maw",
        "range": "15 feet",
        "tags": [
            "Transmutation",
            "Eldritch",
            "Arcane"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You ignite a magical effect in an attempt to utterly burn it away. Against a spell of tier 4 or lower, the effect ends immediately and the caster must make an Intuition saving throw, taking 4d6 fire and 4d6 arcane damage on a failure as the flames travel from the effect back to the caster. A successful saving throw deals half damage.<br><br>Against a spell of tier 5 or higher, you must succeed on a spellcasting check with a DC of 10 + the tier of the spell. On a failure, your spell has no effect.",
        "duration": "Instantaneous",
        "empower": "Automatically succeeds the spellcasting check.",
        "name": "Incinerate Magic",
        "range": "60 feet",
        "tags": [
            "Abjuration",
            "Fire",
            "Arcane"
        ],
        "tier": 4
    },
    {
        "cost": "2 AP",
        "desc": "Five bows of shadow line up and fire one shadowy arrow each down a 25 foot wide line composed of five 5 foot lines. The first creature in each 5 foot line must make a Dexterity saving throw or take 4d8 piercing damage, halved on a success. Each arrow stops after striking a creature.",
        "duration": "Instantaneous",
        "empower": "Damage increased to 6d8.",
        "name": "Phantom Bows",
        "range": "120 feet",
        "tags": [
            "Conjuration",
            "Physical",
            "Shadow",
            "Silent"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "Without warning, multiple pillars of light descend onto all creatures you choose within a 30 foot radius, centered on a point within range. Targeted creatures must succeed on a Dexterity saving throw or take 7d8 radiant damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Radius increases to 40 feet.",
        "name": "Divine Scourge",
        "range": "300 feet",
        "tags": [
            "Evocation",
            "Holy"
        ],
        "tier": 4
    },
    {
        "cost": "3 AP",
        "desc": "You assert dominion over every edged weapon in the radius, gaining the following benefits: <br>- You are immune to slashing damage.<br>- Any weapon that deals slashing damage in the area can be pulled to your hand if it is not carried. This does not cost any AP.<br>- When a creature in range attacks with a slashing weapon, you can choose to give it advantage on its attack roll.<br>- When a creature in range misses with a slashing weapon, you can choose to have the creature take damage as if it had hit itself with its own weapon.<br>- For 1 AP, you can attack up to two creatures within range with floating blades. They must make a Dexterity saving throw or take 1d8 slashing damage, plus bonus damage equal to your spellcasting stat.",
        "duration": "1 minute",
        "empower": "",
        "name": "Dominion over Blades",
        "range": "Self (60 foot radius) ",
        "tags": [
            "Conjuration",
            "Physical",
            "Concentration"
        ],
        "tier": 4
    },
    {
        "cost": "2 AP",
        "desc": "The target creature is enveloped in a field of static electricity. When a creature attacks the target with a weapon attack, the lightning crashes against the attack and negates it completely.<br><br>Each time the barrier prevents an attack, roll 1d20. On a roll of 10 or lower, the barrier temporarily dissipates. It returns at the end of the target creature's next turn.<br><br>The barrier is instantly destroyed if hit by a spell with the Cold tag, or if the creature enters a body of water.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Lightning Guard",
        "range": "Touch",
        "tags": [
            "Abjuration",
            "Lightning",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "Target creature must succeed on a Constitution saving throw or take 2d6 poison damage as a horrific boil emerges from their skin.<br><br>A creature can strike the boil with a weapon attack, causing it to burst into a hideous dark cloud that fills a 10 foot radius sphere for 1 minute. Creatures that start their turn in the cloud take 1d6 poison damage and are poisoned until the start of their next turn.",
        "duration": "1 minute",
        "empower": "",
        "name": "Plague Boil",
        "range": "60 feet",
        "tags": [
            "Necromancy",
            "Disease"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "A brilliant constellation forms 200 feet above you, creating a cylinder that covers a 30 foot radius centered on you. This area has the following effects: <br>- When a creature is healed, you can choose to add your spellcasting stat to the healing received. <br>- Shadow and Unholy spells in the area are dispelled. Creatures inside can't be targeted or affected by Shadow or Unholy spells, and a creature affected by them that enters the area is freed of their effects.<br>- Your Holy spells cost 1 less AP, to a minimum of 1 AP, while you are in the area.",
        "duration": "1 minute",
        "empower": "",
        "name": "Northern Cross",
        "range": "Self (30 foot radius)",
        "tags": [
            "Conjuration",
            "Holy",
            "Sign"
        ],
        "tier": 3
    },
    {
        "cost": "X AP",
        "desc": "You take the burden of weak flesh from creatures you choose within range and put it upon yourself. Every chosen creature other than yourself is healed for 1d6 hit points, plus additional healing equal to your spellcasting stat times the number of AP spent to cast this spell.<br><br>At the start of your next turn, you must make a Constitution saving throw with a DC equal to half the damage healed, to a maximum of 25. On a failure, you lose AP equal to the spell's AP cost as the burden proves too heavy for you. You repeat this saving throw at the start of each of your turns until you succeed, with the DC dropping by 5 on each failure.",
        "duration": "Instantaneous",
        "empower": "Healing increased to 2d6.",
        "name": "Carried Burden",
        "range": "Self (30 foot radius)",
        "tags": [
            "Necromancy",
            "Holy"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "A thundering column of lightning descends from the sky onto a target creature you can see, blasting a 60 foot radius sphere with the shock wave. The target creature must make a Constitution saving throw or take 10d8 lightning damage plus 1d8 lightning damage for each other creature in the spell's area, halved on a success. The total damage cannot exceed 20d8. Other creatures must make a Constitution saving throw or take 8d8 lightning damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Godly Example",
        "range": "90 feet",
        "tags": [
            "Evocation",
            "Lightning"
        ],
        "tier": 6
    },
    {
        "cost": "2 AP",
        "desc": "You strike a deal with forces from beyond. When you start your turn at 0 hit points while the spell is active, you must cast a spell. The spell costs 0 AP, but uses your maximum hit points instead of your MP for its cost. You cannot receive healing while at 0 hit points for the duration of the spell.<br><br>You can make a Willpower saving throw against your own spell DC at the end of each of your turns. On a success, the spell ends immediately. You cannot end the spell otherwise.",
        "duration": "1 minute",
        "empower": "Maximum hit point costs are halved.",
        "name": "Dark Pact",
        "range": "Self",
        "tags": [
            "Necromancy",
            "Eldritch"
        ],
        "tier": 3
    },
    {
        "cost": "2 AP",
        "desc": "A solid bolt of pure magic forms from the palm of your hand and unerringly homes in on a<br>creature you can see within range, dealing 1d4+2 arcane damage on hit.",
        "duration": "Instantaneous",
        "empower": "For each time you Empower this spell, launch an additional bolt at another creature<br>within range. Multiple bolts can't strike the same creature.",
        "name": "Arcane Bolt",
        "range": "90 feet",
        "tags": [
            "Evocation",
            "Universal",
            "Arcane"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You expel various waste products from alchemy in a 30 foot line. Creatures in the area of effect<br>must make a Dexterity saving throw or take 2d8 acid damage. Expunging this waste decreases<br>the cost of your next Transmutation spell before the end of your next turn by 1 AP.<br>~~Creatures without a soul are vulnerable to this spell's acid damage and take 3d8 acid<br>damage instead.~~",
        "duration": "Instantaneous",
        "empower": "Creatures that fail the saving throw are also poisoned until the start of your next turn.",
        "name": "Alchemical Waste",
        "range": "30 feet",
        "tags": [
            "Transmutation",
            "Acid"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You are immune to all damage.",
        "duration": "1 minute",
        "empower": "",
        "name": "Impervious",
        "range": "Self",
        "tags": [
            "Abjuration",
            "Physical",
            "Concentration"
        ],
        "tier": 9
    },
    {
        "cost": "3 AP",
        "desc": "A dead creature jerkily rises to life under your control. It is significantly weakened in this state - its maximum AP is reduced to 1 and cannot be increased, its movement speed is halved, and it is vulnerable to all damage. It can make one attack for 1 AP. It takes its turn after yours. Casting this spell again ends the spell on any existing targets.<br><br>When the spell expires, the creature's body is reduced to ash, consumed by the magic that animated it.",
        "duration": "1 minute",
        "empower": "Duration increased to 1 hour.",
        "name": "Puppeteer",
        "range": "90 feet",
        "tags": [
            "Necromancy",
            "Unholy",
            "Summoning"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You create a powerful burst of energy in a target direction that knocks you 30 feet away. Any creature in the target direction must make a Strength saving throw or be knocked away 30 feet from you and be knocked prone. A successful saving throw causes the creature to be knocked away 5 feet and not be knocked prone.",
        "duration": "Instantaneous",
        "empower": "The target area increases to a 15 foot cone.",
        "name": "Concussive Burst",
        "range": "5 feet",
        "tags": [
            "Evocation",
            "Physical"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You turn yourself into a being of pure magic for the duration of the spell. Choose a spell of tier 5 or lower without the Concentration tag that you know. You can cast that spell for 1 AP and 0 MP for the duration of this spell.",
        "duration": "1 minute",
        "empower": "",
        "name": "Archon Form",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Arcane",
            "Concentration"
        ],
        "tier": 9
    },
    {
        "cost": "2 AP",
        "desc": "Your eyes become portals that welcome stellar beings. You are blinded while the spell remains<br>active, but you can precisely sense the presence of creatures within 60 feet. Once on each of<br>your turns, you can spend 1 AP to fix your gaze upon a creature, who must succeed on an<br>Intuition saving throw or take 1d6 radiant damage and be frightened of you until the start of your<br>next turn.",
        "duration": "1 minute",
        "empower": "Creatures remain frightened as long as they can see you. They can repeat the saving<br>throw at the end of each of their turns to end the effect early. A creature that is frightened and<br>targeted again takes an additional 1d6 psychic damage.",
        "name": "Constellation Gaze",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Eldritch",
            "Summoning",
            "Radiant",
            "Psychic",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "You slam the ground with enough force to rupture the spell's area. It becomes difficult terrain, and every creature in range must make a Strength saving throw or take 2d8 bludgeoning damage and be knocked prone. Creatures that succeed on their saving throw take half damage and are not knocked prone.",
        "duration": "Instantaneous",
        "empower": "Radius increased to 20 feet. Damage increased to 3d8.",
        "name": "Groundslam",
        "range": "Self (15 foot radius)",
        "tags": [
            "Transmutation",
            "Physical",
            "Earth"
        ],
        "tier": 2
    },
    {
        "cost": "1 AP",
        "desc": "The target creature's perception on reality subtly changes. They suffer no ill effects until they fail a roll. Upon failing a roll while the spell is active they must make an Intuition saving throw. On a failure, eldritch forms appear to intrude upon reality, driving the creature into a berserk frenzy. It can take no other actions other than to spend all AP on moving and attacking the nearest creature.<br><br>If the creature cannot or does not attack during a turn, it makes an Intuition saving throw. On a success, the eldritch forms fade away until the creature fails another roll and then fails its saving throw.",
        "duration": "10 minutes",
        "empower": "The creature can't roll with advantage for the duration of the spell.",
        "name": "Precipice of Madness",
        "range": "90 feet",
        "tags": [
            "Enchantment",
            "Eldritch"
        ],
        "tier": 3
    },
    {
        "cost": "3 AP",
        "desc": "A nonmagical object that occupies a space no larger than a 10 foot cube is transformed into acid, which pools out into a 10 foot radius puddle. Creatures in range of the acid must make a Dexterity saving throw or take 5d6 acid damage. On a success, they move into the nearest empty space adjacent to the puddle.<br><br>The puddle remains for 1 minute. A creature that moves into the puddle or starts its turn there takes 2d6 acid damage.",
        "duration": "1 minute",
        "empower": "The puddle expands to 15 feet.",
        "name": "Acidify",
        "range": "30 feet",
        "tags": [
            "Transmutation",
            "Acid",
            "Earth"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "You create gentle winds at a target point within range that extends out in a 30 foot long, 5 foot wide line, with the winds blowing in one direction you choose. When a creature you choose moves within the line in that same direction, all their movement while within the line only costs 5 feet.",
        "duration": "1 minute",
        "empower": "",
        "name": "Guiding Breeze",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Wind"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "From your palm, vines burst forth and target up to three creatures within range, no two of which can be more than 10 feet apart from each other. Each target must make a Dexterity saving throw or become grappled. At the start of each of their turns while grappled, they take 1d8 piercing damage.<br><br>You can't move as long as at least one creature is grappled. A grappled creature can make a Strength saving throw at the end of each of its turns, breaking the grapple on a success.<br><br>For 1 AP, you can pull a grappled creature up to 15 feet towards you.",
        "duration": "1 minute",
        "empower": "Pull range increases to 30 feet.",
        "name": "Lashing Vines",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Plant",
            "Concentration"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "With a striking motion, all light vanishes in a 60 foot long, 15 foot wide line. The area is completely dark, prohibiting any vision. Anything that would cast light does not cast light into or inside this area.",
        "duration": "1 minute",
        "empower": "",
        "name": "Banish Light",
        "range": "Self (60 foot line)",
        "tags": [
            "Illusion",
            "Shadow",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "3 AP",
        "desc": "You pull together arcane energies to form an ethereal being that is the epitome of combat. It closely follows you, only turning physical when it strikes. It can make up to three attacks every turn without any AP cost, targeting a creature within 60 feet and using your spellcasting stat and proficiency modifier for its attack and damage rolls. On each hit, it deals 3d8 arcane damage.",
        "duration": "10 minutes",
        "empower": "",
        "name": "Warrior from Beyond",
        "range": "Self",
        "tags": [
            "Evocation",
            "Physical",
            "Arcane",
            "Summoning",
            "Concentration"
        ],
        "tier": 7
    },
    {
        "cost": "2 AP",
        "desc": "The spirit of the bear fills you with protective wrath. You can't be affected by effects that would reduce your AP until the start of your next turn, and you are immune to conditions and spells that would prevent you from acting.<br><br>When a creature friendly to you within range takes damage before the start of your next turn, you gain 1 AP until the end of your next turn, to a maximum of 3 AP. You can only spend this AP on weapon attacks or Physical spells.",
        "duration": "Instantaneous",
        "empower": "AP can stack up to 6 AP.",
        "name": "Mother Bear's Fury",
        "range": "Self (30 foot radius) ",
        "tags": [
            "Abjuration",
            "Physical",
            "Beast",
            "Spirit"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "A 10 foot radius area of space centered on target point is forcibly distorted for a moment. Creatures in the area must make a Constitution saving throw or take 3d4 damage, which cannot be reduced or negated in any way. A creature that succeeds on the saving throw takes half damage.",
        "duration": "Instantaneous",
        "empower": "Radius increases to 15 feet.",
        "name": "Distort",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Space"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "Arcane energies fold around you and spin out into deadly seeking projectiles. Every creature you choose within range takes 1d4 arcane damage, and must succeed on a Dexterity saving throw or take 3d4 arcane damage, halved on a success.<br><br>At the start of each of your turns, you can repeat the damaging effect if you use all your AP and movement for the turn. Otherwise, the spell ends.",
        "duration": "1 minute",
        "empower": "Initial damage increased to 2d4.",
        "name": "Arcane Fusillade",
        "range": "Self (60 foot radius)",
        "tags": [
            "Evocation",
            "Arcane",
            "Concentration"
        ],
        "tier": 3
    },
    {
        "cost": "1 AP",
        "desc": "As a response to being targeted by an attack, you can cast this spell to swap places with an adjacent creature or object. The object cannot be larger than you or more than one size smaller than you. The swapped target is now the new target of the incoming attacker. The attacker does not recognize the swap until one second after their attack.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Shield of Convenience",
        "range": "5 feet",
        "tags": [
            "Illusion"
        ],
        "tier": 2
    },
    {
        "cost": "3 AP",
        "desc": "Horrific power emanates from your palm into a 5 foot wide, 90 foot long line. The first creature in the path of the line must make a Constitution saving throw or take 4d6 fire, 4d6 unholy, and 4d6 arcane damage, halved on a success. If the creature is reduced to 0 or fewer hit points, it is obliterated with an unearthly screech, and the spell continues to the next creature in the line. If a creature is not obliterated, the spell ends without going any further.<br><br>Any creature damaged by the spell has all spell effects instantly dispelled. The line dispels all spell effects it travels through.",
        "duration": "Instantaneous",
        "empower": "Before the creature makes a saving throw, it takes 3d6 arcane damage.",
        "name": "Hellborn Unraveling",
        "range": "Self (90 foot line)",
        "tags": [
            "Evocation",
            "Arcane",
            "Fire",
            "Unholy"
        ],
        "tier": 5
    },
    {
        "cost": "2 AP",
        "desc": "Fire a ray of crippling energy at a creature within range. They must succeed on a Constitution saving throw or have their movement speed reduced by 10', they only have 2 AP per turn, and be unable to make reactions for up to 1 minute. They can reattempt this saving throw at the end of each of their following turns, ending the effect on a success.",
        "duration": "Instantaneous",
        "empower": "Fire an additional ray at another target, or fire a second ray at the same target to impose disadvantage on the initial saving throw.",
        "name": "Crippling Ray",
        "range": "120'",
        "tags": [
            "Necromancy"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "A target creature is encased in a bubble of warped space that follows them. Until the start of your next turn, weapon attacks from and against that creature fail, as the bubble sends the attack elsewhere. Unwilling creatures can make a Willpower saving throw to avoid being affected.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Warp Bubble",
        "range": "60 feet",
        "tags": [
            "Abjuration",
            "Space"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You tear apart a small part of the barrier between realms, causing a brief overlap with the realm of magic in a 30 foot radius centered on target point within range. Creatures in the area that cast spells take arcane damage equal to the MP cost of the spell.<br><br>Eldritch spells cast in this area cost 1 less AP.",
        "duration": "1 minute",
        "empower": "",
        "name": "Tear the Veil",
        "range": "60 feet",
        "tags": [
            "Abjuration",
            "Eldritch",
            "Sign"
        ],
        "tier": 1
    },
    {
        "cost": "X AP",
        "desc": "You create a fire on a space within range for each AP spent casting this spell. Creatures in the same space as a fire when it is created, as well as creatures that pass through the fire on their turn or end their turn in a fire, must make a Dexterity saving throw or take 3d6 fire damage, halved on a success.<br><br>At the start of each of your turns, at least one created fire must spread into all spaces within 5 feet not already on fire. You can choose any number of fires to spread.",
        "duration": "1 minute",
        "empower": "Creates two additional fires.",
        "name": "Wildfire",
        "range": "60 feet",
        "tags": [
            "Conjuration",
            "Fire"
        ],
        "tier": 2
    },
    {
        "cost": "3 AP",
        "desc": "You project a field around you that amplifies the gravity in the area. You and all other creatures inside have your movement reduced to 5 feet and cannot fly. Other creatures take 1d6 bludgeoning damage at the start of each of their turns. Creatures in the area that are flying crash to the ground, taking 1d6 bludgeoning damage per 5 feet fallen.<br><br>Once on each of your turns, you can spend 1 AP to intensify the effect on a creature within range. It must succeed on a Strength saving throw or take 1d12 bludgeoning damage and be knocked prone.",
        "duration": "1 minute",
        "empower": "Your movement speed is halved instead.",
        "name": "Crushing Aura",
        "range": "Self (30 foot radius)",
        "tags": [
            "Conjuration",
            "Space",
            "Physical",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "1 AP",
        "desc": "A powerful aura envelops one of your currently equipped melee weapons. The first time you hit a creature with that weapon during your turns, the aura lashes out at all creatures adjacent to your target other than you, dealing bludgeoning damage equal to half the damage taken by the main target.",
        "duration": "1 minute",
        "empower": "",
        "name": "Impact Boon",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Physical",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "Target creature becomes afflicted with Apostolic Fever. At the start of each of their turns, they must make a Willpower saving throw. On a failure, the fever overwhelms them for that turn. They are poisoned until the start of their next turn, and any action they take that would deal damage causes them to take 2d6 poison damage. When they deal damage while poisoned in this way, they always deal minimum damage.<br><br>A creature that succeeds on three saving throws in a row against this disease fully recovers, ending the spell.",
        "duration": "1 hour",
        "empower": "Poison damage dealt this way ignores resistance and immunity.",
        "name": "Apostolic Fever",
        "range": "60 feet",
        "tags": [
            "Necromancy",
            "Holy",
            "Disease"
        ],
        "tier": 4
    },
    {
        "cost": "1 AP",
        "desc": "You break into a dash, ignoring difficult terrain and other creatures in the way, before leaping<br>forward onto a target point within range and slamming down with great force. Creatures within 5<br>feet of the point of impact must make a Strength saving throw or take 1d6 bludgeoning damage.<br>Creatures that have taken damage from this spell can't move away from you during their next<br>turn until they have successfully hit you with a weapon attack.",
        "duration": "Instantaneous",
        "empower": "Range increased to 60 feet.",
        "name": "Challenger's Charge",
        "range": "30 feet",
        "tags": [
            "Transmutation",
            "Physical",
            "Mobility"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "You transform your hands into large dragon claws. They use either your Strength or your<br>Dexterity to determine your attack and damage bonus, and deal 1d8 slashing damage on a hit.<br>You can't attack with your claws if they are carrying a weapon or shield.<br>While the spell is active, you can make one attack with your claws for 1 AP if both hands are<br>empty.",
        "duration": "1 minute",
        "empower": "The claws grow sharper and deal 1d10 damage instead. A creature struck twice in<br>one turn by your claws takes bonus damage equal to your spellcasting modifier.",
        "name": "Dragon Claws",
        "range": "Self",
        "tags": [
            "Transmutation",
            "Draconic",
            "Physical"
        ],
        "tier": 1
    },
    {
        "cost": "Up to 3 AP",
        "desc": "You create a simple protective field around a target creature in range or in a 10 foot radius area<br>centered on yourself. For each AP spent to cast this, the ward has 3 temporary hit points.<br>Creatures inside a warded area use the ward's hit points first when taking damage.<br>At the start of your next turn, the ward fades.",
        "duration": "Instantaneous",
        "empower": "Add your spellcasting modifier to the final hit point total.",
        "name": "Simple Ward",
        "range": "Touch",
        "tags": [
            "Abjuration",
            "Universal",
            "Arcane"
        ],
        "tier": 1
    },
    {
        "cost": "3 AP",
        "desc": "You call upon one of the ancient dragons that predates written history to breathe upon all creatures in range. They must make a saving throw using their lowest stat or take 20d8 damage of your choice and become frightened of you for 1 minute. A creature that succeeds takes half damage and becomes frightened of you until the end of your next turn. You can choose different damage types for each creature.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Breath of the Ancient",
        "range": "Self (90 foot cone)",
        "tags": [
            "Conjuration",
            "Draconic"
        ],
        "tier": 9
    },
    {
        "cost": "1 AP",
        "desc": "A creature at 0 hit points or a creature you are currently controlling with a Necromancy spell is struck with a jolt of electricity, and immediately takes one non-spell action that costs 2 AP or less. It has disadvantage on all rolls, and its targets have advantage on all required rolls.<br><br>A creature can only be targeted once per turn.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Spark of Action",
        "range": "90 feet",
        "tags": [
            "Necromancy",
            "Lightning"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "With a wave of your hand, a volley of three multicolored arrows of light fly forth. Up to three<br>creatures within range must make a Dexterity saving throw or take 1d8 radiant damage.<br><br>Hit or miss, the arrows remain embedded in whatever they strike, radiating bright light out to 10<br>feet and revealing hidden or invisible creatures within range for the duration. A creature with an<br>arrow stuck in them can spend 1 AP to crush it and end the effect.",
        "duration": "1 minute",
        "empower": "Damage increases to 2d8. Fires an additional arrow at one more target.",
        "name": "Brilliant Arrows",
        "range": "120 feet",
        "tags": [
            "Evocation",
            "Fey",
            "Radiant"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "The shadow of a target creature within range animates, then casts one spell of tier 3 or lower that you know or that you have seen the target cast. The spell costs 0 AP.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Shadow Caster",
        "range": "90 feet",
        "tags": [
            "Conjuration",
            "Arcane",
            "Shadow"
        ],
        "tier": 4
    },
    {
        "cost": "2 AP",
        "desc": "Blessed fire burns an injury on a creature you can see, healing 1d6+2 hit points. This healing<br>benefits from bonuses to fire damage. In addition, the target is cured of the poisoned condition.",
        "duration": "Instantaneous",
        "empower": "Also burns away the weakest negative spell with a duration of 1 minute or less<br>affecting the creature. On a tie, you choose.",
        "name": "Cauterize",
        "range": "60 feet",
        "tags": [
            "Evocation",
            "Fire",
            "Holy",
            "Healing"
        ],
        "tier": 1
    },
    {
        "cost": "1 AP",
        "desc": "A target creature you can see must make a Constitution saving throw or become haunted by a clinging chill. The next three times they take damage before the start of your next turn, they take an additional 1d6 cold damage. A creature that takes damage from this spell three times has their movement speed reduced to 0 until the start of your next turn, and can't use AP outside of their turn.",
        "duration": "Instantaneous",
        "empower": "",
        "name": "Haunting Chill",
        "range": "90 feet",
        "tags": [
            "Necromancy",
            "Cold",
            "Spirit"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Chilling winds blow forth in a 30 foot long, 5 foot wide line. Creatures inside must make a Constitution saving throw or take 3d4 cold damage.<br><br>The winds remain for 1 minute. Creatures moving against the winds use 2 feet of movement for every 1 foot moved.",
        "duration": "1 minute",
        "empower": "Range increased to 45 feet. A successful saving throw deals half damage.",
        "name": "Arctic Winds",
        "range": "Self (30 foot line)",
        "tags": [
            "Conjuration",
            "Cold",
            "Wind"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A lightning bolt strikes your target from out of nowhere, dealing 2d8 lightning damage. The creature must make a Dexterity saving throw or take an additional 3d8 lightning damage, halved on a success.",
        "duration": "Instantaneous",
        "empower": "Initial damage increased to 3d8.",
        "name": "Blue Bolt",
        "range": "90 feet",
        "tags": [
            "Evocation",
            "Lightning"
        ],
        "tier": 2
    },
    {
        "cost": "2 AP",
        "desc": "Conjure a snake of translucent acid that is launched at a target within range. They must make a<br>Dexterity (save?), taking 2d6 acid damage on a failed save, or half as much on a successful<br>one.<br>At the start of each of your turns while the spell is active you can spend 1 AP to launch the<br>snake at another target.",
        "duration": "1 minute",
        "empower": "",
        "name": "Acid Adder",
        "range": "60'",
        "tags": [
            "Conjuration",
            "Acid",
            "Beast"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "Overwhelming melancholy surges through a 20 foot radius sphere centered on a target area in range. Each creature in the area must make an Intuition saving throw or fall victim to this melancholy, increasing all AP costs by 1 for the duration.",
        "duration": "1 minute",
        "empower": "",
        "name": "Gloom Crush",
        "range": "90 feet",
        "tags": [
            "Enchantment",
            "Shadow",
            "Fey",
            "Concentration"
        ],
        "tier": 2
    },
    {
        "cost": "1 AP",
        "desc": "This spell either mechanically locks or jams a doorway, or removes a mechanical lock or jam. If used to unlock a magical lock, make a contested spellcasting ability check against the source's spellcasting DC, dispelling the magical lock on a success.",
        "duration": "Instantaneous ",
        "empower": "",
        "name": "Turnkey",
        "range": "Touch",
        "tags": [
            "Transmutation",
            "Universal"
        ],
        "tier": 1
    },
    {
        "cost": "2 AP",
        "desc": "A 20 foot square centered on target point within range becomes magically infused to preserve its current state. It can't be changed from normal terrain to difficult terrain or vice versa, and spells that would create a persistent area of effect on that ground instead fail to have any effect on the area.<br><br>This spell preserves any existing effects in the area, suspending their duration until the end of this spell.",
        "duration": "1 hour",
        "empower": "",
        "name": "Magus's Entrenchment",
        "range": "30 feet ",
        "tags": [
            "Abjuration",
            "Arcane"
        ],
        "tier": 2
    }
]
