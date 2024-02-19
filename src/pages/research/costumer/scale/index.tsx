

import Layout from '../../layout'

import Head from 'next/head'
import { useEffect } from 'react';
import { useResearchCostumerContext } from '@/utils/costumer-context';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { TypographyH2 } from '@/components/ui/h2';
import { Label } from '@/components/ui/label';

export default function Page() {
    const { state: { scale }, handleSetState } = useResearchCostumerContext()

    useEffect(() => {
        if (scale == '' || scale == undefined) handleSetState('scale', '48')
    }, [scale])

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <TypographyH2>Você normalmente busca serviços de cuidadores de idosos em que escala de trabalho?</TypographyH2>
                <RadioGroup value={scale} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('scale', value)}>
                    <div className="flex gap-3">
                        <RadioGroupItem value="48" id="48"/>
                        <Label htmlFor='48'>
                            48 Horas X 48 Horas
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="24" id="24"/>
                        <Label htmlFor='24'>
                            24 Horas X 24 Horas
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="wildcard" id="wildcard"/>
                        <Label htmlFor='wildcard'>
                            Plantões avulsos
                        </Label>
                    </div>
                    <div className="flex gap-3">
                        <RadioGroupItem value="all" id="all"/>
                        <Label htmlFor='all'>
                            Todas
                        </Label>
                    </div>
                </RadioGroup>

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