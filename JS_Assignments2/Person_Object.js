
//Creating an object with the given attributes.
var Person = {fname:"Mrudula",
              lname:"Nimmala",
              age:22,
              skills:['java','sql'],
              address: { city:'Guntur',pincode:522403},
              dateOfBirth:new Date('06-02-1996'),
              married:false,
              Profession:'Analyst'
            };
//creating minimum two objects with same attributes.
var Amitabh = {fname:"AMITHABH",
            lname:"BHACHAN",
            age:66,
            skills:['Acting','Philanthropist'],
            address: { city:'Mumbai',pincode:400708},
            dateOfBirth:'17-09-1958',
            married:true,
            Profession:'ACTOR'
          };
var person2 = {fname:"Bhargavi",
          lname:"Karri",
          age:22,
          skills:['java','sql'],
          address: { city:'Anakapalli',pincode:526456},
          dateOfBirth:'14-09-1996',
          married:false,
          Profession:'Software Engineers'
        };
//creating global function.
print = function(){
    console.log(Person);
    console.log(Amitabh);
    console.log(person2);
}
print();