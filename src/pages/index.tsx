import Head from 'next/head';
import { Inter } from 'next/font/google';
import { TypographyH1 } from '../components/ui/h1';
import { Separator } from '../components/ui/separator'
import { Button } from '../components/ui/button'
import { HandHeart, HeartHandshake } from 'lucide-react'
import Route from 'next/router'
import Link from 'next/link'
import { TypographySmall } from '../components/ui/small';
import { TypographyH3 } from '@/components/ui/h3';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [type, setType] = useState('true')

  useEffect(() => {
    localStorage.setItem('researchType', type)
  }, [type])

  return (
    <div className='flex flex-col w-full md:h-[90dvh] items-center justify-between'>
      <Head>
        <title>
          Pesquisa de Mercado com foco em Cuidadores de Idosos
        </title>
        <meta
          name="description"
          content="Participe de uma pesquisa rápida e gratuita para ajudar a avaliar a viabilidade de uma nova abordagem empreendedora na área da saúde. Sua participação pode trazer oportunidades futuras como ofertas de trabalho para cuidadores ou fechamento de negócios para pessoas interessadas neste serviço"
          key="desc"
        />
      </Head>
      <div className="flex w-full justify-end">
        {/* <ModeToggle /> */}
      </div>
      <main className='flex flex-col gap-4 w-full h-full justify-center lg:items-center'>
        <div className='flex flex-col gap-9 lg:max-w-screen-lg'>
          <div className='inline-block'>
            <TypographyH1>Seja bem vindo a minha Pesquisa de Mercado com foco em Cuidadores de Idosos.</TypographyH1>
            <p className='pt-2'>
              Olá, Estou conduzindo esta pesquisa gratuita para coletar dados com o objetivo de avaliar a viabilidade de uma nova abordagem empreendedora na área de saúde gerontológica.{' '}
              Agradeço imensamente se puder dedicar um momento para participar deste questionário.{' '}
              Caso os resultados da pesquisa indiquem uma perspectiva favorável e você tenha escolhido a opção de pesquisa identificada,{' '}
              há a possibilidade de estabelecermos uma parceria nesta iniciativa em breve,{' '}
              seja pelo oferecimento de oportunidades de trabalho ou negócios tanto para cuidadores quanto para clientes.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <TypographySmall>
              Ao iniciar a pesquisa você concorda com os <Link
                href={'/politics/terms'}
                className='underline'
              >Termos de Uso</Link>.
            </TypographySmall>
            <TypographySmall>
              Ao iniciar a pesquisa você também reconhece o <Link
                href={'/politics/privacy'}
                className='underline'
              >Aviso de Privacidade</Link>.
            </TypographySmall>
            <TypographySmall>
              Além de também confirmar que tem ao menos 18 anos de idade.
            </TypographySmall>
          </div>
          <div className='flex flex-col gap-6'>
            <TypographyH3>Como você deseja participar da pesquisa?</TypographyH3>
            <RadioGroup value={type} className='flex flex-col gap-4' name="form" onValueChange={(value) => setType(value)}>
              <div className="flex gap-3">
                <RadioGroupItem value="true" id="n" />
                <Label htmlFor='n'>
                  De modo identificado
                </Label>
              </div>
              <div className="flex gap-3">
                <RadioGroupItem value="false" id="y" />
                <Label htmlFor='y'>
                  De modo anônimo
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex flex-col gap-3'>
            <Separator />
            <Button className='whitespace-normal h-full py-1' onClick={() => type == 'true' ? Route.push('/research/worker/name') : Route.push('/research/worker/scale')}>Pesquisa para quem é cuidador<HandHeart className='ml-1' /></Button>
            <Button className='whitespace-normal h-full py-1' onClick={() => type == 'true' ? Route.push('/research/costumer/name') : Route.push('/research/costumer/scale')}>Pesquisa para quem busca serviços de cuidadores<HeartHandshake className='ml-1' /></Button>
            <Separator />
          </div>
        </div>

      </main>
      <div></div>
    </div>
  );
}
