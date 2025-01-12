ServerEvents.recipes(e => {

///////////////////////////////////////////////////////////////////////////////////////////////////

  e.recipes.gtceu.sim_chamber_lv("sim_tier_1_1")
     .itemInputs("kubejs:miner_tier_1", "2x kubejs:fluxium", "gtceu:steel_crate")
     .inputFluids([Fluid.of("gtceu:refined_biofuel", 2000)])
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
        Item.of("64x ad_astra:moon_desh_ore"),
        Item.of("128x kubejs:xylium_dust"),
        Item.of("64x kubejs:radium_dust")
     ])
     .duration(2000).EUt(125)

   e.recipes.gtceu.sim_chamber_lv("sim_tier_1_scrap")
     .itemInputs("kubejs:miner_tier_1","gtceu:steel_crate")
     .inputFluids([Fluid.of("gtceu:rocket_refined_fuel", 1200)])
     .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 72)])
     .itemOutputs([
      Item.of("64x kubejs:circuit_scrap"),
      Item.of("32x kubejs:processor_scrap"),
      Item.of("128x kubejs:metal_scrap")
   ])
     .duration(1100).EUt(125)

  e.recipes.gtceu.sim_chamber_lv("sim_tier_1_fluid")
     .itemInputs("kubejs:miner_tier_1","2x kubejs:fluxium","gtceu:steel_drum")
     .inputFluids([Fluid.of("gtceu:rocket_refined_fuel", 2000)])
     .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 144)])
     .outputFluids([
      Fluid.of("gtceu:sapphire_slurry", 1500),
      Fluid.of("gtceu:green_sapphire_slurry", 1500),
      Fluid.of("gtceu:ruby_slurry", 1500)
     ])
     .itemOutputs("64x kubejs:radium_dust")
     .duration(2000).EUt(125)

     e.recipes.gtceu.sim_chamber_lv("sim_tier_1_1_fluid")
     .itemInputs("kubejs:miner_tier_1","2x kubejs:fluxium","gtceu:steel_drum")
     .inputFluids([Fluid.of("gtceu:rocket_refined_fuel", 500)])
     .inputFluids([Fluid.of("gtceu:liquid_computex_selection", 72)])
     .outputFluids([
      Fluid.of("gtceu:liquid_sky_stone", 1500)
     ])
     .itemOutputs("64x kubejs:radium_dust")
     .duration(1000).EUt(125)

///////////////////////////////////////////////////////////////////////////////////////////////////
// Scraping Recipes
 e.recipes.gtceu.macerator("scrap_to_circuit")
 .itemInputs("kubejs:circuit_scrap")
 .chancedOutput("gtceu:basic_electronic_circuit", 4500, 0.1)
 .duration(100).EUt(20).circuit(1)

 e.recipes.gtceu.macerator("scrap_to_cicuit_1")
 .itemInputs("4x kubejs:circuit_scrap")
 .chancedOutput("2x gtceu:basic_electronic_circuit", 7500, 0.1)
 .duration(50).EUt(125).circuit(2)

 e.recipes.gtceu.macerator("metal_scrap_to_dust")
 .itemInputs("kubejs:metal_scrap")
 .chancedOutput("2x gtceu:steel_dust", 5000, 0.1)
 .chancedOutput("4x gtceu:electrum_dust", 2500, 0.1)
 .chancedOutput("4x gtceu:stainless_steel_dust", 2500, 0.1)
 .duration(120).EUt(120)

 e.recipes.gtceu.macerator("processor_scrap_to_dust")
 .itemInputs("kubejs:processor_scrap")
 .chancedOutput("8x forge:dusts/gold", 5000, 0.1)
 .chancedOutput("4x forge:dusts/silver", 2500, 0.1)
 .chancedOutput("4x forge:dusts/polyethylene", 2500, 0.1)
 .duration(150).EUt(120)

///////////////////////////////////////////////////////////////////////////////////////////////////
// General Recipes
  e.recipes.gtceu.centrifuge("radium_to_radon")
   .itemInputs("kubejs:radium_dust")
   .outputFluids([Fluid.of("gtceu:radon", 144)])
   .duration(100).EUt(32)

  e.recipes.gtceu.chemical_reactor("natural_and_refined_rocket")
   .inputFluids([
      Fluid.of("gtceu:natural_gas", 250),
      Fluid.of("gtceu:refined_biofuel", 144),
      Fluid.of("gtceu:hydrogen", 144)
   ])
   .itemInputs("4x gtceu:aluminium_dust","2x gtceu:lithium_dust")
   .outputFluids([Fluid.of("gtceu:rocket_refined_fuel", 1000)])
   .duration(250).EUt(15)
    
  e.recipes.gtceu.canner("fluxium_canning")
   .itemInputs("gtceu:flawless_glass_gem")
   .inputFluids([Fluid.of("gtceu:deuterium", 288)])
   .itemOutputs("kubejs:fluxium")
   .duration(50).EUt(25)

  e.recipes.gtceu.centrifuge("deuterium_from_moon_sand")
   .itemInputs("ad_astra:moon_sand")
   .outputFluids([Fluid.of("gtceu:deuterium", 560)])
   .duration(70).EUt(12)

   // T1 Drone Components
  e.recipes.gtceu.assembler("tier_1_mining_drone")
   .itemInputs("kubejs:navigation_computer","4x kubejs:mining_laser_mk1","2x gtceu:power_thruster","2x thermal:signalum_plate","2x thermal:signalum_gear")
   .itemOutputs("kubejs:miner_tier_1")
   .duration(240).EUt(32)

  e.recipes.gtceu.assembler("navigation_computer")
   .itemInputs("4x #gtceu:circuits/mv","ad_astra:rocket_nose_cone","gtceu:lv_sensor","4x thermal:signalum_plate")
   .itemOutputs("kubejs:navigation_computer")
   .duration(240).EUt(32)

   e.recipes.gtceu.assembler("basic_mining_laser")
   .itemInputs("2x #gtceu:circuits/mv","2x thermal:signalum_plate","2x gtceu:steel_plate","4x gtceu:silver_single_wire")
   .itemOutputs("kubejs:mining_laser_mk1")
   .duration(240).EUt(32)
})

