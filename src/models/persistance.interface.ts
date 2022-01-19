export interface PersistanceType {
    saved: string[];
    addSaved: (date: string) => void;
    removeSaved: (date: string) => void;
    checkSaved: (date: string) => boolean;
}