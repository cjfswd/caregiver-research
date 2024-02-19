import { useEffect } from 'react'
import Layout from '../../layout'
import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { TypographyH2 } from '@/components/ui/h2'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Page() {
    const { state: { juridical, report }, handleSetState } = useResearchCostumerContext()

    useEffect(() => {
        if (juridical == '' || juridical == undefined) handleSetState('juridical', 'false')
    }, [juridical])
    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className="flex flex-col gap-6">
                <div>
                    <TypographyH2>Você já sofreu alguma frustação jurídica com relação a cuidadoras ou empresas relacionadas?</TypographyH2>
                </div>
                <RadioGroup value={juridical} className='flex flex-col gap-6' name="form" onValueChange={(value) => handleSetState('juridical', value)}>
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
            {juridical == 'true' && <div className="flex flex-col gap-6 mt-6">
                <div>
                    <TypographyH2>Se quiser, conte-nos o seu relato:</TypographyH2>
                </div>
                <Textarea placeholder='escreva aqui seu relato' value={report} onChange={(e) => handleSetState('report', e.target.value)} />
            </div>}
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