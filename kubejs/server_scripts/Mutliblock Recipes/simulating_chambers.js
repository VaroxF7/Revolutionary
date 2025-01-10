
    /*
    1 Dense = 16 Normal needs Sulfuric Etahnolic Acid
    */

ServerEvents.recipes(e => {
  e.recipes.gtceu.sim_chamber_lv("simulation_tier_1_1")
     .itemInputs("kubejs:miner_tier_1", "2x kubejs:fluxium", "gtceu:steel_crate")
     .inputFluids([Fluid.of("gtceu:refined_biofuel", 2600)])
     .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 144)])
     .itemOutputs([
        Item.of("64x kubejs:dense_redstone_ore"),
        Item.of("128x kubejs:dense_iron_ore"),
        Item.of("64x kubejs:dense_nickel_ore"),
        Item.of("64x kubejs:dense_cas_ore"),
        Item.of("128x kubejs:dense_ilmenite_ore"),
        Item.of("128x gtceu:galena_ore"),
        Item.of("128x gtceu:silver_ore"),
        Item.of("128x gtceu:rock_salt_ore"),
        Item.of("128x gtceu:uraninite_ore"),
        Item.of("128x gtceu:molybdenum_ore"),
        Item.of("128x ad_astra:moon_sand"),
        Item.of("64x ad_astra:moon_desh_ore")
     ])
     .duration(1900).EUt(120)

  e.recipes.gtceu.assembler("fluxium_recipe")
   .itemInputs("gtceu:flawless_lapis_gem")
   .inputFluids([Fluid.of("gtceu:deuterium", 288)])
   .itemOutputs("kubejs:fluxium")
   .duration(50).EUt(8)

  e.recipes.gtceu.laser_engraver("lapis_new_flawless")
   .itemInputs("minecraft:lapis_lazuli")
   .notConsumable("#forge:lenses/white")
   .itemOutputs("gtceu:flawless_lapis_gem")
   .duration(50).EUt(8)

  e.recipes.gtceu.centrifuge("deuterium_from_moon_sand")
   .itemInputs("ad_astra:moon_sand")
   .outputFluids([Fluid.of("gtceu:deuterium", 560)])
   .duration(70).EUt(12)

  e.recipes.gtceu.assembler("tier_1_miner")
   .itemInputs("kubejs:fluxium","kubejs:navigation_computer","2x kubejs:mining_laser_mk1", "3x ad_astra:desh_engine", "6x gtceu:energetic_alloy_plate")
   .itemOutputs("kubejs:miner_tier_1")
   .duration(120).EUt(32)

  e.recipes.gtceu.macerator("energetic_alloy_to_dust")
   .itemInputs("enderio:energetic_alloy_ingot")
   .itemOutputs("gtceu:energetic_alloy_dust")
   .duration(50).EUt(7)

  e.recipes.gtceu.extractor("energetic_ingot_to_liquid")
   .itemInputs("enderio:energetic_alloy_ingot")
   .outputFluids([Fluid.of("gtceu:energetic_alloy", 144)])
   .duration(80).EUt(12)

  e.recipes.gtceu.assembler("navigation_computer")
   .itemInputs("5x #gtceu:circuits/mv","ad_astra:rocket_nose_cone","gtceu:lv_sensor","4x gtceu:energetic_alloy_plate")
   .itemOutputs("kubejs:navigation_computer")
   .duration(120).EUt(20)

   e.recipes.gtceu.assembler("basic_mining_laser")
   .itemInputs("#gtceu:circuits/mv","4x gtceu:energetic_alloy_plate","2x gtceu:steel_plate","8x gtceu:redstone_alloy_single_wire")
   .itemOutputs("kubejs:mining_laser_mk1")
   .duration(120).EUt(20)
})

/*
Tritium needed for MV Chamber as fuel source
Grade 1 Titanium from Simulation needed for this too. (Rutile from Ilmenite)
Field Generator made from resources from the first one too for MV Tier 2
*/

