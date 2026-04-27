// NOTE: 若技能数量 >500 出现展开卡顿，考虑重建 buildCategorySkillIndex 预计算索引
import type { CategoryTreeNode } from "../controllers/remote-market.ts";

export type CategorizableItem = {
  folder?: string;
  id?: number | string;
  name?: string;
  description?: string;
  categories?: Array<{ name: string }>;
  categoryCn?: string;
  category?: string;
};

/** 收集某个节点及其所有后代的 name（用于点击父分类时匹配） */
export function collectDescendantNames(node: CategoryTreeNode): string[] {
  const names = [node.name];
  if (node.children) {
    for (const child of node.children) {
      names.push(...collectDescendantNames(child));
    }
  }
  return names;
}

/** 判断单个 item 是否属于指定分类节点（含后代） */
export function itemBelongsToCategory(
  item: CategorizableItem,
  targetNames: string[]
): boolean {
  const names = new Set<string>();
  if (item.categories) {
    for (const c of item.categories) {
      if (c.name) names.add(c.name);
    }
  }
  if (item.categoryCn) names.add(item.categoryCn);
  if (item.category) names.add(item.category);
  return targetNames.some((n) => names.has(n));
}

/** 计算某个节点下的技能数（items 需由调用方预先完成 keyword 过滤） */
export function getNodeCount(
  node: CategoryTreeNode,
  items: CategorizableItem[]
): number {
  const targetNames = collectDescendantNames(node);
  return items.filter((it) => itemBelongsToCategory(it, targetNames)).length;
}

/** 扁平化树（用于渲染，根据 expandedIds 决定展开哪些节点） */
export function flattenTree(
  nodes: CategoryTreeNode[],
  expandedIds: Set<string | number>,
  level = 0
): Array<{ node: CategoryTreeNode; level: number }> {
  const result: Array<{ node: CategoryTreeNode; level: number }> = [];
  for (const node of nodes) {
    result.push({ node, level });
    if (node.children && node.children.length > 0 && expandedIds.has(node.id)) {
      result.push(...flattenTree(node.children, expandedIds, level + 1));
    }
  }
  return result;
}

/** 通用分组：按分类 key 分组并构造 sections（用于 employee-market / tool-library） */
export function groupByCategoryKey<T extends CategorizableItem>(
  items: T[],
  category: string,
  categoryDescendants: string[],
  getKey: (item: T) => string
): { filtered: T[]; sections: Array<{ title: string; items: T[] }> } {
  const filtered =
    category === "__all__"
      ? items
      : items.filter((it) => itemBelongsToCategory(it, categoryDescendants));

  const grouped = new Map<string, T[]>();
  for (const it of filtered) {
    const cat = getKey(it);
    const arr = grouped.get(cat) ?? [];
    arr.push(it);
    grouped.set(cat, arr);
  }

  const sections =
    category === "__all__"
      ? Array.from(grouped.entries())
          .sort((a, b) => a[0].localeCompare(b[0], "zh-Hans-CN"))
          .map(([cat, items]) => ({ title: cat === "其它" ? "其它" : cat, items }))
      : [{ title: category, items: filtered }];

  return { filtered, sections };
}
