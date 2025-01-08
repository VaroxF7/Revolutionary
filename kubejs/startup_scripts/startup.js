// Normal Startup KubeJS Items - Misc.
StartupEvents.registry('item', e => {
     e.create("energized_bolt").displayName("Energized Bolt")
     e.create("early_electronic_circuit").displayName("Early Electronic Circuit")
     e.create("rusty_chip").displayName("Rusty Chip")
     e.create("mys_mechanism").displayName("Mystical Electronic Mechanism")
     e.create("navigation_mechanism").displayName("Navigation Mechanism")
     e.create("clay_sheet").displayName("Clay Sheet")
     e.create("raw_nano_cpu_wafer").displayName("Raw Nano CPU Wafer") 
     e.create("carbon_vial").displayName("Captured Carbon Vial")
     e.create("compound_base").displayName("Compound Base")
     e.create("nether_star_mold").displayName("Nether Star Mold")
     e.create("reinforced_steel_beam").displayName("Reinforced Steel Beam")
     e.create("nano_mask").displayName("Nano Light Mask")
     e.create("kelp_fiber").displayName("Kelp Fiber")

     e.create("1k_component_wafer").displayName("1k Component Wafer")
     e.create("4k_component_wafer").displayName("4k Component Wafer")
     e.create("16k_component_wafer").displayName("16k Component Wafer")
     e.create("64k_component_wafer").displayName("64k Component Wafer")
     e.create("logic_processor_wafer").displayName("Logic Processor Wafer")
     e.create("calculation_processor_wafer").displayName("Calculation Processor Wafer")
     e.create("engineering_processor_wafer").displayName("Engineering Processor Wafer")

     // Biofuel Rework
     e.create("compressed_plant_ball").displayName("Compressed Plant Ball")
     e.create("purified_biomass_pallet").displayName("Purified Biomass")


})

// Quantum Mining Simulations
StartupEvents.registry('item', e => {
    e.create("miner_tier_1").displayName("Quantum Anchored Drone [T1]")
    e.create("miner_tier_2").displayName("Swift Quantum Anchored Drone [T2]")
    e.create("miner_tier_3").displayName("Advanced Quantum Anchored Drone [T3]")
    e.create("miner_tier_4").displayName("Elite Quantum Anchored Drone [T4]")

    e.create("mining_laser_mk1").displayName("Mining Laser [T1]")
    e.create("navigation_computer").displayName("Navigation Computer [T1]")
    e.create("fluxium").displayName("Fluxium")

    /*
     e.create("adv_guide_system").displayName("Advanced Guidance System")
     e.create("adv_mining_laser").displayName("Advanced Mining Operation Laser")
     e.create("miner_skeleton_mk1").displayName("Miner Exo-Skeleton Mk1")
     e.create("miner_skeleton_mk2").displayName("Miner Exo-Skeleton Mk2")
     e.create("etched_skel_mk1").displayName("Etched Miner Exo-Skeleton Mk1")
     e.create("etched_skel_mk2").displayName("Etched Miner Exo-Skeleton Mk2")
    */
})

//GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {
//    GTMaterials.Galena.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Diamond)
//})
//

 StartupEvents.registry('block', e => {
    e.create("block_dust").displayName("Block of Dust")
    e.create("dense_redstone_ore").displayName("Dense Redstone Ore")
    e.create("dense_iron_ore").displayName("Dense Iron Ore")
    e.create("dense_nickel_ore").displayName("Dense Nickel Ore")
    e.create("dense_cas_ore").displayName("Dense Cassiterite Ore")
    e.create("dense_ilmenite_ore").displayName("Dense Ilmenite Ore")
    e.create("dense_bauxite_ore").displayName("Dense Bauxite Ore")
    e.create("dense_tung_ore").displayName("Dense Tungstate Ore")
    e.create("dense_spha_ore").displayName("Dense Sphalerite Ore")

    e.create("multi_verse_casing").displayName("Block of Casing")
    e.create("casing_litho").displayName("Block of Casing")
    e.create("casing_advanced_litho").displayName("Block of Casing")
/*
    e.create('multi_verse_casing', 'gtceu:renderer')
    .hardness(11)
    .resistance(2)
    .lightLevel(0)
    .soundType(SoundType.NETHERITE_BLOCK)
    .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing_multi') })

        e.create('casing_litho', 'gtceu:renderer')
        .hardness(11)
        .resistance(2)
        .lightLevel(0)
        .soundType(SoundType.NETHERITE_BLOCK)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('kubejs', 'block/casings/casing_litho') })

            e.create('casing_advanced_litho', 'gtceu:renderer')
            .hardness(11)
            .resistance(2)
            .lightLevel(0)
            .soundType(SoundType.NETHERITE_BLOCK)
            .textureOverrideRenderer('minecraft:block/cube_all',
                { 'all': new ResourceLocation('kubejs', 'block/casings/casing_advanced_litho') })
*/
});

GTCEuStartupEvents.registry('gtceu:material', event => {
        event.create('slag')
        .fluid()
        .color(0x320736) 

        event.create('clean_fluix')
        .fluid()
        .color(0x320736) 

        event.create('liquid_fluix')
        .fluid()
        .color(0x320736) 

        event.create("dirty_crude")
        .fluid()
        .color(0x320736)

        event.create("puri_crude")
        .fluid()
        .color(0x320736)

        event.create("kelp_sediment")
        .fluid()
        .color(0x320736)

        event.create('liquid_sky_stone')
        .fluid()
        .color(0x320736)

        event.create('distilled_sky_solution')
        .fluid()
        .color(0x570C5E)

        event.create('refined_sky_stone')
        .fluid()
        .color(0x560F7D) 

        event.create("refined_biofuel")
        .fluid()
        .color(0xD3AA63) 

        event.create("liquid_computex_selection")
        .fluid()
        .color(0xD1CFC8)

        event.create("nether_wart_juice") 
        .fluid()
        .color(0xA42518)

        event.create("distilled_wart_juice") 
        .fluid()
        .color(0xA4252F)


        // Simulation Chambers
        event.create("dense_hydrogen") 
        .fluid()
        .color(0x0D4263) 

        event.create("ultra_dense_hydrogen") 
        .fluid()
        .color(0x38386D) 

        event.create("liquid_nether_star") 
        .fluid()
        .color(0xFBFCC4)

        event.create("rocket_refined_fuel") 
        .fluid().element(GTElements.get("rocket_fuel_mk1"))
        .color(0x99C1D6)
})
/*
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sky_stone')
    .ore()
    .element(GTElements.get('sky_stone'))
    .color(0x1F2120).iconSet(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('sky_stone', 133, 334, -1, null, '(Mg₃SiO4)', false)
})
*/







