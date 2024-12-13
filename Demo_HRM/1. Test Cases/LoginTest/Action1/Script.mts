
Browser("LoginPage").Page("Form_Login").WebEdit("txt_username").Set"admin_example"
Browser("LoginPage").Page("Form_Login").WebEdit("txt_pasword").Set"123456"
Browser("LoginPage").Page("Form_Login").WebButton("Login").Click
VerifyText"Logout",Browser("HomePage").Page("Home").WebButton("Logout").GetROProperty("text"), "Verify Text Logout button"



