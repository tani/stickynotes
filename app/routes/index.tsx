import { createRoute } from 'honox/factory'
import { css } from 'hono/css'

export const title = "Stickynotes | Masaya Taniguchi"

const appBody = css`
  margin: 10px;
  font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
`

const cardContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: minmax(400px, 1fr) 70px;
  gap: 10px;
`;

const card = css`
  border: 1px solid #ccc;
  border-radius: 1px;
  padding: 10px;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
`;

export default function App() {
  const posts = import.meta.glob("../posts/*.mdx", { eager: true }) as any;
  return (
    <div class={ appBody }>
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
      <div class={cardContainer}>
        {Object.keys(posts).map((path) => {
          const post = posts[path];
          return (
            <div class={card}>
              <div>
                <post.default />
              </div>
              <div>
                <p>Date: {post.frontmatter.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
