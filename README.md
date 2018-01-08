# swatchIt

A jQuery plugin to convert a div into swatch grid.

## Dependency
jQuery


## Usage
1. Include jQuery
2. Include swatchIt
3. Create a div element with the color codes in "data-colors" attribute.
	```
	<div class="swatchIt" data-colors="#FF0000,green,#0000FF,#F1E05A,#563D7C,#4A0511"></div>
	```
4. Simply call the plugin on div: 
	```
	$('.swatchIt').swatchIt();
	```
    
You can also set the data-colors attribute with javascript array of colors codes:
	```
	<div id="swatchIt"></div>
	var colors = ['#FF0000', 'green', '#0000FF', '#F1E05A', '#563D7C', '#4A0511'];
	$('#swatchIt').data('colors', colors);
	$('#swatchIt').swatchIt(); 
	```

## Credits
JS by Jayant Kumar
CSS by Kushal Kant
