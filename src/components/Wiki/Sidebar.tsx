import { Divider, List } from "@chakra-ui/react";
import React from "react";
import { getNestedPathCurrentItem } from "../../utils";
import { SidebarItem, SidebarItemComponent } from "./SidebarItem";

interface SidebarProps {
  items: SidebarItem[];
  setCurrentPageState: any;
  setCurrentItemPath: any;
  depthStep?: number;
  depth?: number;
  expanded?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  depthStep,
  depth,
  expanded,
  setCurrentPageState,
  setCurrentItemPath,
}) => {
  const getPath = (name: string, subPathKey: string) => {
    setCurrentItemPath(getNestedPathCurrentItem(items, subPathKey, name));
  };

  return (
    <List>
      {items.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.name}${index}`}>
          {sidebarItem.label === "divider" ? (
            <Divider />
          ) : (
            <SidebarItemComponent
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              item={sidebarItem}
              setCurrentPageState={setCurrentPageState}
              setCurrentItemPath={getPath}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
