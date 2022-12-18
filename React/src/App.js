import { React, useState } from 'react';
import coffe from './coffe.json'
function App() {

	/*Declaring static variables*/
	const list_coffe = coffe;
	const list_ingredients = ["Coffee", "1oz Espresso", "Foamed milk", "Ice cream", "Cream", "Espresso", "2oz Espresso", "Traditional", "Sweet", "Panela", "Steamed Milk", "Long pulled espresso", "Chocolate", "Sugar", "Hot Water", "1oz Steamed Milk", "Short pulled espresso", "Whiskey", "Foam"]


	/*Declaration of hooks*/
	const [url, setUrl] = useState('https://img.freepik.com/premium-vector/holding-cup-of-hot-coffee-2d-vector-isolated-illustration_151150-6819.jpg?w=740d.jpg')
	const [title, setTitle] = useState('К сожалению, такой кофе, вы приготовить не сможете')
	const [description, setDescription] = useState('Может быть попробуете смешать что-то другое?')
	var [list_picked_ingredient, setIngredient] = useState([])


	/*Declaration of an arrow function that is hung on an event in the <input> element.
	The algorithm of the function:
	The input parameter of the function is the <input> parameters from the returned document.
	If the "check" parameter is True, it is added to the array that stores the selected ingredients, if "check" is False, it is removed from this array.
	Next, a search is performed among the entire list of input data (json file) by the selected parameters, and in accordance with one of the variations outputs it. 
	Otherwise, it transmits information that there are no suitable options.
	*/
	const onchange = (e) => {
		let k = 0;
		if (e.target.checked) {
			var c = list_picked_ingredient
			c.push(e.target.value)
			setIngredient(c)
		}
		else {
			c = list_picked_ingredient
			c.splice(c.indexOf(e.target.value), 1)
			setIngredient(c)

		}
		var f = list_picked_ingredient.sort();
		list_picked_ingredient = f;
		console.log(list_picked_ingredient)
		for (var i = 0; i < list_coffe.length; i++) {
			if (JSON.stringify(c) === JSON.stringify(list_coffe[i].ingredients.sort())) {
				setUrl(list_coffe[i].image)
				setTitle(list_coffe[i].title)
				setDescription(list_coffe[i].description)
				k = k + 1
				break
			}
		}
		if (k === 0) {
			setUrl('https://img.freepik.com/premium-vector/holding-cup-of-hot-coffee-2d-vector-isolated-illustration_151150-6819.jpg?w=740')
			setTitle('Вы ничего не выбрали, добавьте ингридиенты!')
			setDescription('Может быть просто двойной еспрессо?')
		}
	}
	/*Returned Html data*/
	return (
		<div className="App">
			<table className="table">
				<tbody>
					{[...Array(5)].map((x, i) =>
						<tr>
							{[...Array(parseInt(list_ingredients.length / 4))].map((y, j) =>
								<td>
									<input type="checkbox" value={list_ingredients[i + 5 * j]} onChange={onchange} style={{ margin: "20px" }}></input>
									<span>{list_ingredients[i + 5 * j]}</span>
								</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
			<center>
				<div>
					<img class="cimg" id="coffimg" src={url} width="300px" height="300px" alt=""/><br />
					<h3>{title}</h3>
					<h4>{description}</h4>
				</div>
			</center>
		</div>
	);
}

export default App;
