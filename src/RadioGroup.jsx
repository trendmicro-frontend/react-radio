import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroupContext } from './context';

class RadioGroup extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        name: PropTypes.string,
        value: PropTypes.any,
        defaultValue: PropTypes.any,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        disabled: false,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.value !== undefined && nextProps.value !== prevState.value) {
            return {
                value: nextProps.value,
            };
        }

        return null;
    }

    state = {
        value: (this.props.value !== undefined) ? this.props.value : this.props.defaultValue
    };

    handleChange = (event) => {
        if (this.props.value !== undefined) {
            // Controlled component
            const value = this.props.value;
            this.setState({ value });
        } else {
            // Uncontrolled component
            const value = event.target.value;
            this.setState({ value });
        }

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(event);
        }
    };

    render() {
        return (
            <RadioGroupContext.Provider
                value={{
                    disabled: this.props.disabled,
                    value: this.state.value,
                    onChange: this.handleChange,
                }}
            >
                {this.props.children}
            </RadioGroupContext.Provider>
        );
    }
}

export default RadioGroup;
