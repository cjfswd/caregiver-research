import Layout from "@/pages/research/layout"
import NamePage from "@/generic_pages/person/name"

export default function Page() {
    return <NamePage/>
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}