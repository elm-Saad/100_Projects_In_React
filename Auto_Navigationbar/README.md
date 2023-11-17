# Navbar

// what to learn

=>  useRef hook
=> getBoundingClientRect
=> event.ClientY
=> event.ClientX


// Here's a snippet of the code:


* using the e.ClientX e.ClientY getBoundingClientRect() 
* to control the show/hide of the Submenu => hide on left right button when out from the submenu 
* // 1/ set a function to handle the logic onMouseLeave
* // 2/ get the hole section by Ref 
* // 3/ get the left right bottom position relative to the viewport. using the Ref and the 
getBoundingClientRect() 
* // 4/ get the e.ClientX and e.ClientY 
* // 5/ if left > e.ClientX or right < e.clientX or bottom < clientY set the nav to null
