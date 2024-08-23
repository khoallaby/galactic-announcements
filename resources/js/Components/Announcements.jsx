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
        <>
            {data.map((item, index) => (
                <article
                    className="mb-2 p-6 border rounded border-gray-200 shadow"
                    key={index}
                >
                    <h2 className="mb-2 text-2xl font-bold text-black">{item.author}</h2>
                    <p className="mb-3 text-gray-700">{item.body}</p>
                    <p className="mb-3 text-black text-xs">{item.date}</p>
                </article>
            ))}
        </>
    );
}
