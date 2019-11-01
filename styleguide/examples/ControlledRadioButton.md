```jsx
<Container fluid>
    <Row>
        <Col>
            <FormGroup>
                <Text size={20}>
                    Native Radio Button (stacked)
                </Text>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" checked={false} readOnly />
                    <Text>Unchecked</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" checked readOnly />
                    <Text>Checked</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" checked={false} disabled />
                    <Text>Unchecked (disabled)</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input
                        type="radio"
                        checked
                        disabled
                        readOnly
                    />
                    <Text>Checked (disabled)</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" checked={false} readOnly />
                    <Text>Unchecked</Text>
                    <p style={{ marginLeft: (13 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </label>
            </FormGroup>
            <FormGroup>
                <Text size={20}>
                    Native Radio Button (inline)
                </Text>
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup>
                        <label>
                            <input type="radio" checked={false} readOnly />
                            <Text>Unchecked</Text>
                        </label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <label>
                            <input type="radio" checked readOnly />
                            <Text>Checked</Text>
                        </label>
                    </FormGroup>
                </Col>
            </Row>
        </Col>
        <Col>
            <FormGroup>
                <Text size={20}>
                    React Radio Button (stacked)
                </Text>
            </FormGroup>
            <FormGroup>
                <RadioButton checked={false}>
                    {'Unchecked'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton checked>
                    {'Checked'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton
                    checked={false}
                    disabled
                >
                    {'Unchecked (disabled)'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton
                    checked
                    disabled
                >
                    {'Checked (disabled)'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton checked={false}>
                    {({ value, checked, disabled, onChange }) => (
                        <Fragment>
                            <span>Unchecked</span>
                            <p style={{ marginLeft: (16 + 8) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Fragment>
                    )}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <Text size={20}>
                    React Radio Button (inline)
                </Text>
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup>
                        <RadioButton checked={false}>
                            {'Unchecked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <RadioButton checked>
                            {'Checked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Text size={20}>
                    Customizing the wrapper component
                </Text>
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup>
                        <RadioButton
                            checked={false}
                            tag="div"
                        >
                            {'Unchecked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <RadioButton
                            checked={false}
                            tag={CustomizedTag}
                        >
                            {'Unchecked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
```
