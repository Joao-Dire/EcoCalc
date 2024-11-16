import { useState } from "react";
import axios from "axios";

export default function Calculator() {
  const [consumoMensal, setConsumoMensal] = useState<string>("");
  const [custoInstalacao, setCustoInstalacao] = useState<string>("");
  const [economia, setEconomia] = useState<number | null>(null);
  const [retorno, setRetorno] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const calcular = async () => {
    if (consumoMensal && custoInstalacao) {
      try {
        const response = await axios.get(
          `http://localhost:8080/calcular`, {
            params: {
              consumoMensal: Number(consumoMensal),
              custoInstalacao: Number(custoInstalacao)
            }
          });

        setEconomia(response.data.economiaMensal);
        setRetorno(response.data.tempoRetorno);
        setError("");
      } catch (err) {
        setError("Erro ao calcular. Verifique os dados e tente novamente.");
      }
    }
  };

  const handleConsumoMensalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setConsumoMensal(value);
    }
  };

  const handleCustoInstalacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setCustoInstalacao(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4F7942] p-4">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#6BBF59] mb-12">Calculadora de Energia Solar</h1>

        <div className="mb-6">
          <label htmlFor="consumoMensal" className="text-xl font-semibold text-[#6BBF59]">Consumo Mensal (kWh):</label>
          <input
            type="text"
            id="consumoMensal"
            value={consumoMensal}
            onChange={handleConsumoMensalChange}
            className="mt-2 p-3 w-full rounded-md border border-gray-300"
            placeholder="Digite o consumo mensal em kWh"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="custoInstalacao" className="text-xl font-semibold text-[#6BBF59]">Custo da Instalação (R$):</label>
          <input
            type="text"
            id="custoInstalacao"
            value={custoInstalacao}
            onChange={handleCustoInstalacaoChange}
            className="mt-2 p-3 w-full rounded-md border border-gray-300"
            placeholder="Digite o custo da instalação"
          />
        </div>

        <button
          onClick={calcular}
          className="bg-[#6BBF59] text-white font-semibold py-3 px-6 rounded-md w-full mt-6"
        >
          Calcular
        </button>

        {error && (
          <div className="mt-6 text-red-500 text-center">
            <p>{error}</p>
          </div>
        )}

        {economia !== null && retorno !== null && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-[#6BBF59]">Resultados:</h2>
            <p className="text-[#6BBF59] mt-4">Economia Mensal Estimada: R$ {economia.toFixed(2)}</p>
            <p className="text-[#6BBF59] mt-4">Tempo de Retorno do Investimento: {retorno.toFixed(1)} anos</p>
          </div>
        )}
      </section>
    </div>
  );
}
