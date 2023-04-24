Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebList("Add to my watchlist").Select Parameter("Stock_To_Select") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebEdit("Example: Tesla, Apple").Set Parameter("Stock_To_Select")
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Add").Click @@ script infofile_;_ZIP::ssf4.xml_;_
