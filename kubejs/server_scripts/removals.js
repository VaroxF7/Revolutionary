// ID 
ServerEvents.recipes(e => {
     const toRemoveId = [
       'gtceu:centrifuge/centrifuge_platinum_dirty_dust_to_dust', 'gtceu:packer/package_platinum_tiny_dust',
       'gtceu:centrifuge/centrifuge_platinum_pure_dust_to_dust', 'gtceu:packer/package_platinum_small_dust',
       'gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore', 'gtceu:forge_hammer/hammer_platinum_refined_ore_to_dust',
       'gtceu:electrolyzer/decomposition_electrolyzing_cooperite', 'immersiveengineering:crusher/raw_ore_platinum',
       'gtceu:electrolyzer/raw_platinum_separation', 'immersiveengineering:crusher/raw_ore_platinum',
       'gtceu:macerator/macerate_nickel_refined_ore_to_dust', 'immersiveengineering:crusher/ingot_platinum',
       'gtceu:macerator/macerate_platinum_refined_ore_to_dust', 'immersiveengineering:crusher/raw_block_platinum',
       'gtceu:ore_washer/wash_platinum_dirty_dust_to_dust', 'immersiveengineering:crusher/ore_nickel',
       'gtceu:ore_washer/wash_platinum_pure_dust_to_dust', 'immersiveengineering:crusher/ore_platinum',
       'immersiveengineering:crafting/raw_hammercrushing_platinum', 'immersiveengineering:crafting/hammercrushing_platinum',
       'gtceu:shapeless/centrifuged_ore_to_dust_platinum', 'gtceu:centrifuge/pgs_separation',
       'gtceu:centrifuge/endstone_separation', 'gtceu:smelting/smelt_deepslate_platinum_ore_to_ingot',
       'gtceu:smelting/smelt_deepslate_platinum_ore_to_ingot', 'gtceu:smelting/smelt_raw_platinum_ore_to_ingot',
       'gtceu:smelting/smelt_raw_platinum_ore_to_ingot', 'gtceu:smelting/smelt_platinum_ore_to_ingot',
       'gtceu:smelting/smelt_netherrack_platinum_ore_to_ingot', 'gtceu:smelting/smelt_endstone_platinum_ore_to_ingot',
       'gtceu:smelting/smelt_impure_dust_platinum_to_ingot', 'gtceu:smelting/smelt_purified_ore_platinum_to_ingot',
       'gtceu:smelting/smelt_refined_ore_platinum_to_ingot', 'gtceu:smelting/smelt_pure_dust_platinum_to_ingot',
       'gtceu:smelting/dust_platinum__demagnetize_from_dust', 'gtceu:smelting/smelt_crushed_ore_platinum_to_ingot',
       'gtceu:blasting/smelt_deepslate_platinum_ore_to_ingot', 'gtceu:blasting/smelt_raw_platinum_ore_to_ingot',
       'gtceu:blasting/smelt_platinum_ore_to_ingot', 'gtceu:blasting/smelt_platinum_ore_to_ingot', 
       'gtceu:blasting/smelt_netherrack_platinum_ore_to_ingot', 'gtceu:blasting/smelt_endstone_platinum_ore_to_ingot',
       'gtceu:centrifuge/pgs_separation', 'thermal:smelting/glowstone_dust_from_spores_smelting', 
       'thermal:smelting/slime_ball_from_spores_smelting', 'thermal:smelting/gunpowder_from_spores_smelting',
       'thermal:smelting/redstone_from_spores_smelting', 'gtceu:fluid_solidifier/solidify_silicon_to_ingot',
       'gtceu:smelting/smelt_raw_captinium_ore_to_ingot','gtceu:shapeless/purified_ore_to_dust_captinium',
       'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot', 'gtceu:shaped/paper', 'integrateddynamics:special/facade',
       'gtceu:electrolyzer/decomposition_electrolyzing_clay', 'thermal:machines/press/packing2x2/press_cured_rubber_packing',
       'gtceu:large_chemical_reactor/radon_from_uranium_238',
       'enderio:sag_milling/redstone_ore', 'enderio:sag_milling/clay', 'enderio:sag_milling/sand', 'gtceu:shaped/rubber_ring',
       'gtceu:vacuum_freezer/cool_hot_titanium_ingot','gtceu:vacuum_freezer/cool_hot_titanium_ingot',
       'gtceu:blasting/smelt_raw_captinium_ore_to_ingot','gtceu:compressor/compress_captiniumto_ore_block','gtceu:macerator/macerate_raw_captinium_ore_to_crushed_ore',
       'gtceu:shapeless/crushed_ore_to_dust_captinium','gtceu:forge_hammer/hammer_captinium_crushed_ore_to_impure_dust','gtceu:macerator/macerate_captinium_crushed_ore_to_impure_dust',
       'gtceu:shaped/small_gear_steel', 'gtceu:shaped/electric_motor_lv_steel', 'gtceu:shaped/electric_motor_lv_iron',
       'gtceu:assembler/power_thruster', 'gtceu:centrifuge/centrifuge_palladium_pure_dust_to_dust','gtceu:thermal_centrifuge/centrifuge_captinium_crushed_ore_to_refined_ore',
       'gtceu:centrifuge/centrifuge_palladium_dirty_dust_to_dust','gtceu:chemical_bath/bathe_platinum_crushed_ore_to_purified_ore',
       'gtceu:chemical_bath/bathe_cooperite_crushed_ore_to_purified_ore','gtceu:chemical_reactor/raw_palladium_separation',
       'gtceu:ore_washer/wash_captinium_crushed_ore_to_purified_ore','gtceu:ore_washer/wash_captinium_crushed_ore_to_purified_ore_distilled',
       'gtceu:forge_hammer/hammer_palladium_refined_ore_to_dust', 'gtceu:large_chemical_reactor/raw_palladium_separation',
       'gtceu:forge_hammer/hammer_captinium_crushed_ore_to_dust','gtceu:macerator/macerate_captinium_crushed_ore_to_dust',
       'gtceu:macerator/macerate_palladium_crushed_ore_to_impure_dust', 'gtceu:macerator/macerate_palladium_ore_to_raw_ore', 
       'gtceu:macerator/macerate_deepslate_palladium_ore_to_raw_ore', 'gtceu:macerator/macerate_endstone_palladium_ore_to_raw_ore', 
       'gtceu:macerator/macerate_netherrack_palladium_ore_to_raw_ore', 'gtceu:ore_washer/wash_palladium_pure_dust_to_dust', 
       'gtceu:ore_washer/wash_palladium_crushed_ore_to_purified_ore_distilled', 'gtceu:ore_washer/wash_palladium_crushed_ore_to_purified_ore_distilled', 
       'gtceu:ore_washer/wash_palladium_crushed_ore_to_purified_ore', 'gtceu:ore_washer/wash_palladium_dirty_dust_to_dust',
       'gtceu:packer/package_palladium_small_dust', 'gtceu:packer/package_palladium_tiny_dust', 'gtceu:thermal_centrifuge/centrifuge_palladium_purified_ore_to_refined_ore', 
       'gtceu:thermal_centrifuge/centrifuge_palladium_crushed_ore_to_refined_ore', 'gtceu:macerator/macerate_palladium_crushed_ore_to_dust', 
       'gtceu:forge_hammer/hammer_raw_palladium_to_crushed_ore', 'gtceu:forge_hammer/hammer_palladium_ore_to_raw_ore', 
       'gtceu:macerator/macerate_palladium_refined_ore_to_dust', 'gtceu:shaped/conveyor_module_mv_styrene_butadiene_rubber',
       'gtceu:shaped/conveyor_module_mv_silicone_rubber', 'gtceu:shaped/conveyor_module_mv_rubber', 'gtceu:shaped/electric_pump_mv_rubber',
       'gtceu:shaped/electric_piston_mv', 'gtceu:shaped/electric_pump_mv_silicone_rubber', 'gtceu:shaped/electric_pump_mv_styrene_butadiene_rubber',
       'gtceu:shaped/robot_arm_mv', 'gtceu:compressor/certus_quartz_plate', 'create:crushing/tuff_recycling', 'thermal:compat/create/pulverizer_create_tuff',
       'thermal:compat/create/pulverizer_create_tuff_recycle', 'create:compat/ae2/milling/sky_stone_block', 'botania:mana_infusion/manasteel',
       'botania:mana_pool', 'mysticalagriculture:essence/botania/manasteel_ingot', 'gtceu:shaped/solar_panel_basic', 'megacells:network/mega_pattern_provider',
       'megacells:network/mega_interface', 'megacells:crafting/mega_crafting_monitor', 'megacells:crafting/64m_crafting_storage', 
       'megacells:crafting/256m_crafting_storage', 'megacells:crafting/16m_crafting_storage', 'megacells:crafting/4m_crafting_storage', 
       'megacells:crafting/1m_crafting_storage', 'megacells:crafting/mega_crafting_accelerator', 'megacells:crafting/mega_crafting_unit',
       'megacells:crafting/mega_energy_cell', 'megacells:cells/cell_component_1m', 'megacells:cells/cell_component_4m',
       'megacells:cells/cell_component_16m', 'megacells:cells/cell_component_256m', 'megacells:cells/cell_component_64m',
       'mysticalagriculture:essence/common/constantan_ingot', 'mysticalagriculture:essence/common/invar_ingot', 'create_sa:magma_cream_recipe',
       'gtceu:smelting/sticky_resin_from_slime', 'gtceu:assembler/superconducting_coil_uv', 'gtceu:assembler/superconducting_coil_luv',
       'gtceu:extractor/extract_pulsating_titanium_electrum_alloy_dust', 'gtceu:circuit_assembler/mainframe_iv_asmd', 
       'gtceu:circuit_assembler/mainframe_iv_soldering_alloy',
       'gtceu:circuit_assembler/mainframe_iv_asmd_soldering_alloy','gtceu:circuit_assembler/mainframe_iv', 
       'gtceu:extractor/extract_titanium_electrum_alloy_dust', 'gtceu:extruder/extrude_pulsating_titanium_electrum_alloy_to_rod',
       'enderio:alloy_smelting/pulsating_alloy_ingot', 'gtceu:circuit_assembler/nano_mainframe_luv', 'gtceu:circuit_assembler/nano_mainframe_luv_asmd',
       'gtceu:circuit_assembler/nano_mainframe_luv_soldering_alloy', 'gtceu:circuit_assembler/nano_mainframe_luv_asmd_soldering_alloy',
       'ae2:network/blocks/quantum_link', 'create:mixing/andesite_alloy_from_zinc', 'create:mixing/andesite_alloy', 
       'thermal:compat/create/smelter_create_alloy_andesite_alloy', 'create:crafting/materials/andesite_alloy', 
       'create:crafting/materials/andesite_alloy_from_zinc', 'aeinfinitybooster:infinity_card', 'aeinfinitybooster:dimension_card',
       'ad_astra:recipes/launch_pad', 'bhc:canister', 'createaddition:crafting/copper_spool', 'createaddition:crafting/electrum_spool', 
       'createaddition:crafting/gold_spool', 'thermal:machine_frame', 'gtceu:ore_washer/wash_palladium_crushed_ore_to_purified_ore_fast', 
       'gtceu:macerator/macerate_raw_palladium_ore_to_crushed_ore', 'gtceu:forge_hammer/hammer_palladium_crushed_ore_to_dust', 
       'gtceu:shapeless/purified_ore_to_dust_palladium', 'gtceu:create_mixer/tungstencarbide', 'gtceu:mixer/tungstencarbide', 
       'gtceu:centrifuge/centrifuge_neodymium_dirty_dust_to_dust', 'gtceu:centrifuge/centrifuge_bastnasite_pure_dust_to_dust', 
       'gtceu:centrifuge/centrifuge_neodymium_pure_dust_to_dust', 'gtceu:centrifuge/centrifuge_redstone_pure_dust_to_dust', 
       'gtceu:electrolyzer/decomposition_electrolyzing_monazite', 'gtceu:macerator/macerate_neodymium_refined_ore_to_dust', 
       'gtceu:macerator/macerate_deepslate_neodymium_ore_to_raw_ore', 'gtceu:macerator/macerate_endstone_neodymium_ore_to_raw_ore',
       'gtceu:macerator/macerate_raw_neodymium_ore_to_crushed_ore', 'gtceu:macerator/macerate_neodymium_ore_to_raw_ore',
       'gtceu:macerator/macerate_bastnasite_crushed_ore_to_dust', 'gtceu:macerator/macerate_neodymium_crushed_ore_to_impure_dust', 
       'gtceu:macerator/macerate_monazite_refined_ore_to_dust', 'gtceu:macerator/macerate_redstone_crushed_ore_to_dust',
       'gtceu:macerator/macerate_netherrack_neodymium_ore_to_raw_ore', 'gtceu:macerator/macerate_bastnasite_refined_ore_to_dust', 
       'gtceu:macerator/macerate_bastnasite_refined_ore_to_dust', 'gtceu:macerator/macerate_neodymium_crushed_ore_to_dust',
       'gtceu:ore_washer/wash_neodymium_crushed_ore_to_purified_ore_distilled', 'gtceu:ore_washer/wash_neodymium_crushed_ore_to_purified_ore',
       'gtceu:thermal_centrifuge/centrifuge_redstone_purified_ore_to_refined_ore', 'gtceu:thermal_centrifuge/centrifuge_bastnasite_crushed_ore_to_refined_ore',
       'gtceu:thermal_centrifuge/centrifuge_redstone_crushed_ore_to_refined_ore', 'gtceu:thermal_centrifuge/centrifuge_neodymium_crushed_ore_to_refined_ore',
       'gtceu:thermal_centrifuge/centrifuge_neodymium_purified_ore_to_refined_ore', 'gtceu:thermal_centrifuge/centrifuge_bastnasite_purified_ore_to_refined_ore',
       'gtceu:alloy_blast_smelter/red_alloy', 'gtceu:extractor/extract_red_alloy_dust', 'enderio:alloy_smelting/dark_steel_ingot', 'enderio:alloy_smelting/soularium_ingot', 
       'enderio:alloy_smelting/end_steel_ingot', 'enderio:alloy_smelting/conductive_alloy_ingot', 'enderio:alloy_smelting/vibrant_alloy_ingot', 
       'enderio:alloy_smelting/energetic_alloy_ingot','gtceu:shapeless/fluid_jetpack_clear', 'gtceu:shaped/electric_jetpack', 'gtceu:shaped/electric_jetpack_advanced',
       'enderio:alloy_smelting/copper_alloy_ingot', 'enderio:alloy_smelting/redstone_alloy_ingot', 'create_sa:brass_jetpack_recipe', 'create_sa:andesite_jetpack_recipe', 
       'create_sa:copper_propeler_recipe', 'gtceu:shaped/fluid_jetpack', 'create:potions', 'gtceu:electric_blast_furnace/silicon_boule', 'gtceu:chemical_reactor/ammonia_from_elements',
       'gtceu:shaped/steam_grinder', 'gtceu:shaped/steam_oven', 'gtceu:shaped/large_bronze_boiler', 'ad_astra:launch_pad', 'gtceu:large_chemical_reactor/nano_cpu_wafer',
       'createaddition:mixing/bioethanol', 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals', 'immersiveengineering:blastfurnace/steel', 
       'createaddition:pressing/steel_ingot','immersiveengineering:crafting/plate_steel_hammering','ad_astra:compressing/steel_plate_from_compressing_steel_blocks','ad_astra:compressing/steel_plate_from_compressing_steel_ingots',
       'thermal:compat/immersiveengineering/press_ie_steel_ingot_to_plate','immersiveengineering:metalpress/plate_steel','ae2:blasting/silicon_from_certus_quartz_dust',
       'immersiveengineering:blastfurnace/steel_block','gtceu:laser_engraver/engrave_lapis_flawless_gem_to_gem','gtceu:autoclave/carbon_fibers_epoxy', 
       'gtceu:autoclave/carbon_fibers_polyethylene','gtceu:autoclave/carbon_fibers_ptfe','gtceu:autoclave/carbon_fibers_pbi','gtceu:packer/unpackage_captinium_small_dust',
       'gtceu:packer/unpackage_captinium_tiny_dust'
     ];
     toRemoveId.forEach(element => {
     e.remove({ id: element});
     })
})

