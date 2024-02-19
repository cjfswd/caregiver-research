import Layout from '../../layout'

import Head from 'next/head'
import { useResearchWorkerContext } from '@/utils/worker-context';
import { useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TypographyH2 } from '@/components/ui/h2';
import { Label } from '@/components/ui/label';

export default function Page() {
    const { state: { duty }, handleSetState } = useResearchWorkerContext()

    useEffect(() => {
        if (duty == '' || duty == undefined) handleSetState('duty', 'false')
    }, [duty])
    return (
        <>
            <Head>
            <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Você aceitaria trabalhar em mais de uma casa (pacientes diferentes) em dias alternados?</TypographyH2>
                    <p>
                        Para se tornar MEI você precisa abrir mão da CLT(Consolidação das Leis do Trabalho),{' '}
                        pagar um valor relativamente simbólico que funciona como uma especíe de previdência{' '}
                        e emitir notas fiscais dos seus serviços.</p>
                </div>
                <RadioGroup value={duty} className="flex flex-col gap-6" name="form" onValueChange={(value) => handleSetState('duty', value)}>
                    <div className="flex gap-3">
                        <RadioGroupItem value="false" id="y"/>
                        <Label htmlFor='y'>
                            Não
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="true" id="n"/>
                        <Label htmlFor='n'>
                            Sim
                        </Label>
                    </div>
                </RadioGroup>
            </div >
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