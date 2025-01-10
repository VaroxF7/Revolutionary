// Made by Vera_ix
// Look up #T-98QFFD

ServerEvents.recipes(e => {
    e.recipes.gtceu.forming_press("exo_skeleton_recipe_1")
     .itemInputs("16x gtceu:carbon_fiber_mesh", "8x gtceu:stainless_steel_bolt")
     .itemOutputs("kubejs:miner_skeleton_mk1")
     .duration(560).EUt(120)

     e.recipes.gtceu.forming_press("exo_skeleton_recipe_2")
     .itemInputs("32x gtceu:carbon_fiber_mesh", "16x gtceu:stainless_steel_bolt", "4x gtceu:double_platinum_plate", "2x gtceu:double_neodymium_plate")
     .itemOutputs("kubejs:miner_skeleton_mk2")
     .duration(560).EUt(512)

     e.recipes.gtceu.chemical_bath("chemical_bath_for_exo_1")
      .itemInputs("kubejs:miner_skeleton_mk1")
      .inputFluids([Fluid.of("gtceu:sulfuric_acid", 1200)])
      .itemOutputs("kubejs:etched_skel_mk1")
      .duration(450).EUt(120)

    e.recipes.gtceu.chemical_bath("chemical_bath_for_exo_2")
      .itemInputs("kubejs:miner_skeleton_mk2")
      .inputFluids([Fluid.of("gtceu:sulfuric_acid", 2200)])
      .itemOutputs("kubejs:etched_skel_mk2")
      .duration(450).EUt(120)

    e.recipes.gtceu.assembler("exo_to_miner_mk1")
     .itemInputs("kubejs:etched_skel_mk1", "8x ae2:red_paint_ball", "2x gtceu:circuits/mv", "2x powah:energizing_rod_blazing")
     .inputFluids([Fluid.of("gtceu:redon_radiance", 8000)])
     .itemOutputs("kubejs:miner_tier_1")
     .duration(340).EUt(120).circuit(7)

     e.recipes.gtceu.assembler("exo_to_miner_mk2")
     .itemInputs("kubejs:etched_skel_mk2", "8x ae2:blue_paint_ball", "2x gtceu:circuits/hv", "2x powah:energizing_rod_niotic")
     .inputFluids([Fluid.of("gtceu:redon_riplon", 8000)])
     .itemOutputs("kubejs:miner_tier_2")
     .duration(640).EUt(512).circuit(4)  
})

// Carbon Compression Recipe
ServerEvents.recipes(e => {
  e.recipes.gtceu.canner("carbon_vial")
   .itemInputs("1x gtceu:carbon_dust", "1x gtceu:glass_vial")
   .itemOutputs("kubejs:carbon_vial")
   .duration(360).EUt(124).circuit(4)

  e.recipes.gtceu.implosion_compressor("vial_carbon_to_dimond")
   .itemInputs("16x kubejs:carbon_vial")
   .itemOutputs("minecraft:diamond")
   .chancedOutput('8x gtceu:glass_vial', 5000, 50)
   .duration(560).EUt(512).circuit(1)

   e.recipes.gtceu.implosion_compressor("vial_carbon_to_emerald")
   .itemInputs("8x kubejs:carbon_vial")
   .itemOutputs("minecraft:emerald")
   .chancedOutput('4x gtceu:glass_vial', 5000, 50) 
   .duration(460).EUt(512).circuit(2)

   e.recipes.gtceu.extractor("diamond_extraction")
    .itemInputs("minecraft:diamond")
    .outputFluids([Fluid.of("gtceu:liquid_diamond", 288)])
    .duration(240).EUt(124)

    e.recipes.gtceu.extractor("emerald_extraction")
    .itemInputs("minecraft:emerald")
    .outputFluids([Fluid.of("gtceu:liquid_emerald", 288)])
    .duration(240).EUt(124)
})

// Misc Synthetic Production Recipes
// Those can be any way of producing a Liquid or Item with Materials that are Renewable or made with Synthetic Materials 
ServerEvents.recipes(e => {
e.recipes.gtceu.compressor("matter_ball_recipe_compressor")
.itemInputs("gtceu:rubber_ingot")
.itemOutputs("9x ae2:matter_ball")
.duration(120).EUt(15)

e.recipes.gtceu.compressor("kubejs:fluix_dust_to_flux_net_dust")
.itemInputs("4x ae2:fluix_dust")
.itemOutputs('2x fluxnetworks:flux_dust')
.duration(180)
.EUt(128)
})

