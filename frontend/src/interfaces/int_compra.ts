export interface CompraRequest {
    id_pessoa: number;
    id_produto: number;
    nome: string;
    cpf: string;
    email: string;
}

export interface CompraResponse {
    "dados compra": {
        cliente: {
            nome: string;
            cpf: string;
            email: string;
        };
        produto: {
            nome: string;
            preco: number;
            sku: string;
        };
        data_compra: string;
        horario_compra: string;
    };
    compra: {
        status: string;
        message: string;
        id_compra: number;
    };
}

export interface CompraErrorResponse {
    status: string;
    message: string;
}
