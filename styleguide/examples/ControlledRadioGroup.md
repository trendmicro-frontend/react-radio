```jsx
initialState = {
    ports: 'all',
    comic: 'dc:batman'
};

const handleChangeByKey = (key) => (event) => {
    const value = event.target.value;
    setState({ [key]: value });
};

<Container fluid>
    <Row>
        <Col>
            <FormGroup>
                <Text size={20}>
                    Stacked
                </Text>
            </FormGroup>
            <FormGroup>
                {`Selected: "${state.ports}"`}
            </FormGroup>
            <RadioGroup
                name="ports"
                value={state.ports}
                onChange={handleChangeByKey('ports')}
            >
                <FormGroup>
                    <RadioButton value="all">
                        {'All ports'}
                    </RadioButton>
                </FormGroup>
                <FormGroup>
                    <RadioButton value="custom">
                        {'Specified ports'}
                    </RadioButton>
                    <div style={{ marginLeft: 22 }}>
                        <Input
                            type="text"
                            placeholder={state.ports === 'custom' ? '1-1023, 8000, 8080' : ''}
                            disabled={state.ports !== 'custom'}
                            onChange={event => {
                                event.stopPropagation();
                            }}
                        />
                        <Text color="#888">
                            Use a comma to separate multiple ports.
                        </Text>
                    </div>
                </FormGroup>
                <FormGroup>
                    <RadioButton value="range">
                        {'Range'}
                    </RadioButton>
                </FormGroup>
                <FormGroup style={{ marginLeft: 22 }}>
                    <Row>
                        <Col>
                            <Input
                                type="text"
                                name="from"
                                placeholder={state.ports === 'range' ? 'From' : ''}
                                disabled={state.ports !== 'range'}
                                onChange={event => {
                                    //event.stopPropagation();
                                }}
                            />
                        </Col>
                        <Col width="auto" style={{ width: 16 }} />
                        <Col>
                            <Input
                                type="text"
                                name="to"
                                placeholder={state.ports === 'range' ? 'To' : ''}
                                disabled={state.ports !== 'range'}
                                onChange={event => {
                                    //event.stopPropagation();
                                }}
                            />
                        </Col>
                    </Row>
                </FormGroup>
            </RadioGroup>
        </Col>
        <Col width="auto" style={{ width: 24 }} />
        <Col>
            <FormGroup>
                <Text size={20}>
                    Inline
                </Text>
            </FormGroup>
            <FormGroup>
                {`Selected: "${state.comic}"`}
            </FormGroup>
            <FormGroup>
                <RadioGroup
                    name="comic"
                    value={state.comic}
                    onChange={handleChangeByKey('comic')}
                >
                    <RadioButton value="dc:batman">{'Batman (DC)'}</RadioButton>
                    <RadioButton value="marvel:hulk">{'Hulk (Marvel)'}</RadioButton>
                    <RadioButton value="dc:superman">{'Superman (DC)'}</RadioButton>
                    <RadioButton value="marvel:spiderman" disabled>{'Spider-Man (Marvel)'}</RadioButton>
                </RadioGroup>
            </FormGroup>
        </Col>
    </Row>
</Container>
```
