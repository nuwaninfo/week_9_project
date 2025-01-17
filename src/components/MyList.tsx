interface ListProps {
  header: string
  items: TItem[]
}

type TItem = {
  id: string
  text: string
}

const MyList: React.FC<ListProps> = ({ header, items }) => {
  return (
    <div>
      <h1>{header}</h1>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default MyList
