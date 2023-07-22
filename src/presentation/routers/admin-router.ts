import express from "express"
import { CreateAdminUseCase } from "../../domain/admin/usecases/create-admin-usecase"
import AdminRequest from "../../data/admin/request"

export default function ContactsRouter(
    // getAllContactsUseCase: GetAllContactsUseCase,
    createAdminUseCase: CreateAdminUseCase
) {
    const router = express.Router()

    // router.get('/', async (req: Request, res: Response) => {
    //     try {
    //         const contacts = await getAllContactsUseCase.execute()
    //         res.send(contacts)
    //     } catch (err) {
    //         res.status(500).send({ message: "Error fetching data" })
    //     }
    // })

    router.post('/', async (req: Request, res: Response) => {

        let adminRequest = new AdminRequest(
            req.body.name,
            req.body.email,
            req.body.phone,
            req.body.brand,
            req.body.jobTitle,
            req.body.outlet,
            req.body.superAdmin,
            req.body.admin,
            req.body.permissions,
            req.body.active,
        );

        try {
            let admin = await createAdminUseCase.execute(adminRequest)
            res.statusCode = 201;
            res.json({ message: "Created" })
        } catch (err) {
            console.log(err.message)
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}