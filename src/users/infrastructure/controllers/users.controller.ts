import { Controller } from "@nestjs/common";

@Controller("users")
export class UsersController {
    constructor() {}

    // @Get()
    // getAll() {
    //     return this.usersService.findAll();
    // }
    //
    // @Post()
    // create(@Body() body) {
    //     return this.usersService.create(body.name);
    // }
}

/**
 * Reglas de negocio
 * Control de errores
 * Test
 * Optional: Validaciones.
 *
 * Docker: Run node
 */
