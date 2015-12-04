Accounts.urls.login = function(token, urlScheme){
  var base = encodeURIComponent(Meteor.absoluteUrl('#/login/' + token));
  var custom = encodeURIComponent('' + urlScheme + '' + token);
  return Meteor.settings.public.REDIRECT_URL + '?base=' + base + '&custom=' + custom 
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
