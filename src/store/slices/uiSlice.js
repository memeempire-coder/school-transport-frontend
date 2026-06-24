import { createSlice } from '@reduxjs/toolkit'
const ui = createSlice({
  name: 'ui',
  initialState: { sidebarOpen: false },
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    }
  }
})
export const { toggleSidebar } = ui.actions
export default ui.reducer
