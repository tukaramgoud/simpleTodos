// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodos} = props
  const {title, id} = todoItem

  const buttonClicked = () => {
    deleteTodos(id)
  }

  return (
    <li className="list-item-styling">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={buttonClicked}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
