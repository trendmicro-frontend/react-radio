import chainedFunction from 'chained-function';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from './shared/prop-types';
import { RadioGroupContext } from './context';
import styles from './index.styl';

const noop = () => {};
const deprecate = ({ deprecatedPropName, remappedPropName }) => {
    console.warn(`Warning: the "${deprecatedPropName}" prop is deprecated. Use "${remappedPropName}" instead.`);
};

const RadioButton = React.forwardRef((props, ref) => {
    const {
        label, // deprecated
        disabled,
        id,
        name,
        value,
        tag: Tag,
        onChange = noop,
        onBlur = noop,
        onFocus = noop,
        checked,
        defaultChecked,

        // Default props
        className,
        style,
        children,
        ...restProps
    } = props;

    if (label !== undefined) {
        deprecate({
            deprecatedPropName: 'label',
            remappedPropName: 'children',
        });
    }

    return (
        <RadioGroupContext.Consumer>
            {(radioGroup) => {
                let radioChecked = checked;
                if (radioGroup.value !== undefined) {
                    radioChecked = (radioGroup.value === value);
                }
                const radioDisabled = radioGroup.disabled || disabled;
                const radioOnChange = chainedFunction(
                    onChange,
                    radioGroup.onChange,
                );

                return (
                    <Tag
                        className={cx(
                            className,
                            styles.controlRadio,
                            { [styles.disabled]: radioDisabled }
                        )}
                        style={style}
                        {...restProps}
                    >
                        <input
                            id={id}
                            name={name}
                            ref={ref}
                            type="radio"
                            disabled={radioDisabled}
                            value={value}
                            checked={radioChecked}
                            defaultChecked={defaultChecked}
                            onChange={radioOnChange}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            className={styles.inputRadio}
                        />
                        <div className={styles.controlIndicator} />
                        {
                            label ? <div className={styles.textLabel}>{label}</div> : null // deprecated
                        }
                        {typeof children === 'function'
                            ? children({
                                value,
                                checked: radioChecked,
                                disabled: radioDisabled,
                                onChange: radioOnChange,
                                onBlur: onBlur,
                                onFocus: onFocus,
                            })
                            : children
                        }
                    </Tag>
                );
            }}
        </RadioGroupContext.Consumer>
    );
});

RadioButton.propTypes = {
    /**
     * [Deprecated] Label for the radio button.
     */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]), // deprecated

    /**
     * Children to pass through the component.
     */
    children: PropTypes.any,

    /**
     * If true, the radio button will be shown as disabled and cannot be modified.
     */
    disabled: PropTypes.bool,

    /**
     * Id for the input field of radio button.
     */
    id: PropTypes.string,

    /**
     * Name for the input field of radio button.
     */
    name: PropTypes.string,

    /**
     * Value for the radio button.
     */
    value: PropTypes.any,

    /**
     * Tag is a element to replace <label/> of radio button.
     */
    tag: sharedPropTypes.tag,

    /**
     * Get the checked state.
     */
    checked: PropTypes.bool,

    /**
     * The default checked state of the radio button.
     */
    defaultChecked: PropTypes.bool,

    /**
     * Callback function that will be invoked when the value changes.
     */
    onChange: PropTypes.func,

    /**
     * Callback function that will be invoked when the focus is removed from radio button.
     */
    onBlur: PropTypes.func,

    /**
     * Callback function that will be invoked when the focus is set on radio button.
     */
    onFocus: PropTypes.func
};

RadioButton.defaultProps = {
    tag: 'label',
    disabled: false
};

export default RadioButton;
