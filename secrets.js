// 🚨 This file contains fake secrets for testing DLP and secrets-scanning tools only
// DO NOT use real credentials here.

const config = {
  awsAccessKeyId: "AKIAFAKEKEY1234567890",
  awsSecretAccessKey: "wJalrXUtnFakeSecretKey1234567890abcdEfgh",
  githubToken: "ghp_fakeGithubPersonalAccessToken1234567890abcd",
  slackWebhookUrl: "https://hooks.slack.com/services/T00000000/B00000000/FAKEslackWebHookToken",
  jwtSecret: "supersecretjwtkeyforDLPtesting1234567890",
  dbPassword: "P@ssw0rd123!",
  stripeSecretKey: "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
};

module.exports = config;
