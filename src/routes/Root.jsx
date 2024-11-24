import {Outlet} from 'react-router-dom'
import NavigationBar from '../components/navbar/NavigationBar'

function Root() {
  return (
    <div>
        <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default Root
