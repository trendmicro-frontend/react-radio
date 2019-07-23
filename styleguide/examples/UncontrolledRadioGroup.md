```jsx
initialState = {
    ports: '',
    comic: ''
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
                onChange={handleChangeByKey('ports')}
            >
                <FormGroup>
                    <RadioButton label="All ports" value="all" />
                </FormGroup>
                <FormGroup>
                    <RadioButton
                        label="Specified ports"
                        value="custom"
                    />
                </FormGroup>
                <FormGroup style={{ marginLeft: 22 }}>
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
                </FormGroup>
                <FormGroup>
                    <RadioButton label="Range" value="range" />
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
                    onChange={handleChangeByKey('comic')}
                >
                    <RadioButton label="Batman (DC)" value="dc:batman" />
                    <RadioButton label="Hulk (Marvel)" value="marvel:hulk" />
                    <RadioButton label="Superman (DC)" value="dc:superman" />
                    <RadioButton label="Spider-Man (Marvel)" value="marvel:spiderman" disabled />
                </RadioGroup>
            </FormGroup>
        </Col>
    </Row>
</Container>
```
