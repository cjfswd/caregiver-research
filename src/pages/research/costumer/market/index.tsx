import { useEffect, useMemo, useState } from 'react'
import Layout from '../../layout'
import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { TypographyH2 } from '@/components/ui/h2'
import { Label } from '@/components/ui/label'

export default function Page() {
    const { state: { market }, handleSetState } = useResearchCostumerContext()

    useEffect(() => {
        if (market == '' || market == undefined) handleSetState('market', 'false')
    }, [market])

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <TypographyH2>Você aceitaria ter até 4 cuidadoras trabalhando na sua residência se o valor fosse abaixo do praticado atualmente pelo mercado?</TypographyH2>
                <RadioGroup value={market} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('market', value)}>
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