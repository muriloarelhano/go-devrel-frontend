import {
  Button,
  Collapse,
  Divider,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export interface SidebarItem {
  name?: string;
  label: string;
  icon?: ReactNode;
  link?: string;
  children?: SidebarItem[];
}

export interface SidebarItemProps {
  item: SidebarItem;
  depthStep?: number;
  depth?: number;
  expanded?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  depthStep = 10,
  depth = 0,
  expanded,
  item,
  ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, children, icon, link } = item;

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function onClickItem() {
    if (link) {
    } else {
      toggleCollapse();
    }
  }

  return (
    <>
      <ListItem>
        <Button
          size={"sm"}
          mb={2}
          minW={"100%"}
          placeContent={"flex-start"}
          onClick={onClickItem}
          style={{ marginLeft: depth * depthStep }}
          {...rest}
        >
          {icon}
          <Text mr={'3'}>{label}</Text> 
          {!link ? (
            collapsed ? (
              <FaArrowDown style={{ marginLeft: "auto" }} />
            ) : (
              <FaArrowUp style={{ marginLeft: "auto" }} />
            )
          ) : (
            ""
          )}
        </Button>
      </ListItem>

      <Collapse in={!collapsed} animateOpacity={true}>
        {Array.isArray(children) ? (
          <List>
            {children.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem.label === "divider" ? (
                  <Divider />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};
