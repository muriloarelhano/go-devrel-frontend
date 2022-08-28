import React from "react";
import { Divider, HStack, Link, UnorderedList, ListItem } from "@chakra-ui/react";

interface WikiSummaryProps {
  headings: any[];
}

export const Summary: React.FC<WikiSummaryProps> = ({ headings }) => {
  function onClick(event: any, child: any) {
    event.preventDefault();
    //@ts-ignore
    document.querySelector(`#${child.id}`).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <HStack gap={5}>
      <Divider orientation="vertical" height={"8vh"} />
      <UnorderedList>
        {headings.map((heading) => (
          <ListItem key={heading.id}>
            <Link href={`#${heading.id}`} onClick={(e) => onClick(e, heading)}>
              {heading.title}
            </Link>
            {heading.items.length > 0 && (
              <UnorderedList>
                {heading.items.map((child: any) => (
                  <ListItem key={child.id}>
                    <Link
                      href={`#${child.id}`}
                      onClick={(e) => onClick(e, child)}
                    >
                      {child.title}
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </HStack>
  );
};
