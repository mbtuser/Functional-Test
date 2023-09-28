Dim a
Dim b
Dim c

a=Parameter("User_Name")
b=Parameter("Password")



randomize
c = 0 'Always pass


If c=0  Then
	Reporter.ReportEvent micPass, "Expected 0", "Got" & c
Else
	Reporter.ReportEvent micFail, "Expected 0", "Got" & c
End If




