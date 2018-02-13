import chainedFunction from 'chained-function';
import React, { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

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
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value, event);
        }
    };

    renderChildren = (children) => {
        const mapChild = (child) => {
            if (!React.isValidElement(child) || !child.props) {
                return child;
            }

            if (child.type === RadioGroup) {
                // No nested radio groups
                return child;
            }

            if (child.type === RadioButton) {
                return cloneElement(child, {
                    checked: this.props.value === child.props.value,
                    disabled: this.props.disabled || child.props.disabled,
                    onChange: chainedFunction(
                        child.props.onChange,
                        (event) => {
                            this.handleChange(child.props.value, event);
                        }
                    )
                });
            }

            if (child.props.children && typeof child.props.children === 'object') {
                return cloneElement(child, {
                    children: this.renderChildren(child.props.children)
                });
            }

            return child;
        };

        if (Array.isArray(children)) {
            return React.Children.map(children, mapChild);
        } else {
            return mapChild(children);
        }
    };

    render() {
        return this.renderChildren(this.props.children);
    }
}

export default RadioGroup;
