import {
  ringOfGathering,
  earringsOfGathering,
  necklaceOfEfficiency,
  necklaceOfWisdom,
  eyeWatch,
  redChefsHat,
  collectorsBoots,
} from "./data/enhancingTable";
import experienceTable from "./data/experienceTable";

export type itemNamesT =
  | "Milk"
  | "Verdant Milk"
  | "Azure Milk"
  | "Burble Milk"
  | "Crimson Milk"
  | "Rainbow Milk"
  | "Holy Milk"
  | "Cheese"
  | "Verdant Cheese"
  | "Azure Cheese"
  | "Burble Cheese"
  | "Crimson Cheese"
  | "Rainbow Cheese"
  | "Holy Cheese"
  | "Log"
  | "Birch Log"
  | "Cedar Log"
  | "Purpleheart Log"
  | "Ginkgo Log"
  | "Redwood Log"
  | "Arcane Log"
  | "Lumber"
  | "Birch Lumber"
  | "Cedar Lumber"
  | "Purpleheart Lumber"
  | "Ginkgo Lumber"
  | "Redwood Lumber"
  | "Arcane Lumber"
  | "Rough Hide"
  | "Reptile Hide"
  | "Gobo Hide"
  | "Beast Hide"
  | "Umbral Hide"
  | "Rough Leather"
  | "Reptile Leather"
  | "Gobo Leather"
  | "Beast Leather"
  | "Umbral Leather"
  | "Cotton"
  | "Flax"
  | "Bamboo Branch"
  | "Cocoon"
  | "Radiant Fiber"
  | "Cotton Fabric"
  | "Linen Fabric"
  | "Bamboo Fabric"
  | "Silk Fabric"
  | "Radiant Fabric"
  | "Egg"
  | "Wheat"
  | "Sugar"
  | "Blueberry"
  | "Blackberry"
  | "Strawberry"
  | "Mooberry"
  | "Marsberry"
  | "Spaceberry"
  | "Apple"
  | "Orange"
  | "Plum"
  | "Peach"
  | "Dragon Fruit"
  | "Star Fruit"
  | "Arabica Coffee Bean"
  | "Robusta Coffee Bean"
  | "Liberica Coffee Bean"
  | "Excelsa Coffee Bean"
  | "Fieriosa Coffee Bean"
  | "Spacia Coffee Bean"
  | "Green Tea Leaf"
  | "Black Tea Leaf"
  | "Burble Tea Leaf"
  | "Moolong Tea Leaf"
  | "Red Tea Leaf"
  | "Emp Tea Leaf"
  | "Snake Fang"
  | "Shoebill Feather"
  | "Snail Shell"
  | "Crab Pincer"
  | "Turtle Shell"
  | "Marine Scale"
  | "Treant Bark"
  | "Centaur Hoof"
  | "Luna Wing"
  | "Gobo Rag"
  | "Goggles"
  | "Magnifying Glass"
  | "Eye Of The Watcher"
  | "Icy Cloth"
  | "Flaming Cloth"
  | "Sorcerer's Sole"
  | "Chrono Sphere"
  | "Frost Sphere"
  | "Panda Fluff"
  | "Black Bear Fluff"
  | "Grizzly Bear Fluff"
  | "Polar Bear Fluff"
  | "Red Panda Fluff"
  | "Magnet"
  | "Stalactite Shard"
  | "Living Granite"
  | "Colossus Core"
  | "Vampire Fang"
  | "Werewolf Claw"
  | "Revenant Anima"
  | "Soul Fragment"
  | "Infernal Ember"
  | "Demonic Core"
  | "Swamp Essence"
  | "Aqua Essence"
  | "Jungle Essence"
  | "Gobo Essence"
  | "Eyessence"
  | "Sorcerer Essence"
  | "Bear Essence"
  | "Golem Essence"
  | "Twilight Essence"
  | "Abyssal Essence"
  | "Star Fragment"
  | "Pearl"
  | "Amber"
  | "Garnet"
  | "Jade"
  | "Amethyst"
  | "Moonstone"
  | "Crushed Pearl"
  | "Crushed Amber"
  | "Crushed Garnet"
  | "Crushed Jade"
  | "Crushed Amethyst"
  | "Crushed Moonstone"
  | "Shard Of Protection"
  | "Mirror Of Protection"
  | "Donut"
  | "Blueberry Donut"
  | "Blackberry Donut"
  | "Strawberry Donut"
  | "Mooberry Donut"
  | "Marsberry Donut"
  | "Spaceberry Donut"
  | "Cupcake"
  | "Blueberry Cake"
  | "Blackberry Cake"
  | "Strawberry Cake"
  | "Mooberry Cake"
  | "Marsberry Cake"
  | "Spaceberry Cake"
  | "Gummy"
  | "Apple Gummy"
  | "Orange Gummy"
  | "Plum Gummy"
  | "Peach Gummy"
  | "Dragon Fruit Gummy"
  | "Star Fruit Gummy"
  | "Yogurt"
  | "Apple Yogurt"
  | "Orange Yogurt"
  | "Plum Yogurt"
  | "Peach Yogurt"
  | "Dragon Fruit Yogurt"
  | "Star Fruit Yogurt"
  | "Milking Tea"
  | "Foraging Tea"
  | "Woodcutting Tea"
  | "Cooking Tea"
  | "Brewing Tea"
  | "Enhancing Tea"
  | "Cheesesmithing Tea"
  | "Crafting Tea"
  | "Tailoring Tea"
  | "Super Milking Tea"
  | "Super Foraging Tea"
  | "Super Woodcutting Tea"
  | "Super Cooking Tea"
  | "Super Brewing Tea"
  | "Super Enhancing Tea"
  | "Super Cheesesmithing Tea"
  | "Super Crafting Tea"
  | "Super Tailoring Tea"
  | "Gathering Tea"
  | "Gourmet Tea"
  | "Wisdom Tea"
  | "Processing Tea"
  | "Efficiency Tea"
  | "Artisan Tea"
  | "Blessed Tea"
  | "Stamina Coffee"
  | "Intelligence Coffee"
  | "Defence Coffee"
  | "Attack Coffee"
  | "Power Coffee"
  | "Ranged Coffee"
  | "Magic Coffee"
  | "Super Stamina Coffee"
  | "Super Intelligence Coffee"
  | "Super Defence Coffee"
  | "Super Attack Coffee"
  | "Super Power Coffee"
  | "Super Ranged Coffee"
  | "Super Magic Coffee"
  | "Wisdom Coffee"
  | "Lucky Coffee"
  | "Swiftness Coffee"
  | "Channeling Coffee"
  | "Critical Coffee"
  | "Poke"
  | "Pierce"
  | "Puncture"
  | "Scratch"
  | "Cleave"
  | "Maim"
  | "Smack"
  | "Sweep"
  | "Stunning Blow"
  | "Quick Shot"
  | "Aqua Arrow"
  | "Flame Arrow"
  | "Rain Of Arrows"
  | "Silencing Shot"
  | "Steady Shot"
  | "Water Strike"
  | "Ice Spear"
  | "Frost Surge"
  | "Entangle"
  | "Toxic Pollen"
  | "Nature's Veil"
  | "Fireball"
  | "Flame Blast"
  | "Firestorm"
  | "Minor Heal"
  | "Heal"
  | "Toughness"
  | "Elusiveness"
  | "Precision"
  | "Berserk"
  | "Frenzy"
  | "Elemental Affinity"
  | "Spike Shell"
  | "Vampirism"
  | "Gobo Stabber"
  | "Gobo Slasher"
  | "Gobo Smasher"
  | "Spiked Bulwark"
  | "Werewolf Slasher"
  | "Gobo Shooter"
  | "Vampiric Bow"
  | "Gobo Broomstick"
  | "Cheese Bulwark"
  | "Verdant Bulwark"
  | "Azure Bulwark"
  | "Burble Bulwark"
  | "Crimson Bulwark"
  | "Rainbow Bulwark"
  | "Holy Bulwark"
  | "Wooden Bow"
  | "Birch Bow"
  | "Cedar Bow"
  | "Purpleheart Bow"
  | "Ginkgo Bow"
  | "Redwood Bow"
  | "Arcane Bow"
  | "Stalactite Spear"
  | "Granite Bludgeon"
  | "Soul Hunter Crossbow"
  | "Frost Staff"
  | "Infernal Battlestaff"
  | "Cheese Sword"
  | "Verdant Sword"
  | "Azure Sword"
  | "Burble Sword"
  | "Crimson Sword"
  | "Rainbow Sword"
  | "Holy Sword"
  | "Cheese Spear"
  | "Verdant Spear"
  | "Azure Spear"
  | "Burble Spear"
  | "Crimson Spear"
  | "Rainbow Spear"
  | "Holy Spear"
  | "Cheese Mace"
  | "Verdant Mace"
  | "Azure Mace"
  | "Burble Mace"
  | "Crimson Mace"
  | "Rainbow Mace"
  | "Holy Mace"
  | "Wooden Crossbow"
  | "Birch Crossbow"
  | "Cedar Crossbow"
  | "Purpleheart Crossbow"
  | "Ginkgo Crossbow"
  | "Redwood Crossbow"
  | "Arcane Crossbow"
  | "Wooden Water Staff"
  | "Birch Water Staff"
  | "Cedar Water Staff"
  | "Purpleheart Water Staff"
  | "Ginkgo Water Staff"
  | "Redwood Water Staff"
  | "Arcane Water Staff"
  | "Wooden Nature Staff"
  | "Birch Nature Staff"
  | "Cedar Nature Staff"
  | "Purpleheart Nature Staff"
  | "Ginkgo Nature Staff"
  | "Redwood Nature Staff"
  | "Arcane Nature Staff"
  | "Wooden Fire Staff"
  | "Birch Fire Staff"
  | "Cedar Fire Staff"
  | "Purpleheart Fire Staff"
  | "Ginkgo Fire Staff"
  | "Redwood Fire Staff"
  | "Arcane Fire Staff"
  | "Eye Watch"
  | "Snake Fang Dirk"
  | "Vision Shield"
  | "Gobo Defender"
  | "Vampire Fang Dirk"
  | "Treant Shield"
  | "Tome Of Healing"
  | "Tome Of The Elements"
  | "Watchful Relic"
  | "Cheese Buckler"
  | "Verdant Buckler"
  | "Azure Buckler"
  | "Burble Buckler"
  | "Crimson Buckler"
  | "Rainbow Buckler"
  | "Holy Buckler"
  | "Wooden Shield"
  | "Birch Shield"
  | "Cedar Shield"
  | "Purpleheart Shield"
  | "Ginkgo Shield"
  | "Redwood Shield"
  | "Arcane Shield"
  | "Red Chef's Hat"
  | "Snail Shell Helmet"
  | "Vision Helmet"
  | "Fluffy Red Hat"
  | "Cheese Helmet"
  | "Verdant Helmet"
  | "Azure Helmet"
  | "Burble Helmet"
  | "Crimson Helmet"
  | "Vision Helmet"
  | "Rainbow Helmet"
  | "Holy Helmet"
  | "Rough Hood"
  | "Reptile Hood"
  | "Gobo Hood"
  | "Beast Hood"
  | "Umbral Hood"
  | "Cotton Hat"
  | "Linen Hat"
  | "Bamboo Hat"
  | "Silk Hat"
  | "Radiant Hat"
  | "Gator Vest"
  | "Turtle Shell Body"
  | "Colossus Plate Body"
  | "Demonic Plate Body"
  | "Marine Tunic"
  | "Revenant Tunic"
  | "Icy Robe Top"
  | "Flaming Robe Top"
  | "Luna Robe Top"
  | "Cheese Plate Body"
  | "Verdant Plate Body"
  | "Azure Plate Body"
  | "Burble Plate Body"
  | "Crimson Plate Body"
  | "Rainbow Plate Body"
  | "Holy Plate Body"
  | "Rough Tunic"
  | "Reptile Tunic"
  | "Gobo Tunic"
  | "Beast Tunic"
  | "Umbral Tunic"
  | "Cotton Robe Top"
  | "Linen Robe Top"
  | "Bamboo Robe Top"
  | "Silk Robe Top"
  | "Radiant Robe Top"
  | "Turtle Shell Legs"
  | "Colossus Plate Legs"
  | "Demonic Plate Legs"
  | "Marine Chaps"
  | "Revenant Chaps"
  | "Icy Robe Bottoms"
  | "Flaming Robe Bottoms"
  | "Luna Robe Bottoms"
  | "Cheese Plate Legs"
  | "Verdant Plate Legs"
  | "Azure Plate Legs"
  | "Burble Plate Legs"
  | "Crimson Plate Legs"
  | "Rainbow Plate Legs"
  | "Holy Plate Legs"
  | "Rough Chaps"
  | "Reptile Chaps"
  | "Gobo Chaps"
  | "Beast Chaps"
  | "Umbral Chaps"
  | "Cotton Robe Bottoms"
  | "Linen Robe Bottoms"
  | "Bamboo Robe Bottoms"
  | "Silk Robe Bottoms"
  | "Radiant Robe Bottoms"
  | "Enchanted Gloves"
  | "Pincer Gloves"
  | "Panda Gloves"
  | "Magnetic Gloves"
  | "Sighted Bracers"
  | "Chrono Gloves"
  | "Cheese Gauntlets"
  | "Verdant Gauntlets"
  | "Azure Gauntlets"
  | "Burble Gauntlets"
  | "Crimson Gauntlets"
  | "Rainbow Gauntlets"
  | "Holy Gauntlets"
  | "Rough Bracers"
  | "Reptile Bracers"
  | "Gobo Bracers"
  | "Beast Bracers"
  | "Umbral Bracers"
  | "Cotton Gloves"
  | "Linen Gloves"
  | "Bamboo Gloves"
  | "Silk Gloves"
  | "Radiant Gloves"
  | "Collecter's Boots"
  | "Shoebill Shoes"
  | "Black Bear Shoes"
  | "Grizzly Bear Shoes"
  | "Polar Bear Shoes"
  | "Centaur Boots"
  | "Sorcerer Boots"
  | "Cheese Boots"
  | "Verdant Boots"
  | "Azure Boots"
  | "Burble Boots"
  | "Crimson Boots"
  | "Rainbow Boots"
  | "Holy Boots"
  | "Rough Boots"
  | "Reptile Boots"
  | "Gobo Boots"
  | "Beast Boots"
  | "Umbral Boots"
  | "Cotton Boots"
  | "Linen Boots"
  | "Bamboo Boots"
  | "Silk Boots"
  | "Radiant Boots"
  | "Necklace Of Efficiency"
  | "Fighter Necklace"
  | "Ranger Necklace"
  | "Wizard Necklace"
  | "Necklace Of Wisdom"
  | "Earrings Of Gathering"
  | "Earrings Of Armor"
  | "Earrings Of Regeneration"
  | "Earrings Of Resistance"
  | "Earrings Of Rare Find"
  | "Ring Of Gathering"
  | "Ring Of Armor"
  | "Ring Of Regeneration"
  | "Ring Of Resistance"
  | "Ring Of Rare Find"
  | "Small Pouch"
  | "Medium Pouch"
  | "Large Pouch"
  | "Giant Pouch"
  | "Cheese Brush"
  | "Verdant Brush"
  | "Azure Brush"
  | "Burble Brush"
  | "Crimson Brush"
  | "Rainbow Brush"
  | "Holy Brush"
  | "Cheese Shears"
  | "Verdant Shears"
  | "Azure Shears"
  | "Burble Shears"
  | "Crimson Shears"
  | "Rainbow Shears"
  | "Holy Shears"
  | "Cheese Hatchet"
  | "Verdant Hatchet"
  | "Azure Hatchet"
  | "Burble Hatchet"
  | "Crimson Hatchet"
  | "Rainbow Hatchet"
  | "Holy Hatchet"
  | "Cheese Hammer"
  | "Verdant Hammer"
  | "Azure Hammer"
  | "Burble Hammer"
  | "Crimson Hammer"
  | "Rainbow Hammer"
  | "Holy Hammer"
  | "Cheese Chisel"
  | "Verdant Chisel"
  | "Azure Chisel"
  | "Burble Chisel"
  | "Crimson Chisel"
  | "Rainbow Chisel"
  | "Holy Chisel"
  | "Cheese Needle"
  | "Verdant Needle"
  | "Azure Needle"
  | "Burble Needle"
  | "Crimson Needle"
  | "Rainbow Needle"
  | "Holy Needle"
  | "Cheese Spatula"
  | "Verdant Spatula"
  | "Azure Spatula"
  | "Burble Spatula"
  | "Crimson Spatula"
  | "Rainbow Spatula"
  | "Holy Spatula"
  | "Cheese Pot"
  | "Verdant Pot"
  | "Azure Pot"
  | "Burble Pot"
  | "Crimson Pot"
  | "Rainbow Pot"
  | "Holy Pot"
  | "Cheese Enhancer"
  | "Verdant Enhancer"
  | "Azure Enhancer"
  | "Burble Enhancer"
  | "Crimson Enhancer"
  | "Rainbow Enhancer"
  | "Holy Enhancer"
  | "Basic Task Ring"
  | "Advanced Task Ring"
  | "Expert Task Ring"
  | "Task Crystal"
  | "Cowbell"
  | "Coin"
  | "Task Token"
  | "Purple's Gift"
  | "Small Meteorite Cache"
  | "Medium Meteorite Cache"
  | "Large Meteorite Cache"
  | "Small Artisan's Crate"
  | "Medium Artisan's Crate"
  | "Large Artisan's Crate"
  | "Small Treasure Chest"
  | "Medium Treasure Chest"
  | "Large Treasure Chest";

