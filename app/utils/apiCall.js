/** Method to simulate AJAX call for prescription claims data.
	*
	* An array of prescription claims data aggregated potentially
	* from several sources. We want to use this data to help determine
	* how close someone is getting to their annual deductible.
	*
	* @param callback {function} Success callback that returns an array of claims
	*														 as the first argument.
	* @return undefined
	*/
function getRxClaims(callback) {

	if (typeof callback !== 'function') {
		return;
	}

	var claims = [
		{
			'description' : "Vitamin D-2 Caps (ergocalciferol) 50,000u",
			'filledAt' : "Walgreens",
			'filledDate' : 1390492800,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 6.74
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1390492800,
			'amountPlanPaid' : 1.09,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Ibuprofen (ibu) Tabs 600mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1390579200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 9.88
		},
		{
			'description' : "Estradiol Tabs 2mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1391011200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 8.03
		},
		{
			'description' : "Hydrocodone/acetaminophen Tab 5/325",
			'filledAt' : "Walgreens",
			'filledDate' : 1391443200,
			'amountPlanPaid' : 2.60,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Ondansetron Tabs 4mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1391616000,
			'amountPlanPaid' : 4.36,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Hydrocodone/acetaminophen Tab 5/325",
			'filledAt' : "Walgreens",
			'filledDate' : 1392134400,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 9.92
		},
		{
			'description' : "Cephalexin Caps 250mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1392134400,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 4.53
		},
		{
			'description' : "Vitamin D-2 Caps (ergocalciferol) 50,000u",
			'filledAt' : "Walgreens",
			'filledDate' : 1392220800,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 6.74
		},
		{
			'description' : "Cephalexin Caps 500mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1392393600,
			'amountPlanPaid' : 0.08,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Ondansetron Odt Tabs 4mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1392998400,
			'amountPlanPaid' : 41.28,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Estradiol Tabs 2mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1392998400,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 8.03
		},
		{
			'description' : "Amoxic/pot Clav Tabs 875/125",
			'filledAt' : "Walgreens",
			'filledDate' : 1394460000,
			'amountPlanPaid' : 6.36,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Estradiol Tabs 2mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1396360800,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 8.03
		},
		{
			'description' : "Vitamin D-2 Caps (ergocalciferol) 50,000u",
			'filledAt' : "Walgreens",
			'filledDate' : 1396360800,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 6.74
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1396360800,
			'amountPlanPaid' : 1.09,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Fluticasone Prop Nasal Spray 50mcg",
			'filledAt' : "Walgreens",
			'filledDate' : 1396360800,
			'amountPlanPaid' : 34.38,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1390492800,
			'amountPlanPaid' : 1.09,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Fluticasone Prop Nasal Spray 50mcg",
			'filledAt' : "Walgreens",
			'filledDate' : 1399471200,
			'amountPlanPaid' : 14.07,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1399471200,
			'amountPlanPaid' : 4.09,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Vitamin D-2 Caps (ergocalciferol) 50,000u",
			'filledAt' : "Walgreens",
			'filledDate' : 1399471200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 3.86
		},
		{
			'description' : "Virt-pn Tabs",
			'filledAt' : "Walgreens",
			'filledDate' : 1399557600,
			'amountPlanPaid' : 38.07,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Butalb/apap/caff Tabs 50/325",
			'filledAt' : "WALGREENS #00063",
			'filledDate' : 1400248800,
			'amountPlanPaid' : 6.97,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Ondansetron Tabs 4mg",
			'filledAt' : "WALGREENS #00063",
			'filledDate' : 1400248800,
			'amountPlanPaid' : 16.82,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Suprep Bowel Prep Kit 354ml",
			'filledAt' : "Walgreens",
			'filledDate' : 1404396000,
			'amountPlanPaid' : 60.58,
			'amountMemberPaid' : 20.00
		},
		{
			'description' : "Asacol Hd Tabs 800mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1404396000,
			'amountPlanPaid' : 288.23,
			'amountMemberPaid' : 20.00
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1404655200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 9.59
		},
		{
			'description' : "Citranatal Assure Combo Pk 60",
			'filledAt' : "Walgreens",
			'filledDate' : 1404655200,
			'amountPlanPaid' : 56.60,
			'amountMemberPaid' : 20.00
		},
		{
			'description' : "Fluticasone Prop Nasal Spray 50mcg",
			'filledAt' : "Walgreens",
			'filledDate' : 1404655200,
			'amountPlanPaid' : 10.60,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Ibuprofen (ibu) Tabs 600mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1390579200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 9.88
		},
		{
			'description' : "Canasa Suppository 1\'s 1000mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1404741600,
			'amountPlanPaid' : 1446.50,
			'amountMemberPaid' : 20.00
		},
		{
			'description' : "Cephalexin Caps 250mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1392134400,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 4.53
		},
		{
			'description' : "Amoxic/pot Clav Tabs 875/125",
			'filledAt' : "Walgreens",
			'filledDate' : 1405000800,
			'amountPlanPaid' : 6.52,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Omeprazole/sod Bicarb Caps 40/1100",
			'filledAt' : "Walgreens",
			'filledDate' : 1405951200,
			'amountPlanPaid' : 304.04,
			'amountMemberPaid' : 10.00
		},
		{
			'description' : "Misoprostol Tabs 60\'s 200mcg",
			'filledAt' : "Walgreens",
			'filledDate' : 1390320000,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 5.50
		},
		{
			'description' : "Metformin Hcl Tabs 850mg",
			'filledAt' : "Walgreens",
			'filledDate' : 1404655200,
			'amountPlanPaid' : 0.00,
			'amountMemberPaid' : 9.59
		}
	];

	setTimeout(function() {
		callback(claims);
	}, 300);
}

module.exports = getRxClaims;