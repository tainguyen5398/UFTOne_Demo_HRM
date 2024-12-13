
Browser("LoginPage").Page("msg_LoginPage").WebEdit("iusername").Set "admin_example" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("LoginPage").Page("msg_LoginPage").WebEdit("password").SetSecure "675c506dfec130ebb449806a8d039f0f0446" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("LoginPage").Page("msg_LoginPage").WebButton("Login").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("LoginPage").Page("msg_LoginPage").WebElement("Logged In Successfully.").Click
 @@ script infofile_;_ZIP::ssf16.xml_;_
