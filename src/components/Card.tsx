import { useState, useEffect } from "react";
import styled from "styled-components";
import { Description, LikeButton } from ".";
import { CardType } from "../models";
import { PersistanceType } from "../models";
import { LikeManager } from "../persistance/likeManager";
import { containers, typography } from "../styles";

const StyledImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

const StyledVideo = styled.iframe`
    width: 100%;
`;

const ImageContainer = styled.div`
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0; 
`;

let StyledMedia: any;

export const Card = (
    {
        url,
        title,
        explanation,
        date,
        copyright,
        media_type
    }: CardType,
) => {
    const likeProp: PersistanceType = LikeManager(date);
    
    if (media_type === "video") {
        StyledMedia = () => (
            <StyledVideo src={url}>
                This platform does not support video links.
            </StyledVideo>
        );
    } else {
        StyledMedia = () => (
            <StyledImage src={url} alt={title}/>
        );
    };

    return (
        <containers.Top60>
            <containers.CardsContainer>
                <ImageContainer>
                    <StyledMedia/>
                </ImageContainer>
                <containers.Top8>
                    <LikeButton
                        {...likeProp}
                    /><br/>
                    <containers.Top8>
                        <typography.LargeSubtitle>{title}</typography.LargeSubtitle><br/>
                        {copyright && <><i>Copyright: '{copyright}'</i><br/></>}
                        <containers.Top12>
                            <Description desc={explanation}/><br/>
                            <br/>

                            <typography.Date>{date}</typography.Date><br/>
                        </containers.Top12>
                    </containers.Top8>
                </containers.Top8>
                <hr/>
            </containers.CardsContainer>
        </containers.Top60>
    );
};