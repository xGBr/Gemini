/**
 * database.js
 * Fonte de dados central para todos os colecionáveis do guia.
 * Cada item possui um 'id' único (sem espaços) e um array de 'season'.
 */

const database = {
    "flora": [
        // Spring
        { "id": "Cabbage", "name": "Cabbage", "type": "Crop", "season": ["spring"], "desc": "Seed: 70t", "img": "images/itens/Crops/Cabbage.png" },
        { "id": "Cherry", "name": "Cherry", "type": "Crop", "season": ["spring"], "desc": "Sapling: 400t", "img": "images/itens/Crops/Cherry.png" },
        { "id": "Potato", "name": "Potato", "type": "Crop", "season": ["spring"], "desc": "Seed: 40t", "img": "images/itens/Crops/Potato.png" },
        { "id": "Strawberry", "name": "Strawberry", "type": "Crop", "season": ["spring"], "desc": "Seed: 300t", "img": "images/itens/Crops/Strawberry.png" },
        { "id": "Turnip", "name": "Turnip", "type": "Crop", "season": ["spring"], "desc": "Seed: 40t", "img": "images/itens/Crops/Turnip.png" },
        { "id": "Daffodil", "name": "Daffodil", "type": "Flower", "season": ["spring"], "desc": "Sweetwater Farm, The Narrows", "img": "images/itens/Flower/Daffodil.png" },
        { "id": "Dandelion", "name": "Dandelion", "type": "Flower", "season": ["spring"], "desc": "Mistria, The Narrows, Sweetwater Farm", "img": "images/itens/Flower/Dandelion.png" },
        { "id": "Lilac", "name": "Lilac", "type": "Flower", "season": ["spring"], "desc": "The Eastern Road, Sweetwater Farm", "img": "images/itens/Flower/Lilac.png" },
        { "id": "Snowdrop_Anemone", "name": "Snowdrop Anemone", "type": "Flower", "season": ["spring"], "desc": "The Western Ruins, The Beach", "img": "images/itens/Flower/Snowdrop_anemone.png" },
        { "id": "Tulip", "name": "Tulip", "type": "Flower", "season": ["spring"], "desc": "The Eastern Road, The Narrows, Sweetwater Farm", "img": "images/itens/Flower/Tulip.png" },
        { "id": "Fennel", "name": "Fennel", "type": "Forageable", "season": ["spring", "summer"], "desc": "The Narrows, The Eastern Road", "img": "images/itens/Forageables/Fennel.png" },
        { "id": "Fiddlehead_Fern", "name": "Fiddlehead Fern", "type": "Forageable", "season": ["spring", "summer"], "desc": "The Narrows, Sweetwater Farm", "img": "images/itens/Forageables/Fiddlehead.png" },
        { "id": "Morel_Mushroom", "name": "Morel Mushroom", "type": "Forageable", "season": ["spring", "summer"], "desc": "Rare spawn in overworld", "img": "images/itens/Forageables/Morel_mushroom.png" },
        { "id": "Nettle", "name": "Nettle", "type": "Forageable", "season": ["spring", "summer"], "desc": "Sweetwater Farm", "img": "images/itens/Forageables/Nettle.png" },
        { "id": "Wild_Leek", "name": "Wild Leek", "type": "Forageable", "season": ["spring", "summer"], "desc": "Mistria, The Narrows, The Eastern Road", "img": "images/itens/Forageables/Wild_leek.png" },

        // Summer
        { "id": "Chili_Pepper", "name": "Chili Pepper", "type": "Crop", "season": ["summer"], "desc": "Seed: 40t", "img": "images/itens/Crops/Chili_pepper.png" },
        { "id": "Corn", "name": "Corn", "type": "Crop", "season": ["summer"], "desc": "Seed: 300t", "img": "images/itens/Crops/Corn.png" },
        { "id": "Cucumber", "name": "Cucumber", "type": "Crop", "season": ["summer"], "desc": "Seed: 25t", "img": "images/itens/Crops/Cucumber.png" },
        { "id": "Tomato", "name": "Tomato", "type": "Crop", "season": ["summer"], "desc": "Seed: 300t", "img": "images/itens/Crops/Tomato.png" },
        { "id": "Watermelon", "name": "Watermelon", "type": "Crop", "season": ["summer"], "desc": "Seed: 70t", "img": "images/itens/Crops/Watermelon.png" },
        { "id": "Catmint", "name": "Catmint", "type": "Flower", "season": ["summer"], "desc": "The Narrows", "img": "images/itens/Flower/Catmint.png" },
        { "id": "Cosmos", "name": "Cosmos", "type": "Flower", "season": ["summer"], "desc": "Sweetwater Farm", "img": "images/itens/Flower/Cosmos.png" },
        { "id": "Daisy", "name": "Daisy", "type": "Flower", "season": ["summer"], "desc": "The Narrows, The Eastern Road, The Western Ruins", "img": "images/itens/Flower/Daisy.png" },
        { "id": "Iris", "name": "Iris", "type": "Flower", "season": ["summer"], "desc": "The Beach, The Narrows, Sweetwater Farm", "img": "images/itens/Flower/Iris.png" },
        { "id": "Marigold", "name": "Marigold", "type": "Flower", "season": ["summer"], "desc": "The Western Ruins", "img": "images/itens/Flower/Marigold.png" },

        // Fall
        { "id": "Apple", "name": "Apple", "type": "Crop", "season": ["fall"], "desc": "Sapling: 400t", "img": "images/itens/Crops/Apple.png" },
        { "id": "Broccoli", "name": "Broccoli", "type": "Crop", "season": ["fall"], "desc": "Seed: 40t", "img": "images/itens/Crops/Broccoli.png" },
        { "id": "Cranberry", "name": "Cranberry", "type": "Crop", "season": ["fall"], "desc": "Seed: 300t", "img": "images/itens/Crops/Cranberry.png" },
        { "id": "Pumpkin", "name": "Pumpkin", "type": "Crop", "season": ["fall"], "desc": "Seed: 70t", "img": "images/itens/Crops/Pumpkin.png" },
        { "id": "Sweet_Potato", "name": "Sweet Potato", "type": "Crop", "season": ["fall"], "desc": "Seed: 25t", "img": "images/itens/Crops/Sweet_Potato.png" },
        { "id": "Celosia", "name": "Celosia", "type": "Flower", "season": ["fall"], "desc": "Overworld", "img": "images/itens/Flower/Celosia.png" },
        { "id": "Chrysanthemum", "name": "Chrysanthemum", "type": "Flower", "season": ["fall"], "desc": "Overworld", "img": "images/itens/Flower/Chrysanthemum.png" },
        { "id": "Fog_Orchid", "name": "Fog Orchid", "type": "Flower", "season": ["fall"], "desc": "The Eastern Road, The Western Ruins", "img": "images/itens/Flower/Fog_Orchid.png" },
        { "id": "Heather", "name": "Heather", "type": "Flower", "season": ["fall"], "desc": "Mistria, The Beach, The Narrows", "img": "images/itens/Flower/Heather.png" },
        { "id": "Viola", "name": "Viola", "type": "Flower", "season": ["fall"], "desc": "The Eastern Road", "img": "images/itens/Flower/Viola.png" },
        { "id": "Chestnut", "name": "Chestnut", "type": "Forageable", "season": ["fall"], "desc": "The Beach, Sweetwater Farm, The Narrows", "img": "images/itens/Forageables/Chestnut.png" },
        { "id": "Garlic", "name": "Garlic", "type": "Forageable", "season": ["fall"], "desc": "The Eastern Road (in the ruins)", "img": "images/itens/Forageables/Garlic.png" },
        { "id": "Horseradish", "name": "Horseradish", "type": "Forageable", "season": ["fall"], "desc": "Sweetwater Farm, The Eastern Road, The Beach", "img": "images/itens/Forageables/Horseradish.png" },
        { "id": "Moon_Fruit", "name": "Moon Fruit", "type": "Forageable", "season": ["fall"], "desc": "Eastern Road, near the Wishing Well, Sweetwater Farm, The Beach", "img": "images/itens/Forageables/Moon_Fruit.png" },
        { "id": "Rosemary", "name": "Rosemary", "type": "Forageable", "season": ["fall"], "desc": "Sweetwater Farm", "img": "images/itens/Forageables/Rosemary.png" },

        // Winter
        { "id": "Beet", "name": "Beet", "type": "Crop", "season": ["winter"], "desc": "Seed: 25t", "img": "images/itens/Crops/Beet.png" },
        { "id": "Cauliflower", "name": "Cauliflower", "type": "Crop", "season": ["winter"], "desc": "Seed: 40t", "img": "images/itens/Crops/Cauliflower.png" },
        { "id": "Daikon_Radish", "name": "Daikon Radish", "type": "Crop", "season": ["winter"], "desc": "Seed: 70t", "img": "images/itens/Crops/Daikon_Radish.png" },
        { "id": "Pomegranate", "name": "Pomegranate", "type": "Crop", "season": ["winter"], "desc": "Sapling: 400t", "img": "images/itens/Crops/Pomegranate.png" },
        { "id": "Snow_Peas", "name": "Snow Peas", "type": "Crop", "season": ["winter"], "desc": "Seed: 300t", "img": "images/itens/Crops/Snow_Peas.png" },
        { "id": "Crocus", "name": "Crocus", "type": "Flower", "season": ["winter"], "desc": "The Eastern Road, Sweetwater Farm, The Beach", "img": "images/itens/Flower/Crocus.png" },
        { "id": "Frost_Lily", "name": "Frost Lily", "type": "Flower", "season": ["winter"], "desc": "The Eastern Road, The Narrows, The Beach", "img": "images/itens/Flower/Frost_Lily.png" },
        { "id": "Jasmine", "name": "Jasmine", "type": "Flower", "season": ["winter"], "desc": "Sweetwater Farm, The Eastern Road", "img": "images/itens/Flower/Jasmine.png" },
        { "id": "Poinsettia", "name": "Poinsettia", "type": "Flower", "season": ["winter"], "desc": "The Beach, The Narrows, Sweetwater Farm", "img": "images/itens/Flower/Poinsettia.png" },
        { "id": "Snapdragon", "name": "Snapdragon", "type": "Flower", "season": ["winter"], "desc": "The Western Ruins", "img": "images/itens/Flower/Snapdragon.png" },
        { "id": "Burdock_Root", "name": "Burdock Root", "type": "Forageable", "season": ["winter"], "desc": "Mistria,The Eastern Road,The Narrows (north)", "img": "images/itens/Forageables/Burdock_Root.png" },
        { "id": "Holly", "name": "Holly", "type": "Forageable", "season": ["winter"], "desc": "The Eastern Road,Sweetwater Farm", "img": "images/itens/Forageables/Holly.png" },
        { "id": "Oyster_Mushroom", "name": "Oyster Mushroom", "type": "Forageable", "season": ["winter"], "desc": "The Eastern Road,Mistria,The Beach", "img": "images/itens/Forageables/Oyster_Mushroom.png" },
        { "id": "Pineshroom", "name": "Pineshroom", "type": "Forageable", "season": ["winter"], "desc": "Sweetwater Farm", "img": "images/itens/Forageables/Pineshroom.png" },
        { "id": "Rose_Hip", "name": "Rose Hip", "type": "Forageable", "season": ["winter"], "desc": "The Manor's Gardens", "img": "images/itens/Forageables/Rose_Hip.png" }
    ],
    "insects": [
        // Multi-Season
        { "id": "Ant", "name": "Ant", "location": "Overworld", "season": ["spring", "summer", "fall"], "time": "All Day", "weather": "Any (non-snow)", "rarity": "Common", "img": "images/itens/Insects/Ant.png" },
        { "id": "Bumblebee", "name": "Bumblebee", "location": "Overworld", "season": ["spring", "summer", "fall"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Common", "img": "images/itens/Insects/Bumblebee.png" },
        { "id": "Fuzzy_Moth", "name": "Fuzzy Moth", "location": "Overworld", "season": ["spring", "summer", "fall", "winter"], "time": "Night (8PM - 2AM)", "weather": "Sunny, Wind", "rarity": "Uncommon", "img": "images/itens/Insects/Fuzzy_moth.png" },
        { "id": "Hummingbird_Hawk_Moth", "name": "Hummingbird Hawk Moth", "location": "Overworld", "season": ["spring", "summer", "fall"], "time": "All Day (6AM - 2AM)", "weather": "Any", "rarity": "Rare", "img": "images/itens/Insects/Hummingbird_hawk_moth.png" },
        { "id": "Praying_Mantis", "name": "Praying Mantis", "location": "Overworld", "season": ["spring", "summer", "fall"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Common", "img": "images/itens/Insects/Praying_mantis.png" },
        { "id": "Speedy_Snail", "name": "Speedy Snail", "location": "Overworld", "season": ["spring", "summer", "fall"], "time": "6AM - 5PM", "weather": "Any", "rarity": "Legendary", "img": "images/itens/Insects/Speedy_snail.png" },

        // Spring
        { "id": "Butterfly", "name": "Butterfly", "location": "Overworld", "season": ["spring"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Common", "img": "images/itens/Insects/Butterfly.png" },
        { "id": "Caterpillar", "name": "Caterpillar", "location": "Overworld", "season": ["spring"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Caterpillar.png" },
        { "id": "Ladybug", "name": "Ladybug", "location": "Overworld", "season": ["spring"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Ladybug.png" },
        { "id": "Luna_Moth", "name": "Luna Moth", "location": "Overworld", "season": ["spring"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Luna_moth.png" },
        { "id": "Roly_Poly", "name": "Roly Poly", "location": "Overworld", "season": ["spring"], "time": "All Day", "weather": "Any", "rarity": "Uncommon", "img": "images/itens/Insects/Roly_poly.png" },
        { "id": "Flower_Crown_Beetle", "name": "Flower Crown Beetle", "location": "Overworld", "season": ["spring"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Legendary", "img": "images/itens/Insects/Flower_crown_beetle.png" },

        // Summer
        { "id": "Cicada", "name": "Cicada", "location": "Overworld", "season": ["summer"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Cicada.png" },
        { "id": "Cricket", "name": "Cricket", "location": "Overworld", "season": ["summer"], "time": "Night (8PM - 2AM)", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Cricket.png" },
        { "id": "Dragonfly", "name": "Dragonfly", "location": "Overworld", "season": ["summer"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Rainy", "rarity": "Uncommon", "img": "images/itens/Insects/Dragonfly.png" },
        { "id": "Firefly", "name": "Firefly", "location": "Overworld", "season": ["summer"], "time": "Night (8PM - 2AM)", "weather": "Sunny", "rarity": "Common", "img": "images/itens/Insects/Firefly.png" },
        { "id": "Sand_Bug", "name": "Sand Bug", "location": "The Beach", "season": ["summer"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Sand_bug.png" },
        { "id": "Strobe_Firefly", "name": "Strobe Firefly", "location": "Overworld", "season": ["summer"], "time": "Night (8PM - 2AM)", "weather": "Sunny", "rarity": "Legendary", "img": "images/itens/Insects/Strobe_firefly.png" },

        // Fall
        { "id": "Cicada_Nymph", "name": "Cicada Nymph", "location": "Overworld", "season": ["fall"], "time": "Night (8PM - 2AM)", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Cicada_nymph.png" },
        { "id": "Inchworm", "name": "Inchworm", "location": "Overworld", "season": ["fall"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Inchworm.png" },
        { "id": "Monarch_Butterfly", "name": "Monarch Butterfly", "location": "Overworld", "season": ["fall"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Common", "img": "images/itens/Insects/Monarch_butterfly.png" },
        { "id": "Tiger_Swallowtail_Butterfly", "name": "Tiger Swallowtail Butterfly", "location": "Overworld", "season": ["fall"], "time": "Day (6AM - 8PM)", "weather": "Sunny, Wind", "rarity": "Uncommon", "img": "images/itens/Insects/Tiger_swallowtail_butterfly.png" },
        { "id": "Walking_Leaf", "name": "Walking Leaf", "location": "Overworld", "season": ["fall"], "time": "Day (6AM - 8PM)", "weather": "Any", "rarity": "Uncommon", "img": "images/itens/Insects/Walking_leaf.png" },
        { "id": "Fairy_Bee", "name": "Fairy Bee", "location": "Overworld", "season": ["fall"], "time": "Morning (6AM - 11AM)", "weather": "Sunny, Wind", "rarity": "Legendary", "img": "images/itens/Insects/Fairy_bee.png" },

        // Winter
        { "id": "Brightbulb_Moth", "name": "Brightbulb Moth", "location": "Overworld", "season": ["winter"], "time": "Night (8PM - 2AM)", "weather": "Sunny", "rarity": "Common", "img": "images/itens/Insects/Brightbulb_moth.png" },
        { "id": "Crystal_Caterpillar", "name": "Crystal Caterpillar", "location": "Overworld", "season": ["winter"], "time": "All Day", "weather": "Snow, Blizzard", "rarity": "Rare", "img": "images/itens/Insects/Crystal_caterpillar.png" },
        { "id": "Frost_Flutter_Butterfly", "name": "Frost Flutter Butterfly", "location": "Overworld", "season": ["winter"], "time": "Day (6AM - 8PM)", "weather": "Sunny", "rarity": "Common", "img": "images/itens/Insects/Frost_flutter_butterfly.png" },
        { "id": "Walking_Stick", "name": "Walking Stick", "location": "Overworld", "season": ["winter"], "time": "All Day", "weather": "Any", "rarity": "Uncommon", "img": "images/itens/Insects/Walking_stick.png" },
        { "id": "Winterpillar", "name": "Winterpillar", "location": "Overworld", "season": ["winter"], "time": "All Day", "weather": "Any", "rarity": "Common", "img": "images/itens/Insects/Winterpillar.png" },
        { "id": "Snowball_Beetle", "name": "Snowball Beetle", "location": "Overworld", "season": ["winter"], "time": "All Day", "weather": "Blizzard", "rarity": "Legendary", "img": "images/itens/Insects/Snowball_beetle.png" }
    ],
    "fish": [
        // Multi-Season
        { "id": "Koi", "name": "Koi", "location": "Pond", "season": ["spring", "summer", "fall", "winter"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Koi.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Pike", "name": "Pike", "location": "River", "season": ["spring", "summer", "fall", "winter"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Pike.png", "appearance": ["Fishshadow_large.png", "Divehole_noplayer_active.png"] },
        { "id": "Pollock", "name": "Pollock", "location": "Ocean", "season": ["spring", "summer", "fall", "winter"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Pollock.png", "appearance": ["Fishshadow_large.png", "Divehole_noplayer_active.png"] },
        { "id": "Smallmouth_Bass", "name": "Smallmouth Bass", "location": "River", "season": ["spring", "summer", "fall", "winter"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Smallmouth_bass.png", "appearance": ["Fishshadow_small.png", "Divehole_noplayer_active.png"] },
        { "id": "Trout", "name": "Trout", "location": "River", "season": ["spring", "summer", "fall", "winter"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Trout.png", "appearance": ["Fishshadow_medium.png", "Divehole_noplayer_active.png"] },

        // Spring
        { "id": "Bluegill", "name": "Bluegill", "location": "River", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Bluegill.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Carp", "name": "Carp", "location": "River", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Carp.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Chub", "name": "Chub", "location": "River", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Chub.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Paddlefish", "name": "Paddlefish", "location": "River", "season": ["spring"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Paddlefish.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Walleye", "name": "Walleye", "location": "River", "season": ["spring"], "weather": "Rainy, Rain", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Walleye.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Angel_Fish", "name": "Angel Fish", "location": "Pond", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Angel_fish.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Barb", "name": "Barb", "location": "Pond", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Barb.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Brown_Trout", "name": "Brown Trout", "location": "Pond", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Brown_trout.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Crucian_Carp", "name": "Crucian Carp", "location": "Pond", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Crucian_carp.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Goldfish", "name": "Goldfish", "location": "Pond", "season": ["spring"], "weather": "Any", "rarity": "Rare", "size": "Small", "img": "images/itens/Fish/Goldfish.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Anchovy", "name": "Anchovy", "location": "Ocean", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Anchovy.png", "appearance": ["Fishshadow_small.png", "Divehole_noplayer_active.png"] },
        { "id": "Lobster", "name": "Lobster", "location": "Ocean", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Lobster.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Mackerel", "name": "Mackerel", "location": "Ocean", "season": ["spring"], "weather": "Rainy, Rain", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Mackerel.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Ocean_Sunfish", "name": "Ocean Sunfish", "location": "Ocean", "season": ["spring"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Ocean_sunfish.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Shrimp", "name": "Shrimp", "location": "Ocean", "season": ["spring"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Shrimp.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Cherry_Fish", "name": "Cherry Fish", "location": "Pond", "season": ["spring"], "weather": "Wind", "rarity": "Legendary", "size": "Small", "img": "images/itens/Fish/Cherry_fish.png", "appearance": ["Fishshadow_small.png"] },

        // Summer
        { "id": "Bream", "name": "Bream", "location": "River", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Bream.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Loach", "name": "Loach", "location": "River", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Loach.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Minnow", "name": "Minnow", "location": "River", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Minnow.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Sweetfish", "name": "Sweetfish", "location": "River", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Sweetfish.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Tarpon", "name": "Tarpon", "location": "River", "season": ["summer"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Tarpon.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Brown_Bullhead", "name": "Brown Bullhead", "location": "Pond", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Brown_bullhead.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Giant_Koi", "name": "Giant Koi", "location": "Pond", "season": ["summer"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Giant_koi.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Golden_Shiner", "name": "Golden Shiner", "location": "Pond", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Golden_shiner.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Lake_Chub", "name": "Lake Chub", "location": "Pond", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Lake_chub.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Sauger", "name": "Sauger", "location": "Pond", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Sauger.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Char", "name": "Char", "location": "Ocean", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Char.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Crab", "name": "Crab", "location": "Ocean", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Crab.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Dart", "name": "Dart", "location": "Ocean", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Dart.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Grouper", "name": "Grouper", "location": "Ocean", "season": ["summer"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Grouper.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Stingray", "name": "Stingray", "location": "Ocean", "season": ["summer"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Stingray.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Lightning_Fish", "name": "Lightning Fish", "location": "River", "season": ["summer"], "weather": "Storm, Thunderstorm", "rarity": "Legendary", "size": "Medium", "img": "images/itens/Fish/Lightning_fish.png", "appearance": ["Fishshadow_medium.png"] },
        
        // Fall
        { "id": "Grayling", "name": "Grayling", "location": "River", "season": ["fall"], "weather": "Rainy, Rain, Storm, Thunderstorm", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Grayling.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Lamprey", "name": "Lamprey", "location": "River", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Lamprey.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Perch", "name": "Perch", "location": "River", "season": ["fall"], "weather": "Rainy, Rain, Storm", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Perch.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Razorback", "name": "Razorback", "location": "River", "season": ["fall"], "weather": "Rainy, Rain, Storm, Thunderstorm", "rarity": "Rare", "size": "Medium", "img": "images/itens/Fish/Razorback.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Shad", "name": "Shad", "location": "River", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Shad.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Bluefish", "name": "Bluefish", "location": "Pond", "season": ["fall"], "weather": "Rainy, Rain, Storm, Thunderstorm", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Bluefish.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Killifish", "name": "Killifish", "location": "Pond", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Killifish.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Rainbow_Trout", "name": "Rainbow Trout", "location": "Pond", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Rainbow_trout.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Striped_Bass", "name": "Striped Bass", "location": "Pond", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Striped_bass.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "White_Perch", "name": "White Perch", "location": "Pond", "season": ["fall"], "weather": "Any", "rarity": "Rare", "size": "Medium", "img": "images/itens/Fish/White_perch.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Butterfish", "name": "Butterfish", "location": "Ocean", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Butterfish.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Halibut", "name": "Halibut", "location": "Ocean", "season": ["fall"], "weather": "Rainy, Rain, Storm, Thunderstorm", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Halibut.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Mullet", "name": "Mullet", "location": "Ocean", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Mullet.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Saury", "name": "Saury", "location": "Ocean", "season": ["fall"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Saury.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Shark", "name": "Shark", "location": "Ocean", "season": ["fall"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Shark.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Leaf_Fish", "name": "Leaf Fish", "location": "River", "season": ["fall"], "weather": "Wind", "rarity": "Legendary", "size": "Small", "img": "images/itens/Fish/Leaf_fish.png", "appearance": ["Fishshadow_small.png"] },

        // Winter
        { "id": "Bowfish", "name": "Bowfish", "location": "River", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Bowfish.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Dace", "name": "Dace", "location": "River", "season": ["winter"], "weather": "Snow, Blizzard", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Dace.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Freshwater_Eel", "name": "Freshwater Eel", "location": "River", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Freshwater_eel.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Herring", "name": "Herring", "location": "River", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Herring.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Shadow_Bass", "name": "Shadow Bass", "location": "River", "season": ["winter"], "weather": "Any", "rarity": "Rare", "size": "Medium", "img": "images/itens/Fish/Shadow_bass.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Alligator_Gar", "name": "Alligator Gar", "location": "Pond", "season": ["winter"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Alligator_gar.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Burbot", "name": "Burbot", "location": "Pond", "season": ["winter"], "weather": "Snow, Blizzard", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/Burbot.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Flathead_Catfish", "name": "Flathead Catfish", "location": "Pond", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Flathead_catfish.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Giant_Tilapia", "name": "Giant Tilapia", "location": "Pond", "season": ["winter"], "weather": "Any", "rarity": "Uncommon", "size": "Giant", "img": "images/itens/Fish/Giant_tilapia.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Tilapia", "name": "Tilapia", "location": "Pond", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Tilapia.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Horse_Mackerel", "name": "Horse Mackerel", "location": "Ocean", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Horse_mackerel.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "King_Crab", "name": "King Crab", "location": "Ocean", "season": ["winter"], "weather": "Snow, Blizzard", "rarity": "Common", "size": "Large", "img": "images/itens/Fish/King_crab.png", "appearance": ["Fishshadow_large.png"] },
        { "id": "Oarfish", "name": "Oarfish", "location": "Ocean", "season": ["winter"], "weather": "Any", "rarity": "Rare", "size": "Giant", "img": "images/itens/Fish/Oarfish.png", "appearance": ["Fishshadow_giant.png"] },
        { "id": "Sand_Lance", "name": "Sand Lance", "location": "Ocean", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Small", "img": "images/itens/Fish/Sand_lance.png", "appearance": ["Fishshadow_small.png"] },
        { "id": "Sea_Bass", "name": "Sea Bass", "location": "Ocean", "season": ["winter"], "weather": "Any", "rarity": "Common", "size": "Medium", "img": "images/itens/Fish/Sea_bass.png", "appearance": ["Fishshadow_medium.png"] },
        { "id": "Snow_Fish", "name": "Snow Fish", "location": "Ocean", "season": ["winter"], "weather": "Blizzard", "rarity": "Legendary", "size": "Medium", "img": "images/itens/Fish/Snow_fish.png", "appearance": ["Fishshadow_medium.png"] }
    ]
};
