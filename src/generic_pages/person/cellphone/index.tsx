import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { useResearchWorkerContext } from '@/utils/worker-context'
import { ChangeEvent, ChangeEventHandler, useEffect } from 'react';
import { useResearchRouteContext } from '@/utils/research-context'
import { TypographyH2 } from '@/components/ui/h2';
import { Input } from '@/components/ui/input';

export default function Page() {
    const { state: { cellphone }, handleSetState } = useResearchWorkerContext()
    const { handleSetState: setHandleSetStateCostumer } = useResearchCostumerContext()
    const { setNextDisabled } = useResearchRouteContext()

    useEffect(() => {
        setHandleSetStateCostumer('cellphone', cellphone);
        (!cellphone || cellphone.length < 14) ? setNextDisabled(true) : setNextDisabled(false)
    }, [cellphone])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        // Extract parts of the unformatted value
        const unformattedParts = value.replace(/\D/g, '').split('');

        // Build formatted value from parts
        let formattedValue = '';
        for (let i = 0; i < unformattedParts.length; i++) {
            if (i === 2 || i === 3) {
                formattedValue += ' ';
            } else if (i === 7) {
                formattedValue += '-';
            }
            formattedValue += unformattedParts[i];
        }

        handleSetState('cellphone', formattedValue);
    };

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='flex flex-col gap-3'>
                <TypographyH2>Qual é o seu número de celular?</TypographyH2>
                <Input value={cellphone} maxLength={14} onChange={handleChange} placeholder='insira seu celular' />
                {(!cellphone || cellphone.length < 14) && <small style={{ color: 'red' }}>insira o celular no formato 99 9 9999-9999</small>}
            </div>
        </>
    )
}

