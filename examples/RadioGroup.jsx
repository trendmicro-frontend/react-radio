import '@trendmicro/react-tooltip/dist/react-tooltip.css';
import { Tooltip } from '@trendmicro/react-tooltip';
import React, { PureComponent } from 'react';
import Section from './Section';
import { RadioGroup, RadioButton } from '../src';

export default class extends PureComponent {
    state = {
        ports: 'all',
        comic: 'dc:batman'
    };

    handleChangeByKey = (key) => (value, event) => {
        if (typeof value === 'object' && event === undefined) {
            // Prevent onChange propagation
            return;
        }

        this.setState({ [key]: value });
    };

    render() {
        return (
            <Section className="row-sm-11 row-md-6">
                <h3>Radio Group</h3>
                <h5>Stacked</h5>
                <p>{`Selected: "${this.state.ports}"`}</p>
                <RadioGroup
                    name="ports"
                    value={this.state.ports}
                    onChange={this.handleChangeByKey('ports')}
                >
                    <div>
                        <RadioButton label="All ports" value="all" />
                        <Tooltip content="All ports">
                            <i className="fa fa-info-circle" style={{ marginLeft: 8 }} />
                        </Tooltip>
                    </div>
                    <div>
                        <RadioButton
                            label="Specified ports"
                            value="custom"
                        />
                        <Tooltip content="Specified ports">
                            <i className="fa fa-info-circle" style={{ marginLeft: 8 }} />
                        </Tooltip>
                        <div style={{ marginLeft: 22 }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={this.state.ports === 'custom' ? '1-1023, 8000, 8080' : ''}
                                disabled={this.state.ports !== 'custom'}
                                onChange={event => {
                                    event.stopPropagation();
                                }}
                            />
                            <div className="text-muted">
                                Use a comma to separate multiple ports.
                            </div>
                        </div>
                    </div>
                    <div>
                        <RadioButton label="Range" value="range" />
                        <div style={{ marginLeft: 22 }}>
                            <div className="row">
                                <div className="col-xs-6">
                                    <input
                                        type="text"
                                        name="from"
                                        className="form-control"
                                        placeholder={this.state.ports === 'range' ? 'From' : ''}
                                        disabled={this.state.ports !== 'range'}
                                        onChange={event => {
                                            //event.stopPropagation();
                                        }}
                                    />
                                </div>
                                <div className="col-xs-6">
                                    <input
                                        type="text"
                                        name="to"
                                        className="form-control"
                                        placeholder={this.state.ports === 'range' ? 'To' : ''}
                                        disabled={this.state.ports !== 'range'}
                                        onChange={event => {
                                            //event.stopPropagation();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </RadioGroup>
                <h5>Inline</h5>
                <p>{`Selected: "${this.state.comic}"`}</p>
                <RadioGroup
                    name="comic"
                    value={this.state.comic}
                    onChange={this.handleChangeByKey('comic')}
                >
                    <RadioButton label="Batman (DC)" value="dc:batman" />
                    <RadioButton label="Hulk (Marvel)" value="marvel:hulk" />
                    <RadioButton label="Superman (DC)" value="dc:superman" />
                    <RadioButton label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
                </RadioGroup>
            </Section>
        );
    }
}
