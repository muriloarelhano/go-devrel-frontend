import { SidebarItem } from "../components/Wiki/SidebarItem";

export function getCurrentPathComponent(
  items: SidebarItem[],
  path: number[]
): SidebarItem {
  let item;
  let index = 0;

  if (items[path[index]].hasOwnProperty("children") && path.length > 1) {
    item = getCurrentPathComponent(items[path[index]].children!, [
      path[++index],
    ]);
  } else {
    item = items[path[index]];
  }

  return item;
}

export function getNestedPathCurrentItem(
  arr: SidebarItem[],
  subPathKey: string,
  identifier: string,
  pathArr: number[] = []
): number[] | undefined {
  for (let key in arr) {
    if (arr[key].identifier === identifier) {
      pathArr.unshift(parseInt(key, 10));
      return pathArr;
    }
    //@ts-ignore
    const aux = arr[key][subPathKey] as any;
    if (aux) {
      const child = getNestedPathCurrentItem(aux, subPathKey, identifier);
      if (child) {
        child.unshift(parseInt(key, 10));
        return child;
      }
    }
  }
}

export function getPrevNextItem(
  itemsArray: Array<SidebarItem>,
  currentItemIndex: number
) {
  const len = itemsArray.length - 1;

  let previous;
  if (currentItemIndex === 0) {
    previous = undefined;
  } else {
    previous = itemsArray[currentItemIndex - 1];
  }

  let next;

  if (len === currentItemIndex) {
    next = undefined;
  } else {
    next = itemsArray[currentItemIndex + 1];
  }

  if (itemsArray[currentItemIndex].children) {
    next = itemsArray[currentItemIndex].children![0];
  }

  return {
    prev: previous,
    next: next,
  };
}

/**
 * This function can be used to get array of items based on path of current item selected
 * @param array Root items array
 * @param path Array with indexes (path) to current component of items tree
 * @returns Array with current items on same depth of current component
 */
export function getDeepestChildrenArrayPath(
  array: SidebarItem[],
  path: number[]
): SidebarItem[] {
  const auxPath = [...path];
  auxPath.pop();
  let aux: any[] = [...array];
  for (const key in auxPath) {
    aux = aux[key].children;
  }
  return aux;
}

export function getNestedHeadings(headingElements: any) {
  const nestedHeadings: any[] = [];

  headingElements.forEach((heading: any, index: number) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
}
