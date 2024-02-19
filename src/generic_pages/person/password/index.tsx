import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/h2'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>Pesquisa de Mercado de Cuidadores de Idosos</title>
            </Head>
            <div className='flex flex-col gap-3'>
                <TypographyH2>Crie a senha da sua conta</TypographyH2>
                <div className='flex flex-col gap-3'>
                    <Input placeholder='insira a senha' style={{ width: '100%' }} />
                    <Button><EyeOff /><Eye size="$2" /></Button>
                </div>
            </div>
        </>
    )
}