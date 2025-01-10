ServerEvents.tags('fluid', event => {
    event.add("forge:steel", "createbigcannons:molten_steel")
})

ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('ad_astra:has_structure/meteor_biomes')
    event.removeAll('ad_astra:has_structure/oil_well_biomes')
})