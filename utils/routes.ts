export interface Route {
    path: string;
    next: string;
    back: string;
}

function generateRoutes(paths: string[], firstBack: string, lastNext: string): Route[] {
    const routes: Route[] = [];

    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const next = i === paths.length - 1 ? lastNext : paths[i + 1];
        const back = i === 0 ? firstBack : paths[i - 1];

        routes.push({ path, next, back });
    }

    return routes;
}

export const researchPersonRoutes = (path: string) => [
    `/research/${path}/name`,
    `/research/${path}/email`,
    `/research/${path}/cellphone`,
]

export const researchCostumerRoutes: Route[] = generateRoutes(
    [
        ...researchPersonRoutes('costumer'),
        '/research/costumer/scale',
        '/research/costumer/quantity',
        '/research/costumer/oportunity',
        '/research/costumer/juridical',
        '/research/costumer/market',
        '/research/costumer/app',
    ],
    '/',
    '/research/costumer/sended'
);

export const researchWorkerRoutes: Route[] = generateRoutes(
    [
        ...researchPersonRoutes('worker'),
        '/research/worker/scale',
        '/research/worker/money',
        '/research/worker/oportunity',
        '/research/worker/income',
        '/research/worker/commission',
        '/research/worker/duty',
    ],
    '/',
    '/research/worker/sended'
);