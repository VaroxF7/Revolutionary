ServerEvents.recipes(e => {
    e.recipes.gtceu.intro_compressor("dense_hydrogen_recipe")
     .inputFluids([Fluid.of("gtceu:hydrogen", 5000)])
     .inputFluids([Fluid.of("gtceu:nitrobenzene", 1200)])
     .outputFluids([Fluid.of("gtceu:dense_hydrogen", 1000)])
     .duration(850).EUt(2048).circuit(1)

     e.recipes.gtceu.intro_compressor("ultra_dense_hydrogen_recipe")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 10000), Fluid.of("gtceu:nitrobenzene", 3000)])
     .outputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 500)])
     .duration(650).EUt(8192).circuit(2)

     // Hydrogen Recipe from Evaporation
     e.recipes.gtceu.evaporation("water_to_hydrogen")
      .inputFluids([Fluid.of("minecraft:water", 10000)])
      .outputFluids([Fluid.of("gtceu:hydrogen", 5000)])
      .duration(230).EUt(512)

     // Recipe Additions
    e.recipes.gtceu.fluid_solidifier("nether_star_hydrogen")
     .notConsumable("kubejs:nether_star_mold")
     .itemOutputs("minecraft:nether_star")
     .inputFluids([Fluid.of("gtceu:liquid_nether_star", 144)])
     .duration(450).EUt(512)

    e.recipes.gtceu.large_chemical_reactor("liquid_nether_star")
     .itemInputs("8x gtceu:titanium_silver_dust")
     .outputFluids([Fluid.of("gtceu:liquid_nether_star", 288)])
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .inputFluids([Fluid.of("gtceu:rare_metal_mixture_new", 500)])
     .duration(550).EUt(2048)
})