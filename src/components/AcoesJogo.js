export default function AcoesJogo({ onPontuar, onPassarBola }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
            <button onClick={() => onPontuar(1)}>+1 Ponto</button>
            <button onClick={() => onPontuar(2)}>+2 Pontos</button>
            <button onClick={() => onPontuar(3)}>+3 Pontos</button>
            <button onClick={onPassarBola}>Trocar Posse </button>
        </div>
    );
}