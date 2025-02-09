ServerEvents.recipes(e => {
    e.recipes.gtceu.cracker("cracked_hydrogen")
     .inputFluids([Fluid.of("gtceu:hydrogen", 5000)])
     .inputFluids([Fluid.of("gtceu:refinery_gas", 2000)])
     .outputFluids([Fluid.of("gtceu:cracked_hydrogen", 1000)])
     .duration(500).EUt(512).circuit(1)

    e.recipes.gtceu.intro_compressor("dense_hydrogen")
     .inputFluids([Fluid.of("gtceu:cracked_hydrogen", 8000)])
     .inputFluids([Fluid.of("gtceu:nitrobenzene", 600)])
     .outputFluids([Fluid.of("gtceu:dense_hydrogen", 1000)])
     .duration(850).EUt(2048).circuit(2)

     e.recipes.gtceu.intro_compressor("ultra_dense_hydrogen")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 10000), Fluid.of("gtceu:nitrobenzene", 600)])
     .outputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 1000)])
     .duration(650).EUt(8192).circuit(3)

     // Hydrogen Recipe from Evaporation
     e.recipes.gtceu.evaporation("water_to_hydrogen")
      .inputFluids([Fluid.of("minecraft:water", 10000)])
      .outputFluids([Fluid.of("gtceu:hydrogen", 5000)])
      .duration(230).EUt(512).circuit(1)

    e.recipes.gtceu.evaporation("water_to_oxygen")
      .inputFluids([Fluid.of("minecraft:water", 10000)])
      .outputFluids([Fluid.of("gtceu:oxygen", 5000)])
      .duration(230).EUt(512).circuit(2)

     // Recipe Additions
    e.recipes.gtceu.fluid_solidifier("nether_star_hydrogen")
     .notConsumable("kubejs:nether_star_mold")
     .itemOutputs("minecraft:nether_star")
     .inputFluids([Fluid.of("gtceu:liquid_nether_star", 144)])
     .duration(450).EUt(512)

    e.recipes.gtceu.large_chemical_reactor("liquid_nether_star")
     .itemInputs("2x gtceu:iridium_dust")
     .outputFluids([Fluid.of("gtceu:liquid_nether_star", 288)])
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .inputFluids([Fluid.of("gtceu:helium_3", 500)])
     .duration(250).EUt(8192)
})