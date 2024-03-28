// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem} = props
  const {title} = todoItem
  return (
    <li className="list-item-styling">
      <p className="para">{title}</p>
      <button type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
