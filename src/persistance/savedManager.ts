import { useEffect, useState } from 'react';
import { PersistanceType } from '../models';

const STORAGE_KEY = "starstagram_saved";

export const SavedManager: PersistanceType = () => {
    const [saved, setSaved] = useState<string[]>([]);
    
    const addSaved = (date: string) => {
        setSaved(saved.concat([date]));
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    }

    const removeSaved = (date: string) => {
        const idx = saved.indexOf(date);
        if (idx > -1) {
            setSaved(saved.splice(idx, 1));
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
        }
    }

    const checkSaved = (date: string) => {
        const idx = saved.indexOf(date);
        return (idx > -1);
    }

    useEffect(() => {
        const localStorage = window.localStorage.getItem("starstagram_saved");
        if (localStorage) {
            const savedCards: string[] = JSON.parse(localStorage);
            setSaved(savedCards);
        };
    }, [])

    const savedProp = {
        saved: saved,
        addSaved: addSaved,
        removeSaved: removeSaved,
        checkSaved: checkSaved,
    }

    return savedProp;
} 

