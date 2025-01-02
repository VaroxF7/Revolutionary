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

})

ServerEvents.tags('worldgen/biome', event => {
  event.add('ae2:has_meteorites','ad_astra:lunar_wastelands')
})

