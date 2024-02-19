import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResearchCostumerContextProps {
    children: ReactNode;
}

interface ResearchCostumerState {
    cellphone: string | undefined;
    email: string | undefined;
    juridical: string | undefined;
    report: string | undefined;
    market: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    oportunity: string | undefined;
    quantity: string | undefined;
    money: string | undefined;
    scale: string | undefined;
    app: string | undefined;
}

const ResearchCostumerContext = createContext<{ state: ResearchCostumerState, handleSetState: (key: keyof ResearchCostumerState, value: string | undefined) => void } | undefined>(undefined);

export const ResearchCostumerProvider = ({ children }: ResearchCostumerContextProps) => {
    const [state, setState] = useState<ResearchCostumerState>({
        cellphone: '',
        email: '',
        juridical: '',
        report: '',
        market: '',
        firstName: '',
        lastName: '',
        oportunity: '',
        quantity: '',
        money: '',
        scale: '',
        app: '',
    });

    const handleSetState = (key: keyof ResearchCostumerState, value: string | undefined) => {
        setState((prevState) => ({ ...prevState, [key]: value }));
    };

    return (
        <ResearchCostumerContext.Provider value={{ state, handleSetState }}>
            {children}
        </ResearchCostumerContext.Provider>
    );
};

export const useResearchCostumerContext = () => {
    const context = useContext(ResearchCostumerContext);
    if (!context) {
        throw new Error('useResearchCostumerContext should be used inside an ResearchCostumerProvider');
    }
    return context;
};
