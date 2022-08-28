import { Container, Grid, GridItem, Stack } from "@chakra-ui/react";
import style from "./Custom.module.css";
import React, { useEffect, useState } from "react";
import {
  getDeepestChildrenArrayPath,
  getNestedHeadings,
  getNestedPathCurrentItem,
  getPrevNextItem,
} from "../../utils";
import { NoContent } from "./NoContent";
import { Sidebar } from "./Sidebar";
import { SidebarItem } from "./SidebarItem";
import { Summary } from "./Summary";
import { WikiButtons } from "./WikiButtons";

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

  const [nestedHeadings, setNestedHeadings] = useState<any>([]);

  const setPath = (identifier: string, subPathKey: string) => {
    const temp = getNestedPathCurrentItem(items, subPathKey, identifier) || [];
    setCurrentItemPath(temp);
  };

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);

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
    <Container maxW={"1600px"}>
      <Grid
        gap={12}
        my={8}
        gridTemplateColumns={"0.7fr 3fr 0.8fr"}
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
        <GridItem
          area={"content"}
          height={"69.7vh"}
          overflowY={"auto"}
          className={style.sideBar}
        >
          <Stack direction={"column"} gap={2}>
            {currentPageComponent}
          </Stack>
        </GridItem>
        <GridItem area={"summary"}>
          <Summary headings={nestedHeadings} />
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
