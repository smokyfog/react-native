import { createStackNavigator } from 'react-navigation'
import React from 'react'
import { Button } from 'react-native'
import HomePage from '../page/HomePage'
import page1 from '../page/page1'
import page2 from '../page/page2'
import page3 from '../page/page3'
import page4 from '../page/page4'
import page5 from '../page/page5'

export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  page1: {
    screen: page1,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}页面名`  //动态配置
    })
  },
  page2: {
    screen: page2,
    navigationOptions: {  // 在这里定义每个页面的导航数据，静态配置
      title: `页面名2`
    }
  },
  page3: {
    screen: page3,
    navigationOptions: (props) => {
      const { navigation } = props
      const { state, setParams } = navigation
      const { params } = state
      return {
        title: params.title ? params.title : 'this is page3',
        headerRight: (
          <Button
            title={params.mode === 'edit' ? '保存' : '编辑'}
            onPress={() => setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
          />
        )
      }
    }
  },
  page4: {
    screen: page4,
    navigationOptions: {  // 在这里定义每个页面的导航数据，静态配置
      title: `页面名4`
    }
  },
  page5: {
    screen: page4,
    navigationOptions: {  // 在这里定义每个页面的导航数据，静态配置
      title: `页面名5`
    }
  },
})