import React, { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Summary } from "./Summary";
import { WikiButtons } from "./WikiButtons";
import { SidebarItem } from "./SidebarItem";
import { NoContent } from "./NoContent";
import { getPrevNextItem, getDeepestChildrenArrayPath } from "../../utils";

export interface WikiProps {
  items: SidebarItem[];
}

export const Wiki: React.FC<WikiProps> = ({ items }) => {
  // Complete path to array index of current item on content
  const [currentItemPath, setCurrentItemPath] = useState<number[]>([0]);

  const [previousItem, setPreviousItem] = useState<SidebarItem | undefined>();

  const [nextItem, setNextItem] = useState<SidebarItem | undefined>();

  // Page to render on content
  const [currentPageComponent, setCurrentPageComponent] = useState<JSX.Element>(
    items[currentItemPath[currentItemPath.length - 1]].pageContentComponent || (
      <NoContent />
    )
  );

  useEffect(() => {
    if (currentItemPath.length > 1) {
      const aux = [...currentItemPath];
      aux.pop();

      const { next, prev } = getPrevNextItem(
        getDeepestChildrenArrayPath(items, aux),
        currentItemPath[currentItemPath.length - 1]
      );
      setPreviousItem(prev);
      setNextItem(next);
    } else {
      const { next, prev } = getPrevNextItem(items, currentItemPath[0]);
      setPreviousItem(prev);
      setNextItem(next);
    }
  }, [currentItemPath, items]);

  return (
    <Grid
      gap={6}
      my={10}
      gridTemplateColumns={"1fr 3fr 1fr"}
      templateAreas={`"sidebar content summary"
                  "sidebar buttons summary"`}
      justifyItems={"center"}
    >
      <GridItem area={"sidebar"}>
        <Sidebar
          items={items}
          setCurrentPageState={setCurrentPageComponent}
          setCurrentItemPath={setCurrentItemPath}
        ></Sidebar>
      </GridItem>
      <GridItem area={"content"} height={"70vh"} overflowY={"auto"}>
        {currentPageComponent}
      </GridItem>
      <GridItem area={"summary"}>
        <Summary />
      </GridItem>
      <GridItem area={"buttons"}>
        <WikiButtons nextItem={nextItem} previousItem={previousItem} />
      </GridItem>
    </Grid>
  );
};
