Browser("HRM | Anh Tester Demo").Page("LoginPage").WebEdit("iusername").Set "admin_example1"
Browser("HRM | Anh Tester Demo").Page("LoginPage").WebEdit("password").SetSecure "675b08b03975f96910150293be38f4f1d22b"
Browser("HRM | Anh Tester Demo").Page("LoginPage").WebButton("Login").Click

VerifyText "Invalid Login Credentials.", Browser("HRM | Anh Tester Demo").Page("HRM | Anh Tester Demo").WebElement("Invalid Login Credentials.").GetROProperty("text"), "Verify Text Button Logout"
 @@ script infofile_;_ZIP::ssf2.xml_;_
