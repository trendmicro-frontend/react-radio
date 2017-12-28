import React, { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

// Maps children and its children
// @param {object} children React component children
// @param {function} deepMapFn Deep Map callback
// @returns {array} Deep Mapped children
const deepMap = (children, deepMapFn) => React.Children.map(children, (child) => {
    if (child.props && child.props.children && typeof child.props.children === 'object') {
        // Clone the child that has children and map them as well
        return deepMapFn(cloneElement(child, {
            ...child.props,
            children: deepMap(child.props.children, deepMapFn)
        }));
    }
    return deepMapFn(child);
});

class RadioGroup extends PureComponent {
    static propTypes = {
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        value: PropTypes.any
    };

    static defaultProps = {
        disabled: false
    };

    handleChange = (value, event) => {
        event.stopPropagation();

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value, event);
        }
    };

    renderRadioButtons(children) {
        return deepMap(children, child => {
            if (React.isValidElement(child) && child.type === RadioButton) {
                return cloneElement(child, {
                    checked: this.props.value === child.props.value,
                    disabled: this.props.disabled || child.props.disabled,
                    onChange: this.handleChange.bind(this, child.props.value)
                });
            }

            return child;
        });
    }

    render() {
        const {
            children,
            ...props
        } = this.props;

        return (
            <div {...props}>
                {this.renderRadioButtons(children)}
            </div>
        );
    }
}

export default RadioGroup;
