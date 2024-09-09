export default class GenericException extends Error{
    code;
    constructor(code, message) {
        super(message)
        this.code=code;
    }
}