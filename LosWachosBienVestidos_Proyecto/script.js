const NUMERO_INTERNACIONAL = "5491140991252";
const NUMERO_VISIBLE = "11-4099-1252";

function contactarWacho(producto) {
    alert(`Contactanos al ${NUMERO_VISIBLE}`);
    const mensaje = encodeURIComponent(`Hola, me interesa el ${producto}.`);
    window.location.href = `https://wa.me/${NUMERO_INTERNACIONAL}?text=${mensaje}`;
}

function contactarFlotante() {
    alert(`Contactanos al ${NUMERO_VISIBLE}`);
    window.location.href = `https://wa.me/${NUMERO_INTERNACIONAL}`;
}
