import React, { useState, useEffect } from 'react';

export default function Announcements() {
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
