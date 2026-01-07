# CSS Selector Types

## Simple Selectors

### Element Selector
Based on the element name (e.g., `p` for `<p>`)

```css
p {
    color: blue;
}
```

### Id Selector
The id of an element is unique within a page, so the id selector is used to select one unique element. To select an element with a specific id, write a hash (#) character, followed by the id of the element.

```css
#header {
    background-color: gray;
}
```

### Class Selector
The class selector selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name.

```css
.error {
    color: red;
}

label.error {
    font-weight: bold;
}
```

### Universal Selector (*)
Selects all HTML elements on the page

```css
* {
    margin: 0;
    padding: 0;
}
```

### Grouped Selectors
Selects all the HTML elements with the same style definitions.

```css
h1, h2, p {
    font-family: Arial, sans-serif;
}
```

### Contextual (Descendant Selector)
Any element contained within another element.

```css
section h1 {
    color: navy;
}
```

## Pseudo-Classes

### Link Pseudo-Classes

- **a:link** - An unvisited hyperlink
- **a:visited** - A visited hyperlink
- **a:hover** - A link beneath the pointer
- **a:active** - A link that is being clicked (but before the release of the button)

### Structural Pseudo-Classes

#### nth-child

- `li:nth-child(4)` - The fourth of a set of `<li>` elements
- `li:nth-child(4n)` - EVERY fourth of a set of `<li>` elements
- `li:nth-child(4n+1)` - EVERY fourth of a set of `<li>` elements offset by one
- `li:nth-child(odd)` - EVERY odd of a set of `<li>` elements
- `li:nth-child(even)` - EVERY even of a set of `<li>` elements

#### nth-of-type

- `p:nth-of-type(3)` - The third element of type `<p>` in a set of elements
- Same syntax patterns as nth-child (4n, odd, even, etc.)

#### first-child / last-child

- `p:first-child` - Selects the first child element
- `p:last-child` - Selects the last child element

#### first-of-type / last-of-type

- `p:first-of-type` - Selects the first element of its type
- `p:last-of-type` - Selects the last element of its type

#### only-child

- `h2:only-child` - Selects an element that is the only child of its parent

#### only-of-type

- `p:only-of-type` - Selects an element that is the only one of its type among siblings

#### empty

- `td:empty` - Selects elements with no children (including text nodes)

### Negation Pseudo-Class

#### not

- `*:not(a)` - Selects all elements except `<a>` elements
- `p:not(.intro)` - Selects all `<p>` elements without the "intro" class

## Pseudo-Elements

Pseudo-Elements use TWO colons (`::`)

### first-line / first-letter

- `p::first-line` - The first line of the content of any `<p>` element
- `p::first-letter` - The first letter of the content of any `<p>` element

### before / after

- `h1::before { content: "Note: "; }` - Inserts content before an element
- `h1::after { content: "!"; }` - Inserts content after an element

## Combinators

### Child Combinator (>)

```css
body > p {
    /* Only targets <p> elements nested directly under <body> */
}
```

### Adjacent Sibling Combinator (+)

```css
h2 + p {
    /* Any <p> element that immediately follows an <h2> */
}
```

### General Sibling Combinator (~)

```css
h2 ~ p {
    /* Any <p> element that is a sibling of <h2> (doesn't need to be immediately after) */
}
```

## Attribute Selectors

### Attribute Presence

```css
a[href] {
    /* Selects all <a> elements with an href attribute */
}
```

### Attribute Value Equal To

```css
a[href="https://example.com"] {
    /* Selects <a> elements with exact href match */
}
```

### Attribute Value Contains

```css
a[href*="georgiancollege"] {
    /* Selects <a> elements where href contains "georgiancollege" */
}
```

### Attribute Value Begins With

```css
a[href^="https"] {
    /* Selects <a> elements where href begins with "https" */
}
```

### Attribute Value Ends With

```css
a[href$=".pdf"] {
    /* Selects <a> elements where href ends with ".pdf" */
}
```

### Attribute Value Includes (Word)

```css
a[class~="button"] {
    /* Selects elements where the class attribute contains "button" as a complete word */
}
```

---

## Resources

### MDN Web Docs
- [Basic Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
- [Pseudo-classes and Elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)
- [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity)

### W3Schools
- [CSS Selectors](https://www.w3schools.com/css/css_selectors.asp)