export type itemTypesT =
  | "Resources"
  | "Foods"
  | "Drinks"
  | "Ability Books"
  | "Equipment"
  | "Currency"
  | "Loots";

export type actionNamesT =
  | "Cow"
  | "Verdant Cow"
  | "Azure Cow"
  | "Burble Cow"
  | "Crimson Cow"
  | "Unicow"
  | "Holy Cow"
  | "Egg"
  | "Wheat"
  | "Sugar"
  | "Cotton"
  | "Farmland"
  | "Blueberry"
  | "Apple"
  | "Arabica Coffee Bean"
  | "Flax"
  | "Shimmering Lake"
  | "Blackberry"
  | "Orange"
  | "Robusta Coffee Bean"
  | "Misty Forest"
  | "Strawberry"
  | "Plum"
  | "Liberica Coffee Bean"
  | "Bamboo Branch"
  | "Burble Beach"
  | "Mooberry"
  | "Peach"
  | "Excelsa Coffee Bean"
  | "Cocoon"
  | "Silly Cow Valley"
  | "Marsberry"
  | "Dragon Fruit"
  | "Fieriosa Coffee Bean"
  | "Olympus Mons"
  | "Spaceberry"
  | "Star Fruit"
  | "Spacia Coffee Bean"
  | "Radiant Fiber"
  | "Asteroid Belt"
  | "Tree"
  | "Birch Tree"
  | "Cedar Tree"
  | "Purpleheart Tree"
  | "Ginkgo Tree"
  | "Redwood Tree"
  | "Arcane Tree"
  | "Cheese"
  | "Verdant Cheese"
  | "Azure Cheese"
  | "Burble Cheese"
  | "Crimson Cheese"
  | "Rainbow Cheese"
  | "Holy Cheese"
  | "Cheese Brush"
  | "Cheese Shears"
  | "Cheese Hatchet"
  | "Cheese Hammer"
  | "Cheese Chisel"
  | "Cheese Needle"
  | "Cheese Spatula"
  | "Cheese Pot"
  | "Cheese Enhancer"
  | "Verdant Brush"
  | "Verdant Shears"
  | "Verdant Hatchet"
  | "Verdant Hammer"
  | "Verdant Chisel"
  | "Verdant Needle"
  | "Verdant Spatula"
  | "Verdant Pot"
  | "Verdant Enhancer"
  | "Azure Brush"
  | "Azure Shears"
  | "Azure Hatchet"
  | "Azure Hammer"
  | "Azure Chisel"
  | "Azure Needle"
  | "Azure Spatula"
  | "Azure Pot"
  | "Azure Enhancer"
  | "Burble Brush"
  | "Burble Shears"
  | "Burble Hatchet"
  | "Burble Hammer"
  | "Burble Chisel"
  | "Burble Needle"
  | "Burble Spatula"
  | "Burble Pot"
  | "Burble Enhancer"
  | "Crimson Brush"
  | "Crimson Shears"
  | "Crimson Hatchet"
  | "Crimson Hammer"
  | "Crimson Chisel"
  | "Crimson Needle"
  | "Crimson Spatula"
  | "Crimson Pot"
  | "Crimson Enhancer"
  | "Rainbow Brush"
  | "Rainbow Shears"
  | "Rainbow Hatchet"
  | "Rainbow Hammer"
  | "Rainbow Chisel"
  | "Rainbow Needle"
  | "Rainbow Spatula"
  | "Rainbow Pot"
  | "Rainbow Enhancer"
  | "Holy Brush"
  | "Holy Shears"
  | "Holy Hatchet"
  | "Holy Hammer"
  | "Holy Chisel"
  | "Holy Needle"
  | "Holy Spatula"
  | "Holy Pot"
  | "Holy Enhancer"
  | "Cheese Sword"
  | "Cheese Spear"
  | "Cheese Mace"
  | "Verdant Sword"
  | "Verdant Spear"
  | "Verdant Mace"
  | "Azure Sword"
  | "Azure Spear"
  | "Azure Mace"
  | "Burble Sword"
  | "Burble Spear"
  | "Burble Mace"
  | "Crimson Sword"
  | "Crimson Spear"
  | "Crimson Mace"
  | "Rainbow Sword"
  | "Rainbow Spear"
  | "Rainbow Mace"
  | "Holy Sword"
  | "Holy Spear"
  | "Holy Mace"
  | "Stalactite Spear"
  | "Granite Bludgeon"
  | "Cheese Bulwark"
  | "Verdant Bulwark"
  | "Azure Bulwark"
  | "Burble Bulwark"
  | "Crimson Bulwark"
  | "Rainbow Bulwark"
  | "Werewolf Slasher"
  | "Holy Bulwark"
  | "Spiked Bulwark"
  | "Cheese Buckler"
  | "Snake Fang Dirk"
  | "Verdant Buckler"
  | "Azure Buckler"
  | "Burble Buckler"
  | "Crimson Buckler"
  | "Vision Shield"
  | "Rainbow Buckler"
  | "Vampire Fang Dirk"
  | "Holy Buckler"
  | "Cheese Boots"
  | "Verdant Boots"
  | "Azure Boots"
  | "Burble Boots"
  | "Crimson Boots"
  | "Rainbow Boots"
  | "Black Bear Shoes"
  | "Grizzly Bear Shoes"
  | "Polar Bear Shoes"
  | "Holy Boots"
  | "Cheese Gauntlets"
  | "Verdant Gauntlets"
  | "Azure Gauntlets"
  | "Pincer Gloves"
  | "Burble Gauntlets"
  | "Crimson Gauntlets"
  | "Rainbow Gauntlets"
  | "Panda Gloves"
  | "Holy Gauntlets"
  | "Magnetic Gloves"
  | "Cheese Helmet"
  | "Verdant Helmet"
  | "Azure Helmet"
  | "Snail Shell Helmet"
  | "Burble Helmet"
  | "Crimson Helmet"
  | "Vision Helmet"
  | "Rainbow Helmet"
  | "Holy Helmet"
  | "Cheese Plate Legs"
  | "Verdant Plate Legs"
  | "Azure Plate Legs"
  | "Turtle Shell Legs"
  | "Burble Plate Legs"
  | "Crimson Plate Legs"
  | "Rainbow Plate Legs"
  | "Holy Plate Legs"
  | "Colossus Plate Legs"
  | "Demonic Plate Legs"
  | "Cheese Plate Body"
  | "Verdant Plate Body"
  | "Azure Plate Body"
  | "Turtle Shell Body"
  | "Burble Plate Body"
  | "Crimson Plate Body"
  | "Rainbow Plate Body"
  | "Holy Plate Body"
  | "Colossus Plate Body"
  | "Demonic Plate Body"
  | "Lumber"
  | "Birch Lumber"
  | "Cedar Lumber"
  | "Purpleheart Lumber"
  | "Ginkgo Lumber"
  | "Redwood Lumber"
  | "Arcane Lumber"
  | "Wooden Crossbow"
  | "Birch Crossbow"
  | "Cedar Crossbow"
  | "Purpleheart Crossbow"
  | "Ginkgo Crossbow"
  | "Redwood Crossbow"
  | "Arcane Crossbow"
  | "Soul Hunter Crossbow"
  | "Wooden Bow"
  | "Birch Bow"
  | "Cedar Bow"
  | "Purpleheart Bow"
  | "Ginkgo Bow"
  | "Redwood Bow"
  | "Arcane Bow"
  | "Vampiric Bow"
  | "Wooden Water Staff"
  | "Wooden Nature Staff"
  | "Wooden Fire Staff"
  | "Birch Water Staff"
  | "Birch Nature Staff"
  | "Birch Fire Staff"
  | "Cedar Water Staff"
  | "Cedar Nature Staff"
  | "Cedar Fire Staff"
  | "Purpleheart Water Staff"
  | "Purpleheart Nature Staff"
  | "Purpleheart Fire Staff"
  | "Ginkgo Water Staff"
  | "Ginkgo Nature Staff"
  | "Ginkgo Fire Staff"
  | "Redwood Water Staff"
  | "Redwood Nature Staff"
  | "Redwood Fire Staff"
  | "Arcane Water Staff"
  | "Arcane Nature Staff"
  | "Arcane Fire Staff"
  | "Frost Staff"
  | "Infernal Battlestaff"
  | "Wooden Shield"
  | "Birch Shield"
  | "Cedar Shield"
  | "Purpleheart Shield"
  | "Treant Shield"
  | "Ginkgo Shield"
  | "Redwood Shield"
  | "Eye Watch"
  | "Watchful Relic"
  | "Arcane Shield"
  | "Basic Task Ring"
  | "Advanced Task Ring"
  | "Expert Task Ring"
  | "Ring Of Gathering"
  | "Ring Of Armor"
  | "Ring Of Regeneration"
  | "Ring Of Resistance"
  | "Ring Of Rare Find"
  | "Earrings Of Gathering"
  | "Earrings Of Armor"
  | "Earrings Of Regeneration"
  | "Earrings Of Resistance"
  | "Earrings Of Rare Find"
  | "Necklace Of Efficiency"
  | "Fighter Necklace"
  | "Ranger Necklace"
  | "Wizard Necklace"
  | "Necklace Of Wisdom"
  | "Crushed Pearl"
  | "Crushed Amber"
  | "Crushed Garnet"
  | "Crushed Jade"
  | "Crushed Amethyst"
  | "Crushed Moonstone"
  | "Mirror Of Protection"
  | "Rough Leather"
  | "Cotton Fabric"
  | "Reptile Leather"
  | "Linen Fabric"
  | "Gobo Leather"
  | "Bamboo Fabric"
  | "Beast Leather"
  | "Silk Fabric"
  | "Umbral Leather"
  | "Radiant Fabric"
  | "Rough Boots"
  | "Cotton Boots"
  | "Reptile Boots"
  | "Linen Boots"
  | "Shoebill Shoes"
  | "Gobo Boots"
  | "Bamboo Boots"
  | "Beast Boots"
  | "Silk Boots"
  | "Collecter's Boots"
  | "Centaur Boots"
  | "Sorcerer Boots"
  | "Umbral Boots"
  | "Radiant Boots"
  | "Rough Bracers"
  | "Cotton Gloves"
  | "Reptile Bracers"
  | "Linen Gloves"
  | "Gobo Bracers"
  | "Bamboo Gloves"
  | "Beast Bracers"
  | "Silk Gloves"
  | "Sighted Bracers"
  | "Umbral Bracers"
  | "Radiant Gloves"
  | "Enchanted Gloves"
  | "Chrono Gloves"
  | "Rough Hood"
  | "Cotton Hat"
  | "Reptile Hood"
  | "Linen Hat"
  | "Gobo Hood"
  | "Bamboo Hat"
  | "Beast Hood"
  | "Silk Hat"
  | "Red Chef's Hat"
  | "Fluffy Red Hat"
  | "Umbral Hood"
  | "Radiant Hat"
  | "Rough Chaps"
  | "Cotton Robe Bottoms"
  | "Reptile Chaps"
  | "Linen Robe Bottoms"
  | "Gobo Chaps"
  | "Bamboo Robe Bottoms"
  | "Marine Chaps"
  | "Icy Robe Bottoms"
  | "Flaming Robe Bottoms"
  | "Beast Chaps"
  | "Silk Robe Bottoms"
  | "Luna Robe Bottoms"
  | "Umbral Chaps"
  | "Radiant Robe Bottoms"
  | "Revenant Chaps"
  | "Rough Tunic"
  | "Cotton Robe Top"
  | "Reptile Tunic"
  | "Linen Robe Top"
  | "Gobo Tunic"
  | "Bamboo Robe Top"
  | "Marine Tunic"
  | "Icy Robe Top"
  | "Flaming Robe Top"
  | "Beast Tunic"
  | "Silk Robe Top"
  | "Luna Robe Top"
  | "Umbral Tunic"
  | "Radiant Robe Top"
  | "Revenant Tunic"
  | "Small Pouch"
  | "Medium Pouch"
  | "Large Pouch"
  | "Giant Pouch"
  | "Donut"
  | "Blueberry Donut"
  | "Blackberry Donut"
  | "Strawberry Donut"
  | "Mooberry Donut"
  | "Marsberry Donut"
  | "Spaceberry Donut"
  | "Cupcake"
  | "Blueberry Cake"
  | "Blackberry Cake"
  | "Strawberry Cake"
  | "Mooberry Cake"
  | "Marsberry Cake"
  | "Spaceberry Cake"
  | "Gummy"
  | "Apple Gummy"
  | "Orange Gummy"
  | "Plum Gummy"
  | "Peach Gummy"
  | "Dragon Fruit Gummy"
  | "Star Fruit Gummy"
  | "Yogurt"
  | "Apple Yogurt"
  | "Orange Yogurt"
  | "Plum Yogurt"
  | "Peach Yogurt"
  | "Dragon Fruit Yogurt"
  | "Star Fruit Yogurt"
  | "Milking Tea"
  | "Foraging Tea"
  | "Gathering Tea"
  | "Woodcutting Tea"
  | "Cooking Tea"
  | "Brewing Tea"
  | "Gourmet Tea"
  | "Enhancing Tea"
  | "Cheesesmithing Tea"
  | "Crafting Tea"
  | "Wisdom Tea"
  | "Tailoring Tea"
  | "Super Milking Tea"
  | "Super Foraging Tea"
  | "Processing Tea"
  | "Super Woodcutting Tea"
  | "Super Cooking Tea"
  | "Super Brewing Tea"
  | "Efficiency Tea"
  | "Super Enhancing Tea"
  | "Super Cheesesmithing Tea"
  | "Artisan Tea"
  | "Super Crafting Tea"
  | "Super Tailoring Tea"
  | "Blessed Tea"
  | "Stamina Coffee"
  | "Intelligence Coffee"
  | "Defence Coffee"
  | "Attack Coffee"
  | "Power Coffee"
  | "Ranged Coffee"
  | "Wisdom Coffee"
  | "Magic Coffee"
  | "Super Stamina Coffee"
  | "Super Intelligence Coffee"
  | "Lucky Coffee"
  | "Super Defence Coffee"
  | "Super Attack Coffee"
  | "Swiftness Coffee"
  | "Channeling Coffee"
  | "Super Power Coffee"
  | "Super Ranged Coffee"
  | "Critical Coffee"
  | "Super Magic Coffee"
  | "Fly"
  | "Jerry"
  | "Skunk"
  | "Porcupine"
  | "Slimy"
  | "Smelly Planet"
  | "Frogger"
  | "Thnake"
  | "Swampy"
  | "Sherlock"
  | "Swamp Planet"
  | "Gary"
  | "I Pinch"
  | "Aquahorse"
  | "Nom Nom"
  | "Turuto"
  | "Aqua Planet"
  | "Jungle Sprite"
  | "Myconid"
  | "Treant"
  | "Centaur Archer"
  | "Jungle Planet"
  | "Stabby"
  | "Slashy"
  | "Smashy"
  | "Shooty"
  | "Boomy"
  | "Gobo Planet"
  | "Eye"
  | "Eyes"
  | "Veyes"
  | "Planet Of The Eyes"
  | "Novice Sorcerer"
  | "Ice Sorcerer"
  | "Flame Sorcerer"
  | "Elementalist"
  | "Sorcerer's Tower"
  | "Gummy Bear"
  | "Panda"
  | "Black Bear"
  | "Grizzly Bear"
  | "Polar Bear"
  | "Bear With It"
  | "Magnetic Golem"
  | "Stalactite Golem"
  | "Granite Golem"
  | "Golem Cave"
  | "Zombie"
  | "Vampire"
  | "Werewolf"
  | "Twilight Zone"
  | "Abyssal Imp"
  | "Soul Hunter"
  | "Infernal Warlock"
  | "Infernal Abyss";

export type skillT =
  | "Milking"
  | "Foraging"
  | "Woodcutting"
  | "Cheesesmithing"
  | "Crafting"
  | "Tailoring"
  | "Cooking"
  | "Brewing"
  | "Enhancing"
  | "Combat";

export type marketDataT = {
  [key in itemNames]: {
    ask: number;
    bid: number;
    vendor: number;
  };
};

export type itemDataT = {
  [key in itemNamesT]: {
    type: itemTypesT;
    vendor: number;
    getFrom: {
      [key: actionNamesT]: skillT;
    };
  };
};

export type actionDataT = {
  [key in actionNamesT]: {
    skill: skillT;
    time: number;
    exp: number;
    level: number;
    inputs: {
      [key: itemNamesT]: number;
    };
    upgradeFrom?: itemNamesT;
    outputs: {
      [key: itemNamesT]: {
        quantity: string;
        chance: number;
      };
    };
    rareOutputs: {
      [key: itemNamesT]: {
        quantity: string;
        chance: number;
      };
    };
  };
};

export type ingredientsT = Array<{
  itemName: itemNamesT;
  count: number;
  cost: number;
  time: number;
  actions?: number;
  _ingredientDepth: number;
}>;

export type changeLogT = Array<{ release: string; date: string; info: string }>;

