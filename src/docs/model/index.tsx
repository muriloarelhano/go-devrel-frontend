import { NoContent } from "../../components/Wiki/NoContent";
import { SidebarItem } from "../../components/Wiki/SidebarItem";
import { DevFlowDoc } from "./DevFlow";
import { DevrelDoc } from "./Devrel";
import { ModelDoc } from "./Model";
import { PlatformAndProductsDoc } from "./PlatformAndProducts";

export const modelPageItems: SidebarItem[] = [
  {
    identifier: "model",
    label: "Conhecendo o modelo",
    pageContentComponent: <ModelDoc />,
    children: [
      {
        label: "Plataforma e produtos",
        identifier: "plataform-and-products",
        pageContentComponent: <PlatformAndProductsDoc />,
      },
      {
        label: "Devrel",
        identifier: "devrel",
        pageContentComponent: <DevrelDoc />,
      },
      {
        label: "Fluxo de desenvolvedores",
        identifier: "devflow",
        pageContentComponent: <DevFlowDoc />,
      },
    ],
  },
  {
    identifier: "phases",
    label: "Fases, estágios e facilitadores",
    pageContentComponent: <NoContent />,
  },
];
