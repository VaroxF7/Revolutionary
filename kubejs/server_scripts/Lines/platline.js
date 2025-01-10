ServerEvents.recipes(e => {
e.recipes.gtceu.electric_blast_furnace("kubejs:ebf_recycle_hydrocloric")
    .inputFluids([Fluid.of("gtceu:dirty_hydrocloric_slurry", 1000)])
    .outputFluids([Fluid.of("gtceu:hydrocloric_acid", 550)])
    .duration(150).EUt(124).circuit(2).blastFurnaceTemp(2000)

  e.recipes.gtceu.electric_blast_furnace("kubejs:ebf_recycle_sulfuric")
    .inputFluids([Fluid.of("gtceu:dirty_sulfuric_slurry", 576)])
    .outputFluids([Fluid.of("gtceu:sulfuric_acid", 546)])
    .duration(150).EUt(124).circuit(10).blastFurnaceTemp(2000)

  e.recipes.gtceu.chemical_reactor("heavy_heater_recipe_for_chloride")
   .inputFluids([
    Fluid.of("gtceu:heavy_water", 500),
    Fluid.of("gtceu:sulfuric_acid", 144)
  ])
   .itemOutputs("gtceu:calcium_chloride_dust")
   .duration(280).EUt(15).circuit(9)

   e.recipes.gtceu.electric_blast_furnace("sep_pgs_new")
   .itemInputs("gtceu:platinum_group_sludge_dust")
   .inputFluids([Fluid.of("gtceu:aqua_regia", 1000)])
   .itemOutputs("2x gtceu:rarest_metal_mixture_dust", "3x gtceu:inert_metal_mixture_dust", "3x gtceu:platinum_sludge_residue_dust")
   .duration(360).EUt(510).circuit(4).blastFurnaceTemp(2600)

  e.recipes.gtceu.electric_blast_furnace("refined_to_dusts_pgs")
   .itemInputs("gtceu:refined_captinium_ore")
   .inputFluids([Fluid.of("gtceu:nitrogen", 1200)])
   .itemOutputs("gtceu:rhodium_dust","gtceu:palladium_dust")
   .duration(460).EUt(2048).circuit(2).blastFurnaceTemp(3700)

  e.recipes.gtceu.large_chemical_reactor("captinium_dust_to_pure")
   .itemInputs("gtceu:calcium_hydroxide_dust","gtceu:captinium_dust")
   .inputFluids([Fluid.of("gtceu:ammonium_formate", 500)])
   .itemOutputs("kubejs:captinium_pure_dust")
   .duration(460).EUt(2048)

  e.recipes.gtceu.centrifuge("centri_pure_cap")
   .itemInputs("kubejs:captinium_pure_dust")
   .itemOutputs("gtceu:impure_beryllium_dust","gtceu:ruthenium_dust","gtceu:impure_platinum_dust")
   .duration(230).EUt(512)
  
   e.recipes.gtceu.chemical_bath("impure_plat_to_raw")
    .itemInputs("gtceu:impure_platinum_dust")
    .inputFluids([Fluid.of("gtceu:distilled_water", 560)])
    .itemOutputs("gtceu:platinum_raw_dust")
    .duration(110).EUt(420)

  e.recipes.gtceu.alloy_smelter("raw_to_platinum")
   .itemInputs("gtceu:platinum_raw_dust","gtceu:stainless_steel_dust")
   .itemOutputs("gtceu:platinum_dust")
   .inputFluids([Fluid.of("gtceu:aluminium", 144)])
   .duration(110).EUt(420)

  e.recipes.gtceu.chemical_bath("plat_to_purified")
   .itemInputs("gtceu:platinum_dust")
   .inputFluids([Fluid.of("gtceu:distilled_water", 288)])
   .itemOutputs("gtceu:pure_platinum_dust")
   .duration(110).EUt(420)

  e.recipes.gtceu.electric_blast_furnace("pure_to_liquid")
  .itemInputs("gtceu:pure_platinum_dust")
  .inputFluids([Fluid.of("gtceu:sulfuric_acid", 800)])
  .outputFluids([Fluid.of("gtceu:platinum", 1000)])
  .duration(110).EUt(420)

})

