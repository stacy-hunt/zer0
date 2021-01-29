
/* Docs
Loader will create a <script> node in the HTML page and load the contents of a javascript file into it so that it runs on the page.
Script names can be passed as a string or an array of strings.
Each string should contain a relative path eg '../components/Button.js'
There is an optional callback function that can be called after all the scripts are loaded.
*/

class Loader{
	
	// ---- PROPERTIES ----
		
	constructor(debug){
		//components and libraries will log things to the console to help troubleshoot when debug is set to true
		
		if(debug == 'debug') this.debug = true
		else this.debug = false
		
		var scriptList = []
		this.scriptList = scriptList
		
		/* Docs
		The load function brings in new code from a javascript file.
		Pass in an array of .js files to load, including the path in each name, and an optional function to call once all files are loaded. eg. 'load(['../lib/jquery-1.12.0.js', '../lib/utilities.js'], loadComponents)'.
		You can also pass in a single pathname as a string. eg. 'load(../lib/jquery-1.12.0.js)
		load will return an array of the script objects that it loads
		*/
		function load (currentList, callback) {
	

			// In case we passed in a single filename, wrap it in an array
			if (typeof currentList === 'string') currentList = [currentList]
	
			// loop through the list of files and load each one by creating a new <script> tag in the DOM
			
			var scriptLoadAttempts = 0
			var scriptLoadSuccess = 0
			
			for(var i=0; i<currentList.length; i++){
				scriptList.push(currentList[i])
				createScriptNode(i)
			}
			
			function createScriptNode(index) {
				
				var node = document.createElement('script')
	
				node.type = 'text/javascript'
				node.async = false				
				node.src = currentList[index]
				
				node.addEventListener('load', () => {
				
					scriptLoadSuccess ++
					
					if(index == scriptLoadAttempts - 1) checkScriptsLoaded()
					
				}, false)
				node.addEventListener('error', scriptError, false)
				
				document.head.appendChild(node)
		
				scriptLoadAttempts++
			}
			
			// Called if an attempt to load a script fails
			function scriptError (e) {
				throw "Hey, Loader here. I couldn't find this script: " + e.target.src
			}
			
			function checkScriptsLoaded () {
				var allLoaded = scriptLoadSuccess == scriptLoadAttempts

				if(allLoaded) allScriptsLoaded()
				else notAllScriptsLoaded()
			}
			
			function allScriptsLoaded(){
				if(debug) console.log('All scripts loaded')
				if (callback) callback()
			}
			
			function notAllScriptsLoaded(){
				throw 'Loader here. Some scripts failed to load, sorry.'
			}
			
		}
		this.load = load
		
	}
}