import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { criarCompra } from '../../services/compras_service';
import './checkout.css';

interface CheckoutState {
    id_produto: number;
    nome_produto: string;
    preco_produto: string;
    foto_produto: string;
}

export default function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as CheckoutState | null;

    const [idPessoa, setIdPessoa] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [idCompra, setIdCompra] = useState<number | null>(null);

    // Se não tem dados do produto, redireciona para home
    if (!state) {
        return (
            <div className="checkout-container">
                <div className="checkout-card">
                    <div className="checkout-empty">
                        <span className="checkout-empty-icon">🛒</span>
                        <h2>Nenhum produto selecionado</h2>
                        <p>Volte à página inicial para escolher um produto.</p>
                        <button className="checkout-btn-back" onClick={() => navigate('/')}>
                            ← Voltar às ofertas
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const handleConcluirCompra = async () => {
        // Validação simples dos campos
        if (!idPessoa.trim() || !nome.trim() || !cpf.trim() || !email.trim()) {
            setError('Preencha todos os campos para continuar.');
            return;
        }

        const idPessoaNum = parseInt(idPessoa, 10);
        if (isNaN(idPessoaNum) || idPessoaNum <= 0) {
            setError('Informe um ID de usuário válido.');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const resultado = await criarCompra({
                id_pessoa: idPessoaNum,
                id_produto: state.id_produto,
                nome: nome.trim(),
                cpf: cpf.trim(),
                email: email.trim(),
            });

            // Verifica se a API retornou erro
            if (resultado.status && resultado.status !== '200') {
                setError(resultado.message || 'Erro ao realizar compra.');
                return;
            }

            // Compra bem-sucedida
            const numCompra = resultado.compra?.id_compra ?? resultado.id_compra ?? 0;
            setIdCompra(numCompra);
            setCompraFinalizada(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido ao realizar compra.');
        } finally {
            setLoading(false);
        }
    };

    // Tela de sucesso
    if (compraFinalizada) {
        return (
            <div className="checkout-container">
                <div className="checkout-card checkout-success-card">
                    <div className="checkout-success">
                        <div className="success-icon-wrapper">
                            <span className="success-icon">✓</span>
                        </div>
                        <h1 className="success-title">Obrigado pela compra!</h1>
                        <p className="success-order-number">
                            Número da compra: <strong>#{String(idCompra).padStart(4, '0')}</strong>
                        </p>
                        <div className="success-details">
                            <p><strong>Produto:</strong> {state.nome_produto}</p>
                            <p><strong>Valor:</strong> {state.preco_produto}</p>
                        </div>
                        <button className="checkout-btn-back" onClick={() => navigate('/')}>
                            ← Voltar às ofertas
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Tela do formulário de checkout
    return (
        <div className="checkout-container">
            <div className="checkout-card">
                <button className="checkout-btn-back-top" onClick={() => navigate('/')}>
                    ← Voltar
                </button>

                <h1 className="checkout-title">Finalizar Compra</h1>

                {/* Resumo do produto */}
                <div className="checkout-product-summary">
                    <img
                        src={state.foto_produto}
                        alt={state.nome_produto}
                        className="checkout-product-image"
                    />
                    <div className="checkout-product-details">
                        <h3 className="checkout-product-name">{state.nome_produto}</h3>
                        <p className="checkout-product-price">{state.preco_produto}</p>
                    </div>
                </div>

                <div className="checkout-divider" />

                {/* Formulário de dados do usuário */}
                <h2 className="checkout-section-title">Dados do Comprador</h2>
                <p className="checkout-section-subtitle">
                    Informe seus dados cadastrados para verificação.
                </p>

                <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); handleConcluirCompra(); }}>
                    <div className="checkout-field">
                        <label htmlFor="checkout-id">ID do Usuário</label>
                        <input
                            id="checkout-id"
                            type="number"
                            placeholder="Ex: 1"
                            value={idPessoa}
                            onChange={(e) => setIdPessoa(e.target.value)}
                            min="1"
                        />
                    </div>

                    <div className="checkout-field">
                        <label htmlFor="checkout-nome">Nome</label>
                        <input
                            id="checkout-nome"
                            type="text"
                            placeholder="Seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="checkout-field-row">
                        <div className="checkout-field">
                            <label htmlFor="checkout-cpf">CPF</label>
                            <input
                                id="checkout-cpf"
                                type="text"
                                placeholder="00000000000"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                maxLength={11}
                            />
                        </div>

                        <div className="checkout-field">
                            <label htmlFor="checkout-email">Email</label>
                            <input
                                id="checkout-email"
                                type="email"
                                placeholder="email@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="checkout-error">
                            <span className="checkout-error-icon">⚠</span>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="checkout-btn-submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="checkout-loading">
                                <span className="checkout-spinner" />
                                Processando...
                            </span>
                        ) : (
                            'Concluir Compra'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
