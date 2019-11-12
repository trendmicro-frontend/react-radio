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
<RadioButton>RadioButton label</RadioButton>
```

You can use children to pass through the component.

```jsx
<RadioButton>
    <span style={{ verticalAlign: 'middle', marginLeft: 8 }}>
        Lorem ipsum dolor sit amet...
    </span>
</RadioButton>
```

Or pass tag to customize the wrapper component.
```jsx
<RadioButton tag='span'>
    Lorem ipsum dolor sit amet...
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
    onChange={(event) => {
        const value = event.target.value;
        this.setState({ value: value });
    }}
>
    <div className="row">
        <div className="col-xs-12 col-sm-6">
            <RadioButton value="dc:batman">Batman (DC)</RadioButton>
            <RadioButton value="marvel:hulk">Hulk (Marvel)</RadioButton>
        </div>
        <div className="col-xs-12 col-sm-6">
            <RadioButton value="dc:superman">Superman (DC)</RadioButton>
            <RadioButton value="marvel:spiderman" disabled>Spider-Man (Marvel)</RadioButton>
        </div>
    </div>
</RadioGroup>
```

## Prevent onChange Propagation

You may need to use `event.stopPropagation()` to stop **onChange** propagation when wrapping an input element inside the **RadioGroup** or **RadioButton** component.

```jsx
<RadioGroup
    name="radiogroup"
    value={this.state.value}
    onChange={(event) => {
        const value = event.target.value;
        this.setState({ value: value });
    }}
>
    <RadioButton value="one">
        <span>First option</span>
        <div style={{ marginLeft: 22 }}>
            <input
                type="text"
                onChange={(event) => {
                    // Prevent onChange propagation
                    event.stopPropagation();
                }}
            />
        </div>
    </RadioButton>
    <RadioButton value="two">
        <span>Second option</span>
        <div style={{ marginLeft: 22 }}>
            <input
                type="text"
                onChange={(event) => {
                    // Prevent onChange propagation
                    event.stopPropagation();
                }}
            />
        </div>
    </RadioButton>
</RadioGroup>
```

## API

### Properties

#### RadioButton

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
className | Object | | Customized class name for the component.
style | Object | | Customized style for the component.
checked | Boolean | | If true, the radio button will be selected. Transferred from the radio group.
defaultChecked | Boolean | | The default checked state of the radio button.
disabled | Boolean | false | If true, the radio button will be shown as disabled and cannot be modified.
tag | Function or String | label | Customized wrapper component to replace label.
id | String | | Id for the input field of radio button.
name | String | | Name for the input element.
value | any | | Value for the radio button.
onChange | Function | | Callback function that will be invoked when the value changes.

#### RadioGroup

Name | Type | Default | Description
:--- | :--- | :------ | :----------
children | any | | Children to pass through the component.
disabled | Boolean | false | If true, the radio group will be displayed as disabled.
name | String | | Name for the input element group.
value | any | | The value of the radio group.
defaultValue | any | | The default value of the radio group.
onChange | Function | | Callback function that will be invoked when the value changes.

### Class Properties

#### RadioButton

Use the ref property to get a reference to radio button:

```jsx
const ref = React.createRef();
<RadioButton ref={ref} />
```

## License

MIT
