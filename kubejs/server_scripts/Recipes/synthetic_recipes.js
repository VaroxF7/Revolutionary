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
})

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



