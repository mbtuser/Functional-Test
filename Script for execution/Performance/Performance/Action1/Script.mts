Dim a
Dim b
Dim c

a=Parameter("User_Name")
b=Parameter("Password")


randomize
c = int(rnd*10) + 1

'If send User_Name = AOB user from data set
If a = "AOB user" Then
	c=9
End If

If c>8  Then
	Reporter.ReportEvent micDone, "Expecting small than 8", "Got: "& c 
	Reporter.ReportEvent micPass, "Passing on", "value: " & c
Else
	Reporter.ReportEvent micFail, "Expecting small than 8", "Got: "& c
End If




