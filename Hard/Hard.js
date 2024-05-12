function privateInfo() {
    const PII = {
        patient1: {
            name: "Mary",
            SSN: "000-000-0000",
        },

        patient2: {
            name: "Stuart",
            SSN: "111-111-1111"
        },

        patient3: {
            name: "Monny",
            SSN: "222-222-2222"
        },

        patient4: {
            name: "Cabrera",
            SSN: "333-333-3333"
        }
    }
    return function () {
        return PII
    }
};





console.log(privateInfo().PII.patient1.name);

// Example below

// Output: Undefined
// console.log(patient2.names); 
// Output: Undefined
//  console.log(patient2.ssn); 
// Output: John
//  console.log(patient2.getName());
// Output: 123-45-6789
//  console.log(patient2.getSSN()); 