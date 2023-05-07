# Expand

1. It is important to put thought into the ID's and Classes since those are what you will be referring to when trying to access cetain elements. Through this lab, some of the elements didn't even have IDs which made it hard to get those elements so I had to use the queurySelector method. I think having well named IDs and Clases helps distinguish what those elements are used for exactly.

2. Data attributes are pieces of data that are stored with each element. This might hold for example a source path for an image or audio to be played. Other examples are ids, class names, or any other relevant data for a specific html tag. These are pretty important in customizing certain HTML tags as it allows you to change some of the properties of them by changing these attributes. In javascript, we can access them by using a dot after the HTML element and follow it with the attribute we want to access. When it comes to things like microdata, storing relevant pieces of data might be beneficial and help make a web page more accessible. 

3. DOM fragments are detatched portions of the overall DOM tree. These can be powerful in cases where we want to add multiple elements to the DOM tree at once, we can add them to the DOM fragment and then add that fragment all at once back to the DOM tree.

4. Virtual DOM is used to store a copy of a DOM element into memory. This makes updating individual elements easier to do and more lightweight since then you don't need to reupdate the entire DOM tree. However, one thing you lose with this is the ability to update elements on screen.

5. In JavaScript you refer to the attribute class as className since class is a reserved word for defining or creating classes. Therefore className is used instead to refer to the class property of an HTML element.

6. addEventListener() adds an event listener for any type of event that an element can receieve while onClick() only listens for click events. One advantage to onClick is that it was introduced earlier so it is compatible with all browsers versus addEventListener not working with some older browsers. onClick can also be specified in the HTML while addEventListener can only be added in the JavaScript. One advantage to addEventListener is that it can listen for different events versus the single event for onClick.