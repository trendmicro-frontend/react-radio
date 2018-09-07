```jsx
<RadioButton
    checked={true}
    label="Checked"
/>
```

```jsx
<RadioButton
    checked={true}
    disabled
    label="Checked disabled"
/>
```

```jsx
<RadioButton
    checked={false}
    label="Unchecked"
/>
```

```jsx
<RadioButton
    checked={false}
    disabled
    label="Unchecked disabled"
/>
```

```jsx
<RadioButton
    checked={false}
    label="Unchecked (with children)"
>
    <p style={{ marginLeft: (16 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</RadioButton>
```