import React, { useEffect, useState } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Summary } from "./Summary";
import { WikiButtons } from "./WikiButtons";
import { SidebarItem } from "./SidebarItem";
import { NoContent } from "./NoContent";
import {
  getPrevNextItem,
  getDeepestChildrenArrayPath,
  getNestedPathCurrentItem,
} from "../../utils";

export interface WikiProps {
  items: SidebarItem[];
}

export const Wiki: React.FC<WikiProps> = ({ items }) => {
  // Complete path to array index of current item on content
  const [currentItemPath, setCurrentItemPath] = useState<number[]>([0]);

  // Page to render on content
  const [currentPageComponent, setCurrentPageComponent] = useState<JSX.Element>(
    items[0].pageContentComponent || <NoContent />
  );

  const [previousItem, setPreviousItem] = useState<SidebarItem | undefined>();

  const [nextItem, setNextItem] = useState<SidebarItem | undefined>();

  const setPath = (identifier: string, subPathKey: string) => {
    const temp = getNestedPathCurrentItem(items, subPathKey, identifier) || [];
    setCurrentItemPath(temp);
  };

  useEffect(() => {
    if (currentItemPath.length > 1) {
      const currentItemsArray = getDeepestChildrenArrayPath(
        items,
        currentItemPath
      );
      const { next, prev } = getPrevNextItem(
        currentItemsArray,
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
    <Container maxW={"container.xl"}>
      <Grid
        gap={8}
        my={8}
        gridTemplateColumns={"0.8fr 3fr 0.5fr"}
        templateAreas={`"sidebar content summary"
                    "sidebar buttons summary"`}
      >
        <GridItem area={"sidebar"}>
          <Sidebar
            items={items}
            setCurrentPageComponent={setCurrentPageComponent}
            setCurrentItemPath={setPath}
          ></Sidebar>
        </GridItem>
        <GridItem area={"content"} height={"71vh"} overflowY={"auto"}>
          {currentPageComponent}
        </GridItem>
        <GridItem area={"summary"}>
          <Summary />
        </GridItem>
        <GridItem area={"buttons"}>
          <WikiButtons
            nextItem={nextItem}
            previousItem={previousItem}
            setCurrentPageComponent={setCurrentPageComponent}
            setCurrentItemPath={setPath}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};
