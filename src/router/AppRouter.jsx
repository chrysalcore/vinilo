import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import App from '../App.jsx'
import Home from '../components/pages/Home.jsx'
import Menu from '../components/pages/Menu.jsx'
import Dishes from '../components/sections/dishes/Dishes.jsx'
import Reservation from '../components/pages/Reservation.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            { 
                index: true, 
                element: <Home />
            },
            { 
                path: 'reservation', 
                element: <Reservation />
            },
            { 
                path: 'menu', 
                element: <Menu />,
                children: [
                    { 
                        index: true,
                        element: <Navigate to={'cafe'} />
                    },
                    { 
                        path: ':category', 
                        element: <Dishes />
                    }
                ]
            }
        ]
    }
], { basename: '/vinilo' })

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter