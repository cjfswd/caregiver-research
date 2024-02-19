import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { useResearchWorkerContext } from '@/utils/worker-context'
import { useEffect } from 'react'
import { useResearchRouteContext } from '@/utils/research-context'
import { Input } from '@/components/ui/input'
import { TypographyH2 } from '@/components/ui/h2'
import { TypographySmall } from '../../../components/ui/small';

export default function Page() {
    const { state: { firstName, lastName }, handleSetState } = useResearchWorkerContext()
    const { handleSetState: handleSetCostumerState } = useResearchCostumerContext()
    const { setNextDisabled } = useResearchRouteContext()
    useEffect(() => {
        handleSetCostumerState('firstName', firstName)
        handleSetCostumerState('lastName', lastName)
        !firstName || !lastName ? setNextDisabled(true) : setNextDisabled(false)
    }, [firstName, lastName])

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='w-full flex flex-col gap-6'>
                <div>
                    <TypographyH2>Qual é seu nome?</TypographyH2>
                    <TypographySmall>informe como você é chamado</TypographySmall>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Input value={firstName} onChange={(e) => handleSetState('firstName', e.target.value)} placeholder='informe o primeiro nome' />
                        {!firstName && <small style={{ color: 'red' }}>insira o nome</small>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Input value={lastName} onChange={(e) => handleSetState('lastName', e.target.value)} placeholder='informe o sobrenome' />
                        {!lastName && <small style={{ color: 'red' }}>insira o sobrenome</small>}
                    </div>
                </div>
            </div>
        </>
    )
}