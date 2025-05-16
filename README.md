# Modulo2
HTML and CSS module

This Module will have all the learning process i undergo through my training at riwi

# ARIA

Up until now i found out that for a more apropiate use of semantics within the HTML, there is someting called ARIA (Accesible Rich Internet Applications), this will improve the accessibility for the user that need a screen reader.

# So... What is ARIA??
-  ARIA, stands for Accesible Rich Internet Applications, not all users can access the web through conventional methods and may require assistance such as a screen readers. ARIA will help those users have a better time navigating through the page. It states the role, state, and purpose of elements within the page, especially the interactive elements, such as custom dropdowns, modals, sliders, etc...
-  It is also important to consider that not all elements on a web page are naturally accessible, like a <buton>, <input>, <a> tags, that state what they are for, but when we create a custome UI component such as a buton being created form a div, this elements the page do not know how to interpret, with ARIA we can fill that gap

# Core Concepts of ARIA:
-  Roles - What the element is:
    <div role = "button"></div>
    in this case the screen reader will interpret the div tag as a button 
-  States and properties - what the element does/is doing:
  1.  aria-checked: for checkboxes, radio buttons, or toggle buttons. (True, False or Mixed)
  2.  aria-expanded: for elements that expand/collapse (menus, dropdowns). (True or False)
  3.  aria-disabled: marks something as unavailable even if it's clickable. (True or False)
  4.  aria-hidden: hides an element from the screen readers (True or False)
  5.  aria-selected: indicates current selection in a list (True or False)
  6.  aria-pressed: used on toggle buttons. (True or False)
  7.  aria-live: announces dynamic content updates
