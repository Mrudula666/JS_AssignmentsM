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
abhishek.fname = 'Abhishek';
    abhishek.age = 44;
    abhishek.dateOfBirth= '21-01-1980';
    console.log(abhishek.fname+"\n"+
                Amitabh.lname+"\n"+
                abhishek.age+"\n"+
                Amitabh.skills+"\n"+
                Amitabh.address.city+"\n"+
                Amitabh.address.pincode+"\n"+
                abhishek.dateOfBirth+"\n"+
                Amitabh.married+"\n"+
                Amitabh.Profession);
    var Aradhya = Object.create(abhishek);//creating the Aradhya Object using Abhishek.
    //Assinging the un common Properites
    Aradhya.fname = "Aradhya";
    Aradhya.age = 8;
    Aradhya.skills = ['Dancing','Acting','Studying'];
    Aradhya.dateOfBirth = '04-05-2010';
    Aradhya.married=false;
    Aradhya.Profession='Student';
    console.log(Aradhya.fname+"\n"+
                abhishek.lname+"\n"+//Taking address from ABHISHEK OBJECT
                Aradhya.age+"\n"+
                Aradhya.skills+"\n"+
                Amitabh.address.city+"\n"+//taking address from AMITABH OBJECT
                Amitabh.address.pincode+"\n"+
                Aradhya.dateOfBirth+"\n"+
                Aradhya.married+"\n"+
                Aradhya.Profession);