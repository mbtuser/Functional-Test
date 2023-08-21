

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","www.google.com"
Browser("GitHub - mbtuser/Functional-Te").Navigate Parameter("RUL") @@ hightlight id_;_10093898_;_script infofile_;_ZIP::ssf2.xml_;_



If Browser("GitHub - mbtuser/Functional-Te").Page("Page").WebElement("Real").Exist Then
	Reporter.ReportEvent micPass, "AUT Tunneling", "AUT succefull reached"
Else 
	Reporter.ReportEvent micFail, "AUT Tunneling", "Fail to reached the AUT"
End If @@ script infofile_;_ZIP::ssf3.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_

Browser("GitHub - mbtuser/Functional-Te").Close @@ hightlight id_;_10618634_;_script infofile_;_ZIP::ssf1.xml_;_
