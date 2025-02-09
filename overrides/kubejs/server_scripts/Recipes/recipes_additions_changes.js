ServerEvents.recipes(e => {  
  // Input & Output Changes
  e.replaceInput(
    {input: "ae2:certus_quartz_crystal"},
    "ae2:certus_quartz_crystal",
    "gtceu:certus_quartz_gem")

  e.replaceInput(
    {input: "ae2:quartz_block"},
    "ae2:quartz_block",
    "gtceu:certus_quartz_block")

  e.replaceInput(
    {input: "gtceu:vacuum_tube"},
    "gtceu:vacuum_tube",
    "create:electron_tube")

  // Shaped & Shapeless Recipes
  e.shaped('create:electron_tube',[
    ' A ', 
    ' C ', 
    '   '  
  ], {
    A: 'create:polished_rose_quartz', 
    C: 'gtceu:steel_plate'   
  })

  e.shaped('powah:capacitor_basic',[
    'AAA', 
    ' C ', 
    ' B '  
  ], {
    A: 'powah:dielectric_paste', 
    B: 'powah:steel_energized', 
    C: 'gtceu:aluminium_block'   
  })

  e.shaped('gtceu:wrought_iron_ingot',[
    'AAA', 
    'AAA', 
    'AAA'  
  ], {
    A: 'gtceu:wrought_iron_nugget'  
  })

  e.shaped('9x minecraft:iron_nugget',[
    '   ', 
    ' A ', 
    '   '  
  ], {
    A: 'minecraft:iron_ingot'  
  })

  e.shaped('minecraft:sculk',[
    'AAA', 
    'AAA', 
    'AAA'  
  ], {
    A: 'minecraft:echo_shard'  
  })

  e.shaped('gtceu:lv_electric_motor',[
    'CDB',
    'DAD',
    'BDC'
  ],
    {
      A: 'thermal:upgrade_augment_1',
      B: "gtceu:iron_rod",
      C: "gtceu:tin_single_wire",
      D: "gtceu:copper_single_wire"
  })

  e.shaped('minecraft:paper',[
    '   ',
    'ABA',
    '   '
  ],
    { A: "minecraft:sugar_cane",
      B: "minecraft:sugar_cane"
  })

  e.shaped('gtceu:red_alloy_dust',[
    ' A ',
    'ABA',
    ' A '
  ],
    {
      A: 'minecraft:redstone',
      B: "gtceu:copper_dust"
  })

  e.shaped('gtceu:vacuum_freezer',[
    'AAA',
    'CBC',
    'DCD'
  ],
    {
      A: 'gtceu:mv_electric_pump',
      B: "gtceu:frostproof_machine_casing",
      C: "gtceu:micro_processor", 
      D: "gtceu:gold_single_wire"
  })

  // GTCEU Normal Machine Recipe Stack
    e.recipes.gtceu.alloy_smelter("new_pulsating_recipe")
     .itemInputs("2x gtceu:steel_ingot", "minecraft:ender_pearl")
     .itemOutputs("enderio:pulsating_alloy_ingot")
     .duration(50).EUt(16)

    e.recipes.gtceu.chemical_reactor("new_ammonia_recipe")
     .inputFluids([
      Fluid.of("gtceu:hydrogen", 3000),
      Fluid.of("gtceu:nitrogen", 1000)
     ])
     .outputFluids([Fluid.of("gtceu:ammonia", 1000)])
     .duration(340).EUt(15)

    e.recipes.gtceu.chemical_bath("alumiunium_dust_to_oxide_three")
     .itemInputs("gtceu:aluminium_dust")
     .inputFluids([Fluid.of("gtceu:distilled_water", 144)])
     .itemOutputs("gtceu:aluminium_three_oxide_dust")
     .duration(120).EUt(18)

    e.recipes.gtceu.electric_blast_furnace("realgar_to_arsenic_trioxide")
     .itemInputs("gtceu:raw_realgar")
     .inputFluids([Fluid.of("gtceu:nitrogen", 250)])
     .outputFluids([Fluid.of("gtceu:nitrogen_dioxide", 150)])
     .itemOutputs("2x gtceu:arsenic_trioxide_dust")
     .duration(340).EUt(125).circuit(1).blastFurnaceTemp(1800)

    e.recipes.gtceu.large_chemical_reactor("pbi_to_carbon_fiber")
     .itemInputs("4x gtceu:carbon_dust")
     .inputFluids([Fluid.of("gtceu:polybenzimidazole", 250)])
     .itemOutputs("16x gtceu:carbon_fibers")
     .duration(240).EUt(512)

    e.recipes.gtceu.assembler("new_cleanroom")
     .itemInputs("3x gtceu:item_filter","2x gtceu:stainless_steel_rotor","gtceu:hv_machine_hull","2x gtceu:hv_electric_motor","2x #gtceu:circuits/mv")
     .itemOutputs("gtceu:cleanroom")
     .duration(100).EUt(4)


     e.recipes.gtceu.electric_blast_furnace("stainless_recipe_for_iv_ev") 
      .itemInputs("4x gtceu:steel_dust", "8x gtceu:aluminium_dust")
      .inputFluids([Fluid.of('gtceu:clean_fluix', 455 )])
      .itemOutputs('gtceu:stainless_steel_ingot')
      .duration(1200).EUt(8192).circuit(6).blastFurnaceTemp(5000)

    e.recipes.gtceu.electrolyzer("soul_sand_electrolazer_recipe")
     .itemInputs("minecraft:soul_sand")
     .itemOutputs("5x gtceu:gold_dust", 
     "7x gtceu:silver_dust", 
     "8x gtceu:nickel_dust", 
     "4x gtceu:zinc_dust", "5x gtceu:monazite_dust")
     .outputFluids([Fluid.of("minecraft:lava", 5000)])
     .duration(890).EUt(30)

    e.recipes.gtceu.cutter("log_to_cutter_recipe")
     .itemInputs("#minecraft:logs")
     .itemOutputs("#minecraft:planks")
     .duration(100).EUt(15)
    
    e.recipes.gtceu.macerator("mars_stone_to_sand")
     .itemInputs("ad_astra:mars_stone")
     .itemOutputs("ad_astra:mars_sand")
     .duration(120).EUt(124)

    e.recipes.gtceu.macerator("mars_cobble_to_sand")
     .itemInputs("ad_astra:mars_cobblestone")
     .itemOutputs("ad_astra:mars_sand")
     .duration(120).EUt(124)

     e.recipes.gtceu.macerator("moon_stone_to_sand")
     .itemInputs("ad_astra:moon_stone")
     .itemOutputs("ad_astra:moon_sand")
     .duration(120).EUt(124)

    e.recipes.gtceu.macerator("moon_cobble_to_sand")
     .itemInputs("ad_astra:moon_cobblestone")
     .itemOutputs("ad_astra:moon_sand")
     .duration(120).EUt(124)

    e.recipes.gtceu.electrolyzer("mars_sand_electrolzer")
     .itemInputs(["ad_astra:mars_sand"])
     .itemOutputs([
      Item.of("6x gtceu:phosphorus_dust"),
      Item.of("6x gtceu:gallium_dust"),
      Item.of("2x gtceu:gold_dust"),
      Item.of("2x gtceu:magnesium_dust"),
      Item.of("3x gtceu:uraninite_dust")
     ])
     .outputFluids([Fluid.of("gtceu:lithium", 120)])
     .duration(470).EUt(124)
/*
    e.recipes.gtceu.rock_breaker("mars_stone_recipe")
     .notConsumable("ad_astra:mars_stone")
     .itemOutputs("ad_astra:mars_stone")
     ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:water")
     ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:lava")
     .duration(120).EUt(124).dimension("ad_astra:mars") 
*/
    e.recipes.gtceu.combustion_generator('bioethanol_to_power_combustion')
    .inputFluids([Fluid.of('createaddition:bioethanol', 15)])
    .duration(20)
    .EUt(-20)

    e.recipes.gtceu.combustion_generator('refined_biofuel_to_power_combustion')
    .inputFluids([Fluid.of('gtceu:refined_biofuel', 15)])
    .duration(80)
    .EUt(-32)

    e.recipes.gtceu.forge_hammer("kubejs:forge_hammer_coal_dust_recipe")
    .itemInputs("minecraft:coal")
    .itemOutputs("gtceu:coal_dust")
    .duration(10).EUt(6)

    e.recipes.gtceu.chemical_reactor("tuff_recipe_new")
     .itemInputs("kubejs:block_dust", "#forge:stone")
     .itemOutputs("minecraft:tuff")
     .duration(120).EUt(8)
/*
    e.recipes.gtceu.rock_breaker("tuff_breaker")
     .notConsumable("minecraft:tuff")
     .itemOutputs("minecraft:tuff")
     ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:water")
     ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:lava")
     .duration(220).EUt(120).dimension("ad_astra:moon")
*/
    e.recipes.gtceu.chemical_bath("kubejs:certus_quartz_chemical")
    .itemInputs("gtceu:certus_quartz_dust")
    .inputFluids("gtceu:distilled_water", 250)
    .itemOutputs("gtceu:certus_quartz_gem")
    .duration(180).EUt(32).circuit(15)

    e.recipes.gtceu.chemical_reactor("kubejs:sky_steel_ingot_recipe")
    .itemInputs("2x gtceu:steel_ingot", "ae2:charged_certus_quartz_crystal", "ae2:sky_stone_block")
    .inputFluids("gtceu:distilled_sky_solution", 1000)
    .itemOutputs("megacells:sky_steel_ingot")
    .duration(280).EUt(124).circuit(22)

    e.recipes.gtceu.chemical_reactor("kubejs:sky_refined_recipe")
    .inputFluids("gtceu:sulfuric_acid", 250)
    .inputFluids("gtceu:distilled_sky_solution", 144)
    .outputFluids("gtceu:refined_sky_stone", 288)
    .duration(380).EUt(124).circuit(12)

    e.recipes.gtceu.chemical_reactor("sodium_chloride_recipe")
    .inputFluids("gtceu:chlorine", 144)
    .itemInputs("2x gtceu:salt_dust")
    .outputFluids("gtceu:sodium_chloride", 288)
    .duration(280).EUt(30).circuit(7)

       // Certus Quartz - Fluix Recipe MV Line 

       e.recipes.gtceu.mixer("mixing_quartz_certus_redstone")
       .itemInputs("1x gtceu:certus_quartz_dust", "1x gtceu:nether_quartz_dust")
       .inputFluids([Fluid.of('gtceu:redstone', 500)])
       .outputFluids([Fluid.of('gtceu:liquid_fluix', 1000)])
       .duration(300)
       .EUt(20)

       e.recipes.gtceu.centrifuge("centrifuge_fluix_fluid")
       .inputFluids([Fluid.of('gtceu:liquid_fluix', 500 )])
       .itemOutputs('3x ae2:fluix_dust')
       .duration(660) 
       .EUt(20)

       e.recipes.gtceu.centrifuge("sky_stone_centri_from_moon_sand")
       .inputFluids([Fluid.of('gtceu:distilled_water', 1000 )])
       .outputFluids([Fluid.of("gtceu:liquid_sky_stone", 144 )])
       .itemInputs("4x ad_astra:moon_sand")
       .duration(860).EUt(15) 

       e.recipes.gtceu.extractor("extractor_fluix_dust")
       .itemInputs("1x ae2:fluix_dust")
       .outputFluids([Fluid.of('gtceu:clean_fluix', 144 )])
       .duration(460).EUt(25)

      // Stainless Steel Recipes
      e.recipes.gtceu.mixer("stainless_1")
       .itemInputs("gtceu:manganese","gtceu:chromium","2x gtceu:invar","4x #forge:dusts/iron")
       .inputFluids([Fluid.of("gtceu:clean_fluix",144)])

       e.recipes.gtceu.mixer("basalz_dust")
        .itemInputs("gtceu:basalt_dust","2x minecraft:blaze_powder")
        .itemOutputs("2x thermal:basalz_powder")
        .duration(50).EUt(10)

       e.recipes.gtceu.autoclave("kubejs:fluix_crystal_recipe")
       .itemInputs("3x ae2:fluix_dust")
       .inputFluids([Fluid.of('gtceu:clean_fluix', 250 )])
       .itemOutputs('2x ae2:fluix_crystal')
       .duration(140)
       .EUt(25)

       e.recipes.gtceu.autoclave("kubejs:mv_fluix_crystal_recipe")
       .itemInputs("2x ae2:fluix_dust", "3x gtceu:nether_quartz_dust")
       .inputFluids([Fluid.of('gtceu:clean_fluix', 150 )])
       .itemOutputs('6x ae2:fluix_crystal')
       .duration(95)
       .EUt(124)

       // AE Processor - Interface - Pattern - Cores - Assembler Recipes
       
       e.recipes.gtceu.assembler("kubejs:fluix_cable_recipe")
       .itemInputs("2x ae2:fluix_crystal", "ae2:quartz_fiber")
       .inputFluids([Fluid.of('gtceu:clean_fluix', 150 )])
       .itemOutputs('4x ae2:fluix_glass_cable')
       .duration(250)
       .EUt(124)

       e.recipes.gtceu.assembler("kubejs:ae2_controller_recipe")
       .itemInputs("4x ae2:fluix_block","2x gtceu:blue_alloy_ingot","2x #gtceu:circuits/mv", "2x gtceu:stainless_steel_ingot")
       .inputFluids([Fluid.of('gtceu:refined_sky_stone', 450 )]) 
       .itemOutputs('4x ae2:controller')
       .duration(250)
       .EUt(124)

       // Skystone Refinery Line
       e.recipes.gtceu.distillery("kubejs:skystone_dust_from_liquid")
       .inputFluids([Fluid.of('gtceu:distilled_sky_solution', 144 )])
       .itemOutputs('8x ae2:sky_dust')
       .duration(95).EUt(124) .circuit(4)

       e.recipes.gtceu.distillery("kubejs:skystone_dust_from_liquid_lv")
       .inputFluids([Fluid.of('gtceu:distilled_sky_solution', 288 )])
       .itemOutputs('2x ae2:sky_dust')
       .duration(320).EUt(32).circuit(2) 
       
       // NO - Skystone Refinery
       e.recipes.gtceu.distillation_tower("kubejs:skystone_distillation_tower_to_distilled_sky")
       .inputFluids([Fluid.of('gtceu:liquid_sky_stone', 1000 )])
       .outputFluids([Fluid.of('gtceu:lithium', 166 )])
       .outputFluids([Fluid.of('gtceu:lead', 166 )])
       .outputFluids([Fluid.of('gtceu:nickel', 166 )])
       .outputFluids([Fluid.of('gtceu:cobalt', 166 )])
       .outputFluids([Fluid.of('gtceu:natural_gas', 140 )])
       .outputFluids([Fluid.of('gtceu:distilled_sky_solution', 280 )])
       .duration(221).EUt(124) 
       
     e.recipes.gtceu.large_chemical_reactor("kubejs:lcr_enderium_recipe") 
     .itemInputs("4x gtceu:endstone_dust")
     .inputFluids([Fluid.of('gtceu:liquid_ender_air', 4320)])
     .itemOutputs("4x gtceu:ender_pearl_dust")
     .duration(800).circuit(12).EUt(124)
    
        e.recipes.gtceu.assembler("kubejs:ae2_pattern_recipe")
         .itemInputs("1x gtceu:stainless_steel_ingot", "3x minecraft:glowstone_dust", "3x ae2:quartz_glass" )
         .itemOutputs("2x ae2:blank_pattern")
         .duration(100).EUt(30)

         e.recipes.gtceu.assembler("kubejs:ae2_drive_recipe")
         .itemInputs("4x gtceu:stainless_steel_ingot", "2x ae2:engineering_processor", "2x ae2:fluix_glass_cable" )
         .itemOutputs("ae2:drive")
         .inputFluids([Fluid.of('gtceu:refined_sky_stone', 1200)])
         .duration(100).EUt(30)
     
          e.recipes.gtceu.vacuum_freezer('kubejs:melon_frozen')
             .itemInputs('minecraft:melon_slice')
             .itemOutputs('thermal:frost_melon_slice')
             .inputFluids("gtceu:distilled_water", 200) 
             .duration(120).EUt(124)
     
             e.recipes.gtceu.macerator('kubejs:block_dust')
             .itemInputs('minecraft:sand')
             .itemOutputs('kubejs:block_dust')
             .duration(60).EUt(15)
             
             e.recipes.gtceu.macerator('gtceu:saltpeter_dust')
             .itemInputs('minecraft:sandstone')
             .itemOutputs('gtceu:saltpeter_dust')
             .duration(60).EUt(15)

            e.recipes.gtceu.thermal_centrifuge("diorite_to_iron")
             .itemInputs("minecraft:diorite")
             .itemOutputs("4x gtceu:impure_iron_dust")
             .itemOutputs("2x gtceu:impure_tin_dust")
             .duration(50).EUt(6)
     
             e.recipes.gtceu.electrolyzer('kubejs:heavy_water_elec_heavy_water')
             .inputFluids([Fluid.of('minecraft:water', 2000)]) 
             .outputFluids([Fluid.of('gtceu:heavy_water', 525)]) 
             .outputFluids([Fluid.of('gtceu:salt_water', 525)]) 
             .duration(420).EUt(122).circuit(8)
     
             e.recipes.gtceu.electrolyzer('minecraft:glass_quartz')
             .itemInputs('4x minecraft:glass')
             .itemOutputs('gtceu:quartz_sand_dust')
             .duration(120).EUt(16) 
     
             e.recipes.gtceu.electrolyzer('kubejs:cobble_lava_recipe')
             .itemInputs('minecraft:cobblestone')
             .outputFluids([Fluid.of('minecraft:lava', 500)])
             .duration(120).EUt(16) 
             
             e.recipes.gtceu.mixer('kubejs:rose_quartz_recipe')
             .itemInputs('minecraft:quartz')
             .itemOutputs('create:rose_quartz')
             .inputFluids([Fluid.of('gtceu:redstone', 144)])
             .duration(120).EUt(16) 
             /* // does now work
             e.recipes.gtceu.create_mixer('kubejs:create_rose_quartz_recipe')
             .itemInputs('minecraft:quartz')
             .itemOutputs('create:rose_quartz')
             .inputFluids([Fluid.of('gtceu:redstone', 144)])
             .duration(60).EUt(16)
             */
             e.recipes.gtceu.cutter('kubejs:rose_quartz_recipe')
             .itemInputs('create:rose_quartz')
             .itemOutputs('create:polished_rose_quartz')
             .inputFluids([Fluid.of('gtceu:distilled_water', 288)])
             .duration(240).EUt(15) 
             
             e.recipes.gtceu.electrolyzer('kubejs:clay_to_sodium_op_recipe')
             .itemInputs('gtceu:clay_dust')
             .itemOutputs('2x gtceu:sodium_dust', 'gtceu:lithium_dust', '2x gtceu:aluminium_dust', '2x gtceu:silicon_dust')
             .outputFluids([Fluid.of('minecraft:water', 6000)])
             .duration(120).EUt(15) 
             
             e.recipes.gtceu.chemical_reactor('kubejs:magma_to_lava')
             .itemInputs('minecraft:magma_block')
             .outputFluids([Fluid.of('minecraft:lava', 1000)])
             .duration(80).EUt(16) 
     
             e.recipes.gtceu.chemical_reactor('kubejs:end_and_deepslate')
             .itemInputs("minecraft:deepslate", "minecraft:end_stone")
             .itemOutputs("ae2:sky_stone_block")
             .duration(80).EUt(8) 
     
             e.recipes.gtceu.chemical_reactor('kubejs:soul_sand_recipe_lv')
             .itemInputs("#forge:sand")
             .itemOutputs("minecraft:soul_sand")
             .inputFluids([Fluid.of('minecraft:lava', 144)])
             .duration(50).EUt(15) 
     
             e.recipes.gtceu.chemical_reactor('kubejs:seed_oil_chemicalr_recipe')
             .itemInputs("#forge:seeds")
             .outputFluids([Fluid.of('createaddition:seed_oil', 200)])
             .duration(90).EUt(15) 
     
             e.recipes.gtceu.ore_washer('soul_sand_washer')
             .itemInputs("minecraft:soul_sand")
             .chancedOutput("4x minecraft:quartz", 52, 0.1)
             .chancedOutput("minecraft:gold_nugget", 15, 0.1)
             .inputFluids([Fluid.of('minecraft:water', 144)])
             .duration(50).circuit(4).EUt(15) 
         
             e.recipes.gtceu.chemical_reactor('kubejs:stone_dust_clay')
             .itemInputs('1x gtceu:stone_dust')
             .itemOutputs('2x gtceu:clay_dust')
             .inputFluids([Fluid.of('minecraft:water', 100 )])
             .duration(50).EUt(3) 
             
             e.recipes.gtceu.chemical_reactor('kubejs:dust_plus_lava')
             .itemInputs('kubejs:block_dust')
             .itemOutputs('minecraft:magma_block')
             .inputFluids([Fluid.of('minecraft:lava', 120 )])
             .duration(60).EUt(15) 
     
             e.recipes.gtceu.macerator('kubejs:obsidian_to_dust')
             .itemInputs('minecraft:obsidian')
             .itemOutputs('4x create:powdered_obsidian')
             .duration(50).EUt(15)
             
             e.recipes.gtceu.compressor('kubejs:magma_to_rack')
             .itemInputs('minecraft:magma_block')
             .itemOutputs('minecraft:netherrack')
             .duration(50).EUt(15)
             
             e.recipes.gtceu.compressor('kubejs:rack_to_obsidian')
             .itemInputs('4x minecraft:netherrack')
             .itemOutputs('minecraft:obsidian')
             .duration(80).EUt(15)
     
             e.recipes.gtceu.extractor('kubejs:thermal_rubber_to_rubber_fluid')
             .itemInputs('thermal:cured_rubber')
             .outputFluids([Fluid.of('gtceu:rubber', 144)])
             .duration(60).EUt(8)

            e.recipes.gtceu.evaporation("brine_to_lithium")
             .inputFluids([Fluid.of("gtceu:hot_brine", 2000)])
             .outputFluids([Fluid.of("gtceu:lithium", 500)])
             .duration(340).EUt(512)


            e.custom({
              "type": "powah:energizing",
                "ingredients": [
                  {"item": "gtceu:polyvinyl_chloride_plate"}
                ],
                "energy": 50000,
                "result": {
                  "count": 1,
                  "item": "kubejs:nano_mask"
                }
            })

            e.custom({
              "type":"createaddition:liquid_burning",
              "input": {
                    "fluid": "gtceu:refined_biofuel",
                    "amount": 1000
              },
              "burnTime": 28000,
              "superheated": true
            })

            e.custom({
              "type":"createaddition:liquid_burning",
              "input": {
                    "fluid": "gtceu:blaze",
                    "amount": 1000
              },
              "burnTime": 20000,
              "superheated": false
            })
     

     e.custom({
      "type": "powah:energizing",
        "ingredients": [
          {"item": "gtceu:empty_mold"},
          {"item": "minecraft:nether_star"}
        ],
        "energy": 250000,
        "result": {
          "count": 1,
          "item": "kubejs:nether_star_mold"
        }
    })

     e.custom({
     "type": "thermal:chiller",
       "ingredient": {
         "fluid": "thermal:latex",
         "amount": 100
       },
       "result": [
         {
           "item": "thermal:rubber"
         }
       ],
       "energy": 8000
     })
     e.custom({
     "type": "thermal:centrifuge",
       "ingredient": {
         "item": "minecraft:sugar_cane"
       },
       "result": [
         {
           "item": "minecraft:paper",
           "count": 4
         }
       ],
       "energy": 1600
     })
     e.custom({
       "type": "botania:mana_infusion",
       "input": {
       "item": "gtceu:stainless_steel_ingot"
        },
       "output": {
       "item": "botania:manasteel_ingot"
        },
       "mana": 2000
      })
      e.custom({
        "type": "botania:elven_trade",
        "ingredients": [
         {
         "item": "gtceu:stainless_steel_ingot"
         },
         {
         "item": "gtceu:stainless_steel_ingot"
         }
         ],
         "output": [
         {
         "item": "botania:manasteel_ingot"
         }
          ]
       })
     
     
     //////////////////////////
     // LV Electric Recipes  //
     //////////////////////////
     
     
     e.custom({ // Motor
       "type": "powah:energizing",
         "ingredients": [
           {"item": "thermal:upgrade_augment_1"},
           {"item": "gtceu:tin_single_wire"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:copper_single_wire"},
           {"item": "gtceu:steel_ingot"}
         ],
         "energy": 900000,
         "result": {
           "item": "gtceu:lv_electric_motor"
         }
     })
     
     // LV Electric Pump 
     
     e.custom({ // Pump - Rubber/N
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:rubber_ring"},
           {"item": "gtceu:rubber_ring"},
           {"item": "gtceu:bronze_normal_fluid_pipe"}
         ],
         "energy": 1000000,
         "result": {
           "item": "gtceu:lv_electric_pump"
         }
     })
     e.custom({ // Pump - Silicone
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:silicone_rubber_ring"},
           {"item": "gtceu:silicone_rubber_ring"},
           {"item": "gtceu:bronze_normal_fluid_pipe"}
         ],
         "energy": 500000,
         "result": {
           "item": "gtceu:lv_electric_pump"
         }
     })
     e.custom({ // Pump - Butadiene
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:gold_single_wire"},
           {"item": "gtceu:styrene_butadiene_rubber_ring"},
           {"item": "gtceu:styrene_butadiene_rubber_ring"},
           {"item": "gtceu:bronze_normal_fluid_pipe"}
         ],
         "energy": 250000,
         "result": {
           "item": "gtceu:lv_electric_pump"
         }
     })
     
     // LV Electric Piston
     
     e.custom({
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:electrum_single_cable"},
           {"item": "gtceu:electrum_single_cable"},
           {"item": "powah:energized_steel_block"}
         ],
         "energy": 1000000,
         "result": {
           "item": "gtceu:lv_electric_piston"
         }
     })
     
     // LV Conveyor's 
     
     e.custom({ // Rubber Block/N
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:electrum_single_cable"},
           {"item": "gtceu:rubber_block"}
         ],
         "energy": 1000000,
         "result": {
           "count": 2,
           "item": "gtceu:lv_conveyor_module"
         }
     })
     
     e.custom({ // Styrene Rubber 
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:gold_single_cable"},
           {"item": "gtceu:styrene_butadiene_rubber_block"}
         ],
         "energy": 250000,
         "result": {
           "count": 8,
           "item": "gtceu:lv_conveyor_module"
         }
     })
     
     e.custom({ // Silicone Rubber
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:gold_single_cable"},
           {"item": "gtceu:silicone_rubber_block"}
         ],
         "energy": 500000,
         "result": {
           "count": 4,
           "item": "gtceu:lv_conveyor_module"
         }
     })
     
     // LV Robot Arm
     
     e.custom({
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_piston"},
           {"item": "gtceu:electrum_quadruple_cable"},
           {"item": "gtceu:basic_electronic_circuit"}
         ],
         "energy": 1000000,
         "result": {
           "count": 2,
           "item": "gtceu:lv_robot_arm"
         }
     })
     
     e.custom({ // Integrated Version
       "type": "powah:energizing",
         "ingredients": [
           {"item": "gtceu:lv_electric_motor"},
           {"item": "gtceu:lv_electric_piston"},
           {"item": "gtceu:electrum_quadruple_cable"},
           {"item": "gtceu:basic_integrated_circuit"}
         ],
         "energy": 500000,
         "result": {
           "count": 4,
           "item": "gtceu:lv_robot_arm"
         }
     })

       e.custom({
        "type": "powah:energizing",
          "ingredients": [
            {"item": "gtceu:certus_quartz_gem"},
          ],
          "energy": 150000,
          "result": {
            "item": "ae2:charged_certus_quartz_crystal"
          }
        })
        e.custom({
          "type": "powah:energizing",
            "ingredients": [
              {"item": "powah:charged_snowball"},
            ],
            "energy": 150000,
            "result": {
              "item": "thermal:blizz_rod"
            }
          })
        e.custom({
          "type": "powah:energizing",
            "ingredients": [
              {"item": "gtceu:sticky_resin"},
              {"item": "gtceu:sticky_resin"},
              {"item": "gtceu:electrum_ingot"}
            ],
            "energy": 900000,
            "result": {
              "item": "gtceu:resistor"
            }
     })
       e.custom({
            "type": "powah:energizing",
              "ingredients": [
                {"item": "ae2:logic_processor"},
                {"item": "ae2:fluix_dust"},
                {"item": "ae2:charged_certus_quartz_crystal"}
              ],
              "energy": 9000000,
              "result": {
                "item": "ae2:formation_core"
              }
       })
       e.custom({
        "type": "powah:energizing",
          "ingredients": [
            {"item": "ae2:logic_processor"},
            {"item": "ae2:fluix_dust"},
            {"item": "minecraft:glass"}
          ],
          "energy": 9000000,
          "result": {
            "item": "ae2:annihilation_core"
          }
      })
      e.custom({
        "type": "powah:energizing",
          "ingredients": [
            {"item": "ae2:annihilation_core"},
            {"item": "ae2:formation_core"},
            {"item": "ae2:cell_component_1k"},
            {"item": "gtceu:plastic_printed_circuit_board"},
            {"item": "gtceu:ilc_chip"}
          ],
          "energy": 900000,
          "result": {
            "item": "ae2:molecular_assembler"
          }
      })
      e.custom({
        "type": "powah:energizing",
          "ingredients": [
            {"item": "ae2:annihilation_core"},
            {"item": "ae2:formation_core"},
            {"item": "gtceu:lv_machine_casing"},
            {"item": "gtceu:plastic_printed_circuit_board"},
            {"item": "gtceu:ilc_chip"}
          ],
          "energy": 900000,
          "result": {
            "item": "ae2:pattern_provider"
          }
      })
      e.custom({
        "type": "powah:energizing",
          "ingredients": [
            {"item": "ae2:annihilation_core"},
            {"item": "ae2:formation_core"},
            {"item": "gtceu:lv_machine_casing"},
            {"item": "ae2:quartz_vibrant_glass"},
            {"item": "gtceu:plastic_printed_circuit_board"},
            {"item": "gtceu:ilc_chip"}
          ],
          "energy": 900000,
          "result": {
            "item": "ae2:interface"
          }
      })



