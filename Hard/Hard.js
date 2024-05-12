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

    return {
        patient1: {
            getName: function () {
                return PII.patient1.name;
            },
            getSSN: function () {
                return PII.patient1.SSN;
            }
        },
        patient2: {
            getName: function () {
                return PII.patient2.name;
            },
            getSSN: function () {
                return PII.patient2.SSN;
            }
        },
        patient3: {
            getName: function () {
                return PII.patient3.name;
            },
            getSSN: function () {
                return PII.patient3.SSN;
            }
        },
        patient4: {
            getName: function () {
                return PII.patient4.name;
            },
            getSSN: function () {
                return PII.patient4.SSN;
            }
        }
    };
};


console.log(privateInfo().patient1.name);
console.log(privateInfo().patient1.SSN);
console.log(privateInfo().patient2.name);
console.log(privateInfo().patient2.SSN);

console.log(privateInfo().patient1.getName());
console.log(privateInfo().patient1.getSSN());
console.log(privateInfo().patient2.getName());
console.log(privateInfo().patient2.getSSN());
console.log(privateInfo().patient3.getName());
console.log(privateInfo().patient3.getSSN());

// Example below

// Output: Undefined
// console.log(patient2.names); 
// Output: Undefined
//  console.log(patient2.ssn); 
// Output: John
//  console.log(patient2.getName());
// Output: 123-45-6789
//  console.log(patient2.getSSN()); 