// OUT
ServerEvents.recipes(e => {
     const toRemoveOutput = [
          'powah:magmator_starter','powah:magmator_basic','powah:magmator_hardened','powah:magmator_blazing','powah:magmator_nitro',
          'powah:magmator_niotic','powah:magmator_spirited','powah:thermo_generator_starter','powah:thermo_generator_basic','powah:thermo_generator_blazing',
          'powah:thermo_generator_niotic','powah:thermo_generator_nitro','powah:thermo_generator_hardened','powah:thermo_generator_spirited','powah:furnator_starter',
          'powah:furnator_basic','powah:furnator_hardened','powah:furnator_niotic','powah:furnator_blazing','powah:furnator_nitro',
          'powah:furnator_spirited','powah:dielectric_paste','gtceu:lp_steam_solid_boiler','gtceu:hp_steam_solid_boiler','gtceu:hp_steam_liquid_boiler',
          'gtceu:lp_steam_solar_boiler','gtceuhp_steam_solar_boiler','gtceu:lp_steam_extractor','gtceu:hp_steam_extractor',
          'gtceu:lp_steam_macerator','gtceu:hp_steam_macerator','gtceu:lp_steam_compressor','gtceu:hp_steam_compressor','gtceu:lp_steam_forge_hammer',
          'gtceu:hp_steam_forge_hammer','gtceu:lp_steam_furnace','gtceu:hp_steam_furnace','gtceu:lp_steam_alloy_smelter',
          'gtceu:hp_steam_alloy_smelter','gtceu:lp_steam_rock_crusher','gtceu:hp_steam_rock_crusher','gtceu:steam_miner','gtceu:primitive_pump',
          'gtceu:quartz_sand_dust','expatternprovider:ex_inscriber','ae2:inscriber','gtceu:vacuum_freezer','ae2:controller',
          'ae2:certus_quartz_crystal','ae2:charged_certus_quartz_crystal','ae2:certus_quartz_dust','ae2:blank_pattern',
          'ae2:drive','ae2:controller','ae2:fluix_crystal', 'powah:capacitor_basic', 'powah:reactor_starter',
          'create:electron_tube', 'gtceu:vacuum_tube', 'ae2:cell_component_1k', 'ae2:cell_component_4k', 'ae2:cell_component_16k', 
          'ae2:cell_component_64k', 'ae2:cell_component_256k', 'ae2:interface', 'ae2:pattern_provider', 'ae2:molecular_assembler', 'ae2:annihilation_core',
          'ae2:formation_core', 'ae2:fluix_dust', 'ae2:fluix_crystal', 'fluxnetworks:flux_dust', 'ae2:silicon', 'ae2:fluix_glass_cable', 
          'powah:photoelectric_pane', 'powah:solar_panel_starter', 'powah:steel_energized', 'mysticalagriculture:infusion_altar', 
          'mysticalagriculture:infusion_pedestal', 'create:blaze_cake_base', 'gtceu:glass_tube', 'create:precision_mechanism'
     ];
     toRemoveOutput.forEach(element => {
     e.remove({ output: element});
     })
})

