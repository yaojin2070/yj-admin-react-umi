import { createContext } from 'react'
/* 
  定义一个内容的包裹组件, 它是一个函数组件, 并且使用context来传递数值, 
  并且使用接口来扩展这个函数组件可以接受的参数, 
  这些参数就是context传递过来的值, 用于更新tab等 
*/
/* 定义一个接口 */
export interface LoginContextProps {
  tabUtil?: {
    addTab: (id: string) => void
    removeTab: (id: string) => void
  }
  updateActive?: (activeItem: { [key: string]: string | string}) => void
}

/* 暴露一个React.Context组件 */
const LoginContext: React.Context<LoginContextProps> = createContext({})

export default LoginContext;