import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { Signup } from '../pages/signup'
import { Signin } from '../pages/singin'
import SongUpload from '../pages/songUpload'
import PrivateRoute from './PrivateRoute'
export const RouteList = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route element={<PrivateRoute />}>
        <Route element={<SongUpload />} path="/upload-song" />
      </Route>
      {/* <Route
        path="/upload-song"
        element={<PrivateRoute element={<SongUpload />} />}
      /> */}
    </Routes>
  )
}
