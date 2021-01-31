
function Button(config){
	
	//---- PROPERTIES ----
	
	var element = $(config.element)
	
		
	function initialise(){

	}
	this.initialise = initialise
	
	
	element.css({
		'cursor': 'pointer'
	})
	
	
	//---- METHODS ----
	
	
		
	
	//---- EVENTS ----
	
	element.on('click', () => console.log('I was clicked'))
	
	function on(event, func){
		element.on(event, func)
	}
	this.on = on
	

}