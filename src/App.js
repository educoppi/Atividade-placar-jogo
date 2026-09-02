import { useState } from 'react';
import Placar from './components/Placar';
import AcoesJogo from './components/AcoesJogo';
import Historico from './components/Historico';
import ControlesGerais from './components/ControlesGerais';
import Banner from './components/Banner';

export default function App() {
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);
  const [posseTimeA, setPosseTimeA] = useState(true); // true = Time A, false = Time B
  const [historico, setHistorico] = useState([]);

  // logica para desfazer jogada
  const [timeAnterior, setTimeAnterior] = useState(true);
  const [listaPontos, setListaPontos] = useState([]);

  function registrarPontos(pontos) {
    const timeAtual = posseTimeA ? 'Time A' : 'Time B';
    if (posseTimeA) {
      setPontosA(pontosA + pontos);
    } else {
      setPontosB(pontosB + pontos);
    }
    
    setHistorico([
      ...historico,
      `${timeAtual} marcou +${pontos} ponto(s)`
    ]);

    // falta fazer mostrar o vencedor quando bater 21 pontos

    setTimeAnterior(posseTimeA);
    
    setPosseTimeA(!posseTimeA);

    setListaPontos([...listaPontos, pontos])
  }

  function passarBola() {
    setTimeAnterior(posseTimeA);
    setPosseTimeA(!posseTimeA);
  }

  function reinicia() {
    setPontosA(0);
    setPontosB(0);
    setHistorico([]);
    setPosseTimeA(true);
  }

  function desfazJogada(){

    if (pontosA + pontosB == 0) {
      return;
    }

    setHistorico(prev => prev.slice(0, -1));

    if(timeAnterior) {
      setPosseTimeA(false);
      setPontosA(pontosA - listaPontos.at(-1));
    } else {
      setPosseTimeA(true);
      setPontosB(pontosB - listaPontos.at(-1));
    }

    setListaPontos(prev => prev.slice(0, -1));

    setTimeAnterior(!timeAnterior)

  }


  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Placar do Jogo</h1>

      <Placar
        pontosA={pontosA}
        pontosB={pontosB}
        posseTimeA={posseTimeA}
      />

      <AcoesJogo
        onPontuar={registrarPontos}
        onPassarBola={passarBola}
      />
      
      <ControlesGerais onRestart={reinicia} onDesfazer={desfazJogada}/>



      <Historico historico={historico} />
    </div>
  );
}