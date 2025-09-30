// // QuickTagヘルプブロック
// export const quickTagHelp = defineType({
//   name: "quickTagHelp",
//   title: "QuickTagヘルプ",
//   type: "object",
//   fields: [
//     {
//       name: "helpContent",
//       title: "ヘルプ内容",
//       type: "text",
//       readOnly: true,
//       rows: 12,
//       initialValue: `📋 QuickTag記法リファレンス

// 以下のタグをコピーして本文に貼り付け、@@@ の間にコンテンツを入力してください:

// 💡 アイデア:        @@@ type="idea" @@@
// ⚠️ 注意:           @@@ type="warning" @@@
// ✅ チェックリスト:   @@@ type="checklist" @@@
// 📝 ステップ:        @@@ type="step" @@@
// 💬 引用:           @@@ type="quote" @@@
// ⭐ おすすめ:        @@@ type="recommend" @@@
// 👤 心理:           @@@ type="psychology" @@@
// ➖ ライン:          @@@ type="line" @@@
// 🔢 番号リスト:      @@@ type="numbered" @@@
// 🎯 得られること:     @@@ type="takeaway" @@@

// 使用例:
// @@@ type="idea"
// ここにアイデアの内容を入力
// @@@`,
//     }
//   ],
//   preview: {
//     prepare() {
//       return {
//         title: '📋 QuickTag記法リファレンス',
//         subtitle: 'タグをコピーして使用してください'
//       }
//     }
//   }
// })


import { defineArrayMember, defineType } from "sanity"

// シンプルなテキストブロック
export const createContentBlock = () => defineArrayMember({
  type: "block",
  styles: [
    { title: '通常', value: 'normal' },
    { title: '見出し2', value: 'h2' },
    { title: '見出し3', value: 'h3' },
    { title: '見出し4', value: 'h4' },
    { title: '引用', value: 'blockquote' },
  ],
  lists: [
    { title: '箇条書き', value: 'bullet' },
    { title: '番号付き', value: 'number' }
  ],
  marks: {
    decorators: [
      { title: '強調 (strong)', value: 'strong' },
      { title: '太字 (b)', value: 'b' },
      { title: '斜体', value: 'em' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'リンク',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL'
          }
        ]
      }
    ]
  }
})

// 画像ブロック
export const imageBlock = defineType({
  name: "imageBlock",
  title: "本文画像",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "caption",
      title: "キャプション",
      type: "string",
    },
    {
      name: "altText",
      title: "代替テキスト",
      type: "string",
      validation: (rule) => rule.required().error('代替テキストは必須です')
    },
  ],
})

// シンプルなcontentフィールド配列（QuickTagヘルプは削除）
export const createContentArray = () => [
  createContentBlock(),
  { type: "imageBlock" },
]
