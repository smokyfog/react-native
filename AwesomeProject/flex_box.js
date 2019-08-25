// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };


// import React, { Component } from 'react';
// import { View } from 'react-native';

// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       <View style={{
//         flex: 1,
//         height: 300,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };


import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
