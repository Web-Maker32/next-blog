"use client"
import { useState } from 'react';
export default function Counter() {
const [count,setcount] = useState(0);
 
setTimeout(() => setcount(count + 1), 1000);

return <div>count is {count}</div>;
}