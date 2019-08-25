

import React, {Fragment} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export default class page1 extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <Fragment>
        <View style={styles.body}>
          <Text>page1</Text>
          <Button
            title={' GO Back '} 
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Button
            title={' 跳转到页面4 '} 
            onPress={() => {
              navigation.navigate('page4')
            }}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
