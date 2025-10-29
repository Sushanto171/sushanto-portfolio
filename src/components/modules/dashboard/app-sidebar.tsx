import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { SidebarNav } from "./Sidebar";

const data = {
  navMain: [
    {
      title: "Projects",
      items: [
        { title: "All Projects", url: "/dashboard/projects" },
        { title: "Add Project", url: "/dashboard/add-project" },
      ],
    },
    {
      title: "Blogs",
      items: [
        { title: "All Blogs", url: "/dashboard/blogs" },
        { title: "Add Blog", url: "/dashboard/add-blog" },
      ],
    },
  ],
};

export async function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="hover:text-accent">Sushanto</span>.
          <span className="text-primary">dev</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav data={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
