Dim username
Dim password

user = Parameter("user_name")
pass_word = Parameter("password")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com"

'IF already login so log out
If Browser("Browser").Page("Home - Advantage Bank").WebButton("Open").Exist(5) Then @@ script infofile_;_ZIP::ssf18.xml_;_
	Reporter.ReportEvent micDone, "User already login", "User already login"
	Browser("Browser").Page("Home - Advantage Bank").WebButton("Open").Click
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click
	'Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebElement("Logout").Click
	wait(1)
	Browser("Browser").Page("Dashboard - Advantage_2").WebElement("Logout").Click
End If

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Exist(5) Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click
End If

 'If Browser("Dashboard - Advantage").Page("Home - Advantage Bank").WebButton("Sign-In").Exist(5) Then
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist Then
 	Reporter.ReportEvent micPass, "Passed Test", "Logout succefull"
 End If'End of IF already login so log out


If (Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Exist) Then @@ script infofile_;_ZIP::ssf21.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set user
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set pass_word @@ script infofile_;_ZIP::ssf23.xml_;_
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click
else
Reporter.ReportEvent micFail, "Failed", "Log out from the application failed"
End If @@ script infofile_;_ZIP::ssf11.xml_;_
 @@ script infofile_;_ZIP::ssf17.xml_;_
 If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 	else
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 End If @@ script infofile_;_ZIP::ssf10.xml_;_
 

 @@ hightlight id_;_65658_;_script infofile_;_ZIP::ssf57.xml_;_
