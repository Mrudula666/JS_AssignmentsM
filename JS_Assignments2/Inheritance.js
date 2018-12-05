var Amitabh = {fname:"AMITHABH",
            lname:"BHACHAN",
            age:66,
            skills:['Acting','Philanthropist'],
            address: { city:'Mumbai',pincode:400708},
            dateOfBirth:'17-09-1958',
            married:true,
            Profession:'ACTOR'
          };
        console.log(Amitabh);
var abhishek = Object.create(Amitabh);//Creating ABHISHEK object with reference to AMITABH object
//assing the UnCommon Properities....
    abhishek.fname = 'Abhishek';
    abhishek.age = 44;
    abhishek.dateOfBirth= '21-01-1976';
    //abhishek.lname = Amitabh.lname;//Assigning the common properties to abhishek.
    //abhishek.skills = Amitabh.skills;
    //abhishek.address = abhishek.address;
    //abhishek.married = Amitabh.married;
    //abhishek.Profession = Amitabh.Profession;
console.log(abhishek.fname+"\n"+Amitabh.lname+"\n"+abhishek.age+"\n"+Amitabh.skills+"\n"+
Amitabh.address.city+"\n"+Amitabh.address.pincode+"\n"+abhishek.dateOfBirth+"\n"+Amitabh.married+"\n"+Amitabh.Profession);