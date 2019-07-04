export class User {
    cedula: string;
    password: string;
    constructor(model: any = null) {
        if (model) {
            this.cedula = model.cedula;
            this.password = model.password;
        }
    }

}
