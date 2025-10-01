import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder) =>
  S.list()
    .id("content")
    .title("コンテンツ")
    .items([
      // Blog Posts
      S.listItem()
        .id("blogPosts")
        .title("ブログ記事")
        .child(
          S.documentList()
            .id("blogPostsList")
            .title("ブログ記事")
            .filter('_type == "blogPost"')
            .menuItems(S.orderingMenuItemsForType('blogPost'))
            .defaultOrdering([
              { field: "publishedAt", direction: "desc" }
            ])
        ),

      // Info Posts
      S.listItem()
        .id("infoPosts")
        .title("お知らせ記事")
        .child(
          S.documentList()
            .id("infoPostsList")
            .title("お知らせ記事")
            .filter('_type == "infoPost"')
            .menuItems(S.orderingMenuItemsForType('infoPost'))
            .defaultOrdering([
              { field: "publishedAt", direction: "desc" }
            ])
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
            .filter('_type == "category"')
            .defaultOrdering([
              { field: "order", direction: "asc" }
            ])
        )
    ]);
