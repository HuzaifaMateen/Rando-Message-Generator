/* Key Concepts For Project 1
1. document.querySelector()
2.addEventListener()
3.Mth Object()
4. innerText 
5.nested Array
6. with objects
*/
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [
	{
		quote: `“True terror is to wake up one morning and discover that your high school class is running the country.”`,
		person: `Kurt Vonnegut`
	},
	{
		quote: `“Always forgive your enemies; nothing annoys them so much.”`,
		person: `Oscar Wilde`
	},
	{
		quote: `“If you want to know what God thinks of money, just look at the people he gave it to.”`,
		person: `Dorothy Parker`
	},
	{
		quote: `“Doing nothing is very hard to do. You never know when you’re finished.”`,
		person: `Leslie Nielsen`
	},
	{
		quote: ` “When in doubt, look intelligent.”`,
		person: `Garrison Keillor`
	},
	{
		quote: ` “The older you get the more you realize that kindness is synonymous with happiness.”`,
		person: `Lionel Barrymore`
	},
	{
		quote: `“Nobody has ever measured, even the poets, how much a heart can hold."`,
		person: `Zelda Fitzgerald`
	},
	{
		quote: `“The only thing worse than being talked about is not being talked about.” `,
		person: `Oscar Wilde`
	},
	{
		quote: `“I would rather sit on a pumpkin and have it all to myself, than to be crowded on a velvet cushion.”`,
		person: `Henry David Thoreau`
	},
	{
		quote: `“A man always has two reasons for doing anything—a good reason and the real reason.”`,
		person: `J. Pierpont Morgan`
	},
	{
		quote: `“It’s not necessary to take a person’s advice to make him feel good—all you have to do is ask it.”`,
		person: `Richard Armour`
	},
	{
		quote: `“One of the lessons of history is that nothing is often a good thing to do and always a clever thing to say.”`,
		person: `Will Durant`
	},
];

btn.addEventListener('click', function(){
	
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;
})