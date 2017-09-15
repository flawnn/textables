import { StackNavigator } from 'react-navigation'
import MemeScreen from '../Containers/MemeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MemeScreen: { screen: MemeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MemeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
