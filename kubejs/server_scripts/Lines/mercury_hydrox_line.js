////////////////////
//  Hydrox Fuel I //
////////////////////


ServerEvents.recipes(e => {
/*
    e.recipes.gtceu.gas_collector("kubejs:mercury_air")
    .outputFluids([Fluid.of('gtceu:mercury_air', 5000)])
    .EUt(512)
    .duration(2000)
    .circuit(4) 
    .dimension("ad_astra:mercury")
    .biome("ad_astra:mercury_deltas")

    e.recipes.gtceu.gas_collector("kubejs:venus_air")
    .outputFluids([Fluid.of('gtceu:venus_air', 5000)])
    .EUt(512)
    .duration(2000)
    .circuit(4) 
    .dimension("ad_astra:venus")
    .biome("ad_astra:venus_wastelands")
*/
    e.recipes.gtceu.distillation_tower("kubejs:hydrox_1_mercury_recipe_distill")
    .inputFluids([Fluid.of('gtceu:mercury_air', 2000 )]) // 333 : 6
    .outputFluids([Fluid.of('gtceu:lithium', 333 )])
    .outputFluids([Fluid.of('gtceu:cobalt', 500 )])
    .outputFluids([Fluid.of('gtceu:mercury_sulfate', 500 )])
    .chancedOutput("gtceu:neutronium_dust", 500, 100)
    .duration(221) 
    .EUt(512)

    e.recipes.gtceu.large_chemical_reactor('kubejs:hydrox_2_recipe')
    .inputFluids([Fluid.of('gtceu:rhodium_sulfate', 1000 )])
    .inputFluids([Fluid.of('gtceu:mercury_sulfate', 500 )])
    .itemOutputs("4x gtceu:carbon_dust")
    .outputFluids([Fluid.of('gtceu:mercury_sulfate_solution', 1250)])
    .duration(2400) 
    .circuit(9)
    .EUt(524280)

    e.recipes.gtceu.large_chemical_reactor('kubejs:hydrox_3_recipe')
    .inputFluids([Fluid.of('gtceu:mercury_sulfate_solution', 10000 )])
    .inputFluids([Fluid.of('gtceu:nitrobenzene', 8500 )])
    .inputFluids([Fluid.of('kubejs:high_octane_diesel_boosted_biofuel_gasoline', 6500 )])
    .outputFluids([Fluid.of('gtceu:hydrox_fuel_1', 1250)])
    .duration(4500) 
    .circuit(15)
    .EUt(524280)

})