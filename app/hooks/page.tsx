"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HowToUseState() {

    const initialCount = 0;

    const [count, setCount] = useState(initialCount);
    const [countSquared, setCountSquared] = useState(initialCount)

    useEffect(() => {
        setCountSquared(count * count)
    }, [count])

    return <div className="content-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Button onClick={() => setCount(count + 1)}>Plus one</Button>
        <div>
            <div>Count: {count}</div>
            <div>Count squared: {countSquared}</div>
        </div>

    </div>

}