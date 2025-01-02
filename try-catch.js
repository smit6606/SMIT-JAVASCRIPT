class ValidationError extends Error {
    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name);
        console.log(error.printCustomerMessage());
    } else {
        console.log("Unknown error", error);
        throw error;
    }
}
