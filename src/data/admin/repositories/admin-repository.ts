import { AdminRepository } from "../../../domain/admin/repositories/admin-repository";
import AdminRequest from "../request";

export class AdminRepositoryImpl implements AdminRepository{
    createAdmin(admin: AdminRequest): Promise<Admin> {
        throw new Error("Method not implemented.");
        //TODO: Give req to Datasource and get model
        //TODO: return entity or failure
    }
    getAdmin(id: string): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    updateAdmin(id: string, admin: AdminRequest): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    partialUpdateAdmin(id: string, admin: AdminRequest): Promise<Admin> {
        throw new Error("Method not implemented.");
    }
    deleteAdmin(id: string): void {
        throw new Error("Method not implemented.");
    }
   

}