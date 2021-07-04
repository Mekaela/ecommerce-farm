
import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCgKhTD3rJcsr1uZUtY0WWaNkCaek-UY6Q",
    authDomain: "fir-ecommerce-3ab87.firebaseapp.com",
    projectId: "fir-ecommerce-3ab87",
    storageBucket: "fir-ecommerce-3ab87.appspot.com",
    messagingSenderId: "838689602307",
    appId: "1:838689602307:web:a24a601cb874ceb9b30736"
  };
  {/* // Initialize Firebase */}
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

  // <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script> */}

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->