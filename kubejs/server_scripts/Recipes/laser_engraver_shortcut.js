// Changes made here will effect the lenses that you will need for a item or recipe!
// Changes made by Vera_ix and Soeren9 - NickYoda1

ServerEvents.recipes(e => {
    e.recipes.gtceu.laser_engraver("kubejs:desh_lens_recipe")
     .itemInputs("ad_astra:desh_plate")
     .notConsumable("gtceu:glass_lens")
     .itemOutputs("kubejs:desh_lens")
     .duration(450).EUt(32)

     e.recipes.gtceu.laser_engraver("kubejs:desh_lens_to_emerald_recipe")
     .itemInputs("2x minecraft:emerald")
     .notConsumable("kubejs:desh_lens")
     .itemOutputs("gtceu:flawless_emerald_gem")
     .duration(650).EUt(120)

     e.recipes.gtceu.laser_engraver("kubejs:desh_lens_to_emerald_ex_recipe")
     .itemInputs("2x gtceu:flawless_emerald_gem")
     .notConsumable("kubejs:desh_lens")
     .itemOutputs("gtceu:exquisite_emerald_gem")
     .duration(650).EUt(120)

})