import { Home, HomeHeader } from './scenes'
import { testmain } from './scenes'
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
    path: '/test',
    main: testmain
  },

  {
    path: '/user',
    main: usermain
  }
]
