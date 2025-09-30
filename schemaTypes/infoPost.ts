import { defineType } from "sanity";
import { createContentArray } from "./common/contentBlock";

export const infoPost = defineType({
  name: "infoPost",
  title: "お知らせ記事",
  type: "document",
  fields: [
    { name: "title", title: "タイトル", type: "string",
      validation: (rule) => rule.required().max(100).error('タイトルは必須で、100文字以内で入力してください')
    },
    { name: "slug", title: "スラッグ", type: "slug", options: { source: "title" },
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
    // 共通のcontentフィールドを使用
    { name: "content", title: "本文", type: "array",
      of: createContentArray(),
    // of: [{ type: "block" }, { type: "imageBlock" }, { type: "customBoxBlock" }]
    },

    // SEO項目（Noindex必須）
    { name: "seoDescription", title: "SEOディスクリプション", type: "text" },
    { name: "noIndex", title: "NoIndex", type: "boolean", initialValue: true },
    { name: "noFollow", title: "NoFollow", type: "boolean", initialValue: true },
  ],
});
