import { Route, useNavigate } from "react-router-dom";

import { Navigate, useLocation } from "react-router-dom"

export function GuardedRoute(props: { redirect: string, children: React.ReactNode }): JSX.Element {
  const { children, redirect } = props;

  const isLoggedIn: boolean = localStorage.getItem('logged_user') !== null;
  const location = useLocation()

  return isLoggedIn ? (
    <>{ children }</>
  ) : (
    <Navigate
      replace={true}
      to={redirect}
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}
