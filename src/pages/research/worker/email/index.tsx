import Layout from "@/pages/research/layout"
import EmailPage from "@/generic_pages/person/email"

export default function Page() {
    return <EmailPage/>
}

Page.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}