// Type
ServerEvents.recipes(e => {
     const toRemoveType = [
     'integrateddynamics:mechanical_squeezer','gtceu:lp_steam_solid_boiler','gtceu:hp_steam_solid_boiler',
     'gtceu:hp_steam_liquid_boiler','gtceu:lp_steam_solar_boiler','gtceu:hp_steam_solar_boiler',
     'gtceu:lp_steam_extractor','gtceu:hp_steam_extractor','gtceu:lp_steam_macerator',
     'gtceu:hp_steam_macerator','gtceu:lp_steam_compressor','gtceu:hp_steam_compressor',
     'gtceu:lp_steam_forge_hammer','gtceu:hp_steam_forge_hammer','gtceu:lp_steam_furnace', 
     'gtceu:hp_steam_furnace', 'gtceu:lp_steam_alloy_smelter','gtceu:hp_steam_alloy_smelter', 
     'gtceu:lp_steam_rock_crusher', 'gtceu:hp_steam_rock_crusher', 'gtceu:steam_miner', 
     'gtceu:primitive_pump', 'ae2:inscriber', 'expatternprovider:ex_inscriber', 'thermal:insolator' 
     ];
     toRemoveType.forEach(element => {
     e.remove({ type: element});
     })
})

ServerEvents.recipes(e => {
e.remove({ id: 'gtceu:shaped/conveyor_module_lv_styrene_butadiene_rubber'})
e.remove({ id: 'gtceu:shaped/conveyor_module_lv_silicone_rubber'})
e.remove({ id: 'gtceu:shaped/conveyor_module_lv_rubber'})
e.remove({ id: 'gtceu:shaped/electric_pump_lv_rubber'})
e.remove({ id: 'gtceu:shaped/electric_piston_lv'})
e.remove({ id: 'gtceu:shaped/electric_pump_lv_silicone_rubber'})
e.remove({ id: 'gtceu:shaped/electric_pump_lv_styrene_butadiene_rubber'})
e.remove({ id: 'gtceu:shaped/robot_arm_lv'})
e.remove({ id: 'kubejs:large_chemical_reactor/seed_oil_chemicalr_recipe'})

e.remove({ mod: "mysticalagriculture"})
e.remove({ mod: "draconicevolution"})

})

