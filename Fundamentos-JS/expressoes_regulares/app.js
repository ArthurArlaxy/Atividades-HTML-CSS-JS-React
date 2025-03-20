function PhoneNumber(phoneNumber){
    const fixedNumber  = phoneNumber.replace(/[\sA-Za-z]/g,"")
    this.countryCode = fixedNumber.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedNumber.match(/(?<=\()\d+(?=\))/)[0] 
    this.number = fixedNumber.match(/(?<=\)).+/)[0]
}

console.log(new PhoneNumber('ddoawdnjioaw+awdwad55 awdawdwa(23) 97673-9777'))
console.log(new PhoneNumber('ddoawdnjioaw+awdwad55 awdawdwa(21) 97673-sfsefsefsef9337'))