///////////////////////////////////////////////////////////////////////////////////////////////////

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
})

///////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////

ServerEvents.recipes(e => {
    // Multiverse Casing
    e.recipes.gtceu.assembler("multiverse_casing_recipe")
    .itemInputs("2x gtceu:double_magnalium_plate","2x gtceu:double_chromium_plate", "4x gtceu:steel_bolt")
    .inputFluids([Fluid.of("gtceu:liquid_sky_stone", 576)])
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
     .duration(120).EUt(15)

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
     .inputFluids([Fluid.of("gtceu:phosphoric_acid", 144)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 18)])
     .duration(100).EUt(15)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_2")
     .itemInputs("powah:crystal_niotic")
     .inputFluids([Fluid.of("gtceu:phosphoric_acid", 144)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 72)])
     .duration(150).EUt(15)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_3")
     .itemInputs("powah:crystal_spirited")
     .inputFluids([Fluid.of("gtceu:phosphoric_acid", 288)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 144)])
     .duration(200).EUt(32)

    e.recipes.gtceu.chemical_reactor("lcctcrx_recipe_4")
     .itemInputs("powah:crystal_nitro")
     .inputFluids([Fluid.of("gtceu:phosphoric_acid", 288)])
     .outputFluids([Fluid.of("gtceu:liquid_computex_selection", 288)])
     .duration(250).EUt(120)
})

ServerEvents.recipes(e => {
  // Dense Ore Acid Crafting 
  e.recipes.gtceu.extractor("xylium_dust_to_liquid")
   .itemInputs("kubejs:xylium_dust")
   .outputFluids([Fluid.of("gtceu:xylium", 144)])
   .duration(350).EUt(16)

  e.recipes.gtceu.chemical_reactor("xylium_to_acid")
   .inputFluids([
    Fluid.of("gtceu:xylium", 144),
    Fluid.of("gtceu:sulfuric_acid", 144)
  ])
  .outputFluids([Fluid.of("gtceu:xylum_acid", 144)])
  .duration(350).EUt(16)

  // Dense Ore Processing
  e.recipes.gtceu.chemical_bath("dense_ore_to_normal_1")
   .itemInputs("kubejs:dense_iron_ore")
   .itemOutputs("15x minecraft:iron_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_2")
   .itemInputs("kubejs:dense_nickel_ore")
   .itemOutputs("15x gtceu:nickel_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_3")
   .itemInputs("kubejs:dense_redstone_ore")
   .itemOutputs("25x minecraft:redstone_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_4")
   .itemInputs("kubejs:dense_cas_ore")
   .itemOutputs("15x gtceu:cassiterite_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_5")
   .itemInputs("kubejs:dense_ilmenite_ore")
   .itemOutputs("15x gtceu:ilmenite_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_6")
   .itemInputs("kubejs:dense_bauxite_ore")
   .itemOutputs("25x gtceu:bauxite_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_7")
   .itemInputs("kubejs:dense_tung_ore")
   .itemOutputs("25x gtceu:tungstate_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)

   e.recipes.gtceu.chemical_bath("dense_ore_to_normal_8")
   .itemInputs("kubejs:dense_spha_ore")
   .itemOutputs("25x gtceu:sphalerite_ore")
   .inputFluids([Fluid.of("gtceu:xylum_acid", 400)])
   .duration(350).EUt(32)
})

/*
dense_redstone_ore - 25 Redstone Out
dense_iron_ore - 15 Iron Out
dense_nickel_ore - 15 Nickel Out
dense_cas_ore - 15 Cas Out
dense_ilmenite_ore - 15 Ilmenite Out

Sulfuric Ethalic Acid = Sulfuric Acid + Ethanol + Oxygen
*/

/*
Logic - Miner Drone Resources

T1 - Steel - Desh - Fluxium
 * Laser = Steel - MV Circuit - Signalum
 * Navigation = Steel - MV Circuits - Brass - Quartzite
*/
