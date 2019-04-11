const https = require('https')

const makeNotifyRequest = (token) => {
  const data = JSON.stringify({
    "notification": {
      "title": "Robot",
      "body": "ทำโปรเจค",
      "click_action": "https://final-project-cd.netlify.com",
      "icon": "https://final-project-cd.netlify.com/icon.png"
    },
    "to": token,
  })
  const options = {
    hostname: 'fcm.googleapis.com',
    port: 443,
    path: '/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key=AAAA_Ws_PC0:APA91bEp7A-fsA_hIdWCg32Gg_5HWBlkBsZi81ONiZiHSxLYr8tYnc30TWZb7h-ZCgz7nkFYiQVoMYVMFD0763piG06AqPF2NsGqH0qv7yTYMiFTMiqMkxt0dpOHc_4jKowngHWBSqlW'
    },
  }
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })

  req.on('error', (error) => {
    console.error(error)
  })

  req.write(data)
  req.end()
}


const firebase = require('firebase')
const config = {
  apiKey: "AIzaSyANV663wVIAVV7BvRIzTZnkKej3qTVQbxE",
  authDomain: "final-project-coutdown.firebaseapp.com",
  databaseURL: "https://final-project-coutdown.firebaseio.com",
  projectId: "final-project-coutdown",
  storageBucket: "final-project-coutdown.appspot.com",
  messagingSenderId: "1088426032173"
}

firebase.initializeApp(config);

const ref = firebase.app().database().ref('tokens');
ref.once('value', (token) => {

  Object.keys(token.val()).forEach(key => {
    makeNotifyRequest(token.val()[key].token)
  })
})
