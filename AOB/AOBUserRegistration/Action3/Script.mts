Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com" @@ script infofile_;_ZIP::ssf20.xml_;_

''''''
'IF already login so log out
If Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebButton("Open").Exist(5) Then @@ script infofile_;_ZIP::ssf18.xml_;_
	Reporter.ReportEvent micDone, "User already login", "User already login"
	Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebButton("Open").Click
End If

If Browser("Home - Advantage Bank_2").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
	Browser("Home - Advantage Bank_2").Page("Dashboard - Advantage").WebButton("WebButton").Click
Browser("Home - Advantage Bank_2").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
End If

'''''''

 @@ script infofile_;_ZIP::ssf23.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Exist(5) Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
currentTime =  datediff("s",#1970/1/1#,now()) &".com"
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebEdit("firstName").Set Parameter("username")&currentTime @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set Parameter("lastName") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set Parameter("email")&currentTime @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Set Parameter("username")&currentTime @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("Password The password").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password_2").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("PasswordConfirm Password").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebCheckBox("createAccountInAOS").Set "ON" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click
End If

 If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("Profile Icon").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "new user Registration succes"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to new user Registration"
 End If
 @@ script infofile_;_ZIP::ssf18.xml_;_
