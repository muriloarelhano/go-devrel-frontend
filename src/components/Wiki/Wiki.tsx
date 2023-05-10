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
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export interface WikiProps {
  items: SidebarItem[];
  format: "wiki" | "forms";
}

export const Wiki: React.FC<WikiProps> = ({ items, format }) => {
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

    if (format === "wiki") {
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
    }
  }, [currentItemPath, items, format]);

  return (
    <Container maxW={"80vw"}>
      <Grid
        gap={10}
        my={8}
        gridTemplateColumns={format === "wiki" ? "0.5fr 5fr 1.2fr" : "1fr 4fr"}
        templateAreas={
          format === "wiki"
            ? `"sidebar content summary"
              "sidebar buttons summary"`
            : `"sidebar content"
              "sidebar buttons"`
        }
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
          <Stack direction={"column"} gap={2} pt={-10}>
            {format === "wiki" ? (
              <Prose marginTop={-12}> {currentPageComponent}</Prose>
            ) : (
              currentPageComponent
            )}
          </Stack>
        </GridItem>
        {format === "wiki" ? (
          <>
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
          </>
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
};
