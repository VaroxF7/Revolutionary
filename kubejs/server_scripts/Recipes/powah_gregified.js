ServerEvents.recipes(e => {
    e.recipes.gtceu.assembler("capacior_recipe")
     .itemInputs("powah:steel_energized", "2x powah:dielectric_paste", "gtceu:aluminium_block")
     .itemOutputs("9x powah:capacitor_basic")
     .inputFluids([Fluid.of("gtceu:glue"), 144])
     .duration(80).EUt(15).circuit(2)

    e.recipes.gtceu.assembler("reactor_starter_recipe")
     .itemInputs("powah:dielectric_casing", "16x powah:capacitor_basic", "16x #gtceu:circuits/mv", "16x gtceu:capacitor", "32x gtceu:magnalium_plate", "gtceu:hv_super_tank")
     .itemOutputs("9x powah:reactor_starter")
     .inputFluids([Fluid.of("gtceu:silver"), 16000])
     .duration(512).EUt(512).circuit(8)

     e.recipes.gtceu.assembler("solar_starter")
     .itemInputs("powah:dielectric_casing", "4x powah:capacitor_basic_tiny", "8x #gtceu:circuits/mv", "16x gtceu:capacitor", "3x gtceu:solar_panel", "3x gtceu:silicone_rubber_plate")
     .itemOutputs("powah:solar_panel_starter")
     .inputFluids([Fluid.of("gtceu:silver"), 2000])
     .duration(1212).EUt(120).circuit(5)

     e.recipes.gtceu.autoclave("kubejs:paste_recipe_from_silicon")
     .itemInputs("2x fluxnetworks:flux_dust")
     .inputFluids([Fluid.of('gtceu:blaze', 245 )])
     .itemOutputs('8x powah:dielectric_paste')
     .duration(180)
     .EUt(17)

     e.recipes.gtceu.mixer("kubejs:paste_mixer_recipe")
     .itemInputs("4x gtceu:clay_dust")
     .inputFluids([Fluid.of('minecraft:lava', 450 )])
     .itemOutputs('4x powah:dielectric_paste')
     .duration(120)
     .EUt(18)

     e.recipes.gtceu.create_mixer("kubejs:create_paste_mixer_recipe")
     .itemInputs("4x gtceu:clay_dust")
     .inputFluids([Fluid.of('minecraft:lava', 1200 )])
     .itemOutputs('4x powah:dielectric_paste')
     .duration(90)
     .rpm(64)

     e.custom({ 
        "type": "powah:energizing",
          "ingredients": [
            {"item": "gtceu:silver_ingot"},
            {"item": "gtceu:rose_gold_ingot"}
          ],
          "energy": 300000,
          "result": {
            "count": 2,
            "item": "powah:steel_energized"
          }
    })
})
