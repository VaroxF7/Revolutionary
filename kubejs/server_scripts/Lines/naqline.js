ServerEvents.recipes(e => {
    e.recipes.gtceu.macerator("raw_naq_dust")
     .itemInputs("gtceu:raw_naquadah")
     .itemOutputs("gtceu:raw_naq_dust")
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_bath("chembath_naq_dust")
     .itemInputs("gtceu:raw_naq_dust")
     .itemOutputs("gtceu:naquahdic_fluorantic_dust")
     .inputFluids([Fluid.of("gtceu:fluoroantimonic_acid", 500)])
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_reactor("naquadric_pristic")
     .itemInputs("gtceu:naquahdic_fluorantic_dust")
     .itemOutputs("gtceu:naquadric_pristic_dust")
     .inputFluids([Fluid.of("gtceu:sulfuric_acid", 500)])
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_reactor("sulfuric_to_solution_1")
     .itemInputs("gtceu:naquadric_pristic_dust")
     .outputFluids([Fluid.of("gtceu:calci_naquadah_solution", 250)])
     .inputFluids([Fluid.of("gtceu:dissolved_calcium_acetate", 500)])
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_reactor("prosperic_naqhadic_solution_recipe")
     .outputFluids([Fluid.of("gtceu:prosperic_naqhadic_solution", 250)])
     .inputFluids([Fluid.of("gtceu:dissolved_calcium_acetate", 144), Fluid.of("gtceu:prosperic_acid", 500),Fluid.of("gtceu:calci_naquadah_solution", 250)])
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_reactor("prosperic_crystal")
     .inputFluids([Fluid.of("gtceu:prosperic_naqhadic_solution", 144)])
     .itemOutputs("kubejs:prosperic_naquadic_crystal")
     .itemInputs("2x powah:crystal_niotic")
     .duration(350).EUt(2048)

    e.recipes.gtceu.chemical_reactor("venusite_acid_1")
     .itemInputs("2x kubejs:prosperic_naquadic_crystal")
     .inputFluids([Fluid.of("gtceu:venusite", 144)])
     .outputFluids([Fluid.of("gtceu:venusite_naquahdic_solution", 500)])
     .duration(350).EUt(2048)

    e.recipes.gtceu.distillation_tower("venus_air_distillation")
     .inputFluids([Fluid.of("gtceu:venus_air", 20000)])
     .outputFluids([
        Fluid.of("gtceu:venusite", 5000),
        Fluid.of("gtceu:cobalt", 5000),
        Fluid.of("gtceu:deuterium", 5000),
        Fluid.of("gtceu:chlorine", 5000),
        Fluid.of("gtceu:prosperic_acid", 5000)
     ])
     .duration(350).EUt(2048)

     e.recipes.gtceu.chemical_reactor("venus_air_centri_reactor")
      .inputFluids([Fluid.of("gtceu:venus_air", 2000), Fluid.of("gtceu:titanium_tetrachloride", 450)])
      .outputFluids([Fluid.of("gtceu:venustric_acid", 500)])
      .duration(350).EUt(2048)

      e.recipes.gtceu.chemical_reactor("22_44565")
      .inputFluids([Fluid.of("gtceu:venus_air", 2000), Fluid.of("gtceu:titanium_tetrachloride", 450)])
      .outputFluids([Fluid.of("gtceu:venustric_acid", 500)])
      .duration(350).EUt(2048)
      
    e.recipes.gtceu.alloy_blast_smelter("bevenustric_naq_acid")
     .inputFluids([Fluid.of("gtceu:venusite_naquahdic_solution", 250), Fluid.of("gtceu:venustrite_acid", 250)])
     .outputFluids([Fluid.of("gtceu:molten_venutric_bydroxide", 288)])
     .itemInputs("4x gtceu:thorium_dust")
     .duration(360).EUt(2048).blastFurnaceTemp(5400)

    e.recipes.gtceu.mixer("venustrite_solution_to_dust")
     .itemOutputs("4x gtceu:venutrite_dust")
     .itemInputs("4x gtceu:platinum_dust")
     .inputFluids([Fluid.of("gtceu:molten_venutric_bydroxide", 144)])

   e.recipes.gtceu.thermal_centrifuge("venutrite_to_naq_dust")
    .itemInputs("gtceu:venutrite_dust")

})