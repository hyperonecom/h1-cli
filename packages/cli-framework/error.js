export class CliError extends Error {
}

export class MissingArgumentError extends CliError {
    constructor(message, missing = []) {
        super(message);
        this.missing = missing;
    }
}

export class NotFoundCommandError extends CliError {
    constructor(message, suggestion = []) {
        super(message);
        this.suggestion = suggestion;
    }
}

export class UnknownOptionError extends CliError {
    constructor(message, suggestion = []) {
        super(message);
        this.suggestion = suggestion;
    }
}

export class AlreadyLoadedError extends CliError {
    constructor(message) {
        super(message);
    }
}
