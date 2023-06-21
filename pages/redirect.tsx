import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RedirectsPages(props) {
    const router = useRouter();
    const { link } = router.query;
    const [tgtLink, setTgtLink] = useState(link?.toString());
    
    const srcLinkHead = 'https://5iilovemyanimalss15.vercel.app/post/';
    const tgtLinkHead = 'https://forever-love-animals.com/';

    useEffect(() => {
        if(!link) return;
        console.log(link.toString().replace(srcLinkHead, tgtLinkHead));
        setTgtLink(link.toString().replace(srcLinkHead, tgtLinkHead));
        window.location.href = link.toString().replace(srcLinkHead, tgtLinkHead);
        // // window.location.href = "https://github.com"
        // console.log(window.location.href);
        // // window.location.href = window.location.href.replace('/redirects', '');
    }, [link]);
    return '';
}