ServerEvents.recipes(e => {
   e.recipes.gtceu.sim_chamber("adv_simulation_tier_2_1")
    .itemInputs("kubejs:miner_tier_2","gtceu:steel_crate")
    .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 1728), Fluid.of("gtceu:tritium", 1200)])
    .itemOutputs([
      Item.of("128x kubejs:dense_bauxite_ore"),
      Item.of("128x kubejs:dense_tung_ore"),
      Item.of("64x kubejs:dense_spha_ore"),
      Item.of("128x kubejs:dense_cas_ore"),
      Item.of("128x gtceu:pyrochlore_ore"),
      Item.of("128x gtceu:pyrolusite_ore"),
      Item.of("128x minecraft:copper_ore"),
      Item.of("122x gtceu:beryllium_ore"),
      Item.of("128x minecraft:diamond_ore"),
      Item.of("128x gtceu:scheelite_ore"),
      Item.of("64x kubejs:radon_extract_dust"),
      Item.of("64x ad_astra:mars_ostrum_ore"),
      Item.of("128x ad_astra:mars_sand")
    ])
    .duration(3500).EUt(1024)

    e.recipes.gtceu.sim_chamber("adv_simulation_tier_2_2")
    .itemInputs("kubejs:miner_tier_2","gtceu:steel_crate","kubejs:gem_sensor")
    .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 500), Fluid.of("gtceu:tritium", 1200)])
    .itemOutputs([
      Item.of("128x kubejs:solid_sapphire"),
      Item.of("128x kubejs:solid_green_sapphire"),
      Item.of("64x kubejs:solid_ruby"),
      Item.of("128x kubejs:dense_cas_ore"),
    ])
    .duration(3500).EUt(1024)

  e.recipes.gtceu.assembler("gem_sen")
   .itemInputs("16x gtceu:red_alloy_single_wire","8x gtceu:gallium_foil","gtceu:lv_sensor")
   .itemOutputs("kubejs:gem_sensor")
   .duration(80).EUt(5)
})

/*
ServerEvents.recipes(e => {
  e.recipes.gtceu.quantum_chamber("quantum_1_recipe")
   .itemInputs("kubejs:miner_tier_3")
   .inputFluids([
    Fluid.of("gtceu:cryotheum", 1500),
    Fluid.of("gtceu:deuterium", 20000),
    Fluid.of("gtceu:liquid_computex_selection", 1152)
   ])
   .itemOutputs([
    Item.of("540x minecraft:coal_ore"),
    Item.of("530x minecraft:iron_ore"),
    Item.of("180x minecraft:redstone_ore"),
    Item.of("360x ad_astra:moon_desh_ore"),
    Item.of("120x ad_astra:mars_ostrum_ore"),
    Item.of("332x gtceu:vanadium_magnetite_ore"),
    Item.of("332x gtceu:nickel_ore"),
    Item.of("332x gtceu:lead_ore"),
    Item.of("432x gtceu:tin_ore"),
    Item.of("592x gtceu:palladium_ore"),
    Item.of("192x gtceu:uraninite_ore"),
    Item.of("292x gtceu:opal_ore"),
    Item.of("332x gtceu:ruby_ore"),
    Item.of("265x gtceu:molybdenite_ore"),
    Item.of("554x gtceu:beryllium_ore"),
    Item.of("487x gtceu:lithium_ore")
   ])
   .outputFluids([
    Fluid.of("thermal:ender", 13000),
    Fluid.of("gtceu:cobalt", 12000)
   ])
   .duration(5600).EUt(8192).circuit(1)
})
*/

