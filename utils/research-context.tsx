import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResearchRouteContextType {
    back: string | undefined
    backDisabled: boolean
    setBack: React.Dispatch<React.SetStateAction<string | undefined>>;
    setBackDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    next: string | undefined
    nextDisabled: boolean
    setNext: React.Dispatch<React.SetStateAction<string | undefined>>;
    setNextDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResearchRouteContext = createContext<ResearchRouteContextType | undefined>(undefined);

interface ResearchRouteContextProps {
    children: ReactNode;
}

export function ResearchRouteProvider({ children }: ResearchRouteContextProps) {
    const [back, setBack] = useState<string | undefined>('');
    const [backDisabled, setBackDisabled] = useState<boolean>(false);
    const [next, setNext] = useState<string | undefined>('');
    const [nextDisabled, setNextDisabled] = useState<boolean>(false);
    return (
        <ResearchRouteContext.Provider value={{ back, setBack, backDisabled, setBackDisabled, next, setNext, nextDisabled, setNextDisabled }}>
            {children}
        </ResearchRouteContext.Provider>
    );
}

export function useResearchRouteContext(): ResearchRouteContextType {
    const context = useContext(ResearchRouteContext);
    if (!context) {
        throw new Error('useResearchRouteContext should be used inside an ResearchRouteProvider');
    }
    return context;
}