export default function Historico({ historico }) {
    return (
        <div>
            <h3>Histórico de Jogadas</h3>
            {historico.length === 0 ? (
                <p style={{ color: '#64748b' }}>Nenhuma jogada registrada ainda.</p>
            ) : (
                <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                    {historico.map((jogada, index) => (
                        <li key={index}>{jogada}</li>

                    ))}
                </ul>
            )}
        </div>
    );
}