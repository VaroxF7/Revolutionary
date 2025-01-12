ServerEvents.recipes(e => {
    // Silicon Growth
   e.recipes.gtceu.extractor("silicon_ae2_to_liquid")
   .itemInputs("ae2:silicon")
   .outputFluids([Fluid.of("gtceu:silicon", 144)])
   .duration(50).EUt(8)

   e.recipes.gtceu.electric_blast_furnace("silicon_boule_new")
   .itemInputs("32x gtceu:silicon_dust", "gtceu:tiny_gallium_arsenide_dust")
   .itemOutputs("gtceu:silicon_boule")
   .inputFluids([Fluid.of("gtceu:nitrogen", 250)])
   .outputFluids([Fluid.of("gtceu:nitrogen_dioxide", 125)])
   .duration(9000).EUt(125).circuit(2).blastFurnaceTemp(1800)

   e.recipes.gtceu.electric_blast_furnace("fluix_to_silicon_recipe")
   .itemInputs("2x ae2:fluix_dust")
   .inputFluids([Fluid.of('gtceu:distilled_water', 450 )])
   .itemOutputs('1x ae2:silicon')
   .duration(350)
   .EUt(124)
   .circuit(13)
   .blastFurnaceTemp(1300)

   e.recipes.gtceu.electrolyzer("certus_bulk_to_silicon")
   .itemInputs("8x gtceu:certus_quartz_dust")
   .itemOutputs("4x gtceu:silicon_dioxide_dust")
   .duration(182).EUt(32)

   // Cutter Recipes
   e.recipes.gtceu.cutter("new_boule_to_wafer")
    .itemInputs("gtceu:silicon_boule")
    .inputFluids([Fluid.of("gtceu:lubricant", 288)])
    .itemOutputs("8x gtceu:silicon_wafer")
    .duration(125).EUt(125)

   e.custom({
    "type": "powah:energizing",
      "ingredients": [
        {"item": "gtceu:silicon_ingot"}
      ],
      "energy": 250000,
      "result": {
        "item": "ae2:printed_silicon"
      }
  })
})

// ID 
ServerEvents.recipes(e => {
    const toRemoveId = [
      "gtceu:electric_blast_furnace/silicon_boule","gtceu:cutter/cut_silicon_boule","gtceu:cutter/cut_silicon_boule_water",
      "gtceu:cutter/cut_silicon_boule_distilled_water","",""
    ];
    toRemoveId.forEach(element => {
    e.remove({ id: element});
  })
})

// Might remove or improve later, not sure yet.
// If you hold the Wafer in your Hands it will get Dirty and need to be Cleaned in return, caution is advised.
PlayerEvents.tick(event => {
    let player = event.player;
    let mainHandItem = player.mainHandItem;
    let offHandItem = player.offHandItem;

    if (mainHandItem && !mainHandItem.isEmpty()) {
        let itemCount = mainHandItem.count; 

        if (mainHandItem.id === 'gtceu:silicon_wafer') {
            player.setHeldItem('MAIN_HAND', Item.of('kubejs:dirty_silicon_wafer', itemCount));
        }
        if (mainHandItem.id === 'gtceu:phosphorus_wafer') {
            player.setHeldItem('MAIN_HAND', Item.of('kubejs:dirty_phosphorus_wafer', itemCount));
        }
        if (mainHandItem.id === 'gtceu:naquadah_wafer') {
            player.setHeldItem('MAIN_HAND', Item.of('kubejs:dirty_naquadah_wafer', itemCount));
        }
        if (mainHandItem.id === 'gtceu:neutronium_wafer') {
            player.setHeldItem('MAIN_HAND', Item.of('kubejs:dirty_neutronium_wafer', itemCount));
        }
    }
    if (offHandItem && !offHandItem.isEmpty()) {
        let itemCount = offHandItem.count; 

        if (offHandItem.id === 'gtceu:silicon_wafer') {
            player.setHeldItem('OFF_HAND', Item.of('kubejs:dirty_silicon_wafer', itemCount));
        }
        if (offHandItem.id === 'gtceu:phosphorus_wafer') {
            player.setHeldItem('OFF_HAND', Item.of('kubejs:dirty_phosphorus_wafer', itemCount));
        }
        if (offHandItem.id === 'gtceu:naquadah_wafer') {
            player.setHeldItem('OFF_HAND', Item.of('kubejs:dirty_naquadah_wafer', itemCount));
        }
        if (offHandItem.id === 'gtceu:neutronium_wafer') {
            player.setHeldItem('OFF_HAND', Item.of('kubejs:dirty_neutronium_wafer', itemCount));
        }
    }
});


