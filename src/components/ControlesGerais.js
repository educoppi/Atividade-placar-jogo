export default function ControlesGerais({ onRestart, onDesfazer }) {
    return (
        <div>
            <button onClick={ onDesfazer }>Desfazer Jogada</button>
            <button onClick={ onRestart }>Reiniciar Partida</button>
        </div>
    );
}