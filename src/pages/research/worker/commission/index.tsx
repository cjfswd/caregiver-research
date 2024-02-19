
import Layout from '../../layout'
import Head from 'next/head'
import { useResearchWorkerContext } from '@/utils/worker-context';
import { useEffect } from 'react';
import { TypographyH2 } from '@/components/ui/h2';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function Page() {
    const { state: { commission }, handleSetState } = useResearchWorkerContext()

    useEffect(() => {
        if (commission == '' || commission == undefined) handleSetState('commission', 'false')
    }, [commission])
    return (<>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Você aceitaria pagar uma quantia para cada plantão indicado por terceiros que fosse realizado com sucesso por você?</TypographyH2>
                </div>
                <RadioGroup value={commission} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('commission', value)}>
                    <div className="flex gap-3">
                        <RadioGroupItem value="false" id="n"/>
                        <Label htmlFor='n'>
                            Não
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="true" id="y"/>
                        <Label htmlFor='y'>
                            Sim
                        </Label>
                    </div>
                </RadioGroup>
            </div >
        </>)
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}