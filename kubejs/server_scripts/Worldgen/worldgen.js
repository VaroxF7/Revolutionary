/*

GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein") 
})

GTCEuServerEvents.oreVeins(event => {    
event.add('securite:sky_stone_moon', vein => vein
        .weight(20)
        .clusterSize(25)
        .density(0.3)
        .layer('moon_stone')
        .heightRangeUniform(30, 60)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('sky_stone')).size(3, 6))
                .layer(l => l.weight(2).mat(GTMaterials.Neodymium).size(2, 3))
            ))
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('sky_stone'))
            .placement("above")
            .density(0.3)
            .radius(4)
        ))

event.add('securite:gold_moon_vein', vein => vein
        .weight(20)
        .clusterSize(25)
        .density(0.3)
        .layer('moon_stone')
        .heightRangeUniform(30, 60)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Gold).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Ruby).size(2, 4))
            ))
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .placement("above")
            .density(0.3)
            .radius(4)
        ))

event.add('securite:uraninite_moon', vein => vein
         .weight(32)
         .clusterSize(25)
         .density(0.4)
         .layer('moon_stone')
         .heightRangeUniform(-20, 12)
         .layeredVeinGenerator(generator => generator
             .buildLayerPattern(pattern => pattern
                 .layer(l => l.weight(4).mat(GTMaterials.Uraninite).size(2, 4))
                 .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(2, 4))
                 .layer(l => l.weight(1).mat(GTMaterials.Molybdenite).size(2, 4))
             ))
         .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Uraninite)
            .placement("above")
            .density(0.3)
            .radius(4)
        ))

event.add('securite:uraninite_moon', vein => vein
    .weight(32)
    .clusterSize(25)
    .density(0.4)
    .layer('moon_stone')
    .heightRangeUniform(-20, 12)
    .layeredVeinGenerator(generator => generator
        .buildLayerPattern(pattern => pattern
            .layer(l => l.weight(4).mat(GTMaterials.Uraninite).size(2, 4))
            .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(2, 4))
            .layer(l => l.weight(1).mat(GTMaterials.Molybdenite).size(2, 4))
        ))
    .surfaceIndicatorGenerator(indicator => indicator
       .surfaceRock(GTMaterials.Uraninite)
       .placement("above")
       .density(0.3)
       .radius(4)
   ))
})


GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.density(0.6)
        vein.clusterSize(30)
        vein.weight(35)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Redstone).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.VanadiumMagnetite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(2, 4))
            ))


    event.add('kubejs:sheldonite_vein_ow_new', vein => vein
        .weight(32)
        .clusterSize(30)
        .density(0.4)
        .layer('overworld_stone')
        .heightRangeUniform(-20, 12)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Cooperite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Palladium).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Bornite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Realgar).size(2, 4))
            ))
        .surfaceIndicatorGenerator(indicator => indicator
           .surfaceRock(GTMaterials.Sheldonite)
           .placement("above")
           .density(0.3)
           .radius(4)
           ))


    event.modify("gtceu:diamond_vein", vein => {
        vein.density(0.6)
        vein.clusterSize(30)
        vein.weight(35)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Diamond).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(2, 4))
            ))

            event.modify("gtceu:sheldonite_vein", vein => {
                vein.density(0.6)
                vein.clusterSize(30)
                vein.weight(35)
                vein.layeredVeinGenerator(generator => generator
                    .buildLayerPattern(pattern => pattern
                        .layer(l => l.weight(3).mat(GTMaterials.Cooperite).size(2, 4))
                        .layer(l => l.weight(1).mat(GTMaterials.Bornite).size(2, 4))
                        .layer(l => l.weight(2).mat(GTMaterials.Realgar).size(2, 4))
                    ))

    event.add('gtceu:uraninite_ow', vein => vein
        .weight(22)
         .clusterSize(15)
         .density(0.4)
         .layer('overworld_stone')
         .heightRangeUniform(-34, 12)
         .layeredVeinGenerator(generator => generator
             .buildLayerPattern(pattern => pattern
                 .layer(l => l.weight(4).mat(GTMaterials.Uraninite).size(2, 4))
                 .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(2, 4))
             ))
         .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Uraninite)
            .density(0.2)
            .radius(4)
        ))
        })
    })
  })
})

*/