const createDoctor = (name, speciality, address) => {
    return {
        doctorName: name,
        doctorSpeciality: speciality,
        practiceAddress: address,
    }
}

const HM = createDoctor("Hannah Martin", "Pediatrician", "111 Vandy St")
console.log(HM)

const createPet = (name, breed) => {
    return {
        petName: name,
        petBreed: breed,
    }
}

const BowWowKennels = []

const pet1 = createPet("rufus", "dog")
const pet2 = createPet("toby", "cat")
const pet3 = createPet("fido", "dog")
console.log(pet1)
console.log(pet2)
console.log(pet3)

BowWowKennels.push(pet1, pet2, pet3)
console.log(BowWowKennels)
