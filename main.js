const stickers = document.querySelectorAll(".sticker");
const totalStickers = document.querySelector("#total-stickers");

function actualizarTotalStickers() {
  let total = 0;
  for (const sticker of stickers) {
    total += Number(sticker.querySelector("input").value);
  }

  if (total > 10) {
    totalStickers.textContent = "Llevas demasiados stickers";
  } else {
    totalStickers.textContent = `Llevas ${total} stickers`;
  }
}

for (const sticker of stickers) {
    sticker.querySelector("input").setAttribute("min", "0");
  sticker.querySelector("input").addEventListener("change", actualizarTotalStickers);
}

actualizarTotalStickers();
