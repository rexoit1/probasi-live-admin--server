module.exports = {
  // database
  MONGODB_USERNAME: "ProbashiAdmin", // YOUR_DB_USERNAME
  MONGODB_PASSWORD: "ProbashiLive123", // YOUR_DB_PASSWORD
  MONGODB_DB_NAME: "probashiLive", // YOUR_DB_NAME

  //port
  PORT: process.env.PORT || 5000,

  //secret key for API
  SECRET_KEY: "0E5GMShMBAl96a78xHZXnefSmrITSLg1", // YOUR_APP_SECRET_KEY

  //gmail credentials for send email
  EMAIL: "probashilive1@gmail.com", // YOUR_EMAIL_ADDRESS
  PASSWORD: "Pl526255", // YOUR_EMAIL_PASSWORD

  //secret key for jwt
  JWT_SECRET: "KrSsyDNUZL",

  // SERVER_PATH: "https://adminpanel.probashi.live/", 
  SERVER_PATH: "http://139.59.217.94:5000/", // YOUR_BASE_URL

  
  // firebase server key for notification
  SERVER_KEY:
    "AAAA-tcNFfo:APA91bEKNLGRaY7jBRFbmuzSTQXpLnnc4afev626CSmDrJgQmPAetfRbC4QSFNUYMtq2CeGp6KUagOQuD9hNq1NQl1rkvZLnfa1G1bYjyMD-WEXGgjAPKmBGFfuqwheqAZUtXNkzq-c0", // YOUR_FIREBASE_SERVER_KEY
};
