export default {
  /* eslint-disable */
  "needsTutorial": true,
  "manifestUrl": "https://s3-us-west-2.amazonaws.com/himatdata/BeringStrait/whalemanifest.json",
  "widgetType": "ImageSoundSwipe",
  "widgetProperties": {
    "baseUrlTemplate": "https://s3-us-west-2.amazonaws.com/himatdata/BeringStrait/{0}.jpg",
    "delimiter": "____",
    "leftSwipeLabel": "Fail",
    "rightSwipeLabel": "Whale",
    "soundUrlTemplate": "https://s3-us-west-2.amazonaws.com/himatdata/BeringStrait/{0}.wav"
  },
  manifestType: 'S3',
  manifestS3: {
    bucket: 'himatdata',
    prefix: 'BeringStrait',
    delimiter: '.wav',
    max_keys: 10000,
  },
  "betaMode": false,
  "firebaseKeys": {
    "apiKey": "AIzaSyDmfW_1OZekAGqgQMGpaxkHyamQKCms2cg",
    "authDomain": "beringstrait-4b1f0.firebaseapp.com",
    "databaseURL": "https://beringstrait-4b1f0.firebaseio.com",
    "projectId": "beringstrait-4b1f0",
    "storageBucket": "beringstrait-4b1f0.appspot.com",
    "messagingSenderId": "343092931202"
  },
  "app": {
    "navbarVariant": "info"
  },
  "iconAttribute": {
    "name": "openmoji",
    "url": "http://openmoji.org"
  },
  "levels": {
    "0": {
      "level": 0,
      "min": 0,
      "max": 100,
      "character": null,
      "img": null,
      "img_grey": null
    },
    "1": {
      "level": 1,
      "min": 101,
      "max": 350,
      "character": "fish",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true"
    },
    "2": {
      "level": 2,
      "min": 351,
      "max": 750,
      "character": "frog",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true"
    },
    "3": {
      "level": 3,
      "min": 751,
      "max": 1000,
      "character": "duck",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true"
    },
    "4": {
      "level": 4,
      "min": 1001,
      "max": 1500,
      "character": "koala",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true"
    },
    "5": {
      "level": 5,
      "min": 1501,
      "max": 2000,
      "character": "cat",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true"
    },
    "6": {
      "level": 6,
      "min": 2001,
      "max": 2500,
      "character": "lion",
      "img": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true",
      "img_grey": "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true"
    }
  },
  "home": {
    "title": "Arctic Whaledr",
    "tagline": "Help us find whale sounds",
    "backgroundUrl": "https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/SwipesForScience.svg?sanitize=true"
  },
  "play": {
    "blankImage": "https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg"
  },
  "chats": {
    "blankImage": "https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg"
  },
  "profile": {
    "blankImage": "https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg"
  },
  "tutorial": {
    "customBackgroundAnimation": "Bubbles",
    "steps": {
      "intro": [
        {
          "text": "We want to learn about whales, the sounds the make, and the habitats they live in",
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Humpback_whales_in_singing_position.jpg"
        },
        {
          "text": "We use a hydrophone, \n or an 'underwater microphone', \n to record and study whale calls",
          "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hydrophone_being_lowered_into_the_Atlantic.jpg"
        },
        {
          "text": "We then make a picture of the sound called a 'spectrogram' \n with frequency or pitch on the y-axis and time on the x-axis, /n the colors represent the loudness of the sound (intensity)",
          "image": "http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T05_16_45.jpg"
        },
        {
          "text": "Most of the time you do not hear anything...",
          "image": "http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T21_55_05.jpg"
        },
        {
          "text": "...but sometimes, you hear a whale",
          "image": "http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T19_04_25.jpg"
        },
        {
          "text": "or dolphins",
          "image": "http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T01_50_25.jpg"
        },
        {
          "text": "We want to train a machine to recognize the sounds whales and dolphins make, \n and for that we need your help!",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gnome-computer.svg/600px-Gnome-computer.svg.png"
        }
      ],
      "examples": [
        {
          "text": "Swipe right when you hear/see a whale <br> you can tap the image to listen to the sound clip",
          "pointer": "A3150912_09_1970_01_01T00_03_15_241455Z",
          "answer": 1,
          "tutorialStep": 0
        },
        {
          "text": "When there are no whale sounds \n swipe left",
          "pointer": "A3150919_08_1970_01_01T00_19_35_045654Z",
          "answer": 0,
          "tutorialStep": 1
        },
        {
          "text": "If you're not sure, click the 'Help' button \n to ask a scientist for help",
          "pointer": "A3150912_09_1970_01_01T00_05_35_991333Z",
          "answer": 0,
          "tutorialStep": 2
        },
        {
          "text": "Ready to play?",
          "tutorialCompleted": true
        }
      ]
    }
  }
};
