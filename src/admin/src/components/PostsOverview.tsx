import { Content } from "types/Content"

interface Props {
  title: string
  cards: Content[]
}

const PostsOverview = ({ title, cards }: Props): JSX.Element => {
  console.log(cards)
  return (
    <div>
      <h1>{title}</h1>
      <button>creer un nouneau</button>
      <div>total:</div>

      {/* pagination */}
      {/*            */}
      {/* pagination */}

      {cards.map((card) => {
        ;<div>
          <div>{card.title}</div>
          <div>{card.category}</div>
          <div>{card.date}</div>
          <img alt={card.title} src={card.image} />
        </div>
      })}
    </div>
  )
}

export default PostsOverview
