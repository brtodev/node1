const yariCap = process.argv.slice(2);

function daireHesap(yariCap) {
	const alan = Math.ceil(Math.PI * yariCap ** 2 - 1);
	console.log(`Alan: ${alan}`);
}

daireHesap(yariCap[0]);
