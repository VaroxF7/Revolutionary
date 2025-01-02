ServerEvents.recipes(e => {
    e.recipes.gtceu.chemical_bath("lens_1")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:orange_dye", 144)])
     .itemOutputs("gtceu:orange_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_2")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:magenta_dye", 144)])
     .itemOutputs("gtceu:magenta_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_3")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:light_blue_dye", 144)])
     .itemOutputs("gtceu:light_blue_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_4")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:yellow_dye", 144)])
     .itemOutputs("gtceu:yellow_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_5")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:lime_dye", 144)])
     .itemOutputs("gtceu:lime_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_6")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:pink_dye", 144)])
     .itemOutputs("gtceu:pink_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_7")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:gray_dye", 144)])
     .itemOutputs("gtceu:gray_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_8")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:light_gray_dye", 144)])
     .itemOutputs("gtceu:light_gray_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_9")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:cyan_dye", 144)])
     .itemOutputs("gtceu:cyan_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_10")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:purple_dye", 144)])
     .itemOutputs("gtceu:purple_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_11")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:blue_dye", 144)])
     .itemOutputs("gtceu:blue_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_12")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:brown_dye", 144)])
     .itemOutputs("gtceu:brown_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_13")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:green_dye", 144)])
     .itemOutputs("gtceu:green_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_14")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:red_dye", 144)])
     .itemOutputs("gtceu:red_glass_lens")
     .duration(200).EUt(128)

     e.recipes.gtceu.chemical_bath("lens_15")
     .itemInputs("gtceu:glass_lens")
     .inputFluids([Fluid.of("gtceu:black_dye", 144)])
     .itemOutputs("gtceu:black_glass_lens")
     .duration(200).EUt(128)

    const toRemoveId = [
        'gtceu:chemical_bath/cyan_lens','gtceu:chemical_bath/black_lens',
        'gtceu:chemical_bath/red_lens','gtceu:chemical_bath/green_lens',
        'gtceu:chemical_bath/brown_lens','gtceu:chemical_bath/blue_lens',
        'gtceu:chemical_bath/purple_lens','gtceu:chemical_bath/cyan_lens',
        'gtceu:chemical_bath/light_gray_lens','gtceu:chemical_bath/pink_lens',
        'gtceu:chemical_bath/lime_lens','gtceu:chemical_bath/yellow_lens',
        'gtceu:chemical_bath/light_blue_lens','gtceu:chemical_bath/magenta_lens',
        'gtceu:chemical_bath/orange_lens','gtceu:chemical_bath/colorless_lens',
        'gtceu:chemical_bath/gray_lens'
    ];
    toRemoveId.forEach(element => {
    e.remove({ id: element});
  })
})
