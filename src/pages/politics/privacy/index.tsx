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
            <TypographyH1>Política de Privacidade</TypographyH1>
            <p>Essa pesquisa de mercado valoriza a privacidade dos nossos usuários e está comprometida em proteger as informações pessoais fornecidas por você durante a utilização dos nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
        </div>
        <div>
            <TypographyH2>Informações Coletadas</TypographyH2>
            <p>
                Coletamos informações pessoais que você nos fornece voluntariamente ao participar de nossas pesquisas de mercado. Isso pode incluir, entre outros, seu nome, endereço de e-mail, número de telefone, idade, sexo, profissão e outras informações demográficas.
                Também podemos coletar informações automaticamente quando você utiliza nossos serviços, incluindo seu endereço IP, tipo de navegador, provedor de serviços de Internet, páginas que você visita e dados de geolocalização.
            </p>
        </div>
        <div>
            <TypographyH2>Uso das Informações</TypographyH2>
            <p>
                Utilizamos as informações coletadas para conduzir pesquisas de mercado e analisar tendências, preferências e comportamentos dos consumidores.
                As informações podem ser utilizadas para personalizar e melhorar nossos serviços, bem como para entrar em contato com você para participar de futuras pesquisas, se você consentir.
                Não compartilhamos suas informações pessoais com terceiros não autorizados, a menos que seja exigido por lei ou mediante seu consentimento explícito.
            </p>
        </div>
        <div>
            <TypographyH2>Proteção das Informações</TypographyH2>
            <p>
                Empregamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                No entanto, não podemos garantir a segurança absoluta das informações transmitidas pela Internet.Você reconhece que ao fornecer informações pela Internet, existe um risco inerente de segurança.
            </p>
        </div>
        <div>
            <TypographyH2>Cookies e Tecnologias Semelhantes</TypographyH2>
            <p>
                Podemos usar cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário e coletar informações sobre como você interage com nossos serviços.
                Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado.No entanto, isso pode afetar a funcionalidade de alguns recursos de nossos serviços.
            </p>
        </div>
        <div>
            <TypographyH2>Consentimento</TypographyH2>
            <p>
                Ao utilizar nossos serviços de pesquisa de mercado, você consente com a coleta, uso e divulgação de suas informações pessoais de acordo com esta Política de Privacidade.
            </p>
        </div>
        <div>
            <TypographyH2>Alterações nesta Política de Privacidade</TypographyH2>
            <p>
                Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento.Quaisquer alterações significativas serão comunicadas através de nosso site ou por outros meios apropriados.
                É sua responsabilidade revisar periodicamente esta Política de Privacidade para estar ciente de quaisquer atualizações ou modificações.
            </p>
        </div>
        <Button onClick={() => route.push('/')}><ArrowLeft /> Voltar</Button>
    </div>
    )
} 