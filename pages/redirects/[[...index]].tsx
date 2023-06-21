import { useEffect } from "react";

export default function RedirectsPages(props) {
    useEffect(() => {
        // window.location.href = "https://github.com"
        console.log(window.location.href);
        // window.location.href = window.location.href.replace('/redirects', '');
    }, []);
    return (<h3>Welcome to Redirects</h3>);
}