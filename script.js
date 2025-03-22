// Predefined vehicle data
const vehicles = {
    "10/10000": {
        jobcard: "1011000000",
        owner: "John",
        vin: "1HGCM82633A123456",
        advisor: "XXXXXXXX",
        contact: "00000000",
        status: "Vehicle is ready to be received by customer"
    },
    "10/10001": {
        jobcard: "1011000001",
        owner: "Jane",
        vin: "2FTRX18L1XCA12345",
        advisor: "XXXXXXXX",
        contact: "00000000",
        status: "Vehicle is under diagnosis"
    },
    "10/10002": {
        jobcard: "1011000002",
        owner: "Alice",
        vin: "3GCPKTE34BG123456",
        advisor: "XXXXXXXX",
        contact: "00000000",
        status: "Vehicle report is ready"
    },
    "10/10003": {
        jobcard: "1011000003",
        owner: "Bob",
        vin: "4Y1SL65848Z411439",
        advisor: "XXXXXXXX",
        contact: "00000000",
        status: "Vehicle is undergoing repairs"
    }
};

function confirmVehicle() {
    const plateNumber = document.getElementById("licensePlate").value.trim();
    
    if (plateNumber in vehicles) {
        const vehicle = vehicles[plateNumber];
        alert(`Jobcard Number: ${vehicle.jobcard}
Vehicle License Plate: ${plateNumber}
Owner: ${vehicle.owner}
VIN: ${vehicle.vin}
Service Advisor: ${vehicle.advisor}
Contact: ${vehicle.contact}
Status: ${vehicle.status}`);
    } else {
        alert("Sorry, your vehicle is not found.");
    }
}
