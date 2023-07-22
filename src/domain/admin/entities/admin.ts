class Admin{
    name: string;
    email: string;
    phone: string;
    brand: string;
    jobTitle: string;
    superAdmin: boolean;
    admin: boolean;
    permissions: number[]; // Assuming the permissions are represented as an array of strings
    active: boolean;
    outlet: string; // Replace 'any' with the specific type of 'outlet' if possible

    constructor(
        name: string,
        email: string,
        phone: string,
        brand: string,
        jobTitle: string,
        outlet: string,
        superAdmin: boolean = false,
        admin: boolean = false,
        permissions: number[] = [],
        active: boolean = true,
    ) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.brand = brand;
        this.jobTitle = jobTitle;
        this.superAdmin = superAdmin;
        this.admin = admin;
        this.permissions = permissions;
        this.active = active;
        this.outlet = outlet;
    }
}