Dim a
Dim b
Dim c

a=Parameter("User_Name")
b=Parameter("Password")

dim r
randomize
c = int(rnd*10) + 1


If c>5  Then
	Reporter.ReportEvent micDone, "Expecting ""Big than 5"" ", "Got: " & c
	Parameter("Bank_account")="1234"
	Reporter.ReportEvent micPass, "Passing on", "Got" & c
Else
	Reporter.ReportEvent micFail, "Expecting ""Big than 5"" ", "Got: "& c
	Parameter("Bank_account")="4321"
End If
 