// Trello Card #876DDF
// Sulfuric Recipe
ServerEvents.recipes(e => {
  e.recipes.gtceu.extractor("netherwart_extractor")
   .itemInputs("minecraft:nether_wart")
   .outputFluids([Fluid.of("gtceu:nether_wart_juice", 144)])
   .duration(240).EUt(22)

  e.recipes.gtceu.distillery("netherwart_distill_to_fluid")
   .inputFluids([Fluid.of("gtceu:nether_wart_juice", 288)])
   .outputFluids([Fluid.of("gtceu:distilled_wart_juice", 144)])
   .duration(2340).EUt(23).circuit(4)

  e.recipes.gtceu.centrifuge("nether_wart_juice_centrifuging")
   .inputFluids([Fluid.of("gtceu:nether_wart_juice", 144)])
   .outputFluids([Fluid.of("gtceu:ethanol", 72)])
   .duration(160).EUt(13)

  e.recipes.gtceu.distillery("distilled_to_sulfuric")
   .inputFluids([Fluid.of("gtceu:distilled_wart_juice", 288)])
   .outputFluids([Fluid.of("gtceu:sulfuric_acid", 144)]) 
   .duration(240).EUt(21).circuit(1)
})

// Synthetic to Alloy for Circuit in IV AND EV
ServerEvents.recipes(e => {
  e.recipes.gtceu.large_chemical_reactor("199_to_alloy")
   .inputFluids([
    Fluid.of("gtceu:zenithal_zephyr", 2500),
    Fluid.of("gtceu:redon_riplon", 3000),
    Fluid.of("gtceu:titanium_electrum_alloy", 1000)
  ])
  .outputFluids([Fluid.of("gtceu:trinaium_alloy", 4000)])
  .duration(760).EUt(1200)

  e.recipes.gtceu.mixer("titanium_electrum_alloy")
   .itemInputs("4x gtceu:titanium_dust", "8x gtceu:electrum_dust")
   .itemOutputs("12x gtceu:titanium_electrum_alloy_dust")
   .duration(560).EUt(512)

  e.recipes.gtceu.mixer("pulsating_trinaium_alloy")
   .itemInputs("12x gtceu:pulsating_alloy_dust", "4x gtceu:titanium_electrum_alloy_dust")
   .itemOutputs("16x gtceu:pulsating_titanium_electrum_alloy_dust")
   .inputFluids([Fluid.of("gtceu:trinaium_alloy", 2000)])
   .duration(560).EUt(512)

  e.recipes.gtceu.extractor("pulsating_titanium_electrum_alloy_dust_extractor")
   .itemInputs("gtceu:pulsating_titanium_electrum_alloy_dust")
   .outputFluids([Fluid.of("gtceu:pulsating_titanium_electrum_alloy", 1000)])
   .duration(560).EUt(512)

  e.recipes.gtceu.extractor("titanium_electrum_alloy_extractor")
   .itemInputs("gtceu:titanium_electrum_alloy_dust")
   .outputFluids([Fluid.of("gtceu:titanium_electrum_alloy", 288)])
   .duration(260).EUt(15)

  e.recipes.gtceu.circuit_assembler("micro_mainframe_assembler_new")
   .itemInputs([
    Item.of("4x gtceu:pulsating_titanium_electrum_alloy_frame"),
    Item.of("2x gtceu:micro_processor_computer"),
    Item.of("24x kubejs:mana_ram_chip"),
    Item.of("4x gtceu:electrum_single_wire"),
    Item.of("16x #gtceu:inductor"),
    Item.of("32x #gtceu:capacitor")
  ])
  .inputFluids([Fluid.of("gtceu:titanium_silver", 576)]) 
  .itemOutputs("gtceu:micro_processor_mainframe")
  .duration(1180).EUt(480)
  .cleanroom(CleanroomType.CLEANROOM)

  e.recipes.gtceu.large_chemical_reactor("titanium_silver_fluid")
   .inputFluids([
    Fluid.of("gtceu:titanium", 144),
    Fluid.of("gtceu:silver", 288)
  ])
  .outputFluids([Fluid.of("gtceu:titanium_silver", 388)])
  .duration(360).EUt(120)

  e.recipes.gtceu.macerator("pulsating_alloy_to_dust")
   .itemInputs("enderio:pulsating_alloy_ingot")
   .itemOutputs("gtceu:pulsating_alloy_dust")
   .duration(180).EUt(32)

  e.recipes.gtceu.extruder("pulsating_elec_alloy_to_rod")
   .itemInputs("gtceu:pulsating_titanium_electrum_alloy_ingot")
   .itemOutputs("4x gtceu:pulsating_titanium_electrum_alloy_rod")
   .duration(180).EUt(32)
})


