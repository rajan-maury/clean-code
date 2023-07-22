class AdminModel extends Admin {
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
        super(
        name,
        email,
        phone,
        brand,
        jobTitle,
        outlet,
        superAdmin,
        admin,
        permissions,
        active
        );
    }
}
