ServerEvents.recipes(e => {
    e.recipes.create.sequenced_assembly([ // Start
            Item.of('create:precision_mechanism') // Recipe
        ],'create:brass_sheet',[ // Input
            e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:electron_tube']),
            e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:cogwheel']),
            e.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
            e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:precision_mechanism','create:wrench']).keepHeldItem()
        ]).transitionalItem('create:incomplete_precision_mechanism').loops(1) 

    e.recipes.create.sequenced_assembly([Item.of("gtceu:certus_quartz_gem")],"kubejs:certus_seed",[
      e.recipes.create.filling("kubejs:certus_seed",["kubejs:certus_seed",{fluid:"gtceu:distilled_water",amount:500}]),
      e.recipes.create.filling("kubejs:certus_seed",["kubejs:certus_seed",{fluid:"gtceu:distilled_water",amount:500}]),
      e.recipes.create.filling("kubejs:certus_seed",["kubejs:certus_seed",{fluid:"gtceu:distilled_water",amount:500}]),
      e.recipes.create.filling("kubejs:certus_seed",["gtceu:certus_quartz_gem",{fluid:"gtceu:distilled_water",amount:500}]),
    ]).transitionalItem("kubejs:certus_seed").loops(4)

    // Sky Stone from Solid
    e.recipes.create.mixing(["kubejs:certus_seed"],["gtceu:potassium_dust",Fluid.of("gtceu:liquid_sky_stone", 72)])
    e.recipes.gtceu.extractor("sky_stone_1")
     .itemInputs("ae2:sky_stone_block")
     .outputFluids([Fluid.of("gtceu:liquid_sky_stone", 576)])
     .duration(200).EUt(32)

     e.recipes.gtceu.extractor("sky_stone_2")
     .itemInputs("ae2:sky_dust")
     .outputFluids([Fluid.of("gtceu:liquid_sky_stone", 144)])
     .duration(50).EUt(17)

    e.recipes.create.mechanical_crafting('gtceu:greenhouse', [
          '  AAAAA  ',
          ' FACACAF ',
          '  AADAA  ',
          ' FACACAF ',
          '  AAAAA  '
        ], {
          A: 'gtceu:double_steel_plate',
          C: 'create:electron_tube',
          D: 'createaddition:small_light_connector',
          F: 'gtceu:double_iron_plate'
        })

    e.recipes.create.mechanical_crafting('ad_astra:launch_pad', [
          'AABBAA',
          'ABBBBA',
          'BABBAB',
          'ABBBBA',
          'AABBAA'
        ], {
          A: 'kubejs:reinforced_steel_beam',
          B: 'gtceu:long_steel_rod'
        })

  e.recipes.create.deploying(['gtceu:rubber_ring'], ['gtceu:rubber_ingot', 'farmersdelight:diamond_knife']).keepHeldItem()
  e.recipes.create.deploying(['gtceu:rubber_plate'], ['gtceu:rubber_ingot', 'gtceu:plate_casting_mold']).keepHeldItem()
  e.recipes.create.compacting(['gtceu:compressed_fireclay'], ['gtceu:fireclay_dust'])
  e.smelting('minecraft:glass', 'minecraft:sand')
  e.smelting('create:andesite_alloy', 'kubejs:compound_base')
  e.recipes.create.mixing([Fluid.of("gtceu:steam", 500)], [Fluid.of("minecraft:water", 1000)]).heated()
  e.recipes.create.filling(["croptopia:water_bottle"], ["minecraft:glass_bottle", Fluid.of("minecraft:water", 250)])
  e.recipes.create.filling(["minecraft:glass_bottle"], ["gtceu:bottle_casting_mold", Fluid.of("gtceu:glass", 72)])
  e.recipes.create.compacting(['create:blaze_cake_base'], ['create:cinder_flour', 'minecraft:sugar'])
  e.recipes.create.mixing([Fluid.of("gtceu:glass", 144)], ["#forge:sand"]).heated()
  e.recipes.create.mixing(["gtceu:rubber_ingot","gtceu:ingot_casting_mold"], ["thermal:cured_rubber","gtceu:ingot_casting_mold"]).heated()
  e.recipes.create.mixing(["2x gtceu:rubber_ingot","gtceu:ingot_casting_mold"], ["gtceu:sulfur_dust","gtceu:raw_rubber_dust","gtceu:ingot_casting_mold"]).superheated()
  e.recipes.create.mixing(["3x gtceu:raw_rubber_dust"], ["gtceu:sticky_resin"]).heated()
  e.recipes.create.compacting(["gtceu:sticky_resin","gtceu:raw_rubber_dust"],["gtceu:rubber_log"])
  e.recipes.create.mixing(["2x gtceu:raw_rubber_dust"], ["#forge:slimeballs"]).heated()
  e.recipes.create.compacting(["gtceu:sticky_resin"],[Fluid.of("thermal:resin", 40)])
  e.recipes.create.mixing(["gtceu:raw_rubber_dust"], ["gtceu:rubber_log"])
  e.recipes.create.crushing(['ad_astra:mars_sand'], ['ad_astra:mars_stone'])
  e.recipes.create.crushing(['ad_astra:mars_sand'], ['ad_astra:mars_cobblestone'])
  e.recipes.create.crushing(['ad_astra:mars_cobblestone'], ['ad_astra:mars_stone'])
  e.recipes.create.crushing(['ad_astra:moon_sand'], ['ad_astra:moon_stone'])
  e.recipes.create.crushing(['ad_astra:moon_sand'], ['ad_astra:moon_cobblestone'])
  e.recipes.create.crushing(['ad_astra:moon_cobblestone'], ['ad_astra:moon_stone'])
  e.recipes.create.pressing(['5x gtceu:wood_plate'], ['#minecraft:planks'])
  e.recipes.create.mixing(["gtceu:sticky_resin"], ["#forge:slimeballs"]).heated()
  e.recipes.create.milling(["kubejs:block_dust"], ["minecraft:sand"])
  e.recipes.create.crushing(["gtceu:sky_stone_dust"], ["ae2:sky_stone_block"])
  e.recipes.create.mixing(["minecraft:glass"], ["#forge:sand"]).heated()
  e.recipes.create.mixing([Fluid.of("gtceu:oxygen", 500), Fluid.of("gtceu:hydrogen", 250)], [Fluid.of("minecraft:water", 1000)]).superheated()
  e.recipes.create.filling(["gtceu:brick_dust"], ["gtceu:clay_dust", Fluid.of("minecraft:lava", 144)])
})

