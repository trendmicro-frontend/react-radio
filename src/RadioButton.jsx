import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.styl';

class RadioButton extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        text: PropTypes.string
    };

    render() {
        const {
            className,
            children,
            disabled,
            text,
            ...props
        } = this.props;
        return (
            <label
                className={classNames(
                    className,
                    styles.controlRadio,
                    { [styles.disabled]: disabled }
                )}
            >
                <input
                    {...props}
                    type="radio"
                    disabled={disabled}
                    className={styles.inputRadio}
                />
                <i className={styles.controlIndicator} />
                { text }
                { children }
            </label>
        );
    }
}

export default RadioButton;
