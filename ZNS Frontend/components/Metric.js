
function Metric(config){
	
	//---- PROPERTIES ----
	
	var element = $(config.element)
	
	var title = element.find('.title')
	var price = element.find('.price')
	var value = element.find('.value')
	var change = element.find('.change')
	
	function initialise(){
		console.log(self)
	}
	this.initialise = initialise
	
	
	element.css({
		'cursor': 'pointer'
	})
	
	
	//---- METHODS ----
	
	function setValues(obj){
		console.log(title)
	
		if(obj.title) title.text(obj.title)
		if(obj.price) price.text(obj.price)
		if(obj.value) value.text(obj.value)
		if(obj.change) change.text(obj.change)
	}
	this.setValues = setValues
	
		
	
	//---- EVENTS ----
	
	
	
	function on(event, func){
		element.on(event, func)
	}
	this.on = on
	

}