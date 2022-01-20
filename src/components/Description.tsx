import { useState } from "react";
import styled from "styled-components";
import { CardType } from "../models";
import { typography, containers, colors } from "../styles";


export const Description = ({ desc }: CardType) => {
    const [showMore, setShowMore] = useState(false);

    const ShowMoreBtn = () => (
        <typography.ShowMore onClick={() => setShowMore(true)}>
            show more
        </typography.ShowMore>
    )
    const hiddenDesc = `${desc.substring(0, 100)}...`;

    return(
        <typography.StyledDescription>
            { showMore ? desc : hiddenDesc }
            { !showMore && <><br/><ShowMoreBtn/></> }
        </typography.StyledDescription>
    );
}