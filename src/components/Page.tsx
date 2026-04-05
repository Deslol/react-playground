import ProfileCard from "./ProfileCard";
import ThemeToggleButton from "./ThemeToggleButton";
import Header from "./Header";
import {useTheme} from "../customHooks/ThemeProvider";

export default function Page() {

    const theme = useTheme()
    const style = {
        'padding': '20px',
        'backgroundColor': theme === 'dark' ? '#333' : '#ccc',
        'color': theme === 'dark' ? '#ccc' : '#333'
    }
    return (
        <main style={style}>
            <Header/>
            <section>
                <ProfileCard/>
                <ThemeToggleButton/>
            </section>
        </main>
    );
}