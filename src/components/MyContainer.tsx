import MyList from "./MyList"

type TItem = {
  id: string
  text: string
}

const MyContainer = () => {
  const header: string = "This is a title header"
  const items: TItem[] = [
    { id: "1", text: "This is first task" },
    { id: "2", text: "This is second task" },
  ]

  return (
    <div>
      <MyList header={header} items={items} />
    </div>
  )
}

export default MyContainer
