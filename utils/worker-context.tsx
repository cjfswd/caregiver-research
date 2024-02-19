import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useResearchCostumerContext } from './costumer-context';

interface ResearchWorkerContextType {
    firstName: string | undefined
    lastName: string | undefined
    email: string | undefined
    cellphone: string | undefined
    scale: string | undefined
    money: string | undefined
    oportunity: string | undefined
    income: string | undefined
    commission: string | undefined
    duty: string | undefined
}

const ResearchWorkerContext = createContext<{ state: ResearchWorkerContextType, handleSetState: (key: keyof ResearchWorkerContextType, value: string | undefined) => void } | undefined>(undefined);

interface ResearchWorkerContextProps {
    children: ReactNode;
}

export function ResearchWorkerProvider({ children }: ResearchWorkerContextProps) {
    const [state, setState] = useState<ResearchWorkerContextType>({
        firstName: '',
        lastName: '',
        email: '',
        cellphone: '',
        scale: '',
        money: '',
        oportunity: '',
        income: '',
        commission: '',
        duty: '',
    });

    const { state: stateCostumer } = useResearchCostumerContext()

    useEffect(() => {
        localStorage.setItem('worker', JSON.stringify(state));
        localStorage.setItem('costumer', JSON.stringify(stateCostumer));
    }, [state, stateCostumer])

    const handleSetState = (key: keyof ResearchWorkerContextType, value: string | undefined) => {
        setState((prevState) => ({ ...prevState, [key]: value }));
    };

    return (
        <ResearchWorkerContext.Provider value={{
            state,
            handleSetState
        }}>
            {children}
        </ResearchWorkerContext.Provider>
    );
}

export function useResearchWorkerContext() {
    const context = useContext(ResearchWorkerContext);
    if (!context) {
        throw new Error('useResearchWorkerContext should be used inside an ResearchWorkerProvider');
    }
    return context;
}