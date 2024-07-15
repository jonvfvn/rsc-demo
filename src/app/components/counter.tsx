"use client";

import { ReactNode, useState } from "react";
import ServerComponent from "./server-only";

// export default function Counter() {
export default function Counter(props: { label?: ReactNode }) {
        const [count, setCount] = useState(0);

        return (
            <div className="flex items-center justify-center">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="rounded-full bg-blue-500 px-8 py-2 text-white hover:bg-blue-600"
                >
                    {/* Click me */}
                    {props.label}
                </button>
            <div className="ml-4">Count: {count}</div>
        </div>
    );
}