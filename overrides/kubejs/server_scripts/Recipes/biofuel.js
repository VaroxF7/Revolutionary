ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_reactor("plant_ball_new")
     .itemInputs("4x #createaddition:plants")
     .inputFluids([Fluid.of("createaddition:seed_oil", 400)])
     .itemOutputs("gtceu:plant_ball")
     .duration(120).EUt(9)

    e.recipes.gtceu.compressor("plant_ball_to_compressed")
     .itemInputs("gtceu:plant_ball")
     .itemOutputs("kubejs:compressed_plant_ball")
     .duration(50).EUt(12)

    e.recipes.gtceu.mixer("compressed_additives")
     .itemInputs("kubejs:compressed_plant_ball", "4x minecraft:sugar", "2x create:cinder_flour")
     .itemOutputs("createaddition:biomass")
     .inputFluids([Fluid.of("minecraft:water", 1200)])
     .duration(50).EUt(12)

    e.recipes.gtceu.chemical_bath("biomass_to_pure_variant")
     .itemInputs("createaddition:biomass")
     .inputFluids([Fluid.of("gtceu:distilled_water", 250)])
     .itemOutputs("kubejs:purified_biomass_pallet")
     .duration(120).EUt(15)

    e.recipes.gtceu.extractor("pure_to_liquid")
     .itemInputs("kubejs:purified_biomass_pallet")
     .outputFluids([Fluid.of("createaddition:bioethanol", 250)])
     .duration(120).EUt(15)

    e.recipes.gtceu.chemical_reactor("refined_biofuel_three_oxide")
     .inputFluids([Fluid.of("createaddition:bioethanol", 100)])
     .itemInputs("4x gtceu:salt_dust")
     .outputFluids([Fluid.of("gtceu:refined_biofuel", 200)])
     .duration(220).EUt(20)
        
    e.remove({ output: "gtceu:plant_ball"})
    e.remove({ output: "createaddition:biomass"})
})