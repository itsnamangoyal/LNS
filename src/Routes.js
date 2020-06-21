import Home from  './components/pages/Home/Home'
import ContactUs from './components/pages/ContactUs/ContactUs'

const AppRoutes=[
    {id:1, path:"/", exact:true, component:Home},
    {id:4, path:"/contactus", exact:true, component:ContactUs},
]

export default AppRoutes