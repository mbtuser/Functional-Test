
Dim iURL, objShell, fileSystemObj, browserPath
iURL = Parameter("Site_URL")
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")
browserPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fileSystemObj.FileExists(browserPath) Then
    browserPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fileSystemObj.FileExists(browserPath) Then
        Reporter.ReportEvent micFail, "Browser Launch", "Chrome not found on this machine"
        ExitTest
End If
End If
objShell.ShellExecute browserPath, iURL, "", "", 1
Wait(5)

Browser("Browser").FullScreen @@ hightlight id_;_659120_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Shopping Cart").WebList("Categories").Select "Desktop Computers5" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Shopping Cart").WebList("container-cart---category--pro").Select "1.200,00 EUREmphasizedGaming MonsterTitaniumAvailableObject StatusEntry successfully validatedCompare" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Add to Cart").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Show Shopping Cart").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Wait(2)
Browser("Browser").Page("Shopping Cart").WebList("Items in Shopping Cart").Select "1 x1.200,00 EUREmphasizedGaming MonsterSave for LaterAvailableObject StatusEntry successfully validated" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Proceed").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Step 2").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Shopping Cart").WebList("container-cart---checkoutView-").Select "Cash on Delivery" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Step 3").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("First Name").Set "OpenText" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("Last Name").Set "OpenText" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("Phone Number").Set "1234567" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("E-mail Address").Set "demo@opentext.com" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Shopping Cart").WebElement("Step3 Details for Cash").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Step 4").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("Address").Set "Best street" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("City").Set "Best city" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("Zip Code").Set "123456" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Page("Shopping Cart").WebEdit("Country").Set "USA" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Shopping Cart").WebElement("__form2--FC-NoHead--Grid").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Step 5").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Order Summary").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf24.xml_;_
Browser("Browser").Page("Shopping Cart").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf25.xml_;_
