class defaultController {

    constructor(request, response, entity = null) {
        this.request = request;
        this.response = response;
        this.entity = entity;
    }
    getAll() {
        this.response.json({success: true});
    }

    getById() {
        this.response.json({success: true, task: { id: this.request.params.id}});
    }

    insert() {

    }

    update() {

    }

    delete() {

    }
}

export default defaultController;