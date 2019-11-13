// put the ammount you want to chnage in pennies here 
$amount = 37;

// Get the max number of quarters 
$quarters = (int) ($amount/25);

// Get the max numbers of dimes from leftover amount 
$leftover = $amount%25;
$dimes = (int) ($leftover/10);

// Get  the max number nickles from left overs 
$leftover = $amount%10;
$nickles = (int) ($leftover/5);

// what's left will be 0-4 pennies 
$pennies = $amount%5;

printf('Quarters:%d Dimes: %d Nickeles %d Pennies: %d', $quarters ,$dimes,$nickles,$pennies);