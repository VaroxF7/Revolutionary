ServerEvents.recipes(e => {
    e.recipes.gtceu.distillery("dirty_crude_to_cleared")
     .inputFluids([Fluid.of("gtceu:dirty_crude",50)])
     .outputFluids([Fluid.of("gtceu:puri_crude",25)])
     .itemOutputs("gtceu:lead_dust",1)
     .duration(240).EUt(125)

    e.recipes.gtceu.centrifuge("puri_to_normal")
     .inputFluids([Fluid.of("gtceu:puri_crude",75)])
     .outputFluids([Fluid.of("gtceu:oil",25)])
     .itemOutputs("gtceu:neodymium_dust",1)
     .duration(200).EUt(125)
})