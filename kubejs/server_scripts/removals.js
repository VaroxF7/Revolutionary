// ID 
ServerEvents.recipes(e => {
     const toRemoveId = [
       'createaddition:crafting/electrum_ingot',''
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

