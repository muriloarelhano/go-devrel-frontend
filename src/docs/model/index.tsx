import { SidebarItem } from "../../components/Wiki/SidebarItem";
import { DevrelDoc } from "./Devrel";
import { ModelDoc } from "./Model";
import { PlatformAndProductsDoc } from "./PlatformAndProducts";

export const modelPageItems: SidebarItem[] = [
  {
    name: "model",
    label: "Conhecendo o modelo",
    pageContentComponent: <ModelDoc />,
    children: [
      {
        label: "Plataforma e produtos",
        name: "plataform-and-products",
        pageContentComponent: <PlatformAndProductsDoc />,
      },
      {
        label: "Devrel",
        name: "devrel",
        pageContentComponent: <DevrelDoc />,
      },
    ],
  },
  {
    name: "about",
    label: "Sobre o projeto",
    pageContentComponent: <ModelDoc />,
  },
];
