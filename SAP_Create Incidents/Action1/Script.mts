SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","","C:\Program Files\Google\Chrome\Application",""
Browser("Browser").Navigate "http://aeqaauto01.otxlab.net:80/AppEnhancer" @@ hightlight id_;_9962852_;_script infofile_;_ZIP::ssf1.xml_;_

 @@ script infofile_;_ZIP::ssf2.xml_;_
If Browser("Browser").Page("Welcome to AppEnhancer").WebEdit("User").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "Login window opened"
End If




