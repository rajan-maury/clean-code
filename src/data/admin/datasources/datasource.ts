import AdminRequest from "../request";

export interface AdminDataSource {
    createAdmin(admin: AdminRequest): AdminModel;
    getAdmin(id: string): AdminModel;
    updateAdmin(id: string, admin: AdminRequest): AdminModel;
    partialUpdateAdmin(id: string, admin: AdminRequest): AdminModel; //TODO: admin: AdminRequest will be changed since there are chances of null in request
    deleteAdmin(id: string): void;
}

export class AdminDataSourceImpl implements AdminDataSource{


    // inject mongodb in constructor
    createAdmin(admin: AdminRequest): AdminModel {
        //TODO: Mongo db funcs , catch mongo error and throw custom exception (add custom exceptions in errors.ts)
        throw new Error("Method not implemented.");
    }
    getAdmin(id: string): AdminModel {
        throw new Error("Method not implemented.");
    }
    updateAdmin(id: string, admin: AdminRequest): AdminModel {
        throw new Error("Method not implemented.");
    }
    partialUpdateAdmin(id: string, admin: AdminRequest): AdminModel {
        throw new Error("Method not implemented.");
    }
    deleteAdmin(id: string): void {
        throw new Error("Method not implemented.");
    }

}