type UserConstructorT = {
  skills: {
    Milking: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Milking: boolean;
        superMilking: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Foraging: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Foraging: boolean;
        superForaging: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Woodcutting: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Woodcutting: boolean;
        superWoodcutting: boolean;
        gathering: boolean;
        wisdom: boolean;
        processing: boolean;
        efficiency: boolean;
      };
    };
    Cheesesmithing: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Cheesesmithing: boolean;
        superCheesesmithing: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Crafting: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Crafting: boolean;
        superCrafting: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Tailoring: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Tailoring: boolean;
        superTailoring: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Cooking: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Cooking: boolean;
        superCooking: boolean;
        gourmet: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Brewing: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Brewing: boolean;
        superBrewing: boolean;
        gourmet: boolean;
        wisdom: boolean;
        efficiency: boolean;
        artisan: boolean;
      };
    };
    Enhancing: {
      level: number; // integer
      speed: number; // percentage
      exp: number; // integer
      tea: {
        Enhancing: boolean;
        superEnhancing: boolean;
        wisdom: boolean;
        efficiency: boolean;
        blessed: boolean;
      };
    };
  };
  items: {
    ringOfGathering: number;
    earringsOfGathering: number;
    necklaceOfEfficiency: number;
    necklaceOfWisdom: number;
    eyeWatch: number;
    redChefsHat: number;
    collectorsBoots: number;
  };
  communityBuffs: {
    experience: number; // percentage
    gathering: number; // percentage
    production: number; // percentage
    enhancing: number; // percentage
    combatDrop: number; // percentage
  };
  item: itemNamesT;
  quantity: number;
  inventory: Record<string, number>;
};

