# react-radio [![build status](https://travis-ci.org/trendmicro-frontend/react-radio.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-radio) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-radio/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-radio?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-radio.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-radio/)

React Radio

Demo: https://trendmicro-frontend.github.io/react-radio

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-radio](https://github.com/trendmicro-frontend/react-radio):

  ```
  npm install --save react @trendmicro/react-radio
  ```

2. At this point you can import `@trendmicro/react-radio` and its styles in your application as follows:

  ```js
  import { RadioButton, RadioGroup } from '@trendmicro/react-radio';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-radio/dist/react-radio.css';
  ```

## Usage

### RadioButton

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

#### Uncontrolled RadioButton

```js
// Default checked
<RadioButton defaultChecked />
```

#### Controlled RadioButton

```js
// Checked
<RadioButton checked />
```

### RadioGroup

```jsx
<RadioGroup
    name="comic"
    value={this.state.value}
    onChange={(value) => {
        this.setState({ value: value });
    }}
>
    <div className="row">
        <div className="col-xs-12 col-sm-6">
            <RadioButton label="Batman (DC)" value="dc:batman" />
            <RadioButton label="Hulk (Marvel)" value="marvel:hulk" />
        </div>
        <div className="col-xs-12 col-sm-6">
            <RadioButton label="Superman (DC)" value="dc:superman" />
            <RadioButton label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
        </div>
    </div>
</RadioGroup>
```

## React onChange Propagation

You may need to use `event.stopPropagation()` to stop **onChange** propagation when wrapping an input element inside the **RadioGroup** or **RadioButton** component.

```jsx
<RadioGroup
    onChange={(value, event) => {
        if (typeof value === 'object') {
            // Prevent onChange propagation in one place
            return;
        }
    }}
>
    <RadioButton>
        <input
            type="text"
            onChange={(event) => {
                // Prevent onChange propagation
                event.stopPropagation();
            }}
        />
    </RadioButton>
</RadioGroup>
```

## API

### Properties

#### RadioGroup

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
className | Object | | Customized className for the component.
style | Object | | Customized style for the component.
disabled | Boolean | false | If true, the radio group will be displayed as disasbled.
name | String | | Name for the input element group.
value | Any | | Default value selected in the radio group.
onChange | Function | | Callback function that will be invoked when the value changes.

#### RadioButton

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
className | Object | | Customized class name for the component.
style | Object | | Customized style for the component.
inputClassName | Object | | Customized class name for the radio button.
inputStyle | Object | | Customized style for the radio button.
checked | Boolean | | If true, the radio button will be selected. Transferred from the radio group.
defaultChecked | Boolean | | The default checked state of the radio button.
disabled | Boolean | false | If true, the radio button will be shown as disabled and cannot be modified.
label | Node or String | | Label for the radio button.
name | String | | Name for the input element.
value | Any | | Value for the radio button.
onChange | Function | | Callback function that will be invoked when the value changes.

### Class Properties

#### RadioButton

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
