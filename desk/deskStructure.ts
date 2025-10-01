import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .id("content")            // ← ここが必須
    .title("コンテンツ")
    .items([
      // Blog Posts
      S.listItem()
        .id("blogPosts")       // ← listItem も id 推奨
        .title("ブログ記事")
        .schemaType("blogPost")
        .child(
          S.documentList()
            .id("blogPostsList") // ← documentList も id 推奨
            .title("ブログ記事")
            .schemaType("blogPost")
            .filter('_type == "blogPost"')
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),

      // Info Posts
      S.listItem()
        .id("infoPosts")
        .title("お知らせ記事")
        .schemaType("infoPost")
        .child(
          S.documentList()
            .id("infoPostsList")
            .title("お知らせ記事")
            .schemaType("infoPost")
            .filter('_type == "infoPost"')
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
        ),

      // Categories
      S.listItem()
        .id("categories")
        .title("カテゴリー")
        .schemaType("category")
        .child(
          S.documentList()
            .id("categoriesList")
            .title("カテゴリー")
            .schemaType("category")
            .filter('_type == "category"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
        )
    ]);
