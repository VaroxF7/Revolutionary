const $RecipeIO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');
const $ItemStackHashStrategy = Java.loadClass('com.gregtechceu.gtceu.utils.ItemStackHashStrategy');
const $ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability');
const $GTHashMaps = Java.loadClass('com.gregtechceu.gtceu.utils.GTHashMaps');

const $Collections = Java.loadClass('java.util.Collections');
const $Object2IntOpenCustomHashMap = Java.loadClass('it.unimi.dsi.fastutil.objects.Object2IntOpenCustomHashMap');
const $Objects = Java.loadClass('java.util.Objects');


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('litho_machine')
           .category('litho_machine')
           .setEUIO('in')
           .setMaxIOSize(4, 4, 4, 4) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
           .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
           .setSound(GTSoundEntries.REPLICATOR)
           .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('litho_machine_mk2')
           .category('litho_machine_mk2')
           .setEUIO('in')
           .setMaxIOSize(4, 4, 4, 4) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
           .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
           .setSound(GTSoundEntries.REPLICATOR)
           .setMaxTooltips(4);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('litho_machine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('litho_machine')
        .appearanceBlock(() => Block.getBlock('kubejs:casing_litho'))
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('CCCCCC', 'CCDDDC', 'CCCCCC')
        .aisle('CCCCCC', 'BA  AB', 'CBBBBC')
        .aisle('CCCCCC', 'CKDDDC', 'CCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get()))) 
            .where('C', Predicates.blocks('kubejs:casing_litho')
               .or(Predicates.autoAbilities(definition.getRecipeTypes()))
               .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('A', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('B', Predicates.blocks('gtceu:filter_casing'))
            .where(' ', Predicates.any())
            .build())
       .workableCasingRenderer("kubejs:block/casings/casing_litho", 
          "gtceu:block/multiblock/fusion_reactor", false);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('litho_machine_mk2', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('litho_machine_mk2')
        .appearanceBlock(() => Block.getBlock('kubejs:casing_advanced_litho'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('CCCCCCCCC', 'CCCAAAAAC', 'CCCCCCCCC')
        .aisle('CCCCCCCCC', 'BD    HDB', 'CBBBBBBBC')
        .aisle('CCCCCCCCC', 'CKCAAAAAC', 'CCCCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get()))) 
            .where('C', Predicates.blocks('kubejs:casing_advanced_litho')
               .or(Predicates.autoAbilities(definition.getRecipeTypes()))
               .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
               .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('A', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('D', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('B', Predicates.blocks('gtceu:filter_casing'))
            .where('H', Predicates.blocks('ae2:not_so_mysterious_cube'))
            .where(' ', Predicates.any())
            .build())
       .workableCasingRenderer("kubejs:block/casings/casing_advanced_litho", 
          "gtceu:block/multiblock/fusion_reactor", false);
});
