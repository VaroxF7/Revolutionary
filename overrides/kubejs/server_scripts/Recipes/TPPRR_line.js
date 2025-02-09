// Platinum, Palladium, Ruth., Ru., Line Recipes all belong here. All Removal Recipes may be grouped in the fuction below.

ServerEvents.recipes(e => {
    // Titanium - Line
    e.recipes.gtceu.vacuum_freezer("better_titan")
     .itemInputs("gtceu:hot_titanium_ingot")
     .inputFluids([Fluid.of("gtceu:cryotheum",288)])
     .itemOutputs("gtceu:titanium_ingot")
     .EUt(512).duration(50)

    e.recipes.gtceu.extractor("cryotheum_extract")
     .itemInputs("thermal:blizz_powder")
     .outputFluids([Fluid.of("gtceu:cryotheum",144)])
     .EUt(125).duration(120)

    // Platinum - Line
    e.recipes.gtceu.fluid_solidifier("soli_liquid_plat_to_ingot")
     .inputFluids([Fluid.of("gtceu:platinum",144)])
     .itemOutputs("gtceu:platinum_ingot")
     .notConsumable("gtceu:ingot_casting_mold")
     .duration(50).EUt(32)

    e.recipes.gtceu.electric_blast_furnace("ebf_platinum_clump_ingot")
     .itemInputs("4x kubejs:platinum_clump")
     .itemOutputs("gtceu:platinum_ingot")
     .inputFluids([Fluid.of("gtceu:helium",288)])
     .duration(450).EUt(125).blastFurnaceTemp(2000).circuit(2)

// Replace Platinum Ore & Smeltables with Clump so it can be re-done with a lot less headache
e.replaceOutput(
  {output: "gtceu:platinum_ingot"},
  "gtceu:platinum_ingot",
  "kubejs:platinum_clump")
})

// Removals
ServerEvents.recipes(e => {
  e.remove({ id: "tconstruct:tools/materials/melting/platinum"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/platinum/rod"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/tungsten/ore_dense"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/tungsten/ore_singular"})

  e.remove({ id: "tconstruct:smeltery/melting/metal/tungsten/ore_sparse"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/tungsten/raw"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/tungsten/raw_block"})

  e.remove({ id: "tconstruct:smeltery/melting/metal/nickel/ore_dense"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/nickel/ore_singular"})
  e.remove({ id: "tconstruct:smeltery/melting/metal/nickel/ore_sparse"})

  e.remove({ id: "gtceu:fluid_solidifier/solidify_platinum_to_ingot"})
  e.remove({ id: "gtceu:vacuum_freezer/cool_hot_titanium_ingot"})

})
