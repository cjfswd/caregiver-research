import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { useResearchWorkerContext } from '@/utils/worker-context'
import { useEffect } from 'react'
import { useResearchRouteContext } from '@/utils/research-context'
import { TypographyH2 } from '@/components/ui/h2'
import { Input } from '@/components/ui/input'

export default function Page() {
    const { state: { email }, handleSetState } = useResearchWorkerContext()
    const { handleSetState: setHandleSetStateCostumer } = useResearchCostumerContext()
    const { setNextDisabled } = useResearchRouteContext()

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    useEffect(() => {
        setHandleSetStateCostumer('email', email)
        !isValidEmail(email as string) ? setNextDisabled(true) : setNextDisabled(false)
    }, [email])

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='flex flex-col gap-3'>
                <TypographyH2>Qual é o seu endereço de e-mail?</TypographyH2>
                <Input value={email} onChange={(e) => handleSetState('email', e.target.value)} placeholder='insira seu e-mail' />
                <small style={{ color: 'red' }}>{!isValidEmail(email as string) && 'insira um endereço email válido'}</small>
            </div>
        </>
    )
}