import AdminRequest from "../../../data/admin/request";
import { AdminRepository } from "../repositories/admin-repository";

export interface CreateAdminUseCase {
    execute(admin: AdminRequest): Promise<Admin>;
}

class CreateAdmin implements CreateAdminUseCase {
    adminRepository: AdminRepository
    constructor(adminRepository: AdminRepository) {
        this.adminRepository = adminRepository
    }
     async execute(admin: AdminRequest): Promise<Admin> {
         return await this.adminRepository.createAdmin(admin);
    }
}