type gather = "Milking" | "Foraging" | "Woodcutting";
type making = "Cheesesmithing" | "Crafting" | "Tailoring";
type consumable = "Cooking" | "Brewing";

export class User {
  readonly skills: UserConstructorT["skills"];
  readonly items: UserConstructorT["items"];
  readonly communityBuffs: UserConstructorT["communityBuffs"];
  readonly item: itemNamesT;
  readonly quantity: number;
  readonly inventory: Record<string, number>;
  constructor(userDetails?: UserConstructorT) {
    if (!userDetails) {
      this.skills = {
        Milking: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Milking: false,
            superMilking: false,
            gathering: false,
            wisdom: false,
            processing: false,
            efficiency: false,
          },
        },
        Foraging: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Foraging: false,
            superForaging: false,
            gathering: false,
            wisdom: false,
            processing: false,
            efficiency: false,
          },
        },
        Woodcutting: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Woodcutting: false,
            superWoodcutting: false,
            gathering: false,
            wisdom: false,
            processing: false,
            efficiency: false,
          },
        },
        Cheesesmithing: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Cheesesmithing: false,
            superCheesesmithing: false,
            wisdom: false,
            efficiency: false,
            artisan: false,
          },
        },
        Crafting: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Crafting: false,
            superCrafting: false,
            wisdom: false,
            efficiency: false,
            artisan: false,
          },
        },
        Tailoring: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Tailoring: false,
            superTailoring: false,
            wisdom: false,
            efficiency: false,
            artisan: false,
          },
        },
        Cooking: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Cooking: false,
            superCooking: false,
            gourmet: false,
            wisdom: false,
            efficiency: false,
            artisan: false,
          },
        },
        Brewing: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Brewing: false,
            superBrewing: false,
            gourmet: false,
            wisdom: false,
            efficiency: false,
            artisan: false,
          },
        },
        Enhancing: {
          level: 1,
          speed: 0,
          exp: 0,
          tea: {
            Enhancing: false,
            superEnhancing: false,
            wisdom: false,
            efficiency: false,
            blessed: false,
          },
        },
      };
      this.items = {
        ringOfGathering: -1,
        earringsOfGathering: -1,
        necklaceOfEfficiency: -1,
        necklaceOfWisdom: -1,
        eyeWatch: -1,
        redChefsHat: -1,
        collectorsBoots: -1,
      };
      this.communityBuffs = {
        experience: 0,
        gathering: 0,
        production: 0,
        enhancing: 0,
        combatDrop: 0,
      };
      this.item = "Milk";
      this.quantity = 1;
    } else {
      this.skills = userDetails.skills;
      this.items = userDetails.items;
      this.communityBuffs = userDetails.communityBuffs;
      this.item = userDetails.item;
      this.quantity = userDetails.quantity;
      this.inventory =
        typeof userDetails.inventory === "object" ? userDetails.inventory : {};
      Object.keys(userDetails.skills).forEach((skill) => {
        if (skill.exp < 0) {
          this.userDetails.skills[skill].exp =
            experienceTable[userDetails.skills[skill].level];
        }
      });
    }
  }

  set edit(change: object) {
    if (change.skills) {
      Object.keys(change.skills).forEach((skill) => {
        const tea = { ...this.skills[skill].tea, ...change.skills[skill].tea };
        this.skills[skill] = {
          ...this.skills[skill],
          ...change.skills[skill],
          tea,
        };
      });
    }
    if (change.items) {
      this.items = { ...this.items, ...change.items };
    }
    if (change.communityBuffs) {
      this.communityBuffs = {
        ...this.communityBuffs,
        ...change.communityBuffs,
      };
    }
    if (change.item) this.item = change.item;
    if (change.quantity) this.quantity = change.quantity;
    if (change.inventory) this.inventory = change.inventory;
  }

  speed(skill: skillT): number {
    if (skill === "Combat") return 1;
    const tools = this.skills[skill].speed / 100;
    return 1 + tools;
  }

  efficiency(skill: skillT): number {
    if (skill === "Enhancing" || skill === "Combat") return 1;
    const level =
      (this.skills[skill].level +
        this.skills[skill].tea[skill] * 3 +
        this.skills[skill].tea[`super${skill}`] * 6) /
      100;
    const tea = this.skills[skill].tea.efficiency ? 0.1 : 0;
    const community = this.communityBuffs.production / 100;
    let item = 0;
    if (this.items.necklaceOfEfficiency >= 0) {
      item += necklaceOfEfficiency[this.items.necklaceOfEfficiency] / 100;
    }
    if (
      (skill === "Cheesesmithing" ||
        skill === "Tailoring" ||
        skill === "Crafting") &&
      this.items.eyeWatch >= 0
    ) {
      item += eyeWatch[this.items.eyeWatch] / 100;
    }
    if (
      (skill === "Brewing" || skill === "Cooking") &&
      this.items.redChefsHat >= 0
    ) {
      item += redChefsHat[this.items.redChefsHat] / 100;
    }
    if (
      (skill === "Milking" ||
        skill === "Foraging" ||
        skill === "Woodcutting") &&
      this.items.collectorsBoots >= 0
    ) {
      item += collectorsBoots[this.items.collectorsBoots] / 100;
    }
    return 1 + level + tea + community + item;
  }

  wisdom(skill: skillT): number {
    if (skill === "Combat") return 1;
    const tea = this.skills[skill].tea.wisdom ? 0.12 : 0;
    const community = this.communityBuffs.experience / 100;
    let item = 0;
    if (this.items.necklaceOfWisdom >= 0) {
      item += necklaceOfWisdom[this.items.necklaceOfWisdom] / 100;
    }
    return 1 + tea + community + item;
  }

  gathering(skill: skillT): number {
    if (skill !== "Milking" && skill !== "Foraging" && skill !== "Woodcutting")
      return 1;
    const tea = this.skills[skill].tea.gathering ? 0.15 : 0;
    const community = this.communityBuffs.gathering / 100;
    let item = 0;
    if (this.items.ringOfGathering >= 0) {
      item += ringOfGathering[this.items.ringOfGathering] / 100;
    }
    if (this.items.earringsOfGathering >= 0) {
      item += earringsOfGathering[this.items.earringsOfGathering] / 100;
    }
    return 1 + tea + community + item;
  }

  processing(skill: skillT): number {
    if (skill !== "Milking" && skill !== "Foraging" && skill !== "Woodcutting")
      return 1;
    const tea = this.skills[skill].tea.processing ? 0.15 : 0;
    return 1 + tea;
  }

  artisan(skill: skillT): number {
    if (
      skill !== "Cooking" &&
      skill !== "Brewing" &&
      skill !== "Cheesesmithing" &&
      skill !== "Crafting" &&
      skill !== "Tailoring"
    )
      return 1;
    const tea = this.skills[skill].tea.artisan ? -0.1 : 0;
    return 1 + tea;
  }

  gourmet(skill: skillT): number {
    if (skill !== "Brewing" && skill !== "Cooking") return 1;
    const tea = this.skills[skill].tea.gourmet ? 0.12 : 0;
    return 1 + tea;
  }

  get save(): string {
    const save: UserConstructorT = {
      skills: { ...this.skills },
      items: { ...this.items },
      communityBuffs: { ...this.communityBuffs },
      item: this.item,
      quantity: this.quantity,
      inventory: { ...this.inventory },
    };
    return JSON.stringify(save);
  }

  set load(saveString: string): void {
    const save = JSON.parse(saveString);
    this.skills = save.skills;
    this.items = save.items;
    this.communityBuffs = save.communityBuffs;
    this.item = save.item;
    this.quantity = save.quantity;
    this.inventory = save.inventory;
  }
}

