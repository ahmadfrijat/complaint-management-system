import axios from 'axios';
import { useState } from 'react';

const complaintApi = 'http://localhost:5000/complaint';
const useAjax = () => {

	const [list, setList] = useState([]);
   


	const _addItem = async (item) => {
		item.due = new Date();
		const results = await axios.post(complaintApi, item);
		console.log(results)

		setList([...list, results.data]);
	};

	const _toggleComplete = async (id) => {
		let item = list.filter((i) => i._id === id)[0] || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${complaintApi}/${id}`;
			const results = await axios.put(url, item);
			setList(
				list.map((listItem) =>
					listItem._id === item._id ? results.data : listItem,
				),
			);
		}
	};

	const _getTodoItems = async () => {
		const results = await axios.get(complaintApi);
		setList([...results.data]);
	};

	const _deleteItems = async (id) => {
		let item = list.find((i) => i._id === id) || {};

		if (item._id) {
			item.complete = !item.complete;
			let url = `${complaintApi}/${id}`;

			const results = await axios.delete(url);
			setList(list.filter((listItem) => listItem._id !== results.data._id));
		}
	};

	return [list, _addItem, _toggleComplete, _getTodoItems, _deleteItems];
};

export default useAjax;