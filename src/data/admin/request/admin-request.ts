class AdminRequest extends AdminModel {
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
      active,
    );
  }
}

export default AdminRequest;

// export interface AdminRequest{
//   name: string
//   email: string
//   phone: string
//   brand: string
//   jobTitle: string
//   outlet: string
//   superAdmin: boolean
//   admin: boolean
//   permissions: number[]
//   active: boolean
// }