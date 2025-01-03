ServerEvents.recipes(e => {
// Coke Oven Changes - Simplified
e.recipes.create.pressing(["kubejs:clay_sheet"],["notreepunching:clay_brick"])
e.recipes.create.splashing(["4x minecraft:clay_ball"],["minecraft:mud"])
e.recipes.create.pressing(["1x notreepunching:clay_brick"],["4x minecraft:clay_ball"])

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