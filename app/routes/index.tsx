import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default function App() {
  const posts = import.meta.glob("../posts/*.mdx", { eager: true }) as any;
  return (
    <div font="sans">
      <h1>Stickynotes</h1>
      <p>
        とるにたらない数学のメモを書いていくサイトです。自由に見てください。
      </p>
      <p>
        なおこのサイトを大学のレポートに引用するのはおすすめしません。
        自分の頭で考え、自分の言葉で書くことをお勧めします。
      </p>
      <p>
        文責は全て私にあります。謝辞にある方々への直接の問い合わせはご遠慮ください。
      </p>
      <hr />
      <div m="1" grid="" grid-cols="3" grid-rows="[minmax(400px,1fr)_50px]" gap="2">
        {Object.keys(posts).map((path) => {
          const post = posts[path];
          return (
            <div grid="" row-span="2" grid-rows="subgrid" border="gray-400 solid 1 rounded" p="3" font="serif">
              <div prose="">
                <post.default />
              </div>
              <div prose="">
                <p>Date: {post.frontmatter.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
