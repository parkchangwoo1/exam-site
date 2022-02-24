// import { request } from 'src/utils/axios';

const tempChartData = {
	datasets: [
		{
			type: 'line',
			label: '인공지능',
			borderColor: 'rgb(54, 162, 235)',
			borderWidth: 2,
			data: [
				{ x: '2019-4', y: 8 },
				{ x: '2020-1', y: 6 },
				{ x: '2020-2', y: 9 },
				{ x: '2020-3', y: 12 },
				{ x: '2020-4', y: 18 },
			],
			yAxisID: 'y',
		},
		{
			type: 'line',
			label: '공학 4.0',
			backgroundColor: 'rgb(255, 99, 132)',
			data: [
				{ x: '2019-4', y: 14 },
				{ x: '2020-1', y: 20 },
				{ x: '2020-2', y: 32 },
				{ x: '2020-3', y: 41 },
				{ x: '2020-4', y: 15 },
			],
			borderColor: 'red',
			borderWidth: 2,
			yAxisID: 'y',
		},
		{
			type: 'line',
			label: '운영효율성',
			borderColor: 'rgb(75, 192, 192)',
			borderWidth: 2,
			data: [
				{ x: '2019-4', y: 16 },
				{ x: '2020-1', y: 17 },
				{ x: '2020-2', y: 19 },
				{ x: '2020-3', y: 16 },
				{ x: '2020-4', y: 18 },
			],
			yAxisID: 'y',
		},
	],
};

/*-------------------------------------------------------------- */

export const getChartData = async () => {
	// const res = await request("GET", "url", {data:'data'});

	return tempChartData;
};
