import React from 'react'

const products = [
	{ id: 1, name: 'Сыр', price: 100 },
	{ id: 2, name: 'Хлеб', price: 200 },
	{ id: 3, name: 'Молоко', price: 300 },
	{ id: 4, name: 'Кофе', price: 400 },
	{ id: 5, name: 'Яблоки', price: 120 },
]
function Product() {
	return (
		<div>
			<h3>Мои товары - новый компонент</h3>
			<p>Первый способ</p>
			<div>
				Товар {products[0].name} стоит {products[0].price}
			</div>
			<div>
				Товар {products[1].name} стоит {products[1].price}
			</div>
			<div>
				Товар {products[2].name} стоит {products[2].price}
			</div>
			<div>
				Товар {products[3].name} стоит {products[3].price}
			</div>
			<div>
				Товар {products[4].name} стоит {products[4].price}
			</div>
			<p>Второй способ</p>
			<ul>
				{products.map(product => (
					<li>
						Товар {product.name} стоит {product.price} руб.
					</li>
				))}
			</ul>
		</div>
	)
}
export default Product
