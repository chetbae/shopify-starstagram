import { useState } from "react";
import styled from "styled-components";
import { CardType } from "../models";

export const Description = ({ desc }: CardType) => {
    const [showMore, setShowMore] = useState(false);

    const ShowMoreBtn = () => (
        <button onClick={() => setShowMore(true)}>
            show more
        </button>
    )
    const hiddenDesc = `${desc.substring(0, 100)}...`;

    return(
        <>
            { showMore ? desc : hiddenDesc }
            { !showMore && <><br/><ShowMoreBtn/></> }
        </>
    );
}