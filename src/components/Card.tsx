import { useState, useEffect } from "react";
import styled from "styled-components";
import { Description, LikeButton } from ".";
import { CardType } from "../models";
import { PersistanceType } from "../models/persistance.interface";

const StyledImage = styled.img`
    width: 100%;
`;

const StyledVideo = styled.iframe`
    width: 100%;
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
    likeHandler: (date: string) => void
) => {

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
        <>
            <StyledMedia/><br/>
            <LikeButton
                handleClick={() => likeHandler(date)}
            /><br/>
            <b>{title}</b><br/>
            {copyright && <><i>Copyright: '{copyright}'</i><br/></>}
            <Description desc={explanation}/><br/>
            <code>{date}</code><br/>
            <br/>
            <hr/>
        </>
    );
};