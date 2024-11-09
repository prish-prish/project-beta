import { Anchor, BookPlus, Calendar, DownloadCloud, Home, Inbox, MessageCircleQuestion, NotebookPen, Paintbrush, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./darkmode-toggle"

// Menu items.
const items = [
    {
        title: "Welcome",
        url: "/welcome",
        icon: Home,
    },
    {
        title: "Fetching data",
        url: "/fetching",
        icon: DownloadCloud,
    },
    {
        title: "Forms",
        url: "/forms",
        icon: NotebookPen,
    },
    {
        title: "how to useState",
        url: "/hooks",
        icon: Anchor,
    },
    {
        title: "awesome libraries",
        url: "/libraries",
        icon: BookPlus,
    },
    {
        title: "Questions",
        url: "/questions",
        icon: MessageCircleQuestion,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>React Workshop</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <ModeToggle />
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
