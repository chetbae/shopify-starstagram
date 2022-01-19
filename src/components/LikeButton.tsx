import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles";
import { ReactComponent as HeartFilled} from "../assets/heart_filled.svg";
import { ReactComponent as HeartOutlined} from "../assets/heart_outlined.svg";
import { PersistanceType, CardType } from "../models";

const StyledButton = styled.button`
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0;
    border: none;
`;

const HeartLiked = styled(HeartFilled)`
    width: inherit;
    height: inherit;
    padding: 0;
    margin: 0;
    fill: red;
    &:hover {
        cursor: pointer;
    }
`;

const HeartUnliked = styled(HeartOutlined)`
    width: inherit;
    height: inherit;
    padding: 0;
    margin: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const LikeButton = (handleLike: () => void) => {
    const [liked, setLiked] = useState(false);

    const like = () => {
        setLiked(true);
    };

    const unlike = () => {
        setLiked(false);
    };

    const toggleLike = () => {
        liked ? unlike() : like();
    };

    return(
        <>
            <StyledButton onClick={toggleLike}>
                { liked ? <HeartLiked/> : <HeartUnliked/>}
            </StyledButton>
        </>
    )
};