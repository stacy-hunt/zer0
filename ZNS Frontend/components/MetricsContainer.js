
function MetricsContainer(config){
	
	//---- PROPERTIES ----
	
	var self = this
	
	function initialise(){
		
//		self.element.css('cursor', 'pointer')
	}
	this.initialise = initialise
	
	
	
	
	//---- METHODS ----
	
	function createMetric(json){
	
		// Method for cloning metrics if supplied with a list of parameters for them. Can implement if required
		
	}
	this.createMetric = createMetric
	
	
	//---- EVENTS ----
	
	function on(event, func){
		element.on(event, func)
	}
	this.on = on
	

}