type ItemConstructorT = {
  itemName: itemNamesT;
  itemType: itemTypesT;
  vendorPrice: number;
  getFrom: {
    [key: actionNamesT]: skillT;
  };
};

export class Item {
  name: itemNamesT;
  type: itemTypesT;
  vendor: number;
  getFrom: {
    [key: actionNamesT]: skillT;
  };
  constructor(item: ItemConstructorT) {
    this.name = item.itemName;
    this.type = item.itemType;
    this.vendor = item.vendorPrice;
    this.getFrom = { ...item.getFrom };
  }

  price(marketData: marketDataT) {
    let sum = 0;
    if (marketData[this.name].ask > 0 && marketData[this.name].bid > 0) {
      sum += (marketData[this.name].ask + marketData[this.name].bid) / 2;
      return sum;
    } else if (marketData[this.name].bid > 0) {
      sum += marketData[this.name].bid;
      return sum;
    } else if (marketData[this.name].ask > 0) {
      sum += (marketData[this.name].ask + this.vendor) / 2;
      return sum;
    } else return this.vendor;
  }

  get new(): ItemConstructorT {
    return {
      itemName: this.name,
      type: this.type,
      vendorPrice: this.vendor,
      getFrom: { ...this.getFrom },
    };
  }

  get canGetFrom(): Array<skillT> {
    return Object.values(this.getFrom)
      .sort()
      .reduce((a, e) => (a.includes(e) ? a : [...a, e]), []);
  }

