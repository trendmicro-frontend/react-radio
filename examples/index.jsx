import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Section from './Section';
import RadioButton from '../src';

class App extends React.Component {
    render() {
        const name = 'React Radio Button';
        const url = 'https://github.com/trendmicro-frontend/react-radio-button';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="col-md-12">
                        <Section className="row-md-6">
                            <div className="col-md-12">
                                <h3 style={{ margin: '16px 0' }}>
                                    Radio Buttons
                                </h3>
                                <p>A radio button allows the user to select an option from a list of options.</p>
                                <p>Adhere to the following when using a radio button:</p>
                                <ul>
                                    <li>Always offer a default selection</li>
                                    <li>The options must be mutually exclusive</li>
                                    <li>A listed option is either checked or unchecked</li>
                                    <li>Use sentence case for the listed options</li>
                                    <li>Align the options vertically whenever possible</li>
                                    <li>Make labels clickable whenever possible</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Radio Button</h6>
                                <label className="radio">
                                    <input type="radio" />
                                    Normal
                                </label>
                                <label className="radio">
                                    <input type="radio" defaultChecked />
                                    Checked
                                </label>
                                <label className="radio disabled">
                                    <input type="radio" defaultChecked disabled />
                                    Checked disabled
                                </label>
                                <label className="radio disabled">
                                    <input type="radio" disabled />
                                    Disabled
                                </label>
                            </div>
                            <div className="col-md-6">
                                <h6>React Radio Button</h6>
                                <RadioButton className="radio" text="Normal" />
                                <RadioButton className="radio" text="Checked" defaultChecked />
                                <RadioButton className="radio" text="Checked disabled" defaultChecked disabled />
                                <RadioButton className="radio" text="Disabled" disabled />
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-4">
                            <div className="col-md-12">
                                <h5>Default (stacked)</h5>
                            </div>
                            <div className="col-md-6">
                                <h6>HTML Radio Button</h6>
                                <label className="radio">
                                    <input type="radio" name="default" />
                                    Normal label one
                                </label>
                                <label className="radio">
                                    <input type="radio" name="default" />
                                    Normal label two
                                </label>
                                <label className="radio disabled">
                                    <input type="radio" name="default" disabled />
                                    Disabled label
                                </label>
                                <label className="radio">
                                    <input type="radio" name="default" defaultChecked />
                                    Checked label
                                    <div>
                                        <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                        <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                                    </div>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <h6>React Radio Button</h6>
                                <RadioButton className="radio" name="default2" text="Normal label one" />
                                <RadioButton className="radio" name="default2" text="Normal label two" />
                                <RadioButton className="radio" name="default2" text="Disabled label" disabled />
                                <RadioButton className="radio" name="default2" text="Checked label" defaultChecked>
                                    <div>
                                        <div>Sed posuere consecteyur est at lobortus. Aenean eu leo quam.</div>
                                        <div>Pellentesque omare sem lacinia quam venenatis vestibulum.</div>
                                    </div>
                                </RadioButton>
                            </div>
                        </Section>
                    </div>
                    <div className="col-md-12">
                        <Section className="row-md-2">
                            <div className="col-md-12">
                                <h5>Inline</h5>
                            </div>
                            <div className="col-md-6">
                                <label className="radio-inline">
                                    <input type="radio" name="inline" />
                                    Normal label
                                </label>
                                <label className="radio-inline disabled">
                                    <input type="radio" name="inline" disabled />
                                    Disabled label
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="inline" defaultChecked />
                                    Checked label
                                </label>
                            </div>
                            <div className="col-md-6">
                                <RadioButton className="radio-inline" name="inline2" text="Normal label" />
                                <RadioButton className="radio-inline" name="inline2" text="Disabled label" disabled />
                                <RadioButton className="radio-inline" name="inline2" text="Checked label" defaultChecked />
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
