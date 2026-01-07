## CSS Selector Types
### Simple Selectors
---
##### Element Selector 
Based on the element name (ie. p for < p >)
##### Id Selector 
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

##### Class Selector
The class selector selects HTML elements with a specific class attribute.
To select elements with a specific class, write a period (.) character, followed by the class name.

(ie .error OR label.error)

##### Universal Selector ( * )
Selects all HTML elements on the page

##### Grouped Selectors (h1, h2, p)
Selects all the HTML elements with the same style definitions.

##### Contextual
Any h1 element contained within a < section > element.
(ie. section h1)

### Psuedo-Class
---
- a:link
An un-visited hyperlink

- a:visited
A visited hyperlink

- a:hover
A link beneath the pointer

- a:active
A link that is being clicked (but before the release of the button)

#### Structural Pseudo-Classes

##### nth-child

- li:nth-child (4)
The fourth of a set of < li > elements

- li: nth-child ( 4n )
EVERY fourth of a set of < li > elements.

- li:nth-child ( 4n+1 )
EVERY fourth of a set of < li > elements offset by one.

- li-nth-child(odd)
EVERY odd of a set of < li > elements.

##### nth-of-type
- p:nth-of-type(3)
The third element of type < p > in a set of elements.

(Essentially the same syntax Idea as the section above)

##### first-child/last-child

##### first-of-type/last-of-type

##### only-child
- h2:only-child

##### only-of-type

##### empty
- td:empty

#### Negation Psuedo-Class
##### not
- *:not (a)

### Psuedo-Element
---
(Psudeo-Elements use TWO colons)

#### first-line / first-letter
- p::first-line
The first line of the content of any < p > element. Note double ":".




### Combinator
---

### Attribute
---

#### Links
---
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity

https://www.w3schools.com/css/css_selectors.asp