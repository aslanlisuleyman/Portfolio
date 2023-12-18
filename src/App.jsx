import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getData } from './redux/slices/dataSlice'
import { getData2 } from './redux/slices/dataSlice2'
import { getData3 } from './redux/slices/dataSlice3'

const router=createBrowserRouter(Routes)
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])
useEffect(()=>{
  dispatch(getData2())
})
useEffect(()=>{
  dispatch(getData3())
})
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
