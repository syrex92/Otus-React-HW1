import { useAppSelector } from '../../app/hooks'

function UsersCounter() {
  const selector = useAppSelector((state) => state.usersList.value)
//   const dispatch = useAppDispatch()

  return <div>
    <span>Пользователей: {selector.length}</span>
  </div>
}

export default UsersCounter;