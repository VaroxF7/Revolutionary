StartupEvents.registry('item', e => {
     e.create("miner_tier_1").displayName("Mining Drone [Tier One]")
     e.create("miner_tier_2").displayName("Mining Drone [Tier Two]")
     e.create("miner_tier_3").displayName("Mining Drone [Tier Three]")
     e.create("miner_tier_4").displayName("Mining Drone [Tier Four]")
     e.create("gem_sensor").displayName("Gem Location Sensor") // NW
     e.create("mining_laser_mk1").displayName("Basic Mining Laser")
     e.create("navigation_computer").displayName("Basic Navigation Computer")
     e.create("ultimate_sup_wire").displayName("Ultimate Superconductive Wire")// NW
     e.create("comp_star_plating").displayName("Compressed Stary Plating")// NW
     e.create("ultrathermal_condenced_battery_mat").displayName("Ultrathermal Condensed Battery Material")// NW
     e.create("fluxium").displayName("Fluxium")
     e.create("clay_sheet").displayName("Clay Sheet")
     e.create('prosperic_naquadic_crystal').displayName('Prosperic Naquadic Crystal')
     e.create("marian_crystal").displayName("Marian Crystal")
     e.create("raw_nano_cpu_wafer").displayName("Raw Nano CPU Wafer") 
     e.create("carbon_vial").displayName("Captured Carbon Vial")
     e.create("mana_wafer").displayName("Mana Silicon Wafer")
     e.create("mana_cpu_wafer").displayName("Manatic CPU Wafer")
     e.create("mana_ram_wafer").displayName("Manatic Ram Wafer")
     e.create("mana_soc_wafer").displayName("Manatic SoC Wafer")
     e.create("mana_ilc_wafer").displayName("Manatic ILC Wafer")
     e.create("mana_boule").displayName("Manatic Silicon Boule")
     e.create("mana_diode").displayName("Manatic Infused Diode").tag("gtceu:diodes")
     e.create("compound_base").displayName("Compound Base")
     e.create("nether_star_mold").displayName("Nether Star Mold")
     e.create("reinforced_steel_beam").displayName("Reinforced Steel Beam")
     e.create("rare_earth_2").displayName("B-72")
     e.create("ad_astra:moon").displayName("Moon")
     e.create("nano_mask").displayName("Nano Light Mask")
     e.create("monoway_crystal_1").displayName("M-C1")
     e.create("monoway_crystal_2").displayName("M-C2")
     e.create("monoway_crystal_3").displayName("M-C3")
     e.create("monoway_crystal_4").displayName("M-C4")
     e.create("radon_extract_dust").displayName("Radon Extract")
     e.create("solid_sapphire").displayName("Solidified Sapphire")
     e.create("solid_green_sapphire").displayName("Solidified Green Sapphire")
     e.create("solid_ruby").displayName("Solidified Ruby")
     e.create("pyrotheum").displayName("Pyrotheum Dust")
     e.create("cryotheum").displayName("Cryotheum Dust")
     e.create("captinium_pure_dust")
     e.create("kelp_fiber").displayName("Kelp Fiber")
    
     e.create("mana_cpu_chip").displayName("Manatic CPU Chip")
     e.create("mana_ram_chip").displayName("Manatic RAM Chip")
     e.create("mana_soc_chip").displayName("Manatic SoC Chip")
     e.create("mana_ilc_chip").displayName("Manatic ILC Chip")
     
     e.create("adv_guide_system").displayName("Advanced Guidance System")
     e.create("adv_mining_laser").displayName("Advanced Mining Operation Laser")
     e.create("miner_skeleton_mk1").displayName("Miner Exo-Skeleton Mk1")
     e.create("miner_skeleton_mk2").displayName("Miner Exo-Skeleton Mk2")
     e.create("etched_skel_mk1").displayName("Etched Miner Exo-Skeleton Mk1")
     e.create("etched_skel_mk2").displayName("Etched Miner Exo-Skeleton Mk2")

     e.create("1k_component_wafer").displayName("1k Component Wafer")
     e.create("4k_component_wafer").displayName("4k Component Wafer")
     e.create("16k_component_wafer").displayName("16k Component Wafer")
     e.create("64k_component_wafer").displayName("64k Component Wafer")
     e.create("logic_processor_wafer").displayName("Logic Processor Wafer")
     e.create("calculation_processor_wafer").displayName("Calculation Processor Wafer")
     e.create("engineering_processor_wafer").displayName("Engineering Processor Wafer")

     e.create("moon_chip").displayName("Moon Calculation Chip")
     e.create("mars_chip").displayName("Mars Calculation Chip")
     e.create("venus_chip").displayName("Venus Calculation Chip")
     e.create("ow_chip").displayName("Overworld Calculation Chip")
     e.create("desh_lens").displayName("Desh Engraved Lens")

     // Biofuel Rework
     e.create("compressed_plant_ball").displayName("Compressed Plant Ball")
     e.create("purified_biomass_pallet").displayName("Purified Biomass")


})

GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {
    GTMaterials.Galena.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Diamond)
})

Platform.mods.kubejs.name = 'SecuJS'
Platform.mods.gtceu.name = 'GregTech'

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

StartupEvents.registry('fluid', event => {
    event.create("high_octane_diesel_boosted_biofuel_gasoline").displayName("High Octane Diesel Boosted Biofuel Gasoline")
    .thickTexture(0x282725)
    .bucketColor(0x282725)

    event.create("raw_syn_oil").displayName("Raw Synthetic Oil")
    .thickTexture(0x784315)
    .bucketColor(0x784315)
    
    event.create("syn_oil").displayName("Crude Synthetic Oil")
    .thickTexture(0x282725)
    .bucketColor(0x282725)
    
    event.create("liquid_fluix").displayName("Liquid Fluix")
    .thickTexture(0x80128A)
    .bucketColor(0x80128A)

    event.create("clean_fluix").displayName("Distilled Clean Fluix")
    .thickTexture(0xC71EAC)
    .bucketColor(0xC71EAC)

})


GTCEuStartupEvents.registry('gtceu:material', event => {
    
        event.create('hydrox_fuel_1')
        .fluid()
        .color(0x320736)

        event.create('slag')
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

        //// MERCURY LINE

        event.create('mercury_air')
        .fluid()
        .color(0x7F0037) // change

        event.create('mercury_sulfate')
        .fluid()
        .color(0x960041) // change

        event.create('mercury_sulfate_solution')
        .fluid()
        .color(0xAD004B) // change

        //// VENUS LINE

        event.create('venus_air')
        .fluid()
        .color(0xAA210F) // change

        //// TITANIUM LINE

        event.create('fusion_titanium')
        .plasma()
        .color(0xFF00DC) // change

        event.create("uranium_enriched_ostrum")
        .fluid()
        .color(0x695D3E) // change
        
        event.create("ostrum")
        .fluid()
        .color(0x7F0037) 

        event.create("refined_biofuel")
        .fluid()
        .color(0xD3AA63) 

        event.create("heavy_water")
        .fluid()
        .color(0x16003F) 

        event.create("liquid_computex_selection")
        .fluid()
        .color(0xD1CFC8)

        event.create("cryotheum")
        .fluid()
        .color(0x46C7CE)

        event.create("sodium_chloride")
        .fluid()
        .color(0x4688CE)

        event.create("prosperic_acid") // myystical acid etc
        .fluid()
        .color(0x637FCC) 

        // rare air distillation 
        event.create("martian_air") 
        .fluid()
        .color(0xBA2518) 

        event.create("platinum_pulse") 
        .fluid()
        .color(0xFCF6D7)

        event.create("titanium_torrent") 
        .fluid()
        .color(0xC29CCE)

        event.create("martian_enithium") 
        .fluid()
        .color(0xA02C2C)

        event.create("redon_radiance") 
        .fluid()
        .color(0xDCC76E) 

        event.create("zenithal_zephyr") 
        .fluid()
        .color(0xDB6D46)

        event.create("redon_riplon")
        .fluid()
        .color(0x15D2D8)

        // moon distilaltion

        event.create("lunarian_air") 
        .fluid()
        .color(0x404040)

        event.create("xenon_lunar_essence") 
        .fluid()
        .color(0x303030)

        event.create("kryptonian_glowstream") 
        .fluid()
        .color(0x997523)

        event.create("radon_nebula_mist") 
        .fluid()
        .color(0xDD4164)

        event.create("lunarian_radiant_elixir") 
        .fluid()
        .color(0xDB2EAD)

        event.create("kryptarian_zenithal") 
        .fluid()
        .color(0x271ED8)

        event.create("titanium_torrentium_hydroplasm") 
        .fluid()
        .color(0x40408C)

        event.create("nether_wart_juice") 
        .fluid()
        .color(0xA42518)

        event.create("distilled_wart_juice") 
        .fluid()
        .color(0xA4252F)

        event.create("liquid_emerald") 
        .fluid()
        .color(0x00A82B)

        event.create("liquid_diamond") 
        .fluid()
        .color(0x49EAD6)

        event.create("titanium_electrum_alloy") 
        .fluid().dust()
        .color(0xB79780) 

        event.create("trinaium_alloy") 
        .fluid()
        .color(0xEC9742)

        event.create("pulsating_alloy") 
        .dust()
        .color(0x5AAF6C) 

        event.create("dense_hydrogen") 
        .fluid()
        .color(0x0D4263) 

        event.create("ultra_dense_hydrogen") 
        .fluid()
        .color(0x38386D) 

        event.create("marian_crystal") 
        .dust()
        .color(0x5AAF6C)

        event.create("liquid_nether_star") 
        .fluid()
        .color(0xFBFCC4)

        event.create("monoway_crystal_1") 
        .dust()
        .color(0x5AAF6C)

        event.create("monoway_crystal_2") 
        .dust()
        .color(0x411F3B)

        event.create("monoway_crystal_3") 
        .dust()
        .color(0x0087F4)

        event.create("monoway_crystal_4") 
        .dust()
        .color(0xFC6B08)

        event.create("tungsten_rare") 
        .dust()
        .color(0x5AAF6C)

        event.create("sulfuric_etahnolic_acid") 
        .fluid()
        .color(0x25442C)

        event.create("rare_metal_mixture") 
        .fluid()
        .color(0x25442C)

        event.create("aluminium_three_oxide") 
        .dust()
        .color(0x99C1D6)

        event.create("corosion_acid") 
        .fluid()
        .color(0x99C1D6)

        event.create("etherion") 
        .fluid()
        .color(0x99C1D6)

        event.create("rocket_refined_fuel") 
        .fluid().element(GTElements.get("rocket_fuel_mk1"))
        .color(0x99C1D6)

        event.create("pulsating_titanium_electrum_alloy") 
        .dust().fluid().ingot()
        .flags(GTMaterialFlags.GENERATE_FRAME)
        .color(0xAFA746) 

        event.create("titanium_silver")
        .ingot().dust().fluid()
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE)
        .color(0xAD3A7F)

        event.create("sulfuric_ethalic_acid")
        .fluid()
        .color(0x99C1D6)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sky_stone')
    .ore()
    .element(GTElements.get('sky_stone'))
    .color(0x1F2120).iconSet(GTMaterialIconSet.SHINY)

    event.create('captinium')
    .ore()
    .element(GTElements.get('captinium'))
    .color(0x8C542F).iconSet(GTMaterialIconSet.SHINY)

    event.create('energetic_alloy')
    .fluid()
    .color(0xEBB73D)
    .element(GTElements.get('energetic'))
    .flags(GTMaterialFlags.GENERATE_PLATE)
    .cableProperties(GTValues.V[GTValues.EV], 4, 2, true)

    event.create('redstone_alloy')
    .color(0x8D2121)
    .flags(GTMaterialFlags.GENERATE_PLATE)
    .element(GTElements.get('redstoneic'))
    .cableProperties(GTValues.V[GTValues.MV], 4, 2, true)
})

