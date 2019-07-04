export class DataRequest {

    state: any;

    constructor(model: any = null) {
        if (model) {
            this.state = model.state;

        }
    }
}