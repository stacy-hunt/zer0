
class ComponentManager{
	
	constructor(callback, componentPath){
		
		if(loader.debug) console.log('new Component Manager created')
		
		
		// ---- PROPERTIES ----
		
		var self = this
		var componentPath = componentPath || 'components/'
		var elements = []
		var components = []
		self.components = components
		
		
		
		//---- INITIALISATION ----
		
		createScripts()
		
		// finds and loads scripts for all of the components on the page
		function createScripts () {
			
			elements = getElements()
			
			// each component has a reference to its script. Pull out the script references into a new list, and get rid of any duplicates

			var currentList = elements.map(
				element => (componentPath + getComponentName(element) + '.js')
			).unique()
				
			// check if any of the scripts have already been loaded, and if so take them out of the list
			currentList.forEach((newItem, index) => { 
				 loader.scriptList.forEach((oldItem) => {
					if(oldItem == newItem) currentList.splice(index, 1)
				})
				
			})
			
			loader.load(currentList, function () {

				console.log("All scripts loaded")
//				executed once all of the component Scripts are loaded
				createComponents()

			})
					
		}
		
		
		//---- METHODS ----
			
		function createComponents () {

			self.components = elements.map((element) => {
				return createComponent(element)
			})
			findFamily()

			// Now that the components are properly set up, run init functions if necessary.
			self.components.forEach((component) => {
				if(component.initialise) component.initialise()
			})
			
			callback()
		}

		function createComponent (element) {
			var className = getComponentName(element)
			var ComponentClass = getComponentClass(className)
			var config = {
				name: element.id,
				data: {title: element.id},
				className: className,
				script: componentPath + className + '.js',
				classes: element.className,
				element: element
			}

			var component = new ComponentClass(config)
			
			component.name = config.name
			component.className = config.className
			component.children = []

			if (self.components.find((existingComponent) => { return existingComponent == component }) == null) {
				self.components.push(component)
			}

			return component
		}
		this.createComponent = createComponent
		
		function findFamily(){
			// Find and store the parent for each component, if it has one
			self.components.forEach(function (component) {
				
				var parents = self.components.filter( parent => {
				
					return (parent.element !== component.element && parent.element.contains(component.element))
				})
				
				component.parent = parents[parents.length - 1]
	
				// if the component has chidren, store them too
				if (component.parent) {
					component.parent.children.push(component)
				}
			})
		}
		this.findFamily = findFamily
		
		function get (componentName, index) {
			//find only components that match the componentName. Can search for either a class or instance name
			
			var results = self.components.filter(component => component.name === componentName || component.className === componentName)
				
//			results = results.map(r => eval(r.className))
			//if there is only one result, return it
			if (results.length === 1) {
				return results[0]
			}
			//otherwise return the list of results
			else if(index) return results[index]
			else return results
		}
		this.get = get
			
		function getElements(){
			var elements = document.querySelectorAll("[class*='js-']")
			return Array.from(elements)
		}
		
		// given an html element, find the className starting with 'js-', trim off the 'js-' and add '.js' to the end to give us the name of the script
		function getComponentName (element) {
			
			var classList = element.className.split(' ')
			var componentClasses = classList.filter(className => className.startsWith('js-'))
			var componentName = componentClasses[0].slice(3)
			
			return Utilities.kebabToCamel(componentName)
		}
		this.getComponentName = getComponentName
		
		function getComponentClass(className){

			try{
				
				return window.Function("return ("+className+")")()
			} catch(e) {
				throw "There's a problem instantiating the component called " + className + ". It could be a lower case leading letter in the filename, or a perhaps syntax error in the class file."
			}
		}
	
	}

}