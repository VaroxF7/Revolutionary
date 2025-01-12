/*
// Has been Implemented into the First Chip Adventures Script, not sure if it will stay tho.
// If you hold the Wafer in your Hands it will get Dirty and need to be Cleaned in return, caution is advised.
PlayerEvents.tick(event => {
    let player = event.player;
    let mainHandItem = player.mainHandItem;
    let offHandItem = player.offHandItem;

    if (mainHandItem && !mainHandItem.isEmpty()) {
        let itemCount = mainHandItem.count; 

        if (mainHandItem.id === 'gtceu:silicon_wafer') {
            player.setHeldItem('MAIN_HAND', Item.of('kubejs:dirty_silicon_wafer', itemCount));
        }
    }
    if (offHandItem && !offHandItem.isEmpty()) {
        let itemCount = offHandItem.count; 

        if (offHandItem.id === 'gtceu:silicon_wafer') {
            player.setHeldItem('OFF_HAND', Item.of('kubejs:dirty_silicon_wafer', itemCount));
        }
    }
});
*/

