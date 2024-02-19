import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react';
import { TypographyH1 } from '../../../components/ui/h1';
import { TypographyH2 } from '../../../components/ui/h2';

export default function Page() {
    const route = useRouter()
    return (<div className='flex flex-col gap-4 max-w-xl'>
        <Button onClick={() => route.push('/')}><ArrowLeft /> Voltar</Button>
        <div>
            <TypographyH1>Termos de Uso</TypographyH1>
            <p>Bem-vindo aos Termos de Uso dessa pesquisa de mercado. Ao utilizar nossos serviços, você concorda com estes termos. Por favor, leia-os com atenção.</p>
        </div>
        <div>
            <TypographyH2>1. Aceitação dos Termos</TypographyH2>
            <p>
            Ao utilizar os serviços de pesquisa de mercado, você concorda com estes Termos de Uso. Se você não concordar com estes termos, por favor, não faça parte da pesquisa.
            </p>
        </div>
        <div>
            <TypographyH2>2. Uso dos Dados</TypographyH2>
            <p>
            Os Dados fornecidos são destinados apenas para empresarial. Você concorda em utilizar os serviços apenas para os fins legítimos para os quais são fornecidos.
            </p>
        </div>
        <div>
            <TypographyH2>3. Propriedade Intelectual</TypographyH2>
            <p>
            Todos os direitos de propriedade intelectual dos materiais e conteúdos fornecidos pelos serviços de pesquisa de mercado, incluindo, mas não se limitando a, textos, gráficos, logotipos, ícones, imagens, clipes de áudio e vídeo, são de propriedade exclusiva do realizador dessa pesquisa ou de seus licenciantes. Você concorda em respeitar esses direitos e não reproduzir, modificar, distribuir, ou criar obras derivadas desses materiais sem autorização prévia por escrito.
            </p>
        </div>
        <div>
            <TypographyH2>4. Privacidade e Segurança</TypographyH2>
            <p>
            Nós valorizamos sua privacidade e segurança. Ao utilizar nossos serviços de pesquisa de mercado, você concorda com nossa Política de Privacidade, a qual descreve como coletamos, utilizamos e protegemos suas informações pessoais.
            </p>
        </div>
        <div>
            <TypographyH2>5. Consentimento para Participação em Pesquisas</TypographyH2>
            <p>
            Ao utilizar nossos serviços de pesquisa de mercado, você pode ser convidado a participar de pesquisas ou questionários. Sua participação é voluntária e você pode optar por não participar a qualquer momento. Se optar por participar, você concorda em fornecer informações precisas e verdadeiras.
            </p>
        </div>
        <div>
            <TypographyH2>6. Limitação de Responsabilidade</TypographyH2>
            <p>
            Os realizadores dessa pesquisa não são responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequentes ou punitivos, incluindo, mas não se limitando a, perda de lucros, receitas, dados ou uso, incorridos por você ou por terceiros, decorrentes do uso ou impossibilidade de uso dos nossos serviços de pesquisa de mercado.
            </p>
        </div>
        <div>
            <TypographyH2>7. Alterações nos Termos de Uso</TypographyH2>
            <p>
            Reservamo-nos o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer alterações. O uso contínuo dos nossos serviços após a publicação de quaisquer alterações constitui aceitação dessas alterações.
            </p>
        </div>
        <div>
            <TypographyH2>8. Lei Aplicável</TypographyH2>
            <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais localizados no Brasil.
            </p>
        </div>
        <Button onClick={() => route.push('/')}><ArrowLeft /> Voltar</Button>
    </div>
    )
} 