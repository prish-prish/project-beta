import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


async function getCode() {

    const response = await fetch("https://raw.githubusercontent.com/Arunscape/react-workshop-hackedbeta2024/refs/heads/main/app/fetching/page.tsx")
    const code = await response.text()

    return code
}

export default async function FetchingDemo() {

    const code = await getCode()

    return <div className='content-center'>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">This is the code for this page!</h1>
        <SyntaxHighlighter language="typescript" style={dark}>{code}</SyntaxHighlighter>
        <Link href="/clientsidefetch">
            <Button>What about client side fetching?</Button>
        </Link>
    </div>
}