import React from 'react';

const ErrorMessage = ({error}) => {
    return (
        <div className="app">
            <div className="no-results">
                <p>Error fetching data, error: ${error?.message ?? "Unknown error"}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;
