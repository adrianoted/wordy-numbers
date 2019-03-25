import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

import TestArea from '../Containers/TestArea'

const MainContent = () => {
    return (
        <React.Fragment>
            <Container fluid className="wn-top-container">
                <div className="wn-title">
                    <h1>Wordy - Numbers</h1>
                    <p>A world full of numbers made of words...</p>
                </div>
            </Container>

            <Segment className="wn-text-area-box">
                <TestArea/>
            </Segment>
        </React.Fragment >
    );
}

export default MainContent;