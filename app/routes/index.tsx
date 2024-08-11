import { createRoute } from 'honox/factory'
import { css } from 'hono/css'

export const title = "Stickynotes | Masaya Taniguchi"

const appBody = css`
  background-color: #fdfdfd;
  font-family: "Times New Roman", "YuMincho", "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif;
  margin: 10px;
`

const cardContainer = css`
  column-count: 3;
  @media (max-width: 1200px) {
    column-count: 2;
  }
  @media (max-width: 800px) {
    column-count: 1;
  }
`;

const card = css`
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  padding: 30px 50px;
  break-inside: avoid;
`;

const date = css`
  font-size: 0.8em;
  color: #999;
`

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
      <main class={cardContainer}>
        {Object.keys(posts).map((path) => {
          const post = posts[path];
          return (
            <article class={card}>
              <post.default />
              <hr />
              <p class={date}>Date: {post.frontmatter.date}</p>
            </article>
          )
        })}
      </main>
    </div>
  )
}
