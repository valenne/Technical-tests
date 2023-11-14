export default function Item({ text, handleClick }: { text: string; handleClick: () => void }) {
	return (
		<li>
			{text} <button onClick={handleClick}>Delete</button>
		</li>
	);
}