//////////////////////////
// MV Electric Recipes  //
//////////////////////////

e.custom({ // Motor
  "type": "powah:energizing",
    "ingredients": [
      {"item": "thermal:upgrade_augment_2"},
      {"item": "gtceu:silver_single_wire"},
      {"item": "gtceu:iron_single_wire"},
      {"item": "gtceu:gold_single_wire"},
      {"item": "gtceu:steel_ingot"}
    ],
    "energy": 2000000,
    "result": {
      "item": "gtceu:mv_electric_motor"
    }
})

// MV Electric Pump 

e.custom({ // Pump - Rubber/N
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:silver_single_wire"},
      {"item": "gtceu:silver_single_wire"},
      {"item": "gtceu:rubber_ring"},
      {"item": "gtceu:rubber_ring"},
      {"item": "gtceu:steel_normal_fluid_pipe"}
    ],
    "energy": 2000000,
    "result": {
      "item": "gtceu:mv_electric_pump"
    }
})
e.custom({ // Pump - Silicone
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:silver_single_wire"},
      {"item": "gtceu:silver_single_wire"},
      {"item": "gtceu:silicone_rubber_ring"},
      {"item": "gtceu:silicone_rubber_ring"},
      {"item": "gtceu:steel_normal_fluid_pipe"}
    ],
    "energy": 600000,
    "result": {
      "item": "gtceu:mv_electric_pump"
    }
})
e.custom({ // Pump - Butadiene
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:gold_single_wire"},
      {"item": "gtceu:gold_single_wire"},
      {"item": "gtceu:styrene_butadiene_rubber_ring"},
      {"item": "gtceu:styrene_butadiene_rubber_ring"},
      {"item": "gtceu:steel_normal_fluid_pipe"}
    ],
    "energy": 350000,
    "result": {
      "item": "gtceu:mv_electric_pump"
    }
})

