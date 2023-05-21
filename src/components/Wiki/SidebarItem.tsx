import {
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export interface SidebarItem {
  label: string;
  identifier: string;
  icon?: ReactNode;
  pageContentComponent?: JSX.Element;
  children?: SidebarItem[];
}

export interface SidebarItemProps {
  item: SidebarItem;
  setCurrentItemPath: any;
  depthStep?: number;
  depth?: number;
  expanded?: boolean;
}

export const SidebarItemComponent: React.FC<SidebarItemProps> = ({
  item,
  setCurrentItemPath,
  expanded,
  depthStep = 4,
  depth = 0,
  ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, children, icon, pageContentComponent, identifier } = item;

  function onClickItem() {
    if (pageContentComponent) {
      if (children) setCollapsed(!collapsed);

      setCurrentItemPath(identifier, "children");
    } else {
      setCollapsed(!collapsed);
    }
  }

  return (
    <>
      <ListItem width={"100%"} pl={depth * depthStep} pr={1} py={1}>
        <Button
          size={"sm"}
          width={"100%"}
          onClick={onClickItem}
          placeContent={"flex-start"}
          {...rest}
        >
          {icon}
          <Text mr={"3"}>{label}</Text>
          {children ? (
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
              <React.Fragment key={`${subItem.identifier}${index}`}>
                {subItem.label === "divider" ? (
                  <Divider />
                ) : (
                  <SidebarItemComponent
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                    setCurrentItemPath={setCurrentItemPath}
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
