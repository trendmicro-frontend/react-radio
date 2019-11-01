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

class RadioButton extends React.Component {
    static propTypes = {
        /**
         * Label for the radio button.
         */
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]), // deprecated

        /**
         * If true, the radio button will be shown as disabled and cannot be modified.
         */
        disabled: PropTypes.bool,

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
        onChange: PropTypes.func
    };

    static defaultProps = {
        tag: 'label',
        disabled: false
    };

    radioButtonRef = React.createRef();

    get checked() {
        if (!this.radioButtonRef.current) {
            return null;
        }
        return this.radioButtonRef.current.checked;
    }

    render() {
        const {
            label, // deprecated
            disabled,
            value,
            tag: Tag,
            onChange = noop,

            // Default props
            className,
            style,
            children,
            ...props
        } = this.props;

        if (label !== undefined) {
            deprecate({
                deprecatedPropName: 'label',
                remappedPropName: 'children',
            });
        }

        return (
            <RadioGroupContext.Consumer>
                {(radioGroup) => {
                    if (radioGroup.value !== undefined) {
                        props.checked = (radioGroup.value === value);
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
                        >
                            <input
                                {...props}
                                ref={this.radioButtonRef}
                                type="radio"
                                disabled={radioDisabled}
                                value={value}
                                onChange={radioOnChange}
                                className={styles.inputRadio}
                            />
                            <div className={styles.controlIndicator} />
                            {
                                label ? <div className={styles.textLabel}>{label}</div> : null // deprecated
                            }
                            {typeof children === 'function'
                                ? children({
                                    value,
                                    checked: props.checked,
                                    disabled: radioDisabled,
                                    onChange: radioOnChange
                                })
                                : children
                            }
                        </Tag>
                    );
                }}
            </RadioGroupContext.Consumer>
        );
    }
}

export default RadioButton;
