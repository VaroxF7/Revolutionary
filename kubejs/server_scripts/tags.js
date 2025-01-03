ServerEvents.tags('fluid', securite => {
    securite.remove('minecraft:water',[
      'ad_astra:oil','ad_astra:flowing_oil',
      'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
      'ad_astra:fuel','ad_astra:flowing_fuel',
      'createaddition:flowing_seed_oil','createaddition:seed_oil',
      'createaddition:bioethanol','createaddition:flowing_bioethanol'])
})

ServerEvents.tags("fluid", event => {
  event.removeAllTagsFrom('ad_astra:fuel')
  event.removeAllTagsFrom('ad_astra:cryo_fuel')

  event.removeAll('ad_astra:fuel')
  event.removeAll('ad_astra:cryo_fuel')
  event.removeAll('ad_astra:tier_1_rover_fuel')
  event.removeAll('ad_astra:tier_1_rocket_fuel')
  event.removeAll('ad_astra:tier_2_rocket_fuel')
  event.removeAll('ad_astra:tier_3_rocket_fuel')
  event.removeAll('ad_astra:tier_4_rocket_fuel')

/*
  event.remove('ad_astra:fuel', 'createdieselgenerators:biodiesel')
  event.remove('ad_astra:fuel', 'createdieselgenerators:diesel')
  event.remove('ad_astra:fuel', 'immersdiveengineering:biodiesel')
  event.remove('ad_astra:fuel', 'thermal:refined_fuel')
  event.remove('ad_astra:fuel', 'gtceu:diesel')
  event.remove('ad_astra:fuel', 'createaddition:bioethanol')
*/

  event.add("ad_astra:tier_1_rocket_fuel", "gtceu:rocket_refined_fuel")
  event.add("ad_astra:tier_2_rocket_fuel", "gtceu:rocket_fuel")
  event.add("forge:seed_oil", "createaddition:seed_oil")

  event.remove("forge:molten_iron", "tconstruct:molten_iron")
  event.add("forge:iron", "tconstruct:molten_iron")

  event.remove("forge:molten_steel", "tconstruct:molten_steel")
  event.add("forge:steel", "tconstruct:molten_steel")

  event.remove("forge:molten_glass", "tconstruct:molten_glass")
  event.add("forge:glass", "tconstruct:molten_glass")

  event.remove("forge:molten_obsidian", "tconstruct:molten_obsidian")
  event.add("forge:obsidian", "tconstruct:molten_obsidian")

  event.remove("forge:molten_diamond", "tconstruct:molten_diamond")
  event.add("forge:diamond", "tconstruct:molten_diamond")

  event.remove("forge:molten_iron", "tconstruct:molten_iron")
  event.add("forge:iron", "tconstruct:molten_iron")

  event.remove("forge:molten_gold", "tconstruct:molten_gold")
  event.add("forge:gold", "tconstruct:molten_gold")

  event.remove("forge:molten_copper", "tconstruct:molten_copper")
  event.add("forge:copper", "tconstruct:molten_copper")

  event.remove("forge:molten_cobalt", "tconstruct:molten_cobalt")
  event.add("forge:cobalt", "tconstruct:molten_cobalt")

  event.remove("forge:molten_rose_gold", "tconstruct:molten_rose_gold")
  event.add("forge:rose_gold", "tconstruct:molten_rose_gold")

  event.remove("forge:molten_netherite", "tconstruct:molten_netherite")
  event.add("forge:netherite", "tconstruct:molten_netherite")

  event.remove("forge:molten_tin", "tconstruct:molten_tin")
  event.add("forge:tin", "tconstruct:molten_tin")

  event.remove("forge:molten_lead", "tconstruct:molten_lead")
  event.add("forge:lead", "tconstruct:molten_lead")

  event.remove("forge:molten_silver", "tconstruct:molten_silver")
  event.add("forge:silver", "tconstruct:molten_silver")

  event.remove("forge:molten_nickel", "tconstruct:molten_nickel")
  event.add("forge:nickel", "tconstruct:molten_nickel")

  event.remove("forge:molten_zinc", "tconstruct:molten_zinc")
  event.add("forge:zinc", "tconstruct:molten_zinc")

  event.remove("forge:molten_platinum", "tconstruct:molten_platinum")
  event.add("forge:platinum", "tconstruct:molten_platinum")

  event.remove("forge:molten_tungsten", "tconstruct:molten_tungsten")
  event.add("forge:tungsten", "tconstruct:molten_tungsten")

  event.remove("forge:molten_osmium", "tconstruct:molten_osmium")
  event.add("forge:osmium", "tconstruct:molten_osmium")

  event.remove("forge:molten_uranium", "tconstruct:molten_uranium")
  event.add("forge:uranium", "tconstruct:molten_uranium")

  event.remove("forge:molten_bronze", "tconstruct:molten_bronze")
  event.add("forge:bronze", "tconstruct:molten_bronze")

  event.remove("forge:molten_brass", "tconstruct:molten_brass")
  event.add("forge:brass", "tconstruct:molten_brass")

  event.remove("forge:molten_electrum", "tconstruct:molten_electrum")
  event.add("forge:electrum", "tconstruct:molten_electrum")

  event.remove("forge:molten_invar", "tconstruct:molten_invar")
  event.add("forge:invar", "tconstruct:molten_invar")

  event.remove("forge:molten_constantan", "tconstruct:molten_constantan")
  event.add("forge:constantan", "tconstruct:molten_constantan")

})

ServerEvents.tags('worldgen/biome', event => {
  event.add('ae2:has_meteorites','ad_astra:lunar_wastelands')
})

