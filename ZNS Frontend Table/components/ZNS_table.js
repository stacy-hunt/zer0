var loader = new Loader()


new ZNS()

function ZNS() {
	
	//list any libraries that need to be loaded here. Include a path in each filename.
	var libraries = [
		'../lib/jquery-3.3.1.js',
		'../lib/Utilities.js',
		'../lib/ComponentManager.js'
	]
	
	//used by component manager to find the component scripts
	var componentPath = '../components/'

	var manager

	
	// Load dependencies
	loader.load(libraries, initialise)

	// Find and load components
	function initialise() {
		$('.body').css({
			'-webkit-user-select': 'none',
			'-moz-user-select': 'none',
			'-ms-user-select': 'none',
			'user-select': 'none',
			'cursor': 'default'
		})
		manager = new ComponentManager(setUpUI, componentPath)
	}

	// Carry on doing other things once the components are good to go
	function setUpUI() {
		
		//Things to do once everything else has loaded
		
		
		
	}
}


