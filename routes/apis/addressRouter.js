import { Router } from "express";

import ListAddressController from "../../app/Controllers/AddressApi/ListAddressController.js";
import GetAddressController from "../../app/Controllers/AddressApi/GetAddressController.js";
import CreateAddressController from "../../app/Controllers/AddressApi/CreateAddressController.js";
import UpdateAddressController from "../../app/Controllers/AddressApi/UpdateAddressController.js";
import DeleteAddressController from "../../app/Controllers/AddressApi/DeleteAddressController.js";

export default (() => {

    const router = Router();

    /**
     * LIST
     */
    router.get("/", ListAddressController);

    /**
     * GET
     */
    router.get("/:id", GetAddressController);

    /**
     * CREATE
     */
    router.post("/", CreateAddressController);

    /**
     * UPDATE
     */
    router.put("/:id", UpdateAddressController);

    /**
     * DELETE
     */
    router.delete("/:id", DeleteAddressController);

    return router;

})();