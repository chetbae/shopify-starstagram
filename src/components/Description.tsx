import { useState } from "react";
import { CardType } from "../models";
import { typography } from "../styles";


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