// MV Electric Piston

e.custom({
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:electrum_single_cable"},
      {"item": "gtceu:electrum_single_cable"},
      {"item": "gtceu:aluminium_block"}
    ],
    "energy": 2000000,
    "result": {
      "item": "gtceu:mv_electric_piston"
    }
})

// MV Conveyor's 

e.custom({ // Rubber Block/N
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:electrum_single_cable"},
      {"item": "gtceu:rubber_block"}
    ],
    "energy": 2000000,
    "result": {
      "count": 2,
      "item": "gtceu:mv_conveyor_module"
    }
})

e.custom({ // Styrene Rubber 
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:gold_single_cable"},
      {"item": "gtceu:styrene_butadiene_rubber_block"}
    ],
    "energy": 350000,
    "result": {
      "count": 8,
      "item": "gtceu:mv_conveyor_module"
    }
})

e.custom({ // Silicone Rubber
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:gold_single_cable"},
      {"item": "gtceu:silicone_rubber_block"}
    ],
    "energy": 600000,
    "result": {
      "count": 4,
      "item": "gtceu:mv_conveyor_module"
    }
})

// LV Robot Arm

e.custom({
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_piston"},
      {"item": "gtceu:electrum_quadruple_cable"},
      {"item": "gtceu:good_electronic_circuit"}
    ],
    "energy": 2000000,
    "result": {
      "count": 2,
      "item": "gtceu:mv_robot_arm"
    }
})

e.custom({ // Integrated Version
  "type": "powah:energizing",
    "ingredients": [
      {"item": "gtceu:mv_electric_motor"},
      {"item": "gtceu:mv_electric_piston"},
      {"item": "gtceu:electrum_quadruple_cable"},
      {"item": "gtceu:good_integrated_circuit"}
    ],
    "energy": 600000,
    "result": {
      "count": 4,
      "item": "gtceu:mv_robot_arm"
    }
  })
})

