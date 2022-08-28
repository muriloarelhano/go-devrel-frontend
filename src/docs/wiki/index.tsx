import { SidebarItem } from "../../components/Wiki/SidebarItem";
import { AboutProject } from "./AboutProject";

export const wikiPageItems: SidebarItem[] = [
  {
    identifier: "about-project",
    label: "Sobre o Projeto",
    pageContentComponent: <AboutProject />,
  },
];
