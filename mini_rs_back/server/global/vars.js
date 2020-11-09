const CODES = {
    100: 'Succès',
    101: 'Erreur interne au serveur',
    102: 'Service indisponible',
};

const TABLES = {}
const STATUS = {
    SUCESS: "Sucess",
    FAILED: "Failed",
    PENDING: "Pending"
}
const response = {
    body: "",
    code: 100,
    status: "Success",
    message: ""
}
const NIVEAU = {
    PARLE: 1,
    ECRIT: 2,
    COMPREHENSION: 3
}
export {
    TABLES,
    CODES,
    STATUS,
    response
};