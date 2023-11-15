# Navbar

// what to learn

=>  useRef hook
=> getBoundingClientRect

// Here's a snippet of the code:

```jsx
const LinksRef = useRef(null)

// ...

<div
  style={{
        height: (boolean state)
        ? `${LinksRef.current.getBoundingClientRect().height}px`
        : '0px',
    }}
>
  <ul className='links' ref={linksRef}>
    {/* ... */}
  </ul>
</div>