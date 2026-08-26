export default function Placar({ pontosA, pontosB, posseTimeA }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '22px' }}>
                <div style={{ fontWeight: posseTimeA ? 'bold' : 'normal' }}>
                    Time A {posseTimeA && ' '}: {pontosA}
                </div>
                <div style={{ fontWeight: !posseTimeA ? 'bold' : 'normal' }}>
                    Time B {!posseTimeA && ' '}: {pontosB}
                </div>
            </div>
            <p style={{ fontSize: '18px' }}>
                Ataque Atual: <strong>{posseTimeA ? 'Time A' : 'Time B'}</strong>
            </p>
        </div>
    );
}