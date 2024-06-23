import React, { useEffect, useState } from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; // access to html element

    // set theme to localstorage and html element
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.add("light");
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className={`relative ${theme === "dark" ? "" : "bg-white text-black"}`}>
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={LightButton}
                alt='Light Mode Button'
                className={`w-8 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
            />
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={DarkButton}
                alt='Dark Mode Button'
                className={`w-6 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`}
            />
        </div>
    );
};

export default DarkMode;
