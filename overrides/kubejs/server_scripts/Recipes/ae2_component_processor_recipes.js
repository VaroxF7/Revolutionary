ServerEvents.recipes(e => {
e.recipes.gtceu.circuit_assembler('comp_1k_ae2_assembler')
.itemInputs('8x #gtceu:circuits/mv', "2x ae2:logic_processor", '4x gtceu:certus_quartz_plate','2x gtceu:tin_alloy_dust' )
.itemOutputs('ae2:cell_component_1k')
.inputFluids([Fluid.of('gtceu:silver', 1000)])
.duration(1200).EUt(128)

e.recipes.gtceu.circuit_assembler('comp_1k_ae2_assembler_soc_better_recipe')
.itemInputs('4x #gtceu:circuits/mv', "gtceu:ilc_chip", '4x gtceu:certus_quartz_plate')
.itemOutputs('ae2:cell_component_1k')
.inputFluids([Fluid.of('gtceu:silver', 500)])
.duration(800).EUt(128)

e.recipes.gtceu.circuit_assembler('comp_1k_ae2_assembler_phosporus_soc_better_recipe')
.itemInputs('2x #gtceu:circuits/hv', "1x gtceu:soc", '2x gtceu:certus_quartz_plate', '2x gtceu:smd_inductor')
.itemOutputs('ae2:cell_component_1k')
.inputFluids([Fluid.of('gtceu:silver', 288)])
.duration(600).EUt(512).cleanroom(CleanroomType.CLEANROOM)

e.recipes.gtceu.circuit_assembler('comp_4k_ae2_assembler')
.itemInputs('3x ae2:cell_component_1k', "ae2:calculation_processor", '4x ae2:charged_certus_quartz_crystal', "4x gtceu:silver_foil")
.itemOutputs('ae2:cell_component_4k')
.inputFluids([Fluid.of('gtceu:invar', 2000)])
.duration(600)
.EUt(128)

e.recipes.gtceu.circuit_assembler('kubejs:comp_16k_ae2_assembler')
.itemInputs('3x ae2:cell_component_4k', "2x ae2:calculation_processor", '8x ae2:charged_certus_quartz_crystal', "8x gtceu:silver_foil", "4x gtceu:smd_transistor" )
.itemOutputs('ae2:cell_component_16k')
.inputFluids([Fluid.of('gtceu:invar', 3000)])
.duration(600)
.EUt(128)

e.recipes.gtceu.circuit_assembler('kubejs:comp_64k_ae2_assembler')
.itemInputs('3x ae2:cell_component_16k', "4x ae2:calculation_processor", '8x ae2:charged_certus_quartz_crystal', "8x gtceu:cobalt_foil", "4x gtceu:smd_capacitor" )
.itemOutputs('ae2:cell_component_64k')
.inputFluids([Fluid.of('gtceu:distilled_sky_solution', 6000)])
.duration(600)
.EUt(512)
.cleanroom(CleanroomType.CLEANROOM)

e.recipes.gtceu.circuit_assembler('kubejs:comp_256k_ae2_assembler')
.itemInputs('3x ae2:cell_component_64k', "8x ae2:engineering_processor", '12x ae2:charged_certus_quartz_crystal', "8x gtceu:cobalt_foil", "4x gtceu:smd_capacitor" )
.itemOutputs('ae2:cell_component_256k')
.inputFluids([Fluid.of('gtceu:distilled_sky_solution', 7000)])
.duration(600)
.EUt(512)
.cleanroom(CleanroomType.CLEANROOM)

// - AE2 Processor Recipes - //

e.recipes.gtceu.circuit_assembler('ae2_logic_processor')
.itemInputs('#gtceu:circuits/mv', 'ae2:printed_silicon', 'ae2:printed_logic_processor', "4x gtceu:red_alloy_foil" )
.itemOutputs('ae2:logic_processor')
.inputFluids([Fluid.of('gtceu:soldering_alloy', 1200)])
.duration(250).EUt(128)

e.recipes.gtceu.circuit_assembler('ae2_calc_processor')
.itemInputs('#gtceu:circuits/mv', 'ae2:printed_silicon', 'ae2:printed_calculation_processor', "4x gtceu:red_alloy_foil" )
.itemOutputs('ae2:calculation_processor')
.inputFluids([Fluid.of('gtceu:soldering_alloy', 1200)])
.duration(250).EUt(128)

e.recipes.gtceu.circuit_assembler('ae2_engi_processor')
.itemInputs('#gtceu:circuits/mv', 'ae2:printed_silicon', 'ae2:printed_engineering_processor', "4x gtceu:red_alloy_foil" )
.itemOutputs('ae2:engineering_processor')
.inputFluids([Fluid.of('gtceu:soldering_alloy', 1200)])
.duration(250).EUt(128)

e.recipes.gtceu.circuit_assembler('mega_sky_processor')
.itemInputs('#gtceu:circuits/hv', 'ae2:printed_silicon', 'megacells:printed_accumulation_processor', "4x gtceu:osmium_foil" )
.itemOutputs('megacells:accumulation_processor')
.inputFluids([Fluid.of('gtceu:soldering_alloy', 2500)])
.duration(290).EUt(512).cleanroom(CleanroomType.CLEANROOM)

// - Printed Recipes - //
    e.recipes.gtceu.assembler("silicon_recipe_printed_assembler_wafer")
    .notConsumable("ae2:silicon_press")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("4x ae2:printed_silicon")
    .duration(650).EUt(124)

    e.recipes.gtceu.assembler("doped_1_recipe_printed_assembler_wafer")
    .notConsumable("ae2:silicon_press")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("8x ae2:printed_silicon")
    .duration(450).EUt(512).cleanroom(CleanroomType.CLEANROOM)

    e.recipes.gtceu.assembler("doped_2_recipe_printed_assembler_wafer")
    .notConsumable("ae2:silicon_press")
    .itemInputs("gtceu:naquadah_wafer")
    .itemOutputs("16x ae2:printed_silicon")
    .duration(350).EUt(1920).cleanroom(CleanroomType.CLEANROOM)

// - Silicon Above - //

    e.recipes.gtceu.assembler("calculation_recipe_printed_assembler")
    .notConsumable("ae2:calculation_processor_press")
    .itemInputs("gtceu:silver_plate")
    .itemOutputs("ae2:printed_calculation_processor")
    .duration(180).EUt(32)
    
    e.recipes.gtceu.assembler("logic_recipe_printed_assembler")
    .notConsumable("ae2:logic_processor_press")
    .itemInputs("gtceu:electrum_plate")
    .itemOutputs("ae2:printed_logic_processor")
    .duration(180).EUt(120)

    e.recipes.gtceu.assembler("engineering_recipe_printed_assembler")
    .notConsumable("ae2:engineering_processor_press")
    .itemInputs("gtceu:certus_quartz_plate")
    .itemOutputs("ae2:printed_engineering_processor")
    .duration(180).EUt(32)

    e.recipes.gtceu.assembler("accumulation_recipe_printed_assembler")
    .notConsumable("megacells:accumulation_processor_press")
    .itemInputs("megacells:sky_steel_ingot")
    .itemOutputs("megacells:printed_accumulation_processor")
    .duration(280).EUt(128)

    // - Red Alloy - //

    //e.recipes.gtceu.bender("red_alloy_renew")
    // .itemInputs("enderio:redstone_alloy_ingot")
    // .itemOutputs("4x gtceu:red_alloy_foil")
    // .duration(50).EUt(14)

    e.replaceInput(
        { input: "gtceu:red_alloy_ingot" },
        "gtceu:red_alloy_ingot",
        "enderio:redstone_alloy_ingot")

    e.recipes.gtceu.alloy_smelter("red_alloy_new_smelter")
     .itemInputs("#forge:silicon", "2x minecraft:redstone")
     .itemOutputs("enderio:redstone_alloy_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("copper_alloy_new_smelter")
     .itemInputs("#forge:silicon", "2x minecraft:copper_ingot")
     .itemOutputs("enderio:copper_alloy_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("energtic_alloy_new_smelter")
     .itemInputs("minecraft:redstone", "2x minecraft:gold_ingot")
     .itemOutputs("enderio:energetic_alloy_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("vibrant_alloy_new_smelter")
     .itemInputs("enderio:energetic_alloy_ingot", "minecraft:ender_pearl")
     .itemOutputs("enderio:vibrant_alloy_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("conductiv_alloy_new_smelter")
     .itemInputs("minecraft:iron_ingot", "minecraft:ender_pearl")
     .itemOutputs("enderio:conductive_alloy_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("dark_steel_new_smelter")
     .itemInputs("minecraft:obsidian", "#forge:ingots/steel")
     .itemOutputs("enderio:dark_steel_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("soularium_steel_new_smelter")
     .itemInputs("minecraft:soul_sand","minecraft:gold_ingot")
     .itemOutputs("enderio:soularium_ingot")
     .duration(50).EUt(15)

     e.recipes.gtceu.alloy_smelter("end_steel_ingot_new")
     .itemInputs("minecraft:end_stone","enderio:dark_steel_ingot")
     .itemOutputs("enderio:end_steel_ingot")
     .duration(50).EUt(15)
})

// LUV Circuit Reworks
ServerEvents.recipes(e => {
    e.recipes.gtceu.assembly_line("luv_tier_1_assembly_version")
     .itemInputs("32x gtceu:nano_cpu_chip","8x gtceu:engraved_lapotron_crystal_chip","4x gtceu:nano_processor_computer","42x kubejs:mana_ram_chip")
     .itemOutputs("gtceu:nano_processor_mainframe")
     .inputFluids([Fluid.of("gtceu:tungsten_steel", 2000), Fluid.of("gtceu:redstone", 1200)])
     .duration(450).EUt(24000)

     e.recipes.gtceu.assembly_line("luv_tier_2_assembly_version")
     .itemInputs("gtceu:fiber_reinforced_printed_circuit_board","2x gtceu:quantum_processor_assembly","16x #gtceu:diodes","16x gtceu:nor_memory_chip","32x gtceu:ram_chip","16x gtceu:fine_platinum_wire")
     .itemOutputs("gtceu:quantum_processor_computer")
     .inputFluids([Fluid.of("gtceu:soldering_alloy", 560), Fluid.of("gtceu:redstone", 1200)])
     .duration(450).EUt(24000)

     e.recipes.gtceu.assembly_line("luv_tier_3_assembly_version")
     .itemInputs("gtceu:multilayer_fiber_reinforced_printed_circuit_board","2x gtceu:crystal_processor","16x gtceu:advanced_smd_inductor","16x gtceu:advanced_smd_capacitor","16x gtceu:nor_memory_chip","8x gtceu:mpic_chip","32x gtceu:fine_niobium_titanium_wire")
     .itemOutputs("gtceu:crystal_processor_assembly")
     .inputFluids([Fluid.of("gtceu:tungsten_steel", 560), Fluid.of("gtceu:redstone", 1200)])
     .duration(450).EUt(24000)

     e.recipes.gtceu.assembly_line("luv_tier_4_assembly_version")
     .itemInputs("gtceu:neuro_processing_unit","2x gtceu:crystal_cpu","4x gtceu:nano_cpu_chip","16x gtceu:advanced_smd_capacitor","16x gtceu:advanced_smd_transistor","8x gtceu:fine_yttrium_barium_cuprate_wire")
     .itemOutputs("2x gtceu:wetware_processor")
     .inputFluids([Fluid.of("gtceu:tungsten_steel", 560), Fluid.of("gtceu:redstone", 1200)])
     .duration(450).EUt(24000)

     e.recipes.gtceu.assembly_line("luv_tier_5_assembly_version")
     .itemInputs("gtceu:neuro_processing_unit","gtceu:highly_advanced_soc","16x gtceu:fine_yttrium_barium_cuprate_wire","16x gtceu:naquadah_bolt")
     .itemOutputs("4x gtceu:wetware_processor")
     .inputFluids([Fluid.of("gtceu:tungsten_steel", 560), Fluid.of("gtceu:redstone", 1200)])
     .duration(450).EUt(24000)

     e.remove({ output: "gtceu:nano_processor_mainframe"})
     e.remove({ output: "gtceu:quantum_processor_computer"})
     e.remove({ output: "gtceu:crystal_processor_assembly"})
     e.remove({ output: "gtceu:wetware_processor"})
})


