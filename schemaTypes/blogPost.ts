import { defineType } from "sanity";
import { createContentArray } from "./common/contentBlock";

export const blogPost = defineType({
  name: "blogPost",
  title: "ブログ記事",
  type: "document",
  fields: [
    { name: "title", title: "タイトル", type: "string",
      validation: (rule) => rule.required().max(100).error('タイトルは必須で、100文字以内で入力してください')
    },
    { name: "slug", title: "スラッグ", type: "slug", options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required().error('スラッグは必須です')
    },
    {
      name: "publishedAt",
      title: "公開日",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 5
      }
    },
    {
      name: "updatedAt",
      title: "更新日",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 5
      },
      // ドキュメント保存時に自動更新
      // readOnly: true,
    },
    { name: "featuredImage", title: "キャッチ画像", type: "image", options: { hotspot: true } },
    // 共通のcontentフィールドを使用
    {
      name: "content",
      title: "本文",
      type: "array",
      of: createContentArray(),
    //   // of: [{ type: "block" }, { type: "imageBlock" }, { type: "customBoxBlock" }],
    },
    { name: "category", title: "カテゴリー", type: "reference", to: [{ type: "category" }] },
    { name: "tags", title: "タグ", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },

    // SEO項目
    { name: "seoDescription", title: "SEOディスクリプション", type: "text" },
    { name: "seoKeywords", title: "キーワード", type: "array", of: [{ type: "string" }], options: { layout: "tags" } },
    { name: "noIndex", title: "NoIndex", type: "boolean", initialValue: false },
    { name: "noFollow", title: "NoFollow", type: "boolean", initialValue: false },
  ],
  preview: {
    select: { title: "title", subtitle: "category.name", media: "featuredImage" },
  },
});
