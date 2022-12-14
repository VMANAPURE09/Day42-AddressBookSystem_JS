console.log("Welcome to AddressBook System Using Javascript");
//UC1 Ability to create a Address Book Contact with first and last names,address, city, state, zip, phone number and email...RG----
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    eMail;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }

        toString(){
            return ("First Name: "+this.firstName+" \nLast Name: "+this.lastName+"\nAddress: "+this.address+"\nCity : "+this.city+"\nState: "+this.state+"\nZip Code : "+this.zip+"\nPhone: "+this.phoneNumber+ "\nE-Mail: "+this.eMail);
        }
}
let contactObj = new Contact("Vaibhav","Manapure","Wardha","Nagpur","Maharashtra",442305,9764510067,"manapure.vaibhav542@gmail.com");
console.log(contactObj.toString());


//UC2 Valid contact are added

let firstNamePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let lastNamePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let addressPattern = new RegExp('^[A-Za-z0-9 /,]{4,}$');
let cityPattern = new RegExp('^[A-Za-z]{4,}$');
let statePattern = new RegExp('^[A-Za-z]{4,}$');
let zipPattern = new RegExp('^[1-9]{1}[0-9]{5}$')
let phoneNoPattern = new RegExp('^[1-9]{2,}[ ][6-9]{1}[0-9]{9}$');
let eMailPattern = new RegExp('^([A-Za-z]{3,}([.a-z]*)[@][a-z]{2,}[.][a-z]{2,3}([.a-z]*))$')

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }
    get firstName() {return this._firstName};
    set firstName(firstName){
        if (firstNamePattern.test(firstName)) this._firstName = firstName;
        else throw 'First Name pattern is incorrect';
    }
    get lastName() {return this._lastName};
    set lastName(lastName){
        if (lastNamePattern.test(lastName)) this._lastName = lastName;
        else throw 'Last Name pattern is incorrect';
    }
    get address() {return this._address};
    set address(address){
        if (addressPattern.test(address)) this._address = address;
        else throw 'Address pattern is incorrect';
    }
    get state() {return this._state};
    set state(state){
        if (statePattern.test(state)) this._state = state;
        else throw 'State pattern is incorrect';
    }
    get city() {return this._city};
    set city(city){
        if (cityPattern.test(city)) this._city = city;
        else throw 'City pattern is incorrect';
    }
    get zip() {return this._zip};
    set zip(zip){
        if (zipPattern.test(zip)) this._zip = zip;
        else throw 'Zip pattern is incorrect';
    }
    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber){
        if (phoneNoPattern.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'PhoneNumber pattern is incorrect';
    }
    get eMail() {return this._eMail};
    set eMail(eMail){
        if (eMailPattern.test(eMail)) this._eMail = eMail;
        else throw 'Email pattern is incorrect';
    }

    toString(){
        return ("First Name: "+this.firstName+" \nLast Name: "+this.lastName+"\nAddress: "+this.address+"\nCity : "+this.city+"\nState: "+this.state+"\nZip Code : "+this.zip+"\nPhone: "+this.phoneNumber+ "\nE-Mail: "+this.eMail);
    }
}

try{
    let contactObj = new Contact("Vaibhav","Manapure","Wardha","Nagpur","Maharashtra",442305,9764510067,"manapure.vaibhav542@gmail.com");
    console.log(contactObj.toString());
}
catch (ex){
    console.error(ex);
}


//UC3 Ability to add Contacts into Array
let contactsArray = new Array();
function AddContact(firstName,lastName,address,city,state,zip,phoneNumber,Email){
    try{
    let contactobject = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,Email);
    contactsArray.push(contactobject);
    }
    catch (ex){
        console.error(ex);
    }
}
AddContact("Vaibhav","Manapure","Wardha","Nagpur","Maharashtra",442305,9764510067,"manapure.vaibhav542@gmail.com");
AddContact("Navnath","Tikode","Sirsi","Sirsi","Karnataka","581336","91 9482652477","navnathtikode@gmail.com");
AddContact("Sumit","Manchi","Shivmoga","Shivmoga","Karnataka","577425","91 7760054592","sumitmanchi@gmail.com");
contactsArray.forEach(contactsDetails => console.log(contactsDetails.toString()));

