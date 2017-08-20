/*eslint linebreak-style: ["error", "windows"]*/
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
    exact: true,
    main: testmain
  },

  {
    path: '/user',
    exact: true,
    main: usermain
  }
]
