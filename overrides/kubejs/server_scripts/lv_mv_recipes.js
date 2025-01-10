ServerEvents.recipes(e => {
    e.recipes.gtceu.assembler("ice_box_recipe_mv")
    .itemInputs("3x gtceu:mv_electric_pump","6x #gtceu:circuits/mv","gtceu:frostproof_machine_casing","6x gtceu:gold_single_cable")
    .itemOutputs("gtceu:vacuum_freezer")
    .EUt(120).duration(100)
})