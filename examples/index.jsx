import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import UncontrolledRadioButton from './UncontrolledRadioButton';
import ControlledRadioButton from './ControlledRadioButton';
import UncontrolledRadioGroup from './UncontrolledRadioGroup';
import ControlledRadioGroup from './ControlledRadioGroup';

const name = 'React Radio';
const url = 'https://github.com/trendmicro-frontend/react-radio';

const App = () => (
    <div>
        <Navbar name={name} url={url} />
        <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
            <div className="col-lg-6 col-md-12">
                <UncontrolledRadioButton />
            </div>
            <div className="col-lg-6 col-md-12">
                <ControlledRadioButton />
            </div>
            <div className="col-lg-6 col-md-12">
                <UncontrolledRadioGroup />
            </div>
            <div className="col-lg-6 col-md-12">
                <ControlledRadioGroup />
            </div>
        </div>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
