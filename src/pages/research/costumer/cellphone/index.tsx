import Layout from "@/pages/research/layout"
import CellphonePage from "@/generic_pages//person/cellphone"

export default function Page() {
    return <CellphonePage/>
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}