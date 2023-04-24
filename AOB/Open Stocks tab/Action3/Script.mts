Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Stocks").Click @@ script infofile_;_ZIP::ssf24.xml_;_

If Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebButton("My Watchlist").exist Then
	Reporter.ReportEvent micPass, "Open Stocks", "Stocks window opened"
End If
 @@ script infofile_;_ZIP::ssf25.xml_;_