ServerEvents.recipes(e => {
    e.recipes.gtceu.alloy_smelter("andesite_alloy_alloysmelter_zinc")
     .itemInputs("2x kubejs:compound_base", "2x create:zinc_nugget")
     .itemOutputs("2x create:andesite_alloy")
     .duration(200).EUt(14)

     e.recipes.gtceu.alloy_smelter("andesite_alloy_alloysmelter_iron")
     .itemInputs("2x kubejs:compound_base", "2x minecraft:iron_nugget")
     .itemOutputs("2x create:andesite_alloy")
     .duration(200).EUt(14)

     e.recipes.gtceu.alloy_smelter("andesite_alloy_alloysmelter_tin")
     .itemInputs("2x kubejs:compound_base", "2x gtceu:tin_nugget")
     .itemOutputs("2x create:andesite_alloy")
     .duration(200).EUt(14)

     e.recipes.gtceu.alloy_smelter("andesite_alloy_alloysmelter_electrum")
     .itemInputs("5x kubejs:compound_base", "9x gtceu:electrum_nugget")
     .itemOutputs("14x create:andesite_alloy")
     .duration(300).EUt(120)

     e.recipes.gtceu.mixer("compound_base_alloy")
      .itemInputs("4x minecraft:kelp", "2x gtceu:andesite_dust")
      .itemOutputs("6x kubejs:compound_base")
      .inputFluids([Fluid.of("minecraft:water", 1000)])
      .duration(200).EUt(14)

      e.shapeless('kubejs:compound_base', [ 
        'gtceu:andesite_dust',
        'croptopia:water_bottle',
        'minecraft:kelp'	
      ])

      e.shapeless('3x gtceu:andesite_dust', [ 
                      'minecraft:andesite',
                      '#forge:tools/hammers' 	
                    ])

      e.shaped('3x minecraft:glass_bottle', [
         '   ', 
         'A A', 
         ' A '  
            ], {
              A: 'minecraft:glass'  
            }
          ) 

     e.recipes.gtceu.assembler("infinite_range_booster_new")
      .itemInputs("3x gtceu:titanium_ingot", "3x ae2:wireless_booster", "4x minecraft:nether_star", "2x gtceu:quantum_eye")
      .itemOutputs("aeinfinitybooster:infinity_card")
      .inputFluids([Fluid.of("gtceu:titanium_silver", 500)])
      .duration(400).EUt(120)

     e.recipes.gtceu.assembler("dimension_range_booster_new")
      .itemInputs("3x gtceu:tungsten_steel_ingot", "3x aeinfinitybooster:infinity_card", "4x minecraft:nether_star", "1x gtceu:quantum_eye")
      .itemOutputs("aeinfinitybooster:dimension_card")
      .inputFluids([Fluid.of("gtceu:titanium_silver", 500)])
      .duration(400).EUt(120)

     e.recipes.gtceu.assembler("canister_new")
       .itemInputs("8x gtceu:steel_ingot", "minecraft:bone")
       .itemOutputs("bhc:canister")
       .duration(100).EUt(7)

     e.recipes.gtceu.assembler("empty_spool_new")
     .itemInputs("4x gtceu:steel_plate", "minecraft:iron_nugget")
     .itemOutputs("32x createaddition:spool")
     .duration(100).EUt(7)

     e.recipes.gtceu.assembler("thermal_normal_frame")
     .itemInputs("4x gtceu:steel_ingot", "#gtceu:circuits/lv", "4x #forge:glass")
     .itemOutputs("thermal:machine_frame")
     .inputFluids([Fluid.of("gtceu:tin", 144)])
     .duration(200).EUt(14)

     e.recipes.gtceu.assembler("copper_spool_new")
     .itemInputs("createaddition:spool", "4x createaddition:copper_wire")
     .itemOutputs("createaddition:copper_spool")
     .duration(100).EUt(7)

     e.recipes.gtceu.assembler("electrum_spool_new")
     .itemInputs("createaddition:spool", "4x createaddition:electrum_wire")
     .itemOutputs("createaddition:electrum_spool")
     .duration(100).EUt(7)

     e.recipes.gtceu.assembler("gold_spool_new")
     .itemInputs("createaddition:spool", "4x createaddition:gold_wire")
     .itemOutputs("createaddition:gold_spool")
     .duration(100).EUt(7)

     e.recipes.gtceu.wiremill("gold_wire_new")
     .itemInputs("create:golden_sheet")
     .itemOutputs("2x createaddition:gold_wire")
     .duration(100).EUt(7)

     e.recipes.gtceu.wiremill("iron_wire_new")
     .itemInputs("create:iron_sheet")
     .itemOutputs("2x createaddition:iron_wire")
     .duration(100).EUt(7)

     e.recipes.gtceu.wiremill("copper_wire_new")
     .itemInputs("create:copper_sheet")
     .itemOutputs("2x createaddition:copper_wire")
     .duration(100).EUt(7)

     e.recipes.gtceu.wiremill("electrum_wire_new")
     .itemInputs("gtceu:electrum_plate")
     .itemOutputs("2x createaddition:electrum_wire")
     .duration(100).EUt(7)

})

