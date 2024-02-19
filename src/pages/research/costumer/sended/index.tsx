import { useRouter } from 'next/router'
import { trpc } from '@/utils/trpc'
import { z } from 'zod'
import { costumerZ } from '@/server/routers/_app'
import Head from 'next/head'
import Link from 'next/link'
import { TypographyH3 } from '@/components/ui/h3'
import { TypographyH1 } from '@/components/ui/h1'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function HomeScreen() {
    const route = useRouter()
    const hello = typeof window !== 'undefined' && trpc.costumer.useQuery(JSON.parse(
        localStorage.getItem('costumer') as string,
        (key: string, value: any) => {
            if (['app', 'juridical', 'market', 'oportunity'].includes(key)) {
                // pass the date string to the Date constructor
                return new Boolean(value);
            }
            if (localStorage.getItem('researchType') == 'false' && ['firstName', 'lastName', 'email', 'cellphone'].includes(key)) {
                // pass the date string to the Date constructor
                return undefined;
            }
            return value
        }
    ) as z.infer<typeof costumerZ>)

    return (
        <div className='flex flex-col gap-6 h-[90dvh] items-center justify-center'>
            <Head>
                <title>Enviado - Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='flex flex-col gap-4'>
                <div>
                    <TypographyH1>{
                        hello && hello.isLoading ? 'Enviando...' : 'Dados enviados com sucesso!'
                    }</TypographyH1>
                    {
                        hello && !hello.isLoading ?
                            <TypographyH3>
                                Obrigado por fazer parte dessa pesquisa de mercado.
                            </TypographyH3> :
                            null
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <Link
                        className='underline'
                        href={'/politics/terms'}
                    >Termos de Uso</Link>
                    <Link
                        className='underline'
                        href={'/politics/privacy'}
                    >Aviso de Privacidade</Link>
                </div>
                <Separator />
                <Button onClick={() => route.push('/')} disabled={hello && hello.isLoading}>voltar para a página inicial<Home className='ml-2' /></Button>
                <Separator />
            </div>
            {/* {process.env.NODE_ENV == 'development' && <pre suppressHydrationWarning>{JSON.stringify(
                typeof hello != 'string' && hello,
                null,
                2
            )}</pre>} */}
        </div>)
}