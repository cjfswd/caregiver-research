
import { useEffect } from 'react'

import Layout from '../../layout'

import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { TypographyH2 } from '@/components/ui/h2'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function Page() {
    const { state: { app }, handleSetState } = useResearchCostumerContext()

    useEffect(() => {
        if (app == '' || app == undefined) handleSetState('app', 'false')
    }, [app])

    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Você utilizaria um aplicativo semelhante ao Uber, mas para cuidadores de idosos se isso tornasse a relação Cuidadora X Cliente mais simples?</TypographyH2>
                </div>
                <RadioGroup value={app} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('app', value)}>
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