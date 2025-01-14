import { useState, useEffect } from "react";

export default function APITest() {
    const [testString, setTestString] = useState('Test');

    async function handleClick() {
        try {
            const response = await fetch('https://sturdy-space-spork-x9wx9v79774fjxg-3001.app.github.dev/api/example/');
            const data = await response.json();

            setTestString(`Data: ${data.message}`);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setTestString('Failed to fetch data');
        }
    }

    return (
        <div>
            <p>{testString}</p>
            <button onClick={handleClick}>Get Data</button>
        </div>
    )
}