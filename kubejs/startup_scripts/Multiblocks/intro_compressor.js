GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('intro_compressor')
         .category('intro_compressor')
         .setEUIO('in')
         .setMaxIOSize(1, 0, 4, 4) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.CHEMICAL)
         .setMaxTooltips(3)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('intro_compressor', 'multiblock')
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType('intro_compressor')
      .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
      .pattern(definition => FactoryBlockPattern.start()
          .aisle('FFFFF', 'T   T', 'T   T', 'T   T', 'T   T', 'T   T', 'FFFFF')
          .aisle('FKKKF', ' KKK ', '  K  ', '     ', '  K  ', ' KKK ', 'FEEEF')
          .aisle('FKKKF', ' K K ', ' K K ', ' KPK ', ' K K ', ' K K ', 'FEEEF')
          .aisle('FKKKF', ' KCK ', '  K  ', '     ', '  K  ', ' KKK ', 'FEEEF')
          .aisle('FFFFF', 'T   T', 'T   T', 'T   T', 'T   T', 'T   T', 'FFFFF')
          .where('C', Predicates.controller(Predicates.blocks(definition.get())))
          .where('K', Predicates.blocks('gtceu:inert_machine_casing')
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
              .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
              .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
          .where('E', Predicates.blocks(GTBlocks.CASING_STAINLESS_STEEL_GEARBOX.get()))
          .where('F', Predicates.blocks(GTBlocks.FIREBOX_TITANIUM.get()))   
          .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))     
          .where('T', Predicates.blocks('gtceu:black_steel_frame'))
          .where(' ', Predicates.any())
          .build())
          .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_inert_ptfe', 
      "gtceu:block/multiblock/large_chemical_reactor", false);
})