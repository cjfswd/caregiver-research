import Layout from '../../layout'
import Head from 'next/head'
import { useResearchWorkerContext } from '@/utils/worker-context'
import { useEffect } from 'react';
import { useResearchRouteContext } from '@/utils/research-context'
import { TypographyH2 } from '@/components/ui/h2';
import { CurrencyInput } from '@/components/my-ui/currency-input';

export default function Page() {
    const { state: { money }, handleSetState } = useResearchWorkerContext()
    const { setNextDisabled } = useResearchRouteContext()
    useEffect(() => {
        money == '' || money == undefined ? setNextDisabled(true) : setNextDisabled(false)
    }, [money])
    return (
        <>
            <Head>
            <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <TypographyH2>Levando em consideração que o piso salarial de cuidadores de idosos é por volta de 1.500,00 reais, qual valor seria justo por um plantão de 48 horas?</TypographyH2>
                <CurrencyInput maxLength={8} formattedValue={money} setFormattedValue={(value) => handleSetState('money', value)} />
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