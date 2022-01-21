import React from "react";
import styled from "styled-components";
import { ReactComponent as HeartFilled} from "../assets/heart_filled.svg";
import { ReactComponent as HeartOutlined} from "../assets/heart_outlined.svg";
import { PersistanceType } from "../models";

const StyledButton = styled.button`
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    outline: none;
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

export const LikeButton = ({
   isLiked,
   addLiked,
   removeLiked
}: PersistanceType) => {
    
    const like = () => {
        addLiked();
    };

    const unlike = () => {
        removeLiked()
    };

    const toggleLike = () => {
        isLiked ? unlike() : like();
    };

    return(
        <>
            <StyledButton onClick={toggleLike}>
                { isLiked ? <HeartLiked/> : <HeartUnliked/>}
            </StyledButton>
        </>
    )
};