ServerEvents.recipes(e => {
    // Multiverse Casing
    e.recipes.gtceu.assembler("multiverse_casing_recipe")
    .itemInputs("4x gtceu:solid_machine_casing", "8x gtceu:diamond_bolt", "4x gtceu:diamond_plate")
    .inputFluids("gtceu:liquid_sky_stone")
    .itemOutputs("2x kubejs:multi_verse_casing")
    .duration(120).EUt(30)

    // Miner Recipes
    e.recipes.gtceu.assembler("advanced_guide_system")
     .itemInputs("3x #gtceu:circuits/mv", "3x gtceu:double_steel_plate", "gtceu:lv_emitter", "gtceu:lv_sensor")
     .itemOutputs("kubejs:adv_guide_system")
     .duration(440).EUt(32).circuit(12)

    e.recipes.gtceu.assembler("advanced_mining_laser")
     .itemInputs("4x powah:crystal_niotic", "2x #ae2:fluix_block", "1x enderio:advanced_capacitor_bank", "2x #gtceu:circuits/mv", "9x ae2:quartz_vibrant_glass", "2x powah:uraninite_block", "4x powah:energizing_rod_blazing")
     .itemOutputs("kubejs:adv_mining_laser")
     .duration(240).EUt(32).circuit(10)

    e.recipes.gtceu.assembler("tier_2_recipe_assembler") 
     .itemInputs("8x gtceu:double_steel_plate","3x #gtceu:circuits/hv","gtceu:mv_sensor","gtceu:mv_emitter","2x powah:energizing_rod_niotic","2x gtceu:power_thruster","gtceu:hv_combustion","kubejs:adv_guide_system", "2x gtceu:steel_crate")
     .itemOutputs("kubejs:miner_tier_2")
     .inputFluids([Fluid.of("gtceu:aluminium", 800)])
     .duration(340).EUt(512).circuit(3)

    e.recipes.gtceu.assembly_line("tier_3_recipe_assembler") 
     .itemInputs("16x gtceu:double_titanium_plate","3x #gtceu:circuits/ev","gtceu:iv_sensor","gtceu:iv_emitter","4x powah:energizing_rod_nitro","6x gtceu:advanced_power_thruster","2x gtceu:hv_combustion","kubejs:adv_guide_system", "4x kubejs:adv_mining_laser", "3x gtceu:titanium_crate")
     .itemOutputs("kubejs:miner_tier_3")
     .inputFluids([Fluid.of("gtceu:kanthal", 2200), Fluid.of("gtceu:soldering_alloy", 1000)])
     .duration(340).EUt(1048).circuit(12)

    e.recipes.gtceu.fluid_solidifier("ice_for_ice_charge_extractor_on_moon")
     .itemOutputs("2x thermal:ice_charge")
     .notConsumable("gtceu:ball_casting_mold")
     .inputFluids([Fluid.of("gtceu:ice", 144)])
     .duration(120).EUt(15).dimension("ad_astra:moon")

    // Controller Recipes

    e.recipes.gtceu.assembler("lv_tier_recipe")
     .itemInputs("3x #gtceu:circuits/mv", "1x kubejs:multi_verse_casing", "powah:dielectric_casing", "4x gtceu:red_alloy_single_wire")
     .itemOutputs("gtceu:sim_chamber_lv")
     .inputFluids("gtceu:liquid_computex_selection 72")
     .circuit(1).EUt(32).duration(120)

    e.recipes.gtceu.assembler("mv_tier_recipe")
     .itemInputs("6x #gtceu:circuits/hv", "1x kubejs:multi_verse_casing", "powah:dielectric_casing", "16x gtceu:silver_single_wire")
     .itemOutputs("gtceu:sim_chamber")
     .inputFluids("gtceu:liquid_computex_selection 144")
     .circuit(2).EUt(32).duration(320)

    e.recipes.gtceu.assembler("ev_tier_recipe")
     .itemInputs("16x #gtceu:circuits/ev", "1x gtceu:inert_machine_casing", "powah:dielectric_casing", "32x gtceu:uranium_triplatinum_single_wire")
     .itemOutputs("gtceu:quantum_chamber")
     .inputFluids("gtceu:liquid_computex_selection 288")
     .circuit(3).EUt(32).duration(320)

    // Liquid Computex
    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe")
     .itemInputs("powah:crystal_blazing")
     .inputFluids([Fluid.of("gtceu:silicon", 288)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 18)])
     .duration(120).EUt(15)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_2")
     .itemInputs("powah:crystal_niotic")
     .inputFluids([Fluid.of("gtceu:silicon", 288)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 72)])
     .duration(120).EUt(15)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_3")
     .itemInputs("powah:crystal_spirited")
     .inputFluids([Fluid.of("gtceu:silicon", 288)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 144)])
     .duration(120).EUt(15)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_4")
     .itemInputs("powah:crystal_nitro")
     .inputFluids([Fluid.of("gtceu:silicon", 144)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 288)])
     .duration(120).EUt(15)

    // Cryotheum Fuel 
    e.recipes.gtceu.large_chemical_reactor("cryotheum_fluid_recipe")
	   .itemInputs("32x powah:charged_snowball", "16x thermal:ice_charge")
	   .inputFluids([
		  Fluid.of("gtceu:nitric_acid", 1500),
		  Fluid.of("gtceu:ice", 5000),
		  Fluid.of("thermal:ender", 1200)
	   ])
	   .outputFluids([Fluid.of("gtceu:cryotheum", 3500)])
	   .duration(240).EUt(120).circuit(21)

    // Power Thruster
    e.recipes.gtceu.assembler("thruster_recipe_new")
     .itemInputs("2x gtceu:mv_electric_motor", "2x gtceu:aluminium_ring", "gtceu:aluminium_rod", "gtceu:steel_rotor", "4x gtceu:gold_single_cable", "ad_astra:ostrum_engine")
     .itemOutputs("gtceu:power_thruster")
     .duration(450).EUt(120)

})

