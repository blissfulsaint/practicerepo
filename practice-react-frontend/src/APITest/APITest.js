import { useState, useEffect } from "react";

export default function APITest() {
    const [testString, setTestString] = useState('Test');

    async function handleClick() {
        try {
            const response = await fetch('http://localhost:3001/api/example/');
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