//UC4 Find and Edit Existing Contact
function FindandEditContact(){
    try{
        let contactNameToBeEdited = prompt("Enter the name of the Contact you want to edit: ");
        contactsArray.forEach(contactsDetails => {
            if (contactsDetails.firstName == contactNameToBeEdited){
                while(true){
                let choice = parseInt(prompt("Enter choice of the Detail you want to edit:-\n1 1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address : \n9: Go Back"));
                switch (choice){
                    case 1:
                        let newFN = prompt("Enter updated first name: ");
                        contactsDetails.firstName = newFN;
                        break;
                    case 2:
                        let newLN = prompt("Enter updated last name: ");
                        contactsDetails.lastName = newLN;
                        break;
                    case 3:
                        let newAddress = prompt("Enter updated address: ");
                        contactsDetails.address = newAddress;
                        break;
                    case 4:
                        let newCity = prompt("Enter updated city: ");
                        contactsDetails.city = newCity;
                        break;
                    case 5:
                        let newState = prompt("Enter updated state: ");
                        contactsDetails.state = newState;
                        break;
                    case 6:
                        let newZip = prompt("Enter updated zip: ");
                        contactsDetails.zip = newZip;
                        break;
                    case 7:
                        let newPhoneNo = prompt("Enter updated phone number: ");
                        contactsDetails.phoneNumber = newPhoneNo;
                        break;
                    case 8:
                        let newEmail = prompt("Enter updated email: ");
                        contactsDetails.eMail = newEmail;
                        break;
                    case 9:
                        return;
                    default:
                        console.log("Enter valid choice");
                        break;
                    }
                }
            }
        });
    }
    catch(ex){
        console.error(ex);
    }
}
FindandEditContact();
console.log(contactsArray);

//UC5 Deleting a Contact
function DeletingContact(){
    try{
        let contactNameToBeDeleted = prompt("Enter the name of the Contact you want to delete: ");
        const indexOfArray = contactsArray.findIndex((contactDetails)=> contactDetails.firstName == contactNameToBeDeleted);
        contactsArray.splice(indexOfArray,1);
    }
    catch(ex){
        console.error(ex);
    }
}
DeletingContact();
console.log(contactsArray);

//UC6 Finding Number of Contacts// 
let noOfContacts = contactsArray.reduce((contactsDetails) => contactsDetails + 1,0);
console.log("Number of Contacts = "+noOfContacts);

//UC7 Ensure no Duplicate Contact

function duplicateEntry(){
    let inputfirstname = prompt("Enter Firstname of the contact to be added");
    let inputlastname = prompt("Enter Lastname of the contact to be added");
    let inputaddress = prompt("Enter Address of the contact to be added");
    let inputCity = prompt("Enter City of the contact to be added");
    let inputstate = prompt("Enter State of the contact to be added");
    let inputZip = prompt("Enter Zipcode of the contact to be added");
    let inputphone = prompt("Enter Phone of the contact to be added");
    let inputemail = prompt("Enter email of the contact to be added");
    contactsArray.forEach(contactsdetails=>{
        if(contactsdetails.firstName == inputname && contactsdetails.lastName==inputlastname && contactsdetails.address==inputaddress
            && contactsdetails.city==inputCity && contactsdetails.state ==inputstate)
            {
                console.log("Duplicate entries are not allowed");
            } 
            else
            {
                AddContact(inputfirstname,inputlastname,inputaddress,inputCity,inputstate,inputZip,inputphone,inputemail);
            }
    })
}

//UC8 Seach Person by City or State
function searchPersonByStateorCity(){
    let cityorStateName = prompt("Enter City or State Name: ");
    let contactCityStateArray = contactsArray.filter((contacts) => contacts.state == cityorStateName || contacts.city == cityorStateName);
    console.log(contactCityStateArray);
}
searchPersonByStateorCity();


//UC9 View Person by City or State
function ViewPersonByStateorCity(){
    let cityorStateName = prompt("Enter City or State Name: ");
    let ViewcontactCityStateArray = contactsArray.filter((contacts) => contacts.state == cityorStateName || contacts.city == cityorStateName);
    ViewcontactCityStateArray.forEach(contactperson=> {contactperson.firstName})
    console.log(ViewcontactCityStateArray);
}
ViewPersonByStateorCity();
