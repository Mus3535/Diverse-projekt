import { registerRootComponent } from 'expo';

import pp from './pp';
import fp from './fp';
import camp from './camp';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(pp);
