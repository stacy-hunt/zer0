
function Table(config){
	
	//---- PROPERTIES ----
	
	var self = this
	var element = $(config.element)
	var row = element.find('.row')
	var dialog = element.find('.dialog')
	
	
	
	function initialise(){
		
	}
	this.initialise = initialise
	
	
	
	
	//---- METHODS ----
	
	function addRow(){
		
		// this is where we'd have a function to add rows
	}
	
	
	//---- EVENTS ----
	
	function on(event, func){
		element.on(event, func)
	}
	this.on = on
	
	row.on('click', () => {
		dialog.fadeIn()
	})
	dialog.on('click', () =>{
		
		dialog.fadeOut()
	})

}