
import { useEffect } from 'react'
import Layout from '../../layout'
import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { TypographyH2 } from '@/components/ui/h2'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function Page() {
    const { state: { oportunity }, handleSetState } = useResearchCostumerContext()

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
                    <TypographyH2>Se você tivesse a oportunidade de pagar um pouco menos e manter o mesmo serviço diretamente com a cuidadora você o faria?</TypographyH2>
                </div>
                <RadioGroup value={oportunity} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('oportunity', value)}>
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