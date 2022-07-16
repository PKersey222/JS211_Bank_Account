'use strict'

class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transaction = []
    }

    balance(){
        let sum = 0;
        for(let i=0; i<this.transactions.length; ++i){
            sum += this.transactions[i].amount;
        }
        return sum
    }
    charge(payee, amt){
        let currentBalance =this.balance();
        if(amt <= currentBalance){
            let chargeTransaction = new Transaction (-amt, payee);
            this.transactions.push(chargeTransaction);
    }    
}
    deposit(amt){
        if(amt > 0){
            let depositTransaction = new Transaction(amt, 'Deposit');
            this.transactions.push(chargeTransaction);
      }
 }

class Transaction {
    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}

class SavingsAccount extends BankAccount {

    constructor(accountNumber, owner, interestRate){
        super(accountNumber, owner);
        this.interestRate = interestRate;
    }

    accrueInterest(){
        let currentBalance = this.balance();
        let interestAmt = currentBalance * this.interestRate;
        let intrestTransaction = new Transaction(interestAmt, "Intrest");
        this.transactions.push(intrestTransaction)
    }
}




// test below
if (typeof describe === 'function') {
    const assert = require('assert')

    describe("#testing account creation", function() {
        it('should create a new account correctly',function(){
            let acct1 = new BankAccount('xx4432', "James Doe");
            assert.equal(acct1.owner, 'James Doe');
            assert.equal(acct1.accountNumber, 'xx4432');
            assert.equal(acct1.transactions.length, 0);
            assert.equal(acct1.balance(), 0);
        });
    });

    describe("#testing account balance", function(){
        it('should create a new account correctly', function(){
        let acct1 = new BankAccount('xx4432', "James Doe");
        assert.equal(acct1.balance(), 0);
        acct1.deposit(100);
        assert.equal(acct1.balance(), 100);
        acct1.charge("Target", 10);
        assert.equal(acct1.balance(), 90);
    });

    it('should not allow negative deposit', function(){
        let acct1 = new BankAccount('xx4432', "James Doe");
        assert.equal(acct1.balance(), 0);
        acct1.deposit(100);
        assert.equal(acct1.balance(), 100);
        acct1.deposit(-30);
        assert.equal(acct1.balance(), 100);
    });

    it('should not allow charging to overdraft', function(){
        let acct1 = new BankAccount('xx4432', "James Doe");
        assert.equal(acct1.balance(), 0);
        acct1.charge("target", 30);
        assert.equal(acct1.balance(), 0);
    });

    it('should allow a refund', function(){
        let acct1 = new BankAccount('xx4432', "James Doe");
        assert.equal(acct1.balance(), 0);
        acct1.charge("target", -30);
        assert.equal(acct1.balance(), 30);
    });

});

describe("#Testing transaction creation", function(){
    it('Should create a transaction correctly for deposit', function(){
        let t1 = new Transaction(30, "Deposit");
        assert.equal(t1.amount, 30);
        assert.equal(t1payee, "Deposit");
        assert.notEqual(t1.date, undefined);
        assert.notEqual(t1.date, null);
    });


    it('Should create a transaction correctly for a charge', function(){
        let t1 = new Transaction(-34.45, "Target");
        assert.equal(t1.amount, -34.45);
        assert.equal(t1payee, "Target");
        assert.notEqual(t1.date, undefined);
        assert.notEqual(t1.date, null);
    });
});

describe("Bunch of transactions and test", funtion())
let bigAccount = new BankAccount("11223344", "Maggie Smith");
it("test account created correctly", function(){
    assert.equal("11223344", bigAccount.accountNumber);   
    assert.equal("Maggie Smith", bigAccount.owner);
    assert.equal(bigAccount.balance(), 0)
})

   it("test deposits", function() {
    bigAccount.deposit(30);
    assert.equal('Deposit', bigAccount.transactions[0].payee)
    assert.equal(30, bigAccount.transactions[0].amount)
    bigAccount.deposit(20);
    bigAccount.deposit(-3);
    bigAccount.deposit(34.25);
    bigAccount.deposit(10000.45);
    assert.equal(10084.70, bigAccount.balance());
    bigAccount.charge("Clearout", 10084.70);
    assert.equal(0, bigAccount.balance());
   });

   it("test charges", function(){
    bigAccount.deposit(10000);
    bigAccount.charge("target", 40);
    bigAccount.charge("freebirds", 10.32);
    bigAccount.charge("Texeco", 40);
    bigAccount.charge("Bob's", -20);
    assert.equal(9929.68, bigAccount.balance());
    assert.equal(10, bigAccount.transactions.length);
   });

   it("test overdraft", function() {
    bigAccount.charge("target", 400000);
    assert.equal(10, bigAccount.transactions.length);
    assert.equal(9929.68, bigAccount.balance());
   });

   it("test a zero deposit", funtion(){
    bigAccount.deposit(0);
    assert.equal(10, bigAccount.transactions.length);
    assert.equal(9929.68, bigAccount.balance())
   });

describe("Savings Account creation", function(){
    it("Create account correctly", function{
        let saving = new SavingsAccount("xxx1234", "Maddie Mortis", .10);
        assert.equal("xxx1234", saving.accountNumber)
        assert.equal("Maddie Mortis", saving.owner);
        assert.equal(.10, saving.intrestRate)
        assert.equal(0, saving.balance())
    });

    it("Accrue intrest correctly", function{
        let saving = new SavingsAccount("xxx1234", "Maddie Mortis", .10);        
        saving.deposit(100);
        saving.charge("ATM", 30)
        saving.accrueInterest();
        assert.equal(77, saving.balance());
});

}