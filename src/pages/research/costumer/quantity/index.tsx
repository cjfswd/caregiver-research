import { useEffect } from 'react'
import Layout from '../../layout'
import Head from 'next/head'
import { useResearchCostumerContext } from '@/utils/costumer-context'
import { TypographyH2 } from '@/components/ui/h2'
import { CurrencyInput } from '@/components/my-ui/currency-input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = [
  { name: '0' },
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '+4' },
]

export default function Page() {
  const { state: { quantity, money }, handleSetState } = useResearchCostumerContext()

  useEffect(() => {
    if (quantity == '' || quantity == undefined) handleSetState('quantity', '0')
  }, [quantity])
  return (
    <>
      <Head>
        <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
      </Head>
      <div className="flex flex-col gap-6">
        <div>
          <TypographyH2>Você atualmente emprega algum cuidador de idoso? Se sim quantos?</TypographyH2>
          <p className='pt-2'>selecione a quantidade abaixo, se não emprega ninguém deixe &quot;0&quot; marcado.</p>
        </div>
        <Select value={quantity} onValueChange={(e) => handleSetState('quantity', e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="quantidade de cuidadores"/>
          </SelectTrigger>
          <SelectContent>
            {items.map((item, i) => (<SelectItem key={i} value={item.name}>{item.name}</SelectItem>))}
          </SelectContent>
        </Select>
      </div>
      {quantity !== '0' && <div className="flex flex-col gap-6 mt-6">
        <TypographyH2>Qual é o valor médio mensal que você investe em serviços de cuidadores de idosos?</TypographyH2>
        <CurrencyInput maxLength={10} formattedValue={money} setFormattedValue={(value) => handleSetState('money', value)} />
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