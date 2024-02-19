import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useResearchRouteContext } from '@/utils/research-context';
import { useRouter } from 'next/router';
import { researchCostumerRoutes, researchWorkerRoutes } from '@/utils/routes';
import { useEffect } from 'react';
import { ResearchCostumerProvider } from '@/utils/costumer-context';
import { ResearchWorkerProvider } from '@/utils/worker-context';
import { Button } from '@/components/ui/button';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    const researchRoute = useResearchRouteContext()
    const route = useRouter()

    useEffect(() => {
        const actualRoute = researchCostumerRoutes.find((item) => item.path == route.pathname)
        if (actualRoute) {
            researchRoute.setNext(actualRoute?.next)
            localStorage.getItem('researchType') == 'false' && actualRoute.back == '/research/costumer/cellphone' ? 
            researchRoute.setBack('/') :
            researchRoute.setBack(actualRoute?.back)
        }
    }, [researchRoute, route.pathname])

    useEffect(() => {
        const actualRoute = researchWorkerRoutes.find((item) => item.path == route.pathname)
        if (actualRoute) {
            researchRoute.setNext(actualRoute?.next)
            localStorage.getItem('researchType') == 'false' && actualRoute.back == '/research/worker/cellphone' ? 
            researchRoute.setBack('/') :
            researchRoute.setBack(actualRoute?.back)
        }
    }, [researchRoute, route.pathname])

    return (
        <ResearchCostumerProvider>
            <ResearchWorkerProvider>
                <div className='flex flex-col gap-4' style={{ height: 'calc(100dvh - 2rem)' }}>
                    {/* <div className="flex w-full justify-end">
                        <ModeToggle />
                    </div> */}
                    <div className='h-full flex flex-col justify-between'>
                        {children}
                        <div className='flex flex-row gap-6 mt-6' style={{ justifyContent: 'space-between' }}>
                            <Button disabled={researchRoute.backDisabled} onClick={() => route.push(researchRoute.back as string)}><ArrowLeft /></Button>
                            <Button disabled={researchRoute.nextDisabled} onClick={() => route.push(researchRoute.next as string)}>próximo<ArrowRight className='ml-2' /></Button>
                        </div>
                    </div>
                </div>
            </ResearchWorkerProvider>
        </ResearchCostumerProvider>

    )
}