import { Divider, List } from "@chakra-ui/react";
import React from "react";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  items: SidebarItem[];
  depthStep?: number;
  depth?: number;
  expanded?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  depthStep,
  depth,
  expanded,
}) => {
  return (
    <List>
      {items.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.name}${index}`}>
          {sidebarItem.label === "divider" ? (
            <Divider />
          ) : (
            <SidebarItem
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              item={sidebarItem}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};
