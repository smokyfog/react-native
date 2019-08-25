
import React, {Fragment} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export default class page3 extends React.Component {
  render() {
    const { navigation } = this.props
    const { state, setParams } = navigation
    const { params } = state
    const showText = params&&params.mode==='edit'?'正在编辑':'编辑完成'
    return (
      <Fragment>
        <View style={styles.body}>
          <Text>page3</Text>
          <TextInput 
            style={styles.input}
            onChangeText={(text) => {
              setParams({title: text})
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black'
  }
});