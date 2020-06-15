import { createContext } from 'react'


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