// Basically, wafer recipes for more output and less resc used in which its more efficient....
// So Assline recipes for Components etc.

ServerEvents.recipes(e => {
    e.recipes.gtceu.assembly_line("logic_wafer_recipe_assline")
     .itemInputs([
        Item.of("9x ae2:printed_logic_processor"),
        Item.of("26x gtceu:red_alloy_foil"),
        Item.of("5x gtceu:micro_processor")
     ])
     .inputFluids([Fluid.of("gtceu:silicon", 6200)])
     .itemOutputs("kubejs:logic_processor_wafer")
     .duration(450).EUt(8191) 

     e.recipes.gtceu.assembly_line("engineering_wafer_recipe_assline")
     .itemInputs([
        Item.of("9x ae2:printed_engineering_processor"),
        Item.of("26x gtceu:red_alloy_foil"),
        Item.of("5x gtceu:micro_processor")
     ])
     .inputFluids([Fluid.of("gtceu:silicon", 6200)])
     .itemOutputs("kubejs:engineering_processor_wafer")
     .duration(450).EUt(8191) 

     e.recipes.gtceu.assembly_line("calculation_wafer_recipe_assline")
     .itemInputs([
        Item.of("9x ae2:printed_calculation_processor"),
        Item.of("26x gtceu:red_alloy_foil"),
        Item.of("5x gtceu:micro_processor")
     ])
     .inputFluids([Fluid.of("gtceu:silicon", 6200)])
     .itemOutputs("kubejs:calculation_processor_wafer")
     .duration(450).EUt(8191) 

     e.recipes.gtceu.assembly_line('kubejs:comp_1k_ae2')
     .itemInputs([
        Item.of('9x gtceu:good_integrated_circuit'),
        Item.of('12x ae2:charged_certus_quartz_crystal'),
        Item.of('9x ae2:logic_processor'),
        Item.of('16x gtceu:steel_foil'),
        Item.of('12x gtceu:silver_foil'),
        Item.of('16x gtceu:gold_foil'),
        Item.of('12x gtceu:ilc_chip'),
        Item.of('24x gtceu:smd_resistor')
     ])
        .itemOutputs('kubejs:1k_component_wafer')
        .inputFluids([
            Fluid.of('gtceu:red_alloy', 3500),
            Fluid.of('gtceu:refined_sky_stone', 1200),
            Fluid.of('gtceu:soldering_alloy', 3500),
            Fluid.of('gtceu:silver', 500)
        ])
        .duration(1290).EUt(2048)

    e.recipes.gtceu.assembly_line('kubejs:comp_4k_ae2')
     .itemInputs([
        Item.of('4x ae2:cell_component_1k'),
        Item.of('12x ae2:charged_certus_quartz_crystal'),
        Item.of('9x ae2:calculation_processor'),
        Item.of('16x gtceu:steel_foil'),
        Item.of('8x gtceu:silver_foil'),
        Item.of('16x gtceu:gold_foil'),
        Item.of('8x gtceu:smd_transistor'),
        Item.of('24x gtceu:smd_resistor')
     ])
        .itemOutputs('kubejs:4k_component_wafer')
        .inputFluids([
            Fluid.of('gtceu:red_alloy', 2500),
            Fluid.of('gtceu:refined_sky_stone', 1500),
            Fluid.of('gtceu:soldering_alloy', 2500),
            Fluid.of('gtceu:silver', 1500)
        ])
        .duration(1100).EUt(2048)

    e.recipes.gtceu.assembly_line('kubejs:comp_16k_ae2')
     .itemInputs([
        Item.of('4x ae2:cell_component_4k'),
        Item.of('12x ae2:charged_certus_quartz_crystal'),
        Item.of('15x ae2:calculation_processor'),
        Item.of('12x gtceu:lead_foil'),
        Item.of('16x gtceu:gold_foil'),
        Item.of('8x gtceu:smd_transistor'),
        Item.of('24x gtceu:smd_resistor')
     ])
        .itemOutputs('kubejs:16k_component_wafer')
        .inputFluids([
            Fluid.of('thermal:glowstone', 2500),
            Fluid.of('gtceu:electrum', 2500),
            Fluid.of('gtceu:refined_sky_stone', 1500),
            Fluid.of('gtceu:soldering_alloy', 2500)
        ])
        .duration(900).EUt(2048)

    e.recipes.gtceu.assembly_line('kubejs:comp_64k_ae2')
     .itemInputs([
        Item.of('4x ae2:cell_component_16k'),
        Item.of('12x ae2:charged_certus_quartz_crystal'),
        Item.of('16x ae2:calculation_processor'),
        Item.of('16x gtceu:gold_foil'),
        Item.of('12x gtceu:cobalt_foil'),
        Item.of('16x gtceu:smd_transistor'),
        Item.of('16x gtceu:smd_resistor'),
        Item.of('16x gtceu:smd_capacitor')
     ])
        .itemOutputs('kubejs:64k_component_wafer')
        .inputFluids([
            Fluid.of('thermal:glowstone', 2500),
            Fluid.of('gtceu:electrum', 3500),
            Fluid.of('gtceu:refined_sky_stone', 5500),
            Fluid.of('gtceu:soldering_alloy', 3500)
        ])
        .duration(800).EUt(2048)

//    e.recipes.gtceu.assembly_line('kubejs:comp_256k_ae2')
//     .itemInputs([
//        Item.of('4x ae2:cell_component_64k'),
//        Item.of('12x ae2:charged_certus_quartz_crystal'),
//        Item.of('12x ae2:calculation_processor'),
//        Item.of('64x gtceu:gold_foil'),
//        Item.of('32x gtceu:cobalt_foil'),
//        Item.of('32x gtceu:silver_foil'),
//        Item.of('32x gtceu:smd_transistor'),
//        Item.of('18x gtceu:smd_resistor'),
//        Item.of('20x gtceu:smd_capacitor')
//     ])
//        .itemOutputs('kubejs:256k_component_wafer')
//        .inputFluids([
//            Fluid.of('thermal:glowstone', 2500),
//            Fluid.of('gtceu:refined_sky_stone', 19000),
//            Fluid.of('gtceu:soldering_alloy', 3500),
//            Fluid.of('gtceu:bismuth_bronze', 2500)
//        ])
//        .duration(2000).EUt(2048)

e.recipes.gtceu.assembler("dissasamble_engi")
.itemInputs([
   Item.of("1x kubejs:engineering_processor_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:engineering_processor")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_logic")
.itemInputs([
   Item.of("1x kubejs:logic_processor_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:logic_processor")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_calc")
.itemInputs([
   Item.of("1x kubejs:calculation_processor_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:calculation_processor")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_1k")
.itemInputs([
   Item.of("1x kubejs:1k_component_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:cell_component_1k")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_4k")
.itemInputs([
   Item.of("1x kubejs:4k_component_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:cell_component_4k")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_16k")
.itemInputs([
   Item.of("1x kubejs:16k_component_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:cell_component_16k")
.duration(450).EUt(1024) 

e.recipes.gtceu.assembler("dissasamble_64k")
.itemInputs([
   Item.of("1x kubejs:64k_component_wafer")
])
.inputFluids([Fluid.of("gtceu:lubricant", 288)])
.itemOutputs("9x ae2:cell_component_64k")
.duration(450).EUt(1024) 
})