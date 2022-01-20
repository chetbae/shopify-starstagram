import { useEffect, useState } from 'react';
import { PersistanceType } from '../models';

export const LikeManager: PersistanceType = (date: string) => {
    const [isLiked, setIsLiked] = useState(false);
    const STORAGE_KEY = "starstagram_saved";
    
    // saving liked media in window.localStorage
    const setStorage = (arr: string[]) => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    const getStorage = () => {
        const localStorage = window.localStorage.getItem(STORAGE_KEY);
        if (localStorage) return JSON.parse(localStorage);
        else return [];
    }

    const addLiked = () => {
        const saved = getStorage();
        const idx = saved.indexOf(date);
        if (!(idx > -1)) setStorage(saved.concat([date]));
        setIsLiked(true);
    }

    const removeLiked = () => {
        const saved = getStorage();
        const newSaved = saved.filter((item: string) => item !== date);
        setStorage(newSaved);
        setIsLiked(false)
    }

    // for SavedPage mostly, render red heart upon loading if liked previously
    useEffect(() => {
        const saved = getStorage();
        const idx = saved.indexOf(date);
        setIsLiked((idx > -1));
    }, [date])

    const likeProp = {
        isLiked: isLiked,
        addLiked: addLiked,
        removeLiked: removeLiked,
    }

    return likeProp;
} 