ServerEvents.recipes(e => {
  const toRemoveId = [
    'gtceu:shapeless/centrifuged_ore_to_dust_captinium','gtceu:blasting/smelt_captinium_ore_to_ingot','gtceu:blasting/smelt_netherrack_captinium_ore_to_ingot',
    'gtceu:blasting/smelt_deepslate_captinium_ore_to_ingot','gtceu:centrifuge/centrifuge_captinium_dirty_dust_to_dust','gtceu:macerator/macerate_deepslate_captinium_ore_to_raw_ore','gtceu:macerator/macerate_endstone_captinium_ore_to_raw_ore',
    'gtceu:ore_washer/wash_captinium_pure_dust_to_dust','thermal:furnace_1242110717','thermal:furnace_2077818393','thermal:furnace_1327860644','thermal:furnace_1518064620',
    'gtceu:blasting/smelt_endstone_captinium_ore_to_ingot','gtceu:macerator/macerate_netherrack_captinium_ore_to_raw_ore','gtceu:macerator/macerate_captinium_ore_to_raw_ore','gtceu:ore_washer/wash_captinium_dirty_dust_to_dust',
    'gtceu:shaped/tiny_dust_assembling_captinium','gtceu:shaped/small_dust_assembling_captinium','gtceu:smelting/smelt_captinium_ore_to_ingot','gtceu:smelting/smelt_endstone_captinium_ore_to_ingot','gtceu:smelting/smelt_netherrack_captinium_ore_to_ingot',
    'gtceu:smelting/smelt_deepslate_captinium_ore_to_ingot','gtceu:shapeless/crushed_ore_to_dust_platinum','gtceu:forge_hammer/hammer_platinum_crushed_ore_to_impure_dust','gtceu:macerator/macerate_platinum_crushed_ore_to_impure_dust',
    'create:crushing/raw_platinum_ore','immersiveengineering:arcfurnace/raw_ore_platinum','gtceu:compressor/compress_platinumto_ore_block','gtceu:forge_hammer/hammer_raw_platinum_to_crushed_ore','gtceu:macerator/macerate_raw_platinum_ore_to_crushed_ore',
    'gtceu:shapeless/purified_ore_to_dust_platinum','gtceu:forge_hammer/hammer_platinum_crushed_ore_to_dust','gtceu:macerator/macerate_platinum_crushed_ore_to_dust','gtceu:ore_washer/wash_platinum_crushed_ore_to_purified_ore_distilled','gtceu:ore_washer/wash_platinum_crushed_ore_to_purified_ore_fast',
    'gtceu:ore_washer/wash_platinum_crushed_ore_to_purified_ore','gtceu:forge_hammer/hammer_platinum_ore_to_raw_ore','gtceu:macerator/macerate_endstone_platinum_ore_to_raw_ore','gtceu:macerator/macerate_platinum_ore_to_raw_ore','gtceu:macerator/macerate_deepslate_platinum_ore_to_raw_ore',
    'gtceu:macerator/macerate_netherrack_platinum_ore_to_raw_ore','gtceu:thermal_centrifuge/centrifuge_platinum_purified_ore_to_refined_ore','gtceu:thermal_centrifuge/centrifuge_platinum_crushed_ore_to_refined_ore','gtceu:shaped/small_dust_assembling_platinum',
    'gtceu:shaped/tiny_dust_assembling_platinum','gtceu:shaped/small_dust_assembling_platinum_raw','gtceu:shaped/tiny_dust_assembling_platinum_raw'
  ];
  toRemoveId.forEach(element => {
  e.remove({ id: element});
  })
})






