"use client"
import useSWR from 'swr'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const fetchJson = async (url: string) => {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

const fetchText = async (url: string) => {
    const response = await fetch(url)
    const text = await response.text()
    return text
}

export default function ExampleClientSideFetch() {

    const { data, error, isLoading } = useSWR("/api", fetchJson)
    const code = useSWR("https://raw.githubusercontent.com/Arunscape/react-workshop-hackedbeta2024/refs/heads/main/app/clientsidefetch/page.tsx", fetchText)

    if (error || code.error)
        return <div>failed to load</div>

    if (isLoading || code.isLoading)
        return <div>loading...</div>

    return <>
        <div className="content-center">

            <div>response from api: {data?.message}</div>

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">This is the code for this page!</h1>
            <SyntaxHighlighter language="typescript" style={dark}>{code.data as string}</SyntaxHighlighter>
        </div>
    </>
}