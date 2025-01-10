ServerEvents.recipes(e => {

    e.remove({ id: "ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench"})
    e.remove({ id: "ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench"})
    e.remove({ id: "ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench"})
    e.remove({ id: "ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench"})

    // TIER 1 - 2 Rocket 
    e.recipes.gtceu.assembler("kubejs:tier_1_rocket_recipe")
    .itemInputs("ad_astra:rocket_nose_cone", "2x ad_astra:steel_engine","2x ad_astra:rocket_fin", "2x #gtceu:circuits/mv", "8x #forge:storage_blocks/steel")
    .itemOutputs("ad_astra:tier_1_rocket")
    .duration(2000)
    .EUt(120)

    e.recipes.gtceu.assembler("kubejs:tier_2_rocket_recipe")
    .itemInputs("ad_astra:rocket_nose_cone", "4x ad_astra:desh_engine", "2x ad_astra:rocket_fin", "2x #gtceu:circuits/hv", "8x #forge:storage_blocks/desh")
    .itemOutputs("ad_astra:tier_2_rocket")
    .duration(2500)
    .EUt(512)

    // TIER 3 - 4 Rocket 
    e.recipes.gtceu.assembly_line("kubejs:rocket_tier_3_recipe")
    .itemInputs("4x ad_astra:ostrum_engine", "2x ad_astra:ostrum_tank", "2x #gtceu:circuits/hv", "8x ad_astra:ostrum_block", "ad_astra:rocket_nose_cone")
    .itemOutputs("ad_astra:tier_3_rocket")
    .inputFluids([Fluid.of('gtceu:refined_sky_stone', 1500 )])
    .EUt(512)
    .duration(2500)

    e.recipes.gtceu.assembly_line("kubejs:rocket_tier_4_recipe")
    .itemInputs("4x ad_astra:calorite_engine", "2x ad_astra:calorite_tank", "4x gtceu:micro_processor_mainframe", "8x ad_astra:calorite_block", "ad_astra:rocket_nose_cone")
    .itemOutputs("ad_astra:tier_4_rocket")
    .inputFluids([Fluid.of('gtceu:titanium_silver', 1200 )])
    .EUt(8190)
    .duration(2500)

    e.recipes.gtceu.chemical_reactor("rocket_fuel_mk_1_recipe")
     .itemInputs("4x gtceu:aluminium_three_oxide_dust")
     .inputFluids([
        Fluid.of("createaddition:bioethanol", 1000),
        Fluid.of("gtceu:ammonia", 2000)
    ])
    .outputFluids([Fluid.of("gtceu:rocket_refined_fuel", 1000)])
    .duration(100).EUt(15)

    e.recipes.gtceu.assembler("rocket_pad_new")
     .itemOutputs("kubejs:reinforced_steel_beam")
     .itemInputs("4x immersiveengineering:concrete")
     .inputFluids([Fluid.of("gtceu:concrete", 500)])
     .duration(250).EUt(30)
})