/*
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('sky_stone', 133, 334, -1, null, '(Mg₃SiO4)', false)
    event.create('captinium', 123, 221, -1, null, '(Cp₃Ni₂)', false)
    event.create('energetic', 23, 45, -1, null, '(E₂Si₃)', false)
    event.create('redstoneic', 23, 45, -1, null, '(R₂S₃)', false)
    event.create('rocket_fuel_mk1', 32, 42, -1, null, '(Al₂O₃)', false)
})
*/


GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('raw_naq')
    .dust().color(0x320736)

    event.create('naquahdic_fluorantic')
    .dust().color(0x320736)

    event.create('naquadric_pristic')
    .dust().color(0x320736)

    event.create('calci_naquadah_solution')
    .fluid().color(0x320736)

    event.create('prosperic_naqhadic_solution')
    .fluid().color(0x320736)

    event.create('venusite_naquahdic_solution')
    .fluid().color(0x320736)

    event.create('venusite')
    .fluid().color(0x320736)

    event.create('venustric_acid')
    .fluid().color(0x320736)

    event.create('venustric_naquahdic_acid_solution')
    .fluid().color(0x320736)

    event.create('molten_venutric_bydroxide')
    .fluid().color(0x320736)

    event.create('venunium_hydroxide')
    .fluid().color(0x320736)

    event.create('venutrite')
    .dust().color(0x320736)
})

// LuV and ZPM Materials COPOSITE
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("plasmastream")
    .plasma().color(0x320736)

    event.create("superheated_plasmastream")
    .plasma().color(0x320736)

    event.create("kryo_plasmastream")
    .plasma().color(0x320736)

    event.create("supercooled_plasmastream")
    .plasma().color(0x320736)

    event.create("arcodyne")
    .ingot().color(0x320736)

    event.create("holzidium")
    .ingot().color(0x320736)

    event.create("cosporium")
    .fluid().color(0x320736)

    event.create("meth_ice")
    .fluid().color(0x320736)

    event.create("darton")
    .fluid().color(0x320736)

    event.create("flaron")
    .fluid().color(0x320736)

    event.create("targon")
    .fluid().color(0x320736)

    event.create("blazium")
    .fluid().color(0x320736)

    event.create("vexon")
    .fluid().color(0x320736)

    event.create("quanton")
    .fluid().color(0x320736)
})







