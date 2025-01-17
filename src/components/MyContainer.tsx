import MyList from "./MyList"
import { useState } from "react"

type TItem = {
  id: string
  text: string
}

const MyContainer = () => {
  const header: string = "This is a title header"
  const [items, setItems] = useState<TItem[]>([
    { id: "1", text: "This is first task" },
    { id: "2", text: "This is second task" },
  ])
  const [newText, setNewText] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id: string = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`
    const newItem: TItem = { id, text: newText }
    setItems([...items, newItem])
    setNewText("")
  }

  return (
    <div>
      <MyList header={header} items={items} />
      <form onSubmit={handleSubmit}>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        ></textarea>
        <button type="submit">Add text</button>
      </form>
    </div>
  )
}

export default MyContainer
