// Look Trello card, D-1FFQ
// Made by Vera_ix and Soeren9

ServerEvents.recipes(e => {
    e.recipes.gtceu.gas_collector("martian_air_collection")
     .outputFluids([Fluid.of('gtceu:martian_air', 15000)])
     .duration(670).EUt(124).circuit(5).dimension("ad_astra:mars")

    e.recipes.gtceu.distillation_tower("martian_air_distillation")
     .inputFluids([Fluid.of("gtceu:martian_air", 155000)])
     .outputFluids([
        Fluid.of("gtceu:platinum_pulse", 2400),
        Fluid.of("gtceu:titanium_torrent", 3300),
        Fluid.of("gtceu:martian_enithium", 8000), // copper
        Fluid.of("gtceu:zenithal_zephyr", 24000), // silver
        Fluid.of("gtceu:redon_radiance", 12000), // 1st lighetweight material for miners
        Fluid.of("gtceu:redon_riplon", 34000), // extreme durable 2nd miner material
        Fluid.of("gtceu:redstone", 23000),
        Fluid.of("gtceu:antimony", 24000)
     ])
     .duration(2400).EUt(512)

     e.recipes.gtceu.distillery("martian_enithium_distillation_to_copper")
    .inputFluids([Fluid.of("gtceu:martian_enithium", 1200)])
    .outputFluids('gtceu:copper 1200')
    .duration(640).EUt(124).circuit(1)

    e.recipes.gtceu.distillery("platinum_pulse_distillation_to_platinum")
    .inputFluids([Fluid.of("gtceu:platinum_pulse", 2000)])
    .outputFluids([Fluid.of("gtceu:platinum", 244)])
    .duration(840).EUt(124).circuit(2)

    e.recipes.gtceu.fusion_reactor("fusion_titanium_torrent")
     .inputFluids([Fluid.of("gtceu:titanium_torrent", 2000)])
     .inputFluids([Fluid.of("gtceu:hydrogen", 2000)])
     .outputFluids([Fluid.of("gtceu:titanium_torrentium_hydroplasm", 1000)])
     .duration(2400).EUt(2048).fusionStartEU(150000000)

     e.recipes.gtceu.plasma_generator("torrent_titanium")
      .inputFluids([Fluid.of("gtceu:titanium_torrentium_hydroplasm", 500)])
      .outputFluids([Fluid.of("gtceu:titanium", 500)])
      .duration(800).EUt(-2048)  
})

ServerEvents.recipes(e => {
   e.recipes.gtceu.gas_collector("lunarian_air_collection")
   .outputFluids([Fluid.of('gtceu:lunarian_air', 15000)])
   .duration(670).EUt(124).circuit(5).dimension("ad_astra:moon")

  e.recipes.gtceu.distillation_tower("lunarian_air_distillation")
   .inputFluids([Fluid.of("gtceu:lunarian_air", 155000)])
   .outputFluids([
      Fluid.of("gtceu:xenon_lunar_essence", 2400), // cobalt
      Fluid.of("gtceu:kryptonian_glowstream", 3300), // gold
      Fluid.of("gtceu:radon_nebula_mist", 8000), // Iron
      Fluid.of("gtceu:zenithal_zephyr", 24000), // Silver
      Fluid.of("gtceu:kryptarian_zenithal", 12000), // 3rd material for tier 3 miner
      Fluid.of("gtceu:deuterium", 22000),
      Fluid.of("gtceu:severely_steam_cracked_naphtha", 19000),
      Fluid.of("gtceu:naphthalene", 20000) 
   ])
   .duration(2400).EUt(512)

  e.recipes.gtceu.distillery("xenon_lunar_essence_distillation_to_cobalt")
  .inputFluids([Fluid.of("gtceu:xenon_lunar_essence", 1200)])
  .outputFluids([Fluid.of("gtceu:cobalt", 800)])
  .duration(640).EUt(124).circuit(1)

  e.recipes.gtceu.distillery("kryptonian_glowstream_distillation_to_gold")
  .inputFluids([Fluid.of("gtceu:kryptonian_glowstream", 1200)])
  .outputFluids([Fluid.of("gtceu:gold", 800)])
  .duration(740).EUt(124).circuit(2) 

  e.recipes.gtceu.distillery("radon_nebula_mist_distillation_to_iron")
  .inputFluids([Fluid.of("gtceu:radon_nebula_mist", 1200)])
  .outputFluids([Fluid.of("gtceu:iron", 800)])
  .duration(640).EUt(124).circuit(3)

  e.recipes.gtceu.distillery("zenithal_zephyr_distillation_to_silver")
  .inputFluids([Fluid.of("gtceu:zenithal_zephyr", 1200)])
  .outputFluids([Fluid.of("gtceu:silver", 800)])
  .duration(640).EUt(124).circuit(4) 
})


