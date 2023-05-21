import { Divider, List } from "@chakra-ui/react";
import React from "react";
import { SidebarItem, SidebarItemComponent } from "./SidebarItem";

interface SidebarProps {
  items: SidebarItem[];
  setCurrentPageComponent: any;
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
  setCurrentItemPath,
}) => {
  return (
    <List>
      {items.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.identifier}${index}`}>
          {sidebarItem.label === "divider" ? (
            <Divider />
          ) : (
            <SidebarItemComponent
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              item={sidebarItem}
              setCurrentItemPath={setCurrentItemPath}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
