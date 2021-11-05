import { useEffect } from "react";

export default function ScrollTopRefresh(){
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    })

    return null;
}

