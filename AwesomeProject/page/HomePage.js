
import React, {Fragment} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


class HomePage extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle:'返回'  //设置此页面返回按钮文案，有长度限制
  }
  render() {
    const { navigation } = this.props
    return (
      <Fragment>
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
            <Button title={'GO to Page1'} onPress={() => {
              navigation.navigate('page1', {name: '动态的'})
            }}></Button>
            <Button title={'GO to Page2'} onPress={() => {
              navigation.navigate('page2')
            }}></Button>
            <Button title={'GO to Page3'} onPress={() => {
              navigation.navigate('page3', {name: 'devio'})
            }}></Button>
          </View>
          <View style={styles.body}>
            <Text>page1</Text>
          </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default  HomePage