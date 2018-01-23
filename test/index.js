import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { test } from 'tap';
import '../setupTests';
import { RadioButton, RadioGroup } from '../src';

test('mount', (t) => {
    test('<RadioButton />', (t) => {
        const wrapper = mount(<RadioButton />);
        t.equal(wrapper.find(RadioButton).length, 1, 'should render <RadioButton /> component');
        t.end();
    });

    t.end();
});

test('checked state', (t) => {
    test('RadioButton', (t) => {
        test('default state', (t) => {
            const wrapper = mount(<RadioButton />);
            const radioButton = wrapper.instance();
            t.equal(radioButton.checked, false, 'the default checked state is false');
            t.end();
        });

        test('controlled state', (t) => {
            const wrapper = mount(<RadioButton checked={false} />);
            const radioButton = wrapper.instance();
            t.equal(radioButton.checked, false, 'the checked state is initially set to false');
            wrapper.setProps({ checked: true });
            t.equal(radioButton.checked, true, 'the checked state is set to true');
            t.end();
        });

        test('props: defaultChecked', (t) => {
            const wrapper = mount(<RadioButton defaultChecked />);
            const radioButton = wrapper.instance();
            t.equal(radioButton.checked, true);
            t.end();
        });

        test('props: checked', (t) => {
            const wrapper = mount(<RadioButton checked />);
            const radioButton = wrapper.instance();
            t.equal(radioButton.checked, true);
            t.end();
        });

        t.end();
    });

    t.end();
});

test('renders text label', (t) => {
    test('RadioButton', (t) => {
        const wrapper = mount(<RadioButton />);
        t.equal(wrapper.props().label, undefined, 'text label should be empty');
        wrapper.setProps({ label: 'My label' }); // Set new label
        t.equal(wrapper.props().label, 'My label', 'text label should be equal to "My label"');
        t.equal(wrapper.text(), 'My label', 'text label should be equal to "My label"');
        t.end();
    });

    t.end();
});

test('renders children when passed in', (t) => {
    test('RadioButton', (t) => {
        const wrapper = mount((
            <RadioButton>
                <p>Lorem ipsum</p>
            </RadioButton>
        ));
        t.ok(wrapper.contains(<p>Lorem ipsum</p>));
        t.end();
    });

    test('RadioGroup', (t) => {
        const wrapper = mount((
            <RadioGroup>
                <RadioButton>
                    <p>Lorem ipsum</p>
                </RadioButton>
            </RadioGroup>
        ));
        t.ok(wrapper.contains(<p>Lorem ipsum</p>));
        t.end();
    });

    t.end();
});

test('simulates change event', (t) => {
    test('RadioButton', (t) => {
        const spy = sinon.spy();
        const wrapper = mount(<RadioButton onChange={spy} />);
        wrapper.find('input').simulate('change');
        t.ok(spy.calledOnce);
        t.end();
    });

    test('RadioGroup', (t) => {
        const spy = sinon.spy();
        const wrapper = mount((
            <RadioGroup name="name" onChange={spy}>
                <RadioButton value="value" />
            </RadioGroup>
        ));
        wrapper.find('input').simulate('change');

        t.ok(spy.calledOnce);
        t.equal(spy.getCall(0).args[0], 'value');
        t.end();
    });

    t.end();
});

test('prevents onChange propagation', (t) => {
    test('RadioButton', (t) => {
        const spy = sinon.spy();
        const wrapper = mount((
            <RadioButton id="radio" value="value" onChange={spy}>
                <input
                    type="text"
                    id="name"
                    onChange={event => {
                        // Prevent onChange propagation
                        event.stopPropagation();
                    }}
                />
            </RadioButton>
        ));
        wrapper.find('#name').simulate('change');
        t.equal(spy.callCount, 0, 'RadioButton\'s onChange should not be called');
        t.end();
    });

    test('RadioGroup', (t) => {
        const spy = sinon.spy();
        const wrapper = mount((
            <RadioGroup onChange={spy}>
                <RadioButton id="radio" value="value">
                    <input
                        type="text"
                        id="name"
                        onChange={event => {
                            // Prevent onChange propagation
                            event.stopPropagation();
                        }}
                    />
                </RadioButton>
            </RadioGroup>
        ));
        wrapper.find('#name').simulate('change');
        t.equal(spy.callCount, 0, 'RadioGroup\'s onChange should not be called');
        t.end();
    });

    t.end();
});
