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
                    <input type="radio" />
                    <Text>Unchecked</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" defaultChecked />
                    <Text>Checked</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" disabled />
                    <Text>Unchecked (disabled)</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" defaultChecked disabled />
                    <Text>Checked (disabled)</Text>
                </label>
            </FormGroup>
            <FormGroup>
                <label>
                    <input type="radio" />
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
                            <input type="radio" />
                            <Text>Unchecked</Text>
                        </label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <label>
                            <input type="radio" defaultChecked />
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
                <RadioButton>
                    {'Unchecked'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton defaultChecked>
                    {'Checked'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton disabled>
                    {'Unchecked (disabled)'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton
                    defaultChecked
                    disabled
                >
                    {'Checked (disabled)'}
                </RadioButton>
            </FormGroup>
            <FormGroup>
                <RadioButton>
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
                        <RadioButton>
                            {'Unchecked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <RadioButton defaultChecked>
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
                            defaultChecked
                            tag="div"
                        >
                            {'Checked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <RadioButton
                            defaultChecked
                            tag={CustomizedTag}
                        >
                            {'Checked'}
                        </RadioButton>
                    </FormGroup>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
```
