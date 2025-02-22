import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'


export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark");

    useEffect(() => {
        const darkClass = 'dark-mode';
        if (darkMode) {
            document.body.classList.add(darkClass);

        }
        else {
            document.body.classList.remove(darkClass);
        }
    }, [darkMode]);
    return [darkMode, setDarkMode];
}