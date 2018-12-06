
//creating class for BankAccount.
class BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    getCurrentBalance(){
        return this.accountBalance;
    }
}
//creating class for Savings that extends the BankAccouhnt.
class Savings extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary){
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary = isSalary;
    }
    withDraw(amount){
        if(this.accountBalance<0)
        console.log("No amount in your account");
        else{
            this.accountBalance = this.accountBalance - amount;
            //console.log(amt_withdraw);
        }
    }
}
var savings = new Savings("1102435678","Vamsi",30000,true);//Creating savings object.
savings.withDraw(500);//Calling the withDraw() function
console.log("The current balance in savings account is: "+savings.getCurrentBalance());//printing the current balance the using the getCurrentBalance().
//creating the current class that extends the BankAccount class.
class Current extends BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit){
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit = odLimit;
    }
    withDraw(amount){
        if((this.accountBalance-amount) <= 0){
            this.accountBalance = ((this.accountBalance +this.odLimit)-amount);
            if(this.accountBalance<0){
                console.log("Your account balance is low....");
            }else{
                this.accountBalance = this.accountBalance-amount;
            }
        }else{
            this.accountBalance = this.accountBalance-amount;
        }
    }
}
var current = new Current("1102435678","Vamsi",15000,100);//creating the current object
current.withDraw(5000);//calling the withDraw() function for current function.
console.log("The available balance in current account is: "+current.getCurrentBalance());//printing the current balance using the getCurrentBalance() function.
