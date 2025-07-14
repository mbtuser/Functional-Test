'1. Open Advantage Online Shopping (AOS)
'2. Login top the AOS
'3. Select tablet to buy
'4. Click buy now

'SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe",""
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe" ,"",3,""
Browser("Google").Navigate Parameter("URL")
Reporter.ReportEvent micPass,"Advantage Online Shopping ","The " + Parameter("URL") +  " site is open"
Browser("Google").Page("Advantage Shopping").WebEdit("username").Set "OpenText" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").Page("Advantage Shopping").WebEdit("password").SetSecure "687518d447d4a17fa8d54a0fe3ae30ae895647ed85a9687867593cf3f9c1" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Google").Page("Advantage Shopping").Link("TabletsCategory").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Google").Page("Advantage Shopping").WebButton("buy_now").Click @@ script infofile_;_ZIP::ssf5.xml_;_




