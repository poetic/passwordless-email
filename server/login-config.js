Accounts.urls.login = function(token, urlScheme){
  var base = encodeURIComponent(Meteor.absoluteUrl('#/login/' + token));
  var custom = encodeURIComponent('' + urlScheme + '' + token);
  return Meteor.absoluteUrl( 'packages/poetic_accounts-passwordless-email/public/deep-link-redirect.html'  + '?base=' + base + '&custom=' + custom );
};

Accounts.emailTemplates.login = {
  subject: function(user){
    return 'Login to ' + Accounts.emailTemplates.siteName;
  },

  text: function(user, url){
    return "Click on the link below to login.\n" +
      "\n" + url;
  },
};
