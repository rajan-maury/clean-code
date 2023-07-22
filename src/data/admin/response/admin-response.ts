class AdminResponse extends AdminModel {
  id: string;

  constructor(
    name: string,
    email: string,
    phone: string,
    brand: string,
    jobTitle: string,
    permissions: number[],
    outlet: string,
    id: string,
    active: boolean = false,
    superAdmin: boolean = false,
    admin: boolean = false,
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
    this.id = id;
  }
}

export default AdminResponse;


// export default interface AdminResponse{
//   name: string
//   email: string
//   phone: string
//   brand: string
//   jobTitle: string
//   permissions: number[]
//   outlet: string
//   id: string
//   active: boolean
//   superAdmin: boolean 
//   admin: boolean 
// }
