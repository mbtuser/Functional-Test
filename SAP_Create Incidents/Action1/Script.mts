SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","","C:\Program Files\Google\Chrome\Application",""
Browser("Browser").Navigate "https://integration-master-dev.almoctane.com/ui/?site#/site-admin/site-admin-shared-spaces" 

If Browser("Browser").Page("Welcome to AppEnhancer").WebEdit("User").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "Login window opened."
Else 
	Reporter.ReportEvent micFail, "Test failed", "AppEnhancer login window was not opened."
End If 







