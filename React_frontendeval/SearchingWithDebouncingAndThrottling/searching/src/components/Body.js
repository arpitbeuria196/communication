import React, { useEffect, useState } from "react";

const DebounceLogic = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => {
            fn(...args); // Call the function after delay
            console.log("Debounced:", ...args);
        }, delay);
    };
};

const ThrottleLogic = (fn, delay) => {
    let lastCall = 0;

    return function (...args) {
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now; // Update last call time
            fn(...args); // Call the function
            console.log("Throttled:", ...args);
        }
    };
};

const Body = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchValueDebounce, setSearchValueDebounce] = useState("");
    const [searchValueThrottle, setSearchValueThrottle] = useState("");

    // Debounced function to update state
    const debounceHandle = DebounceLogic((value) => {
        setSearchValueDebounce(value);
    }, 1000);

    const handleDebounce = (e) => {
        debounceHandle(e.target.value); // Pass input value to debounced function
    };

    // Throttled function to update state
    const throttleHandle = ThrottleLogic((value) => {
        setSearchValueThrottle(value);
    }, 1000);

    const handleThrottle = (e) => {
        throttleHandle(e.target.value); // Pass input value to throttled function
    };

    useEffect(() => {
        if (searchValueDebounce) {
            console.log("Debounced Search Value:", searchValueDebounce);
        }
    }, [searchValueDebounce]);

    useEffect(() => {
        if (searchValueThrottle) {
            console.log("Throttled Search Value:", searchValueThrottle);
        }
    }, [searchValueThrottle]);

    return (
        <div>
            <h1 className="text-lg font-bold mb-4">Debounce and Throttle Example</h1>

            {/* Input without any delay logic */}
            <input
                placeholder="Real-Time Search"
                className="border p-2 m-2 rounded-lg"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    console.log("Real-Time Search Value:", e.target.value);
                }}
            />

            {/* Input with Debounce */}
            <input
                placeholder="Debounced Search"
                className="border p-2 m-2 rounded-lg"
                value={searchValueDebounce}
                onChange={handleDebounce}
            />

            {/* Input with Throttle */}
            <input
                placeholder="Throttled Search"
                className="border p-2 m-2 rounded-lg"
                value={searchValueThrottle}
                onChange={handleThrottle}
            />
        </div>
    );
};

export default Body;
