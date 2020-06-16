import React, { useEffect } from 'react';

/* 引用ant中的 TabPaneProps 类型判断 */
import { TabPaneProps } from 'antd/es/tabs'

import { Tabs } from 'antd';
import LoginContext, { LoginContextProps } from './LoginContext';

const { TabPane } = Tabs;

/* 定义一个id函数 */
const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()

interface LoginTabProps extends TabPaneProps {
  tabUtil: LoginContextProps['tabUtil'];
  active?: boolean;
}

const LoginTab: React.FC<LoginTabProps> = props => {
  useEffect(() => {
    const uniqueId = generateId('login-tab-')
    const { tabUtil } = props
    if (tabUtil) {
      tabUtil.addTab(uniqueId);
    }
  }, [props])

  const { children } = props;
  return <TabPane {...props}>{props.active && children}</TabPane>;
}

/* 最后暴露一个函数式组件, 这个函数式组件是一个tab组件 */
const WrapContext: React.FC<TabPaneProps> & {
  typeName: string
} = (props) => (
  <LoginContext.Consumer>
    {(value) => <LoginTab tabUtil={value.tabUtil} {...props} />}
  </LoginContext.Consumer>
)

// 标志位 用来判断是不是自定义组件
WrapContext.typeName = 'LoginTab';

export default WrapContext;

