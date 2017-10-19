import { Home, HomeHeader } from './scenes'
import { workingmain } from './scenes'
import { usermain } from './scenes'

export default [
  {
    path: '/',
    exact: true,
    header: HomeHeader,
    main: Home
  },
  {
    path: '/home',
    exact: true
  },
  {
    path: '/:user/:repo',
    main: workingmain
  },

  {
    path: '/:user',
    main: usermain
  }
]
