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
  setCurrentPageComponent: any;
  setCurrentItemPath: any;
  depthStep?: number;
  depth?: number;
  expanded?: boolean;
}

export const SidebarItemComponent: React.FC<SidebarItemProps> = ({
  item,
  setCurrentPageComponent,
  setCurrentItemPath,
  expanded,
  depthStep = 10,
  depth = 0,
  ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, children, icon, pageContentComponent, identifier } = item;

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue);
  }

  function onClickItem() {
    if (pageContentComponent) {
      setCurrentPageComponent(pageContentComponent);
      setCurrentItemPath(identifier, "children");
      if (children) {
        toggleCollapse();
      }
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
                    setCurrentPageComponent={setCurrentPageComponent}
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
