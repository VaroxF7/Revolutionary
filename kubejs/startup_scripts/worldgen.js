WorldgenEvents.remove((e) => {
	e.removeOres((ores) => {
	    ores.blocks = [
		'thermal:silver_ore',
        'thermal:deepslate_silver_ore',
        'thermal:tin_ore',
		'thermal:deepslate_tin_ore',
        'thermal:niter_ore',
		'thermal:deepslate_niter_ore',
        'thermal:lead_ore',
		'thermal:deepslate_lead_ore',
        'thermal:cinnabar_ore',
		'thermal:deepslate_cinnabar_ore',
        'thermal:nickel_ore',
		'thermal:deepslate_nickel_ore',
        'thermal:sulfur_ore',
		'thermal:deepslate_sulfur_ore',
        'thermal:apatite_ore',
		'thermal:deepslate_apatite_ore'
	     ]	
	})
})

