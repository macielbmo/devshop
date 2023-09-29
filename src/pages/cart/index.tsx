export default function Cart() {
  return (
    <div>
      <main className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">
          Meu Carrinho
        </h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
          <img
            className="w-28"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1551489688005" 
            alt="Foto do produto" />

            <strong>Preço: R$1.290,00</strong>

            <div className="flex gap-3">
              <button className="bg-slate-600 px-2 rounded text-white flex items-center justify-center">
                -
              </button>

              <span>2</span>

              <button className="bg-slate-600 px-2 rounded text-white flex items-center justify-center">
                +
              </button>
            </div>

            <strong className="float-right">
              SubTotal: R$2.580,00
            </strong>
        </section>

        <div>
          <p className="font-bold mt-4">Total: R$2.580,00</p>
        </div>
      </main>
    </div>
  )
}