import AdminRequest from "../../../data/admin/request/index";

export interface AdminRepository {
    createAdmin(admin: AdminRequest): Promise<Admin>;
    getAdmin(id: string): Promise<Admin>;
    updateAdmin(id: string, admin: AdminRequest): Promise<Admin>;
    partialUpdateAdmin(id: string, admin: AdminRequest): Promise<Admin>; //TODO: admin: AdminRequest will be changed since there are chances of null in request
    deleteAdmin(id: string): void;
}