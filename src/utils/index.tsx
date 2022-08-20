import { SidebarItem } from "../components/Wiki/SidebarItem";

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
    const aux = arr[key][subPathKey] as any
    if (aux) {
      const child = getNestedPathCurrentItem(
        aux,
        subPathKey,
        identifier
      );
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
    // Check if current item have children value
    if (
      itemsArray[currentItemIndex].children &&
      itemsArray[currentItemIndex].children!.length > 1
    ) {
      next = itemsArray[currentItemIndex].children![0];
    } else {
      next = itemsArray[currentItemIndex + 1];
    }
  }

  return {
    prev: previous,
    next: next,
  };
}

export function getDeepestChildrenArrayPath(
  array: SidebarItem[],
  path: number[]
): SidebarItem[] {
  let aux: any = [...array];
  for (const key in path) {
    aux = aux[key].children;
  }
  return aux;
}
