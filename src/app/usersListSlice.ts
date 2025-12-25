import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UsersListState {
  value: User[]
}

export interface User {
  name: string,
  password: string
}

const initialState: UsersListState = {
  value: []
}

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    addUser(state, user: PayloadAction<User>) {
      state.value.push(user.payload)
    },
  },
})

export const {
  addUser
} = usersListSlice.actions

export default usersListSlice.reducer