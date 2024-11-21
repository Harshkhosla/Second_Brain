import { useEffect } from "react"
import { useBrain } from "../hooks/useBrain"
import { CardsHolder } from "./CardsHolder";

export const Share = () => {
    const { getBrainData,  brains } = useBrain()
    
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const tokenFromUrl:string = queryParams.get("token") || "none";
        // const brainIdFromUrl = queryParams.get("brainId");
        getBrainData(tokenFromUrl);
    }, []);



    return (
        <>
            <CardsHolder brains={brains} />

        </>
    )
}