
function Table(config){
	
	//---- PROPERTIES ----
	
	var self = this
	var element = $(config.element)
	var row = element.find('.row')
	
	function initialise(){
		console.log(row)
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
	

}