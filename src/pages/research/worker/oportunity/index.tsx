import Layout from '../../layout'

import Head from 'next/head'
import { useResearchWorkerContext } from '@/utils/worker-context';
import { useEffect } from 'react';
import { TypographyH2 } from '@/components/ui/h2';
import { TypographyP } from '../../../../components/ui/p';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function Page() {
    const { state: { oportunity }, handleSetState } = useResearchWorkerContext()

    useEffect(() => {
        if (oportunity == '' || oportunity == undefined) handleSetState('oportunity', 'false')
    }, [oportunity])
    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Se você tivesse a oportunidade de ganhar mais do que ganha hoje sendo MEI(Micro Empreendedor Individual) você se tornaria MEI?</TypographyH2>
                    <p className='pt-2'>
                        Para se tornar MEI você precisa abrir mão da CLT(Consolidação das Leis do Trabalho),{' '}
                        pagar um valor relativamente simbólico que funciona como uma especíe de previdência{' '}
                        e emitir notas fiscais dos seus serviços.</p>
                </div>
                <RadioGroup value={oportunity} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('oportunity', value)}>
                    <div className="flex gap-3">
                        <RadioGroupItem value="false" id="y" />
                        <Label htmlFor='y'>
                            Não
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="true" id="n" />
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