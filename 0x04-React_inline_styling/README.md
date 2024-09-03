# ALX React — React inline styling

0x04. React inline styling

`Front-end`
`JavaScript`
`ES6`
`React`

## Inline Styling

React allows you to use inline styles directly in your JSX:

```jsx
<div style={{ color: "blue", fontSize: "14px" }}>
  This text is blue and 14px.
</div>
```

Note that inline styles in React use camelCase property names instead of kebab-case.

## CSS-in-JS with Aphrodite

`Aphrodite` is a popular CSS-in-JS tool for React. Here's how to use it:

**Install Aphrodite:**

```
npm install aphrodite
```

**Import and use Aphrodite:**

```jsx
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
  },
});

function Header() {
  return <header className={css(styles.header)}>My Header</header>;
}
```

## Conditional Styling

You can use JavaScript conditions to apply different styles:

```jsx
<div style={{ color: isActive ? "green" : "gray" }}>
  This text changes color based on isActive state.
</div>
```

Or with class names:

```jsx
<div className={`base-class ${isActive ? "active" : "inactive"}`}>
  This element has different classes based on isActive state.
</div>
```

## Responsive Design

To create responsive designs in React, you can:

Use CSS media queries:

```css
@media (max-width: 600px) {
  .responsive-element {
    font-size: 14px;
  }
}
```

Use JavaScript to detect screen size and render different components:

```jsx
import { useState, useEffect } from "react";

function ResponsiveComponent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
}
```

## Creating Small Animations

You can create animations in React several ways:

**1-** CSS keyframe animations:

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.sliding-element {
  animation: slide-in 0.5s ease-out;
}
```

**2-** React libraries like `react-spring` for more complex animations:

```jsx
import { useSpring, animated } from "react-spring";

function AnimatedComponent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.div style={props}>I fade in</animated.div>;
}
```

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY
