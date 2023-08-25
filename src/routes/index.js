import { lazy } from "react";

import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: lazy(() => import("./../pages/HomeTemplate")),
    nested: [
      { path: "", element: lazy(() => import("./../pages/HomeTemplate/LichChieu")) },
      { path: "cum-rap", element: lazy(() => import("./../pages/HomeTemplate/CumRap")) },
      { path: "tin-tuc", element: lazy(() => import("./../pages/HomeTemplate/TinTuc")) },
      { path: "ung-dung", element: lazy(() => import("./../pages/HomeTemplate/UngDung")) },
    ]
  },
  {
    path: "admin",
    element: lazy(() => import("./../pages/AdminTemplate")),
    nested: [
      { path: "dashboard", element: lazy(() => import("./../pages/AdminTemplate/Dashboard")) },
      { path: "add-user", element: lazy(() => import("./../pages/AdminTemplate/AddUser")) },
    ]
  }
]

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return <Route key={route.path} path={route.path} element={<route.element/>}>
        {route.nested.map((item) => <Route key={item.path} path={item.path} element={<item.element/>} />)}
      </Route>
    } else {
      return <Route key={route.path} path={route.path} element={<route.element/>} />
    }
  })
}

export default renderRoutes;