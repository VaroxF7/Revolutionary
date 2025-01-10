JEIEvents.hideItems(event => {
     event.hide([
       /ae2:facade/,
       /integrateddynamics:mechanical_squeezer/,
       /integrateddynamics:squeezer/,
       'ae2:certus_quartz_crystal',
       'ae2:certus_quartz_dust',
       'gtceu:lp_steam_solid_boiler',
       'gtceu:hp_steam_solid_boiler',
       'gtceu:lp_steam_liquid_boiler',
       'gtceu:hp_steam_liquid_boiler',
       'gtceu:lp_steam_solar_boiler',
       'gtceu:hp_steam_solar_boiler',
       'gtceu:lp_steam_extractor',
       'gtceu:hp_steam_extractor',
       'gtceu:lp_steam_macerator',
       'gtceu:hp_steam_macerator',
       'gtceu:lp_steam_compressor',
       'gtceu:hp_steam_compressor',
       'gtceu:lp_steam_forge_hammer',
       'gtceu:hp_steam_forge_hammer',
       'gtceu:hp_steam_furnace',
       'gtceu:lp_steam_furnace',
       'gtceu:lp_steam_alloy_smelter',
       'gtceu:hp_steam_alloy_smelter',
       'gtceu:lp_steam_rock_crusher',
       'gtceu:hp_steam_rock_crusher',
       'gtceu:steam_miner',
       'thermal:machine_insolator',
       'gtceu:primitive_pump',
       'gtceu:pump_hatch',
       'immersiveengineering:raw_aluminum',
       'immersiveengineering:raw_uranium',
       'immersiveengineering:ingot_aluminum',
       'immersiveengineering:nugget_aluminum',
       'immersiveengineering:plate_aluminum',
       'immersiveengineering:dust_aluminum',
       'immersiveengineering:ore_aluminum',
       'immersiveengineering:deepslate_ore_aluminum',
       'immersiveengineering:raw_block_aluminum',
       'immersiveengineering:ore_uranium',
       'immersiveengineering:deepslate_ore_uranium',
       'immersiveengineering:raw_block_uranium',
       'immersiveengineering:ingot_uranium',
       'immersiveengineering:nugget_uranium',
       'immersiveengineering:plate_uranium',
       'immersiveengineering:dust_uranium',
       'immersiveengineering:slab_storage_uranium'
     ])
   })


JEIEvents.hideItems(event => {
     event.hide([
       'powah:magmator_starter',
       'powah:magmator_basic',
       'powah:magmator_hardened',
       'powah:magmator_blazing',
       'powah:magmator_spirited',
       'powah:magmator_niotic',
       'powah:magmator_nitro',
       'powah:thermo_generator_starter',
       'powah:thermo_generator_basic',
       'powah:thermo_generator_hardened',
       'powah:thermo_generator_blazing',
       'powah:thermo_generator_niotic',
       'powah:thermo_generator_nitro',
       'powah:thermo_generator_spirited',
       'powah:furnator_starter',
       'powah:furnator_basic',
       'powah:furnator_hardened',
       'powah:furnator_blazing',
       'powah:furnator_niotic',
       'powah:furnator_nitro',
       'powah:furnator_spirited',
       'ae2:inscriber',
       'expatternprovider:ex_inscriber',
       'enderio:rocket_fuel_bucket',
       'gtceu:steam_grinder',
       'gceu:steam_oven'
     ])
})

JEIEvents.hideFluids(event =>  {
  event.hide("enderio:rocket_fuel")
})

JEIEvents.removeCategories(event =>  {
  event.remove("jei:information")
})