ServerEvents.recipes(e => {
  e.recipes.gtceu.assembler("overworld_chip")
   .itemInputs("gtceu:steel_ingot", "4x gtceu:fine_electrum_wire")
   .inputFluids([Fluid.of("gtceu:silver", 1000)])
   .itemOutputs("kubejs:ow_chip")
   .duration(240).EUt(32)

  e.recipes.gtceu.assembler("moon_chip")
   .itemInputs("ad_astra:desh_ingot", "4x gtceu:fine_electrum_wire")
   .inputFluids([Fluid.of("gtceu:silver", 1000)])
   .itemOutputs("kubejs:moon_chip")
   .duration(240).EUt(32)

  e.recipes.gtceu.assembler("mars_chip")
   .itemInputs("ad_astra:ostrum_ingot", "4x gtceu:fine_electrum_wire")
   .inputFluids([Fluid.of("gtceu:electrum", 1000)])
   .itemOutputs("kubejs:mars_chip")
   .duration(240).EUt(32)

  e.recipes.gtceu.assembler("venus_chip")
   .itemInputs("ad_astra:calorite_ingot", "8x gtceu:fine_platinum_wire")
   .inputFluids([Fluid.of("gtceu:annealed_copper", 1000)])
   .itemOutputs("kubejs:venus_chip")
   .duration(240).EUt(32)


   // - Crystal Refining - Cracking - //

   e.custom({
    "type": "powah:energizing",
      "ingredients": [
        {"item": "kubejs:monoway_crystal_1"}
      ],
      "energy": 50000,
      "result": {
        "count": 2,
        "item": "gtceu:monoway_crystal_1_dust"
      }
  })
  e.custom({
    "type": "powah:energizing",
      "ingredients": [
        {"item": "kubejs:monoway_crystal_2"}
      ],
      "energy": 50000,
      "result": {
        "count": 2,
        "item": "gtceu:monoway_crystal_2_dust"
      }
  })
  e.custom({
    "type": "powah:energizing",
      "ingredients": [
        {"item": "kubejs:monoway_crystal_3"}
      ],
      "energy": 50000,
      "result": {
        "count": 2,
        "item": "gtceu:monoway_crystal_3_dust"
      }
  })
  e.custom({
    "type": "powah:energizing",
      "ingredients": [
        {"item": "kubejs:monoway_crystal_4"}
      ],
      "energy": 50000,
      "result": {
        "count": 2,
        "item": "gtceu:monoway_crystal_4_dust"
      }
  })

  // - Mono 1,2,3,4 LV AND MV - // 
  e.recipes.gtceu.centrifuge("monoway_crystal_1_centri_dusts")
   .itemInputs("4x gtceu:monoway_crystal_1_dust")
   .itemOutputs("18x gtceu:realgar_dust", "12x gtceu:coal_dust", "15x gtceu:emerald_dust", "21x gtceu:nether_quartz_dust")
   .duration(550).EUt(32)

   e.recipes.gtceu.centrifuge("monoway_crystal_2_centri_dusts")
   .itemInputs("4x gtceu:monoway_crystal_2_dust")
   .itemOutputs("14x gtceu:zinc_dust", "18x gtceu:bauxite_dust", "18x gtceu:tin_dust")
   .duration(550).EUt(32)

   e.recipes.gtceu.centrifuge("monoway_crystal_3_centri_dusts")
   .itemInputs("4x gtceu:monoway_crystal_3_dust")
   .itemOutputs("14x gtceu:gold_dust", "20x gtceu:cobalt_dust", "21x gtceu:monazite_dust")
   .duration(550).EUt(32)

   e.recipes.gtceu.centrifuge("monoway_crystal_4_centri_dusts")
   .itemInputs("4x gtceu:monoway_crystal_4_dust")
   .itemOutputs("32x gtceu:diamond_dust", "12x gtceu:magnesite_dust", "18x gtceu:pyrolusite_dust", "32x thermal:iron_dust")
   .duration(550).EUt(32)
})