  get get(): Array<actionNamesT> {
    if (this.canGetFrom.filter((x) => x !== "Combat").length > 0) {
      return Object.entries(this.getFrom).reduce(
        (acc, [a, s]) => (s === "Combat" ? acc : acc.concat(a)),
        []
      );
    } else return [];
  }
}

type ActionConstructorT = {
  actionName: actionNamesT;
  skill: skillT;
  time: number;
  exp: number;
  level: number;
  inputs: {
    [key: itemNamesT]: number;
  };
  upgradeFrom?: itemNamesT;
  outputs: {
    [key: itemNamesT]: {
      quantity: string;
      chance: number;
    };
  };
  rareOutputs: {
    [key: itemNamesT]: {
      quantity: string;
      chance: number;
    };
  };
};

export class Action {
  name: actionNamesT;
  skill: skillT;
  time: number;
  exp: number;
  level: number;
  inputs: {
    [key: itemNamesT]: number;
  };
  upgradeFrom?: itemNamesT;
  outputs: {
    [key: itemNamesT]: {
      quantity: string;
      chance: number;
    };
  };
  rareOutputs: {
    [key: itemNamesT]: {
      quantity: string;
      chance: number;
    };
  };
  constructor(action: ActionConstructorT) {
    this.name = action.actionName;
    this.skill = action.skill;
    this.time = action.time;
    this.exp = action.exp;
    this.level = action.level;
    this.inputs = action.inputs;
    if (action.upgradeFrom) this.upgradeFrom = action.upgradeFrom;
    this.outputs = action.outputs;
    this.rareOutputs = action.rareOutputs;
  }

