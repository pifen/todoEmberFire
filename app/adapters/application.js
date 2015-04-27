import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';
//i use ember install emberfire. i did not user ember install emberfire
//This will add Firebase as a dependency in our bower.json file and it will generate app/adapters/application.js with the following content:
//look at the quick start guid
export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});
