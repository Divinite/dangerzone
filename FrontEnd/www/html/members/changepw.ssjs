/* $Id: changepw.ssjs,v 1.6 2005/04/20 20:43:30 runemaster Exp $ */

var sub="";

load("sbbsdefs.js");
load("../web/lib/template.ssjs");

today = time();

var success=false;

var backurl=http_request.header.referer;

template.resultmsg='';

var oldpw = http_request.query["oldpass"];
oldpw = oldpw.toString();
oldpw = oldpw.toUpperCase();
var newpw1 = http_request.query["newpass1"];
newpw1 = newpw1.toString();
newpw1 = newpw1.toUpperCase();
var newpw2 = http_request.query["newpass2"];
newpw2 = newpw2.toString();
newpw2 = newpw2.toUpperCase();

if(oldpw == '') {
      template.resultmsg="Old password is empty. Please enter old password.";
}
else
  if(oldpw != user.security.password) {
      template.resultmsg="Old password is not correct. Please Re-Enter.";
}
else
if(newpw1 == '') {
    template.resultmsg="New password cannot be blank!  Please enter a new password.";
}
else
if(newpw1.length < 4) {
    template.resultmsg="New Password must be a minimum of 4 characters. Please Re-Enter.";
}
else
if(newpw1 != newpw2) {
    template.resultmsg="New Passwords do not match. Please Re-Enter.";
}
else  {
    template.resultmsg="Password Changed Successfully.";
    user.security.password = newpw1;
    user.security.password_date = today;
    success=true;
}

if(success)
    template.response='Please <a href="/login.ssjs">Re-Login</a>.';
else
    template.response='<a href="' + backurl + '">Back to Change Password Page</a>';

write_template("header.inc");
load("../web/lib/topnav_html.ssjs");
load("../web/lib/leftnav_html.ssjs");
write_template("changepw.inc");
write_template("footer.inc");