  do(userInfo: User, actions: number) {
    // quantity of items produced, and required, for the given number of actions
    const inputs = Object.entries<{
      [key: itemNamesT]: number;
    }>(this.inputs).reduce((a, [itemName, quantity]) => {
      return {
        ...a,
        [itemName]: quantity * actions * userInfo.artisan(this.skill),
      };
    }, {} as { [key: string]: number });
    if (this.upgradeFrom) inputs[this.upgradeFrom] = actions;
    const outputs = Object.entries<number>(
      this.gatherQuantity(userInfo)
    ).reduce((a, [itemName, quantity]) => {
      return {
        ...a,
        [itemName]: quantity * actions,
      };
    }, {} as { [key: string]: number });
    return { inputs, outputs };
  }

  need(userInfo: User, item: itemNamesT, quantity: number): number {
    // number of actions needed to get quantity of item
    if (quantity < 1) return 0;
    const outputs = this.gatherQuantity(userInfo);
    return Math.ceil(Math.ceil(quantity) / outputs[item]);
  }

  gatherQuantity(userInfo: User) {
    // the number of items produced, or gathered, per action
    const baseGather = Object.entries<{
      quantity: string;
      chance: number;
    }>(this.outputs).reduce((a, [itemName, { quantity, chance }]) => {
      return {
        ...a,
        [itemName]:
          quantity
            .split("-")
            .reduce(
              (a, c, i, r) =>
                i === r.length - 1 ? (a + Number(c)) / r.length : a + Number(c),
              0
            ) * chance,
      };
    }, {} as { [key: string]: number });
    const gatherBuff = userInfo.gathering(this.skill);
    const gatherPerAction = Object.entries(baseGather).reduce(
      (a, [itemName, quantity]) => ({
        ...a,
        [itemName]: quantity * gatherBuff * userInfo.gourmet(this.skill),
      }),
      {}
    );
    Object.entries<{ quantity: string; chance: number }>(
      this.rareOutputs
    ).forEach(([itemName, { quantity, chance }]) => {
      gatherPerAction[itemName] =
        quantity
          .split("-")
          .reduce(
            (a, c, i, r) =>
              i === r.length - 1 ? (a + Number(c)) / r.length : a + Number(c),
            0
          ) * chance;
    });
    return gatherPerAction;
  }

  howLong(userInfo: User, actions: number) {
    return (
      (actions * this.time * userInfo.speed(this.skill)) /
      userInfo.efficiency(this.skill)
    );
  }
}

type itemListElementT = {
  item: itemNamesT;
  count: number;
};

type addActionT = {
  action: Action;
  item: Item;
  quantity: number;
  depth: number;
};

type actionListElementT = {
  action: Action;
  items: Array<{
    name: itemNamesT;
    quantity: number;
    depth: number;
  }>;
  count: number;
};

type ingredientListStorage = {
  [key: itemNamesT]: number;
};

export class IngredientList {
  readonly actions: Array<actionListElementT>;
  readonly storage: ingredientListStorage;
  #neededItem: [itemNamesT, number];

  constructor({ name, quantity }: { name: itemNamesT; quantity: number }) {
    this.actions = [];
    this.storage = { [name]: quantity * -1 };
    this.#neededItem = [name, quantity];
  }

  addItemToStorage(...data: Array<itemListElementT>) {
    data.forEach((item) => {
      this.storage[item.item] = (this.storage[item.item] || 0) + item.count;
    });
    return this;
  }

  addAction(userInfo: User, ...data: Array<addActionT>) {
    data.forEach(({ action, item, quantity, depth }) => {
      const actionIndex = this.actions.findIndex(
        (x) => x.action.name === action.name
      );
      const itemsInStock = this.storage[item.name] || 0;
      const countNeeded = action.need(
        userInfo,
        item.name,
        itemsInStock < 0 ? Math.min(quantity, itemsInStock * -1) : 0
      );
      if (actionIndex === -1) {
        this.actions.push({
          action,
          items: [
            {
              name: item.name,
              quantity: quantity,
              depth: depth,
            },
          ],
          count: countNeeded,
        });
      } else {
        this.actions[actionIndex].items.push({
          name: item.name,
          quantity,
          depth,
        });
        this.actions[actionIndex].count += countNeeded;
      }
      const { inputs, outputs } = action.do(userInfo, countNeeded);
      this.addItemToStorage(
        ...Object.entries(inputs).map(([i, q]) => ({
          item: i as itemNamesT,
          count: q * -1,
        })),
        ...Object.entries(outputs).map(([i, q]) => ({
          item: i as itemNamesT,
          count: q,
        }))
      );
    });
    return this;
  }

  get showList() {
    return this.actions.sort(
      (a, b) =>
        b.items.sort((a, b) => a.depth - b.depth)[0].depth -
        a.items.sort((a, b) => a.depth - b.depth)[0].depth
    );
  }

  get showStorage() {
    this.addItemToStorage({
      item: this.#neededItem[0],
      count: this.#neededItem[1],
    });
    return this.storage;
  }

  refresh(userInfo: User, itemsOwned?: Record<string, number>) {
    this.storage = { [this.#neededItem[0]]: this.#neededItem[1] * -1 };
    if (itemsOwned) {
      this.addItemToStorage(
        ...Object.entries(itemsOwned).map(([i, q]) => ({
          item: i as itemNamesT,
          count: q,
        }))
      );
    }
    this.actions.forEach((action) => {
      const { inputs, outputs } = action.action.do(userInfo, action.count);
      this.addItemToStorage(
        ...Object.entries(inputs).map(([i, q]) => ({
          item: i as itemNamesT,
          count: q * -1,
        })),
        ...Object.entries(outputs).map(([i, q]) => ({
          item: i as itemNamesT,
          count: q,
        }))
      );
    });
    return this;
  }

  addStock(itemsOwned: Record<string, number>) {
    this.addItemToStorage(
      ...Object.entries(itemsOwned).map(([i, q]) => ({
        item: i as itemNamesT,
        count: q,
      }))
    );
  }
}
