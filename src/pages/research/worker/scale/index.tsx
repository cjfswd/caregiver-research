import Layout from '../../layout'

import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useResearchWorkerContext } from '@/utils/worker-context';
import { TypographyH2 } from '@/components/ui/h2';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Page() {
    const { state: { scale }, handleSetState } = useResearchWorkerContext()

    useEffect(() => {
        if (scale == '' || scale == undefined) handleSetState('scale', '48')
    }, [scale])
    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='flex flex-col gap-6'>
                <TypographyH2>Você prefere trabalhar em qual escala abaixo?</TypographyH2>
                <RadioGroup value={scale} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('scale', value)}>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="48" id="48"/>
                        <Label htmlFor='48'>
                            48 Horas X 48 Horas
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="24" id="24"/>
                        <Label htmlFor='24'>
                            24 Horas X 24 Horas
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="wildcard" id="wildcard"/>
                        <Label htmlFor='wildcard'>
                            Plantões avulsos
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
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