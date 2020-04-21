var push = require("web-push");

let vapidKeys = {
  publicKey: "BEHGpHBfg8Hf3aNR0YNtEQnojEKLF29JfGfqzPoGSFHe8ua5kl2TSEl5DcThktJrHC6wCnJqRhVI9CbtykT680c",
  privateKey: "6oXpLBUB3f_fHdV-kOuIRtXLNKvqpQdiWnzmZg-Xz4E",
};

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'text message');
