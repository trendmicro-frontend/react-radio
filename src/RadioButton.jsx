import chainedFunction from 'chained-function';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroupContext } from './context';
import styles from './index.styl';

const noop = () => {};

class RadioButton extends React.Component {
    static propTypes = {
        /**
         * Label for the radio button.
         */
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),

        /**
         * If true, the radio button will be shown as disabled and cannot be modified.
         */
        disabled: PropTypes.bool,

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
            label,
            disabled,
            value,
            onChange = noop,

            // Default props
            className,
            style,
            children,
            ...props
        } = this.props;

        return (
            <RadioGroupContext.Consumer>
                {(radioGroup) => {
                    if (radioGroup.value !== undefined) {
                        props.checked = (radioGroup.value === value);
                    }

                    return (
                        <label
                            className={cx(
                                className,
                                styles.controlRadio,
                                { [styles.disabled]: radioGroup.disabled || disabled }
                            )}
                            style={style}
                        >
                            <input
                                {...props}
                                ref={this.radioButtonRef}
                                type="radio"
                                disabled={disabled || radioGroup.disabled}
                                value={value}
                                onChange={chainedFunction(
                                    onChange,
                                    radioGroup.onChange,
                                )}
                                className={styles.inputRadio}
                            />
                            <div className={styles.controlIndicator} />
                            {label ? <div className={styles.textLabel}>{label}</div> : null}
                            {children}
                        </label>
                    );
                }}
            </RadioGroupContext.Consumer>
        );
    }
}

export default RadioButton;
