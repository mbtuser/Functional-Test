SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","","C:\Program Files\Google\Chrome\Application",""
Browser("Google").Page("Google").Sync
Browser("Google").Navigate Parameter("URL") @@ hightlight id_;_1777982_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("Dashboard [Jenkins]").Image("Jenkins").Click @@ script infofile_;_ZIP::ssf2.xml_;_

'Validate the URL is opened
If Browser("Google").Page("Dashboard [Jenkins]").Image("Jenkins").Exist Then
	Reporter.ReportEvent micPass, "AUT Tunneling", "Tunneling to local AUT succefull reached the internal Jenkins server"
Else 
	Reporter.ReportEvent micFail, "AUT Tunneling", "Tunnling to local AUT failed"
End If
