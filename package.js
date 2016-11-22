Package.describe({
  name: 'juto:skeuocard',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'skeuomorphic credit card forms.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JutoApp/meteor-skeuocard.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});



Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.use(['fourseven:scss@3.8.0_1'],['client']);
  api.addFiles([
    "styles/skeuocard.reset.scss",
    "styles/skeuocard.scss",
    "javascripts/vendor/cssua.min.js",
    "javascripts/skeuocard.js"
  ],['client']);
  api.addAssets([
    "fonts/ocra-webfont.eot",
    "fonts/ocra-webfont.svg",
    "fonts/ocra-webfont.ttf",
    "fonts/ocra-webfont.woff",
    "images/card-flip-arrow.png",
    "images/card-front-background.png",
    "images/card-invalid-indicator.png",
    "images/card-valid-anim.gif",
    "images/card-valid-indicator.png",
    "images/error-pointer.png",
    "images/issuers/visa-chase-sapphire.png",
    "images/issuers/visa-simple-front.png",
    "images/products/amex-front.png",
    "images/products/dinersclubintl-front.png",
    "images/products/discover-front.png",
    "images/products/generic-back.png",
    "images/products/generic-front.png",
    "images/products/jcb-front.png",
    "images/products/maestro-front.png",
    "images/products/mastercard-front.png",
    "images/products/unionpay-front.png",
    "images/products/visa-back.png",
    "images/products/visa-front.png"
  ],['client']);
  api.export('Skeuocard',['client']);
});