// Dense Ore Uncrafting
ServerEvents.recipes(e => {
  e.recipes.gtceu.chemical_bath("dense_ore_to_normal_1")
   .itemInputs("kubejs:dense_iron_ore")
   .itemOutputs("15x minecraft:iron_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_2")
   .itemInputs("kubejs:dense_nickel_ore")
   .itemOutputs("15x gtceu:nickel_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_3")
   .itemInputs("kubejs:dense_redstone_ore")
   .itemOutputs("25x minecraft:redstone_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_4")
   .itemInputs("kubejs:dense_cas_ore")
   .itemOutputs("15x gtceu:cassiterite_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_5")
   .itemInputs("kubejs:dense_ilmenite_ore")
   .itemOutputs("15x gtceu:ilmenite_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_6")
   .itemInputs("kubejs:dense_bauxite_ore")
   .itemOutputs("25x gtceu:bauxite_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_7")
   .itemInputs("kubejs:dense_tung_ore")
   .itemOutputs("25x gtceu:tungstate_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_8")
   .itemInputs("kubejs:dense_spha_ore")
   .itemOutputs("25x gtceu:sphalerite_ore")
   .inputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 400)])
   .duration(350).EUt(32)

   // Ruby - Sapphire 

    e.recipes.gtceu.electric_blast_furnace("sapphire_ebf")
    .itemInputs("kubejs:solid_sapphire")
    .outputFluids([Fluid.of("gtceu:sapphire_slurry", 1000)])
    .duration(350).EUt(128).blastFurnaceTemp(2700)

    e.recipes.gtceu.electric_blast_furnace("green_sapphire_ebf")
    .itemInputs("kubejs:solid_green_sapphire")
    .outputFluids([Fluid.of("gtceu:green_sapphire_slurry", 1000)])
    .duration(350).EUt(128).blastFurnaceTemp(2700)

    e.recipes.gtceu.electric_blast_furnace("ruby_ebf")
    .itemInputs("kubejs:solid_ruby")
    .outputFluids([Fluid.of("gtceu:ruby_slurry", 1000)])
    .duration(350).EUt(128).blastFurnaceTemp(2700)

   // Sulfuric Ethalic Acid

  e.recipes.gtceu.chemical_reactor("sulfuric_ethalic_acid")
   .inputFluids([
    Fluid.of("gtceu:sulfuric_acid", 240),
    Fluid.of("gtceu:ethanol", 240),
    Fluid.of("gtceu:oxygen", 240)
  ])
  .outputFluids([Fluid.of("gtceu:sulfuric_ethalic_acid", 480)])
  .duration(250).EUt(16)

})

/*
dense_redstone_ore - 25 Redstone Out
dense_iron_ore - 15 Iron Out
dense_nickel_ore - 15 Nickel Out
dense_cas_ore - 15 Cas Out
dense_ilmenite_ore - 15 Ilmenite Out

Sulfuric Ethalic Acid = Sulfuric Acid + Ethanol + Oxygen
*/