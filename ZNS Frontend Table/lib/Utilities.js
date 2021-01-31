var Utilities = new Utilities();

function Utilities() {
  if (loader.debug) console.log("new Utilities created");

  var self = this;

  /* BEGIN(GENERIC) */

  function pageName() {
    return location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  }

  /**
   *  Supports simple creation of singleton classes.
   *  This is probably an anti pattern against the puppet master but exists just in case
   *  TODO consider passing through all arguments
   */
  function singleton(fn) {
    var instance;
    return function (config) {
      if (instance === undefined) {
        instance = new fn(config);
      }
      return instance;
    };
  }

  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function checkIsNumber(value) {
    var reg = new RegExp("^\\d+$");
    return reg.test(value);
  }
  this.checkIsNumber = checkIsNumber;

  /* NUMBER_FUNCTIONS */

  Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
  };

  // I stole this from the interwebs. It performs a linear interpolation of a number between 2 ranges
  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  this.numberWithCommas = numberWithCommas;

  function formatAsCurrency(num, places) {
    var fixed = num.toFixed(places);
    return "$" + fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  this.formatAsCurrency = formatAsCurrency;

  function formatAsPercent(num, places) {
    var fixed = num.toFixed(places);
    return fixed + "%";
  }
  this.formatAsPercent = formatAsPercent;

  /* ARRAY_FUNCTIONS */

  /**
   * Anytime the return of fn changes, create a new split in the array
   */
  Array.prototype.splitOnChange = function (fn) {
    var i, oldRes, newRes;
    var out = [];
    var current = [];

    if (this.length == 0) return this;

    current.push(this[0]);
    oldRes = fn(this[0]);
    for (i = 1; i < this.length; i++) {
      // New split
      newRes = fn(this[i]);
      if (newRes !== oldRes) {
        out.push(current);
        current = [];
      }
      oldRes = newRes;
      current.push(this[i]);
    }
    out.push(current);
    return out;
  };

  /**
   * Takes an array of arrays and joins them all
   */
  Array.prototype.flatten = function () {
    return [].concat.apply([], this);
  };

  /**
   * Returns an array where duplicates have been removed
   */
  Array.prototype.unique = function () {
    return this.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
  };

  /**
   * Stable sort algorithm because the inbuilt one isn't. Try to maintain API compatibility. Sorts inplace. Uses insertion sort
   */
  Array.prototype.stableSort = function (compareFunction) {
    if (compareFunction === undefined) {
      var length = this.length;
      for (var i = 1; i < length; i++) {
        var tmp = this[i];
        var j = i;
        while (j > 0 && tmp < this[j - 1]) {
          this[j] = this[j - 1];
          j--;
        }
        this[j] = tmp;
      }
    } else {
      var length = this.length;
      for (var i = 1; i < length; i++) {
        var tmp = this[i];
        var j = i;
        while (j > 0 && compareFunction(this[j - 1], tmp) > 0) {
          this[j] = this[j - 1];
          j--;
        }
        this[j] = tmp;
      }
    }
    return this;
  };

  /* DATE FUNCTIONS */

  //Returns month name as full length string
  Date.prototype.getFullMonthString = function () {
    var monthStrings = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthStrings[this.getMonth()];
  };

  Date.prototype.american = function () {
    return [this.getMonth() + 1, this.getDate(), this.getFullYear()].join("/");
  };

  /* STRING FUNCTIONS */

  /*
	Left pad a string with specified characters to be a fixed length
	arguments:
	 	• str: String to pad
	 	• places:  Final length string should be
	 	• char (optional) String to add to front until desired length is reached. Defaults to space character
	 */
  function leftPad(str, places, char) {
    str = "" + str;
    if (char === undefined) {
      char = " ";
    }
    var pad = char.repeat(places);
    return (pad + str).substring(str.length);
  }
  self.leftPad = leftPad;

  /*
		Takes a kebabCase string, which MacCaw generates for classes starting with capitals, and converts it to camelCase which we like to use in our javascript code
		If there is a '-' at the start of the string, this function will convert the first following letter to a capital. eg '-simon' becomes 'Simon'
	*/
  function kebabToCamel(str) {
    return str.replace(/-([a-z])/g, function (m, p1) {
      return p1.toUpperCase();
    });
  }
  self.kebabToCamel = kebabToCamel;

  // Gets an array of all the positions in a string where a given substring ('searchStr') occurs
  String.prototype.getIndicesOf = function (searchStr, caseSensitive) {
    var thisString = this;
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0,
      index,
      indices = [];
    if (!caseSensitive) {
      thisString = thisString.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = thisString.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  };

  /* MISCELLANEOUS FUNCTIONS */

  // Gets documentation from the code of an object. It pulls out any text from between the start and end identifiers and returns an array of text blocks
  function getDocs(object) {
    var docsStartIdentifier = "/* Docs";
    var docsEndIdentifier = "*/";
    var objectAsText = object.toString();

    // get an array of all the positions where the start identifier occurs to define the text blocks
    var indices = objectAsText.getIndicesOf(docsStartIdentifier);

    // create an array to store the blocks
    var docsBlocks = [];
    var lastIndex = indices[0];

    // cut out each block of text
    for (var a = 0; a < indices.length; a++) {
      var currentIndex = indices[a + 1];
      var block = objectAsText.slice(lastIndex, currentIndex);
      lastIndex = currentIndex;

      //trim off everything after the end identifier
      var docsEndIndex = block.indexOf(docsEndIdentifier);
      block = block.slice(docsStartIdentifier.length, docsEndIndex);

      //add the block to the array
      docsBlocks.push(block);
    }
    return docsBlocks;
  }
  self.getDocs = getDocs;

  function getElementPosition(targetElement) {
    let x1 = targetElement.offset().left;
    let y1 = targetElement.offset().top;
    return { x: x1, y: y1 };
  }
  self.getComponentPosition = getElementPosition;

  // Can call this with either a component or simply an element.
  function getComponentWireOrigin(target) {
    let componentElement;
    if (target.view != null) componentElement = $(target.view.element);
    else componentElement = target;

    let componentPos = getElementPosition(componentElement);
    let x1 = componentPos.x + componentElement.outerWidth();
    let y1 = componentPos.y + componentElement.outerHeight() / 2;
    return { x: x1, y: y1 };
  }
  self.getComponentWireOrigin = getComponentWireOrigin;

  function findChildComponent(component, childName) {
    return component.children.find((child) => {
      return child.name == childName;
    });
  }
  self.findChildComponent = findChildComponent;

  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  this.isDescendant = isDescendant;
  
  //fires an event from the document when all the images on a page are loaded
  	function waitForImagesToLoad(callback){
	  	var imgs = document.images,
	    len = imgs.length,
	    counter = 0;
	
		[].forEach.call( imgs, function( img ) {
		    if(img.complete)
		      incrementCounter();
		    else
		      img.addEventListener( 'load', incrementCounter, false );
		} );
		
		function incrementCounter() {
		    counter++;
		    if ( counter === len ) {
		        $(document).trigger('allImagesLoaded')
		    }
		}
	}
	this.waitForImagesToLoad = waitForImagesToLoad
}
