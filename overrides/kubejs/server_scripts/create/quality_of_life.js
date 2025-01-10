ServerEvents.recipes(e => {
    e.recipes.create.mixing(["2x create:asurine"], ["2x minecraft:gravel","5x create:zinc_nugget", Fluid.of("minecraft:water", 250)])
    e.recipes.create.mixing(["2x create:crimsite"], ["2x minecraft:gravel","5x minecraft:iron_nugget", Fluid.of("minecraft:lava", 250)])
    e.recipes.create.mixing(["2x create:veridium"], ["2x minecraft:gravel","5x create:copper_nugget", Fluid.of("minecraft:water", 250)])
    e.recipes.create.mixing(["2x create:ochrum"], ["2x minecraft:gravel","5x minecraft:gold_nugget", Fluid.of("create:chocolate", 250)])

    e.recipes.create.mixing(["minecraft:tuff"], ["3x minecraft:cobblestone", Fluid.of("minecraft:water", 250)])
    e.recipes.create.mixing(["minecraft:deepslate"], ["minecraft:cobblestone", Fluid.of("minecraft:lava", 250)])
    e.recipes.create.mixing(["minecraft:dripstone_block"], ["minecraft:calcite", Fluid.of("minecraft:water", 250)])
    e.recipes.create.mixing(["minecraft:calcite"], ["minecraft:andesite", Fluid.of("minecraft:water", 250)])

    e.recipes.create.mixing(["create:blaze_cake_base"], ["create:cinder_flour","minecraft:sugar"]).heated()

    e.recipes.create.haunting(["minecraft:netherrack"], ["minecraft:blackstone"])
    e.recipes.create.haunting(["minecraft:coal"], ["minecraft:charcoal"])
    e.recipes.create.haunting(["minecraft:wither_rose"], ["minecraft:poppy"])

    e.recipes.create.compacting(["minecraft:diamond"], ["2x minecraft:coal_block"])

 
})