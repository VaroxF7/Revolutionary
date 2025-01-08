ServerEvents.recipes(e => {
// Coke Oven Changes - Simplified
e.recipes.create.pressing(["kubejs:clay_sheet"],["notreepunching:clay_brick"])
e.recipes.create.splashing(["4x minecraft:clay_ball"],["minecraft:mud"])
e.recipes.create.pressing(["1x notreepunching:clay_brick"],["4x minecraft:clay_ball"])
e.recipes.create.compacting(["minecraft:netherrack"],["2x minecraft:magma_block","gtceu:stone_dust"])
e.recipes.create.compacting(["minecraft:magma_block"],[Fluid.of("minecraft:lava", 288)])
e.recipes.create.milling(["8x gtceu:stone_dust"],["#forge:normal_stone"])
e.recipes.create.milling(["create:powdered_obsidian"],["#forge:obsidian"])
e.recipes.create.milling(["create:cinder_flour"],["minecraft:netherrack"])
e.recipes.create.milling(["minecraft:redstone_dust"],["create:cinder_flour"])
e.recipes.create.mixing(["4x tconstruct:grout"],["minecraft:clay_ball","2x #forge:sand","2x #forge:gravel"])
e.recipes.create.crushing(["4x #forge:dusts/sulfur"],["#forge:gems/sulfur"])

e.recipes.create.mixing(["4x #forge:ingots/bronze"],["2x #forge:dusts/copper","2x #forge:dusts/tin"]).heated()
e.recipes.create.mixing(["4x #forge:ingots/electrum"],["2x #forge:dusts/gold","2x #forge:dusts/silver"]).heated()
e.recipes.create.mixing(["4x #forge:ingots/constantan"],["2x #forge:dusts/copper","2x #forge:dusts/nickel"]).heated()
e.recipes.create.mixing(["4x #forge:ingots/invar"],["2x #forge:dusts/iron","2x #forge:dusts/nickel"]).heated()
e.recipes.create.mixing(["4x #forge:ingots/signalum"],["2x #forge:dusts/copper","2x #forge:dusts/silver","#forge:dusts/redstone"]).superheated()
e.recipes.create.mixing(["4x #forge:ingots/enderium"],["2x #forge:dusts/lead","2x #forge:dusts/diamond","#forge:dusts/ender_pearl"]).superheated()
e.recipes.create.mixing(["4x #forge:ingots/lumium"],["2x #forge:dusts/glowstone","2x #forge:dusts/silver","#forge:dusts/tin"]).superheated()


e.shaped('create:cinder_flour', [
  '   ', 
  'AB ', 
  '   '  
], {
  A: '#forge:tools/mortars', 
  B: 'minecraft:netherrack'
})

e.shaped('gtceu:bronze_large_boiler', [
  'ABA', 
  'BCB', 
  'ABA'  
], {
  A: 'gtceu:tin_single_cable', 
  B: 'create:electron_tube',
  C: "gtceu:bronze_firebox_casing"
})

e.shaped('gtceu:lv_steam_turbine', [
  'ABA', 
  'CDC', 
  'FHF'  
], {
  A: 'gtceu:bronze_normal_fluid_pipe', 
  B: 'create:electron_tube',
  C: "gtceu:tin_rotor",
  D: "gtceu:lv_machine_hull",
  F: "gtceu:lv_electric_motor",
  H: "gtceu:tin_single_cable"
})



e.shaped('minecraft:redstone', [
  '   ', 
  'AB ', 
  '   '  
], {
  A: '#forge:tools/mortars', 
  B: 'create:cinder_flour'
})

e.shaped('gtceu:coke_oven_hatch', [
        '   ', 
        'ABC', 
        '   '  
      ], {
        A: '#forge:chests/wooden', 
        B: 'gtceu:coke_oven_bricks', 
        C: 'minecraft:barrel' 
      })

e.shaped('gtceu:coke_oven', [
        'ABA', 
        'BCB', 
        'ABA'  
      ], {
        A: 'gtceu:coke_oven_bricks', 
        B: 'kubejs:clay_sheet', 
        C: '#forge:tools/wrenches' 
      })
// Tinkers melting for steel recipe
  e.custom({
      "type": "tconstruct:alloy",
      "inputs": [
        {
          "amount": 72,
          "fluid": "gtceu:slag"
        },
        {
          "amount": 72,
          "fluid": "tconstruct:molten_iron"
        }
      ],
      "result": {
        "amount": 144,
        "fluid": "tconstruct:molten_steel"
      },
      "temperature": 1000
    })

  // Tinkers Slag Recipe
e.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "gtceu:coke_gem"
  },
  "result": {
    "amount": 288,
    "fluid": "gtceu:slag"
  },
  "temperature": 1000,
  "time": 120
  })

  e.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "thermal:slag"
    },
    "result": {
      "amount": 288,
      "fluid": "gtceu:slag"
    },
    "temperature": 1000,
    "time": 120
    })

    e.custom({
      "type": "tconstruct:melting",
  "ingredient": {
    "item": "thermal:coal_coke"
  },
  "result": {
    "amount": 288,
    "fluid": "gtceu:slag"
  },
  "temperature": 1000,
  "time": 99
  })

// Primitive Blast Furnace Recipes
e.shaped('gtceu:primitive_blast_furnace', [
  'ABC', 
  'DFB', 
  'HBC'  
], {
  A: '#forge:tools/hammers', 
  B: '#forge:rods/steel', 
  C: '#forge:screws/steel',
  D: '#forge:plates/steel',
  F: 'gtceu:firebricks',
  H: '#forge:tools/screwdrivers'
})
})

// ID 
ServerEvents.recipes(e => {
  const toRemoveId = [
    'notreepunching:clay_brick_from_balls','notreepunching:clay_brick_from_blocks','gtceu:shaped/coke_oven_hatch','gtceu:shaped/coke_oven',
    'gtceu:shaped/bronze_primitive_blast_furnace','createaddition:mixing/bioethanol','create:crafting/materials/andesite_alloy','create:crafting/materials/andesite_alloy_from_block',
    'create:crafting/materials/andesite_alloy_from_zinc','create:mixing/andesite_alloy_from_zinc','create:mixing/andesite_alloy','tconstruct:compat/create/andesite_alloy_iron',
    'tconstruct:compat/create/andesite_alloy_zinc','gtceu:shaped/large_bronze_boiler','gtceu:shaped/steam_turbine_lv','thermal:fire_charge/bronze_ingot_4','thermal:fire_charge/electrum_ingot_2',
    'thermal:fire_charge/constantan_ingot_2','thermal:fire_charge/signalum_ingot_4','thermal:fire_charge/lumium_ingot_4','thermal:fire_charge/enderium_ingot_2','thermal:fire_charge/invar_ingot_3'

  ];
  toRemoveId.forEach(element => {
  e.remove({ id: element});
  })

  // Misc.
  e.remove({output: "tconstruct:grout"})
})

