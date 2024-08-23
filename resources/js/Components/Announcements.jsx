import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

    const dateReadable = (dateString) => {
        const date = new Date(dateString);

        // Convert the date to a readable format
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

    }

    return (
        <>
            {data.map((item, index) => (
                <article
                    className="mb-2 p-6 border rounded border-gray-200 shadow"
                    key={index}
                >
                    <h2 className="mb-2 text-2xl font-bold text-black">{item.author}</h2>
                    <p className="mb-3 text-gray-700">
                        <Markdown remarkPlugins={[remarkGfm]}>{item.body}</Markdown>
                    </p>
                    <p className="mb-3 text-black text-xs">{dateReadable(item.date)}</p>
                </article>
            ))}
        </>
    );
}
