GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('quantum_chamber')
         .category('quantum_chamber')
         .setEUIO('in')
         .setMaxIOSize(1, 4, 2, 6)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MOTOR)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sim_chamber')
         .category('sim_chamber')
         .setEUIO('in')
         .setMaxIOSize(3, 9, 3, 3)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MOTOR)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sim_chamber_lv')
         .category('sim_chamber_lv')
         .setEUIO('in')
         .setMaxIOSize(1, 6, 6, 6)// Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.MOTOR)
})


//////////////////////////
//    MICRO CHAMBER     //
//////////////////////////


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sim_chamber', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .recipeType('sim_chamber')
        .appearanceBlock(() => Block.getBlock('kubejs:multi_verse_casing'))
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('CCCCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CLLLC', 'CCCCC')
        .aisle('CCCCC', 'GSSSG', 'GSSSG', 'GSSSG', 'LSSSL', 'CCCCC')
        .aisle('CCCCC', 'GS#SG', 'GS#SG', 'GS#SG', 'LS#SL', 'CCCCC')
        .aisle('CCCCC', 'GSSSG', 'GSSSG', 'GSSSG', 'LSSSL', 'CCCCC')
        .aisle('CCKCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CLLLC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('S', Predicates.blocks('powah:niotic_crystal_block'))
            .where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks('kubejs:multi_verse_casing')
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
              .or(Predicates.blocks(PartAbility.INPUT_ENERGY))
              .or(Predicates.blocks(PartAbility.EXPORT_ITEMS))
              .or(Predicates.blocks(PartAbility.IMPORT_ITEMS))
              .or(Predicates.blocks(PartAbility.EXPORT_FLUIDS))
              .or(Predicates.blocks(PartAbility.IMPORT_FLUIDS))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingRenderer('kubejs:block/casings/casing_multi', 
        'gtceu:block/multiblock/implosion_compressor', false)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('quantum_chamber', 'multiblock')
      .rotationState(RotationState.NON_Y_AXIS) 
      .recipeType('quantum_chamber')
      .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
      .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
      .pattern(definition => FactoryBlockPattern.start()
      .aisle('      CCCCC      ', '       CCC       ', '       C C       ', '       C C       ', '       C C       ', '      CCCCC      ', '       C C       ') 
      .aisle('    CC C C CC    ', '      AAAAA      ', '                 ', '                 ', '      AAAAA      ', '    CC C C CC    ', '       C C       ')
      .aisle('   C   C C   C   ', '    AAAAAAAAA    ', '      BBBBB      ', '      BBBBB      ', '    AAAAAAAAA    ', '   C   C C   C   ', '   C   C C   C   ')
      .aisle('  C    C C    C  ', '   AAA     AAA   ', '     BAAAAAB     ', '     BAAAAAB     ', '   AAA     AAA   ', '  C    C C    C  ', '    C  C C  C    ')
      .aisle('  C    C C    C  ', '   AAA     AAA   ', '    BA     AB    ', '    BA     AB    ', '   AAA     AAA   ', '  C    C C    C  ', '     C C C C     ')
      .aisle(' C     CCC     C ', '  AA         AA  ', '   BA       AB   ', '   BA       AB   ', '  AA         AA  ', ' C     C C     C ', '      CCDCC      ')
      .aisle(' CCCCCCCDCCCCCCC ', ' CAA    D    AAC ', ' C BA   D   AB C ', ' C BA       AB C ', ' CAA         AAC ', ' CCCCCCCDCCCCCCC ', ' CCCCCCCDCCCCCCC ')
      .aisle(' C    CDDDC    C ', '  AA   DDD   AA  ', '   BA  DDD  AB   ', '   BA   D   AB   ', '  AA    D    AA  ', ' C     DDD     C ', '      DDDDD      ')
      .aisle(' CCCCCCCDCCCCCCC ', ' CAA    D    AAC ', ' C BA   D   AB C ', ' C BA       AB C ', ' CAA         AAC ', ' CCCCCCCDCCCCCCC ', ' CCCCCCCDCCCCCCC ')
      .aisle(' C     CCC     C ', '  AA         AA  ', '   BA       AB   ', '   BA       AB   ', '  AA         AA  ', ' C     C C     C ', '      CCDCC      ')
      .aisle('  C    C C    C  ', '   AAA     AAA   ', '    BA     AB    ', '    BA     AB    ', '   AAA     AAA   ', '  C    C C    C  ', '     C C C C     ')
      .aisle('  C    C C    C  ', '   AAA     AAA   ', '     BAAAAAB     ', '     BAAAAAB     ', '   AAA     AAA   ', '  C    C C    C  ', '    C  C C  C    ')
      .aisle('   C   C C   C   ', '    AAAAAAAAA    ', '      BBBBB      ', '      BBBBB      ', '    AAAAAAAAA    ', '   C   C C   C   ', '   C   C C   C   ')
      .aisle('    CC C C CC    ', '      AAAAA      ', '                 ', '                 ', '      AAAAA      ', '    CC C C CC    ', '       C C       ')
      .aisle('      CCCCC      ', '       CKC       ', '       C C       ', '       C C       ', '       C C       ', '      CCCCC      ', '       C C       ') 
          .where('K', Predicates.controller(Predicates.blocks(definition.get())))
          .where('D', Predicates.blocks('gtceu:nonconducting_casing'))
          .where('B', Predicates.blocks('gtceu:laminated_glass'))
          .where('A', Predicates.blocks('gtceu:high_temperature_smelting_casing'))
          .where('C', Predicates.blocks('gtceu:inert_machine_casing')
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.blocks(PartAbility.INPUT_ENERGY))
            .or(Predicates.blocks(PartAbility.EXPORT_ITEMS))
            .or(Predicates.blocks(PartAbility.IMPORT_ITEMS))
            .or(Predicates.blocks(PartAbility.EXPORT_FLUIDS))
            .or(Predicates.blocks(PartAbility.IMPORT_FLUIDS))
          .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
          .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
          .build()
      )
      .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_inert_ptfe', 
      'gtceu:block/multiblock/fusion_reactor', false)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sim_chamber_lv', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:multi_verse_casing'))
        .recipeModifiers([GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .recipeType('sim_chamber_lv')
        .pattern(definition => FactoryBlockPattern.start()
          .aisle('CCC', 'CGC', 'CCC')
          .aisle('CCC', 'GSG', 'CCC')
          .aisle('CKC', 'CGC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('S', Predicates.blocks('minecraft:sculk'))
            .where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks('kubejs:multi_verse_casing')
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
              .or(Predicates.blocks(PartAbility.INPUT_ENERGY))
              .or(Predicates.blocks(PartAbility.EXPORT_ITEMS))
              .or(Predicates.blocks(PartAbility.IMPORT_ITEMS))
              .or(Predicates.blocks(PartAbility.EXPORT_FLUIDS))
              .or(Predicates.blocks(PartAbility.IMPORT_FLUIDS))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingRenderer('kubejs:block/casings/casing_multi', 
        'gtceu:block/multiblock/implosion_compressor', false)
})




