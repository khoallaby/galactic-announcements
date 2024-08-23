import React, { useState, useEffect } from 'react';

export default function Announcements() {
    const [data, setData] = useState([]);

    // fetch data from api
    useEffect(() => {
        fetch('/api/announcements')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }

                return response.json();
            })
            // success: set data to state
            .then(data => setData(data))
            .catch(error => console.error('error:', error));
    }, []);


    return (
        <div>
            <table border="1">
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Body</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.author}</td>
                            <td>{item.body}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
