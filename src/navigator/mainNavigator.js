import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial198972Navigator from '../features/Tutorial198972/navigator';
import NotificationList198944Navigator from '../features/NotificationList198944/navigator';
import Settings198943Navigator from '../features/Settings198943/navigator';
import Settings198935Navigator from '../features/Settings198935/navigator';
import UserProfile198933Navigator from '../features/UserProfile198933/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial198972: { screen: Tutorial198972Navigator },
NotificationList198944: { screen: NotificationList198944Navigator },
Settings198943: { screen: Settings198943Navigator },
Settings198935: { screen: Settings198935Navigator },
UserProfile198933: { screen: UserProfile198933Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
