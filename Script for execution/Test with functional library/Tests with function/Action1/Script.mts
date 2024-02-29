Dim x
x=5
call returnResult(x)
If x=6 Then
Reporter.ReportEvent micPass, "Pass", "x is equal: " & x	
Else 
Reporter.ReportEvent micFail, "Failed", "x is equal: " & x
End If

