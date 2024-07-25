"use client";

import { useState } from "react"

export default function AnimatedMain(
    {children,...props}
) {
    const [opacity,setOpacity] = useState(0);
    let loadEffect = setTimeout(()=>{
        clearTimeout(loadEffect);
        setOpacity(1);
    },100)
    return <main {...props} style={{
        "--opacity":opacity,
    }}>
        {children}
    </main>
}