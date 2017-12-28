import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { RadioButton } from '../src';

const LabelText = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

export default () => (
    <Section className="row-sm-11 row-md-9">
        <h3>Uncontrolled RadioButton</h3>
        <div className="col-md-6">
            <h5>Native RadioButton (stacked)</h5>
            <div className="radio">
                <label>
                    <input type="radio" />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" defaultChecked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
            <div className="radio disabled">
                <label>
                    <input type="radio" disabled />
                    <LabelText>Unchecked (disabled)</LabelText>
                </label>
            </div>
            <div className="radio disabled">
                <label>
                    <input type="radio" defaultChecked disabled />
                    <LabelText>Checked (disabled)</LabelText>
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" />
                    <LabelText>Unchecked</LabelText>
                    <p style={{ marginLeft: (13 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </label>
            </div>
            <h5>Native RadioButton (inline)</h5>
            <div className="radio-inline">
                <label>
                    <input type="radio" />
                    <LabelText>Unchecked</LabelText>
                </label>
            </div>
            <div className="radio-inline">
                <label>
                    <input type="radio" defaultChecked />
                    <LabelText>Checked</LabelText>
                </label>
            </div>
        </div>
        <div className="col-md-6">
            <h5>React RadioButton (stacked)</h5>
            <div className="radio">
                <RadioButton
                    label="Unchecked"
                />
            </div>
            <div className="radio">
                <RadioButton
                    defaultChecked
                    label="Checked"
                />
            </div>
            <div className="radio">
                <RadioButton
                    disabled
                    label="Unchecked (disabled)"
                />
            </div>
            <div className="radio">
                <RadioButton
                    defaultChecked
                    disabled
                    label="Checked (disabled)"
                />
            </div>
            <div className="radio">
                <RadioButton
                    label="Unchecked"
                >
                    <p style={{ marginLeft: (16 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </RadioButton>
            </div>
            <h5>React RadioButton (inline)</h5>
            <div className="radio-inline">
                <RadioButton
                    label="Unchecked"
                />
            </div>
            <div className="radio-inline">
                <RadioButton
                    defaultChecked
                    label="Checked"
                />
            </div>
        </div>
    </Section>
);
