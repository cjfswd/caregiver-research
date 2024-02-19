import Layout from '../../layout'

import Head from 'next/head'

import { useResearchWorkerContext } from '@/utils/worker-context';
import { useResearchRouteContext } from '@/utils/research-context';
import { useEffect } from 'react';
import { TypographyH2 } from '@/components/ui/h2';
import { CurrencyInput } from '@/components/my-ui/currency-input';

export default function Page() {
    const { state: { income }, handleSetState } = useResearchWorkerContext()
    const { setNextDisabled } = useResearchRouteContext()
    useEffect(() => {
        income == '' || income == undefined ? setNextDisabled(true) : setNextDisabled(false)
    }, [income])
    return (
        <>
            <Head>
            <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Qual é a sua renda mensal atualmente em reais?</TypographyH2>
                    <p className='pt-2'>considerando apenas serviços de cuidados para idosos</p>
                </div>
                <CurrencyInput maxLength={10} formattedValue={income} setFormattedValue={(value) => handleSetState('income', value)} />
            </div>
        </>
    )
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}