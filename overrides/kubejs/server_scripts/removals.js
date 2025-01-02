ServerEvents.recipes(e => {
    const toRemoveId = [
      "create:crafting/kinetics/mechanical_crafter","createaddition:mixing/netherrack","ad_astra:recipes/steel_ingot_from_blasting_iron_ingot",
      "gtceu:primitive_blast_furnace/steel_from_charcoal_dust","gtceu:primitive_blast_furnace/steel_from_coal_gem_wrought","gtceu:primitive_blast_furnace/steel_from_coal_dust_wrought",
      "gtceu:primitive_blast_furnace/steel_from_coke_dust","gtceu:primitive_blast_furnace/steel_from_charcoal_gem_wrought","gtceu:primitive_blast_furnace/steel_from_coke_dust_wrought",
      "gtceu:primitive_blast_furnace/steel_from_coal_dust","gtceu:primitive_blast_furnace/steel_from_charcoal_dust_wrought","gtceu:primitive_blast_furnace/steel_from_charcoal_gem",
      "gtceu:primitive_blast_furnace/steel_from_coke_gem","gtceu:primitive_blast_furnace/steel_from_coke_gem_wrought","gtceu:primitive_blast_furnace/steel_from_coal_gem",
      "gtceu:primitive_blast_furnace/steel_from_coke_block","gtceu:primitive_blast_furnace/steel_from_coal_block","gtceu:primitive_blast_furnace/steel_from_charcoal_block_wrought",
      "gtceu:primitive_blast_furnace/steel_from_coke_block_wrought","gtceu:primitive_blast_furnace/steel_from_charcoal_block","gtceu:primitive_blast_furnace/steel_from_coal_block_wrought",
      "createbigcannons:compacting/forge_steel_ingot","create:crafting/materials/electron_tube","create:sequenced_assembly/precision_mechanism","ad_astra:recipes/steel_ingot_from_blasting_iron_ingot",
      "createaddition:mixing/bioethanol","gtceu:shaped/vacuum_freezer","create:crushing/veridium","create:crushing/asurine_recycling","create:crushing/crimsite","create:crushing/ochrum",
      "create:compacting/blaze_cake"
    ];
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})
