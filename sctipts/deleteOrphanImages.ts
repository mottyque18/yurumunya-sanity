import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // 本番のprojectId
  dataset: 'production',        // 本番データセット
  token: process.env.SANITY_API_TOKEN, // 編集可能トークン必須
  useCdn: false
})

async function deleteOrphanImages() {
  // すべての imageAsset を取得
  const allAssets = await client.fetch(`*[_type == "sanity.imageAsset"]{_id}`)

  console.log(`Total assets: ${allAssets.length}`)

  let deletedCount = 0

  for (const asset of allAssets) {
    // 参照されているか確認
    const references = await client.fetch(
      `count(*[_type in ["blogPost","infoPost"] && references($id)])`,
      { id: asset._id }
    )

    if (references === 0) {
      // どこからも参照されていなければ削除
      await client.delete(asset._id)
      console.log(`Deleted orphan: ${asset._id}`)
      deletedCount++
    }
  }

  console.log(`Completed. Deleted ${deletedCount} orphan images.`)
}

deleteOrphanImages().catch(console.error)
