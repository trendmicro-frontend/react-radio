# react-radio-button [![build status](https://travis-ci.org/trendmicro-frontend/react-radio-button.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-radio-button) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-radio-button/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-radio-button?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-radio-button.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-radio-button/)

React Radio Button

Demo: https://trendmicro-frontend.github.io/react-radio-button

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-radio-button](https://github.com/trendmicro-frontend/react-radio-button):

  ```
  npm install --save react @trendmicro/react-radio-button
  ```

2. At this point you can import `@trendmicro/react-radio-button` and its styles in your application as follows:

  ```js
  import RadioButton from '@trendmicro/react-radio-button';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-radio-button/dist/react-radio-button.css';
  ```

## Usage

```jsx
<RadioButton label="RadioButton label" />
```

The label prop is optional, you can use children to pass through the component.

```jsx
<RadioButton label="RadioButton label">
    <p style={{ marginLeft: 24 }}>
        Lorem ipsum dolor sit amet...
    </p>
</RadioButton>

<RadioButton>
    <span style={{ verticalAlign: 'middle', marginLeft: 8 }}>
        Lorem ipsum dolor sit amet...
    </span>
</RadioButton>
```

### Uncontrolled RadioButton

```js
// Default checked
<RadioButton defaultChecked />
```

### Controlled RadioButton

```js
// Checked
<RadioButton checked />
```

## API

### Properties

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
className | Object | | Customized class name for the component.
style | Object | | Customized style for the component.
label | Node or String | | Text label to attach next to the radio button.
inputClassName | Object | | Customized class name for the radio button.
inputStyle | Object | | Customized style for the radio button.
disabled | Boolean | false | If true, the radio button shown as disabled and cannot be modified.
checked | Boolean | | The checked state of the radio button.
defaultChecked | Boolean | | The default checked state of the radio button.

### Class Properties

Use the ref property to get a reference to the component:

```jsx
<RadioButton
    ref={node => {
        if (node) {
            this.radioButton = node;
            console.log(this.radioButton.checked);
        }
    }}
/>
```

Name | Type | Description
:--- | :--- | :----------
checked | Boolean | Get the checked state.

## License

MIT
