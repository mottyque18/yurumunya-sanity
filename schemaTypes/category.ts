import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "カテゴリー",
  type: "document",
  fields: [
    { name: "title", title: "カテゴリー名", type: "string" },
    { name: "slug", title: "スラッグ", type: "slug", options: { source: "title" } },
    { name: "description", title: "カテゴリー説明", type: "text" },
    {
      name: "order",
      title: "表示順",
      type: "number",
      description: "カテゴリー表示順（小さい数ほど上に表示）"
    },
  ],
  orderings: [
    {
      title: '表示順（小さい順）',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
});
