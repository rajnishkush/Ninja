import { useContext, useEffect } from "react";
import '../styles/ToggleBtn.css';
import HabitContext from '../context/HabitContext';

const ToggleBtn = () => {
    const { darkMode, setDarkMode } = useContext(HabitContext);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', darkMode)
    }, [darkMode]);

    return (
        <div>
            <input
                className="toggle-checkbox"
                type="checkbox"
                id="toggle"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <label htmlFor="toggle" className="toggle" />
        </div>
    );
}

export default ToggleBtn;