module.exports = {
  plugins: {
    sauce: {
      disabled: true,
      commandTimeout: 600,
      idleTimeout: 1000,
      browsers: [
        'mac/chrome',
        'windows/chrome',
        'mac/firefox',
        'windows/firefox',
        'mac/safari',
        'any/iPhone',
        'any/android',
        'windows 10/internet explorer',
        'windows 10/MicrosoftEdge',
      ]
    }
  }
};
