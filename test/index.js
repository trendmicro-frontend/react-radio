import '../setupTests';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import sinon from 'sinon';
import { test } from 'tap';
import RadioButton from '../src';

test('<RadioButton />', (t) => {
    const wrapper = mount(<RadioButton />);
    t.equal(wrapper.find(RadioButton).length, 1, 'should render <RadioButton /> component');
    t.end();
});

test('checked state', (t) => {
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

test('renders text label', (t) => {
    const wrapper = mount(<RadioButton />);
    t.equal(wrapper.props().label, undefined, 'text label should be empty');
    wrapper.setProps({ label: 'My label' }); // Set new label
    t.equal(wrapper.props().label, 'My label', `text label should be equal to 'My label'`);
    t.equal(wrapper.text(), 'My label', `text label should be equal to 'My label'`);
    t.end();
});

test('renders children when passed in', (t) => {
    const wrapper = mount(
        <RadioButton>
            <p>Lorem ipsum</p>
        </RadioButton>
    );
    t.ok(wrapper.contains(<p>Lorem ipsum</p>));
    t.end();
});

test('simulates change event', (t) => {
    const onChange = sinon.spy();
    const wrapper = mount(<RadioButton onChange={onChange} />);
    wrapper.find('input').simulate('change');
    t.ok(onChange.calledOnce);
    t.end();
});
