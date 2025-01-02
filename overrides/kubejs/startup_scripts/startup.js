Platform.mods.kubejs.name = 'Secu Labs'
Platform.mods.gtceu.name = 'Eden Tech.'


StartupEvents.registry('item', e => {
    e.create("kelp_fiber").displayName("Kelp Fiber")
    e.create("andesite_compound").displayName("Andesite Compound")
    e.create("early_electronic_circuit").displayName("Rusty Electronic Circuit")
    e.create("raw_rubber_ingot_kube").displayName("Impure Rubber Ingot")
    e.create("rubber_ingot_kube").displayName("Cured Rubber Ingot")
    e.create("energized_pin").displayName("Energized Electrum Pin")
    e.create("rusty_chip").displayName("Rusty Electronical Chip")
    e.create("mysterious_mechanism").displayName("Mysterious Mechanism")

    e.create("compressed_plant_ball").displayName("Compressed Plant Ball")
    e.create("purified_biomass_pallet").displayName("Purified Biomass")
    e.create("silicon_chunk").displayName("Inpure Silicon Chunk")
    e.create("shimmer_dust").displayName("Shimmer Dust")

})

StartupEvents.registry('fluid', e => {
    e.create("molten_copper_kube").displayName("Molten Copper").tag("forge:copper")
    e.create("molten_brass_kube").displayName("Molten Brass").tag("forge:brass")
    e.create("molten_steel_kube").displayName("Molten Steel").tag("forge:steel")

    e.create("latex").displayName("Liquid Latex")
    e.create("rose_silver").displayName("Rose Silver")
    e.create("refined_biofuel").displayName("Refined Biofuel")
    e.create("clean_fluix").displayName("Clean Fluix")
    e.create("liquid_fluix").displayName("Liquid Fluix Slurry")
    e.create("kelp_sediment").displayName("Kelp Sediment")

    e.create("shimmer")
    .displayName('Shimmer')
    //.stillTexture('')
    //.flowingTexture('')

})



GTCEuStartupEvents.registry('gtceu:material', event => {
    
    event.create('soul')
    .fluid()
    .color(0x320736) // CHANGE FIO
})
