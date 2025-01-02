ServerEvents.recipes(e => {
    e.recipes.gtceu.electric_blast_furnace("mana_boule_recipe")
     .itemInputs("16x gtceu:silicon_dust", "8x botania:manasteel_ingot", "32x gtceu:polyvinyl_chloride_dust")
     .itemOutputs("kubejs:mana_boule")
     .duration(1250).EUt(512).blastFurnaceTemp(2700)

     e.recipes.gtceu.electric_blast_furnace("mana_boule_recipe_heavy")
     .itemInputs("4x gtceu:silicon_dust", "2x botania:manasteel_ingot", "2x gtceu:polyvinyl_chloride_dust")
     .itemOutputs("4x kubejs:mana_boule")
     .duration(750).EUt(2048).blastFurnaceTemp(4500)

    e.recipes.gtceu.cutter("mana_boule_to_wafer")
     .itemInputs("kubejs:mana_boule")
     .itemOutputs("16x kubejs:mana_wafer")
     .inputFluids([Fluid.of("gtceu:lubricant", 40)])
     .duration(582).EUt(120)

    e.recipes.gtceu.assembler("mana_solar_recipe")
     .itemInputs("2x kubejs:mana_wafer", "gtceu:carbon_fiber_plate", "#gtceu:circuits/lv", "minecraft:glass_pane")
     .itemOutputs("gtceu:solar_panel")
     .duration(340).EUt(510)

     e.recipes.gtceu.assembler("normal_solar_recipe")
     .itemInputs("2x gtceu:silicon_wafer", "gtceu:carbon_fiber_plate", "#gtceu:circuits/lv", "minecraft:glass_pane")
     .itemOutputs("gtceu:solar_panel")
     .duration(240).EUt(120)

    e.recipes.gtceu.assembler("mana_diode")
     .itemInputs("kubejs:mana_wafer", "2x gtceu:fine_tin_wire")
     .inputFluids([Fluid.of("gtceu:polyethylene", 144)])
     .itemOutputs("8x kubejs:mana_diode")
     .duration(240).EUt(32)

     // Clean to Wafer Printed //
    e.recipes.gtceu.laser_engraver("mana_cpu_recipe")
     .itemInputs("kubejs:mana_wafer")
     .notConsumable("gtceu:diamond_lens")
     .itemOutputs("16x kubejs:mana_cpu_wafer")
     .duration(220).EUt(120).cleanroom(CleanroomType.CLEANROOM)

    e.recipes.gtceu.laser_engraver("mana_ram_recipe")
     .itemInputs("kubejs:mana_wafer")
     .notConsumable("gtceu:emerald_lens")
     .itemOutputs("16x kubejs:mana_ram_wafer")
     .duration(220).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     e.recipes.gtceu.laser_engraver("mana_soc_recipe")
     .itemInputs("kubejs:mana_wafer")
     .notConsumable("gtceu:cyan_glass_lens")
     .itemOutputs("16x kubejs:mana_soc_wafer")
     .duration(220).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     e.recipes.gtceu.laser_engraver("mana_ilc_recipe")
     .itemInputs("kubejs:mana_wafer")
     .notConsumable("gtceu:ruby_lens")
     .itemOutputs("16x kubejs:mana_ilc_wafer")
     .duration(220).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     // WAFER TO CHIP //

     e.recipes.gtceu.cutter("mana_cpu_chip")
     .itemInputs("kubejs:mana_cpu_wafer")
     .inputFluids([Fluid.of("gtceu:lubricant", 230)])
     .itemOutputs("16x kubejs:mana_cpu_chip")
     .duration(420).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     e.recipes.gtceu.cutter("mana_ram_chip")
     .itemInputs("kubejs:mana_ram_wafer")
     .inputFluids([Fluid.of("gtceu:lubricant", 230)])
     .itemOutputs("16x kubejs:mana_ram_chip")
     .duration(420).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     e.recipes.gtceu.cutter("mana_ilc_chip")
     .itemInputs("kubejs:mana_ilc_wafer")
     .inputFluids([Fluid.of("gtceu:lubricant", 230)])
     .itemOutputs("16x kubejs:mana_ilc_chip")
     .duration(420).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     e.recipes.gtceu.cutter("mana_soc_chip")
     .itemInputs("kubejs:mana_soc_wafer")
     .inputFluids([Fluid.of("gtceu:lubricant", 230)])
     .itemOutputs("16x kubejs:mana_soc_chip")
     .duration(420).EUt(120).cleanroom(CleanroomType.CLEANROOM)

     // CIRCUIT ADDITIONS //

     e.recipes.gtceu.circuit_assembler("hv_low_recipe")
      .itemInputs("1x #gtceu:circuits/mv", "2x kubejs:mana_ilc_chip", "2x kubejs:mana_ram_chip", "#gtceu:transistors", "4x gtceu:fine_tin_wire", "8x gtceu:aluminium_bolt")
      .itemOutputs("gtceu:advanced_integrated_circuit")
      .inputFluids([Fluid.of("gtceu:polyvinyl_chloride", 288)])
      .duration(550).EUt(124)

    e.recipes.gtceu.circuit_assembler("micro_processor_assembly_recipe")
     .itemInputs([
        Item.of("gtceu:plastic_printed_circuit_board"),
        Item.of("2x gtceu:micro_processor"),
        Item.of("2x #gtceu:inductors"),
        Item.of("4x #gtceu:capacitors"),
        Item.of("2x kubejs:mana_ram_chip"),
        Item.of("16x gtceu:fine_annealed_copper_wire")
     ])
     .itemOutputs("2x gtceu:micro_processor_assembly")
     .inputFluids([Fluid.of("gtceu:soldering_alloy", 288)])
     .duration(560).EUt(120)

     e.recipes.gtceu.circuit_assembler("micro_processor_assembly_recipe_electrum")
     .itemInputs([
        Item.of("gtceu:plastic_printed_circuit_board"),
        Item.of("3x gtceu:micro_processor"),
        Item.of("4x #gtceu:capacitors"),
        Item.of("2x kubejs:mana_ram_chip"),
     ])
     .itemOutputs("2x gtceu:micro_processor_assembly")
     .inputFluids([Fluid.of("gtceu:electrum", 480)])
     .duration(460).EUt(120)
    
})

