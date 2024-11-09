import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function () {
    return (
        <div className="content-center">

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Questions?
            </h1>

            <div className="h-10"></div>
            <Link href="https://github.com/new?template_name=react-workshop-hackedbeta2024&template_owner=Arunscape">
                <Button>Want to use this website as a template?</Button>
            </Link>
            <div className="h-10"></div>
            <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                github.com/Arunscape/react-workshop-hackedbeta2024
            </div>
        </div>
    )
}