import React from 'react'

const products = [
	{ id: 1, name: 'Сыр', price: 100 },
	{ id: 2, name: 'Хлеб', price: 200 },
	{ id: 3, name: 'Молоко', price: 300 },
	{ id: 4, name: 'Кофе', price: 400 },
	{ id: 5, name: 'Яблоки', price: 120 },
]

function Table() {
	const rows = products.map(item => (
		<tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.price}</td>
		</tr>
	))

	return (
		<div>
			<h3>Мои товары - новый компонент таблица</h3>
			<table>
				<thead>
					<tr>
						<td>Продукт</td>
						<td>Цена</td>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

export default Table
