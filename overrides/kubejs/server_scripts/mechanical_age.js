ServerEvents.recipes(e => {
    e.recipes.create.compacting(["minecraft:netherrack"],["minecraft:magma_block","gtceu:stone_dust"]).heated()
    e.recipes.create.compacting(["minecraft:magma_block"], [Fluid.of("minecraft:lava", 1000)]).heated()
    e.recipes.create.splashing(["minecraft:redstone"], [Item.of("create:cinder_flour")])
    e.recipes.create.deploying('create:mechanical_crafter', ['create:brass_casing', 'minecraft:crafting_table'])
    e.recipes.create.mixing(["kubejs:raw_rubber_ingot_kube"], [Fluid.of("kubejs:latex", 144)])
    e.recipes.create.compacting([Fluid.of("kubejs:latex", 576)], ["minecraft:twisting_vines"]).heated()
    e.recipes.create.mixing([Fluid.of("gtceu:steel", 144)], ["minecraft:iron_ingot", "gtceu:coke_gem"]).superheated()
    e.recipes.create.compacting(["gtceu:steel_ingot"], [Fluid.of("gtceu:steel", 144)])
    e.recipes.create.mixing([Fluid.of("kubejs:rose_silver", 288)], [Fluid.of("gtceu:gold", 144), Fluid.of("gtceu:silver", 144)]).superheated()
    e.recipes.create.filling(["create:electron_tube"], [Fluid.of("kubejs:rose_silver", 144), "gtceu:steel_plate"])

    e.recipes.create.sequenced_assembly([ 
        Item.of('create:precision_mechanism') 
    ],'gtceu:brass_plate',[ 
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','createdeco:andesite_sheet']),
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:cogwheel']),
        e.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
        e.recipes.create.deploying('create:incomplete_precision_mechanism',['create:precision_mechanism','create:wrench']).keepHeldItem()
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(1) 
})
