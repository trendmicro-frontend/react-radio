import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Uncontrolled from './Uncontrolled';
import Controlled from './Controlled';

class App extends React.Component {
    render() {
        const name = 'React Radio Button';
        const url = 'https://github.com/trendmicro-frontend/react-radio-button';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="col-lg-6 col-md-12">
                        <Uncontrolled />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Controlled />
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
