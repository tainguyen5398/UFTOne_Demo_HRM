Browser("HRM | Anh Tester Demo").Page("LoginPage").WebEdit("iusername").Set "admin_example" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("HRM | Anh Tester Demo").Page("LoginPage").WebEdit("password").SetSecure "675b08b03975f96910150293be38f4f1d22b" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("HRM | Anh Tester Demo").Page("LoginPage").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_

'verify text

VerifyText "Logout", Browser("HRM | Anh Tester Demo").Page("HomePage").WebButton("Logout").GetROProperty("text"), "Verify Text Button Logout" @@ script infofile_;_ZIP::ssf7.xml_;_
