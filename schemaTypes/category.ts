import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "カテゴリー",
  type: "document",
  fields: [
    { name: "title", title: "カテゴリー名", type: "string" },
    { name: "slug", title: "スラッグ", type: "slug", options: { source: "title" } },
    { name: "description", title: "カテゴリー説明", type: "text" },
  ],
});
