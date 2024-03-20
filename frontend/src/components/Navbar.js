import ToggleBtn from "./ToggleBtn";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h2>Habit Tracker</h2>
                <ToggleBtn />
            </div>
        </header>
    );
}

export default Navbar;