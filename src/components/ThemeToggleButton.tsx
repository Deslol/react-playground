import {useThemeUpdate} from "../customHooks/ThemeProvider";

export default function ThemeToggleButton() {
    const themeButtonHandler = useThemeUpdate()
    return (
        <button onClick={themeButtonHandler}>
            Toggle Theme
        </button>
    );
}