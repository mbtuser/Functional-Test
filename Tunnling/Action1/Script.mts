
'Open Chrome browser
systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe") @@ hightlight id_;_10093898_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Maximize

'Navigate to the URL inhirt from URL parameter
Browser("Browser").Navigate Parameter("RUL") @@ hightlight id_;_665334_;_script infofile_;_ZIP::ssf6.xml_;_
 @@ script infofile_;_ZIP::ssf8.xml_;_

'Validate the URL is opened
If Browser("Browser").Page("Dashboard [Jenkins]").Image("Jenkins").Exist Then
	Reporter.ReportEvent micPass, "AUT Tunneling", "Tunneling to local AUT succefull reached the internal Jenkins server"
Else 
	Reporter.ReportEvent micFail, "AUT Tunneling", "Tunnling to local AUT failed"
End If @@ script infofile_;_ZIP::ssf3.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_

 @@ hightlight id_;_10618634_;_script infofile_;_ZIP::ssf1.xml_;_
