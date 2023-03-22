import ParkingSystem from "./ParkingSystem";

describe('ParkingSystem', () => {
    it('should work for slots of 1, 1, 0', () => {
        const parkingSystem = new ParkingSystem(1,1, 0)
        
        const addCar1 = parkingSystem.addCar(1)
        expect(addCar1).toEqual(true)

        const addCardTwo = parkingSystem.addCar(2)
        expect(addCardTwo).toEqual(true)

        const addCarThree = parkingSystem.addCar(3)
        expect(addCarThree).toEqual(false)

        const addCardOne2 = parkingSystem.addCar(1)
        expect(addCardOne2).toBeFalsy()
    })
})