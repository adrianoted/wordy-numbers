import React from 'react';
import { Header, Segment } from 'semantic-ui-react'


const ResultBox = (props) => {
    const {result} = props;

    return (
        <div className="resultBox">
            <Header as="h2">The result is:</Header>
            <Segment className="wn-result-box">
                <Header as="h3">{result} </Header>
            </Segment>
        </div>
    );
};

export default ResultBox;