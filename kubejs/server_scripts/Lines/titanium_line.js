///////////////////
//    Titanium   //
///////////////////

ServerEvents.recipes(e => {
    e.recipes.gtceu.fusion_reactor("kubejs:fusion_titanium_venus_mercury_recipe")
    .inputFluids([
        Fluid.of('gtceu:aluminium', 1000), 
        Fluid.of('gtceu:uranium_enriched_ostrum', 2500)
    ])
    .outputFluids([Fluid.of("gtceu:fusion_titanium_plasma"), 144])
    .fusionStartEU(150000000).EUt(512).duration(4000)
    
    e.recipes.gtceu.plasma_generator("kubejs:plasma_gen_recipe_titanium")
    .inputFluids([Fluid.of("gtceu:fusion_titanium_plasma"), 288])
    .outputFluids([Fluid.of("gtceu:titanium"), 288])
    .duration(450).EUt(-512)

    e.recipes.gtceu.large_chemical_reactor('kubejs:uranium_enriched_ostrum_recipe')
     .inputFluids([
        Fluid.of('gtceu:ostrum', 10000 ),
        Fluid.of('gtceu:uranium_235', 8500 )
     ])
    .outputFluids([Fluid.of('gtceu:uranium_enriched_ostrum', 3550)])
    .duration(2500).circuit(12).EUt(512) 

    e.recipes.gtceu.electric_blast_furnace("kubejs:raw_ostrum_to_liquid")
    .itemInputs("4x ad_astra:raw_ostrum")
    .outputFluids([Fluid.of('gtceu:ostrum', 144 )])
    .duration(600).EUt(512).circuit(6).blastFurnaceTemp(2500) 

    e.recipes.gtceu.electric_blast_furnace("kubejs:raw_ostrum_to_liquid_boosted")
    .itemInputs("2x ad_astra:raw_ostrum")
    .outputFluids([Fluid.of('gtceu:ostrum', 244 )])
    .inputFluids([Fluid.of('gtceu:argon', 1000 )])
    .duration(400).EUt(120).circuit(3).blastFurnaceTemp(3600) 

    e.recipes.gtceu.vacuum_freezer("titanium_h_to_cool")
     .itemInputs("gtceu:hot_titanium_ingot")
     .inputFluids([Fluid.of("gtceu:cryotheum", 250)])
     .itemOutputs("gtceu:titanium_ingot")
     .duration(250).EUt(128)

    e.recipes.gtceu.chemical_reactor("cryotheum_dust_1")
     .itemInputs("4x kubejs:cryotheum")
     .inputFluids([Fluid.of("gtceu:hydrochloric_acid", 1200)])
     .outputFluids([Fluid.of("gtceu:cryotheum", 500)])
     .duration(350).EUt(450)
     
})